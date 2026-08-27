import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Camera,
  CameraOff,
  RefreshCw,
  Download,
  Copy,
  Check,
  Sparkles,
  Trash2,
  Maximize2,
  RotateCw,
  FlipHorizontal,
  Plus,
  Image as ImageIcon,
  Layers,
  Sliders,
  Eye,
  Smile,
  Volume2,
  VolumeX,
  Share2,
  HelpCircle,
  Upload,
  X,
  Move
} from 'lucide-react';
import { DohBoyMascot } from './DohBoyMascot';
import { DohNutLogo } from './DohNutLogo';
import { DonutIcon, StarSpark } from './GraphicElements';

export interface PlacedSticker {
  id: string;
  stickerId: string;
  category: string;
  name: string;
  x: number; // percentage (0 to 100)
  y: number; // percentage (0 to 100)
  scale: number; // 0.4 to 2.5
  rotation: number; // -180 to 180
  flipX: boolean;
}

interface StickerDef {
  id: string;
  name: string;
  category: 'mascot' | 'badges' | 'wearable' | 'doodles';
  preview: React.ReactNode;
  svgTemplate: (width: number, height: number) => string;
}

const SAMPLE_BACKGROUNDS = [
  {
    id: 'sample-1',
    name: 'KL Street Foodie',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    desc: 'Bustling food street vibe'
  },
  {
    id: 'sample-2',
    name: 'Skatepark Curb',
    url: 'https://images.unsplash.com/photo-1520045884212-32c16b46e5c4?auto=format&fit=crop&w=1000&q=80',
    desc: 'Urban youth skate vibe'
  },
  {
    id: 'sample-3',
    name: 'Neon Night Market',
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80',
    desc: 'Late night warm market lights'
  },
  {
    id: 'sample-4',
    name: 'Minimal Coffee Bar',
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80',
    desc: 'Clean cafe counter'
  }
];

