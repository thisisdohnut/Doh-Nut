import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  RefreshCw,
  Copy,
  Check,
  Flame,
  Bookmark,
  BookmarkCheck,
  Lock,
  Unlock,
  Sliders,
  Dice5,
  Tag,
  Palette,
  Volume2,
  Trash2,
  Share2
} from 'lucide-react';
import { StarSpark, DonutIcon, StreetStickerBadge, DohLetteringBadge } from './GraphicElements';
import { DohBoyMascot } from './DohBoyMascot';

interface FlavorPreset {
  name: string;
  base: string;
  descriptor: string;
  tagline: string;
  notes: string;
  glazeColor: string;
  price: string;
  spiceLevel: number;
  sweetLevel: number;
}

const BASES = [
  'Glazed Ring',
  'Stuffed Bomboloni',
  'Mini Poppers',
  'Brioche Ring',
  'French Cruller',
  'Double-Dip Donut',
  'Crispy Fritter',
  'Twisted Bar',
  'Custard Pocket',
  'Sourdough Ring',
  'Pull-Apart Cloud',
  'Churro Loop'
];

const DESCRIPTORS = [
  { name: 'Electric Cyan', glaze: '#297FC1', tag: 'CYBER', notes: 'Zesty blue curaçao syrup, popping sugar gravel, and citrus shockwave.' },
  { name: 'Strawberry Riot', glaze: '#EF9FBD', tag: 'PUNK', notes: 'Tart strawberry reduction, ruby chocolate drizzle, and freeze-dried berry shards.' },
  { name: 'Chili Mango Anarchy', glaze: '#FFD23F', tag: 'SPICY', notes: 'Harumanis mango coulis, chili-lime dust, and smoky salt crystal kick.' },
  { name: 'Midnight Matcha', glaze: '#07334F', tag: 'DARK', notes: 'Ceremonial Uji matcha, dark chocolate ganache, and roasted sesame crisp.' },
  { name: 'Salted Pandan Chaos', glaze: '#48BB78', tag: 'LOCAL', notes: 'Fresh screwpine pandan glaze, caramelized coconut crunch, and flaky sea salt.' },
  { name: 'Caramel Overdrive', glaze: '#E8B072', tag: 'SWEET', notes: 'Burnt butter salted caramel, pretzel chunks, and honeycomb shatter.' },
  { name: 'Smoky Kaya Rebellion', glaze: '#D97706', tag: 'LOCAL', notes: 'Hickory-smoked coconut egg jam, salted butter core, and toasted milk skin.' },
  { name: 'Neon Butter Gold', glaze: '#FFD23F', tag: 'RICH', notes: 'Whipped French cultured butter glaze, toasted brioche crumbs, and gold leaf.' },
  { name: 'Spicy Cocoa Havoc', glaze: '#D92F2F', tag: 'SPICY', notes: '70% dark Belgian chocolate infused with bird’s eye chili oil and cinnamon.' },
  { name: 'Yuzu Lightning', glaze: '#FCD34D', tag: 'SOUR', notes: 'Japanese yuzu glaze with sour sherbet dust and candied peel confetti.' },
  { name: 'Gula Melaka Blackout', glaze: '#451A03', tag: 'LOCAL', notes: 'Pure Melaka palm sugar syrup, smoked sea salt, and roasted cashew brittle.' },
  { name: 'Dragonfruit Cyberpunk', glaze: '#EC4899', tag: 'NEON', notes: 'Vibrant pink pitaya glaze, calamansi sour mist, and black chia sprinkles.' },
  { name: 'Ube Velvet Rage', glaze: '#8B5CF6', tag: 'CREAMY', notes: 'Velvety purple yam buttercream, coconut condensed milk drip, and crushed latik.' }
];

const TAGLINES = [
  'BITE FIRST. APOLOGIZE NEVER.',
  'HOT DOUGH. WILD ATTITUDE.',
  'STREET FLAVORS. ZERO COMPROMISE.',
  'TOO LOUD FOR ORDINARY TASTEBUDS.',
  'SUGAR RUSH WITH A VENGEANCE.',
  'HAND-FRIED CHAOS IN EVERY CRUMB.',
  'THE REBEL BATCH YOU WERE WARNED ABOUT.'
];

