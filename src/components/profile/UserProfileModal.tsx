import React, { useState, useEffect } from 'react';
import { UserProfile } from '../../types';
import { DohBoyMascot } from '../brand/DohBoyMascot';
import { DonutIcon, StarSpark, StreetStickerBadge, SmileyBubble } from '../brand/GraphicElements';
import { BRAND_TAGLINES, COLOR_COMBINATIONS } from '../../data/brandData';
import {
  User,
  X,
  Edit3,
  Save,
  Gamepad2,
  Bookmark,
  Heart,
  Plus,
  Trash2,
  Award,
  Sparkles,
  Check,
  LogIn,
  UserPlus,
  Play,
  RotateCcw,
  Zap
} from 'lucide-react';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  onUpdateProfile: (updated: UserProfile) => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'preferences' | 'games' | 'auth'>('profile');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Form states
  const [username, setUsername] = useState<string>(profile.username);
  const [email, setEmail] = useState<string>(profile.email);
  const [role, setRole] = useState<string>(profile.role);
  const [bio, setBio] = useState<string>(profile.bio || '');
  const [avatarType, setAvatarType] = useState<UserProfile['avatarType']>(profile.avatarType);
  const [favoriteTagline, setFavoriteTagline] = useState<string>(profile.favoriteTagline);

  // Auth form states
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');
  const [authEmail, setAuthEmail] = useState<string>('');
  const [authName, setAuthName] = useState<string>('');

  // Mini Game State: Donut Rush (20s mini speed game)
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'ended'>('idle');
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(20);
  const [donutPosition, setDonutPosition] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  // Custom Donut Crafter State
  const [craftName, setCraftName] = useState<string>('Kuala Lumpur Street Glaze');
  const [craftGlaze, setCraftGlaze] = useState<string>('#EF9FBD');
  const [craftSprinkle, setCraftSprinkle] = useState<string>('Confetti Pop');

  useEffect(() => {
    setUsername(profile.username);
    setEmail(profile.email);
    setRole(profile.role);
    setBio(profile.bio || '');
    setAvatarType(profile.avatarType);
    setFavoriteTagline(profile.favoriteTagline);
  }, [profile]);

  // Mini-game timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
        // Randomly reposition target
        setDonutPosition({
          x: Math.floor(Math.random() * 80) + 10,
          y: Math.floor(Math.random() * 70) + 15
        });
      }, 1000);
    } else if (gameState === 'playing' && timeLeft === 0) {
      setGameState('ended');
      if (score > (profile.donutGameHighScore || 0)) {
        onUpdateProfile({
          ...profile,
          donutGameHighScore: score
        });
      }
    }
    return () => clearTimeout(timer);
  }, [gameState, timeLeft, score, profile, onUpdateProfile]);

  if (!isOpen) return null;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({
      ...profile,
      username,
      email,
      role,
      bio,
      avatarType,
      favoriteTagline
    });
    setIsEditing(false);
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authName.trim()) {
      onUpdateProfile({
        ...profile,
        username: authName.trim(),
        email: authEmail.trim() || `${authName.toLowerCase().replace(/\s+/g, '')}@dohnut.com`,
        role: authMode === 'signup' ? 'New Dough Enthusiast' : profile.role
      });
      setActiveTab('profile');
    }
  };

  const handleStartGame = () => {
    setScore(0);
    setTimeLeft(20);
    setGameState('playing');
    setDonutPosition({ x: 50, y: 50 });
  };

  const handleCatchDonut = () => {
    setScore((prev) => prev + 10);
    setDonutPosition({
      x: Math.floor(Math.random() * 80) + 10,
      y: Math.floor(Math.random() * 70) + 15
    });
  };

  const handleSaveCustomDonut = () => {
    if (!craftName.trim()) return;
    const newDonut = {
      id: `donut-${Date.now()}`,
      name: craftName.trim(),
      glazeColor: craftGlaze,
      sprinkleType: craftSprinkle,
      date: new Date().toLocaleDateString()
    };
    onUpdateProfile({
      ...profile,
      customDonutCreations: [newDonut, ...(profile.customDonutCreations || [])]
    });
    setCraftName('Street Strawberry Bomb');
  };

  const handleDeleteCustomDonut = (id: string) => {
    onUpdateProfile({
      ...profile,
      customDonutCreations: profile.customDonutCreations.filter((d) => d.id !== id)
    });
  };

  const renderAvatarGraphic = (type: UserProfile['avatarType'], size = 64) => {
    switch (type) {
      case 'dohboy-hero':
        return <DohBoyMascot pose="hero" size={size} />;
      case 'dohboy-happy':
        return <DohBoyMascot pose="happy" size={size} />;
      case 'dohboy-excited':
        return <DohBoyMascot pose="excited" size={size} />;
      case 'dohboy-eating':
        return <DohBoyMascot pose="eating" size={size} />;
      case 'donut-strawberry':
        return <DonutIcon size={size} glazeColor="#EF9FBD" />;
      case 'donut-cyan':
        return <DonutIcon size={size} glazeColor="#297FC1" />;
      case 'badge-street':
      default:
        return <StreetStickerBadge text="DOH" bgColor="#D92F2F" rotation={0} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07334F]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl border-4 border-[#07334F] shadow-[10px_10px_0px_0px_#07334F] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#FDEFEB] border-b-3 border-[#07334F]">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-[#D92F2F] text-white rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
              <User size={20} />
            </span>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#297FC1]">
                MEMBER DASHBOARD
              </span>
              <h3 className="font-fun text-xl font-black text-[#07334F]">
                DOH-NUT USER PROFILE & SAVED SYSTEM
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white text-[#07334F] border-2 border-[#07334F] hover:bg-[#D92F2F] hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b-3 border-[#07334F] bg-[#FDEFEB]/50 px-6 pt-3 gap-2 overflow-x-auto">
          {[
            { id: 'profile', label: 'My Profile', icon: User },
            { id: 'preferences', label: 'Saved Preferences', icon: Bookmark },
            { id: 'games', label: 'Saved Games & Crafter', icon: Gamepad2 },
            { id: 'auth', label: 'Account Switcher', icon: LogIn }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-t-2xl font-fun text-xs font-black uppercase tracking-wider border-t-2 border-x-2 border-[#07334F] transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-white text-[#D92F2F] -mb-[3px] border-b-3 border-b-white shadow-[2px_-2px_0px_0px_#07334F]'
                  : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#EF9FBD]/40'
              }`}
            >
              <tab.icon size={14} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Tab Contents */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* TAB 1: PROFILE DASHBOARD & EDIT */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              {!isEditing ? (
                /* Profile Summary View */
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-[#FDEFEB] rounded-3xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F]">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-2xl bg-white border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] flex items-center justify-center overflow-hidden p-2">
                        {renderAvatarGraphic(profile.avatarType, 60)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-fun text-2xl font-black text-[#07334F]">
                            {profile.username}
                          </h4>
                          <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-[#297FC1] text-white">
                            PRO
                          </span>
                        </div>
                        <p className="text-xs font-bold text-[#D92F2F]">{profile.role}</p>
                        <p className="text-[11px] font-mono text-[#07334F]/70">{profile.email}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-4 py-2 bg-[#D92F2F] text-white text-xs font-black rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] hover:bg-[#B72424] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center gap-1.5"
                    >
                      <Edit3 size={14} />
                      <span>Edit Profile</span>
                    </button>
                  </div>

                  {/* Profile Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-white rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-2">
                      <span className="text-[10px] font-black uppercase text-[#297FC1]">
                        Favorite Brand Motto
                      </span>
                      <p className="font-fun text-sm font-black text-[#07334F]">
                        "{profile.favoriteTagline || 'GOOD DOUGH. BAD ATTITUDE.'}"
                      </p>
                    </div>

                    <div className="p-5 bg-white rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-2">
                      <span className="text-[10px] font-black uppercase text-[#297FC1]">
                        Mini-Game High Score
                      </span>
                      <div className="flex items-center gap-2">
                        <Award className="text-[#FFD23F]" size={20} />
                        <span className="font-fun text-xl font-black text-[#D92F2F]">
                          {profile.donutGameHighScore || 0} PTS
                        </span>
                      </div>
                    </div>
                  </div>

                  {profile.bio && (
                    <div className="p-5 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] space-y-1">
                      <span className="text-[10px] font-black uppercase text-[#07334F]">
                        Studio Bio / Design Philosophy:
                      </span>
                      <p className="text-xs font-medium text-[#07334F] leading-relaxed">
                        {profile.bio}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                /* Profile Edit Form */
                <form onSubmit={handleSaveProfile} className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-fun text-lg font-black text-[#07334F]">
                      Customize Profile Information
                    </h4>

                    {/* Avatar Selector */}
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-[#07334F] block">
                        Choose Mascot Avatar:
                      </label>
                      <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                        {[
                          { id: 'dohboy-hero', label: 'Hero' },
                          { id: 'dohboy-happy', label: 'Happy' },
                          { id: 'dohboy-excited', label: 'Excited' },
                          { id: 'dohboy-eating', label: 'Eating' },
                          { id: 'donut-strawberry', label: 'Berry' },
                          { id: 'donut-cyan', label: 'Cyan' },
                          { id: 'badge-street', label: 'Badge' }
                        ].map((av) => (
                          <button
                            type="button"
                            key={av.id}
                            onClick={() => setAvatarType(av.id as any)}
                            className={`p-2 rounded-2xl border-2 border-[#07334F] flex flex-col items-center gap-1 transition-all ${
                              avatarType === av.id
                                ? 'bg-[#FFD23F] ring-3 ring-[#D92F2F] scale-105 shadow-[2px_2px_0px_0px_#07334F]'
                                : 'bg-[#FDEFEB] hover:bg-white'
                            }`}
                          >
                            <div className="w-10 h-10 flex items-center justify-center">
                              {renderAvatarGraphic(av.id as any, 36)}
                            </div>
                            <span className="text-[9px] font-black uppercase text-[#07334F]">
                              {av.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Username & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-black uppercase text-[#07334F] block mb-1">
                          Username:
                        </label>
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                          className="w-full px-3 py-2 rounded-xl border-2 border-[#07334F] bg-[#FDEFEB] text-xs font-bold text-[#07334F] focus:bg-white outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-black uppercase text-[#07334F] block mb-1">
                          Email Address:
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-3 py-2 rounded-xl border-2 border-[#07334F] bg-[#FDEFEB] text-xs font-bold text-[#07334F] focus:bg-white outline-none"
                        />
                      </div>
                    </div>

                    {/* Role & Favorite Tagline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-black uppercase text-[#07334F] block mb-1">
                          Design Role / Title:
                        </label>
                        <input
                          type="text"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          placeholder="e.g. Lead Brand Designer"
                          className="w-full px-3 py-2 rounded-xl border-2 border-[#07334F] bg-[#FDEFEB] text-xs font-bold text-[#07334F] focus:bg-white outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-black uppercase text-[#07334F] block mb-1">
                          Favorite Tagline:
                        </label>
                        <select
                          value={favoriteTagline}
                          onChange={(e) => setFavoriteTagline(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border-2 border-[#07334F] bg-[#FDEFEB] text-xs font-bold text-[#07334F] focus:bg-white outline-none"
                        >
                          {BRAND_TAGLINES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Bio */}
                    <div>
                      <label className="text-xs font-black uppercase text-[#07334F] block mb-1">
                        Bio / Note:
                      </label>
                      <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        rows={2}
                        placeholder="Share your design focus or donut preferences..."
                        className="w-full px-3 py-2 rounded-xl border-2 border-[#07334F] bg-[#FDEFEB] text-xs font-bold text-[#07334F] focus:bg-white outline-none"
                      />
                    </div>
                  </div>

                  {/* Form Action Buttons */}
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 bg-white text-[#07334F] text-xs font-black rounded-xl border-2 border-[#07334F] hover:bg-[#FDEFEB]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#D92F2F] text-white text-xs font-black rounded-xl border-2 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] hover:bg-[#B72424] flex items-center gap-1.5"
                    >
                      <Save size={14} />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: SAVED PREFERENCES */}
          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-fun text-lg font-black text-[#07334F]">
                  Saved Brand Color Palettes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {COLOR_COMBINATIONS.slice(0, 4).map((c) => (
                    <div
                      key={c.id}
                      className="p-4 rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] flex items-center justify-between"
                      style={{ backgroundColor: c.bg, color: c.headline }}
                    >
                      <div>
                        <span className="font-fun text-sm font-black block">{c.title}</span>
                        <span className="text-[10px] font-bold opacity-90">{c.rating}</span>
                      </div>
                      <span className="p-1.5 bg-white/20 rounded-full">
                        <Heart size={16} fill="currentColor" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Saved Pattern Presets */}
              <div className="space-y-3 pt-3 border-t-2 border-[#07334F]/20">
                <h4 className="font-fun text-lg font-black text-[#07334F]">
                  Favorite Pattern Systems
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Dense Pattern', 'Sparse Pattern', 'Border Tape', 'Packaging Box'].map((pat) => (
                    <div
                      key={pat}
                      className="p-3 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center space-y-1"
                    >
                      <span className="font-fun text-xs font-black text-[#07334F] block">
                        {pat}
                      </span>
                      <span className="text-[9px] font-bold text-[#48BB78]">✓ BOOKMARKED</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SAVED GAMES & DONUT CRAFTER */}
          {activeTab === 'games' && (
            <div className="space-y-8">
              {/* Mini-Game: DOH-NUT RUSH */}
              <div className="p-6 bg-[#07334F] text-[#FDEFEB] rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#297FC1] space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-white/20 pb-3">
                  <div className="flex items-center gap-2">
                    <Zap className="text-[#FFD23F]" size={20} />
                    <h4 className="font-fun text-lg font-black text-[#FFD23F]">
                      MINI-GAME: DOH-NUT RUSH (20 SECONDS)
                    </h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-black text-white bg-white/20 px-3 py-1 rounded-xl">
                      HIGH SCORE: {profile.donutGameHighScore || 0}
                    </span>
                  </div>
                </div>

                {gameState === 'idle' && (
                  <div className="text-center py-6 space-y-3">
                    <p className="text-xs font-bold text-[#FDEFEB]/90 max-w-md mx-auto">
                      Click the flying glazed donuts as fast as you can before the 20-second timer runs out. Build your score and top the bakery leaderboard!
                    </p>
                    <button
                      onClick={handleStartGame}
                      className="px-6 py-2.5 bg-[#D92F2F] text-white text-xs font-black rounded-2xl border-2 border-white shadow-[3px_3px_0px_0px_#FFD23F] hover:bg-[#B72424] flex items-center gap-2 mx-auto"
                    >
                      <Play size={16} />
                      <span>Start 20s Challenge</span>
                    </button>
                  </div>
                )}

                {gameState === 'playing' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-black">
                      <span className="text-[#FFD23F]">SCORE: {score} PTS</span>
                      <span className="text-[#EF9FBD]">TIME LEFT: {timeLeft}s</span>
                    </div>

                    {/* Game Stage Canvas */}
                    <div className="relative w-full h-48 bg-[#FDEFEB] rounded-2xl border-3 border-white overflow-hidden cursor-crosshair">
                      <button
                        onClick={handleCatchDonut}
                        style={{
                          position: 'absolute',
                          left: `${donutPosition.x}%`,
                          top: `${donutPosition.y}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        className="transition-all duration-300 hover:scale-125 active:scale-90"
                      >
                        <DonutIcon size={44} glazeColor="#EF9FBD" />
                      </button>
                    </div>
                  </div>
                )}

                {gameState === 'ended' && (
                  <div className="text-center py-6 space-y-3">
                    <span className="text-xl font-black font-fun text-[#FFD23F] block">
                      GAME OVER! FINAL SCORE: {score} PTS 🍩
                    </span>
                    {score >= (profile.donutGameHighScore || 0) && (
                      <p className="text-xs font-bold text-[#48BB78]">
                        🎉 NEW PERSONAL RECORD SAVED TO PROFILE!
                      </p>
                    )}
                    <button
                      onClick={handleStartGame}
                      className="px-6 py-2 bg-[#297FC1] text-white text-xs font-black rounded-2xl border-2 border-white flex items-center gap-2 mx-auto"
                    >
                      <RotateCcw size={16} />
                      <span>Play Again</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Custom Donut Crafter Lab */}
              <div className="p-6 bg-white rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-5">
                <div className="flex items-center justify-between border-b-3 border-[#07334F] pb-3">
                  <h4 className="font-fun text-lg font-black text-[#07334F]">
                    CUSTOM FLAVOR CRAFTER & SAVED RECIPES
                  </h4>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded bg-[#FFD23F] text-[#07334F]">
                    FLAVOR LAB
                  </span>
                </div>

                {/* Crafter Controls */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="flex flex-col items-center justify-center p-4 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F]">
                    <DonutIcon size={72} glazeColor={craftGlaze} />
                    <span className="text-[10px] font-black uppercase text-[#07334F] mt-2">
                      {craftSprinkle}
                    </span>
                  </div>

                  <div className="space-y-3 md:col-span-2">
                    <div>
                      <label className="text-[11px] font-black uppercase text-[#07334F] block mb-1">
                        Donut Flavor Name:
                      </label>
                      <input
                        type="text"
                        value={craftName}
                        onChange={(e) => setCraftName(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-xl border-2 border-[#07334F] bg-[#FDEFEB] text-xs font-bold text-[#07334F]"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-black uppercase text-[#07334F]">
                        Glaze:
                      </span>
                      {[
                        { name: 'Strawberry', hex: '#EF9FBD' },
                        { name: 'Red Velvet', hex: '#D92F2F' },
                        { name: 'Electric Cyan', hex: '#297FC1' },
                        { name: 'Dark Choc', hex: '#07334F' },
                        { name: 'Mango Yellow', hex: '#FFD23F' }
                      ].map((g) => (
                        <button
                          key={g.hex}
                          type="button"
                          onClick={() => setCraftGlaze(g.hex)}
                          title={g.name}
                          className={`w-6 h-6 rounded-full border-2 border-[#07334F] transition-transform ${
                            craftGlaze === g.hex ? 'scale-125 ring-2 ring-[#07334F]' : ''
                          }`}
                          style={{ backgroundColor: g.hex }}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={handleSaveCustomDonut}
                      className="px-4 py-2 bg-[#D92F2F] text-white text-xs font-black rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] hover:bg-[#B72424] flex items-center gap-1.5"
                    >
                      <Plus size={14} />
                      <span>Save Flavor to My Profile</span>
                    </button>
                  </div>
                </div>

                {/* List of Saved Custom Donuts */}
                {profile.customDonutCreations && profile.customDonutCreations.length > 0 && (
                  <div className="space-y-2 pt-3 border-t-2 border-[#07334F]/20">
                    <span className="text-xs font-black uppercase text-[#07334F]">
                      My Saved Donut Creeds:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {profile.customDonutCreations.map((d) => (
                        <div
                          key={d.id}
                          className="p-3 bg-[#FDEFEB] rounded-xl border-2 border-[#07334F] flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className="w-5 h-5 rounded-full border border-[#07334F]"
                              style={{ backgroundColor: d.glazeColor }}
                            />
                            <span className="text-xs font-black text-[#07334F]">{d.name}</span>
                          </div>
                          <button
                            onClick={() => handleDeleteCustomDonut(d.id)}
                            className="text-[#D92F2F] hover:opacity-70 p-1"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: ACCOUNT SWITCHER / SIGN UP */}
          {activeTab === 'auth' && (
            <div className="max-w-md mx-auto p-6 bg-[#FDEFEB] rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-4">
              <div className="flex items-center justify-between border-b-2 border-[#07334F] pb-3">
                <h4 className="font-fun text-lg font-black text-[#07334F]">
                  {authMode === 'signup' ? 'Create New Member Account' : 'Log In Existing Member'}
                </h4>
                <button
                  type="button"
                  onClick={() => setAuthMode(authMode === 'signup' ? 'login' : 'signup')}
                  className="text-xs font-black text-[#D92F2F] underline"
                >
                  {authMode === 'signup' ? 'Switch to Log In' : 'Switch to Sign Up'}
                </button>
              </div>

              <form onSubmit={handleAuthSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-black uppercase text-[#07334F] block mb-1">
                    Username / Handle:
                  </label>
                  <input
                    type="text"
                    value={authName}
                    onChange={(e) => setAuthName(e.target.value)}
                    required
                    placeholder="e.g. DoughRiderKL"
                    className="w-full px-3 py-2 rounded-xl border-2 border-[#07334F] bg-white text-xs font-bold text-[#07334F] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-black uppercase text-[#07334F] block mb-1">
                    Email:
                  </label>
                  <input
                    type="email"
                    value={authEmail}
                    onChange={(e) => setAuthEmail(e.target.value)}
                    placeholder="e.g. rider@dohnut.com"
                    className="w-full px-3 py-2 rounded-xl border-2 border-[#07334F] bg-white text-xs font-bold text-[#07334F] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#D92F2F] text-white text-xs font-black rounded-xl border-2 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] hover:bg-[#B72424] flex items-center justify-center gap-2"
                >
                  {authMode === 'signup' ? <UserPlus size={16} /> : <LogIn size={16} />}
                  <span>{authMode === 'signup' ? 'Complete Sign Up' : 'Log In & Load Profile'}</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