export const STICKER_CATALOG: StickerDef[] = [
  // Mascots
  {
    id: 'dohboy-hero',
    name: 'Doh Boy Hero Peace',
    category: 'mascot',
    preview: <DohBoyMascot pose="hero" size={70} />,
    svgTemplate: () => `
      <svg viewBox="0 0 220 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 140 Q 40 170 42 195" stroke="#297FC1" stroke-width="4" stroke-linecap="round" opacity="0.5" />
        <circle cx="43" cy="202" r="3" fill="#297FC1" opacity="0.5" />
        <g transform="translate(15, 60)">
          <path d="M46 70 C 22 55, 12 35, 16 20 C 18 10, 28 8, 34 22 L36 10 C 38 4, 46 4, 48 12 L50 30" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" stroke-linejoin="round" />
        </g>
        <path d="M155 130 C 178 135, 190 152, 178 168 C 168 176, 158 162, 152 148" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" stroke-linejoin="round" />
        <g>
          <path d="M85 185 L82 215" stroke="#07334F" stroke-width="9" stroke-linecap="round" />
          <path d="M60 215 C 60 206, 94 206, 100 215 L100 232 C 100 236, 56 238, 60 215 Z" fill="#D92F2F" stroke="#07334F" stroke-width="4.5" />
          <rect x="58" y="226" width="42" height="7" rx="3.5" fill="#FDEFEB" stroke="#07334F" stroke-width="2" />
          <path d="M78 218 L79 221 L82 222 L79 223 L78 226 L77 223 L74 222 L77 221 Z" fill="#FFD23F" />
          <path d="M135 185 L138 215" stroke="#07334F" stroke-width="9" stroke-linecap="round" />
          <path d="M120 215 C 120 206, 154 206, 160 215 L160 232 C 160 236, 116 238, 120 215 Z" fill="#297FC1" stroke="#07334F" stroke-width="4.5" />
          <rect x="118" y="226" width="42" height="7" rx="3.5" fill="#FDEFEB" stroke="#07334F" stroke-width="2" />
          <path d="M138 218 L139 221 L142 222 L139 223 L138 226 L137 223 L134 222 L137 221 Z" fill="#FFD23F" />
        </g>
        <circle cx="110" cy="115" r="74" fill="#E8B072" stroke="#07334F" stroke-width="6" />
        <path d="M48 98 C 46 66, 76 42, 110 42 C 146 42, 172 66, 170 98 C 168 122, 154 128, 142 116 C 134 108, 128 118, 118 124 C 106 130, 96 118, 88 114 C 74 110, 62 130, 52 120 C 48 114, 48 106, 48 98 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="5.5" />
        <path d="M72 56 C 84 48, 102 48, 114 50" stroke="#FDEFEB" stroke-width="4" stroke-linecap="round" fill="none" />
        <ellipse cx="110" cy="126" rx="20" ry="15" fill="#FDEFEB" stroke="#07334F" stroke-width="5" />
        <rect x="74" y="62" width="11" height="5" rx="2" transform="rotate(28 74 62)" fill="#297FC1" />
        <rect x="104" y="54" width="11" height="5" rx="2" transform="rotate(-15 104 54)" fill="#FFD23F" />
        <rect x="136" y="66" width="11" height="5" rx="2" transform="rotate(45 136 66)" fill="#FDEFEB" />
        <rect x="152" y="92" width="10" height="5" rx="2" transform="rotate(-35 152 92)" fill="#D92F2F" />
        <ellipse cx="88" cy="90" rx="10" ry="15" fill="#07334F" />
        <circle cx="85" cy="85" r="4.5" fill="#FDEFEB" />
        <ellipse cx="132" cy="90" rx="10" ry="15" fill="#07334F" />
        <circle cx="129" cy="85" r="4.5" fill="#FDEFEB" />
        <ellipse cx="70" cy="104" rx="7" ry="4.5" fill="#D92F2F" opacity="0.65" />
        <ellipse cx="150" cy="104" rx="7" ry="4.5" fill="#D92F2F" opacity="0.65" />
        <path d="M94 106 C 94 106, 110 128, 126 106 Z" fill="#07334F" stroke="#07334F" stroke-width="4" />
        <path d="M102 116 C 106 124, 114 124, 118 116 Z" fill="#D92F2F" />
      </svg>
    `
  },
  {
    id: 'dohboy-waving',
    name: 'Doh Boy Waving',
    category: 'mascot',
    preview: <DohBoyMascot pose="waving" size={70} />,
    svgTemplate: () => `
      <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(18, 50)">
          <path d="M42 55 C 20 40, 10 20, 12 10 C 14 0, 26 2, 34 16 C 36 10, 44 8, 48 14 C 52 20, 48 30, 42 42" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" stroke-linejoin="round" />
        </g>
        <path d="M140 135 C 160 140, 172 155, 160 170 C 150 178, 142 165, 138 152" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" stroke-linejoin="round" />
        <path d="M78 180 L76 210" stroke="#07334F" stroke-width="8" stroke-linecap="round" />
        <path d="M54 212 C 54 205, 84 205, 90 212 L90 226 C 90 230, 50 232, 54 212 Z" fill="#D92F2F" stroke="#07334F" stroke-width="4.5" />
        <rect x="52" y="222" width="38" height="6" rx="3" fill="#FDEFEB" stroke="#07334F" stroke-width="2" />
        <path d="M122 180 L124 210" stroke="#07334F" stroke-width="8" stroke-linecap="round" />
        <path d="M110 212 C 110 205, 140 205, 146 212 L146 226 C 146 230, 106 232, 110 212 Z" fill="#297FC1" stroke="#07334F" stroke-width="4.5" />
        <rect x="108" y="222" width="38" height="6" rx="3" fill="#FDEFEB" stroke="#07334F" stroke-width="2" />
        <circle cx="100" cy="110" r="68" fill="#E8B072" stroke="#07334F" stroke-width="6" />
        <path d="M44 94 C 42 66, 68 44, 100 44 C 134 44, 156 66, 154 94 C 152 115, 140 120, 130 110 C 122 102, 116 112, 106 118 C 96 124, 88 112, 80 108 C 68 104, 56 122, 48 114 C 44 108, 44 102, 44 94 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="5" />
        <ellipse cx="100" cy="120" rx="18" ry="14" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" />
        <rect x="68" y="60" width="10" height="4.5" rx="2" transform="rotate(30 68 60)" fill="#297FC1" />
        <rect x="94" y="52" width="10" height="4.5" rx="2" transform="rotate(-15 94 52)" fill="#FFD23F" />
        <ellipse cx="80" cy="88" rx="9" ry="13" fill="#07334F" />
        <circle cx="77" cy="84" r="4" fill="#FDEFEB" />
        <ellipse cx="120" cy="88" rx="9" ry="13" fill="#07334F" />
        <circle cx="117" cy="84" r="4" fill="#FDEFEB" />
        <path d="M86 102 C 86 102, 100 120, 114 102 Z" fill="#07334F" stroke="#07334F" stroke-width="3.5" />
        <path d="M92 110 C 96 116, 104 116, 108 110 Z" fill="#D92F2F" />
      </svg>
    `
  },
  {
    id: 'dohboy-avatar',
    name: 'Doh Boy Face Stamp',
    category: 'mascot',
    preview: <DohBoyMascot pose="avatar" size={70} />,
    svgTemplate: () => `
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="74" fill="#FDEFEB" stroke="#07334F" stroke-width="5" />
        <circle cx="80" cy="80" r="62" fill="#E8B072" stroke="#07334F" stroke-width="5" />
        <path d="M32 68 C 30 50, 48 26, 80 26 C 112 26, 130 50, 128 68 C 126 84, 116 88, 108 80 C 102 74, 96 82, 88 88 C 80 94, 72 82, 64 80 C 54 78, 44 90, 36 82 C 32 78, 32 74, 32 68 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="4.5" />
        <ellipse cx="80" cy="84" rx="16" ry="12" fill="#FDEFEB" stroke="#07334F" stroke-width="4" />
        <rect x="52" y="38" width="8" height="3.5" rx="1.5" transform="rotate(30 52 38)" fill="#297FC1" />
        <rect x="74" y="32" width="8" height="3.5" rx="1.5" transform="rotate(-15 74 32)" fill="#FFD23F" />
        <ellipse cx="64" cy="62" rx="7" ry="10" fill="#07334F" />
        <circle cx="62" cy="59" r="3" fill="#FDEFEB" />
        <ellipse cx="96" cy="62" rx="7" ry="10" fill="#07334F" />
        <circle cx="94" cy="59" r="3" fill="#FDEFEB" />
        <ellipse cx="50" cy="72" rx="5" ry="3" fill="#D92F2F" opacity="0.6" />
        <ellipse cx="110" cy="72" rx="5" ry="3" fill="#D92F2F" opacity="0.6" />
        <path d="M70 74 Q 80 84 90 74" fill="none" stroke="#07334F" stroke-width="3.5" stroke-linecap="round" />
      </svg>
    `
  },
  {
    id: 'dohboy-munching',
    name: 'Doh Boy Munching',
    category: 'mascot',
    preview: <DohBoyMascot pose="eating" size={70} />,
    svgTemplate: () => `
      <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M140 120 C 160 110, 150 90, 130 92" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" />
        <circle cx="126" cy="92" r="14" fill="#E8B072" stroke="#07334F" stroke-width="3" />
        <path d="M116 88 C 118 82, 134 82, 136 88 C 136 94, 116 96, 116 88 Z" fill="#D92F2F" stroke="#07334F" stroke-width="2" />
        <circle cx="126" cy="92" r="4" fill="#FDEFEB" stroke="#07334F" stroke-width="1.5" />
        <circle cx="100" cy="110" r="68" fill="#E8B072" stroke="#07334F" stroke-width="6" />
        <path d="M44 94 C 42 66, 68 44, 100 44 C 134 44, 156 66, 154 94 C 152 115, 140 120, 130 110 C 122 102, 116 112, 106 118 C 96 124, 88 112, 80 108 C 68 104, 56 122, 48 114 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="5" />
        <ellipse cx="100" cy="120" rx="18" ry="14" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" />
        <ellipse cx="78" cy="85" rx="8" ry="12" fill="#07334F" />
        <circle cx="82" cy="82" r="3.5" fill="#FDEFEB" />
        <ellipse cx="112" cy="85" rx="8" ry="12" fill="#07334F" />
        <circle cx="116" cy="82" r="3.5" fill="#FDEFEB" />
        <path d="M92 102 Q 106 116 116 102" stroke="#07334F" stroke-width="4" stroke-linecap="round" fill="none" />
      </svg>
    `
  },

  // Badges & Logos
  {
    id: 'badge-doh-punch',
    name: '"DOH!" Comic Blast',
    category: 'badges',
    preview: (
      <div className="px-3 py-2 bg-[#FFD23F] rounded-2xl border-3 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] rotate-[-4deg]">
        <span className="font-fun text-xl font-black text-[#D92F2F]">DOH!</span>
      </div>
    ),
    svgTemplate: () => `
      <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="148" height="84" rx="28" fill="#FFD23F" stroke="#07334F" stroke-width="6" />
        <text x="80" y="65" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="44" fill="#D92F2F" stroke="#07334F" stroke-width="2" text-anchor="middle">DOH!</text>
      </svg>
    `
  },
  {
    id: 'badge-master-logo',
    name: 'DOH-NUT Master Badge',
    category: 'badges',
    preview: <DohNutLogo variant="primary" size={90} />,
    svgTemplate: () => `
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="92" fill="#D92F2F" stroke="#07334F" stroke-width="6" />
        <circle cx="100" cy="100" r="76" fill="#FDEFEB" stroke="#07334F" stroke-width="4" />
        <text x="100" y="95" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="28" fill="#07334F" text-anchor="middle">DOH-NUT</text>
        <text x="100" y="125" font-family="Arial, sans-serif" font-weight="800" font-size="12" fill="#D92F2F" text-anchor="middle">EST. MALAYSIA</text>
      </svg>
    `
  },
  {
    id: 'badge-just-one-more',
    name: '★ JUST ONE MORE ★ Pill',
    category: 'badges',
    preview: (
      <div className="px-3 py-1.5 bg-[#297FC1] rounded-full border-2 border-[#07334F] text-[#FDEFEB] text-[10px] font-black tracking-wider">
        ★ JUST ONE MORE ★
      </div>
    ),
    svgTemplate: () => `
      <svg viewBox="0 0 220 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="210" height="60" rx="30" fill="#297FC1" stroke="#07334F" stroke-width="5" />
        <text x="110" y="42" font-family="Arial Black, sans-serif" font-weight="900" font-size="16" fill="#FDEFEB" text-anchor="middle">★ JUST ONE MORE ★</text>
      </svg>
    `
  },
  {
    id: 'badge-zero-apologies',
    name: 'HOT DOUGH Tape',
    category: 'badges',
    preview: (
      <div className="px-3 py-1.5 bg-[#07334F] rounded-xl border-2 border-[#EF9FBD] text-[#FDEFEB] text-[9px] font-black uppercase">
        HOT DOUGH • ZERO APOLOGIES
      </div>
    ),
    svgTemplate: () => `
      <svg viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="252" height="52" rx="14" fill="#07334F" stroke="#EF9FBD" stroke-width="4" />
        <text x="130" y="36" font-family="Arial Black, sans-serif" font-weight="900" font-size="13" fill="#FDEFEB" text-anchor="middle">HOT DOUGH • ZERO APOLOGIES</text>
      </svg>
    `
  },

  // Wearables & Props
  {
    id: 'wear-cap',
    name: 'DOH-NUT Red Street Cap',
    category: 'wearable',
    preview: (
      <div className="w-14 h-10 bg-[#D92F2F] rounded-t-full border-3 border-[#07334F] relative flex items-center justify-center">
        <span className="text-[8px] font-black text-white">DOH</span>
      </div>
    ),
    svgTemplate: () => `
      <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Cap Visor */}
        <path d="M30 95 C 10 90, 5 115, 45 118 C 95 120, 160 115, 175 95 Z" fill="#07334F" stroke="#07334F" stroke-width="4" />
        {/* Cap Crown */}
        <path d="M45 95 C 40 40, 70 20, 105 20 C 145 20, 170 45, 165 95 Z" fill="#D92F2F" stroke="#07334F" stroke-width="5" />
        {/* Eyelets */}
        <circle cx="85" cy="45" r="3" fill="#07334F" />
        <circle cx="125" cy="45" r="3" fill="#07334F" />
        {/* Front Badge */}
        <circle cx="105" cy="68" r="16" fill="#FDEFEB" stroke="#07334F" stroke-width="3" />
        <text x="105" y="73" font-family="Arial Black, sans-serif" font-weight="900" font-size="10" fill="#D92F2F" text-anchor="middle">DOH</text>
        {/* Top Button */}
        <ellipse cx="105" cy="18" rx="6" ry="3" fill="#FFD23F" stroke="#07334F" stroke-width="2" />
      </svg>
    `
  },
  {
    id: 'wear-shades',
    name: 'Chunky 80s Street Shades',
    category: 'wearable',
    preview: (
      <div className="flex gap-1 items-center">
        <div className="w-6 h-5 bg-[#07334F] rounded-lg" />
        <div className="w-2 h-1 bg-[#07334F]" />
        <div className="w-6 h-5 bg-[#07334F] rounded-lg" />
      </div>
    ),
    svgTemplate: () => `
      <svg viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 25 L95 25 L85 65 L30 65 Z" fill="#07334F" stroke="#FFD23F" stroke-width="5" />
        <path d="M95 32 L125 32" stroke="#FFD23F" stroke-width="6" stroke-linecap="round" />
        <path d="M125 25 L200 25 L190 65 L135 65 Z" fill="#07334F" stroke="#FFD23F" stroke-width="5" />
        {/* Glare Reflections */}
        <path d="M35 32 L55 58" stroke="#FDEFEB" stroke-width="3" stroke-linecap="round" opacity="0.8" />
        <path d="M140 32 L160 58" stroke="#FDEFEB" stroke-width="3" stroke-linecap="round" opacity="0.8" />
      </svg>
    `
  },
  {
    id: 'wear-donut-mouth',
    name: 'Bite-Sized Donut in Mouth',
    category: 'wearable',
    preview: <DonutIcon size={36} />,
    svgTemplate: () => `
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="50" fill="#E8B072" stroke="#07334F" stroke-width="5" />
        <path d="M20 50 C 18 35, 35 20, 60 20 C 85 20, 102 35, 100 50 C 98 65, 88 70, 80 62 C 72 54, 68 62, 60 68 C 50 74, 42 62, 34 60 C 24 58, 20 65, 20 50 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="4" />
        <circle cx="60" cy="60" r="16" fill="#FDEFEB" stroke="#07334F" stroke-width="4" />
        <rect x="40" y="32" width="8" height="3.5" rx="1.5" transform="rotate(30 40 32)" fill="#297FC1" />
        <rect x="72" y="28" width="8" height="3.5" rx="1.5" transform="rotate(-20 72 28)" fill="#FFD23F" />
        <rect x="85" y="48" width="7" height="3" rx="1.5" transform="rotate(45 85 48)" fill="#D92F2F" />
      </svg>
    `
  },
  {
    id: 'wear-cheek-blush',
    name: 'Kawaii Glaze Cheeks',
    category: 'wearable',
    preview: (
      <div className="flex gap-4">
        <div className="w-5 h-3 bg-[#D92F2F]/60 rounded-full" />
        <div className="w-5 h-3 bg-[#D92F2F]/60 rounded-full" />
      </div>
    ),
    svgTemplate: () => `
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="30" rx="25" ry="15" fill="#D92F2F" opacity="0.65" />
        <circle cx="30" cy="25" r="4" fill="#FDEFEB" opacity="0.8" />
        <ellipse cx="160" cy="30" rx="25" ry="15" fill="#D92F2F" opacity="0.65" />
        <circle cx="150" cy="25" r="4" fill="#FDEFEB" opacity="0.8" />
      </svg>
    `
  },

  // Doodles & Sparks
  {
    id: 'doodle-starburst',
    name: 'Gold Starburst Spark',
    category: 'doodles',
    preview: <StarSpark size={36} color="#FFD23F" />,
    svgTemplate: () => `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10 L58 38 L86 50 L58 62 L50 90 L42 62 L14 50 L42 38 Z" fill="#FFD23F" stroke="#07334F" stroke-width="4" stroke-linejoin="round" />
        <circle cx="50" cy="50" r="6" fill="#FDEFEB" />
      </svg>
    `
  },
  {
    id: 'doodle-kopi-cup',
    name: 'Iced Kopi-C Cup',
    category: 'doodles',
    preview: (
      <div className="w-8 h-11 bg-[#E8B072] rounded-b-xl border-2 border-[#07334F] relative flex flex-col items-center">
        <div className="w-10 h-2 bg-[#297FC1] rounded-t-md" />
        <span className="text-[7px] font-black text-[#07334F] mt-2">KOPI</span>
      </div>
    ),
    svgTemplate: () => `
      <svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Straw */}
        <path d="M55 10 L50 40" stroke="#D92F2F" stroke-width="6" stroke-linecap="round" />
        {/* Lid */}
        <ellipse cx="50" cy="40" rx="35" ry="10" fill="#297FC1" stroke="#07334F" stroke-width="4" />
        {/* Cup body */}
        <path d="M20 45 L30 125 C 32 132, 68 132, 70 125 L80 45 Z" fill="#E8B072" stroke="#07334F" stroke-width="5" />
        {/* Ice Cubes */}
        <rect x="35" y="60" width="14" height="14" rx="3" fill="#FDEFEB" opacity="0.7" transform="rotate(15 35 60)" />
        <rect x="52" y="80" width="14" height="14" rx="3" fill="#FDEFEB" opacity="0.7" transform="rotate(-10 52 80)" />
        {/* Sleeve */}
        <path d="M24 70 L27 100 L73 100 L76 70 Z" fill="#07334F" />
        <text x="50" y="88" font-family="Arial Black, sans-serif" font-weight="900" font-size="10" fill="#FFD23F" text-anchor="middle">KOPI-C</text>
      </svg>
    `
  },
  {
    id: 'doodle-glaze-drip',
    name: 'Pink Glaze Drip Strip',
    category: 'doodles',
    preview: (
      <div className="w-16 h-6 bg-[#EF9FBD] rounded-b-lg border-2 border-[#07334F]" />
    ),
    svgTemplate: () => `
      <svg viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 L240 0 L240 15 C 220 15, 210 35, 195 35 C 180 35, 175 18, 160 18 C 145 18, 140 45, 120 45 C 105 45, 100 20, 85 20 C 70 20, 65 52, 45 52 C 30 52, 25 15, 0 15 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="4" />
      </svg>
    `
  }
];

