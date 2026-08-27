import React, { useState, useEffect } from 'react';
import {
  Play,
  RotateCcw,
  Sparkles,
  Copy,
  Check,
  Flame,
  Activity,
  Sliders,
  Layers,
  Code2,
  Zap,
  Info,
  CheckCircle2,
  XCircle,
  Eye,
  Volume2,
  Gauge
} from 'lucide-react';
import { DohNutLogo } from '../brand/DohNutLogo';
import { DohBoyMascot } from '../brand/DohBoyMascot';
import { DonutIcon, StreetStickerBadge, StarSpark } from '../brand/GraphicElements';
import { LogoVariant, DohBoyPose } from '../../types';

type AnimationType = 'bounce' | 'wobble' | 'pop-in' | 'float' | 'glaze-drip';
type TargetElement = 'logo-primary' | 'mascot-hero' | 'mascot-excited' | 'donut-badge' | 'sticker-pill';

interface MotionSpec {
  id: AnimationType;
  title: string;
  name: string;
  badge: string;
  description: string;
  recommendedDuration: string;
  recommendedEasing: string;
  bestUsedFor: string[];
  cssCode: string;
  tailwindCode: string;
  framerMotionCode: string;
  physicsRule: string;
}

const MOTION_SPECS: MotionSpec[] = [
  {
    id: 'bounce',
    title: 'The Signature Dough Bounce',
    name: 'doh-bounce',
    badge: 'SIGNATURE ELASTICITY',
    description: 'A physical squash-and-stretch gravity bounce that mimics hot, elastic brioche dough hitting a counter before settling with damped spring vibrations.',
    recommendedDuration: '0.85s (850ms)',
    recommendedEasing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    bestUsedFor: [
      'Hero logo drop on page load',
      'Add-to-cart confirmation button',
      'Reward unlock badge or gamified score',
      'Mascot landing or celebration state'
    ],
    physicsRule: 'Volume Conservation: When height squashes to 0.75x, width must expand to 1.25x to maintain authentic pastry volume.',
    cssCode: `@keyframes doh-bounce {
  0% {
    transform: translateY(-80px) scale(1, 1);
    animation-timing-function: cubic-bezier(0.3, 0, 0.8, 0.15);
  }
  38% {
    transform: translateY(0) scale(1.25, 0.75); /* Ground Impact Squash */
    animation-timing-function: cubic-bezier(0, 0.6, 0.2, 1);
  }
  55% {
    transform: translateY(-30px) scale(0.92, 1.12); /* Rebound Stretch */
    animation-timing-function: cubic-bezier(0.3, 0, 0.8, 0.15);
  }
  72% {
    transform: translateY(0) scale(1.1, 0.92); /* Micro Settle */
    animation-timing-function: cubic-bezier(0, 0.6, 0.2, 1);
  }
  85% {
    transform: translateY(-8px) scale(0.98, 1.03);
    animation-timing-function: cubic-bezier(0.3, 0, 0.8, 0.15);
  }
  100% {
    transform: translateY(0) scale(1, 1);
  }
}

.doh-bounce {
  animation: doh-bounce 0.85s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}`,
    tailwindCode: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'doh-bounce': {
          '0%': { transform: 'translateY(-80px) scale(1, 1)' },
          '38%': { transform: 'translateY(0) scale(1.25, 0.75)' },
          '55%': { transform: 'translateY(-30px) scale(0.92, 1.12)' },
          '72%': { transform: 'translateY(0) scale(1.1, 0.92)' },
          '85%': { transform: 'translateY(-8px) scale(0.98, 1.03)' },
          '100%': { transform: 'translateY(0) scale(1, 1)' }
        }
      },
      animation: {
        'doh-bounce': 'doh-bounce 0.85s cubic-bezier(0.34, 1.56, 0.64, 1) both'
      }
    }
  }
};`,
    framerMotionCode: `// Framer Motion / motion.div Variant
