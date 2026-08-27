import React, { useState } from 'react';
import { PatternType } from '../../types';
import { Sparkles, Copy, Check, Grid, Sliders, Layers } from 'lucide-react';

interface PatternsProps {
  initialType?: PatternType;
}

export const Patterns: React.FC<PatternsProps> = ({ initialType = 'dense' }) => {
  const [activePattern, setActivePattern] = useState<PatternType>(initialType);
  const [bgColor, setBgColor] = useState<string>('#FDEFEB');
  const [scale, setScale] = useState<number>(1);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const patternDescriptions: Record<PatternType, { title: string; useCase: string; motifs: string }> = {
    dense: {
      title: 'Dense Street Sticker Pattern',
      useCase: 'Greaseproof box liners, takeaway bags, sticker sheets, hoodie inner hoods, and high-energy social drops.',
      motifs: 'Glazed donuts, rainbow sprinkles, Doh Boy faces, "DOH!" graffiti lettering, 4-point star sparks, smiley bubbles, wavy drips, action lines.'
    },
    sparse: {
      title: 'Sparse Rhythmic Pattern',
      useCase: 'Tissue wrapping paper, beverage cup wraps, letterheads, digital backgrounds, and subtle packaging panels.',
      motifs: 'Hero donuts, spaced star sparks, mini sprinkles, smiley bubbles, clean negative space.'
    },
    border: {
      title: 'Border & Sealing Tape Pattern',
      useCase: 'Tamper-evident box tape, ribbon borders, menu trim headers, store wall bands, and web container dividers.',
      motifs: 'Linear repeat of "DOH!" pill badges, donut circular stamps, starbursts, Doh Boy avatars, and wavy lines.'
    },
    packaging: {
      title: 'Packaging & Kraft Checker Pattern',
      useCase: '6-pack & 12-pack master boxes, delivery sleeve covers, merch apparel, and retail wallpaper.',
      motifs: 'Street checkerboard color blocks, bold "DOH!" badges, glazed donut stamps, sprinkle bursts, and skate attitude accents.'
    }
  };

  const handleCopySvg = () => {
    const code = `<!-- DOH-NUT ${activePattern.toUpperCase()} PATTERN TOKEN -->\n<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">\n  <rect width="100%" height="100%" fill="url(#pattern-${activePattern})" />\n</svg>`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Pattern Type Selector & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-white border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] rounded-3xl">
        {/* Pattern Mode Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {(['dense', 'sparse', 'border', 'packaging'] as PatternType[]).map((type) => (
            <button
              key={type}
              onClick={() => setActivePattern(type)}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all border-2 border-[#07334F] ${
                activePattern === type
                  ? 'bg-[#D92F2F] text-[#FDEFEB] shadow-[3px_3px_0px_0px_#07334F]'
                  : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#EF9FBD] shadow-[1px_1px_0px_0px_#07334F]'
              } active:translate-x-[1px] active:translate-y-[1px] active:shadow-none`}
            >
              {type} Pattern
            </button>
          ))}
        </div>

        {/* Canvas Color & Zoom Controls */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold text-[#07334F] uppercase tracking-wider">Canvas:</span>
            {[
              { name: 'Cream', hex: '#FDEFEB' },
              { name: 'Navy', hex: '#07334F' },
              { name: 'Red', hex: '#D92F2F' },
              { name: 'Cyan', hex: '#297FC1' },
              { name: 'Pink', hex: '#EF9FBD' }
            ].map((c) => (
              <button
                key={c.name}
                onClick={() => setBgColor(c.hex)}
                title={c.name}
                className={`w-7 h-7 rounded-full border-2 border-[#07334F] transition-transform ${
                  bgColor === c.hex ? 'scale-125 ring-2 ring-[#07334F] shadow-[1px_1px_0px_0px_#07334F]' : 'hover:scale-110'
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>

          {/* Scale slider */}
          <div className="flex items-center gap-2 border-l-2 border-[#07334F]/20 pl-4">
            <span className="text-xs font-bold text-[#07334F]">Zoom:</span>
            <input
              type="range"
              min="0.75"
              max="1.5"
              step="0.05"
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
              className="w-20 accent-[#D92F2F]"
            />
            <span className="text-[10px] font-mono font-bold text-[#07334F] w-8">{Math.round(scale * 100)}%</span>
          </div>

          <button
            onClick={handleCopySvg}
            className="px-3 py-1.5 bg-[#297FC1] text-[#FDEFEB] text-xs font-black rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#07334F] transition-all flex items-center gap-1.5"
          >
            {copiedCode ? <Check size={14} /> : <Copy size={14} />}
            <span>{copiedCode ? 'Copied' : 'Copy SVG'}</span>
          </button>
        </div>
      </div>

      {/* Pattern Canvas Stage */}
      <div
        className="relative w-full h-96 rounded-3xl border-4 border-[#07334F] shadow-[8px_8px_0px_0px_#07334F] overflow-hidden transition-colors duration-300"
        style={{ backgroundColor: bgColor }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* ========================================================
                1. DENSE PATTERN: Donuts, Sprinkles, Stars, Bubbles,
                   Smiley Faces, Doh Boy Silhouette, 'DOH', Wavy Lines, Sparks
               ======================================================== */}
            <pattern
              id="pattern-dense"
              x="0"
              y="0"
              width={160 * scale}
              height={160 * scale}
              patternUnits="userSpaceOnUse"
            >
              <g transform={`scale(${scale})`}>
                {/* Donut 1: Pink Strawberry Glaze */}
                <circle cx="36" cy="36" r="22" fill="#E8B072" stroke="#07334F" strokeWidth="3" />
                <path d="M18 30 C 20 20, 30 15, 42 16 C 52 18, 54 28, 52 36 C 46 41, 38 35, 34 38 C 28 42, 22 38, 18 30 Z" fill="#EF9FBD" stroke="#07334F" strokeWidth="2.5" />
                <circle cx="36" cy="36" r="7" fill={bgColor} stroke="#07334F" strokeWidth="2.5" />
                <rect x="27" y="24" width="4" height="2" rx="1" transform="rotate(30 27 24)" fill="#297FC1" />
                <rect x="42" y="23" width="4" height="2" rx="1" transform="rotate(-20 42 23)" fill="#FFD23F" />
                <rect x="36" y="47" width="4" height="2" rx="1" transform="rotate(45 36 47)" fill="#FDEFEB" />

                {/* Donut 2: Red Glaze (Bottom Right) */}
                <circle cx="125" cy="125" r="18" fill="#E8B072" stroke="#07334F" strokeWidth="3" />
                <path d="M112 120 C 114 112, 122 108, 130 109 C 138 110, 140 118, 138 126 C 134 129, 128 125, 125 127 C 120 130, 115 127, 112 120 Z" fill="#D92F2F" stroke="#07334F" strokeWidth="2.5" />
                <circle cx="125" cy="125" r="5.5" fill={bgColor} stroke="#07334F" strokeWidth="2" />
                <rect x="119" y="116" width="3.5" height="1.5" rx="0.5" fill="#FDEFEB" />
                <rect x="132" y="128" width="3.5" height="1.5" rx="0.5" fill="#FFD23F" />

                {/* Doh Boy Character Face (Top Right) */}
                <g transform="translate(110, 24)">
                  <circle cx="18" cy="18" r="15" fill="#E8B072" stroke="#07334F" strokeWidth="2.5" />
                  <path d="M6 14 C 8 8, 14 6, 22 7 C 28 8, 30 14, 28 18 C 24 20, 20 18, 17 19 C 12 21, 8 19, 6 14 Z" fill="#EF9FBD" stroke="#07334F" strokeWidth="2" />
                  <circle cx="18" cy="18" r="4.5" fill={bgColor} stroke="#07334F" strokeWidth="1.5" />
                  {/* Cartoon Eyes */}
                  <ellipse cx="14" cy="12" rx="2" ry="3" fill="#07334F" />
                  <ellipse cx="22" cy="12" rx="2" ry="3" fill="#07334F" />
                  <circle cx="13.5" cy="11" r="0.8" fill="#FDEFEB" />
                  <circle cx="21.5" cy="11" r="0.8" fill="#FDEFEB" />
                  {/* Cheeky smile */}
                  <path d="M13 22 Q 18 27, 23 22" stroke="#07334F" strokeWidth="2" strokeLinecap="round" fill="#D92F2F" />
                </g>

                {/* 'DOH' Street Lettering Pill (Center Left) */}
                <g transform="translate(18, 96)">
                  <rect x="0" y="0" width="38" height="16" rx="8" fill="#07334F" stroke="#FDEFEB" strokeWidth="1.5" />
                  <text x="19" y="12" textAnchor="middle" fill="#FDEFEB" fontSize="9" fontWeight="900" fontFamily="'Titan One', sans-serif">DOH!</text>
                </g>

                {/* 4-Point Stars and Geometric Sparks */}
                <path d="M88 28 L90 35 L97 37 L90 39 L88 46 L86 39 L79 37 L86 35 Z" fill="#297FC1" stroke="#07334F" strokeWidth="1.5" />
                <path d="M28 140 L30 144 L35 145 L30 146 L28 150 L26 146 L21 145 L26 144 Z" fill="#FFD23F" stroke="#07334F" strokeWidth="1.5" />
                <path d="M148 88 L149.5 92 L154 93.5 L149.5 95 L148 99 L146.5 95 L142 93.5 L146.5 92 Z" fill="#EF9FBD" stroke="#07334F" strokeWidth="1.5" />

                {/* Smiley Face Bubble (Center Right) */}
                <g transform="translate(85, 95)">
                  <circle cx="12" cy="12" r="11" fill="#FFD23F" stroke="#07334F" strokeWidth="2" />
                  <circle cx="8" cy="9" r="1.5" fill="#07334F" />
                  <circle cx="16" cy="9" r="1.5" fill="#07334F" />
                  <path d="M7 14 C 9 18, 15 18, 17 14" stroke="#07334F" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Wavy lines & Glaze Squiggles */}
                <path d="M70 65 Q 76 58, 82 65 T 94 65" stroke="#D92F2F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M115 72 Q 120 68, 125 72 T 135 72" stroke="#297FC1" strokeWidth="2" strokeLinecap="round" fill="none" />

                {/* Bubble Cluster */}
                <circle cx="58" cy="82" r="5" fill="#297FC1" stroke="#07334F" strokeWidth="1.5" />
                <circle cx="66" cy="85" r="3" fill="#EF9FBD" stroke="#07334F" strokeWidth="1" />
                <circle cx="56" cy="74" r="2" fill="#FFD23F" stroke="#07334F" strokeWidth="1" />

                {/* Action Burst Lines */}
                <path d="M96 14 L102 8" stroke="#07334F" strokeWidth="2" strokeLinecap="round" />
                <path d="M104 20 L110 18" stroke="#07334F" strokeWidth="2" strokeLinecap="round" />

                {/* Floating Rainbow Sprinkles */}
                <rect x="74" y="14" width="7" height="3" rx="1.5" transform="rotate(35 74 14)" fill="#D92F2F" stroke="#07334F" strokeWidth="0.8" />
                <rect x="18" y="68" width="7" height="3" rx="1.5" transform="rotate(-30 18 68)" fill="#297FC1" stroke="#07334F" strokeWidth="0.8" />
                <rect x="135" y="48" width="6" height="2.5" rx="1.2" transform="rotate(60 135 48)" fill="#FFD23F" stroke="#07334F" strokeWidth="0.8" />
                <rect x="68" y="132" width="7" height="3" rx="1.5" transform="rotate(-40 68 132)" fill="#EF9FBD" stroke="#07334F" strokeWidth="0.8" />
                <rect x="100" y="142" width="6" height="2.5" rx="1.2" transform="rotate(25 100 142)" fill="#297FC1" stroke="#07334F" strokeWidth="0.8" />
              </g>
            </pattern>

            {/* ========================================================
                2. SPARSE PATTERN: Rhythmic Donut, Star Sparks, Smileys
               ======================================================== */}
            <pattern
              id="pattern-sparse"
              x="0"
              y="0"
              width={220 * scale}
              height={220 * scale}
              patternUnits="userSpaceOnUse"
            >
              <g transform={`scale(${scale})`}>
                {/* Hero Donut Icon (Center Left) */}
                <circle cx="55" cy="55" r="28" fill="#E8B072" stroke="#07334F" strokeWidth="3.5" />
                <path d="M32 50 C 35 36, 48 30, 62 31 C 76 33, 78 47, 75 58 C 68 64, 58 56, 52 61 C 44 67, 36 60, 32 50 Z" fill="#EF9FBD" stroke="#07334F" strokeWidth="2.8" />
                <circle cx="55" cy="55" r="9" fill={bgColor} stroke="#07334F" strokeWidth="2.8" />
                <rect x="44" y="40" width="5" height="2" rx="1" transform="rotate(25 44 40)" fill="#297FC1" />
                <rect x="64" y="38" width="5" height="2" rx="1" transform="rotate(-15 64 38)" fill="#FFD23F" />
                <rect x="42" y="66" width="5" height="2" rx="1" transform="rotate(50 42 66)" fill="#FDEFEB" />

                {/* 4-Point Star Spark (Bottom Right) */}
                <path d="M165 150 L168 162 L180 165 L168 168 L165 180 L162 168 L150 165 L162 162 Z" fill="#297FC1" stroke="#07334F" strokeWidth="2.5" />
                
                {/* Smiley Face Bubble (Top Right) */}
                <g transform="translate(155, 40)">
                  <circle cx="16" cy="16" r="15" fill="#FFD23F" stroke="#07334F" strokeWidth="2.5" />
                  <circle cx="11" cy="12" r="2" fill="#07334F" />
                  <circle cx="21" cy="12" r="2" fill="#07334F" />
                  <path d="M10 19 C 13 24, 19 24, 22 19" stroke="#07334F" strokeWidth="2.5" strokeLinecap="round" />
                </g>

                {/* 'DOH' Mini Pill (Bottom Left) */}
                <g transform="translate(38, 160)">
                  <rect x="0" y="0" width="34" height="15" rx="7.5" fill="#D92F2F" stroke="#07334F" strokeWidth="2" />
                  <text x="17" y="11" textAnchor="middle" fill="#FDEFEB" fontSize="8" fontWeight="900" fontFamily="'Titan One', sans-serif">DOH!</text>
                </g>

                {/* Mini Sprinkles & Bubbles */}
                <circle cx="110" cy="90" r="5" fill="#EF9FBD" stroke="#07334F" strokeWidth="1.5" />
                <circle cx="106" cy="87" r="1.5" fill="#FDEFEB" />
                <rect x="125" y="45" width="7" height="2.5" rx="1" transform="rotate(30 125 45)" fill="#D92F2F" stroke="#07334F" strokeWidth="1" />
                <rect x="90" y="170" width="7" height="2.5" rx="1" transform="rotate(-45 90 170)" fill="#FFD23F" stroke="#07334F" strokeWidth="1" />
              </g>
            </pattern>

            {/* ========================================================
                3. BORDER PATTERN: Tamper-Evident Tape / Ribbon
               ======================================================== */}
            <pattern
              id="pattern-border"
              x="0"
              y="0"
              width={200 * scale}
              height={100 * scale}
              patternUnits="userSpaceOnUse"
            >
              <g transform={`scale(${scale})`}>
                {/* Horizontal guide rails */}
                <line x1="0" y1="50" x2="200" y2="50" stroke="#07334F" strokeWidth="4" />
                <line x1="0" y1="20" x2="200" y2="20" stroke="#07334F" strokeWidth="1.5" strokeDasharray="6 4" />
                <line x1="0" y1="80" x2="200" y2="80" stroke="#07334F" strokeWidth="1.5" strokeDasharray="6 4" />

                {/* 'DOH!' Master Street Badge */}
                <g transform="translate(15, 34)">
                  <rect x="0" y="0" width="45" height="26" rx="13" fill="#D92F2F" stroke="#07334F" strokeWidth="3" />
                  <text x="22.5" y="18" textAnchor="middle" fill="#FDEFEB" fontSize="11" fontWeight="900" fontFamily="'Titan One', sans-serif">DOH!</text>
                </g>

                {/* Donut Circle Stamp */}
                <g transform="translate(85, 34)">
                  <circle cx="13" cy="13" r="13" fill="#E8B072" stroke="#07334F" strokeWidth="3" />
                  <path d="M4 10 C 6 4, 12 3, 18 4 C 22 5, 23 9, 21 13 C 18 15, 14 13, 11 14 C 8 16, 5 14, 4 10 Z" fill="#EF9FBD" stroke="#07334F" strokeWidth="1.8" />
                  <circle cx="13" cy="13" r="3.5" fill={bgColor} stroke="#07334F" strokeWidth="1.5" />
                </g>

                {/* 4-Point Star Accent */}
                <g transform="translate(130, 36)">
                  <path d="M14 0 L17 10 L28 14 L17 18 L14 28 L11 18 L0 14 L11 10 Z" fill="#297FC1" stroke="#07334F" strokeWidth="2.5" />
                </g>

                {/* Smiley Tag */}
                <g transform="translate(175, 38)">
                  <circle cx="12" cy="12" r="11" fill="#FFD23F" stroke="#07334F" strokeWidth="2.5" />
                  <circle cx="8" cy="9" r="1.5" fill="#07334F" />
                  <circle cx="16" cy="9" r="1.5" fill="#07334F" />
                  <path d="M8 15 C 10 18, 14 18, 16 15" stroke="#07334F" strokeWidth="2" strokeLinecap="round" />
                </g>
              </g>
            </pattern>

            {/* ========================================================
                4. PACKAGING PATTERN: Checkerboard Street Box
               ======================================================== */}
            <pattern
              id="pattern-packaging"
              x="0"
              y="0"
              width={140 * scale}
              height={140 * scale}
              patternUnits="userSpaceOnUse"
            >
              <g transform={`scale(${scale})`}>
                {/* Checkerboard Pop Color Tiles */}
                <rect x="0" y="0" width="70" height="70" fill="rgba(7, 51, 79, 0.08)" stroke="#07334F" strokeWidth="1" />
                <rect x="70" y="70" width="70" height="70" fill="rgba(7, 51, 79, 0.08)" stroke="#07334F" strokeWidth="1" />
                <rect x="70" y="0" width="70" height="70" fill="rgba(239, 159, 189, 0.18)" stroke="#07334F" strokeWidth="1" />
                <rect x="0" y="70" width="70" height="70" fill="rgba(41, 127, 193, 0.14)" stroke="#07334F" strokeWidth="1" />

                {/* Tile 1: Top Left - 'DOH!' Street Pill */}
                <g transform="translate(12, 18)">
                  <rect x="0" y="0" width="46" height="22" rx="11" fill="#D92F2F" stroke="#07334F" strokeWidth="2.5" />
                  <text x="23" y="16" textAnchor="middle" fill="#FDEFEB" fontSize="10" fontWeight="900" fontFamily="'Titan One', sans-serif">DOH!</text>
                </g>
                <path d="M48 44 L50 49 L55 50 L50 51 L48 56 L46 51 L41 50 L46 49 Z" fill="#FFD23F" stroke="#07334F" strokeWidth="1.2" />

                {/* Tile 2: Top Right - Glazed Donut Stamp */}
                <g transform="translate(85, 14)">
                  <circle cx="21" cy="21" r="19" fill="#E8B072" stroke="#07334F" strokeWidth="2.8" />
                  <path d="M7 17 C 8 10, 15 5, 24 6 C 31 7, 34 13, 32 19 C 28 22, 23 18, 19 20 C 13 23, 8 20, 7 17 Z" fill="#EF9FBD" stroke="#07334F" strokeWidth="2.2" />
                  <circle cx="21" cy="21" r="6" fill={bgColor} stroke="#07334F" strokeWidth="2" />
                  <rect x="15" y="12" width="4" height="1.8" rx="0.9" fill="#297FC1" />
                  <rect x="25" y="10" width="4" height="1.8" rx="0.9" fill="#FFD23F" />
                </g>

                {/* Tile 3: Bottom Left - Doh Boy Mascot Icon */}
                <g transform="translate(18, 86)">
                  <circle cx="17" cy="17" r="15" fill="#E8B072" stroke="#07334F" strokeWidth="2.5" />
                  <path d="M5 13 C 7 7, 13 5, 21 6 C 26 7, 28 13, 27 17 C 23 19, 19 17, 16 18 C 11 20, 7 18, 5 13 Z" fill="#D92F2F" stroke="#07334F" strokeWidth="2" />
                  <circle cx="17" cy="17" r="4.5" fill={bgColor} stroke="#07334F" strokeWidth="1.5" />
                  <circle cx="13" cy="11" r="1.5" fill="#07334F" />
                  <circle cx="21" cy="11" r="1.5" fill="#07334F" />
                  <path d="M12 21 Q 17 25, 22 21" stroke="#07334F" strokeWidth="2" strokeLinecap="round" fill="none" />
                </g>

                {/* Tile 4: Bottom Right - Smiley and Sprinkle Burst */}
                <g transform="translate(88, 86)">
                  <circle cx="17" cy="17" r="14" fill="#FFD23F" stroke="#07334F" strokeWidth="2.5" />
                  <circle cx="12" cy="13" r="1.8" fill="#07334F" />
                  <circle cx="22" cy="13" r="1.8" fill="#07334F" />
                  <path d="M11 20 C 13 24, 21 24, 23 20" stroke="#07334F" strokeWidth="2" strokeLinecap="round" />
                  <rect x="42" y="14" width="6" height="2.5" rx="1.2" transform="rotate(30 42 14)" fill="#D92F2F" stroke="#07334F" strokeWidth="1" />
                  <rect x="36" y="28" width="6" height="2.5" rx="1.2" transform="rotate(-40 36 28)" fill="#297FC1" stroke="#07334F" strokeWidth="1" />
                </g>
              </g>
            </pattern>
          </defs>

          {/* Render Active Pattern */}
          <rect width="100%" height="100%" fill={`url(#pattern-${activePattern})`} />
        </svg>

        {/* Floating active badge */}
        <div className="absolute bottom-4 right-4 bg-[#07334F] text-[#FDEFEB] px-4 py-2 rounded-2xl border-2 border-[#FDEFEB] text-xs font-black shadow-lg uppercase tracking-wider flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFD23F] animate-pulse" />
          <span>Active Pattern: {activePattern} ({Math.round(scale * 100)}%)</span>
        </div>
      </div>

      {/* Pattern Spec & Motifs Breakdown Card */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-3 border-[#07334F] pb-4">
          <div>
            <h4 className="font-fun text-xl font-black text-[#07334F]">
              {patternDescriptions[activePattern].title}
            </h4>
            <p className="text-xs font-bold text-[#07334F]/80 mt-1">
              Primary Use: {patternDescriptions[activePattern].useCase}
            </p>
          </div>
          <span className="px-3 py-1 bg-[#FDEFEB] rounded-xl text-xs font-black text-[#D92F2F] border-2 border-[#07334F]">
            VECTOR REPEAT ASSET
          </span>
        </div>

        {/* Motifs Breakdown */}
        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#07334F]">
            Motifs Incorporated in this System:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 text-center text-[11px] font-black">
            {[
              { name: 'Donuts', color: '#EF9FBD' },
              { name: 'Sprinkles', color: '#297FC1' },
              { name: 'Stars & Sparks', color: '#FFD23F' },
              { name: 'Bubbles', color: '#297FC1' },
              { name: 'Smileys', color: '#FFD23F' },
              { name: 'Doh Boy Face', color: '#E8B072' },
              { name: '"DOH" Lettering', color: '#D92F2F' },
              { name: 'Wavy Lines', color: '#07334F', textLight: true }
            ].map((m) => (
              <div
                key={m.name}
                className="p-2.5 rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]"
                style={{ backgroundColor: m.color, color: m.textLight ? '#FDEFEB' : '#07334F' }}
              >
                {m.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