const MOOD_PRESETS = [
  { label: '🔥 Spicy & Wild', descriptor: 'Chili Mango Anarchy', base: 'Stuffed Bomboloni' },
  { label: '🇲🇾 Malaysian Rebel', descriptor: 'Salted Pandan Chaos', base: 'Brioche Ring' },
  { label: '⚡ Neon Candy', descriptor: 'Electric Cyan', base: 'Glazed Ring' },
  { label: '🌙 Midnight Dark', descriptor: 'Midnight Matcha', base: 'Double-Dip Donut' },
  { label: '🍓 Berry Riot', descriptor: 'Strawberry Riot', base: 'Mini Poppers' }
];

const COLOR_THEMES = [
  { id: 'red', name: 'Flame Red', bg: '#D92F2F', text: '#FDEFEB', accent: '#FFD23F' },
  { id: 'cyan', name: 'Street Cyan', bg: '#297FC1', text: '#FDEFEB', accent: '#FFD23F' },
  { id: 'navy', name: 'Midnight Navy', bg: '#07334F', text: '#FDEFEB', accent: '#EF9FBD' },
  { id: 'cream', name: 'Pastry Cream', bg: '#FDEFEB', text: '#07334F', accent: '#D92F2F' },
  { id: 'gold', name: 'Butter Gold', bg: '#FFD23F', text: '#07334F', accent: '#D92F2F' }
];

