import React, { useState } from 'react';
import {
  Type,
  Palette,
  Sparkles,
  Sliders,
  Copy,
  Check,
  RotateCcw,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Code,
  Layers,
  CheckCircle2,
  Tag,
  ArrowRight,
  Info,
  Maximize2
} from 'lucide-react';

export type ColorSchemeId = 'primary' | 'secondary' | 'accent' | 'navy' | 'cream';

interface ColorScheme {
  id: ColorSchemeId;
  name: string;
  badge: string;
  bgClass: string;
  bgHex: string;
  borderClass: string;
  cardBgClass: string;
  h1Color: string;
  h2Color: string;
  h3Color: string;
  bodyColor: string;
  priceColor: string;
  badgeBg: string;
  badgeText: string;
  stickerBg: string;
  stickerText: string;
  shadowColor: string;
  description: string;
}

const COLOR_SCHEMES: Record<ColorSchemeId, ColorScheme> = {
  primary: {
    id: 'primary',
    name: 'Primary Flame Red',
    badge: 'Core Identity',
    bgClass: 'bg-[#D92F2F]',
    bgHex: '#D92F2F',
    borderClass: 'border-[#07334F]',
    cardBgClass: 'bg-white',
    h1Color: 'text-[#D92F2F]',
    h2Color: 'text-[#07334F]',
    h3Color: 'text-[#D92F2F]',
    bodyColor: 'text-[#07334F]',
    priceColor: 'text-[#D92F2F]',
    badgeBg: 'bg-[#D92F2F]',
    badgeText: 'text-[#FDEFEB]',
    stickerBg: 'bg-[#FFD23F]',
    stickerText: 'text-[#07334F]',
    shadowColor: '#07334F',
    description: 'High-impact packaging boxes, campaign hero mastheads, and primary storefront signage.'
  },
  secondary: {
    id: 'secondary',
    name: 'Secondary Street Cyan',
    badge: 'Cool Contrast',
    bgClass: 'bg-[#297FC1]',
    bgHex: '#297FC1',
    borderClass: 'border-[#07334F]',
    cardBgClass: 'bg-white',
    h1Color: 'text-[#297FC1]',
    h2Color: 'text-[#07334F]',
    h3Color: 'text-[#297FC1]',
    bodyColor: 'text-[#07334F]',
    priceColor: 'text-[#297FC1]',
    badgeBg: 'bg-[#297FC1]',
    badgeText: 'text-[#FDEFEB]',
    stickerBg: 'bg-[#EF9FBD]',
    stickerText: 'text-[#07334F]',
    shadowColor: '#07334F',
    description: 'Beverage menus, digital marketing assets, cool contrast accents, and street sticker drops.'
  },
  accent: {
    id: 'accent',
    name: 'Accent Butter Gold',
    badge: 'High Energy',
    bgClass: 'bg-[#FFD23F]',
    bgHex: '#FFD23F',
    borderClass: 'border-[#07334F]',
    cardBgClass: 'bg-white',
    h1Color: 'text-[#07334F]',
    h2Color: 'text-[#D92F2F]',
    h3Color: 'text-[#07334F]',
    bodyColor: 'text-[#07334F]',
    priceColor: 'text-[#D92F2F]',
    badgeBg: 'bg-[#FFD23F]',
    badgeText: 'text-[#07334F]',
    stickerBg: 'bg-[#D92F2F]',
    stickerText: 'text-[#FDEFEB]',
    shadowColor: '#07334F',
    description: 'Limited-edition flavor launches, promo callouts, sticker badges, and retail shelf talkers.'
  },
  navy: {
    id: 'navy',
    name: 'Midnight Deep Navy',
    badge: 'Editorial & Dark',
    bgClass: 'bg-[#07334F]',
    bgHex: '#07334F',
    borderClass: 'border-[#FDEFEB]',
    cardBgClass: 'bg-[#0b4163]',
    h1Color: 'text-[#FFD23F]',
    h2Color: 'text-[#EF9FBD]',
    h3Color: 'text-[#FDEFEB]',
    bodyColor: 'text-[#FDEFEB]/90',
    priceColor: 'text-[#FFD23F]',
    badgeBg: 'bg-[#EF9FBD]',
    badgeText: 'text-[#07334F]',
    stickerBg: 'bg-[#D92F2F]',
    stickerText: 'text-[#FDEFEB]',
    shadowColor: '#000000',
    description: 'Night market signage, dark mode digital interfaces, and premium gift packaging.'
  },
  cream: {
    id: 'cream',
    name: 'Warm Pastry Cream',
    badge: 'Standard Canvas',
    bgClass: 'bg-[#FDEFEB]',
    bgHex: '#FDEFEB',
    borderClass: 'border-[#07334F]',
    cardBgClass: 'bg-white',
    h1Color: 'text-[#07334F]',
    h2Color: 'text-[#D92F2F]',
    h3Color: 'text-[#297FC1]',
    bodyColor: 'text-[#07334F]',
    priceColor: 'text-[#D92F2F]',
    badgeBg: 'bg-[#07334F]',
    badgeText: 'text-[#FDEFEB]',
    stickerBg: 'bg-[#FFD23F]',
    stickerText: 'text-[#07334F]',
    shadowColor: '#07334F',
    description: 'Standard brand document canvas, editorial editorial copy, bakery menus, and story articles.'
  }
};

const SAMPLE_PRESETS = [
  'DONUTS WITH ATTITUDE.',
  'GOOD DOUGH. BAD ATTITUDE.',
  '24HR SLOW BRIOCHE PROOF',
  'HOT DOUGH KL • EST. MALAYSIA',
  'RM 4.50 — SALTED EGG CARAMEL',
  'JUST ONE MORE DOH-NUT.'
];