const bounceVariant = {
  initial: { y: -80, scaleX: 1, scaleY: 1 },
  animate: {
    y: [ -80, 0, -30, 0, -8, 0 ],
    scaleX: [ 1, 1.25, 0.92, 1.1, 0.98, 1 ],
    scaleY: [ 1, 0.75, 1.12, 0.92, 1.03, 1 ],
    transition: {
      duration: 0.85,
      times: [ 0, 0.38, 0.55, 0.72, 0.85, 1 ],
      ease: [ 0.34, 1.56, 0.64, 1 ]
    }
  }
};`
  },
  {
    id: 'wobble',
    title: 'The Cheeky Attitude Wobble',
    name: 'doh-wobble',
    badge: 'ROTATIONAL JELLY',
    description: 'An asymmetrical rotational shake with elastic skew distortion. Evokes the rebellious, punchy street attitude of DOH-NUT mascot gestures.',
    recommendedDuration: '0.75s (750ms)',
    recommendedEasing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    bestUsedFor: [
      'Interactive hover state on clickable stickers & cards',
      'Form error shake & input invalid feedback',
      'Mascot cheek wiggle or idle tease animation',
      'Sale alert or "Limited Drop" countdown notice'
    ],
    physicsRule: 'Elastic Skew: Skew and rotation oscillate in opposite polarities to prevent rigid 3D turning.',
    cssCode: `@keyframes doh-wobble {
  0% {
    transform: rotate(0deg) scale(1, 1);
  }
  15% {
    transform: rotate(-14deg) skewX(-6deg) scale(1.1, 0.92);
  }
  30% {
    transform: rotate(12deg) skewX(5deg) scale(0.93, 1.08);
  }
  45% {
    transform: rotate(-8deg) skewX(-3deg) scale(1.05, 0.96);
  }
  60% {
    transform: rotate(6deg) skewX(2deg) scale(0.97, 1.03);
  }
  75% {
    transform: rotate(-3deg) skewX(-1deg) scale(1.02, 0.99);
  }
  100% {
    transform: rotate(0deg) scale(1, 1);
  }
}

.doh-wobble {
  animation: doh-wobble 0.75s ease-in-out both;
  transform-origin: center bottom;
}`,
    tailwindCode: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'doh-wobble': {
          '0%': { transform: 'rotate(0deg) scale(1, 1)' },
          '15%': { transform: 'rotate(-14deg) skewX(-6deg) scale(1.1, 0.92)' },
          '30%': { transform: 'rotate(12deg) skewX(5deg) scale(0.93, 1.08)' },
          '45%': { transform: 'rotate(-8deg) skewX(-3deg) scale(1.05, 0.96)' },
          '60%': { transform: 'rotate(6deg) skewX(2deg) scale(0.97, 1.03)' },
          '75%': { transform: 'rotate(-3deg) skewX(-1deg) scale(1.02, 0.99)' },
          '100%': { transform: 'rotate(0deg) scale(1, 1)' }
        }
      },
      animation: {
        'doh-wobble': 'doh-wobble 0.75s ease-in-out both'
      }
    }
  }
};`,
    framerMotionCode: `// Framer Motion / motion.div Variant
const wobbleVariant = {
  animate: {
    rotate: [ 0, -14, 12, -8, 6, -3, 0 ],
    skewX: [ 0, -6, 5, -3, 2, -1, 0 ],
    scaleX: [ 1, 1.1, 0.93, 1.05, 0.97, 1.02, 1 ],
    scaleY: [ 1, 0.92, 1.08, 0.96, 1.03, 0.99, 1 ],
    transition: {
      duration: 0.75,
      ease: "easeInOut"
    }
  }
};`
  },
  {
    id: 'pop-in',
    title: 'The Street Snap Pop-In',
    name: 'doh-pop-in',
    badge: 'SNAPPY ENTRANCE',
    description: 'An explosive scale-up entrance that overshoots target dimensions before rubber-banding back into crisp brutalist lockup.',
    recommendedDuration: '0.55s (550ms)',
    recommendedEasing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    bestUsedFor: [
      'Modal dialog and drawer opens',
      'Sticker stamp on photos or canvas',
      'Notification toast pop-ups',
      'Product grid card staggered entry'
    ],
    physicsRule: 'Overshoot Threshold: Cap max overshoot scale at 1.22x (122%) to prevent clipping container boundaries.',
    cssCode: `@keyframes doh-pop-in {
  0% {
    opacity: 0;
    transform: scale(0.1) rotate(-18deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.22) rotate(4deg); /* Energetic Overshoot */
  }
  70% {
    transform: scale(0.9) rotate(-2deg); /* Snap Back */
  }
  85% {
    transform: scale(1.06) rotate(1deg); /* Micro Settle */
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.doh-pop-in {
  animation: doh-pop-in 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}`,
    tailwindCode: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'doh-pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.1) rotate(-18deg)' },
          '50%': { opacity: '1', transform: 'scale(1.22) rotate(4deg)' },
          '70%': { transform: 'scale(0.9) rotate(-2deg)' },
          '85%': { transform: 'scale(1.06) rotate(1deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' }
        }
      },
      animation: {
        'doh-pop-in': 'doh-pop-in 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) both'
      }
    }
  }
};`,
    framerMotionCode: `// Framer Motion / motion.div Variant
