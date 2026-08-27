import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Sparkles,
  Download,
  Copy,
  Check,
  Trash2,
  Maximize2,
  Minimize2,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Plus,
  Image as ImageIcon,
  Layers,
  Sliders,
  Move,
  ZoomIn,
  ZoomOut,
  RefreshCw,
  Grid,
  Square,
  Smartphone,
  Monitor,
  FileText,
  Type,
  Palette,
  Shapes,
  Smile,
  Tag,
  Share2,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Undo2,
  Redo2,
  FolderOpen,
  Save,
  HelpCircle,
  Wand2,
  CheckCircle2,
  Compass
} from 'lucide-react';
import { DohBoyMascot } from './DohBoyMascot';
import { DohNutLogo } from './DohNutLogo';
import { DonutIcon, StarSpark, StreetStickerBadge, DripsGraphic } from './GraphicElements';
import { DohBoyPose, LogoVariant } from '../../types';

export interface MoodboardItem {
  id: string;
  type: 'mascot' | 'badge' | 'logo' | 'texture' | 'doodle' | 'swatch' | 'text' | 'frame' | 'photo';
  assetId: string;
  name: string;
  x: number; // canvas coordinate in px
  y: number; // canvas coordinate in px
  width: number;
  height: number;
  rotation: number; // degrees -180 to 180
  scale: number; // 0.2 to 4.0
  zIndex: number;
  flipX: boolean;
  flipY: boolean;
  opacity: number; // 0 to 1
  locked?: boolean;
  customText?: string;
  customColor?: string;
  customBg?: string;
  shadow?: boolean;
  dataUrl?: string;
}

export interface BoardPreset {
  id: string;
  name: string;
  category: 'social' | 'print' | 'freeform';
  width: number;
  height: number;
  icon: React.ReactNode;
  aspectRatio: string;
}

const CANVAS_PRESETS: BoardPreset[] = [
  { id: 'freeform', name: 'Infinite Freeform Board', category: 'freeform', width: 2400, height: 1600, icon: <Compass size={14} />, aspectRatio: '3:2' },
  { id: 'ig-square', name: 'Instagram Post (1:1)', category: 'social', width: 1080, height: 1080, icon: <Square size={14} />, aspectRatio: '1:1' },
  { id: 'ig-story', name: 'Story / TikTok (9:16)', category: 'social', width: 1080, height: 1920, icon: <Smartphone size={14} />, aspectRatio: '9:16' },
  { id: 'banner-landscape', name: 'Web Banner / Deck (16:9)', category: 'social', width: 1920, height: 1080, icon: <Monitor size={14} />, aspectRatio: '16:9' },
  { id: 'print-poster', name: 'Street Poster (3:4)', category: 'print', width: 1200, height: 1600, icon: <FileText size={14} />, aspectRatio: '3:4' },
];

export interface AssetTemplate {
  id: string;
  category: 'mascot' | 'badge' | 'logo' | 'texture' | 'doodle' | 'swatch' | 'text' | 'frame' | 'photo';
  name: string;
  defaultWidth: number;
  defaultHeight: number;
  preview: React.ReactNode;
  renderSvg: (w: number, h: number, item?: MoodboardItem) => string;
  defaultProps?: Partial<MoodboardItem>;
}