export const TypographySection: React.FC = () => {
  // Brand Playground State
  const [inputText, setInputText] = useState('DONUTS WITH ATTITUDE.');
  const [selectedScheme, setSelectedScheme] = useState<ColorSchemeId>('primary');
  const [scaleMultiplier, setScaleMultiplier] = useState<number>(1.0);
  const [textTransform, setTextTransform] = useState<'uppercase' | 'title' | 'none'>('uppercase');
  const [textAlign, setTextAlign] = useState<'left' | 'center' | 'right'>('left');
  const [activePlaygroundTab, setActivePlaygroundTab] = useState<'hierarchy' | 'specimen' | 'matrix' | 'tokens'>('hierarchy');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Helper formatting for custom text
  const getFormattedText = (raw: string, isHeadline = false) => {
    if (!raw.trim()) return isHeadline ? 'DONUTS WITH ATTITUDE.' : 'Handcrafted daily with Japanese flours and French butter.';
    if (textTransform === 'uppercase') return raw.toUpperCase();
    if (textTransform === 'none') return raw;
    // Title case
    return raw
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const currentScheme = COLOR_SCHEMES[selectedScheme];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(label);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getAlignClass = () => {
    if (textAlign === 'center') return 'text-center items-center';
    if (textAlign === 'right') return 'text-right items-end';
    return 'text-left items-start';
  };

  return (
    <div className="space-y-12">
      {/* ========================================================
          BRAND PLAYGROUND: INTERACTIVE TYPOGRAPHY STUDIO
          ======================================================== */}
      <div className="bg-white rounded-3xl border-4 border-[#07334F] shadow-[8px_8px_0px_0px_#07334F] overflow-hidden">
        {/* Top Header Banner */}
        <div className="p-6 bg-[#07334F] text-[#FDEFEB] border-b-4 border-[#07334F] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFD23F] border-2 border-[#07334F] flex items-center justify-center text-[#07334F] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]">
              <Type size={22} className="stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-fun text-2xl font-black tracking-wide text-white">
                  Brand Playground
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-[#D92F2F] text-white text-[10px] font-black uppercase tracking-wider border border-white/30">
                  Live Hierarchy Sandbox
                </span>
              </div>
              <p className="text-xs text-[#FDEFEB]/80 font-medium mt-0.5">
                Type any custom phrase to render instantly across all approved font hierarchy tiers &amp; color schemes.
              </p>
            </div>
          </div>

          {/* View Tab Switcher */}
          <div className="flex items-center gap-1.5 bg-[#052338] p-1.5 rounded-2xl border border-white/20">
            <button
              onClick={() => setActivePlaygroundTab('hierarchy')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                activePlaygroundTab === 'hierarchy'
                  ? 'bg-[#FFD23F] text-[#07334F] shadow-[2px_2px_0px_0px_#07334F]'
                  : 'text-[#FDEFEB] hover:bg-white/10'
              }`}
            >
              <Layers size={14} /> Full Hierarchy
            </button>
            <button
              onClick={() => setActivePlaygroundTab('specimen')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                activePlaygroundTab === 'specimen'
                  ? 'bg-[#FFD23F] text-[#07334F] shadow-[2px_2px_0px_0px_#07334F]'
                  : 'text-[#FDEFEB] hover:bg-white/10'
              }`}
            >
              <Maximize2 size={14} /> Big Specimen
            </button>
            <button
              onClick={() => setActivePlaygroundTab('matrix')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                activePlaygroundTab === 'matrix'
                  ? 'bg-[#FFD23F] text-[#07334F] shadow-[2px_2px_0px_0px_#07334F]'
                  : 'text-[#FDEFEB] hover:bg-white/10'
              }`}
            >
              <Palette size={14} /> Scheme Matrix
            </button>
            <button
              onClick={() => setActivePlaygroundTab('tokens')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                activePlaygroundTab === 'tokens'
                  ? 'bg-[#FFD23F] text-[#07334F] shadow-[2px_2px_0px_0px_#07334F]'
                  : 'text-[#FDEFEB] hover:bg-white/10'
              }`}
            >
              <Code size={14} /> Code &amp; Tokens
            </button>
          </div>
        </div>

        {/* Input & Control Dashboard Area */}
        <div className="p-6 bg-[#FDEFEB] border-b-4 border-[#07334F] space-y-5">
          {/* Main Text Input Field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="playground-input" className="text-xs font-black uppercase tracking-wider text-[#07334F] flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#D92F2F]" />
                Type Custom Brand Copy / Specimen Text:
              </label>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-[#07334F]/60">
                  {inputText.length} chars
                </span>
                {inputText && (
                  <button
                    onClick={() => setInputText('')}
                    className="text-[11px] font-black text-[#D92F2F] hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            <div className="relative">
              <input
                id="playground-input"
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type any slogan, flavor, headline, or price tag..."
                className="w-full px-5 py-3.5 pr-12 text-base md:text-lg font-bold text-[#07334F] bg-white rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] placeholder:text-[#07334F]/40 focus:outline-none focus:ring-4 focus:ring-[#FFD23F] transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <button
                  onClick={() => setInputText('DONUTS WITH ATTITUDE.')}
                  title="Reset to default brand slogan"
                  className="p-1.5 rounded-lg text-[#07334F]/60 hover:text-[#07334F] hover:bg-[#FDEFEB] transition-colors"
                >
                  <RotateCcw size={16} />
                </button>
              </div>
            </div>

            {/* Quick Slogan Preset Chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] font-extrabold text-[#07334F]/70 mr-1 flex items-center gap-1">
                <Tag size={12} /> Quick Presets:
              </span>
              {SAMPLE_PRESETS.map((sample) => (
                <button
                  key={sample}
                  onClick={() => setInputText(sample)}
                  className={`px-2.5 py-1 text-xs font-black rounded-xl border-2 border-[#07334F] transition-all ${
                    inputText === sample
                      ? 'bg-[#FFD23F] text-[#07334F] shadow-[2px_2px_0px_0px_#07334F]'
                      : 'bg-white text-[#07334F] hover:bg-[#EF9FBD] hover:shadow-[1px_1px_0px_0px_#07334F]'
                  }`}
                >
                  {sample}
                </button>
              ))}
            </div>
          </div>

          {/* Color Schemes & Live Controls Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-3 border-t-2 border-[#07334F]/15">
            {/* Color Scheme Toggles (Primary / Secondary / Accent) */}
            <div className="lg:col-span-7 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#07334F] flex items-center gap-1.5">
                  <Palette size={14} className="text-[#297FC1]" />
                  Color Scheme Toggle:
                </span>
                <span className="text-[11px] font-bold text-[#07334F]/70 italic">
                  {currentScheme.description}
                </span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {/* Primary Scheme Button */}
                <button
                  onClick={() => setSelectedScheme('primary')}
                  className={`p-2.5 rounded-2xl border-3 border-[#07334F] transition-all flex flex-col items-center text-center gap-1 relative ${
                    selectedScheme === 'primary'
                      ? 'bg-[#D92F2F] text-[#FDEFEB] shadow-[4px_4px_0px_0px_#07334F] -translate-y-0.5'
                      : 'bg-white text-[#07334F] hover:bg-[#D92F2F]/10'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#D92F2F] border-2 border-[#07334F]" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#FDEFEB] border-2 border-[#07334F]" />
                  </div>
                  <span className="font-fun text-xs font-black uppercase tracking-wider">Primary</span>
                  <span className="text-[9px] font-extrabold opacity-80">Flame Red</span>
                  {selectedScheme === 'primary' && (
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#FFD23F] rounded-full border border-[#07334F] flex items-center justify-center text-[#07334F]">
                      ✓
                    </span>
                  )}
                </button>

                {/* Secondary Scheme Button */}
                <button
                  onClick={() => setSelectedScheme('secondary')}
                  className={`p-2.5 rounded-2xl border-3 border-[#07334F] transition-all flex flex-col items-center text-center gap-1 relative ${
                    selectedScheme === 'secondary'
                      ? 'bg-[#297FC1] text-[#FDEFEB] shadow-[4px_4px_0px_0px_#07334F] -translate-y-0.5'
                      : 'bg-white text-[#07334F] hover:bg-[#297FC1]/10'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#297FC1] border-2 border-[#07334F]" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#EF9FBD] border-2 border-[#07334F]" />
                  </div>
                  <span className="font-fun text-xs font-black uppercase tracking-wider">Secondary</span>
                  <span className="text-[9px] font-extrabold opacity-80">Street Cyan</span>
                  {selectedScheme === 'secondary' && (
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#FFD23F] rounded-full border border-[#07334F] flex items-center justify-center text-[#07334F]">
                      ✓
                    </span>
                  )}
                </button>

                {/* Accent Scheme Button */}
                <button
                  onClick={() => setSelectedScheme('accent')}
                  className={`p-2.5 rounded-2xl border-3 border-[#07334F] transition-all flex flex-col items-center text-center gap-1 relative ${
                    selectedScheme === 'accent'
                      ? 'bg-[#FFD23F] text-[#07334F] shadow-[4px_4px_0px_0px_#07334F] -translate-y-0.5'
                      : 'bg-white text-[#07334F] hover:bg-[#FFD23F]/20'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#FFD23F] border-2 border-[#07334F]" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#D92F2F] border-2 border-[#07334F]" />
                  </div>
                  <span className="font-fun text-xs font-black uppercase tracking-wider">Accent</span>
                  <span className="text-[9px] font-extrabold opacity-80">Butter Gold</span>
                  {selectedScheme === 'accent' && (
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#D92F2F] rounded-full border border-white flex items-center justify-center text-white">
                      ✓
                    </span>
                  )}
                </button>

                {/* Navy / Dark Scheme Button */}
                <button
                  onClick={() => setSelectedScheme('navy')}
                  className={`p-2.5 rounded-2xl border-3 border-[#07334F] transition-all flex flex-col items-center text-center gap-1 relative ${
                    selectedScheme === 'navy'
                      ? 'bg-[#07334F] text-[#FDEFEB] shadow-[4px_4px_0px_0px_#07334F] -translate-y-0.5'
                      : 'bg-white text-[#07334F] hover:bg-[#07334F]/10'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#07334F] border-2 border-white" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#FFD23F] border-2 border-[#07334F]" />
                  </div>
                  <span className="font-fun text-xs font-black uppercase tracking-wider">Midnight</span>
                  <span className="text-[9px] font-extrabold opacity-80">Deep Navy</span>
                  {selectedScheme === 'navy' && (
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#EF9FBD] rounded-full border border-[#07334F] flex items-center justify-center text-[#07334F]">
                      ✓
                    </span>
                  )}
                </button>

                {/* Warm Cream Canvas Button */}
                <button
                  onClick={() => setSelectedScheme('cream')}
                  className={`p-2.5 rounded-2xl border-3 border-[#07334F] transition-all flex flex-col items-center text-center gap-1 relative ${
                    selectedScheme === 'cream'
                      ? 'bg-[#FDEFEB] text-[#07334F] shadow-[4px_4px_0px_0px_#07334F] -translate-y-0.5'
                      : 'bg-white text-[#07334F] hover:bg-[#FDEFEB]'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#FDEFEB] border-2 border-[#07334F]" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#D92F2F] border-2 border-[#07334F]" />
                  </div>
                  <span className="font-fun text-xs font-black uppercase tracking-wider">Pastry</span>
                  <span className="text-[9px] font-extrabold opacity-80">Warm Cream</span>
                  {selectedScheme === 'cream' && (
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#297FC1] rounded-full border border-[#07334F] flex items-center justify-center text-white">
                      ✓
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Typography Modifiers (Scale, Case, Alignment) */}
            <div className="lg:col-span-5 bg-white p-3.5 rounded-2xl border-3 border-[#07334F] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#07334F] flex items-center gap-1.5">
                  <Sliders size={14} className="text-[#D92F2F]" />
                  Typographic Controls
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#FDEFEB] rounded border border-[#07334F]">
                  Scale: {Math.round(scaleMultiplier * 100)}%
                </span>
              </div>

              {/* Scale Slider */}
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold text-[#07334F]">Size:</span>
                <input
                  type="range"
                  min="0.75"
                  max="1.4"
                  step="0.05"
                  value={scaleMultiplier}
                  onChange={(e) => setScaleMultiplier(parseFloat(e.target.value))}
                  className="w-full accent-[#D92F2F] cursor-pointer"
                />
                <button
                  onClick={() => setScaleMultiplier(1.0)}
                  className="text-[10px] font-bold text-[#07334F]/60 hover:text-[#07334F]"
                >
                  1x
                </button>
              </div>

              {/* Case & Alignment Toggles */}
              <div className="flex items-center justify-between gap-2 pt-1 border-t border-[#07334F]/10">
                {/* Case */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setTextTransform('uppercase')}
                    className={`px-2 py-1 text-[11px] font-black rounded-lg border-2 border-[#07334F] ${
                      textTransform === 'uppercase'
                        ? 'bg-[#07334F] text-[#FDEFEB]'
                        : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#FFD23F]'
                    }`}
                  >
                    AA
                  </button>
                  <button
                    onClick={() => setTextTransform('title')}
                    className={`px-2 py-1 text-[11px] font-black rounded-lg border-2 border-[#07334F] ${
                      textTransform === 'title'
                        ? 'bg-[#07334F] text-[#FDEFEB]'
                        : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#FFD23F]'
                    }`}
                  >
                    Aa
                  </button>
                  <button
                    onClick={() => setTextTransform('none')}
                    className={`px-2 py-1 text-[11px] font-black rounded-lg border-2 border-[#07334F] ${
                      textTransform === 'none'
                        ? 'bg-[#07334F] text-[#FDEFEB]'
                        : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#FFD23F]'
                    }`}
                  >
                    raw
                  </button>
                </div>

                {/* Alignment */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setTextAlign('left')}
                    className={`p-1.5 rounded-lg border-2 border-[#07334F] ${
                      textAlign === 'left'
                        ? 'bg-[#07334F] text-[#FDEFEB]'
                        : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#FFD23F]'
                    }`}
                    title="Align Left"
                  >
                    <AlignLeft size={14} />
                  </button>
                  <button
                    onClick={() => setTextAlign('center')}
                    className={`p-1.5 rounded-lg border-2 border-[#07334F] ${
                      textAlign === 'center'
                        ? 'bg-[#07334F] text-[#FDEFEB]'
                        : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#FFD23F]'
                    }`}
                    title="Align Center"
                  >
                    <AlignCenter size={14} />
                  </button>
                  <button
                    onClick={() => setTextAlign('right')}
                    className={`p-1.5 rounded-lg border-2 border-[#07334F] ${
                      textAlign === 'right'
                        ? 'bg-[#07334F] text-[#FDEFEB]'
                        : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#FFD23F]'
                    }`}
                    title="Align Right"
                  >
                    <AlignRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            STAGE TAB 1: FULL HIERARCHY RENDER VIEW
            ======================================================== */}
        {activePlaygroundTab === 'hierarchy' && (
          <div className="p-6 md:p-8 space-y-6 bg-[#FAF3EF]">
            <div className="flex items-center justify-between pb-2 border-b-2 border-[#07334F]/10">
              <div className="flex items-center gap-2">
                <span className="font-fun text-sm font-black text-[#07334F] uppercase tracking-wider">
                  Live Hierarchy Breakdown
                </span>
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${currentScheme.badgeBg} ${currentScheme.badgeText}`}>
                  Active: {currentScheme.name}
                </span>
              </div>
              <span className="text-xs font-bold text-[#07334F]/60">
                Rendering {scaleMultiplier}x scaling
              </span>
            </div>

            {/* Level 1: H1 Hero Display / Masthead */}
            <div className={`p-6 rounded-3xl border-4 ${currentScheme.borderClass} ${currentScheme.cardBgClass} shadow-[5px_5px_0px_0px_${currentScheme.shadowColor}] transition-all`}>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-[#07334F]/10">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 ${currentScheme.badgeBg} ${currentScheme.badgeText} text-[10px] font-black rounded-lg uppercase tracking-wider border border-[#07334F]/30`}>
                    1. H1 Hero Display Masthead
                  </span>
                  <span className="text-xs font-mono font-bold text-[#07334F]/70">
                    Titan One • 52px / 1.1 • Uppercase
                  </span>
                </div>
                <button
                  onClick={() => handleCopy('font-family: "Titan One", cursive; font-size: 52px; line-height: 1.1; letter-spacing: 0.02em; text-transform: uppercase;', 'h1')}
                  className="text-[11px] font-black text-[#07334F] hover:text-[#D92F2F] flex items-center gap-1 bg-[#FDEFEB] px-2 py-1 rounded-md border border-[#07334F]"
                >
                  {copiedCode === 'h1' ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
                  {copiedCode === 'h1' ? 'Copied CSS!' : 'Copy CSS'}
                </button>
              </div>

              <div className={`flex flex-col ${getAlignClass()} py-2`}>
                <h1
                  className={`font-fun font-black tracking-wide leading-[1.1] ${currentScheme.h1Color}`}
                  style={{ fontSize: `${Math.round(52 * scaleMultiplier)}px` }}
                >
                  {getFormattedText(inputText, true)}
                </h1>
              </div>

              <div className="mt-4 pt-3 border-t border-[#07334F]/10 flex flex-wrap items-center justify-between text-xs text-[#07334F]/70 gap-2">
                <span><strong>Usage:</strong> Billboard mastheads, hero landing sections, storefront illuminated letters, main campaign punchlines.</span>
                <span className="font-mono text-[11px] bg-[#FDEFEB] px-2 py-0.5 rounded border border-[#07334F]/20">class: font-fun font-black tracking-wide</span>
              </div>
            </div>

            {/* Level 2: H2 Section Headline / Menu Subhead */}
            <div className={`p-6 rounded-3xl border-4 ${currentScheme.borderClass} ${currentScheme.cardBgClass} shadow-[5px_5px_0px_0px_${currentScheme.shadowColor}] transition-all`}>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-[#07334F]/10">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 bg-[#297FC1] text-[#FDEFEB] text-[10px] font-black rounded-lg uppercase tracking-wider border border-[#07334F]/30`}>
                    2. H2 Subhead / Menu Category
                  </span>
                  <span className="text-xs font-mono font-bold text-[#07334F]/70">
                    Fredoka • 32px / 1.2 • Weight 800
                  </span>
                </div>
                <button
                  onClick={() => handleCopy('font-family: "Fredoka", sans-serif; font-weight: 800; font-size: 32px; line-height: 1.2;', 'h2')}
                  className="text-[11px] font-black text-[#07334F] hover:text-[#D92F2F] flex items-center gap-1 bg-[#FDEFEB] px-2 py-1 rounded-md border border-[#07334F]"
                >
                  {copiedCode === 'h2' ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
                  {copiedCode === 'h2' ? 'Copied CSS!' : 'Copy CSS'}
                </button>
              </div>

              <div className={`flex flex-col ${getAlignClass()} py-2`}>
                <h2
                  className={`font-display font-extrabold tracking-normal leading-[1.2] ${currentScheme.h2Color}`}
                  style={{ fontSize: `${Math.round(32 * scaleMultiplier)}px` }}
                >
                  {getFormattedText(inputText, true)}
                </h2>
              </div>

              <div className="mt-4 pt-3 border-t border-[#07334F]/10 flex flex-wrap items-center justify-between text-xs text-[#07334F]/70 gap-2">
                <span><strong>Usage:</strong> Menu category titles (e.g., "CLASSIC GLAZED", "SPECIALTY CRULLERS"), packaging side panels, section titles.</span>
                <span className="font-mono text-[11px] bg-[#FDEFEB] px-2 py-0.5 rounded border border-[#07334F]/20">class: font-display font-extrabold</span>
              </div>
            </div>

            {/* Level 3: H3 Feature Label & Sub-headline */}
            <div className={`p-6 rounded-3xl border-4 ${currentScheme.borderClass} ${currentScheme.cardBgClass} shadow-[5px_5px_0px_0px_${currentScheme.shadowColor}] transition-all`}>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-[#07334F]/10">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 bg-[#07334F] text-[#FDEFEB] text-[10px] font-black rounded-lg uppercase tracking-wider border border-[#07334F]/30`}>
                    3. H3 Feature Label / Callout
                  </span>
                  <span className="text-xs font-mono font-bold text-[#07334F]/70">
                    Plus Jakarta Sans • 20px / 1.3 • Weight 800
                  </span>
                </div>
                <button
                  onClick={() => handleCopy('font-family: "Plus Jakarta Sans", sans-serif; font-weight: 800; font-size: 20px; line-height: 1.3;', 'h3')}
                  className="text-[11px] font-black text-[#07334F] hover:text-[#D92F2F] flex items-center gap-1 bg-[#FDEFEB] px-2 py-1 rounded-md border border-[#07334F]"
                >
                  {copiedCode === 'h3' ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
                  {copiedCode === 'h3' ? 'Copied CSS!' : 'Copy CSS'}
                </button>
              </div>

              <div className={`flex flex-col ${getAlignClass()} py-1`}>
                <h3
                  className={`font-sans font-extrabold tracking-tight leading-[1.3] ${currentScheme.h3Color}`}
                  style={{ fontSize: `${Math.round(20 * scaleMultiplier)}px` }}
                >
                  {getFormattedText(inputText, false)}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-[#07334F]/10 flex flex-wrap items-center justify-between text-xs text-[#07334F]/70 gap-2">
                <span><strong>Usage:</strong> Product names, nutritional badges, dialog titles, component card headers.</span>
                <span className="font-mono text-[11px] bg-[#FDEFEB] px-2 py-0.5 rounded border border-[#07334F]/20">class: font-sans font-extrabold</span>
              </div>
            </div>

            {/* Level 4: Body Copy & Story Narrative */}
            <div className={`p-6 rounded-3xl border-4 ${currentScheme.borderClass} ${currentScheme.cardBgClass} shadow-[5px_5px_0px_0px_${currentScheme.shadowColor}] transition-all`}>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-[#07334F]/10">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 bg-[#EF9FBD] text-[#07334F] text-[10px] font-black rounded-lg uppercase tracking-wider border border-[#07334F]/30`}>
                    4. Body Copy / Story Paragraph
                  </span>
                  <span className="text-xs font-mono font-bold text-[#07334F]/70">
                    Plus Jakarta Sans • 16px / 1.6 • Weight 500/600
                  </span>
                </div>
                <button
                  onClick={() => handleCopy('font-family: "Plus Jakarta Sans", sans-serif; font-weight: 500; font-size: 16px; line-height: 1.6;', 'body')}
                  className="text-[11px] font-black text-[#07334F] hover:text-[#D92F2F] flex items-center gap-1 bg-[#FDEFEB] px-2 py-1 rounded-md border border-[#07334F]"
                >
                  {copiedCode === 'body' ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
                  {copiedCode === 'body' ? 'Copied CSS!' : 'Copy CSS'}
                </button>
              </div>

              <div className={`flex flex-col ${getAlignClass()} py-1`}>
                <p
                  className={`font-sans font-medium leading-relaxed max-w-3xl ${currentScheme.bodyColor}`}
                  style={{ fontSize: `${Math.round(16 * scaleMultiplier)}px` }}
                >
                  {inputText ? (
                    <>
                      {getFormattedText(inputText, false)} — Each small-batch sourdough brioche donut is fried hourly at 180°C, glazed with organic cane sugar, and served hot with unapologetic attitude in Kuala Lumpur.
                    </>
                  ) : (
                    'Every DOH-NUT starts with a 24-hour slow-fermented brioche dough, fried to golden perfection in small batches hourly and glazed by hand with bold local ingredients.'
                  )}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#07334F]/10 flex flex-wrap items-center justify-between text-xs text-[#07334F]/70 gap-2">
                <span><strong>Usage:</strong> Brand origin narrative, allergen tables, press release bodies, and website editorial copy.</span>
                <span className="font-mono text-[11px] bg-[#FDEFEB] px-2 py-0.5 rounded border border-[#07334F]/20">class: font-sans font-medium leading-relaxed</span>
              </div>
            </div>

            {/* Level 5: Price Tag & Numerical Currency Format */}
            <div className={`p-6 rounded-3xl border-4 ${currentScheme.borderClass} ${currentScheme.cardBgClass} shadow-[5px_5px_0px_0px_${currentScheme.shadowColor}] transition-all`}>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-[#07334F]/10">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 bg-[#FFD23F] text-[#07334F] text-[10px] font-black rounded-lg uppercase tracking-wider border border-[#07334F]/30`}>
                    5. Price &amp; Numerical Lockup
                  </span>
                  <span className="text-xs font-mono font-bold text-[#07334F]/70">
                    Fredoka 900 • 28px • Bold Currency Prefix
                  </span>
                </div>
                <button
                  onClick={() => handleCopy('font-family: "Fredoka", sans-serif; font-weight: 900; font-size: 28px; letter-spacing: -0.01em;', 'price')}
                  className="text-[11px] font-black text-[#07334F] hover:text-[#D92F2F] flex items-center gap-1 bg-[#FDEFEB] px-2 py-1 rounded-md border border-[#07334F]"
                >
                  {copiedCode === 'price' ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
                  {copiedCode === 'price' ? 'Copied CSS!' : 'Copy CSS'}
                </button>
              </div>

              <div className={`flex flex-wrap items-center ${textAlign === 'center' ? 'justify-center' : textAlign === 'right' ? 'justify-end' : 'justify-start'} gap-6 py-2`}>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display font-black text-sm text-[#07334F]/70">RM</span>
                  <span
                    className={`font-display font-black tracking-tight ${currentScheme.priceColor}`}
                    style={{ fontSize: `${Math.round(36 * scaleMultiplier)}px` }}
                  >
                    4.50
                  </span>
                  <span className="text-xs font-bold text-[#07334F]/70">/ Single</span>
                </div>

                <div className="flex items-baseline gap-1.5 px-4 py-2 rounded-2xl bg-[#FDEFEB] border-2 border-[#07334F]">
                  <span className="font-display font-black text-sm text-[#07334F]/70">RM</span>
                  <span
                    className="font-display font-black text-2xl text-[#07334F] tracking-tight"
                    style={{ fontSize: `${Math.round(28 * scaleMultiplier)}px` }}
                  >
                    24.00
                  </span>
                  <span className="text-xs font-extrabold text-[#D92F2F] uppercase ml-1">★ Box of 6</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black bg-[#07334F] text-[#FDEFEB] px-2.5 py-1 rounded-md">
                    ITEM: {getFormattedText(inputText).slice(0, 18) || 'CLASSIC GLAZE'}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#07334F]/10 flex flex-wrap items-center justify-between text-xs text-[#07334F]/70 gap-2">
                <span><strong>Rule:</strong> Never use ambiguous cents notation (.0 or 00). Always include the <code>RM</code> currency prefix in bold.</span>
                <span className="font-mono text-[11px] bg-[#FDEFEB] px-2 py-0.5 rounded border border-[#07334F]/20">format: RM XX.XX</span>
              </div>
            </div>

            {/* Level 6: Street Sticker & Die-Cut Badge Lockup */}
            <div className={`p-6 rounded-3xl border-4 ${currentScheme.borderClass} ${currentScheme.cardBgClass} shadow-[5px_5px_0px_0px_${currentScheme.shadowColor}] transition-all`}>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-[#07334F]/10">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 ${currentScheme.stickerBg} ${currentScheme.stickerText} text-[10px] font-black rounded-lg uppercase tracking-wider border border-[#07334F]/30`}>
                    6. Street Sticker &amp; Slanted Ribbon
                  </span>
                  <span className="text-xs font-mono font-bold text-[#07334F]/70">
                    Titan One • Heavy Border Stroke • -4° Tilt
                  </span>
                </div>
                <button
                  onClick={() => handleCopy('transform: rotate(-4deg); box-shadow: 4px 4px 0px #07334F; border: 3px solid #07334F;', 'sticker')}
                  className="text-[11px] font-black text-[#07334F] hover:text-[#D92F2F] flex items-center gap-1 bg-[#FDEFEB] px-2 py-1 rounded-md border border-[#07334F]"
                >
                  {copiedCode === 'sticker' ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
                  {copiedCode === 'sticker' ? 'Copied CSS!' : 'Copy CSS'}
                </button>
              </div>

              <div className={`flex flex-wrap items-center ${textAlign === 'center' ? 'justify-center' : textAlign === 'right' ? 'justify-end' : 'justify-start'} gap-4 py-4`}>
                {/* Slanted Comic Badge */}
                <div className={`px-5 py-3 ${currentScheme.stickerBg} ${currentScheme.stickerText} rounded-2xl border-4 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] -rotate-3 transition-transform hover:rotate-0 hover:scale-105 inline-block cursor-default`}>
                  <span
                    className="font-fun font-black tracking-wider uppercase block"
                    style={{ fontSize: `${Math.round(24 * scaleMultiplier)}px` }}
                  >
                    ★ {getFormattedText(inputText, true)} ★
                  </span>
                </div>

                {/* Pill Tape Strip */}
                <div className="px-4 py-2 bg-[#07334F] text-[#FDEFEB] rounded-full border-3 border-[#EF9FBD] shadow-[3px_3px_0px_0px_#07334F] rotate-2 inline-block">
                  <span
                    className="font-fun text-sm font-black tracking-widest uppercase"
                    style={{ fontSize: `${Math.round(14 * scaleMultiplier)}px` }}
                  >
                    HOT BATCH • ZERO APOLOGIES
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#07334F]/10 flex flex-wrap items-center justify-between text-xs text-[#07334F]/70 gap-2">
                <span><strong>Usage:</strong> Die-cut takeaway tape, merch patches, laptop stickers, and promotional drop bursts.</span>
                <span className="font-mono text-[11px] bg-[#FDEFEB] px-2 py-0.5 rounded border border-[#07334F]/20">style: -rotate-3 shadow-[4px_4px_0px_0px_#07334F]</span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            STAGE TAB 2: BIG SPECIMEN VIEW
            ======================================================== */}
        {activePlaygroundTab === 'specimen' && (
          <div className="p-8 space-y-6">
            <div
              className={`p-10 md:p-16 rounded-3xl border-4 ${currentScheme.borderClass} ${currentScheme.bgClass} shadow-[8px_8px_0px_0px_${currentScheme.shadowColor}] min-h-[300px] flex flex-col justify-center items-center text-center transition-all`}
            >
              <span className={`px-3 py-1 rounded-full ${currentScheme.cardBgClass} text-[#07334F] text-xs font-black uppercase tracking-wider mb-6 border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]`}>
                ★ DOH-NUT Master Typography Specimen ★
              </span>

              <p
                className={`font-fun font-black leading-tight tracking-wide text-white drop-shadow-[0_4px_8px_rgba(7,51,79,0.3)] max-w-4xl`}
                style={{ fontSize: `${Math.round(64 * scaleMultiplier)}px` }}
              >
                {getFormattedText(inputText, true)}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <span className="px-4 py-2 rounded-xl bg-white text-[#07334F] font-fun text-sm font-black border-2 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]">
                  TITAN ONE / FREDOKA 900
                </span>
                <span className="px-4 py-2 rounded-xl bg-[#FFD23F] text-[#07334F] font-display text-sm font-black border-2 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]">
                  SCHEME: {currentScheme.name.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Quick Specimen Metadata Footer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]">
                <div className="text-[10px] font-black uppercase text-[#07334F]/60">Headline Font Family</div>
                <div className="font-fun text-lg font-black text-[#07334F] mt-1">Titan One</div>
                <div className="text-xs text-[#07334F]/80 mt-1">Google Fonts CDN • Display Sans</div>
              </div>
              <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]">
                <div className="text-[10px] font-black uppercase text-[#07334F]/60">Secondary Headings</div>
                <div className="font-display text-lg font-black text-[#D92F2F] mt-1">Fredoka 800/900</div>
                <div className="text-xs text-[#07334F]/80 mt-1">Geometric Rounded Headline</div>
              </div>
              <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]">
                <div className="text-[10px] font-black uppercase text-[#07334F]/60">Editorial &amp; Body</div>
                <div className="font-sans text-lg font-extrabold text-[#297FC1] mt-1">Plus Jakarta Sans</div>
                <div className="text-xs text-[#07334F]/80 mt-1">Modern High-Legibility Grotesk</div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            STAGE TAB 3: SIDE-BY-SIDE COLOR SCHEME MATRIX
            ======================================================== */}
        {activePlaygroundTab === 'matrix' && (
          <div className="p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b-2 border-[#07334F]/10">
              <span className="font-fun text-sm font-black text-[#07334F] uppercase tracking-wider">
                Multi-Scheme Matrix Comparison
              </span>
              <span className="text-xs font-bold text-[#07334F]/70">
                Click any scheme card below to set as active
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Primary Card */}
              <div
                onClick={() => setSelectedScheme('primary')}
                className={`p-6 rounded-3xl border-4 border-[#07334F] bg-[#D92F2F] text-[#FDEFEB] shadow-[6px_6px_0px_0px_#07334F] cursor-pointer transition-all hover:scale-[1.02] ${
                  selectedScheme === 'primary' ? 'ring-4 ring-[#FFD23F]' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-white text-[#D92F2F] text-[10px] font-black rounded-lg uppercase tracking-wider border border-[#07334F]">
                    🔴 PRIMARY SCHEME
                  </span>
                  {selectedScheme === 'primary' && (
                    <span className="text-xs font-black bg-[#FFD23F] text-[#07334F] px-2 py-0.5 rounded-full">
                      ACTIVE
                    </span>
                  )}
                </div>
                <h3 className="font-fun text-2xl font-black text-white leading-tight mb-2">
                  {getFormattedText(inputText, true)}
                </h3>
                <p className="font-sans text-xs text-[#FDEFEB]/90 font-medium line-clamp-3">
                  Flame Red base with Cream contrast. Perfect for packaging and outdoor signage.
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] font-mono">
                  <span>#D92F2F</span>
                  <span>AAA Rating</span>
                </div>
              </div>

              {/* Secondary Card */}
              <div
                onClick={() => setSelectedScheme('secondary')}
                className={`p-6 rounded-3xl border-4 border-[#07334F] bg-[#297FC1] text-[#FDEFEB] shadow-[6px_6px_0px_0px_#07334F] cursor-pointer transition-all hover:scale-[1.02] ${
                  selectedScheme === 'secondary' ? 'ring-4 ring-[#FFD23F]' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-white text-[#297FC1] text-[10px] font-black rounded-lg uppercase tracking-wider border border-[#07334F]">
                    🔵 SECONDARY SCHEME
                  </span>
                  {selectedScheme === 'secondary' && (
                    <span className="text-xs font-black bg-[#FFD23F] text-[#07334F] px-2 py-0.5 rounded-full">
                      ACTIVE
                    </span>
                  )}
                </div>
                <h3 className="font-fun text-2xl font-black text-white leading-tight mb-2">
                  {getFormattedText(inputText, true)}
                </h3>
                <p className="font-sans text-xs text-[#FDEFEB]/90 font-medium line-clamp-3">
                  Street Cyan base with Soft Glaze Pink highlights. Used for digital assets and drinks.
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] font-mono">
                  <span>#297FC1</span>
                  <span>Cool Pop</span>
                </div>
              </div>

              {/* Accent Card */}
              <div
                onClick={() => setSelectedScheme('accent')}
                className={`p-6 rounded-3xl border-4 border-[#07334F] bg-[#FFD23F] text-[#07334F] shadow-[6px_6px_0px_0px_#07334F] cursor-pointer transition-all hover:scale-[1.02] ${
                  selectedScheme === 'accent' ? 'ring-4 ring-[#D92F2F]' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-[#07334F] text-[#FFD23F] text-[10px] font-black rounded-lg uppercase tracking-wider border border-[#07334F]">
                    🟡 ACCENT SCHEME
                  </span>
                  {selectedScheme === 'accent' && (
                    <span className="text-xs font-black bg-[#D92F2F] text-white px-2 py-0.5 rounded-full">
                      ACTIVE
                    </span>
                  )}
                </div>
                <h3 className="font-fun text-2xl font-black text-[#07334F] leading-tight mb-2">
                  {getFormattedText(inputText, true)}
                </h3>
                <p className="font-sans text-xs text-[#07334F]/90 font-medium line-clamp-3">
                  Butter Gold base with Flame Red punch. Used for sticker drops, promos, and limited flavors.
                </p>
                <div className="mt-4 pt-3 border-t border-[#07334F]/20 flex items-center justify-between text-[11px] font-mono">
                  <span>#FFD23F</span>
                  <span>Max Attention</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            STAGE TAB 4: CODE & DESIGN TOKENS
            ======================================================== */}
        {activePlaygroundTab === 'tokens' && (
          <div className="p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Web Font Imports */}
              <div className="p-6 bg-[#07334F] text-[#FDEFEB] rounded-3xl border-4 border-[#07334F] shadow-[5px_5px_0px_0px_#07334F] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-fun text-sm font-black text-[#FFD23F] uppercase tracking-wider flex items-center gap-1.5">
                    <Code size={16} /> 1. Google Fonts HTML Link
                  </span>
                  <button
                    onClick={() => handleCopy('<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Titan+One&display=swap" rel="stylesheet">', 'html-link')}
                    className="text-xs font-black bg-[#FFD23F] text-[#07334F] px-2.5 py-1 rounded-lg border border-[#07334F] flex items-center gap-1"
                  >
                    {copiedCode === 'html-link' ? <Check size={12} /> : <Copy size={12} />}
                    {copiedCode === 'html-link' ? 'Copied' : 'Copy'}
                  </button>
                </div>

                <pre className="bg-[#052338] p-4 rounded-xl text-xs font-mono text-[#EF9FBD] overflow-x-auto border border-white/10">
{`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Titan+One&display=swap" rel="stylesheet">`}
                </pre>
              </div>

              {/* Tailwind CSS Font Utilities */}
              <div className="p-6 bg-[#07334F] text-[#FDEFEB] rounded-3xl border-4 border-[#07334F] shadow-[5px_5px_0px_0px_#07334F] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-fun text-sm font-black text-[#FFD23F] uppercase tracking-wider flex items-center gap-1.5">
                    <Code size={16} /> 2. Tailwind &amp; CSS Variables
                  </span>
                  <button
                    onClick={() => handleCopy(`--font-fun: "Titan One", "Fredoka", cursive, sans-serif;
--font-display: "Fredoka", cursive, sans-serif;
--font-sans: "Plus Jakarta Sans", sans-serif;`, 'css-vars')}
                    className="text-xs font-black bg-[#FFD23F] text-[#07334F] px-2.5 py-1 rounded-lg border border-[#07334F] flex items-center gap-1"
                  >
                    {copiedCode === 'css-vars' ? <Check size={12} /> : <Copy size={12} />}
                    {copiedCode === 'css-vars' ? 'Copied' : 'Copy'}
                  </button>
                </div>

                <pre className="bg-[#052338] p-4 rounded-xl text-xs font-mono text-[#EF9FBD] overflow-x-auto border border-white/10">
{`/* CSS Theme Variables */
--font-fun: "Titan One", "Fredoka", cursive, sans-serif;
--font-display: "Fredoka", "Titan One", cursive, sans-serif;
--font-sans: "Plus Jakarta Sans", ui-sans-serif, sans-serif;

/* Tailwind Utility Classes */
.font-fun { font-family: var(--font-fun); }
.font-display { font-family: var(--font-display); }
.font-sans { font-family: var(--font-sans); }`}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================
          BRAND TYPOGRAPHY SYSTEM SPECIFICATION TABLE
          ======================================================== */}
      <div className="bg-white p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-[#07334F]/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#D92F2F] border border-[#07334F]" />
              <h3 className="font-fun text-xl font-black text-[#07334F] uppercase tracking-wide">
                Typographic Hierarchy Rules &amp; Specifications
              </h3>
            </div>
            <p className="text-xs text-[#07334F]/70 font-medium mt-0.5">
              Strict rules for font pairing, tracking, letter-spacing, and line-heights across brand touchpoints.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#FDEFEB] text-[#07334F] text-xs font-black rounded-xl border border-[#07334F]">
              3 Font Families Total
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#FDEFEB] border-b-3 border-[#07334F] text-[#07334F]">
                <th className="p-3 font-fun font-black uppercase">Level</th>
                <th className="p-3 font-fun font-black uppercase">Font Family</th>
                <th className="p-3 font-fun font-black uppercase">Weight</th>
                <th className="p-3 font-fun font-black uppercase">Size / Line Height</th>
                <th className="p-3 font-fun font-black uppercase">Tracking</th>
                <th className="p-3 font-fun font-black uppercase">Primary Applications</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-[#07334F]/10 font-medium text-[#07334F]">
              <tr className="hover:bg-[#FAF3EF]">
                <td className="p-3 font-black text-[#D92F2F]">H1 Hero Display</td>
                <td className="p-3 font-fun font-black">Titan One</td>
                <td className="p-3">Regular (900 Optical)</td>
                <td className="p-3 font-mono">48px – 56px / 1.1</td>
                <td className="p-3">+0.02em (Wide)</td>
                <td className="p-3">Campaign billboards, storefront signs, primary hero mastheads</td>
              </tr>
              <tr className="hover:bg-[#FAF3EF]">
                <td className="p-3 font-black text-[#297FC1]">H2 Section Head</td>
                <td className="p-3 font-display font-black">Fredoka</td>
                <td className="p-3">Extra Bold (800 / 900)</td>
                <td className="p-3 font-mono">28px – 34px / 1.2</td>
                <td className="p-3">Normal</td>
                <td className="p-3">Menu category headers, packaging side panels, social cards</td>
              </tr>
              <tr className="hover:bg-[#FAF3EF]">
                <td className="p-3 font-black text-[#07334F]">H3 Feature Callout</td>
                <td className="p-3 font-sans font-extrabold">Plus Jakarta Sans</td>
                <td className="p-3">Extra Bold (800)</td>
                <td className="p-3 font-mono">18px – 22px / 1.3</td>
                <td className="p-3">-0.01em (Tight)</td>
                <td className="p-3">Product names, nutritional chips, UI buttons, subhead tags</td>
              </tr>
              <tr className="hover:bg-[#FAF3EF]">
                <td className="p-3 font-black text-[#EF9FBD]">Body Copy</td>
                <td className="p-3 font-sans">Plus Jakarta Sans</td>
                <td className="p-3">Medium / SemiBold (500/600)</td>
                <td className="p-3 font-mono">15px – 16px / 1.6</td>
                <td className="p-3">Normal</td>
                <td className="p-3">Brand stories, menu descriptions, editorial articles, website copy</td>
              </tr>
              <tr className="hover:bg-[#FAF3EF]">
                <td className="p-3 font-black text-[#FFD23F]">Price Lockup</td>
                <td className="p-3 font-display font-black">Fredoka</td>
                <td className="p-3">Black (900)</td>
                <td className="p-3 font-mono">28px – 36px / 1.0</td>
                <td className="p-3">-0.02em</td>
                <td className="p-3">Retail prices, combo deals, shelf tags, delivery app menus</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Golden Rules Callout */}
        <div className="p-5 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] flex items-start gap-4">
          <div className="w-8 h-8 rounded-xl bg-[#D92F2F] text-white flex items-center justify-center font-fun font-black shrink-0 border border-[#07334F]">
            !
          </div>
          <div className="space-y-1 text-xs text-[#07334F]">
            <h4 className="font-fun font-black text-sm text-[#07334F] uppercase">
              Brand Punctuation &amp; Casing Standard:
            </h4>
            <p className="font-medium leading-relaxed">
              Always end short brand statements and punchlines with a full stop (e.g., <strong>"DONUTS WITH ATTITUDE."</strong> or <strong>"GOOD DOUGH. BAD ATTITUDE."</strong>). Never use exclamation marks in mastheads unless in cartoon speech bubbles. Keep body copy in sentence case for optimum reading comfort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