const popInVariant = {
  initial: { opacity: 0, scale: 0.1, rotate: -18 },
  animate: {
    opacity: [ 0, 1, 1, 1, 1 ],
    scale: [ 0.1, 1.22, 0.9, 1.06, 1 ],
    rotate: [ -18, 4, -2, 1, 0 ],
    transition: {
      duration: 0.55,
      ease: [ 0.34, 1.56, 0.64, 1 ]
    }
  }
};`
  },
  {
    id: 'float',
    title: 'The Ambient Float Levitation',
    name: 'doh-float',
    badge: 'HERO AMBIENCE',
    description: 'Smooth, rhythmic anti-gravity hover with subtle rotational tilt for persistent display boards and decorative assets.',
    recommendedDuration: '3.0s (3000ms)',
    recommendedEasing: 'ease-in-out (infinite)',
    bestUsedFor: [
      'Hero banner background floaters',
      'Mascot idle status in navigation bar',
      'Downloadable asset previews',
      'Store digital signage standby loop'
    ],
    physicsRule: 'Continuous Loop: Symmetrical displacement curve with smooth zero-velocity turnaround at apex.',
    cssCode: `@keyframes doh-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-14px) rotate(2.5deg);
  }
}

.doh-float {
  animation: doh-float 3s ease-in-out infinite;
}`,
    tailwindCode: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'doh-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2.5deg)' }
        }
      },
      animation: {
        'doh-float': 'doh-float 3s ease-in-out infinite'
      }
    }
  }
};`,
    framerMotionCode: `// Framer Motion / motion.div Variant
const floatVariant = {
  animate: {
    y: [ 0, -14, 0 ],
    rotate: [ 0, 2.5, 0 ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};`
  },
  {
    id: 'glaze-drip',
    title: 'The Sticky Glaze Drip',
    name: 'doh-glaze-drip',
    badge: 'LIQUID VISCOSITY',
    description: 'Viscous vertical expansion simulating hot strawberry or chocolate syrup dripping down dough before snapping back.',
    recommendedDuration: '2.0s (2000ms)',
    recommendedEasing: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
    bestUsedFor: [
      'Menu item highlights & seasonal flavor reveals',
      'Interactive food ordering CTA states',
      'Loading spinner & asset compilation states',
      'Retail kiosk screensaver loops'
    ],
    physicsRule: 'Fluid Stretch: High Y-stretch paired with proportional X-pinch mimicking surface tension.',
    cssCode: `@keyframes doh-glaze-drip {
  0%, 100% {
    transform: translateY(0) scaleY(1) scaleX(1);
  }
  50% {
    transform: translateY(14px) scaleY(1.2) scaleX(0.9);
  }
}

.doh-glaze-drip {
  animation: doh-glaze-drip 2s ease-in-out infinite;
  transform-origin: top center;
}`,
    tailwindCode: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'doh-glaze-drip': {
          '0%, 100%': { transform: 'translateY(0) scaleY(1) scaleX(1)' },
          '50%': { transform: 'translateY(14px) scaleY(1.2) scaleX(0.9)' }
        }
      },
      animation: {
        'doh-glaze-drip': 'doh-glaze-drip 2s ease-in-out infinite'
      }
    }
  }
};`,
    framerMotionCode: `// Framer Motion / motion.div Variant
