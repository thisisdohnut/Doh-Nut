import React, { useEffect, useRef, useState, useCallback } from 'react';
import { UserProfile } from '../../types';
import {
  Play,
  RotateCcw,
  Pause,
  Volume2,
  VolumeX,
  Trophy,
  Heart,
  Zap,
  Sparkles,
  Award,
  ArrowLeft,
  ArrowRight,
  ShieldAlert,
  Flame,
  Info,
  Gamepad2
} from 'lucide-react';
import { DohBoyMascot } from './DohBoyMascot';
import { DohNutLogo } from './DohNutLogo';

interface DohCatcherGameProps {
  userProfile?: UserProfile;
  onUpdateProfile?: (updated: UserProfile) => void;
}

interface FallingItem {
  id: number;
  x: number;
  y: number;
  radius: number;
  type: 'berry' | 'cyan' | 'golden' | 'master' | 'burnt' | 'coffee' | 'heart';
  points: number;
  speed: number;
  rotation: number;
  rotSpeed: number;
  color: string;
  glazeColor: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  shape: 'circle' | 'sprinkle' | 'spark';
}

interface FloatingText {
  id: number;
  x: number;
  y: number;
  text: string;
  color: string;
  alpha: number;
  scale: number;
}

// Sound Synthesizer via Web Audio API
class GameAudio {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = true;

  constructor() {
    // Lazy init audio context on first interaction
  }

  public setEnabled(val: boolean) {
    this.soundEnabled = val;
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.ctx = new AudioCtxClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playCatch(type: string) {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      const now = this.ctx.currentTime;

      if (type === 'master') {
        // Glorious arpeggio
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.15); // C6
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'golden') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(659.25, now); // E5
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.1); // A5
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
        osc.start(now);
        osc.stop(now + 0.18);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.08);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
        osc.start(now);
        osc.stop(now + 0.14);
      }
    } catch {
      // Audio fallback
    }
  }

  playHazard() {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      const now = this.ctx.currentTime;
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.2);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch {
      // Ignore
    }
  }

  playGameOver() {
    if (!this.soundEnabled) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      [330, 293.66, 261.63, 196].forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        const startTime = now + i * 0.12;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.2, startTime);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.18);
        osc.start(startTime);
        osc.stop(startTime + 0.2);
      });
    } catch {
      // Ignore
    }
  }
}

const gameAudio = new GameAudio();