export const DohNutFlavorGenerator: React.FC = () => {
  const [currentBase, setCurrentBase] = useState<string>('Stuffed Bomboloni');
  const [currentDescriptor, setCurrentDescriptor] = useState(DESCRIPTORS[1]); // Strawberry Riot
  const [currentTagline, setCurrentTagline] = useState<string>('BITE FIRST. APOLOGIZE NEVER.');
  const [currentPrice, setCurrentPrice] = useState<string>('RM 7.50');
  const [spiceRating, setSpiceRating] = useState<number>(2);
  const [sweetRating, setSweetRating] = useState<number>(4);
  const [crunchRating, setCrunchRating] = useState<number>(5);

  const [lockBase, setLockBase] = useState<boolean>(false);
  const [lockDescriptor, setLockDescriptor] = useState<boolean>(false);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTheme, setActiveTheme] = useState(COLOR_THEMES[0]);

  const [savedFlavors, setSavedFlavors] = useState<FlavorPreset[]>([
    {
      name: 'Strawberry Riot Stuffed Bomboloni',
      base: 'Stuffed Bomboloni',
      descriptor: 'Strawberry Riot',
      tagline: 'BITE FIRST. APOLOGIZE NEVER.',
      notes: 'Tart strawberry reduction, ruby chocolate drizzle, and freeze-dried berry shards.',
      glazeColor: '#EF9FBD',
      price: 'RM 7.50',
      spiceLevel: 1,
      sweetLevel: 5
    },
    {
      name: 'Electric Cyan Glazed Ring',
      base: 'Glazed Ring',
      descriptor: 'Electric Cyan',
      tagline: 'TOO LOUD FOR ORDINARY TASTEBUDS.',
      notes: 'Zesty blue curaçao syrup, popping sugar gravel, and citrus shockwave.',
      glazeColor: '#297FC1',
      price: 'RM 6.80',
      spiceLevel: 0,
      sweetLevel: 4
    }
  ]);

  const rollNewFlavor = () => {
    setIsRolling(true);

    setTimeout(() => {
      if (!lockBase) {
        const randomBase = BASES[Math.floor(Math.random() * BASES.length)];
        setCurrentBase(randomBase);
      }

      if (!lockDescriptor) {
        const randomDesc = DESCRIPTORS[Math.floor(Math.random() * DESCRIPTORS.length)];
        setCurrentDescriptor(randomDesc);
      }

      const randomTagline = TAGLINES[Math.floor(Math.random() * TAGLINES.length)];
      setCurrentTagline(randomTagline);

      // Randomize price between RM 5.50 and RM 8.90
      const prices = ['RM 5.90', 'RM 6.50', 'RM 6.90', 'RM 7.20', 'RM 7.50', 'RM 7.90', 'RM 8.50'];
      setCurrentPrice(prices[Math.floor(Math.random() * prices.length)]);

      setSpiceRating(Math.floor(Math.random() * 5) + 1);
      setSweetRating(Math.floor(Math.random() * 4) + 2);
      setCrunchRating(Math.floor(Math.random() * 4) + 2);

      setIsRolling(false);
    }, 280);
  };

  const applyPreset = (preset: { descriptor: string; base: string }) => {
    const foundDesc = DESCRIPTORS.find((d) => d.name === preset.descriptor) || DESCRIPTORS[0];
    setCurrentDescriptor(foundDesc);
    setCurrentBase(preset.base);
    const randomTagline = TAGLINES[Math.floor(Math.random() * TAGLINES.length)];
    setCurrentTagline(randomTagline);
  };

  const fullFlavorTitle = `${currentDescriptor.name} ${currentBase}`;

  const copyToClipboard = () => {
    const textToCopy = `🍩 DOH-NUT FLAVOR CONCEPT:
"${fullFlavorTitle.toUpperCase()}"
Tagline: "${currentTagline}"
Price: ${currentPrice}
Taste Profile: ${currentDescriptor.notes}
Ratings: Sweetness ${sweetRating}/5 • Crunch ${crunchRating}/5 • Attitude ${spiceRating}/5
#DOHNUT #GoodDoughBadAttitude #StreetFlavors`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const saveFlavorToRoster = () => {
    const isAlreadySaved = savedFlavors.some((f) => f.name === fullFlavorTitle);
    if (!isAlreadySaved) {
      setSavedFlavors([
        {
          name: fullFlavorTitle,
          base: currentBase,
          descriptor: currentDescriptor.name,
          tagline: currentTagline,
          notes: currentDescriptor.notes,
          glazeColor: currentDescriptor.glaze,
          price: currentPrice,
          spiceLevel: spiceRating,
          sweetLevel: sweetRating
        },
        ...savedFlavors
      ]);
    }
  };

  const deleteSavedFlavor = (index: number) => {
    setSavedFlavors(savedFlavors.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-3 border-[#07334F] pb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#D92F2F] text-white flex items-center justify-center border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
            <Dice5 size={24} className={isRolling ? 'animate-spin' : ''} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-fun text-xl sm:text-2xl font-black text-[#07334F]">
                DOH-NUT FLAVOR CONCEPT LAB
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-[#FFD23F] text-[#07334F] font-fun text-[10px] font-black uppercase tracking-wider border border-[#07334F]">
                NEW TOOL
              </span>
            </div>
            <p className="text-xs font-bold text-[#07334F]/80">
              Combine street-edgy descriptors with artisanal dough bases and preview in the official typography system.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={rollNewFlavor}
            disabled={isRolling}
            className="px-4 py-2 rounded-xl bg-[#D92F2F] hover:bg-[#b82525] text-white font-fun text-xs sm:text-sm font-black uppercase tracking-wider border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2"
          >
            <RefreshCw size={16} className={isRolling ? 'animate-spin' : ''} />
            <span>Roll New Flavor</span>
          </button>
        </div>
      </div>

      {/* Preset Fast Selection Chips */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-black text-[#07334F] uppercase tracking-wider flex items-center gap-1 mr-1">
          <Sparkles size={14} className="text-[#FFD23F]" /> Fast Moods:
        </span>
        {MOOD_PRESETS.map((preset) => (
          <button
            key={preset.label}
            onClick={() => applyPreset(preset)}
            className="px-3 py-1 bg-[#FDEFEB] hover:bg-[#FFD23F] text-[#07334F] font-fun text-xs font-black rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Manual Selectors & Lock Toggles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-[#FDEFEB] p-4 rounded-2xl border-3 border-[#07334F]">
        {/* Edgy Descriptor Selector */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-black text-[#07334F] uppercase tracking-wider">
              1. Edgy Descriptor
            </label>
            <button
              onClick={() => setLockDescriptor(!lockDescriptor)}
              className={`p-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors ${
                lockDescriptor ? 'bg-[#D92F2F] text-white' : 'bg-white text-[#07334F]'
              }`}
              title={lockDescriptor ? 'Locked from random roll' : 'Click to lock during roll'}
            >
              {lockDescriptor ? <Lock size={12} /> : <Unlock size={12} />}
              <span className="text-[9px]">{lockDescriptor ? 'Locked' : 'Unlocked'}</span>
            </button>
          </div>
          <select
            value={currentDescriptor.name}
            onChange={(e) => {
              const found = DESCRIPTORS.find((d) => d.name === e.target.value);
              if (found) setCurrentDescriptor(found);
            }}
            className="w-full bg-white text-[#07334F] text-xs font-bold p-2 rounded-xl border-2 border-[#07334F] focus:outline-none focus:ring-2 focus:ring-[#D92F2F] cursor-pointer"
          >
            {DESCRIPTORS.map((d) => (
              <option key={d.name} value={d.name}>
                {d.name} ({d.tag})
              </option>
            ))}
          </select>
        </div>

        {/* Dough Base Selector */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-black text-[#07334F] uppercase tracking-wider">
              2. Dough Base
            </label>
            <button
              onClick={() => setLockBase(!lockBase)}
              className={`p-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors ${
                lockBase ? 'bg-[#D92F2F] text-white' : 'bg-white text-[#07334F]'
              }`}
              title={lockBase ? 'Locked from random roll' : 'Click to lock during roll'}
            >
              {lockBase ? <Lock size={12} /> : <Unlock size={12} />}
              <span className="text-[9px]">{lockBase ? 'Locked' : 'Unlocked'}</span>
            </button>
          </div>
          <select
            value={currentBase}
            onChange={(e) => setCurrentBase(e.target.value)}
            className="w-full bg-white text-[#07334F] text-xs font-bold p-2 rounded-xl border-2 border-[#07334F] focus:outline-none focus:ring-2 focus:ring-[#D92F2F] cursor-pointer"
          >
            {BASES.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Price & Badge */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-[#07334F] uppercase tracking-wider block">
            3. Price Point Lockup
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={currentPrice}
              onChange={(e) => setCurrentPrice(e.target.value)}
              className="w-full bg-white text-[#07334F] font-fun text-xs font-black p-2 rounded-xl border-2 border-[#07334F] focus:outline-none focus:ring-2 focus:ring-[#D92F2F]"
            />
          </div>
        </div>

        {/* Display Card Color Theme */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-[#07334F] uppercase tracking-wider block">
            4. Display Palette
          </label>
          <div className="flex items-center gap-1.5 pt-0.5">
            {COLOR_THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme)}
                className={`w-7 h-7 rounded-lg border-2 transition-all flex items-center justify-center ${
                  activeTheme.id === theme.id
                    ? 'border-[#07334F] scale-110 shadow-sm ring-2 ring-[#07334F]'
                    : 'border-transparent opacity-80 hover:opacity-100'
                }`}
                style={{ backgroundColor: theme.bg }}
                title={theme.name}
              >
                {activeTheme.id === theme.id && (
                  <Check size={14} style={{ color: theme.text }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MAIN LIVE TYPOGRAPHY SHOWCASE CARD
          ======================================================== */}
      <div
        className="p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[8px_8px_0px_0px_#07334F] transition-all duration-300 relative overflow-hidden space-y-6"
        style={{ backgroundColor: activeTheme.bg, color: activeTheme.text }}
      >
        {/* Background Decorative Donut Drip Silhouette */}
        <div className="absolute -right-8 -bottom-8 opacity-15 pointer-events-none transform rotate-12">
          <DonutIcon size={200} glazeColor={currentDescriptor.glaze} />
        </div>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-2">
            <span
              className="px-3 py-1 rounded-xl text-xs font-fun font-black uppercase tracking-wider border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]"
              style={{ backgroundColor: activeTheme.accent, color: '#07334F' }}
            >
              ★ LIMITED DROP #{Math.floor(Math.random() * 80 + 10)}
            </span>
            <span className="px-2.5 py-1 rounded-xl bg-black/20 text-xs font-mono font-bold backdrop-blur-sm">
              STYLE SPEC: H1 TITAN ONE + H2 FREDOKA
            </span>
          </div>

          <div
            className="px-4 py-1.5 rounded-2xl border-3 border-[#07334F] font-fun text-sm sm:text-base font-black shadow-[3px_3px_0px_0px_#07334F]"
            style={{ backgroundColor: '#FFD23F', color: '#07334F' }}
          >
            {currentPrice}
          </div>
        </div>

        {/* Main Flavor Typographic Hierarchy */}
        <div className="space-y-2 relative z-10">
          {/* H1 Display Font: Titan One */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 p-2 bg-white/20 rounded-2xl border-2 border-white/40 shadow-sm hidden sm:block">
              <DonutIcon size={56} glazeColor={currentDescriptor.glaze} />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase opacity-80 block">
                TYPOGRAPHY LEVEL 1 • DISPLAY HEADLINE (TITAN ONE)
              </span>
              <h2 className="font-fun text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none drop-shadow-sm uppercase">
                {fullFlavorTitle}
              </h2>
            </div>
          </div>

          {/* H2 Tagline Subhead: Fredoka 800 */}
          <div className="pt-2">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase opacity-80 block mb-1">
              TYPOGRAPHY LEVEL 2 • ATTITUDE SUBHEAD (FREDOKA 800)
            </span>
            <p
              className="font-display text-lg sm:text-2xl font-black tracking-wide uppercase"
              style={{ color: activeTheme.accent }}
            >
              "{currentTagline}"
            </p>
          </div>

          {/* Body Copy: Plus Jakarta Sans */}
          <div className="pt-2 max-w-2xl">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase opacity-80 block mb-1">
              TYPOGRAPHY LEVEL 3 • TASTE NOTES & BODY COPY (PLUS JAKARTA SANS 600)
            </span>
            <p className="font-sans text-sm sm:text-base font-medium leading-relaxed opacity-95">
              {currentDescriptor.notes} Hand-crafted brioche fried hourly in small artisan batches with zero artificial preservatives.
            </p>
          </div>
        </div>

        {/* Sensory Metrics Radar / Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 relative z-10">
          <div className="p-3 bg-black/15 rounded-2xl border border-white/20 space-y-1">
            <div className="flex justify-between text-xs font-bold">
              <span>Street Attitude</span>
              <span className="font-mono">{spiceRating}/5</span>
            </div>
            <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[#D92F2F] h-full rounded-full transition-all"
                style={{ width: `${(spiceRating / 5) * 100}%` }}
              />
            </div>
          </div>

          <div className="p-3 bg-black/15 rounded-2xl border border-white/20 space-y-1">
            <div className="flex justify-between text-xs font-bold">
              <span>Sweetness Rush</span>
              <span className="font-mono">{sweetRating}/5</span>
            </div>
            <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[#FFD23F] h-full rounded-full transition-all"
                style={{ width: `${(sweetRating / 5) * 100}%` }}
              />
            </div>
          </div>

          <div className="p-3 bg-black/15 rounded-2xl border border-white/20 space-y-1">
            <div className="flex justify-between text-xs font-bold">
              <span>Crunch Factor</span>
              <span className="font-mono">{crunchRating}/5</span>
            </div>
            <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[#297FC1] h-full rounded-full transition-all"
                style={{ width: `${(crunchRating / 5) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t-2 border-white/20 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold opacity-90">
            <span className="w-2.5 h-2.5 rounded-full animate-ping" style={{ backgroundColor: currentDescriptor.glaze }} />
            <span>Glaze Hex: <code className="font-mono">{currentDescriptor.glaze}</code></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={saveFlavorToRoster}
              className="px-3.5 py-2 rounded-xl bg-white text-[#07334F] hover:bg-[#FFD23F] font-fun text-xs font-black uppercase tracking-wider border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex items-center gap-1.5"
            >
              <Bookmark size={14} className="text-[#D92F2F]" />
              <span>Save to Roster</span>
            </button>

            <button
              onClick={copyToClipboard}
              className="px-3.5 py-2 rounded-xl bg-[#07334F] text-[#FDEFEB] hover:bg-[#D92F2F] font-fun text-xs font-black uppercase tracking-wider border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex items-center gap-1.5"
            >
              {copied ? <Check size={14} className="text-[#48BB78]" /> : <Copy size={14} />}
              <span>{copied ? 'Copied Concept!' : 'Copy Concept'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Saved Flavor Roster Vault */}
      {savedFlavors.length > 0 && (
        <div className="bg-[#FDEFEB] p-5 rounded-2xl border-3 border-[#07334F] space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-fun text-sm font-black text-[#07334F] uppercase flex items-center gap-1.5">
              <BookmarkCheck size={16} className="text-[#D92F2F]" />
              Saved Flavor Concepts Roster ({savedFlavors.length})
            </span>
            <span className="text-[10px] font-bold text-[#07334F]/70">
              Click any flavor to reload into generator
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {savedFlavors.map((item, idx) => (
              <div
                key={idx}
                className="p-3 bg-white rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] flex items-center justify-between group hover:border-[#D92F2F] transition-all cursor-pointer"
                onClick={() => {
                  const foundDesc = DESCRIPTORS.find((d) => d.name === item.descriptor) || DESCRIPTORS[0];
                  setCurrentDescriptor(foundDesc);
                  setCurrentBase(item.base);
                  setCurrentTagline(item.tagline);
                  setCurrentPrice(item.price);
                }}
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div
                    className="w-8 h-8 rounded-lg border border-[#07334F] flex items-center justify-center shrink-0"
                    style={{ backgroundColor: item.glazeColor }}
                  >
                    <DonutIcon size={20} glazeColor="#FFFFFF" />
                  </div>
                  <div className="truncate">
                    <span className="font-fun text-xs font-black text-[#07334F] block truncate group-hover:text-[#D92F2F]">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#07334F]/70 block">
                      {item.price} • {item.tagline}
                    </span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteSavedFlavor(idx);
                  }}
                  className="p-1 text-gray-400 hover:text-[#D92F2F] rounded-lg transition-colors ml-2"
                  title="Remove from roster"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