export const DohNutCameraStudio: React.FC = () => {
  // Stream & Media state
  const [cameraActive, setCameraActive] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  const [customBgImage, setCustomBgImage] = useState<string | null>(null);
  const [selectedSampleIndex, setSelectedSampleIndex] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Filter & Frame
  const [activeFilter, setActiveFilter] = useState<'normal' | 'warm' | 'vivid' | 'neon' | 'bw'>('normal');
  const [activeFrame, setActiveFrame] = useState<'none' | 'polaroid' | 'street' | 'drips'>('street');

  // Stickers on stage
  const [placedStickers, setPlacedStickers] = useState<PlacedSticker[]>([
    {
      id: 'st-init-1',
      stickerId: 'dohboy-hero',
      category: 'mascot',
      name: 'Doh Boy Hero Peace',
      x: 75,
      y: 70,
      scale: 1.1,
      rotation: 5,
      flipX: false
    },
    {
      id: 'st-init-2',
      stickerId: 'badge-doh-punch',
      category: 'badges',
      name: '"DOH!" Comic Blast',
      x: 25,
      y: 20,
      scale: 0.9,
      rotation: -8,
      flipX: false
    }
  ]);
  const [selectedStickerId, setSelectedStickerId] = useState<string | null>('st-init-1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Capture & Snapshot state
  const [flashActive, setFlashActive] = useState<boolean>(false);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);
  const [recentSnaps, setRecentSnaps] = useState<string[]>([]);

  // Dragging state
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Refs
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Play Shutter Sound via Web Audio API
  const playShutterSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    } catch (e) {
      // Audio context might fail silently
    }
  }, [soundEnabled]);

  // Start Camera Stream
  const startCamera = async (mode = facingMode) => {
    setCameraError(null);
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: mode,
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setCameraActive(true);
      setCustomBgImage(null);
    } catch (err: any) {
      console.warn('Camera access error:', err);
      setCameraError(
        err.name === 'NotAllowedError'
          ? 'Camera permission denied. You can enable camera in your browser or try on stickers using our sample food street scenes below!'
          : 'Unable to connect to camera device. Enjoy our Malaysian street scene presets or upload a photo!'
      );
      setCameraActive(false);
    }
  };

  // Stop Camera Stream
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
  };

  // Toggle Camera Facing
  const toggleFacingMode = () => {
    const nextMode = facingMode === 'user' ? 'environment' : 'user';
    setFacingMode(nextMode);
    if (cameraActive) {
      startCamera(nextMode);
    }
  };

  // Handle Photo Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      stopCamera();
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomBgImage(event.target?.result as string);
        setCameraError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  // Select Sample Scene
  const handleSelectSample = (idx: number) => {
    stopCamera();
    setSelectedSampleIndex(idx);
    setCustomBgImage(SAMPLE_BACKGROUNDS[idx].url);
    setCameraError(null);
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  // Add Sticker to Stage
  const addSticker = (stickerDef: StickerDef) => {
    const newSticker: PlacedSticker = {
      id: 'st-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
      stickerId: stickerDef.id,
      category: stickerDef.category,
      name: stickerDef.name,
      x: 35 + Math.floor(Math.random() * 30),
      y: 35 + Math.floor(Math.random() * 30),
      scale: 1.0,
      rotation: Math.floor(Math.random() * 20) - 10,
      flipX: false
    };

    setPlacedStickers((prev) => [...prev, newSticker]);
    setSelectedStickerId(newSticker.id);
  };

  // Remove Active Sticker
  const removeSelectedSticker = () => {
    if (!selectedStickerId) return;
    setPlacedStickers((prev) => prev.filter((s) => s.id !== selectedStickerId));
    setSelectedStickerId(null);
  };

  // Duplicate Active Sticker
  const duplicateSelectedSticker = () => {
    const target = placedStickers.find((s) => s.id === selectedStickerId);
    if (!target) return;
    const clone: PlacedSticker = {
      ...target,
      id: 'st-' + Date.now(),
      x: Math.min(85, target.x + 8),
      y: Math.min(85, target.y + 8)
    };
    setPlacedStickers((prev) => [...prev, clone]);
    setSelectedStickerId(clone.id);
  };

  // Bring Active Sticker to Front
  const bringToFront = () => {
    if (!selectedStickerId) return;
    setPlacedStickers((prev) => {
      const idx = prev.findIndex((s) => s.id === selectedStickerId);
      if (idx === -1) return prev;
      const target = prev[idx];
      return [...prev.filter((s) => s.id !== selectedStickerId), target];
    });
  };

  // Mouse / Touch Dragging Handlers
  const handleStagePointerDown = (e: React.PointerEvent, stickerId: string) => {
    e.stopPropagation();
    setSelectedStickerId(stickerId);
    setIsDragging(true);

    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const sticker = placedStickers.find((s) => s.id === stickerId);
    if (!sticker) return;

    const currentPixelX = (sticker.x / 100) * rect.width;
    const currentPixelY = (sticker.y / 100) * rect.height;

    setDragOffset({
      x: e.clientX - rect.left - currentPixelX,
      y: e.clientY - rect.top - currentPixelY
    });
  };

  const handleStagePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !selectedStickerId || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();

    const newPixelX = e.clientX - rect.left - dragOffset.x;
    const newPixelY = e.clientY - rect.top - dragOffset.y;

    const newPercentX = Math.max(5, Math.min(95, (newPixelX / rect.width) * 100));
    const newPercentY = Math.max(5, Math.min(95, (newPixelY / rect.height) * 100));

    setPlacedStickers((prev) =>
      prev.map((s) => (s.id === selectedStickerId ? { ...s, x: newPercentX, y: newPercentY } : s))
    );
  };

  const handleStagePointerUp = () => {
    setIsDragging(false);
  };

  // Update Scale & Rotation of selected
  const updateSelectedSticker = (updates: Partial<PlacedSticker>) => {
    if (!selectedStickerId) return;
    setPlacedStickers((prev) =>
      prev.map((s) => (s.id === selectedStickerId ? { ...s, ...updates } : s))
    );
  };

  // Capture High-Res Snapshot
  const captureSnapshot = async () => {
    playShutterSound();
    setFlashActive(true);
    setTimeout(() => setFlashActive(false), 200);

    const canvas = document.createElement('canvas');
    const width = 1080;
    const height = 1080;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Apply Filter Styles on Canvas
    if (activeFilter === 'warm') {
      ctx.filter = 'sepia(0.25) contrast(1.1) brightness(1.05)';
    } else if (activeFilter === 'vivid') {
      ctx.filter = 'saturate(1.4) contrast(1.15)';
    } else if (activeFilter === 'neon') {
      ctx.filter = 'hue-rotate(15deg) contrast(1.25) saturate(1.3)';
    } else if (activeFilter === 'bw') {
      ctx.filter = 'grayscale(1) contrast(1.3)';
    } else {
      ctx.filter = 'none';
    }

    // 1. Draw Background Image or Video Feed
    if (cameraActive && videoRef.current) {
      const v = videoRef.current;
      const vWidth = v.videoWidth || 640;
      const vHeight = v.videoHeight || 480;
      const minDim = Math.min(vWidth, vHeight);
      const sx = (vWidth - minDim) / 2;
      const sy = (vHeight - minDim) / 2;

      ctx.save();
      if (facingMode === 'user') {
        // Mirror front camera
        ctx.translate(width, 0);
        ctx.scale(-1, 1);
      }
      ctx.drawImage(v, sx, sy, minDim, minDim, 0, 0, width, height);
      ctx.restore();
    } else {
      // Draw static photo or sample
      const bgImg = new Image();
      bgImg.crossOrigin = 'anonymous';
      bgImg.src = customBgImage || SAMPLE_BACKGROUNDS[selectedSampleIndex].url;
      await new Promise((resolve) => {
        bgImg.onload = () => {
          ctx.drawImage(bgImg, 0, 0, width, height);
          resolve(true);
        };
        bgImg.onerror = () => resolve(false);
      });
    }

    // Reset filter for overlays
    ctx.filter = 'none';

    // 2. Draw Placed Stickers
    for (const sticker of placedStickers) {
      const def = STICKER_CATALOG.find((d) => d.id === sticker.stickerId);
      if (!def) continue;

      const svgData = def.svgTemplate(200, 200);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      const stickerImg = new Image();
      await new Promise((resolve) => {
        stickerImg.onload = () => {
          ctx.save();
          const targetX = (sticker.x / 100) * width;
          const targetY = (sticker.y / 100) * height;
          const baseSize = 220 * sticker.scale;

          ctx.translate(targetX, targetY);
          ctx.rotate((sticker.rotation * Math.PI) / 180);
          if (sticker.flipX) {
            ctx.scale(-1, 1);
          }

          ctx.drawImage(stickerImg, -baseSize / 2, -baseSize / 2, baseSize, baseSize);
          ctx.restore();
          URL.revokeObjectURL(url);
          resolve(true);
        };
        stickerImg.onerror = () => resolve(false);
        stickerImg.src = url;
      });
    }

    // 3. Draw Selected Frame
    if (activeFrame === 'polaroid') {
      ctx.save();
      // Bottom card caption
      ctx.fillStyle = '#FDEFEB';
      ctx.fillRect(0, height - 120, width, 120);
      ctx.lineWidth = 16;
      ctx.strokeStyle = '#07334F';
      ctx.strokeRect(0, 0, width, height);
      ctx.fillStyle = '#07334F';
      ctx.font = '900 28px sans-serif';
      ctx.fillText('DOH-NUT • KUALA LUMPUR STREET DROP #01', 30, height - 48);
      ctx.fillStyle = '#D92F2F';
      ctx.font = '800 20px sans-serif';
      ctx.fillText('★ 100% SOURDOUGH CRISP', width - 340, height - 48);
      ctx.restore();
    } else if (activeFrame === 'street') {
      ctx.save();
      // Viewfinder corners
      ctx.strokeStyle = '#FFD23F';
      ctx.lineWidth = 8;
      // Top-Left
      ctx.strokeRect(30, 30, 50, 8);
      ctx.strokeRect(30, 30, 8, 50);
      // Top-Right
      ctx.strokeRect(width - 80, 30, 50, 8);
      ctx.strokeRect(width - 38, 30, 8, 50);
      // Bottom-Left
      ctx.strokeRect(30, height - 38, 50, 8);
      ctx.strokeRect(30, height - 80, 8, 50);
      // Bottom-Right
      ctx.strokeRect(width - 80, height - 38, 50, 8);
      ctx.strokeRect(width - 38, height - 80, 8, 50);

      // Watermark tag
      ctx.fillStyle = '#07334F';
      ctx.fillRect(width - 240, height - 60, 200, 35);
      ctx.fillStyle = '#FDEFEB';
      ctx.font = '900 16px sans-serif';
      ctx.fillText('DOH-NUT / STREET REC', width - 230, height - 37);
      ctx.restore();
    }

    const dataUrl = canvas.toDataURL('image/png');
    setCapturedPhoto(dataUrl);
    setRecentSnaps((prev) => [dataUrl, ...prev.slice(0, 5)]);
  };

  const handleDownload = () => {
    if (!capturedPhoto) return;
    const a = document.createElement('a');
    a.href = capturedPhoto;
    a.download = `dohnut-branded-snap-${Date.now()}.png`;
    a.click();
  };

  const handleCopyImage = async () => {
    if (!capturedPhoto) return;
    try {
      const res = await fetch(capturedPhoto);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    } catch (e) {
      handleDownload();
    }
  };

  const selectedSticker = placedStickers.find((s) => s.id === selectedStickerId);

  const filteredCatalog = STICKER_CATALOG.filter(
    (s) => activeCategory === 'all' || s.category === activeCategory
  );

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {copiedNotification && (
        <div className="fixed top-6 right-6 z-50 bg-[#07334F] text-[#FDEFEB] px-5 py-3 rounded-2xl border-3 border-[#FFD23F] shadow-2xl flex items-center gap-3 animate-bounce">
          <Check size={20} className="text-[#48BB78]" />
          <span className="text-sm font-black font-fun">Branded photo copied to clipboard!</span>
        </div>
      )}

      {/* Main Studio Frame */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
        {/* Studio Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-3 border-[#07334F] pb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#D92F2F] border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] flex items-center justify-center text-[#FDEFEB]">
              <Camera size={26} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-fun text-xl sm:text-2xl font-black text-[#07334F]">
                  DOH-NUT AR STICKER & MASCOT PHOTOBOOTH
                </h3>
                <span className="px-2.5 py-0.5 bg-[#FFD23F] text-[#07334F] text-[10px] font-black rounded-lg border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
                  LIVE CAMERA & UPLOAD
                </span>
              </div>
              <p className="text-xs font-bold text-[#07334F]/80">
                Snap live selfies, try on Doh Boy mascot poses, street caps, stickers, and export high-res branded content.
              </p>
            </div>
          </div>

          {/* Sound & Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-xl bg-[#FDEFEB] hover:bg-[#FFD23F] text-[#07334F] border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] transition-all"
              title={soundEnabled ? 'Mute Shutter Sound' : 'Enable Shutter Sound'}
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
            <button
              onClick={() => setPlacedStickers([])}
              className="px-3 py-1.5 rounded-xl bg-[#FDEFEB] hover:bg-[#D92F2F] hover:text-white text-[#07334F] font-black text-xs border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] transition-all flex items-center gap-1.5"
            >
              <Trash2 size={14} /> Clear Stickers
            </button>
          </div>
        </div>

        {/* Camera Permission / Error Alert */}
        {cameraError && (
          <div className="p-4 bg-[#FFF3CD] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] text-[#856404] text-xs space-y-2">
            <div className="font-black flex items-center gap-2">
              <CameraOff size={16} className="text-[#D92F2F]" />
              <span>Camera Notice: {cameraError}</span>
            </div>
            <p className="text-[11px] font-medium text-[#07334F]">
              💡 Tip: Click any of the Malaysian street photo presets below or upload your own selfie to try on all DOH-NUT stickers right now!
            </p>
          </div>
        )}

        {/* Studio Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Photobooth Canvas Stage */}
          <div className="lg:col-span-7 flex flex-col items-center space-y-4">
            {/* The Active Viewfinder Stage */}
            <div
              ref={stageRef}
              onPointerMove={handleStagePointerMove}
              onPointerUp={handleStagePointerUp}
              onClick={() => setSelectedStickerId(null)}
              className={`relative w-full max-w-[480px] aspect-square rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] overflow-hidden bg-[#07334F] select-none touch-none ${
                activeFilter === 'warm' ? 'sepia-[0.25] contrast-[1.1]' : ''
              } ${activeFilter === 'vivid' ? 'saturate-[1.4] contrast-[1.15]' : ''} ${
                activeFilter === 'neon' ? 'hue-rotate-15 contrast-[1.25] saturate-[1.3]' : ''
              } ${activeFilter === 'bw' ? 'grayscale contrast-[1.3]' : ''}`}
            >
              {/* Flash Overlay */}
              {flashActive && (
                <div className="absolute inset-0 z-50 bg-white opacity-95 transition-opacity duration-150" />
              )}

              {/* Background Video (Live Camera) */}
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className={`absolute inset-0 w-full h-full object-cover ${
                  cameraActive ? 'block' : 'hidden'
                } ${facingMode === 'user' ? 'scale-x-[-1]' : ''}`}
              />

              {/* Fallback Static Image / Sample Scene */}
              {!cameraActive && (
                <img
                  src={customBgImage || SAMPLE_BACKGROUNDS[selectedSampleIndex].url}
                  alt="Street Photobooth Background"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
              )}

              {/* Viewfinder Grid Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#FDEFEB_1px,transparent_1px),linear-gradient(to_bottom,#FDEFEB_1px,transparent_1px)] bg-[size:48px_48px]" />

              {/* Placed Stickers on Stage */}
              {placedStickers.map((st) => {
                const def = STICKER_CATALOG.find((d) => d.id === st.stickerId);
                const isSelected = selectedStickerId === st.id;

                return (
                  <div
                    key={st.id}
                    onPointerDown={(e) => handleStagePointerDown(e, st.id)}
                    style={{
                      left: `${st.x}%`,
                      top: `${st.y}%`,
                      transform: `translate(-50%, -50%) scale(${st.scale}) rotate(${st.rotation}deg) ${
                        st.flipX ? 'scaleX(-1)' : ''
                      }`,
                      cursor: isDragging && isSelected ? 'grabbing' : 'grab'
                    }}
                    className={`absolute z-30 transition-transform ${
                      isSelected
                        ? 'ring-4 ring-[#FFD23F] ring-offset-2 ring-offset-[#07334F] rounded-2xl'
                        : 'hover:scale-105'
                    }`}
                  >
                    <div className="pointer-events-none w-28 h-28 flex items-center justify-center filter drop-shadow-[0_4px_8px_rgba(7,51,79,0.4)]">
                      {def?.preview}
                    </div>

                    {/* Active Controls Tag */}
                    {isSelected && (
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#07334F] text-[#FDEFEB] text-[9px] font-black px-2 py-0.5 rounded-md whitespace-nowrap shadow border border-[#FFD23F] flex items-center gap-1">
                        <Move size={10} /> Drag to position
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Frame Overlays */}
              {activeFrame === 'polaroid' && (
                <div className="absolute inset-0 pointer-events-none border-[12px] border-[#FDEFEB] flex flex-col justify-between">
                  <div />
                  <div className="bg-[#FDEFEB] p-3 text-[#07334F] flex items-center justify-between border-t-2 border-[#07334F]/20">
                    <span className="font-fun text-xs font-black">DOH-NUT • KL STREET DROP #01</span>
                    <span className="text-[10px] font-black text-[#D92F2F]">★ SOURDOUGH CRISP</span>
                  </div>
                </div>
              )}

              {activeFrame === 'street' && (
                <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="w-6 h-6 border-t-4 border-l-4 border-[#FFD23F]" />
                    <div className="px-2 py-0.5 bg-[#D92F2F] text-white text-[10px] font-black rounded border border-[#07334F] flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" /> REC 4K
                    </div>
                    <div className="w-6 h-6 border-t-4 border-r-4 border-[#FFD23F]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-6 h-6 border-b-4 border-l-4 border-[#FFD23F]" />
                    <span className="px-2 py-0.5 bg-[#07334F] text-[#FDEFEB] text-[10px] font-black rounded border border-[#FFD23F]">
                      DOH-NUT MALAYSIA
                    </span>
                    <div className="w-6 h-6 border-b-4 border-r-4 border-[#FFD23F]" />
                  </div>
                </div>
              )}

              {activeFrame === 'drips' && (
                <div className="absolute top-0 left-0 right-0 pointer-events-none">
                  <svg viewBox="0 0 240 40" fill="none" className="w-full h-auto">
                    <path
                      d="M0 0 L240 0 L240 10 C 220 10, 210 25, 195 25 C 180 25, 175 12, 160 12 C 145 12, 140 32, 120 32 C 105 32, 100 14, 85 14 C 70 14, 65 38, 45 38 C 30 38, 25 10, 0 10 Z"
                      fill="#EF9FBD"
                      stroke="#07334F"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Stage Camera Controls */}
            <div className="w-full max-w-[480px] flex items-center justify-between gap-2">
              {cameraActive ? (
                <>
                  <button
                    onClick={stopCamera}
                    className="flex-1 py-3 px-4 rounded-2xl bg-[#07334F] hover:bg-[#0c4468] text-white font-black text-xs border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] flex items-center justify-center gap-2"
                  >
                    <CameraOff size={16} /> Turn Off Camera
                  </button>
                  <button
                    onClick={toggleFacingMode}
                    className="p-3 rounded-2xl bg-[#FDEFEB] hover:bg-[#FFD23F] text-[#07334F] border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]"
                    title="Flip Camera (Front / Back)"
                  >
                    <RotateCw size={18} />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => startCamera(facingMode)}
                    className="flex-1 py-3 px-4 rounded-2xl bg-[#297FC1] hover:bg-[#2069a1] text-white font-black text-xs border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] flex items-center justify-center gap-2 transition-all active:translate-x-[1px] active:translate-y-[1px]"
                  >
                    <Camera size={18} /> START LIVE CAMERA
                  </button>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="p-3 rounded-2xl bg-[#FDEFEB] hover:bg-[#FFD23F] text-[#07334F] border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] flex items-center gap-1.5 text-xs font-black"
                    title="Upload Custom Photo"
                  >
                    <Upload size={18} />
                    <span className="hidden sm:inline">Upload</span>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </>
              )}

              {/* Big Shutter Button */}
              <button
                onClick={captureSnapshot}
                className="py-3 px-6 rounded-2xl bg-[#D92F2F] hover:bg-[#FF4146] text-[#FDEFEB] font-fun text-sm font-black border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2 transition-all"
              >
                <Sparkles size={18} /> SNAP PHOTO
              </button>
            </div>

            {/* Selected Sticker Transformation Toolbar */}
            {selectedSticker && (
              <div className="w-full max-w-[480px] p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-3 animate-in fade-in">
                <div className="flex items-center justify-between text-xs font-black text-[#07334F]">
                  <span className="flex items-center gap-1">
                    <Sliders size={14} className="text-[#D92F2F]" />
                    Adjusting: {selectedSticker.name}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={bringToFront}
                      className="px-2 py-0.5 bg-white rounded-lg border border-[#07334F] text-[10px] hover:bg-[#FFD23F]"
                    >
                      To Front
                    </button>
                    <button
                      onClick={duplicateSelectedSticker}
                      className="px-2 py-0.5 bg-white rounded-lg border border-[#07334F] text-[10px] hover:bg-[#FFD23F]"
                    >
                      Duplicate
                    </button>
                    <button
                      onClick={removeSelectedSticker}
                      className="p-1 bg-[#D92F2F] text-white rounded-lg border border-[#07334F] hover:bg-[#B32424]"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-[10px] font-bold text-[#07334F] block mb-1">
                      Size: {Math.round(selectedSticker.scale * 100)}%
                    </label>
                    <input
                      type="range"
                      min="0.4"
                      max="2.2"
                      step="0.05"
                      value={selectedSticker.scale}
                      onChange={(e) => updateSelectedSticker({ scale: parseFloat(e.target.value) })}
                      className="w-full accent-[#D92F2F]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-[#07334F] block mb-1">
                      Rotation: {selectedSticker.rotation}°
                    </label>
                    <input
                      type="range"
                      min="-180"
                      max="180"
                      step="5"
                      value={selectedSticker.rotation}
                      onChange={(e) =>
                        updateSelectedSticker({ rotation: parseInt(e.target.value, 10) })
                      }
                      className="w-full accent-[#297FC1]"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      updateSelectedSticker({ flipX: !selectedSticker.flipX })
                    }
                    className="flex-1 py-1.5 px-2 bg-white rounded-xl border-2 border-[#07334F] font-bold text-xs flex items-center justify-center gap-1 hover:bg-[#FFD23F]"
                  >
                    <FlipHorizontal size={14} /> Flip Horizontally
                  </button>
                  <button
                    onClick={() => updateSelectedSticker({ rotation: 0, scale: 1.0 })}
                    className="py-1.5 px-3 bg-white rounded-xl border-2 border-[#07334F] font-bold text-xs hover:bg-[#FFD23F]"
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticker Drawer, Sample Scenes & Filters */}
          <div className="lg:col-span-5 space-y-5">
            {/* Category Tabs */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-[#07334F] flex items-center gap-1.5">
                <Smile size={14} className="text-[#D92F2F]" />
                1. Choose Stickers & Mascot Props to Add
              </label>

              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'All Assets' },
                  { id: 'mascot', label: 'Doh Boy' },
                  { id: 'badges', label: 'Badges & Slogans' },
                  { id: 'wearable', label: 'Wearables' },
                  { id: 'doodles', label: 'Sparks & Food' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-3 py-1.5 rounded-xl font-black text-xs border-2 border-[#07334F] transition-all ${
                      activeCategory === tab.id
                        ? 'bg-[#FFD23F] text-[#07334F] shadow-[2px_2px_0px_0px_#07334F]'
                        : 'bg-[#FDEFEB] text-[#07334F] hover:bg-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sticker Grid Picker */}
            <div className="p-3 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] max-h-[260px] overflow-y-auto grid grid-cols-3 gap-2.5">
              {filteredCatalog.map((item) => (
                <button
                  key={item.id}
                  onClick={() => addSticker(item)}
                  className="p-3 bg-white hover:bg-[#FFD23F]/30 rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] active:translate-x-[1px] active:translate-y-[1px] flex flex-col items-center justify-between min-h-[90px] group transition-all"
                  title={`Click to add ${item.name}`}
                >
                  <div className="my-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.preview}
                  </div>
                  <span className="text-[10px] font-black text-[#07334F] text-center mt-1 leading-tight line-clamp-1">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Frame & Filter Presets */}
            <div className="grid grid-cols-2 gap-4">
              {/* Frames */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase text-[#07334F] block">
                  Frame Style
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { id: 'street', label: 'Street 4K' },
                    { id: 'polaroid', label: 'Polaroid' },
                    { id: 'drips', label: 'Glaze Drips' },
                    { id: 'none', label: 'Clean' }
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setActiveFrame(f.id as any)}
                      className={`p-2 rounded-xl text-[10px] font-black border-2 border-[#07334F] transition-all text-center ${
                        activeFrame === f.id
                          ? 'bg-[#297FC1] text-white shadow-[2px_2px_0px_0px_#07334F]'
                          : 'bg-white text-[#07334F] hover:bg-[#FDEFEB]'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color LUTs */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase text-[#07334F] block">
                  Photo Tone
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { id: 'normal', label: 'Normal' },
                    { id: 'warm', label: 'Street Warm' },
                    { id: 'vivid', label: 'Vivid Pop' },
                    { id: 'neon', label: 'Neon Night' }
                  ].map((flt) => (
                    <button
                      key={flt.id}
                      onClick={() => setActiveFilter(flt.id as any)}
                      className={`p-2 rounded-xl text-[10px] font-black border-2 border-[#07334F] transition-all text-center ${
                        activeFilter === flt.id
                          ? 'bg-[#D92F2F] text-white shadow-[2px_2px_0px_0px_#07334F]'
                          : 'bg-white text-[#07334F] hover:bg-[#FDEFEB]'
                      }`}
                    >
                      {flt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sample Malaysian Food Street Backgrounds */}
            {!cameraActive && (
              <div className="space-y-2 pt-1 border-t-2 border-[#07334F]/20">
                <label className="text-xs font-black uppercase text-[#07334F] flex items-center justify-between">
                  <span>2. Street Photo Presets</span>
                  <span className="text-[10px] text-gray-500 font-normal">Click to switch scene</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {SAMPLE_BACKGROUNDS.map((sample, idx) => (
                    <button
                      key={sample.id}
                      onClick={() => handleSelectSample(idx)}
                      className={`relative rounded-xl border-2 border-[#07334F] overflow-hidden aspect-video transition-all ${
                        !customBgImage && selectedSampleIndex === idx
                          ? 'ring-3 ring-[#D92F2F] shadow-[2px_2px_0px_0px_#07334F]'
                          : 'opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={sample.url}
                        alt={sample.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-0 inset-x-0 bg-[#07334F]/90 text-[#FDEFEB] text-[8px] font-bold text-center py-0.5 truncate px-1">
                        {sample.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Recent Snaps Gallery */}
            {recentSnaps.length > 0 && (
              <div className="space-y-2 pt-1 border-t-2 border-[#07334F]/20">
                <label className="text-[11px] font-black uppercase text-[#07334F]">
                  Recent Session Snaps ({recentSnaps.length})
                </label>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {recentSnaps.map((snap, i) => (
                    <img
                      key={i}
                      src={snap}
                      alt={`Snap ${i}`}
                      onClick={() => setCapturedPhoto(snap)}
                      className="w-16 h-16 rounded-xl border-2 border-[#07334F] object-cover cursor-pointer hover:scale-105 transition-transform shadow-[2px_2px_0px_0px_#07334F] shrink-0"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Captured Snapshot Modal Preview */}
      {capturedPhoto && (
        <div className="fixed inset-0 z-50 bg-[#07334F]/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[8px_8px_0px_0px_#07334F] max-w-lg w-full space-y-5 animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b-3 border-[#07334F] pb-3">
              <div className="flex items-center gap-2">
                <Sparkles size={20} className="text-[#FFD23F]" />
                <h4 className="font-fun text-xl font-black text-[#07334F]">
                  BRANDED SNAP CAPTURED!
                </h4>
              </div>
              <button
                onClick={() => setCapturedPhoto(null)}
                className="p-1.5 rounded-xl bg-[#FDEFEB] hover:bg-[#D92F2F] hover:text-white border-2 border-[#07334F]"
              >
                <X size={18} />
              </button>
            </div>

            {/* Photo Output Preview */}
            <div className="rounded-2xl border-4 border-[#07334F] overflow-hidden shadow-[4px_4px_0px_0px_#07334F] bg-[#07334F]">
              <img
                src={capturedPhoto}
                alt="DOH-NUT Branded Snap"
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleDownload}
                className="py-3 px-4 bg-[#D92F2F] hover:bg-[#FF4146] text-[#FDEFEB] font-fun text-sm font-black rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] active:translate-x-[1px] active:translate-y-[1px] flex items-center justify-center gap-2 transition-all"
              >
                <Download size={18} /> DOWNLOAD PNG
              </button>

              <button
                onClick={handleCopyImage}
                className="py-3 px-4 bg-[#FFD23F] hover:bg-[#FFE066] text-[#07334F] font-fun text-sm font-black rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] active:translate-x-[1px] active:translate-y-[1px] flex items-center justify-center gap-2 transition-all"
              >
                <Copy size={18} /> COPY TO CLIPBOARD
              </button>
            </div>

            <p className="text-center text-[11px] font-bold text-[#07334F]/70">
              Ready to post on Instagram Stories (@dohnut.my) or TikTok with tag #DOHNUTATTITUDE.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