export const DohCatcherGame: React.FC<DohCatcherGameProps> = ({
  userProfile,
  onUpdateProfile
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Game States
  const [gameState, setGameState] = useState<'ready' | 'playing' | 'paused' | 'gameover'>('ready');
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(() => {
    if (userProfile?.donutGameHighScore) return userProfile.donutGameHighScore;
    const saved = localStorage.getItem('dohnut_catcher_highscore');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [lives, setLives] = useState<number>(3);
  const [combo, setCombo] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(1);
  const [frenzyTimer, setFrenzyTimer] = useState<number>(0);
  const [soundOn, setSoundOn] = useState<boolean>(true);
  const [gameDifficulty, setGameDifficulty] = useState<'casual' | 'street' | 'frenzy'>('street');

  // Stats for gameover screen
  const [caughtCount, setCaughtCount] = useState<number>(0);
  const [perfectStreak, setPerfectStreak] = useState<number>(0);
  const maxStreakRef = useRef<number>(0);
  const caughtCountRef = useRef<number>(0);
  const highScoreRef = useRef<number>(highScore);
  highScoreRef.current = highScore;

  const userProfileRef = useRef(userProfile);
  userProfileRef.current = userProfile;
  const onUpdateProfileRef = useRef(onUpdateProfile);
  onUpdateProfileRef.current = onUpdateProfile;

  // References for live animation loop
  const basketRef = useRef({
    x: 300,
    y: 520,
    width: 100,
    height: 48,
    targetX: 300,
    speed: 12
  });

  const keysPressed = useRef<{ [key: string]: boolean }>({});
  const itemsRef = useRef<FallingItem[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const floatingTextsRef = useRef<FloatingText[]>([]);
  const nextItemId = useRef<number>(1);
  const nextTextId = useRef<number>(1);
  const lastSpawnTime = useRef<number>(0);
  const gameTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);

  const scoreRef = useRef(score);
  scoreRef.current = score;
  const livesRef = useRef(lives);
  livesRef.current = lives;
  const comboRef = useRef(combo);
  comboRef.current = combo;
  const multiplierRef = useRef(multiplier);
  multiplierRef.current = multiplier;
  const gameStateRef = useRef(gameState);
  gameStateRef.current = gameState;

  // Toggle sound
  const handleToggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    gameAudio.setEnabled(next);
  };

  // Particle creator
  const createExplosion = (x: number, y: number, color: string, isBig = false) => {
    const count = isBig ? 24 : 12;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * (isBig ? 6 : 4) + 1.5;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        size: Math.random() * 5 + 3,
        color: i % 2 === 0 ? color : ['#FFD23F', '#297FC1', '#EF9FBD', '#FDEFEB'][Math.floor(Math.random() * 4)],
        alpha: 1,
        life: 1,
        shape: i % 3 === 0 ? 'spark' : i % 3 === 1 ? 'sprinkle' : 'circle'
      });
    }
  };

  // Floating text creator
  const addFloatingText = (x: number, y: number, text: string, color = '#FDEFEB') => {
    floatingTextsRef.current.push({
      id: nextTextId.current++,
      x,
      y,
      text,
      color,
      alpha: 1,
      scale: 1.2
    });
  };

  // Start / Restart Game
  const startGame = useCallback(() => {
    scoreRef.current = 0;
    livesRef.current = 3;
    comboRef.current = 0;
    multiplierRef.current = 1;
    caughtCountRef.current = 0;
    maxStreakRef.current = 0;
    gameStateRef.current = 'playing';

    setScore(0);
    setLives(3);
    setCombo(0);
    setMultiplier(1);
    setFrenzyTimer(0);
    setCaughtCount(0);
    setPerfectStreak(0);
    itemsRef.current = [];
    particlesRef.current = [];
    floatingTextsRef.current = [];
    lastSpawnTime.current = performance.now();
    gameTimeRef.current = 0;
    setGameState('playing');
  }, []);

  const pauseGame = () => {
    if (gameStateRef.current === 'playing') {
      gameStateRef.current = 'paused';
      setGameState('paused');
    } else if (gameStateRef.current === 'paused') {
      gameStateRef.current = 'playing';
      setGameState('playing');
    }
  };

  // Controls Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowLeft', 'ArrowRight', 'KeyA', 'KeyD', 'Space', 'Escape'].includes(e.code)) {
        if (e.code === 'Space') {
          if (gameStateRef.current === 'ready' || gameStateRef.current === 'gameover') {
            startGame();
          } else {
            pauseGame();
          }
          e.preventDefault();
          return;
        }
        if (e.code === 'Escape') {
          pauseGame();
          e.preventDefault();
          return;
        }
      }
      keysPressed.current[e.code] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.code] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [startGame]);

  // Pointer / Touch Movement on Canvas
  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const clientX = (e.clientX - rect.left) * scaleX;
    basketRef.current.targetX = clientX;
  };

  const moveBasketManual = (dir: 'left' | 'right') => {
    const delta = dir === 'left' ? -60 : 60;
    basketRef.current.targetX = Math.max(
      basketRef.current.width / 2,
      Math.min(600 - basketRef.current.width / 2, basketRef.current.targetX + delta)
    );
  };

  // Spawn New Falling Item
  const spawnItem = (time: number) => {
    const width = 600;
    const margin = 40;
    const x = Math.random() * (width - margin * 2) + margin;
    const speedMult = gameDifficulty === 'casual' ? 0.8 : gameDifficulty === 'frenzy' ? 1.4 : 1.0;
    const baseSpeed = (2.2 + Math.min(scoreRef.current / 180, 4.5)) * speedMult;

    // Item selection weights
    const roll = Math.random();
    let type: FallingItem['type'] = 'berry';
    let points = 10;
    let color = '#D92F2F';
    let glazeColor = '#EF9FBD';
    const speed = baseSpeed * (0.9 + Math.random() * 0.25);

    if (roll < 0.38) {
      // Classic Berry Donut
      type = 'berry';
      points = 10;
      color = '#D92F2F';
      glazeColor = '#EF9FBD';
    } else if (roll < 0.65) {
      // Sky Cyan Donut
      type = 'cyan';
      points = 15;
      color = '#297FC1';
      glazeColor = '#90D4F7';
    } else if (roll < 0.80) {
      // Golden Caramel Donut
      type = 'golden';
      points = 25;
      color = '#07334F';
      glazeColor = '#FFD23F';
    } else if (roll < 0.87) {
      // Master Brand Doh-Nut (Rare Frenzy)
      type = 'master';
      points = 50;
      color = '#D92F2F';
      glazeColor = '#FFFFFF';
    } else if (roll < 0.94) {
      // Burnt Hazard
      type = 'burnt';
      points = -15;
      color = '#382216';
      glazeColor = '#1A110B';
    } else {
      // Coffee Hazard or Heart Rescue
      if (livesRef.current < 3 && Math.random() < 0.4) {
        type = 'heart';
        points = 0;
        color = '#D92F2F';
        glazeColor = '#FF4146';
      } else {
        type = 'coffee';
        points = -20;
        color = '#5C3826';
        glazeColor = '#07334F';
      }
    }

    itemsRef.current.push({
      id: nextItemId.current++,
      x,
      y: -30,
      radius: type === 'master' ? 24 : 18,
      type,
      points,
      speed,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.08,
      color,
      glazeColor
    });
  };

  // Main Canvas Render & Physics Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Virtual Game Coordinates: 600 x 650
    const V_WIDTH = 600;
    const V_HEIGHT = 650;
    canvas.width = V_WIDTH;
    canvas.height = V_HEIGHT;

    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      // Handle Game State Logic
      if (gameStateRef.current === 'playing') {
        gameTimeRef.current += dt;

        // Spawn interval decreases with score
        const spawnDelay = Math.max(
          450,
          (gameDifficulty === 'frenzy' ? 700 : 1100) - Math.min(scoreRef.current * 1.2, 550)
        );

        if (currentTime - lastSpawnTime.current > spawnDelay) {
          spawnItem(currentTime);
          lastSpawnTime.current = currentTime;
        }

        // Keyboard Movement
        if (keysPressed.current['ArrowLeft'] || keysPressed.current['KeyA']) {
          basketRef.current.targetX -= 400 * dt;
        }
        if (keysPressed.current['ArrowRight'] || keysPressed.current['KeyD']) {
          basketRef.current.targetX += 400 * dt;
        }

        // Clamp basket inside arena
        const halfW = basketRef.current.width / 2;
        basketRef.current.targetX = Math.max(halfW, Math.min(V_WIDTH - halfW, basketRef.current.targetX));
        // Smooth Lerp Basket position
        basketRef.current.x += (basketRef.current.targetX - basketRef.current.x) * 0.22;
        basketRef.current.y = V_HEIGHT - 65;

        // Update Falling Items
        const basket = basketRef.current;
        const basketLeft = basket.x - basket.width / 2;
        const basketRight = basket.x + basket.width / 2;
        const basketTop = basket.y - 12;
        const basketBottom = basket.y + basket.height / 2;

        for (let i = itemsRef.current.length - 1; i >= 0; i--) {
          const item = itemsRef.current[i];
          item.y += item.speed * 60 * dt;
          item.rotation += item.rotSpeed;

          // Catch Collision Check
          if (
            item.y + item.radius >= basketTop &&
            item.y - item.radius <= basketBottom &&
            item.x >= basketLeft - 10 &&
            item.x <= basketRight + 10
          ) {
            // Caught item!
            if (item.type === 'burnt') {
              gameAudio.playHazard();
              createExplosion(item.x, item.y, '#382216');
              addFloatingText(item.x, item.y, 'BURNT! -15', '#FFD23F');
              const nextScore = Math.max(0, scoreRef.current - 15);
              scoreRef.current = nextScore;
              setScore(nextScore);

              comboRef.current = 0;
              multiplierRef.current = 1;
              setCombo(0);
              setMultiplier(1);
            } else if (item.type === 'coffee') {
              gameAudio.playHazard();
              createExplosion(item.x, item.y, '#5C3826');
              addFloatingText(item.x, item.y, 'SPILL! -1 HEART', '#D92F2F');
              const nextLives = livesRef.current - 1;
              livesRef.current = nextLives;
              setLives(nextLives);

              comboRef.current = 0;
              multiplierRef.current = 1;
              setCombo(0);
              setMultiplier(1);

              if (nextLives <= 0) {
                gameStateRef.current = 'gameover';
                setGameState('gameover');
                gameAudio.playGameOver();
              }
            } else if (item.type === 'heart') {
              gameAudio.playCatch('golden');
              createExplosion(item.x, item.y, '#D92F2F', true);
              addFloatingText(item.x, item.y, '+1 HEART!', '#EF9FBD');
              const nextLives = Math.min(3, livesRef.current + 1);
              livesRef.current = nextLives;
              setLives(nextLives);
            } else {
              // Good Donut!
              gameAudio.playCatch(item.type);
              createExplosion(item.x, item.y, item.glazeColor, item.type === 'master');

              const earned = item.points * multiplierRef.current;
              const nextScore = scoreRef.current + earned;
              scoreRef.current = nextScore;
              setScore(nextScore);

              if (nextScore > highScoreRef.current) {
                highScoreRef.current = nextScore;
                setHighScore(nextScore);
                localStorage.setItem('dohnut_catcher_highscore', String(nextScore));
                if (onUpdateProfileRef.current && userProfileRef.current) {
                  onUpdateProfileRef.current({ ...userProfileRef.current, donutGameHighScore: nextScore });
                }
              }

              const nextCount = caughtCountRef.current + 1;
              caughtCountRef.current = nextCount;
              setCaughtCount(nextCount);

              const nextCombo = comboRef.current + 1;
              comboRef.current = nextCombo;
              setCombo(nextCombo);

              if (nextCombo > maxStreakRef.current) {
                maxStreakRef.current = nextCombo;
                setPerfectStreak(nextCombo);
              }

              let nextMult = 1;
              if (nextCombo >= 15) nextMult = 4;
              else if (nextCombo >= 8) nextMult = 3;
              else if (nextCombo >= 4) nextMult = 2;
              multiplierRef.current = nextMult;
              setMultiplier(nextMult);

              if (item.type === 'master') {
                addFloatingText(item.x, item.y, `MASTER DOH! +${earned}`, '#FFD23F');
              } else if (multiplierRef.current > 1) {
                addFloatingText(item.x, item.y, `+${earned} (${multiplierRef.current}x)`, item.glazeColor);
              } else {
                addFloatingText(item.x, item.y, `+${earned}`, item.glazeColor);
              }
            }

            itemsRef.current.splice(i, 1);
            continue;
          }

          // Off-screen bottom check (missed item)
          if (item.y > V_HEIGHT + 30) {
            // If missed a good donut, lose combo and lose a life
            if (['berry', 'cyan', 'golden', 'master'].includes(item.type)) {
              comboRef.current = 0;
              multiplierRef.current = 1;
              setCombo(0);
              setMultiplier(1);

              const nextLives = livesRef.current - 1;
              livesRef.current = nextLives;
              setLives(nextLives);

              if (nextLives <= 0) {
                gameStateRef.current = 'gameover';
                setGameState('gameover');
                gameAudio.playGameOver();
              }
              addFloatingText(item.x, V_HEIGHT - 20, 'MISSED!', '#D92F2F');
            }
            itemsRef.current.splice(i, 1);
          }
        }
      }

      // Update Particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15; // Gravity
        p.life -= dt * 1.5;
        p.alpha = Math.max(0, p.life);
        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
        }
      }

      // Update Floating Texts
      for (let i = floatingTextsRef.current.length - 1; i >= 0; i--) {
        const t = floatingTextsRef.current[i];
        t.y -= 45 * dt;
        t.alpha -= dt * 1.2;
        if (t.alpha <= 0) {
          floatingTextsRef.current.splice(i, 1);
        }
      }

      // ================= RENDER CANVAS =================
      ctx.clearRect(0, 0, V_WIDTH, V_HEIGHT);

      // Background Paper & Warm Grid
      ctx.fillStyle = '#FDEFEB';
      ctx.fillRect(0, 0, V_WIDTH, V_HEIGHT);

      // Grid Lines
      ctx.strokeStyle = 'rgba(7, 51, 79, 0.08)';
      ctx.lineWidth = 1.5;
      const gridSize = 30;
      for (let gx = 0; gx < V_WIDTH; gx += gridSize) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, V_HEIGHT);
        ctx.stroke();
      }
      for (let gy = 0; gy < V_HEIGHT; gy += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(V_WIDTH, gy);
        ctx.stroke();
      }

      // Street Floor Platform
      ctx.fillStyle = '#07334F';
      ctx.fillRect(0, V_HEIGHT - 20, V_WIDTH, 20);
      // Floor Yellow Street Stripes
      ctx.fillStyle = '#FFD23F';
      for (let sx = 10; sx < V_WIDTH; sx += 40) {
        ctx.fillRect(sx, V_HEIGHT - 12, 20, 5);
      }

      // Render Falling Items
      itemsRef.current.forEach((item) => {
        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(item.rotation);

        if (item.type === 'coffee') {
          // Render Hot Coffee Cup Hazard
          ctx.fillStyle = '#5C3826';
          ctx.strokeStyle = '#07334F';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.roundRect(-12, -14, 24, 28, 4);
          ctx.fill();
          ctx.stroke();

          // Cup Sleeve
          ctx.fillStyle = '#FFD23F';
          ctx.fillRect(-12, -4, 24, 12);
          ctx.strokeRect(-12, -4, 24, 12);

          // Steam
          ctx.strokeStyle = '#EF9FBD';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(-4, -18);
          ctx.quadraticCurveTo(0, -22, -4, -26);
          ctx.moveTo(4, -18);
          ctx.quadraticCurveTo(8, -22, 4, -26);
          ctx.stroke();
        } else if (item.type === 'heart') {
          // Render Golden Donut Heart
          ctx.fillStyle = '#D92F2F';
          ctx.strokeStyle = '#07334F';
          ctx.lineWidth = 3.5;
          ctx.beginPath();
          ctx.arc(0, 0, 16, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#FFFFFF';
          ctx.font = 'bold 16px "Fredoka", sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('♥', 0, 1);
        } else {
          // Render Donut (Outer dough, glaze, sprinkles, center hole)
          const r = item.radius;

          // Outer shadow
          ctx.fillStyle = 'rgba(7, 51, 79, 0.2)';
          ctx.beginPath();
          ctx.arc(3, 3, r, 0, Math.PI * 2);
          ctx.fill();

          // Donut Dough Base
          ctx.fillStyle = item.type === 'burnt' ? '#382216' : '#F4A261';
          ctx.strokeStyle = '#07334F';
          ctx.lineWidth = 3.5;
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Wavy Glaze Top
          ctx.fillStyle = item.glazeColor;
          ctx.beginPath();
          ctx.arc(0, 0, r * 0.82, 0, Math.PI * 2);
          ctx.fill();

          // Glaze drip contours
          ctx.fillStyle = item.glazeColor;
          ctx.beginPath();
          ctx.arc(-r * 0.4, r * 0.4, 4, 0, Math.PI * 2);
          ctx.arc(r * 0.3, r * 0.45, 5, 0, Math.PI * 2);
          ctx.fill();

          // Center Hole
          ctx.fillStyle = '#FDEFEB';
          ctx.strokeStyle = '#07334F';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(0, 0, r * 0.32, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Colorful Sprinkles (if not burnt)
          if (item.type !== 'burnt') {
            const sprinkleColors = ['#FFD23F', '#297FC1', '#FFFFFF', '#D92F2F'];
            for (let s = 0; s < 5; s++) {
              const sa = (s * Math.PI * 2) / 5 + 0.3;
              const sx = Math.cos(sa) * (r * 0.58);
              const sy = Math.sin(sa) * (r * 0.58);
              ctx.fillStyle = sprinkleColors[s % sprinkleColors.length];
              ctx.save();
              ctx.translate(sx, sy);
              ctx.rotate(sa + 0.5);
              ctx.fillRect(-2.5, -1.2, 5, 2.4);
              ctx.restore();
            }
          } else {
            // Smoke / char mark for burnt
            ctx.fillStyle = '#000000';
            ctx.beginPath();
            ctx.arc(4, -4, 2, 0, Math.PI * 2);
            ctx.arc(-4, 3, 2.5, 0, Math.PI * 2);
            ctx.fill();
          }

          // Master Star Halo for rare master donut
          if (item.type === 'master') {
            ctx.strokeStyle = '#FFD23F';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(0, 0, r + 5, 0, Math.PI * 2);
            ctx.stroke();
          }
        }

        ctx.restore();
      });

      // Render Catcher Basket / Box
      const basket = basketRef.current;
      ctx.save();
      ctx.translate(basket.x, basket.y);

      // Basket Drop Shadow
      ctx.fillStyle = 'rgba(7, 51, 79, 0.25)';
      ctx.beginPath();
      ctx.roundRect(-basket.width / 2 + 4, -basket.height / 2 + 6, basket.width, basket.height, 12);
      ctx.fill();

      // Outer Cyan Trim
      ctx.fillStyle = '#009EE2';
      ctx.strokeStyle = '#07334F';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(-basket.width / 2, -basket.height / 2, basket.width, basket.height, 12);
      ctx.fill();
      ctx.stroke();

      // Inner Red Body Box
      ctx.fillStyle = '#D92F2F';
      ctx.beginPath();
      ctx.roundRect(-basket.width / 2 + 5, -basket.height / 2 + 5, basket.width - 10, basket.height - 10, 8);
      ctx.fill();

      // Front Wordmark Badge "DOH-NUT"
      ctx.fillStyle = '#FDEFEB';
      ctx.strokeStyle = '#07334F';
      ctx.lineWidth = 3;
      ctx.font = '900 13px "Fredoka", "Arial Black", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.strokeText('DOH-NUT', 0, 2);
      ctx.fillText('DOH-NUT', 0, 2);

      // Top Catch Funnel Glow Rim
      ctx.fillStyle = multiplierRef.current >= 3 ? '#FFD23F' : '#FFFFFF';
      ctx.strokeStyle = '#07334F';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(-basket.width / 2 + 2, -basket.height / 2 - 4, basket.width - 4, 8, 4);
      ctx.fill();
      ctx.stroke();

      ctx.restore();

      // Render Particles
      particlesRef.current.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.strokeStyle = '#07334F';
        ctx.lineWidth = 1;

        if (p.shape === 'spark') {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - p.size);
          ctx.lineTo(p.x + p.size * 0.3, p.y - p.size * 0.3);
          ctx.lineTo(p.x + p.size, p.y);
          ctx.lineTo(p.x + p.size * 0.3, p.y + p.size * 0.3);
          ctx.lineTo(p.x, p.y + p.size);
          ctx.lineTo(p.x - p.size * 0.3, p.y + p.size * 0.3);
          ctx.lineTo(p.x - p.size, p.y);
          ctx.lineTo(p.x - p.size * 0.3, p.y - p.size * 0.3);
          ctx.closePath();
          ctx.fill();
        } else if (p.shape === 'sprinkle') {
          ctx.fillRect(p.x - p.size / 2, p.y - 2, p.size, 4);
          ctx.strokeRect(p.x - p.size / 2, p.y - 2, p.size, 4);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
        ctx.restore();
      });

      // Render Floating Score Texts
      floatingTextsRef.current.forEach((t) => {
        ctx.save();
        ctx.globalAlpha = t.alpha;
        ctx.font = '900 16px "Fredoka", "Arial Black", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.strokeStyle = '#07334F';
        ctx.lineWidth = 4;
        ctx.strokeText(t.text, t.x, t.y);
        ctx.fillStyle = t.color;
        ctx.fillText(t.text, t.x, t.y);
        ctx.restore();
      });

      // Loop request
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameDifficulty]);

  return (
    <div className="space-y-8">
      {/* Main Arcade Frame Container */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
        {/* Game Title & Header Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-[#07334F] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#D92F2F] border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] flex items-center justify-center text-[#FDEFEB]">
              <Gamepad2 size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-fun text-xl sm:text-2xl font-black text-[#07334F]">
                  DOH-CATCHER
                </h3>
                <span className="px-2.5 py-0.5 bg-[#FFD23F] text-[#07334F] text-[10px] font-black rounded-lg border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
                  HTML5 ARCADE
                </span>
              </div>
              <p className="text-xs font-bold text-[#07334F]/80">
                Catch falling donuts, avoid hazards, rack up multiplier combos!
              </p>
            </div>
          </div>

          {/* Audio & Difficulty Toggles */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex bg-[#FDEFEB] p-1 rounded-xl border-2 border-[#07334F]">
              {(['casual', 'street', 'frenzy'] as const).map((diff) => (
                <button
                  key={diff}
                  onClick={() => setGameDifficulty(diff)}
                  className={`px-2.5 py-1 text-[10px] font-black uppercase rounded-lg transition-all ${
                    gameDifficulty === diff
                      ? 'bg-[#07334F] text-[#FDEFEB] shadow-[1px_1px_0px_0px_#D92F2F]'
                      : 'text-[#07334F] hover:bg-white'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>

            <button
              onClick={handleToggleSound}
              className="p-2 rounded-xl bg-white border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] text-[#07334F] hover:bg-[#FFD23F] transition-all"
              title={soundOn ? 'Mute Sound FX' : 'Enable Sound FX'}
            >
              {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
          </div>
        </div>

        {/* Live In-Game HUD Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Score Counter */}
          <div className="p-3 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#07334F]/70 block">
                SCORE
              </span>
              <span className="font-fun text-2xl font-black text-[#D92F2F]">
                {score}
              </span>
            </div>
            <div className="w-8 h-8 rounded-xl bg-[#D92F2F] text-white flex items-center justify-center font-black text-xs border-2 border-[#07334F]">
              PTS
            </div>
          </div>

          {/* Multiplier / Combo */}
          <div className="p-3 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#07334F]/70 block">
                COMBO STREAK
              </span>
              <span className="font-fun text-2xl font-black text-[#297FC1]">
                {combo} <span className="text-xs font-black">({multiplier}x)</span>
              </span>
            </div>
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs border-2 border-[#07334F] ${multiplier > 1 ? 'bg-[#FFD23F] text-[#07334F] animate-bounce' : 'bg-white text-[#07334F]'}`}>
              <Zap size={16} />
            </div>
          </div>

          {/* Lives Indicator */}
          <div className="p-3 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#07334F]/70 block">
                LIVES
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                {[1, 2, 3].map((heartIndex) => (
                  <div
                    key={heartIndex}
                    className={`w-6 h-6 rounded-full border-2 border-[#07334F] flex items-center justify-center text-xs transition-all ${
                      heartIndex <= lives
                        ? 'bg-[#D92F2F] text-[#FDEFEB] shadow-[1px_1px_0px_0px_#07334F] scale-100'
                        : 'bg-gray-200 text-gray-400 scale-90 opacity-40'
                    }`}
                  >
                    ♥
                  </div>
                ))}
              </div>
            </div>
            <Heart size={20} className="text-[#D92F2F]" />
          </div>

          {/* High Score */}
          <div className="p-3 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#07334F]/70 block">
                HIGH SCORE
              </span>
              <span className="font-fun text-2xl font-black text-[#07334F]">
                {highScore}
              </span>
            </div>
            <div className="w-8 h-8 rounded-xl bg-[#FFD23F] text-[#07334F] flex items-center justify-center font-black text-xs border-2 border-[#07334F]">
              <Trophy size={16} />
            </div>
          </div>
        </div>

        {/* Canvas Arena Container */}
        <div
          ref={containerRef}
          className="relative w-full max-w-[640px] mx-auto rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] overflow-hidden bg-[#FDEFEB] aspect-[600/650] touch-none select-none"
        >
          {/* Main HTML5 Canvas */}
          <canvas
            ref={canvasRef}
            onPointerMove={handlePointerMove}
            onPointerDown={handlePointerMove}
            className="w-full h-full block cursor-ew-resize"
          />

          {/* Overlay: Ready / Start Screen */}
          {gameState === 'ready' && (
            <div className="absolute inset-0 bg-[#07334F]/80 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center text-[#FDEFEB] space-y-5 animate-in fade-in duration-200">
              <div className="scale-90 sm:scale-100">
                <DohNutLogo variant="primary" size={240} animated />
              </div>
              <div className="space-y-1">
                <h4 className="font-fun text-3xl font-black text-[#FFD23F] tracking-wide">
                  DOH-CATCHER
                </h4>
                <p className="text-xs sm:text-sm font-bold text-[#FDEFEB]/90 max-w-sm">
                  Drag the DOH-NUT box or use <span className="bg-[#D92F2F] px-1.5 py-0.5 rounded border border-white font-mono">← / →</span> arrow keys to catch delicious fresh donuts!
                </p>
              </div>

              {/* Donut Points Legend */}
              <div className="bg-[#07334F] p-3 rounded-2xl border-2 border-[#FDEFEB] grid grid-cols-3 gap-2 text-[10px] font-black text-left max-w-xs w-full">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-[#EF9FBD] border border-white"></div>
                  <span>Berry +10</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-[#297FC1] border border-white"></div>
                  <span>Sky +15</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-[#FFD23F] border border-white"></div>
                  <span>Gold +25</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-white border border-[#07334F]"></div>
                  <span>Master +50</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#FF8A8A]">
                  <div className="w-4 h-4 rounded-full bg-[#382216] border border-white"></div>
                  <span>Burnt -15</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#FF8A8A]">
                  <div className="w-4 h-4 rounded-full bg-[#5C3826] border border-white"></div>
                  <span>Spill -1♥</span>
                </div>
              </div>

              <button
                onClick={startGame}
                className="px-8 py-3.5 bg-[#D92F2F] text-[#FDEFEB] font-fun text-lg font-black rounded-2xl border-3 border-white shadow-[4px_4px_0px_0px_#07334F] hover:bg-[#FF4146] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Play size={20} fill="#FDEFEB" />
                START BAKING
              </button>
            </div>
          )}

          {/* Overlay: Paused Screen */}
          {gameState === 'paused' && (
            <div className="absolute inset-0 bg-[#07334F]/85 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center text-[#FDEFEB] space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-[#FFD23F] text-[#07334F] border-3 border-white flex items-center justify-center shadow-[4px_4px_0px_0px_#07334F]">
                <Pause size={32} />
              </div>
              <h4 className="font-fun text-3xl font-black text-[#FDEFEB]">
                GAME PAUSED
              </h4>
              <p className="text-xs font-bold text-[#FDEFEB]/80">
                Take a breath! Donuts are still hot in the oven.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={pauseGame}
                  className="px-6 py-2.5 bg-[#297FC1] text-[#FDEFEB] font-black text-xs rounded-xl border-2 border-white shadow-[3px_3px_0px_0px_#07334F] hover:bg-[#3498DB] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center gap-1.5"
                >
                  <Play size={14} /> RESUME
                </button>
                <button
                  onClick={startGame}
                  className="px-6 py-2.5 bg-[#D92F2F] text-[#FDEFEB] font-black text-xs rounded-xl border-2 border-white shadow-[3px_3px_0px_0px_#07334F] hover:bg-[#B32424] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center gap-1.5"
                >
                  <RotateCcw size={14} /> RESTART
                </button>
              </div>
            </div>
          )}

          {/* Overlay: Game Over Screen */}
          {gameState === 'gameover' && (
            <div className="absolute inset-0 bg-[#07334F]/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center text-[#FDEFEB] space-y-4 animate-in zoom-in-95 duration-200">
              <div className="scale-75">
                <DohBoyMascot pose="eating" size={100} />
              </div>

              <div className="space-y-1">
                <span className="px-3 py-1 bg-[#D92F2F] text-white text-[10px] font-black rounded-lg border-2 border-white uppercase tracking-widest">
                  OUT OF DOUGH!
                </span>
                <h4 className="font-fun text-3xl sm:text-4xl font-black text-[#FFD23F]">
                  GAME OVER
                </h4>
              </div>

              {/* Score Breakdown Card */}
              <div className="bg-[#07334F] p-4 rounded-2xl border-3 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] w-full max-w-xs space-y-2 text-xs">
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="font-bold text-gray-300">Final Score</span>
                  <span className="font-fun text-2xl font-black text-[#FFD23F]">{score}</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-bold text-gray-300">Donuts Caught</span>
                  <span className="font-black text-[#EF9FBD]">{caughtCount}</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-bold text-gray-300">Best Combo</span>
                  <span className="font-black text-[#297FC1]">{perfectStreak}x</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-bold text-gray-300">Baker Rank</span>
                  <span className="font-black text-[#FFD23F]">
                    {score >= 500
                      ? '🏆 DOH-NUT MASTER'
                      : score >= 250
                      ? '⭐ STREET BAKER'
                      : score >= 100
                      ? '🍩 GLAZE APPRENTICE'
                      : '🌱 FRESH DOUGH'}
                  </span>
                </div>
              </div>

              {score >= highScore && score > 0 && (
                <div className="px-4 py-1.5 bg-[#FFD23F] text-[#07334F] font-black text-xs rounded-xl border-2 border-white animate-bounce flex items-center gap-1.5">
                  <Sparkles size={14} /> NEW PERSONAL BEST! <Sparkles size={14} />
                </div>
              )}

              <button
                onClick={startGame}
                className="px-8 py-3.5 bg-[#D92F2F] text-[#FDEFEB] font-fun text-lg font-black rounded-2xl border-3 border-white shadow-[4px_4px_0px_0px_#07334F] hover:bg-[#FF4146] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <RotateCcw size={20} /> PLAY AGAIN
              </button>
            </div>
          )}
        </div>

        {/* Mobile / Tablet On-Screen Touch Controls */}
        <div className="flex sm:hidden items-center justify-between gap-3 pt-2">
          <button
            onPointerDown={() => moveBasketManual('left')}
            className="flex-1 py-3 bg-[#FDEFEB] hover:bg-[#297FC1] hover:text-white text-[#07334F] font-black text-sm rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-1 transition-all"
          >
            <ArrowLeft size={18} /> LEFT
          </button>
          <button
            onClick={pauseGame}
            className="px-4 py-3 bg-white text-[#07334F] font-black text-xs rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] active:translate-x-[2px] active:translate-y-[2px]"
          >
            {gameState === 'playing' ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button
            onPointerDown={() => moveBasketManual('right')}
            className="flex-1 py-3 bg-[#FDEFEB] hover:bg-[#297FC1] hover:text-white text-[#07334F] font-black text-sm rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-1 transition-all"
          >
            RIGHT <ArrowRight size={18} />
          </button>
        </div>

        {/* Game Specification & Brand Activation Standards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t-3 border-[#07334F] text-xs">
          <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-1">
            <span className="font-black text-[#D92F2F] block uppercase font-display text-sm flex items-center gap-1.5">
              <Flame size={16} /> 1. Brand Gamification Spec
            </span>
            <p className="text-[#07334F]/80 leading-relaxed">
              Designed as an experiential digital touchpoint for interactive queue kiosks, mobile loyalty mini-games, and QR code receipt campaigns to drive high customer retention.
            </p>
          </div>

          <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-1">
            <span className="font-black text-[#297FC1] block uppercase font-display text-sm flex items-center gap-1.5">
              <Zap size={16} /> 2. Palette & Physics Tokens
            </span>
            <p className="text-[#07334F]/80 leading-relaxed">
              Strictly adheres to brand hex codes (<code className="font-mono text-[10px] bg-white px-1 py-0.5 rounded border border-[#07334F]">#D92F2F</code>, <code className="font-mono text-[10px] bg-white px-1 py-0.5 rounded border border-[#07334F]">#297FC1</code>, <code className="font-mono text-[10px] bg-white px-1 py-0.5 rounded border border-[#07334F]">#FFD23F</code>) with responsive 60fps canvas lerp interpolation.
            </p>
          </div>

          <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-1">
            <span className="font-black text-[#07334F] block uppercase font-display text-sm flex items-center gap-1.5">
              <Award size={16} /> 3. Reward Tier Hooks
            </span>
            <p className="text-[#07334F]/80 leading-relaxed">
              High scores integrate with local storage and loyalty profile tokens, unlocking digital voucher tiers (e.g. Free 6-Pack Glaze Box at 500+ pts).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