export const ASSET_LIBRARY: AssetTemplate[] = [
  // 1. Doh Boy Mascots
  {
    id: 'mascot-hero',
    category: 'mascot',
    name: 'Doh Boy Hero Peace',
    defaultWidth: 200,
    defaultHeight: 230,
    preview: <DohBoyMascot pose="hero" size={60} />,
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 220 250" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <ellipse cx="110" cy="126" rx="20" ry="15" fill="#FDEFEB" stroke="#07334F" stroke-width="5" />
        <rect x="74" y="62" width="11" height="5" rx="2" transform="rotate(28 74 62)" fill="#297FC1" />
        <rect x="104" y="54" width="11" height="5" rx="2" transform="rotate(-15 104 54)" fill="#FFD23F" />
        <rect x="136" y="66" width="11" height="5" rx="2" transform="rotate(45 136 66)" fill="#FDEFEB" />
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
    id: 'mascot-waving',
    category: 'mascot',
    name: 'Doh Boy Waving Friendly',
    defaultWidth: 190,
    defaultHeight: 220,
    preview: <DohBoyMascot pose="waving" size={60} />,
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(18, 50)">
          <path d="M42 55 C 20 40, 10 20, 12 10 C 14 0, 26 2, 34 16 C 36 10, 44 8, 48 14 C 52 20, 48 30, 42 42" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" stroke-linejoin="round" />
        </g>
        <path d="M140 135 C 160 140, 172 155, 160 170 C 150 178, 142 165, 138 152" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" stroke-linejoin="round" />
        <path d="M78 180 L76 210" stroke="#07334F" stroke-width="8" stroke-linecap="round" />
        <path d="M54 212 C 54 205, 84 205, 90 212 L90 226 C 90 230, 50 232, 54 212 Z" fill="#D92F2F" stroke="#07334F" stroke-width="4.5" />
        <path d="M122 180 L124 210" stroke="#07334F" stroke-width="8" stroke-linecap="round" />
        <path d="M110 212 C 110 205, 140 205, 146 212 L146 226 C 146 230, 106 232, 110 212 Z" fill="#297FC1" stroke="#07334F" stroke-width="4.5" />
        <circle cx="100" cy="110" r="68" fill="#E8B072" stroke="#07334F" stroke-width="6" />
        <path d="M44 94 C 42 66, 68 44, 100 44 C 134 44, 156 66, 154 94 C 152 115, 140 120, 130 110 C 122 102, 116 112, 106 118 C 96 124, 88 112, 80 108 C 68 104, 56 122, 48 114 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="5" />
        <ellipse cx="100" cy="120" rx="18" ry="14" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" />
        <ellipse cx="80" cy="88" rx="9" ry="13" fill="#07334F" />
        <circle cx="77" cy="84" r="4" fill="#FDEFEB" />
        <ellipse cx="120" cy="88" rx="9" ry="13" fill="#07334F" />
        <circle cx="117" cy="84" r="4" fill="#FDEFEB" />
        <path d="M86 102 C 86 102, 100 120, 114 102 Z" fill="#07334F" stroke="#07334F" stroke-width="3.5" />
      </svg>
    `
  },
  {
    id: 'mascot-eating',
    category: 'mascot',
    name: 'Doh Boy Munching Mini',
    defaultWidth: 190,
    defaultHeight: 220,
    preview: <DohBoyMascot pose="eating" size={60} />,
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M140 120 C 160 110, 150 90, 130 92" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" />
        <circle cx="126" cy="92" r="14" fill="#E8B072" stroke="#07334F" stroke-width="3" />
        <path d="M116 88 C 118 82, 134 82, 136 88 C 136 94, 116 96, 116 88 Z" fill="#D92F2F" stroke="#07334F" stroke-width="2" />
        <circle cx="100" cy="110" r="68" fill="#E8B072" stroke="#07334F" stroke-width="6" />
        <path d="M44 94 C 42 66, 68 44, 100 44 C 134 44, 156 66, 154 94 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="5" />
        <ellipse cx="100" cy="120" rx="18" ry="14" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" />
        <ellipse cx="78" cy="85" rx="8" ry="12" fill="#07334F" />
        <circle cx="82" cy="82" r="3.5" fill="#FDEFEB" />
        <ellipse cx="112" cy="85" rx="8" ry="12" fill="#07334F" />
        <circle cx="116" cy="82" r="3.5" fill="#FDEFEB" />
      </svg>
    `
  },
  {
    id: 'mascot-avatar',
    category: 'mascot',
    name: 'Doh Boy Face Stamp',
    defaultWidth: 160,
    defaultHeight: 160,
    preview: <DohBoyMascot pose="avatar" size={60} />,
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="74" fill="#FDEFEB" stroke="#07334F" stroke-width="6" />
        <circle cx="80" cy="80" r="62" fill="#E8B072" stroke="#07334F" stroke-width="5" />
        <path d="M32 68 C 30 50, 48 26, 80 26 C 112 26, 130 50, 128 68 C 126 84, 116 88, 108 80 C 102 74, 96 82, 88 88 C 80 94, 72 82, 64 80 C 54 78, 44 90, 36 82 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="4.5" />
        <ellipse cx="80" cy="84" rx="16" ry="12" fill="#FDEFEB" stroke="#07334F" stroke-width="4" />
        <ellipse cx="64" cy="62" rx="7" ry="10" fill="#07334F" />
        <circle cx="62" cy="59" r="3" fill="#FDEFEB" />
        <ellipse cx="96" cy="62" rx="7" ry="10" fill="#07334F" />
        <circle cx="94" cy="59" r="3" fill="#FDEFEB" />
        <path d="M70 74 Q 80 84 90 74" fill="none" stroke="#07334F" stroke-width="3.5" stroke-linecap="round" />
      </svg>
    `
  },

  // 2. Stickers & Badges
  {
    id: 'badge-doh-punch',
    category: 'badge',
    name: '"DOH!" Comic Blast',
    defaultWidth: 180,
    defaultHeight: 110,
    preview: (
      <div className="px-3 py-2 bg-[#FFD23F] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] rotate-[-4deg]">
        <span className="font-fun text-xl font-black text-[#D92F2F]">DOH!</span>
      </div>
    ),
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="148" height="84" rx="28" fill="#FFD23F" stroke="#07334F" stroke-width="6" />
        <text x="80" y="65" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="44" fill="#D92F2F" stroke="#07334F" stroke-width="2" text-anchor="middle">DOH!</text>
      </svg>
    `
  },
  {
    id: 'badge-master-seal',
    category: 'badge',
    name: 'DOH-NUT Master Seal',
    defaultWidth: 170,
    defaultHeight: 170,
    preview: <DohNutLogo variant="primary" size={70} />,
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="92" fill="#D92F2F" stroke="#07334F" stroke-width="6" />
        <circle cx="100" cy="100" r="76" fill="#FDEFEB" stroke="#07334F" stroke-width="4" />
        <text x="100" y="95" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="28" fill="#07334F" text-anchor="middle">DOH-NUT</text>
        <text x="100" y="125" font-family="Arial, sans-serif" font-weight="800" font-size="12" fill="#D92F2F" text-anchor="middle">EST. MALAYSIA</text>
      </svg>
    `
  },
  {
    id: 'badge-pill-more',
    category: 'badge',
    name: '★ JUST ONE MORE ★ Pill',
    defaultWidth: 220,
    defaultHeight: 65,
    preview: (
      <div className="px-3 py-1.5 bg-[#297FC1] rounded-full border-2 border-[#07334F] text-[#FDEFEB] text-xs font-black">
        ★ JUST ONE MORE ★
      </div>
    ),
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 220 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="210" height="60" rx="30" fill="#297FC1" stroke="#07334F" stroke-width="5" />
        <text x="110" y="42" font-family="Arial Black, sans-serif" font-weight="900" font-size="16" fill="#FDEFEB" text-anchor="middle">★ JUST ONE MORE ★</text>
      </svg>
    `
  },
  {
    id: 'badge-tape-hotdough',
    category: 'badge',
    name: 'HOT DOUGH Tape',
    defaultWidth: 260,
    defaultHeight: 55,
    preview: (
      <div className="px-3 py-1.5 bg-[#07334F] rounded-xl border-2 border-[#EF9FBD] text-[#FDEFEB] text-[10px] font-black uppercase">
        HOT DOUGH • ZERO APOLOGIES
      </div>
    ),
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="252" height="52" rx="14" fill="#07334F" stroke="#EF9FBD" stroke-width="4" />
        <text x="130" y="36" font-family="Arial Black, sans-serif" font-weight="900" font-size="13" fill="#FDEFEB" text-anchor="middle">HOT DOUGH • ZERO APOLOGIES</text>
      </svg>
    `
  },

  // 3. Logos & Typography Lockups
  {
    id: 'logo-primary',
    category: 'logo',
    name: 'Primary Stacked Logo',
    defaultWidth: 220,
    defaultHeight: 140,
    preview: <DohNutLogo variant="primary" size={60} />,
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="210" height="130" rx="20" fill="#D92F2F" stroke="#07334F" stroke-width="6" />
        <text x="110" y="65" font-family="Arial Black, sans-serif" font-weight="900" font-size="34" fill="#FDEFEB" text-anchor="middle">DOH-NUT</text>
        <rect x="35" y="85" width="150" height="30" rx="8" fill="#FFD23F" stroke="#07334F" stroke-width="3" />
        <text x="110" y="106" font-family="Arial Black, sans-serif" font-weight="900" font-size="12" fill="#07334F" text-anchor="middle">HOT DOUGH • KL</text>
      </svg>
    `
  },
  {
    id: 'logo-horizontal',
    category: 'logo',
    name: 'Horizontal Street Bar Logo',
    defaultWidth: 280,
    defaultHeight: 70,
    preview: <DohNutLogo variant="horizontal" size={70} />,
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 280 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="272" height="62" rx="16" fill="#FDEFEB" stroke="#07334F" stroke-width="5" />
        <circle cx="40" cy="35" r="22" fill="#D92F2F" stroke="#07334F" stroke-width="3" />
        <text x="145" y="45" font-family="Arial Black, sans-serif" font-weight="900" font-size="24" fill="#07334F" text-anchor="middle">DOH-NUT</text>
        <text x="235" y="42" font-family="Arial Black, sans-serif" font-weight="900" font-size="10" fill="#297FC1" text-anchor="middle">★ STREET</text>
      </svg>
    `
  },

  // 4. Textures & Patterns
  {
    id: 'texture-halftone',
    category: 'texture',
    name: 'Halftone Pop Grid Card',
    defaultWidth: 260,
    defaultHeight: 260,
    preview: (
      <div className="w-16 h-14 bg-[#FDEFEB] rounded-lg border-2 border-[#07334F] p-1 grid grid-cols-4 gap-1 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-[#297FC1]" />
        ))}
      </div>
    ),
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" rx="16" fill="#FDEFEB" stroke="#07334F" stroke-width="5" />
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="4" fill="#297FC1" />
          </pattern>
        </defs>
        <rect width="200" height="200" rx="16" fill="url(#dotPattern)" opacity="0.65" />
      </svg>
    `
  },
  {
    id: 'texture-glaze-pink',
    category: 'texture',
    name: 'Pink Glaze Drip Strip',
    defaultWidth: 320,
    defaultHeight: 80,
    preview: (
      <div className="w-20 h-8">
        <DripsGraphic color="#EF9FBD" />
      </div>
    ),
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 L320 0 L320 20 C 300 20, 280 50, 260 50 C 240 50, 230 25, 210 25 C 190 25, 180 65, 150 65 C 130 65, 120 20, 100 20 C 80 20, 70 70, 45 70 C 25 70, 15 20, 0 20 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="5" />
      </svg>
    `
  },
  {
    id: 'texture-street-kraft',
    category: 'texture',
    name: 'Sourdough Kraft Card',
    defaultWidth: 280,
    defaultHeight: 180,
    preview: (
      <div className="w-16 h-12 bg-[#E8B072] rounded-lg border-2 border-[#07334F] flex items-center justify-center text-[8px] font-black text-[#07334F]">
        KRAFT
      </div>
    ),
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="272" height="172" rx="16" fill="#E8B072" stroke="#07334F" stroke-width="6" />
        <rect x="16" y="16" width="248" height="148" rx="8" fill="none" stroke="#07334F" stroke-width="2" stroke-dasharray="8 6" opacity="0.4" />
        <text x="140" y="98" font-family="Arial Black, sans-serif" font-weight="900" font-size="18" fill="#07334F" text-anchor="middle">SOURDOUGH DOUGH BASE</text>
      </svg>
    `
  },
  {
    id: 'texture-checkered',
    category: 'texture',
    name: 'Street Diner Checkers',
    defaultWidth: 260,
    defaultHeight: 200,
    preview: (
      <div className="w-16 h-12 bg-white rounded-lg border-2 border-[#07334F] grid grid-cols-4 grid-rows-3 overflow-hidden">
        <div className="bg-[#D92F2F]" /><div /><div className="bg-[#D92F2F]" /><div />
        <div /><div className="bg-[#D92F2F]" /><div /><div className="bg-[#D92F2F]" />
        <div className="bg-[#D92F2F]" /><div /><div className="bg-[#D92F2F]" /><div />
      </div>
    ),
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="checkPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="#D92F2F" />
            <rect x="20" width="20" height="20" fill="#FDEFEB" />
            <rect y="20" width="20" height="20" fill="#FDEFEB" />
            <rect x="20" y="20" width="20" height="20" fill="#D92F2F" />
          </pattern>
        </defs>
        <rect x="4" y="4" width="252" height="192" rx="16" fill="url(#checkPattern)" stroke="#07334F" stroke-width="6" />
      </svg>
    `
  },

  // 5. Graphic Doodles & Sparks
  {
    id: 'doodle-starburst',
    category: 'doodle',
    name: 'Gold Starburst Spark',
    defaultWidth: 90,
    defaultHeight: 90,
    preview: <StarSpark size={36} color="#FFD23F" />,
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10 L58 38 L86 50 L58 62 L50 90 L42 62 L14 50 L42 38 Z" fill="#FFD23F" stroke="#07334F" stroke-width="5" stroke-linejoin="round" />
        <circle cx="50" cy="50" r="7" fill="#FDEFEB" />
      </svg>
    `
  },
  {
    id: 'doodle-donut-pink',
    category: 'doodle',
    name: 'Glazed Ring Donut',
    defaultWidth: 120,
    defaultHeight: 120,
    preview: <DonutIcon size={44} glazeColor="#EF9FBD" />,
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="50" fill="#E8B072" stroke="#07334F" stroke-width="5" />
        <path d="M20 50 C 18 35, 35 20, 60 20 C 85 20, 102 35, 100 50 C 98 65, 88 70, 80 62 C 72 54, 68 62, 60 68 C 50 74, 42 62, 34 60 C 24 58, 20 65, 20 50 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="4" />
        <circle cx="60" cy="60" r="16" fill="#FDEFEB" stroke="#07334F" stroke-width="4" />
        <rect x="40" y="32" width="8" height="3.5" rx="1.5" transform="rotate(30 40 32)" fill="#297FC1" />
        <rect x="72" y="28" width="8" height="3.5" rx="1.5" transform="rotate(-20 72 28)" fill="#FFD23F" />
      </svg>
    `
  },
  {
    id: 'doodle-kopi',
    category: 'doodle',
    name: 'Iced Kopi-C Street Cup',
    defaultWidth: 100,
    defaultHeight: 140,
    preview: (
      <div className="w-9 h-12 bg-[#E8B072] rounded-b-xl border-2 border-[#07334F] relative flex flex-col items-center">
        <div className="w-11 h-2 bg-[#297FC1] rounded-t-md" />
        <span className="text-[7px] font-black text-[#07334F] mt-2">KOPI</span>
      </div>
    ),
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55 10 L50 40" stroke="#D92F2F" stroke-width="6" stroke-linecap="round" />
        <ellipse cx="50" cy="40" rx="35" ry="10" fill="#297FC1" stroke="#07334F" stroke-width="4" />
        <path d="M20 45 L30 125 C 32 132, 68 132, 70 125 L80 45 Z" fill="#E8B072" stroke="#07334F" stroke-width="5" />
        <rect x="35" y="60" width="14" height="14" rx="3" fill="#FDEFEB" opacity="0.7" transform="rotate(15 35 60)" />
        <path d="M24 70 L27 100 L73 100 L76 70 Z" fill="#07334F" />
        <text x="50" y="88" font-family="Arial Black, sans-serif" font-weight="900" font-size="10" fill="#FFD23F" text-anchor="middle">KOPI-C</text>
      </svg>
    `
  },
  {
    id: 'doodle-sprinkles-scatter',
    category: 'doodle',
    name: 'Sprinkle Confetti Blast',
    defaultWidth: 150,
    defaultHeight: 150,
    preview: (
      <div className="w-12 h-12 flex items-center justify-center relative">
        <div className="w-4 h-1.5 bg-[#D92F2F] rounded-full rotate-45 absolute top-1 left-2" />
        <div className="w-4 h-1.5 bg-[#297FC1] rounded-full -rotate-12 absolute bottom-2 right-2" />
        <div className="w-4 h-1.5 bg-[#FFD23F] rounded-full rotate-90 absolute top-4 right-1" />
      </div>
    ),
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="22" height="8" rx="4" transform="rotate(35 20 30)" fill="#D92F2F" stroke="#07334F" stroke-width="2" />
        <rect x="80" y="20" width="24" height="8" rx="4" transform="rotate(-20 80 20)" fill="#297FC1" stroke="#07334F" stroke-width="2" />
        <rect x="110" y="70" width="22" height="8" rx="4" transform="rotate(55 110 70)" fill="#FFD23F" stroke="#07334F" stroke-width="2" />
        <rect x="30" y="100" width="24" height="8" rx="4" transform="rotate(-40 30 100)" fill="#EF9FBD" stroke="#07334F" stroke-width="2" />
        <rect x="75" y="110" width="20" height="8" rx="4" transform="rotate(15 75 110)" fill="#07334F" />
      </svg>
    `
  },

  // 6. Color Swatches & Specs
  {
    id: 'swatch-flame-red',
    category: 'swatch',
    name: 'Flame Red #D92F2F Swatch',
    defaultWidth: 160,
    defaultHeight: 140,
    preview: (
      <div className="w-14 h-12 rounded-xl bg-[#D92F2F] border-2 border-[#07334F] p-1 flex flex-col justify-end text-[7px] font-black text-white">
        #D92F2F
      </div>
    ),
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="152" height="132" rx="14" fill="#D92F2F" stroke="#07334F" stroke-width="5" />
        <rect x="12" y="85" width="136" height="42" rx="8" fill="#FDEFEB" stroke="#07334F" stroke-width="2.5" />
        <text x="20" y="104" font-family="Arial Black, sans-serif" font-weight="900" font-size="11" fill="#07334F">FLAME RED</text>
        <text x="20" y="119" font-family="monospace" font-weight="700" font-size="10" fill="#D92F2F">#D92F2F</text>
      </svg>
    `
  },
  {
    id: 'swatch-glaze-pink',
    category: 'swatch',
    name: 'Glaze Pink #EF9FBD Swatch',
    defaultWidth: 160,
    defaultHeight: 140,
    preview: (
      <div className="w-14 h-12 rounded-xl bg-[#EF9FBD] border-2 border-[#07334F] p-1 flex flex-col justify-end text-[7px] font-black text-[#07334F]">
        #EF9FBD
      </div>
    ),
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="152" height="132" rx="14" fill="#EF9FBD" stroke="#07334F" stroke-width="5" />
        <rect x="12" y="85" width="136" height="42" rx="8" fill="#FDEFEB" stroke="#07334F" stroke-width="2.5" />
        <text x="20" y="104" font-family="Arial Black, sans-serif" font-weight="900" font-size="11" fill="#07334F">GLAZE PINK</text>
        <text x="20" y="119" font-family="monospace" font-weight="700" font-size="10" fill="#D92F2F">#EF9FBD</text>
      </svg>
    `
  },
  {
    id: 'swatch-cyan-blue',
    category: 'swatch',
    name: 'Street Cyan #297FC1 Swatch',
    defaultWidth: 160,
    defaultHeight: 140,
    preview: (
      <div className="w-14 h-12 rounded-xl bg-[#297FC1] border-2 border-[#07334F] p-1 flex flex-col justify-end text-[7px] font-black text-white">
        #297FC1
      </div>
    ),
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="152" height="132" rx="14" fill="#297FC1" stroke="#07334F" stroke-width="5" />
        <rect x="12" y="85" width="136" height="42" rx="8" fill="#FDEFEB" stroke="#07334F" stroke-width="2.5" />
        <text x="20" y="104" font-family="Arial Black, sans-serif" font-weight="900" font-size="11" fill="#07334F">STREET CYAN</text>
        <text x="20" y="119" font-family="monospace" font-weight="700" font-size="10" fill="#297FC1">#297FC1</text>
      </svg>
    `
  },

  // 7. Typography & Slogan Ribbons
  {
    id: 'text-slogan-attitude',
    category: 'text',
    name: 'DONUTS WITH ATTITUDE.',
    defaultWidth: 320,
    defaultHeight: 70,
    preview: (
      <div className="px-3 py-1.5 bg-[#D92F2F] rounded-xl border-2 border-[#07334F] text-[#FDEFEB] font-fun text-[10px] font-black">
        DONUTS WITH ATTITUDE.
      </div>
    ),
    renderSvg: (w, h, item) => `
      <svg width="${w}" height="${h}" viewBox="0 0 320 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="312" height="62" rx="16" fill="${item?.customBg || '#D92F2F'}" stroke="#07334F" stroke-width="5" />
        <text x="160" y="43" font-family="Arial Black, sans-serif" font-weight="900" font-size="18" fill="${item?.customColor || '#FDEFEB'}" text-anchor="middle">${item?.customText || 'DONUTS WITH ATTITUDE.'}</text>
      </svg>
    `,
    defaultProps: {
      customText: 'DONUTS WITH ATTITUDE.',
      customBg: '#D92F2F',
      customColor: '#FDEFEB'
    }
  },
  {
    id: 'text-custom-box',
    category: 'text',
    name: 'Editable Street Text Sticker',
    defaultWidth: 260,
    defaultHeight: 80,
    preview: (
      <div className="px-3 py-2 bg-[#FFD23F] rounded-xl border-2 border-[#07334F] text-[#07334F] font-fun text-xs font-black">
        CUSTOM TEXT
      </div>
    ),
    renderSvg: (w, h, item) => `
      <svg width="${w}" height="${h}" viewBox="0 0 260 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="252" height="72" rx="16" fill="${item?.customBg || '#FFD23F'}" stroke="#07334F" stroke-width="5" />
        <text x="130" y="48" font-family="Arial Black, sans-serif" font-weight="900" font-size="20" fill="${item?.customColor || '#07334F'}" text-anchor="middle">${item?.customText || 'HOT DOUGH KL'}</text>
      </svg>
    `,
    defaultProps: {
      customText: 'HOT DOUGH KL',
      customBg: '#FFD23F',
      customColor: '#07334F'
    }
  },

  // 8. Frames & Mockup Cards
  {
    id: 'frame-polaroid',
    category: 'frame',
    name: 'Polaroid Street Card Frame',
    defaultWidth: 260,
    defaultHeight: 310,
    preview: (
      <div className="w-14 h-16 bg-white border-2 border-[#07334F] p-1 flex flex-col justify-between">
        <div className="w-full h-10 bg-[#EF9FBD]/30" />
        <div className="h-2 bg-[#07334F]/20 rounded" />
      </div>
    ),
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 260 310" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="252" height="302" rx="14" fill="#FDEFEB" stroke="#07334F" stroke-width="5" />
        <rect x="18" y="18" width="224" height="210" rx="8" fill="#07334F" opacity="0.1" stroke="#07334F" stroke-width="2" />
        <text x="130" y="265" font-family="Arial Black, sans-serif" font-weight="900" font-size="14" fill="#07334F" text-anchor="middle">DOH-NUT STREET DROP #01</text>
        <text x="130" y="285" font-family="monospace" font-weight="700" font-size="10" fill="#D92F2F" text-anchor="middle">100% SOURDOUGH CRISP</text>
      </svg>
    `
  },
  {
    id: 'frame-street-viewfinder',
    category: 'frame',
    name: 'Street 4K Viewfinder Overlay',
    defaultWidth: 320,
    defaultHeight: 220,
    preview: (
      <div className="w-16 h-11 bg-transparent border-2 border-dashed border-[#FFD23F] relative p-1">
        <span className="text-[6px] font-black text-[#D92F2F] bg-white px-1">REC</span>
      </div>
    ),
    renderSvg: (w, h) => `
      <svg width="${w}" height="${h}" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 50 L20 20 L50 20" stroke="#FFD23F" stroke-width="6" stroke-linecap="round" />
        <path d="M300 50 L300 20 L270 20" stroke="#FFD23F" stroke-width="6" stroke-linecap="round" />
        <path d="M20 170 L20 200 L50 200" stroke="#FFD23F" stroke-width="6" stroke-linecap="round" />
        <path d="M300 170 L300 200 L270 200" stroke="#FFD23F" stroke-width="6" stroke-linecap="round" />
        <rect x="25" y="25" width="60" height="20" rx="4" fill="#D92F2F" />
        <text x="55" y="39" font-family="Arial Black, sans-serif" font-weight="900" font-size="10" fill="#FDEFEB" text-anchor="middle">● REC 4K</text>
      </svg>
    `
  }
];

// Curated Starter Composition Templates
const STARTER_TEMPLATES: { id: string; name: string; preset: string; desc: string; items: MoodboardItem[] }[] = [
  {
    id: 'template-art-director',
    name: 'Art Director Master Moodboard',
    preset: 'freeform',
    desc: 'Full collage uniting Doh Boy, color swatches, textures, and street slogan stickers.',
    items: [
      {
        id: 'mb-init-1',
        type: 'texture',
        assetId: 'texture-halftone',
        name: 'Halftone Pop Grid Card',
        x: 200,
        y: 160,
        width: 320,
        height: 320,
        rotation: -4,
        scale: 1,
        zIndex: 1,
        flipX: false,
        flipY: false,
        opacity: 0.9,
        shadow: true
      },
      {
        id: 'mb-init-2',
        type: 'texture',
        assetId: 'texture-street-kraft',
        name: 'Sourdough Kraft Card',
        x: 600,
        y: 180,
        width: 340,
        height: 220,
        rotation: 3,
        scale: 1,
        zIndex: 2,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: true
      },
      {
        id: 'mb-init-3',
        type: 'mascot',
        assetId: 'mascot-hero',
        name: 'Doh Boy Hero Peace',
        x: 480,
        y: 380,
        width: 250,
        height: 280,
        rotation: 6,
        scale: 1.1,
        zIndex: 6,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: true
      },
      {
        id: 'mb-init-4',
        type: 'badge',
        assetId: 'badge-doh-punch',
        name: '"DOH!" Comic Blast',
        x: 240,
        y: 420,
        width: 200,
        height: 120,
        rotation: -10,
        scale: 1,
        zIndex: 7,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: true
      },
      {
        id: 'mb-init-5',
        type: 'badge',
        assetId: 'badge-pill-more',
        name: '★ JUST ONE MORE ★ Pill',
        x: 680,
        y: 460,
        width: 230,
        height: 70,
        rotation: -4,
        scale: 1,
        zIndex: 8,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: true
      },
      {
        id: 'mb-init-6',
        type: 'swatch',
        assetId: 'swatch-flame-red',
        name: 'Flame Red Swatch',
        x: 820,
        y: 180,
        width: 170,
        height: 150,
        rotation: 8,
        scale: 0.95,
        zIndex: 3,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: true
      },
      {
        id: 'mb-init-7',
        type: 'doodle',
        assetId: 'doodle-starburst',
        name: 'Gold Starburst Spark',
        x: 400,
        y: 220,
        width: 100,
        height: 100,
        rotation: 15,
        scale: 1,
        zIndex: 9,
        flipX: false,
        flipY: false,
        opacity: 1
      },
      {
        id: 'mb-init-8',
        type: 'text',
        assetId: 'text-slogan-attitude',
        name: 'DONUTS WITH ATTITUDE.',
        x: 420,
        y: 80,
        width: 360,
        height: 80,
        rotation: -2,
        scale: 1,
        zIndex: 10,
        flipX: false,
        flipY: false,
        opacity: 1,
        customText: 'DONUTS WITH ATTITUDE.',
        customBg: '#D92F2F',
        customColor: '#FDEFEB',
        shadow: true
      }
    ]
  },
  {
    id: 'template-story-drop',
    name: 'Story Drop Promo (9:16)',
    preset: 'ig-story',
    desc: 'High-energy TikTok / IG Story teaser layout with big badge and mascot.',
    items: [
      {
        id: 'mb-st-1',
        type: 'texture',
        assetId: 'texture-checkered',
        name: 'Street Diner Checkers',
        x: 540,
        y: 350,
        width: 460,
        height: 360,
        rotation: 0,
        scale: 1.2,
        zIndex: 1,
        flipX: false,
        flipY: false,
        opacity: 0.85,
        shadow: true
      },
      {
        id: 'mb-st-2',
        type: 'mascot',
        assetId: 'mascot-eating',
        name: 'Doh Boy Munching',
        x: 540,
        y: 850,
        width: 380,
        height: 440,
        rotation: 0,
        scale: 1.3,
        zIndex: 4,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: true
      },
      {
        id: 'mb-st-3',
        type: 'text',
        assetId: 'text-slogan-attitude',
        name: 'NEW DROP THIS FRIDAY',
        x: 540,
        y: 1350,
        width: 480,
        height: 110,
        rotation: -3,
        scale: 1.1,
        zIndex: 5,
        flipX: false,
        flipY: false,
        opacity: 1,
        customText: 'HOT DROP THIS FRIDAY!',
        customBg: '#FFD23F',
        customColor: '#07334F',
        shadow: true
      },
      {
        id: 'mb-st-4',
        type: 'badge',
        assetId: 'badge-tape-hotdough',
        name: 'HOT DOUGH Tape',
        x: 540,
        y: 1550,
        width: 460,
        height: 90,
        rotation: 2,
        scale: 1,
        zIndex: 6,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: true
      }
    ]
  },
  {
    id: 'template-square-post',
    name: 'Cheeky Instagram Post (1:1)',
    preset: 'ig-square',
    desc: 'Bold 1:1 square composition ready for brand social media publishing.',
    items: [
      {
        id: 'mb-sq-1',
        type: 'frame',
        assetId: 'frame-polaroid',
        name: 'Polaroid Card',
        x: 540,
        y: 500,
        width: 520,
        height: 620,
        rotation: -3,
        scale: 1.1,
        zIndex: 2,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: true
      },
      {
        id: 'mb-sq-2',
        type: 'mascot',
        assetId: 'mascot-waving',
        name: 'Doh Boy Waving',
        x: 540,
        y: 450,
        width: 320,
        height: 380,
        rotation: 4,
        scale: 1.1,
        zIndex: 5,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: true
      },
      {
        id: 'mb-sq-3',
        type: 'badge',
        assetId: 'badge-doh-punch',
        name: 'DOH!',
        x: 320,
        y: 220,
        width: 220,
        height: 140,
        rotation: -12,
        scale: 1.1,
        zIndex: 6,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: true
      },
      {
        id: 'mb-sq-4',
        type: 'badge',
        assetId: 'badge-pill-more',
        name: 'JUST ONE MORE',
        x: 540,
        y: 920,
        width: 380,
        height: 100,
        rotation: 0,
        scale: 1,
        zIndex: 7,
        flipX: false,
        flipY: false,
        opacity: 1,
        shadow: true
      }
    ]
  }
];

export const MoodboardBuilder: React.FC = () => {
  // Canvas Configuration
  const [activePreset, setActivePreset] = useState<BoardPreset>(CANVAS_PRESETS[0]);
  const [boardBgColor, setBoardBgColor] = useState<string>('#FDEFEB');
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [snapToGrid, setSnapToGrid] = useState<boolean>(false);

  // Pan & Zoom
  const [zoomLevel, setZoomLevel] = useState<number>(0.7);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 40, y: 30 });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const [panStart, setPanStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Moodboard Items State
  const [items, setItems] = useState<MoodboardItem[]>(() => {
    const saved = localStorage.getItem('dohnut_moodboard_items');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return STARTER_TEMPLATES[0].items;
  });

  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('Moodboard exported successfully!');

  // Dragging / Resizing on Canvas
  const [isDraggingItem, setIsDraggingItem] = useState<boolean>(false);
  const [dragItemOffset, setDragItemOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // History for Undo / Redo
  const [history, setHistory] = useState<MoodboardItem[][]>([STARTER_TEMPLATES[0].items]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  // Refs
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const canvasAreaRef = useRef<HTMLDivElement | null>(null);

  // Save to Local Storage on Change
  useEffect(() => {
    try {
      localStorage.setItem('dohnut_moodboard_items', JSON.stringify(items));
    } catch (e) {
      // quota
    }
  }, [items]);

  // Push to history
  const recordHistory = useCallback((newItems: MoodboardItem[]) => {
    setHistory((prev) => [...prev.slice(0, historyIndex + 1), newItems]);
    setHistoryIndex((prev) => prev + 1);
  }, [historyIndex]);

  const handleUndo = () => {
    if (historyIndex > 0) {
      const nextIndex = historyIndex - 1;
      setHistoryIndex(nextIndex);
      setItems(history[nextIndex]);
      setSelectedItemId(null);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const nextIndex = historyIndex + 1;
      setHistoryIndex(nextIndex);
      setItems(history[nextIndex]);
      setSelectedItemId(null);
    }
  };

  // Add Asset to Canvas
  const handleAddAsset = (asset: AssetTemplate, dropX?: number, dropY?: number) => {
    const nextZ = Math.max(1, ...items.map((i) => i.zIndex), 0) + 1;

    // Calculate center of current viewport if drop position not specified
    let targetX = dropX ?? 400 + Math.floor(Math.random() * 80) - 40;
    let targetY = dropY ?? 300 + Math.floor(Math.random() * 80) - 40;

    if (snapToGrid) {
      targetX = Math.round(targetX / 20) * 20;
      targetY = Math.round(targetY / 20) * 20;
    }

    const newItem: MoodboardItem = {
      id: 'mb-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
      type: asset.category,
      assetId: asset.id,
      name: asset.name,
      x: targetX,
      y: targetY,
      width: asset.defaultWidth,
      height: asset.defaultHeight,
      rotation: Math.floor(Math.random() * 10) - 5,
      scale: 1.0,
      zIndex: nextZ,
      flipX: false,
      flipY: false,
      opacity: 1,
      shadow: true,
      ...asset.defaultProps
    };

    const nextItems = [...items, newItem];
    setItems(nextItems);
    setSelectedItemId(newItem.id);
    recordHistory(nextItems);
  };

  // Load Template
  const handleLoadTemplate = (tpl: typeof STARTER_TEMPLATES[0]) => {
    const matchedPreset = CANVAS_PRESETS.find((p) => p.id === tpl.preset) || CANVAS_PRESETS[0];
    setActivePreset(matchedPreset);
    setItems(tpl.items);
    setSelectedItemId(null);
    recordHistory(tpl.items);
    showToast(`Loaded "${tpl.name}" template!`);
  };

  // Toast Trigger
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  // Drag & Drop from Library Panel (HTML5 Drag & Drop)
  const handleLibraryDragStart = (e: React.DragEvent, asset: AssetTemplate) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ assetId: asset.id }));
  };

  const handleCanvasDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleCanvasDrop = (e: React.DragEvent) => {
    e.preventDefault();
    try {
      const data = JSON.parse(e.dataTransfer.getData('text/plain'));
      const asset = ASSET_LIBRARY.find((a) => a.id === data.assetId);
      if (!asset || !canvasAreaRef.current) return;

      const rect = canvasAreaRef.current.getBoundingClientRect();
      const dropCanvasX = (e.clientX - rect.left) / zoomLevel;
      const dropCanvasY = (e.clientY - rect.top) / zoomLevel;

      handleAddAsset(asset, Math.round(dropCanvasX), Math.round(dropCanvasY));
    } catch (err) {
      // ignore
    }
  };

  // Item Pointer Handlers
  const handleItemPointerDown = (e: React.PointerEvent, item: MoodboardItem) => {
    e.stopPropagation();
    if (item.locked) {
      setSelectedItemId(item.id);
      return;
    }

    setSelectedItemId(item.id);
    setIsDraggingItem(true);

    if (!canvasAreaRef.current) return;
    const rect = canvasAreaRef.current.getBoundingClientRect();
    const cursorCanvasX = (e.clientX - rect.left) / zoomLevel;
    const cursorCanvasY = (e.clientY - rect.top) / zoomLevel;

    setDragItemOffset({
      x: cursorCanvasX - item.x,
      y: cursorCanvasY - item.y
    });
  };

  // Canvas Pan Handlers
  const handleCanvasContainerPointerDown = (e: React.PointerEvent) => {
    if (e.target === canvasContainerRef.current || (e.target as HTMLElement).id === 'canvas-board') {
      setSelectedItemId(null);
      setIsPanning(true);
      setPanStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isPanning) {
      setPanOffset({
        x: e.clientX - panStart.x,
        y: e.clientY - panStart.y
      });
      return;
    }

    if (isDraggingItem && selectedItemId && canvasAreaRef.current) {
      const rect = canvasAreaRef.current.getBoundingClientRect();
      const cursorCanvasX = (e.clientX - rect.left) / zoomLevel;
      const cursorCanvasY = (e.clientY - rect.top) / zoomLevel;

      let newX = cursorCanvasX - dragItemOffset.x;
      let newY = cursorCanvasY - dragItemOffset.y;

      if (snapToGrid) {
        newX = Math.round(newX / 20) * 20;
        newY = Math.round(newY / 20) * 20;
      }

      setItems((prev) =>
        prev.map((it) => (it.id === selectedItemId ? { ...it, x: newX, y: newY } : it))
      );
    }
  };

  const handlePointerUp = () => {
    if (isDraggingItem) {
      setIsDraggingItem(false);
      recordHistory(items);
    }
    setIsPanning(false);
  };

  // Item Transformations
  const updateSelectedItem = (updates: Partial<MoodboardItem>) => {
    if (!selectedItemId) return;
    const next = items.map((it) => (it.id === selectedItemId ? { ...it, ...updates } : it));
    setItems(next);
    recordHistory(next);
  };

  const deleteSelectedItem = () => {
    if (!selectedItemId) return;
    const next = items.filter((it) => it.id !== selectedItemId);
    setItems(next);
    setSelectedItemId(null);
    recordHistory(next);
  };

  const duplicateSelectedItem = () => {
    const target = items.find((i) => i.id === selectedItemId);
    if (!target) return;
    const clone: MoodboardItem = {
      ...target,
      id: 'mb-' + Date.now(),
      x: target.x + 30,
      y: target.y + 30,
      zIndex: Math.max(...items.map((i) => i.zIndex), 0) + 1
    };
    const next = [...items, clone];
    setItems(next);
    setSelectedItemId(clone.id);
    recordHistory(next);
  };

  const bringToFront = () => {
    if (!selectedItemId) return;
    const maxZ = Math.max(...items.map((i) => i.zIndex), 0) + 1;
    updateSelectedItem({ zIndex: maxZ });
  };

  const sendToBack = () => {
    if (!selectedItemId) return;
    const minZ = Math.min(...items.map((i) => i.zIndex), 1);
    updateSelectedItem({ zIndex: Math.max(0, minZ - 1) });
  };

  // Keyboard Shortcuts (Delete, Clone, Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when typing in an input/textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedItemId) {
        e.preventDefault();
        deleteSelectedItem();
      } else if (e.key === 'd' && (e.ctrlKey || e.metaKey) && selectedItemId) {
        e.preventDefault();
        duplicateSelectedItem();
      } else if (e.key === 'z' && (e.ctrlKey || e.metaKey) && !e.shiftKey) {
        e.preventDefault();
        handleUndo();
      } else if (e.key === 'z' && (e.ctrlKey || e.metaKey) && e.shiftKey) {
        e.preventDefault();
        handleRedo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemId, items, historyIndex]);

  // Export Composition onto HTML5 Canvas (High-Res 2X PNG / JPG)
  const renderMoodboardCanvas = async (format: 'png' | 'jpg' = 'png'): Promise<string | null> => {
    const width = activePreset.width;
    const height = activePreset.height;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // 1. Draw Background
    ctx.fillStyle = boardBgColor;
    ctx.fillRect(0, 0, width, height);

    // Subtle background grid lines on export if enabled
    if (showGrid) {
      ctx.strokeStyle = '#07334F';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.05;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1.0;
    }

    // Sort items by zIndex
    const sortedItems = [...items].sort((a, b) => a.zIndex - b.zIndex);

    // 2. Draw Each Item
    for (const it of sortedItems) {
      const asset = ASSET_LIBRARY.find((a) => a.id === it.assetId);
      if (!asset) continue;

      const svgData = asset.renderSvg(it.width, it.height, it);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      const img = new Image();
      await new Promise((resolve) => {
        img.onload = () => {
          ctx.save();
          ctx.globalAlpha = it.opacity;

          // Transform item to (x, y), rotation, scale, flip
          ctx.translate(it.x, it.y);
          ctx.rotate((it.rotation * Math.PI) / 180);
          ctx.scale(it.scale, it.scale);
          if (it.flipX) ctx.scale(-1, 1);
          if (it.flipY) ctx.scale(1, -1);

          // Draw shadow if enabled
          if (it.shadow) {
            ctx.shadowColor = 'rgba(7, 51, 79, 0.35)';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 4;
            ctx.shadowOffsetY = 6;
          }

          // Center draw
          ctx.drawImage(img, -it.width / 2, -it.height / 2, it.width, it.height);
          ctx.restore();
          URL.revokeObjectURL(url);
          resolve(true);
        };
        img.onerror = () => resolve(false);
        img.src = url;
      });
    }

    // 3. Draw Watermark / Brand stamp bottom right
    ctx.save();
    ctx.fillStyle = '#07334F';
    ctx.font = '900 16px sans-serif';
    ctx.fillText('DOH-NUT MALAYSIA • BRAND MOODBOARD STUDIO', 30, height - 30);
    ctx.restore();

    return canvas.toDataURL(format === 'png' ? 'image/png' : 'image/jpeg', 0.95);
  };

  const handleDownloadImage = async (format: 'png' | 'jpg' = 'png') => {
    const dataUrl = await renderMoodboardCanvas(format);
    if (!dataUrl) return;

    const link = document.createElement('a');
    link.download = `dohnut-brand-moodboard-${Date.now()}.${format}`;
    link.href = dataUrl;
    link.click();
    showToast(`Exported high-res ${format.toUpperCase()} image!`);
  };

  const handleCopyClipboard = async () => {
    try {
      const dataUrl = await renderMoodboardCanvas('png');
      if (!dataUrl) return;

      const res = await fetch(dataUrl);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);
      showToast('Moodboard copied to clipboard! Paste directly into Figma or Slack.');
    } catch (e) {
      handleDownloadImage('png');
    }
  };

  const selectedItem = items.find((i) => i.id === selectedItemId);

  const filteredAssets = ASSET_LIBRARY.filter(
    (a) => activeCategory === 'all' || a.category === activeCategory
  );

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {copiedNotification && (
        <div className="fixed top-6 right-6 z-50 bg-[#07334F] text-[#FDEFEB] px-5 py-3 rounded-2xl border-3 border-[#FFD23F] shadow-2xl flex items-center gap-3 animate-bounce">
          <CheckCircle2 size={20} className="text-[#48BB78]" />
          <span className="text-xs font-black font-fun tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* Main Studio Frame */}
      <div className="bg-white p-5 sm:p-7 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-5">
        {/* Studio Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-3 border-[#07334F] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FFD23F] border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] flex items-center justify-center text-[#07334F]">
              <Sparkles size={26} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-fun text-xl sm:text-2xl font-black text-[#07334F]">
                  DOH-NUT MOODBOARD BUILDER & COMPOSITION STUDIO
                </h3>
                <span className="px-2.5 py-0.5 bg-[#D92F2F] text-[#FDEFEB] text-[10px] font-black rounded-lg border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
                  DRAG & DROP CANVAS
                </span>
              </div>
              <p className="text-xs font-bold text-[#07334F]/80">
                Assemble approved Doh Boy mascots, die-cut stickers, textures, color swatches & typography onto an infinite canvas. Export high-res layouts for social media or brand decks.
              </p>
            </div>
          </div>

          {/* Quick Actions / Export Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleUndo}
              disabled={historyIndex <= 0}
              className="p-2 rounded-xl bg-[#FDEFEB] hover:bg-[#FFD23F] text-[#07334F] border-2 border-[#07334F] disabled:opacity-40 shadow-[2px_2px_0px_0px_#07334F] transition-all"
              title="Undo (Ctrl+Z)"
            >
              <Undo2 size={16} />
            </button>
            <button
              onClick={handleRedo}
              disabled={historyIndex >= history.length - 1}
              className="p-2 rounded-xl bg-[#FDEFEB] hover:bg-[#FFD23F] text-[#07334F] border-2 border-[#07334F] disabled:opacity-40 shadow-[2px_2px_0px_0px_#07334F] transition-all"
              title="Redo (Ctrl+Shift+Z)"
            >
              <Redo2 size={16} />
            </button>
            <button
              onClick={handleCopyClipboard}
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#FFD23F] text-[#07334F] font-fun text-xs font-black border-2 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] flex items-center gap-1.5 transition-all"
            >
              <Copy size={15} className="text-[#297FC1]" /> Copy Image
            </button>
            <button
              onClick={() => handleDownloadImage('png')}
              className="px-4 py-2 rounded-xl bg-[#D92F2F] hover:bg-[#FF4146] text-[#FDEFEB] font-fun text-xs font-black border-2 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center gap-2 transition-all"
            >
              <Download size={15} /> Export 2X PNG
            </button>
          </div>
        </div>

        {/* Top Board Toolbar: Preset Artboards, Backgrounds & Grid Toggles */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#FDEFEB] p-3 rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]">
          {/* Preset Artboard Selector */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-black uppercase text-[#07334F] mr-1">Artboard:</span>
            {CANVAS_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => setActivePreset(preset)}
                className={`px-2.5 py-1 rounded-lg text-xs font-black border-2 border-[#07334F] transition-all flex items-center gap-1.5 ${
                  activePreset.id === preset.id
                    ? 'bg-[#297FC1] text-[#FDEFEB] shadow-[2px_2px_0px_0px_#07334F]'
                    : 'bg-white text-[#07334F] hover:bg-[#FFD23F]'
                }`}
              >
                {preset.icon}
                <span>{preset.name}</span>
              </button>
            ))}
          </div>

          {/* Canvas Background & View Helpers */}
          <div className="flex flex-wrap items-center gap-2">
            {/* BG Colors */}
            <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-xl border-2 border-[#07334F]">
              <span className="text-[10px] font-black text-[#07334F] mr-1">BG:</span>
              {[
                { hex: '#FDEFEB', label: 'Off-White Dough' },
                { hex: '#07334F', label: 'Deep Ink' },
                { hex: '#EF9FBD', label: 'Glaze Pink' },
                { hex: '#E8B072', label: 'Sourdough Gold' },
                { hex: '#297FC1', label: 'Street Blue' },
                { hex: '#FFFFFF', label: 'Pure White' },
              ].map((c) => (
                <button
                  key={c.hex}
                  onClick={() => setBoardBgColor(c.hex)}
                  title={c.label}
                  style={{ backgroundColor: c.hex }}
                  className={`w-5 h-5 rounded-full border-2 border-[#07334F] transition-transform ${
                    boardBgColor === c.hex ? 'scale-125 ring-2 ring-[#FFD23F]' : 'hover:scale-110'
                  }`}
                />
              ))}
            </div>

            {/* Grid Toggle */}
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`p-1.5 rounded-xl border-2 border-[#07334F] text-xs font-black transition-all ${
                showGrid ? 'bg-[#FFD23F] text-[#07334F]' : 'bg-white text-[#07334F]/60'
              }`}
              title="Toggle Alignment Grid"
            >
              <Grid size={16} />
            </button>

            {/* Snap Toggle */}
            <button
              onClick={() => setSnapToGrid(!snapToGrid)}
              className={`px-2.5 py-1 rounded-xl border-2 border-[#07334F] text-[10px] font-black transition-all ${
                snapToGrid ? 'bg-[#D92F2F] text-[#FDEFEB]' : 'bg-white text-[#07334F]'
              }`}
              title="Snap to 20px Grid"
            >
              Snap {snapToGrid ? 'ON' : 'OFF'}
            </button>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-xl border-2 border-[#07334F]">
              <button
                onClick={() => setZoomLevel((z) => Math.max(0.3, Number((z - 0.1).toFixed(1))))}
                className="p-1 text-[#07334F] hover:text-[#D92F2F]"
                title="Zoom Out"
              >
                <ZoomOut size={14} />
              </button>
              <span className="text-[10px] font-black font-mono w-10 text-center text-[#07334F]">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(2.0, Number((z + 0.1).toFixed(1))))}
                className="p-1 text-[#07334F] hover:text-[#D92F2F]"
                title="Zoom In"
              >
                <ZoomIn size={14} />
              </button>
              <button
                onClick={() => {
                  setZoomLevel(0.7);
                  setPanOffset({ x: 40, y: 30 });
                }}
                className="text-[9px] font-black px-1.5 py-0.5 bg-[#FDEFEB] hover:bg-[#FFD23F] rounded border border-[#07334F]"
                title="Reset View"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Workspace Grid: Left Asset Library Drawer + Center Interactive Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 min-h-[640px]">
          {/* Left Asset Drawer (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col space-y-3 bg-[#FDEFEB]/60 p-4 rounded-2xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F]">
            <div className="flex items-center justify-between border-b-2 border-[#07334F]/20 pb-2">
              <span className="font-fun text-sm font-black text-[#07334F] flex items-center gap-1.5">
                <Palette size={16} className="text-[#D92F2F]" /> APPROVED ASSET DRAWER
              </span>
              <span className="text-[10px] font-bold text-[#07334F]/70">
                Drag onto board or click
              </span>
            </div>

            {/* Asset Category Pills */}
            <div className="flex flex-wrap gap-1">
              {[
                { id: 'all', label: 'All', icon: <Sparkles size={11} /> },
                { id: 'mascot', label: 'Doh Boy', icon: <Smile size={11} /> },
                { id: 'badge', label: 'Stickers', icon: <Tag size={11} /> },
                { id: 'texture', label: 'Textures', icon: <Layers size={11} /> },
                { id: 'doodle', label: 'Doodles', icon: <Shapes size={11} /> },
                { id: 'swatch', label: 'Swatches', icon: <Palette size={11} /> },
                { id: 'text', label: 'Slogans', icon: <Type size={11} /> },
                { id: 'frame', label: 'Frames', icon: <Square size={11} /> },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase transition-all border-2 border-[#07334F] flex items-center gap-1 ${
                    activeCategory === c.id
                      ? 'bg-[#D92F2F] text-[#FDEFEB] shadow-[1.5px_1.5px_0px_0px_#07334F]'
                      : 'bg-white text-[#07334F] hover:bg-[#FFD23F]'
                  }`}
                >
                  {c.icon} {c.label}
                </button>
              ))}
            </div>

            {/* Asset Catalog Grid (Draggable Cards) */}
            <div className="flex-1 overflow-y-auto max-h-[460px] pr-1 space-y-2">
              <div className="grid grid-cols-2 gap-2.5">
                {filteredAssets.map((asset) => (
                  <div
                    key={asset.id}
                    draggable
                    onDragStart={(e) => handleLibraryDragStart(e, asset)}
                    onClick={() => handleAddAsset(asset)}
                    className="group cursor-pointer bg-white p-3 rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] hover:shadow-[4px_4px_0px_0px_#07334F] hover:-translate-y-1 transition-all flex flex-col items-center justify-between min-h-[110px] select-none"
                  >
                    <div className="my-auto flex items-center justify-center pointer-events-none group-hover:scale-105 transition-transform max-h-[70px]">
                      {asset.preview}
                    </div>
                    <div className="w-full text-center mt-2 pt-1 border-t border-[#07334F]/10">
                      <span className="text-[10px] font-black text-[#07334F] block truncate">
                        {asset.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Starter Template Shortcuts */}
            <div className="pt-2 border-t-2 border-[#07334F]/20">
              <span className="text-[10px] font-black uppercase text-[#07334F] block mb-1.5">
                ⚡ Quick Starter Compositions:
              </span>
              <div className="flex flex-col gap-1">
                {STARTER_TEMPLATES.map((tpl) => (
                  <button
                    key={tpl.id}
                    onClick={() => handleLoadTemplate(tpl)}
                    className="w-full text-left px-2.5 py-1.5 bg-white hover:bg-[#FFD23F] rounded-lg border-2 border-[#07334F] text-xs font-black text-[#07334F] transition-all flex items-center justify-between"
                  >
                    <span>{tpl.name}</span>
                    <span className="text-[9px] font-bold text-[#D92F2F] uppercase">Load →</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Center / Right: Interactive Canvas Area (lg:col-span-8) */}
          <div className="lg:col-span-8 flex flex-col space-y-3">
            {/* Canvas Viewport Container */}
            <div
              ref={canvasContainerRef}
              onPointerDown={handleCanvasContainerPointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onDragOver={handleCanvasDragOver}
              onDrop={handleCanvasDrop}
              className="relative w-full h-[540px] sm:h-[580px] bg-[#07334F]/90 rounded-2xl border-4 border-[#07334F] shadow-[5px_5px_0px_0px_#07334F] overflow-hidden select-none cursor-crosshair flex items-center justify-center"
            >
              {/* Floating Canvas Board */}
              <div
                id="canvas-board"
                ref={canvasAreaRef}
                style={{
                  width: `${activePreset.width}px`,
                  height: `${activePreset.height}px`,
                  backgroundColor: boardBgColor,
                  transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
                  transformOrigin: 'top left'
                }}
                className={`relative shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-4 border-[#07334F] transition-colors duration-200 ${
                  showGrid
                    ? 'bg-[linear-gradient(to_right,#07334F15_1px,transparent_1px),linear-gradient(to_bottom,#07334F15_1px,transparent_1px)] bg-[size:40px_40px]'
                    : ''
                }`}
              >
                {/* Placed Elements on Moodboard */}
                {items.map((item) => {
                  const asset = ASSET_LIBRARY.find((a) => a.id === item.assetId);
                  const isSelected = selectedItemId === item.id;

                  return (
                    <div
                      key={item.id}
                      onPointerDown={(e) => handleItemPointerDown(e, item)}
                      style={{
                        left: `${item.x}px`,
                        top: `${item.y}px`,
                        width: `${item.width}px`,
                        height: `${item.height}px`,
                        zIndex: item.zIndex,
                        transform: `translate(-50%, -50%) rotate(${item.rotation}deg) scale(${item.scale}) ${
                          item.flipX ? 'scaleX(-1)' : ''
                        } ${item.flipY ? 'scaleY(-1)' : ''}`,
                        opacity: item.opacity,
                        cursor: item.locked ? 'not-allowed' : isDraggingItem && isSelected ? 'grabbing' : 'grab'
                      }}
                      className={`absolute select-none group ${
                        isSelected
                          ? 'ring-4 ring-[#FFD23F] ring-offset-4 ring-offset-[#07334F] rounded-xl'
                          : 'hover:outline-2 hover:outline-dashed hover:outline-[#297FC1]'
                      }`}
                    >
                      {/* Render Dynamic SVG Asset or Component */}
                      <div
                        className={`w-full h-full flex items-center justify-center pointer-events-none ${
                          item.shadow ? 'filter drop-shadow-[4px_6px_10px_rgba(7,51,79,0.35)]' : ''
                        }`}
                        dangerouslySetInnerHTML={{
                          __html: asset ? asset.renderSvg(item.width, item.height, item) : ''
                        }}
                      />

                      {/* Selection Tag */}
                      {isSelected && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#07334F] text-[#FDEFEB] text-[10px] font-black px-2 py-0.5 rounded-md whitespace-nowrap border border-[#FFD23F] shadow flex items-center gap-1 pointer-events-none">
                          <Move size={10} /> {item.name}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Viewport Info Overlay */}
              <div className="absolute bottom-3 left-3 bg-[#07334F]/90 text-[#FDEFEB] text-[10px] font-black px-2.5 py-1 rounded-lg border border-[#FFD23F]/50 flex items-center gap-2">
                <span>ARTBOARD: {activePreset.name}</span>
                <span className="text-[#FFD23F]">({activePreset.width} × {activePreset.height}px)</span>
                <span className="text-[#EF9FBD]">Items: {items.length}</span>
              </div>
            </div>

            {/* Selected Element Property Inspector */}
            {selectedItem ? (
              <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-3 animate-in fade-in">
                <div className="flex items-center justify-between border-b-2 border-[#07334F]/20 pb-2 text-xs font-black text-[#07334F]">
                  <span className="flex items-center gap-1.5">
                    <Sliders size={14} className="text-[#D92F2F]" />
                    Inspecting: {selectedItem.name}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={bringToFront}
                      className="px-2 py-0.5 bg-white rounded-md border border-[#07334F] text-[10px] hover:bg-[#FFD23F]"
                      title="Bring to Front"
                    >
                      Top
                    </button>
                    <button
                      onClick={sendToBack}
                      className="px-2 py-0.5 bg-white rounded-md border border-[#07334F] text-[10px] hover:bg-[#FFD23F]"
                      title="Send to Back"
                    >
                      Bottom
                    </button>
                    <button
                      onClick={duplicateSelectedItem}
                      className="px-2 py-0.5 bg-white rounded-md border border-[#07334F] text-[10px] hover:bg-[#FFD23F]"
                      title="Duplicate (Ctrl+D)"
                    >
                      Clone
                    </button>
                    <button
                      onClick={deleteSelectedItem}
                      className="p-1 bg-[#D92F2F] text-white rounded-md border border-[#07334F] hover:bg-[#B32424]"
                      title="Delete (Del)"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>

                {/* Sliders Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  {/* Scale */}
                  <div>
                    <label className="text-[10px] font-bold text-[#07334F] block mb-0.5">
                      Scale: {Math.round(selectedItem.scale * 100)}%
                    </label>
                    <input
                      type="range"
                      min="0.3"
                      max="3.0"
                      step="0.05"
                      value={selectedItem.scale}
                      onChange={(e) => updateSelectedItem({ scale: parseFloat(e.target.value) })}
                      className="w-full accent-[#D92F2F]"
                    />
                  </div>

                  {/* Rotation */}
                  <div>
                    <label className="text-[10px] font-bold text-[#07334F] block mb-0.5">
                      Rotation: {selectedItem.rotation}°
                    </label>
                    <input
                      type="range"
                      min="-180"
                      max="180"
                      step="5"
                      value={selectedItem.rotation}
                      onChange={(e) => updateSelectedItem({ rotation: parseInt(e.target.value) })}
                      className="w-full accent-[#297FC1]"
                    />
                  </div>

                  {/* Opacity */}
                  <div>
                    <label className="text-[10px] font-bold text-[#07334F] block mb-0.5">
                      Opacity: {Math.round(selectedItem.opacity * 100)}%
                    </label>
                    <input
                      type="range"
                      min="0.2"
                      max="1.0"
                      step="0.05"
                      value={selectedItem.opacity}
                      onChange={(e) => updateSelectedItem({ opacity: parseFloat(e.target.value) })}
                      className="w-full accent-[#07334F]"
                    />
                  </div>

                  {/* Quick Toggles */}
                  <div className="flex items-center gap-1 pt-3">
                    <button
                      onClick={() => updateSelectedItem({ flipX: !selectedItem.flipX })}
                      className={`flex-1 py-1 text-[10px] font-black rounded border border-[#07334F] flex items-center justify-center gap-1 ${
                        selectedItem.flipX ? 'bg-[#FFD23F]' : 'bg-white'
                      }`}
                      title="Flip Horizontally"
                    >
                      <FlipHorizontal size={12} /> Flip X
                    </button>
                    <button
                      onClick={() => updateSelectedItem({ shadow: !selectedItem.shadow })}
                      className={`flex-1 py-1 text-[10px] font-black rounded border border-[#07334F] ${
                        selectedItem.shadow ? 'bg-[#D92F2F] text-white' : 'bg-white text-[#07334F]'
                      }`}
                      title="Toggle Drop Shadow"
                    >
                      Shadow
                    </button>
                  </div>
                </div>

                {/* Inline Text Editing (For Text Stickers) */}
                {selectedItem.customText !== undefined && (
                  <div className="pt-2 border-t border-[#07334F]/20 flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-black text-[#07334F]">Custom Slogan:</span>
                    <input
                      type="text"
                      value={selectedItem.customText}
                      onChange={(e) => updateSelectedItem({ customText: e.target.value })}
                      className="flex-1 px-3 py-1 bg-white text-xs font-black text-[#07334F] rounded-lg border-2 border-[#07334F]"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="p-3 bg-[#FDEFEB]/50 rounded-xl border-2 border-dashed border-[#07334F]/40 text-center text-xs font-bold text-[#07334F]/70">
                💡 Click any sticker, Doh Boy, or texture on the board to transform, rotate, scale, or customize its properties.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