const dripVariant = {
  animate: {
    y: [ 0, 14, 0 ],
    scaleY: [ 1, 1.2, 1 ],
    scaleX: [ 1, 0.9, 1 ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};`
  }
];

const STAGE_BACKGROUNDS = [
  { id: 'cream-grid', name: 'Pastry Grid', bg: '#FDEFEB', isDark: false, class: 'grid-pattern-paper' },
  { id: 'navy-midnight', name: 'Midnight Navy', bg: '#07334F', isDark: true, class: '' },
  { id: 'flame-red', name: 'Flame Red', bg: '#D92F2F', isDark: true, class: '' },
  { id: 'gold-yellow', name: 'Butter Gold', bg: '#FFD23F', isDark: false, class: '' },
  { id: 'dot-paper', name: 'Exclusion Dots', bg: '#FDEFEB', isDark: false, class: 'dot-pattern-paper' }
];

export const BrandMotionSection: React.FC = () => {
  // Motion Lab Sandbox State
  const [selectedEffect, setSelectedEffect] = useState<AnimationType>('bounce');
  const [selectedTarget, setSelectedTarget] = useState<TargetElement>('logo-primary');
  const [isLooping, setIsLooping] = useState<boolean>(true);
  const [duration, setDuration] = useState<number>(0.85);
  const [intensity, setIntensity] = useState<'subtle' | 'normal' | 'wild'>('normal');
  const [isSlowMo, setIsSlowMo] = useState<boolean>(false);
  const [stageBg, setStageBg] = useState(STAGE_BACKGROUNDS[0]);
  const [animationKey, setAnimationKey] = useState<number>(0);
  const [copiedCodeTab, setCopiedCodeTab] = useState<string | null>(null);
  const [activeCodeTab, setActiveCodeTab] = useState<'css' | 'tailwind' | 'framer'>('css');

  const currentSpec = MOTION_SPECS.find((s) => s.id === selectedEffect) || MOTION_SPECS[0];

  const triggerReplay = () => {
    setAnimationKey((prev) => prev + 1);
  };

  const getEffectiveDuration = () => {
    if (isSlowMo) return `${duration * 3}s`;
    return `${duration}s`;
  };

  const copyCodeToClipboard = (code: string, tabName: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeTab(tabName);
    setTimeout(() => setCopiedCodeTab(null), 2000);
  };

  const renderTargetPreview = () => {
    switch (selectedTarget) {
      case 'logo-primary':
        return <DohNutLogo variant={stageBg.isDark ? 'reversed' : 'primary'} size={240} />;
      case 'mascot-hero':
        return <DohBoyMascot pose="hero" size={180} />;
      case 'mascot-excited':
        return <DohBoyMascot pose="excited" size={180} />;
      case 'donut-badge':
        return <DonutIcon size={160} glazeColor="#EF9FBD" sprinkles />;
      case 'sticker-pill':
        return <StreetStickerBadge text="DOH-NUT" bgColor="#D92F2F" rotation={0} />;
      default:
        return <DohNutLogo variant="primary" size={240} />;
    }
  };

  const getAnimationClass = () => {
    switch (selectedEffect) {
      case 'bounce':
        return 'animate-doh-bounce';
      case 'wobble':
        return 'animate-doh-wobble';
      case 'pop-in':
        return 'animate-doh-pop-in';
      case 'float':
        return 'animate-doh-float';
      case 'glaze-drip':
        return 'animate-doh-drip';
      default:
        return 'animate-doh-bounce';
    }
  };

  return (
    <div className="space-y-10">
      {/* ========================================================
          1. SECTION HERO & MOTION ETHOS
          ======================================================== */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-3 border-[#07334F] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#D92F2F] text-white flex items-center justify-center border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]">
              <Activity size={24} className="animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-fun text-2xl sm:text-3xl font-black text-[#07334F]">
                  DOH-NUT BRAND MOTION SYSTEM
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FFD23F] text-[#07334F] font-fun text-xs font-black uppercase tracking-wider border border-[#07334F]">
                  SPEC-24
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#07334F]/80">
                Physics-based squash &amp; stretch choreography, keyframe curves, and interactive UI micro-interactions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-[#297FC1] text-[#FDEFEB] font-fun text-xs font-black uppercase tracking-wider border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
              SPRING PHYSICS v1.0
            </span>
          </div>
        </div>

        {/* 4 Core Motion Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#D92F2F] text-white font-black text-xs flex items-center justify-center border border-[#07334F]">
                01
              </div>
              <span className="font-fun text-sm font-black text-[#07334F] uppercase">
                Juicy Squash &amp; Stretch
              </span>
            </div>
            <p className="text-xs text-[#07334F]/80 font-medium leading-relaxed">
              Every bounce preserves dough volume. If Y squashes down, X expands outward by an equal ratio to simulate authentic pastry mass.
            </p>
          </div>

          <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#297FC1] text-white font-black text-xs flex items-center justify-center border border-[#07334F]">
                02
              </div>
              <span className="font-fun text-sm font-black text-[#07334F] uppercase">
                Snappy Street Overshoot
              </span>
            </div>
            <p className="text-xs text-[#07334F]/80 font-medium leading-relaxed">
              Entrances must never crawl. Snap past 100% scale (up to 122%) in the first 45% of the timeline, then snap back with high-frequency dampening.
            </p>
          </div>

          <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#FFD23F] text-[#07334F] font-black text-xs flex items-center justify-center border border-[#07334F]">
                03
              </div>
              <span className="font-fun text-sm font-black text-[#07334F] uppercase">
                Zero Linear Easings
              </span>
            </div>
            <p className="text-xs text-[#07334F]/80 font-medium leading-relaxed">
              Strictly forbidden: linear `ease-in` or flat mechanical motion. Always use customized cubic-bezier spring curves (`ease-doh-spring`).
            </p>
          </div>

          <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#07334F] text-[#FDEFEB] font-black text-xs flex items-center justify-center border border-[#07334F]">
                04
              </div>
              <span className="font-fun text-sm font-black text-[#07334F] uppercase">
                Reduced Motion Safe
              </span>
            </div>
            <p className="text-xs text-[#07334F]/80 font-medium leading-relaxed">
              When `@media (prefers-reduced-motion)` is active, aggressive translate and rotation collapse into a subtle 150ms opacity fade.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================
          2. INTERACTIVE MOTION LAB & ARTBOARD
          ======================================================== */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-3 border-[#07334F] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-fun text-xl sm:text-2xl font-black text-[#07334F]">
                MOTION LAB • LIVE INTERACTIVE PLAYGROUND
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-[#D92F2F] text-white text-[10px] font-black uppercase tracking-wider">
                REALTIME
              </span>
            </div>
            <p className="text-xs font-bold text-[#07334F]/80 mt-0.5">
              Select any asset target and audition brand keyframes in real time with custom durations and physics.
            </p>
          </div>

          {/* Quick Play Trigger */}
          <div className="flex items-center gap-2">
            <button
              onClick={triggerReplay}
              className="px-4 py-2 rounded-xl bg-[#D92F2F] hover:bg-[#b82525] text-white font-fun text-xs sm:text-sm font-black uppercase tracking-wider border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2"
            >
              <Play size={16} fill="currentColor" />
              <span>Replay Motion</span>
            </button>

            <button
              onClick={() => setIsSlowMo(!isSlowMo)}
              className={`px-3 py-2 rounded-xl font-fun text-xs font-black uppercase tracking-wider border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-1.5 ${
                isSlowMo ? 'bg-[#FFD23F] text-[#07334F]' : 'bg-white text-[#07334F]'
              }`}
              title="Toggle 0.3x Slow-Motion for frame inspection"
            >
              <Gauge size={14} />
              <span>{isSlowMo ? '0.3x Slow-Mo' : '1.0x Normal'}</span>
            </button>
          </div>
        </div>

        {/* Toolbar Controls Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 bg-[#FDEFEB] p-4 rounded-2xl border-3 border-[#07334F]">
          {/* 1. Animation Effect Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-[#07334F] uppercase tracking-wider block">
              1. Motion Preset
            </label>
            <select
              value={selectedEffect}
              onChange={(e) => {
                setSelectedEffect(e.target.value as AnimationType);
                triggerReplay();
              }}
              className="w-full bg-white text-[#07334F] font-fun text-xs font-black p-2.5 rounded-xl border-2 border-[#07334F] focus:outline-none focus:ring-2 focus:ring-[#D92F2F] cursor-pointer"
            >
              <option value="bounce">Bounce (Squash &amp; Stretch)</option>
              <option value="wobble">Wobble (Cheeky Shake)</option>
              <option value="pop-in">Pop-In (Snappy Scale)</option>
              <option value="float">Float (Ambient Hover)</option>
              <option value="glaze-drip">Glaze Drip (Viscous Elastic)</option>
            </select>
          </div>

          {/* 2. Target Asset Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-[#07334F] uppercase tracking-wider block">
              2. Target Asset
            </label>
            <select
              value={selectedTarget}
              onChange={(e) => {
                setSelectedTarget(e.target.value as TargetElement);
                triggerReplay();
              }}
              className="w-full bg-white text-[#07334F] font-fun text-xs font-black p-2.5 rounded-xl border-2 border-[#07334F] focus:outline-none focus:ring-2 focus:ring-[#D92F2F] cursor-pointer"
            >
              <option value="logo-primary">DOH-NUT Master Badge</option>
              <option value="mascot-hero">Doh Boy (Hero Pose)</option>
              <option value="mascot-excited">Doh Boy (Excited Pose)</option>
              <option value="donut-badge">Artisan Donut Vector</option>
              <option value="sticker-pill">Street Sticker Pill</option>
            </select>
          </div>

          {/* 3. Duration Slider */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-black text-[#07334F] uppercase tracking-wider">
              <span>3. Duration</span>
              <span className="font-mono text-[#D92F2F]">{duration.toFixed(2)}s</span>
            </div>
            <input
              type="range"
              min={0.3}
              max={2.5}
              step={0.05}
              value={duration}
              onChange={(e) => setDuration(parseFloat(e.target.value))}
              className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer border border-[#07334F] accent-[#D92F2F]"
            />
            <div className="flex justify-between text-[9px] font-mono text-[#07334F]/60">
              <span>0.3s (Snappy)</span>
              <span>2.5s (Ambient)</span>
            </div>
          </div>

          {/* 4. Stage Background */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-[#07334F] uppercase tracking-wider block">
              4. Stage Canvas
            </label>
            <div className="flex items-center gap-1.5 pt-0.5">
              {STAGE_BACKGROUNDS.map((bg) => (
                <button
                  key={bg.id}
                  onClick={() => setStageBg(bg)}
                  className={`w-7 h-7 rounded-lg border-2 transition-all flex items-center justify-center ${
                    stageBg.id === bg.id
                      ? 'border-[#07334F] scale-110 shadow-sm ring-2 ring-[#07334F]'
                      : 'border-transparent opacity-75 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: bg.bg }}
                  title={bg.name}
                >
                  {stageBg.id === bg.id && (
                    <Check size={14} className={bg.isDark ? 'text-white' : 'text-[#07334F]'} />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Animation Stage Artboard */}
        <div
          key={animationKey}
          className={`p-12 sm:p-16 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] min-h-[360px] flex flex-col items-center justify-center relative overflow-hidden transition-colors ${stageBg.class}`}
          style={{ backgroundColor: stageBg.bg }}
        >
          {/* Stage Metadata Tag */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-xl bg-white/90 text-[#07334F] text-[10px] font-mono font-bold border-2 border-[#07334F] shadow-sm">
              ACTIVE SPEC: {currentSpec.name.toUpperCase()} • {getEffectiveDuration()}
            </span>
            {isSlowMo && (
              <span className="px-2 py-0.5 rounded-lg bg-[#FFD23F] text-[#07334F] text-[9px] font-black uppercase">
                SLOW-MO (0.3x)
              </span>
            )}
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              onClick={() => setIsLooping(!isLooping)}
              className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider border-2 border-[#07334F] transition-all ${
                isLooping ? 'bg-[#D92F2F] text-white' : 'bg-white text-[#07334F]'
              }`}
            >
              {isLooping ? 'Loop: Continuous' : 'Loop: Once'}
            </button>
          </div>

          {/* Animated Target Container */}
          <div
            className="flex items-center justify-center transform origin-center transition-all"
            style={{
              animation: `${currentSpec.name} ${getEffectiveDuration()} ${currentSpec.recommendedEasing} ${
                isLooping ? 'infinite' : 'both'
              }`
            }}
          >
            {renderTargetPreview()}
          </div>

          {/* Bottom Stage Info Pill */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 text-white text-[11px] font-bold flex items-center gap-2">
            <Sparkles size={13} className="text-[#FFD23F]" />
            <span>{currentSpec.physicsRule}</span>
          </div>
        </div>

        {/* Quick Effect Selection Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
          <div className="flex flex-wrap gap-2">
            {MOTION_SPECS.map((spec) => (
              <button
                key={spec.id}
                onClick={() => {
                  setSelectedEffect(spec.id);
                  triggerReplay();
                }}
                className={`px-3.5 py-1.5 rounded-xl font-fun text-xs font-black uppercase tracking-wider border-2 border-[#07334F] transition-all ${
                  selectedEffect === spec.id
                    ? 'bg-[#07334F] text-[#FDEFEB] shadow-[3px_3px_0px_0px_#D92F2F]'
                    : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#EF9FBD] shadow-[1px_1px_0px_0px_#07334F]'
                } active:translate-x-[1px] active:translate-y-[1px] active:shadow-none`}
              >
                {spec.id === 'bounce' && '🏀 '}
                {spec.id === 'wobble' && '🍮 '}
                {spec.id === 'pop-in' && '💥 '}
                {spec.id === 'float' && '🎈 '}
                {spec.id === 'glaze-drip' && '💧 '}
                {spec.name}
              </button>
            ))}
          </div>

          <span className="text-[11px] font-mono font-bold text-[#07334F]/70">
            Recommended Curve: <code className="bg-white px-1.5 py-0.5 rounded border border-[#07334F] text-[#D92F2F]">{currentSpec.recommendedEasing}</code>
          </span>
        </div>
      </div>

      {/* ========================================================
          3. DEEP-DIVE CSS KEYFRAMES SPECIFICATIONS & CODE COPY
          ======================================================== */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-3 border-[#07334F] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Code2 size={24} className="text-[#D92F2F]" />
              <h3 className="font-fun text-xl sm:text-2xl font-black text-[#07334F]">
                PRODUCTION CODE EXPORTS &amp; KEYFRAME SPECIFICATIONS
              </h3>
            </div>
            <p className="text-xs font-bold text-[#07334F]/80 mt-0.5">
              Drop-in CSS keyframes, Tailwind plugins, and Framer Motion code snippets verified for high performance.
            </p>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 bg-[#FDEFEB] p-1 rounded-xl border-2 border-[#07334F]">
            <button
              onClick={() => setActiveCodeTab('css')}
              className={`px-3 py-1 rounded-lg text-xs font-fun font-black uppercase transition-all ${
                activeCodeTab === 'css'
                  ? 'bg-[#07334F] text-[#FDEFEB] shadow-sm'
                  : 'text-[#07334F] hover:bg-white/60'
              }`}
            >
              Standard CSS
            </button>
            <button
              onClick={() => setActiveCodeTab('tailwind')}
              className={`px-3 py-1 rounded-lg text-xs font-fun font-black uppercase transition-all ${
                activeCodeTab === 'tailwind'
                  ? 'bg-[#07334F] text-[#FDEFEB] shadow-sm'
                  : 'text-[#07334F] hover:bg-white/60'
              }`}
            >
              Tailwind CSS
            </button>
            <button
              onClick={() => setActiveCodeTab('framer')}
              className={`px-3 py-1 rounded-lg text-xs font-fun font-black uppercase transition-all ${
                activeCodeTab === 'framer'
                  ? 'bg-[#07334F] text-[#FDEFEB] shadow-sm'
                  : 'text-[#07334F] hover:bg-white/60'
              }`}
            >
              Framer Motion
            </button>
          </div>
        </div>

        {/* Selected Effect Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Metadata & Use Cases (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] space-y-3">
              <span className="px-2.5 py-0.5 rounded-full bg-[#D92F2F] text-white font-fun text-[10px] font-black uppercase tracking-wider inline-block">
                {currentSpec.badge}
              </span>
              <h4 className="font-fun text-lg font-black text-[#07334F]">
                {currentSpec.title}
              </h4>
              <p className="text-xs text-[#07334F]/90 font-medium leading-relaxed">
                {currentSpec.description}
              </p>

              <div className="space-y-1.5 pt-2 border-t-2 border-[#07334F]/20 text-xs">
                <div className="flex justify-between">
                  <span className="font-bold text-[#07334F]/70">Duration Token:</span>
                  <span className="font-mono font-black text-[#D92F2F]">{currentSpec.recommendedDuration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#07334F]/70">Class Name:</span>
                  <span className="font-mono font-black text-[#297FC1]">.{currentSpec.name}</span>
                </div>
              </div>
            </div>

            {/* Approved Usage Checklist */}
            <div className="p-4 bg-white rounded-2xl border-2 border-[#07334F] space-y-2">
              <span className="font-fun text-xs font-black text-[#07334F] uppercase block">
                Approved Use Cases:
              </span>
              <ul className="space-y-1.5 text-xs text-[#07334F]/90">
                {currentSpec.bestUsedFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 size={14} className="text-[#48BB78] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Code Block (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-[#07334F] text-[#FDEFEB] p-5 rounded-2xl border-3 border-[#07334F] shadow-lg relative">
            <div className="flex items-center justify-between pb-3 border-b border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#D92F2F]" />
                <div className="w-3 h-3 rounded-full bg-[#FFD23F]" />
                <div className="w-3 h-3 rounded-full bg-[#48BB78]" />
                <span className="text-xs font-mono font-bold text-gray-300 ml-2">
                  {activeCodeTab === 'css' && `brand-motion-${currentSpec.id}.css`}
                  {activeCodeTab === 'tailwind' && 'tailwind.config.js'}
                  {activeCodeTab === 'framer' && `${currentSpec.id}Variants.ts`}
                </span>
              </div>

              <button
                onClick={() => {
                  const code =
                    activeCodeTab === 'css'
                      ? currentSpec.cssCode
                      : activeCodeTab === 'tailwind'
                      ? currentSpec.tailwindCode
                      : currentSpec.framerMotionCode;
                  copyCodeToClipboard(code, activeCodeTab);
                }}
                className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-xs font-fun font-black uppercase tracking-wider flex items-center gap-1.5 transition-all text-white border border-white/30"
              >
                {copiedCodeTab === activeCodeTab ? (
                  <>
                    <Check size={14} className="text-[#48BB78]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="font-mono text-xs text-[#FFD23F] p-4 overflow-x-auto leading-relaxed my-2">
              {activeCodeTab === 'css' && currentSpec.cssCode}
              {activeCodeTab === 'tailwind' && currentSpec.tailwindCode}
              {activeCodeTab === 'framer' && currentSpec.framerMotionCode}
            </pre>

            <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-gray-400">
              <span>DOH-NUT SPEC-24 • HARDWARE ACCELERATED (GPU TRANSFORM)</span>
              <span>TESTED IN CHROME, SAFARI, FIREFOX</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          4. BRAND MOTION TOKENS CHEAT SHEET & TIMING MATRIX
          ======================================================== */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
        <div className="border-b-3 border-[#07334F] pb-4">
          <div className="flex items-center gap-2">
            <Zap size={22} className="text-[#297FC1]" />
            <h3 className="font-fun text-xl sm:text-2xl font-black text-[#07334F]">
              BRAND MOTION TIMING &amp; EASING TOKENS
            </h3>
          </div>
          <p className="text-xs font-bold text-[#07334F]/80 mt-0.5">
            Standard design tokens for engineers and animators to maintain consistent tempo across all digital touchpoints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Easing Token 1 */}
          <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-fun text-sm font-black text-[#D92F2F] uppercase">
                --ease-doh-spring
              </span>
              <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-[#07334F] font-bold">
                Overshoot
              </span>
            </div>
            <p className="text-xs font-mono font-bold text-[#07334F]">
              cubic-bezier(0.34, 1.56, 0.64, 1)
            </p>
            <p className="text-[11px] text-[#07334F]/80 font-medium">
              Primary brand spring curve with juicy overshoot bounce for entrances and rewards.
            </p>
          </div>

          {/* Easing Token 2 */}
          <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-fun text-sm font-black text-[#297FC1] uppercase">
                --ease-doh-squash
              </span>
              <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-[#07334F] font-bold">
                Elastic
              </span>
            </div>
            <p className="text-xs font-mono font-bold text-[#07334F]">
              cubic-bezier(0.68, -0.6, 0.32, 1.6)
            </p>
            <p className="text-[11px] text-[#07334F]/80 font-medium">
              Deep anticipation curve that pulls back slightly before snapping with violent force.
            </p>
          </div>

          {/* Easing Token 3 */}
          <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-fun text-sm font-black text-[#07334F] uppercase">
                --ease-doh-snap
              </span>
              <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-[#07334F] font-bold">
                Snappy UI
              </span>
            </div>
            <p className="text-xs font-mono font-bold text-[#07334F]">
              cubic-bezier(0.2, 0.8, 0.2, 1)
            </p>
            <p className="text-[11px] text-[#07334F]/80 font-medium">
              Ultra-fast micro-interaction curve for buttons, toggle switches, and tab changes.
            </p>
          </div>
        </div>

        {/* Duration Scale Table */}
        <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] space-y-3">
          <span className="font-fun text-xs font-black text-[#07334F] uppercase block">
            Official Duration Hierarchy
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
              <span className="font-bold text-[#07334F]/70 block text-[10px]">MICRO / INSTANT</span>
              <span className="font-black text-[#07334F] text-sm">120ms – 180ms</span>
              <span className="text-[10px] text-[#07334F]/70 block">Hover states &amp; press clicks</span>
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
              <span className="font-bold text-[#07334F]/70 block text-[10px]">SNAPPY ENTRANCE</span>
              <span className="font-black text-[#D92F2F] text-sm">350ms – 550ms</span>
              <span className="text-[10px] text-[#07334F]/70 block">Pop-in &amp; modal reveals</span>
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
              <span className="font-bold text-[#07334F]/70 block text-[10px]">JUICY BOUNCE</span>
              <span className="font-black text-[#297FC1] text-sm">750ms – 900ms</span>
              <span className="text-[10px] text-[#07334F]/70 block">Full dough bounce settle</span>
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
              <span className="font-bold text-[#07334F]/70 block text-[10px]">AMBIENT IDLE</span>
              <span className="font-black text-[#07334F] text-sm">2400ms – 3200ms</span>
              <span className="text-[10px] text-[#07334F]/70 block">Floating hero loops</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
