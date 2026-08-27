import React, { useState } from 'react';
import {
  Printer,
  X,
  FileText,
  Sliders,
  Check,
  Download,
  Layers,
  Sparkles,
  Award,
  Maximize2,
  AlertTriangle,
  Palette,
  Type,
  Shapes,
  Smile,
  Brush,
  Grid,
  Camera,
  Package,
  Tag,
  Share2,
  Store,
  Shirt,
  MessageSquare,
  CheckSquare,
  Layout,
  ZoomIn,
  ZoomOut,
  Droplets,
  Eye,
  Info,
  ChevronDown
} from 'lucide-react';
import { SECTIONS, BRAND_COLORS, COLOR_COMBINATIONS, BRAND_TAGLINES, BRAND_VOICE_PILLARS } from '../../data/brandData';
import { DohNutLogo } from './DohNutLogo';
import { DohBoyMascot } from './DohBoyMascot';
import { DonutIcon, StarSpark, StreetStickerBadge, DripsGraphic } from './GraphicElements';
import { UserProfile } from '../../types';

interface PrintViewLayoutProps {
  onExitPrintView: () => void;
  userProfile?: UserProfile;
}

export const PrintViewLayout: React.FC<PrintViewLayoutProps> = ({
  onExitPrintView,
  userProfile
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [inkSaverMode, setInkSaverMode] = useState<boolean>(false);
  const [showCropMarks, setShowCropMarks] = useState<boolean>(false);
  const [zoomScale, setZoomScale] = useState<number>(100);

  const handlePrint = () => {
    window.print();
  };

  const categories = ['All', 'Foundation', 'Identity', 'Design System', 'Applications', 'Governance'];

  // Total calculated pages
  const totalPages = 13;

  return (
    <div className={`min-h-screen ${inkSaverMode ? 'bg-gray-100 text-black' : 'bg-[#2B353E] text-[#07334F]'} font-sans`}>
      {/* ========================================================
          TOP FLOATING PRINT BAR (Strictly hidden during actual print)
          ======================================================== */}
      <div className="sticky top-0 z-50 bg-[#07334F] text-[#FDEFEB] border-b-4 border-[#07334F] shadow-2xl p-3 sm:p-4 no-print">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Brand Info & Mode Indicator */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D92F2F] border-2 border-white/40 flex items-center justify-center text-white shadow-md shrink-0">
              <Printer size={22} className="animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-fun text-lg font-black text-white tracking-wide">
                  Print &amp; A4 PDF View
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#FFD23F] text-[#07334F] text-[10px] font-black uppercase tracking-wider">
                  A4 Ready (210 × 297mm)
                </span>
              </div>
              <p className="text-[11px] text-[#FDEFEB]/75 font-medium hidden sm:block">
                Formatted as clean paginated specification sheets with running headers &amp; footers.
              </p>
            </div>
          </div>

          {/* Quick Customization Controls */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-[#0b4163] text-[#FDEFEB] text-xs font-black px-3 py-2 pr-8 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#FFD23F] cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All' ? '📑 Full Brand Book (All Pages)' : `Section: ${cat}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Ink-Saver Toggle */}
            <button
              onClick={() => setInkSaverMode(!inkSaverMode)}
              className={`px-3 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 border border-white/20 ${
                inkSaverMode
                  ? 'bg-[#FFD23F] text-[#07334F] shadow-sm'
                  : 'bg-[#0b4163] text-[#FDEFEB] hover:bg-white/10'
              }`}
              title="Toggle Light / Toner-friendly mode for economic physical printing"
            >
              <Droplets size={14} className={inkSaverMode ? 'text-[#D92F2F]' : 'text-[#FFD23F]'} />
              <span className="hidden md:inline">{inkSaverMode ? 'Ink Saver: ON' : 'Ink Saver'}</span>
            </button>

            {/* Crop Marks Toggle */}
            <button
              onClick={() => setShowCropMarks(!showCropMarks)}
              className={`px-3 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 border border-white/20 ${
                showCropMarks
                  ? 'bg-[#297FC1] text-white shadow-sm'
                  : 'bg-[#0b4163] text-[#FDEFEB] hover:bg-white/10'
              }`}
              title="Toggle standard printer crop marks and registration guides"
            >
              <Layers size={14} />
              <span className="hidden lg:inline">{showCropMarks ? 'Crop Marks: ON' : 'Crop Marks'}</span>
            </button>

            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-[#0b4163] p-1 rounded-xl border border-white/20">
              <button
                onClick={() => setZoomScale(Math.max(65, zoomScale - 10))}
                className="p-1 text-white hover:bg-white/10 rounded-lg text-xs"
                title="Zoom Out"
              >
                <ZoomOut size={14} />
              </button>
              <span className="text-[11px] font-mono font-bold px-1.5 min-w-[40px] text-center text-white">
                {zoomScale}%
              </span>
              <button
                onClick={() => setZoomScale(Math.min(130, zoomScale + 10))}
                className="p-1 text-white hover:bg-white/10 rounded-lg text-xs"
                title="Zoom In"
              >
                <ZoomIn size={14} />
              </button>
            </div>

            {/* PRIMARY PRINT / PDF BUTTON */}
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#D92F2F] hover:bg-[#b82525] text-white font-fun text-xs font-black rounded-xl border-2 border-white shadow-lg active:scale-95 transition-all flex items-center gap-2"
            >
              <Printer size={16} />
              <span>Print / Save PDF</span>
            </button>

            {/* EXIT PRINT VIEW BUTTON */}
            <button
              onClick={onExitPrintView}
              className="px-3 py-2 bg-white/10 hover:bg-white/20 text-[#FDEFEB] font-black text-xs rounded-xl border border-white/30 transition-all flex items-center gap-1.5"
              title="Return to Interactive App Dashboard"
            >
              <X size={15} />
              <span className="hidden sm:inline">Exit</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          DOCUMENT VIEWER CONTAINER
          ======================================================== */}
      <div className="py-8 px-4 sm:px-6 flex flex-col items-center justify-center overflow-x-auto">
        <div
          className="transition-transform origin-top duration-200"
          style={{ transform: `scale(${zoomScale / 100})` }}
        >
          {/* ========================================================
              A4 PAGE 1: OFFICIAL BRAND BOOK COVER SHEET
              ======================================================== */}
          {(selectedCategory === 'All' || selectedCategory === 'Foundation') && (
            <div className="a4-page-sheet w-[210mm] min-h-[297mm] bg-white text-[#07334F] mx-auto my-6 p-[14mm] relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-[#07334F]/20 flex flex-col justify-between overflow-hidden">
              {showCropMarks && <CropMarks />}

              {/* Cover Top Header */}
              <div className="flex items-center justify-between border-b-4 border-[#07334F] pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] text-xs font-black rounded-lg uppercase tracking-wider">
                    Official Specification
                  </span>
                  <span className="text-xs font-mono font-bold text-[#07334F]/70">
                    DOC ID: DOH-SPEC-2026-V1
                  </span>
                </div>
                <span className="text-xs font-mono font-black text-[#07334F]">
                  PAGE 01 / {totalPages.toString().padStart(2, '0')}
                </span>
              </div>

              {/* Cover Main Hero Block */}
              <div className="my-auto py-10 space-y-8 text-center flex flex-col items-center">
                <div className="scale-125 my-4">
                  <DohNutLogo variant="primary" size={240} />
                </div>

                <div className="space-y-3 max-w-xl">
                  <div className="inline-block px-4 py-1 rounded-full bg-[#FFD23F] text-[#07334F] font-fun text-sm font-black uppercase tracking-wider border-2 border-[#07334F]">
                    ★ Brand Design Guidelines &amp; Token Standards ★
                  </div>
                  <h1 className="font-fun text-5xl font-black text-[#07334F] tracking-tight leading-none">
                    DOH-NUT MALAYSIA
                  </h1>
                  <p className="font-sans text-lg font-extrabold text-[#D92F2F] tracking-wide">
                    STREET DOUGH • BOLD IDENTITY • UNAPOLOGETIC FLAVORS
                  </p>
                  <p className="font-sans text-xs text-[#07334F]/80 leading-relaxed max-w-md mx-auto pt-2">
                    The comprehensive design, vector geometry, color science, character rigs, packaging engineering, and typography rules for the DOH-NUT brand ecosystem.
                  </p>
                </div>

                {/* Mascot Centerpiece */}
                <div className="p-4 bg-[#FDEFEB] rounded-3xl border-3 border-[#07334F] flex items-center gap-4 shadow-sm">
                  <DohBoyMascot pose="hero" size={100} />
                  <div className="text-left">
                    <span className="text-xs font-black text-[#07334F] uppercase block">
                      Doh Boy Mascot Identity
                    </span>
                    <span className="text-[11px] text-[#07334F]/70 font-medium block">
                      Approved Brand Character &amp; Quality Seal
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#D92F2F] block mt-0.5">
                      "GOOD DOUGH. BAD ATTITUDE."
                    </span>
                  </div>
                </div>
              </div>

              {/* Cover Metadata Table */}
              <div className="border-t-4 border-[#07334F] pt-4 space-y-3">
                <div className="grid grid-cols-4 gap-3 text-xs bg-[#FDEFEB] p-3.5 rounded-2xl border-2 border-[#07334F]">
                  <div>
                    <span className="font-bold text-[10px] text-[#07334F]/60 uppercase block">Release Version</span>
                    <span className="font-black text-[#07334F]">v1.0 (Production)</span>
                  </div>
                  <div>
                    <span className="font-bold text-[10px] text-[#07334F]/60 uppercase block">Issue Date</span>
                    <span className="font-black text-[#07334F]">October 2026</span>
                  </div>
                  <div>
                    <span className="font-bold text-[10px] text-[#07334F]/60 uppercase block">Classification</span>
                    <span className="font-black text-[#D92F2F]">Internal &amp; Vendors</span>
                  </div>
                  <div>
                    <span className="font-bold text-[10px] text-[#07334F]/60 uppercase block">Author Sign-off</span>
                    <span className="font-black text-[#07334F] truncate">{userProfile?.username || 'DOH-NUT Studio'}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-[#07334F]/60 font-mono">
                  <span>CONFIDENTIAL &amp; PROPRIETARY • DOH-NUT HOLDINGS SDN BHD</span>
                  <span>KUALA LUMPUR, MALAYSIA</span>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              A4 PAGE 2: EXECUTIVE TABLE OF CONTENTS & QUICK REFERENCE
              ======================================================== */}
          {(selectedCategory === 'All' || selectedCategory === 'Foundation') && (
            <div className="a4-page-sheet w-[210mm] min-h-[297mm] bg-white text-[#07334F] mx-auto my-6 p-[14mm] relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-[#07334F]/20 flex flex-col justify-between overflow-hidden">
              {showCropMarks && <CropMarks />}
              <PageRunningHeader sectionNumber="INDEX" sectionName="Table of Contents & Quick Reference" pageNum={2} totalPages={totalPages} />

              <div className="space-y-6 my-auto">
                <div className="border-b-3 border-[#07334F] pb-3">
                  <h2 className="font-fun text-2xl font-black text-[#07334F]">
                    EXECUTIVE INDEX &amp; DESIGN SYSTEM SPECIFICATIONS
                  </h2>
                  <p className="text-xs text-[#07334F]/80 font-medium">
                    Overview of the 23 design system modules and governance rules.
                  </p>
                </div>

                {/* Section Index Grid */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
                  {SECTIONS.map((sec) => (
                    <div key={sec.id} className="flex items-center justify-between py-1.5 border-b border-[#07334F]/15">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-[#07334F] text-[#FDEFEB] text-[10px] font-mono font-black flex items-center justify-center">
                          {sec.number}
                        </span>
                        <span className="font-black text-[#07334F]">{sec.title}</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#297FC1] uppercase">
                        {sec.category}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quick Reference Summary Box */}
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] space-y-3">
                  <span className="font-fun text-sm font-black text-[#D92F2F] uppercase block">
                    ⚡ Quick Reference Cheat Sheet
                  </span>
                  <div className="grid grid-cols-3 gap-3 text-[11px]">
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
                      <span className="font-black text-[#07334F] block">Primary Colors</span>
                      <span className="text-[10px] text-[#07334F]/70 block font-mono">Red: #D92F2F</span>
                      <span className="text-[10px] text-[#07334F]/70 block font-mono">Navy: #07334F</span>
                      <span className="text-[10px] text-[#07334F]/70 block font-mono">Cream: #FDEFEB</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
                      <span className="font-black text-[#07334F] block">Core Typography</span>
                      <span className="text-[10px] text-[#07334F]/70 block">Display: Titan One</span>
                      <span className="text-[10px] text-[#07334F]/70 block">Subhead: Fredoka 800</span>
                      <span className="text-[10px] text-[#07334F]/70 block">Body: Plus Jakarta Sans</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
                      <span className="font-black text-[#07334F] block">Graphic Rules</span>
                      <span className="text-[10px] text-[#07334F]/70 block">Outlines: 5pt solid stroke</span>
                      <span className="text-[10px] text-[#07334F]/70 block">Clearspace: 1.0 "D" unit</span>
                      <span className="text-[10px] text-[#07334F]/70 block">Shadow: Hard brutalist drop</span>
                    </div>
                  </div>
                </div>
              </div>

              <PageRunningFooter pageNum={2} totalPages={totalPages} />
            </div>
          )}

          {/* ========================================================
              A4 PAGE 3: SECTION 01 - BRAND FOUNDATION
              ======================================================== */}
          {(selectedCategory === 'All' || selectedCategory === 'Foundation') && (
            <div className="a4-page-sheet w-[210mm] min-h-[297mm] bg-white text-[#07334F] mx-auto my-6 p-[14mm] relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-[#07334F]/20 flex flex-col justify-between overflow-hidden">
              {showCropMarks && <CropMarks />}
              <PageRunningHeader sectionNumber="01" sectionName="Brand Foundation & Ethos" pageNum={3} totalPages={totalPages} />

              <div className="space-y-5 my-auto">
                <div className="border-b-3 border-[#07334F] pb-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#D92F2F]">Foundation System</span>
                    <h2 className="font-fun text-2xl font-black text-[#07334F]">01. BRAND ETHOS &amp; POSITIONING</h2>
                  </div>
                  <span className="px-3 py-1 bg-[#FFD23F] text-[#07334F] text-xs font-black rounded-lg border border-[#07334F]">
                    CORE DNA
                  </span>
                </div>

                {/* Core Pillars */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] space-y-1.5">
                    <span className="font-fun text-sm font-black text-[#D92F2F] block">1. Street Credibility</span>
                    <p className="text-xs text-[#07334F]/80 leading-relaxed">
                      Born from Malaysian street food energy, skate culture, and late-night supper runs. Bold, loud, and unapologetic.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] space-y-1.5">
                    <span className="font-fun text-sm font-black text-[#297FC1] block">2. Artisanal Craft</span>
                    <p className="text-xs text-[#07334F]/80 leading-relaxed">
                      24-hour slow-fermented brioche dough, fried hourly in small batches with premium Japanese flours and French butter.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] space-y-1.5">
                    <span className="font-fun text-sm font-black text-[#07334F] block">3. Playful Attitude</span>
                    <p className="text-xs text-[#07334F]/80 leading-relaxed">
                      Zero boring corporate jargon. We speak in punchy taglines, cheeky humor, and vibrant visual storytelling.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] space-y-1.5">
                    <span className="font-fun text-sm font-black text-[#EF9FBD] block">4. Visual Punch</span>
                    <p className="text-xs text-[#07334F]/80 leading-relaxed">
                      High-contrast primary hues, heavy 5pt comic ink outlines, and custom character mascot rigs on every touchpoint.
                    </p>
                  </div>
                </div>

                {/* Target Audience & Brand Archetype */}
                <div className="p-4 bg-white rounded-2xl border-3 border-[#07334F] shadow-sm space-y-3">
                  <h3 className="font-fun text-sm font-black text-[#07334F] uppercase">
                    Brand Archetype: The Rebel Crafter (Outlaw + Creator)
                  </h3>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="p-2.5 bg-[#FDEFEB] rounded-xl border border-[#07334F]">
                      <strong className="block text-[#07334F]">Tone:</strong>
                      <span className="text-[11px] text-[#07334F]/80">Cheeky, punchy, confident, appetizing.</span>
                    </div>
                    <div className="p-2.5 bg-[#FDEFEB] rounded-xl border border-[#07334F]">
                      <strong className="block text-[#07334F]">Audience:</strong>
                      <span className="text-[11px] text-[#07334F]/80">Gen-Z &amp; Millennials seeking fun food experiences.</span>
                    </div>
                    <div className="p-2.5 bg-[#FDEFEB] rounded-xl border border-[#07334F]">
                      <strong className="block text-[#07334F]">Promise:</strong>
                      <span className="text-[11px] text-[#07334F]/80">Hot dough, crazy good glaze, zero apologies.</span>
                    </div>
                  </div>
                </div>
              </div>

              <PageRunningFooter pageNum={3} totalPages={totalPages} />
            </div>
          )}

          {/* ========================================================
              A4 PAGE 4: SECTION 02 & 03 - MASTER LOGO & CLEAR SPACE
              ======================================================== */}
          {(selectedCategory === 'All' || selectedCategory === 'Identity') && (
            <div className="a4-page-sheet w-[210mm] min-h-[297mm] bg-white text-[#07334F] mx-auto my-6 p-[14mm] relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-[#07334F]/20 flex flex-col justify-between overflow-hidden">
              {showCropMarks && <CropMarks />}
              <PageRunningHeader sectionNumber="02-03" sectionName="Master Logo & Clear Space Rules" pageNum={4} totalPages={totalPages} />

              <div className="space-y-6 my-auto">
                <div className="border-b-3 border-[#07334F] pb-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#297FC1]">Identity System</span>
                    <h2 className="font-fun text-2xl font-black text-[#07334F]">02 &amp; 03. LOGO VARIANTS &amp; CLEAR SPACE</h2>
                  </div>
                  <span className="px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] text-xs font-black rounded-lg">
                    PRIMARY IDENTITY
                  </span>
                </div>

                {/* 4 Logo Variants Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Primary Badge */}
                  <div className="p-4 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] flex flex-col items-center justify-center min-h-[140px] text-center">
                    <DohNutLogo variant="primary" size={150} />
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#07334F] mt-2">
                      1. Master Badge (Primary)
                    </span>
                  </div>

                  {/* Horizontal Lockup */}
                  <div className="p-4 bg-white rounded-2xl border-2 border-[#07334F] flex flex-col items-center justify-center min-h-[140px] text-center">
                    <DohNutLogo variant="horizontal" size={170} />
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#07334F] mt-2">
                      2. Horizontal Lockup (Web / Banners)
                    </span>
                  </div>

                  {/* Reversed / Dark Mode */}
                  <div className="p-4 bg-[#07334F] rounded-2xl border-2 border-[#07334F] flex flex-col items-center justify-center min-h-[140px] text-center">
                    <DohNutLogo variant="reversed" size={150} />
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#FDEFEB] mt-2">
                      3. Reversed (Night / Dark Surfaces)
                    </span>
                  </div>

                  {/* Icon Stamp */}
                  <div className="p-4 bg-[#FFD23F] rounded-2xl border-2 border-[#07334F] flex flex-col items-center justify-center min-h-[140px] text-center">
                    <DohNutLogo variant="icon" size={80} />
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#07334F] mt-2">
                      4. Icon Stamp (Favicons / App Badges)
                    </span>
                  </div>
                </div>

                {/* Clear Space & Sizing Specifications */}
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] space-y-3">
                  <h3 className="font-fun text-sm font-black text-[#07334F] uppercase flex items-center gap-2">
                    <Maximize2 size={16} className="text-[#D92F2F]" />
                    Clear Space Metric: Proportional "D" Unit Rule
                  </h3>
                  <p className="text-xs text-[#07334F]/80 leading-relaxed">
                    Always maintain an isolation clearance zone around the master logo equal to the height of the capital letter <strong>"D"</strong> in DOH-NUT. No text, graphic elements, or borders may enter this safe perimeter.
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
                      <strong className="text-[#D92F2F] block">Minimum Print Size:</strong>
                      <span className="text-[11px] font-mono font-bold">25mm width (Badge) / 12mm (Icon)</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
                      <strong className="text-[#297FC1] block">Minimum Digital Size:</strong>
                      <span className="text-[11px] font-mono font-bold">96px width (Badge) / 32px (Icon)</span>
                    </div>
                  </div>
                </div>
              </div>

              <PageRunningFooter pageNum={4} totalPages={totalPages} />
            </div>
          )}

          {/* ========================================================
              A4 PAGE 5: SECTION 04 - LOGO MISUSE GUIDELINES
              ======================================================== */}
          {(selectedCategory === 'All' || selectedCategory === 'Identity') && (
            <div className="a4-page-sheet w-[210mm] min-h-[297mm] bg-white text-[#07334F] mx-auto my-6 p-[14mm] relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-[#07334F]/20 flex flex-col justify-between overflow-hidden">
              {showCropMarks && <CropMarks />}
              <PageRunningHeader sectionNumber="04" sectionName="Logo Misuse & Forbidden Alterations" pageNum={5} totalPages={totalPages} />

              <div className="space-y-5 my-auto">
                <div className="border-b-3 border-[#07334F] pb-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#D92F2F]">Identity Governance</span>
                    <h2 className="font-fun text-2xl font-black text-[#07334F]">04. LOGO MISUSE &amp; STRICT RULES</h2>
                  </div>
                  <span className="px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] text-xs font-black rounded-lg flex items-center gap-1">
                    <AlertTriangle size={14} /> ZERO TOLERANCE
                  </span>
                </div>

                {/* 6 Common Violations Grid */}
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-red-50 rounded-2xl border-2 border-red-500 text-center space-y-2">
                    <div className="h-16 flex items-center justify-center scale-75 opacity-70 transform skew-x-12">
                      <DohNutLogo variant="primary" size={110} />
                    </div>
                    <span className="font-black text-red-700 block text-[11px]">✕ DO NOT Stretch / Skew</span>
                    <p className="text-[10px] text-red-600">Never distort the horizontal or vertical aspect ratio.</p>
                  </div>

                  <div className="p-3 bg-red-50 rounded-2xl border-2 border-red-500 text-center space-y-2">
                    <div className="h-16 flex items-center justify-center scale-75 opacity-70 hue-rotate-90">
                      <DohNutLogo variant="primary" size={110} />
                    </div>
                    <span className="font-black text-red-700 block text-[11px]">✕ DO NOT Recolor</span>
                    <p className="text-[10px] text-red-600">Only use approved brand color combinations.</p>
                  </div>

                  <div className="p-3 bg-red-50 rounded-2xl border-2 border-red-500 text-center space-y-2">
                    <div className="h-16 flex items-center justify-center scale-75 opacity-70 transform rotate-45">
                      <DohNutLogo variant="primary" size={110} />
                    </div>
                    <span className="font-black text-red-700 block text-[11px]">✕ DO NOT Rotate Badge</span>
                    <p className="text-[10px] text-red-600">Logo must always sit level with a 0° baseline.</p>
                  </div>

                  <div className="p-3 bg-red-50 rounded-2xl border-2 border-red-500 text-center space-y-2">
                    <div className="h-16 flex items-center justify-center scale-75 opacity-70 blur-[1px]">
                      <DohNutLogo variant="primary" size={110} />
                    </div>
                    <span className="font-black text-red-700 block text-[11px]">✕ DO NOT Add Glow / Blur</span>
                    <p className="text-[10px] text-red-600">No soft neon glows, 3D bevels, or blurry drop shadows.</p>
                  </div>

                  <div className="p-3 bg-red-50 rounded-2xl border-2 border-red-500 text-center space-y-2">
                    <div className="h-16 flex items-center justify-center bg-gray-400 p-2 rounded scale-75">
                      <DohNutLogo variant="primary" size={110} />
                    </div>
                    <span className="font-black text-red-700 block text-[11px]">✕ Low Contrast Surface</span>
                    <p className="text-[10px] text-red-600">Never place on busy photos without a clean solid backing.</p>
                  </div>

                  <div className="p-3 bg-red-50 rounded-2xl border-2 border-red-500 text-center space-y-2">
                    <div className="h-16 flex items-center justify-center scale-75">
                      <span className="font-fun text-sm font-black text-[#07334F]">DOH!</span>
                    </div>
                    <span className="font-black text-red-700 block text-[11px]">✕ DO NOT Re-type</span>
                    <p className="text-[10px] text-red-600">Always use official vector asset files, never re-typeset.</p>
                  </div>
                </div>

                {/* Golden Rule Banner */}
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D92F2F] text-white flex items-center justify-center font-black text-lg shrink-0">
                    !
                  </div>
                  <div className="text-xs">
                    <strong className="text-[#07334F] block font-fun">The Golden Asset Rule:</strong>
                    <span className="text-[#07334F]/80">
                      When in doubt, use the official vector SVGs from Section 21. If you need a special custom lockup for high-volume retail or collaborative merchandise, request approval from the Brand Lead.
                    </span>
                  </div>
                </div>
              </div>

              <PageRunningFooter pageNum={5} totalPages={totalPages} />
            </div>
          )}

          {/* ========================================================
              A4 PAGE 6: SECTION 05 & 06 - COLOR SYSTEM & PAIRINGS
              ======================================================== */}
          {(selectedCategory === 'All' || selectedCategory === 'Design System') && (
            <div className="a4-page-sheet w-[210mm] min-h-[297mm] bg-white text-[#07334F] mx-auto my-6 p-[14mm] relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-[#07334F]/20 flex flex-col justify-between overflow-hidden">
              {showCropMarks && <CropMarks />}
              <PageRunningHeader sectionNumber="05-06" sectionName="Color System & Contrast Combinations" pageNum={6} totalPages={totalPages} />

              <div className="space-y-5 my-auto">
                <div className="border-b-3 border-[#07334F] pb-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#297FC1]">Design System</span>
                    <h2 className="font-fun text-2xl font-black text-[#07334F]">05 &amp; 06. COLOR TOKENS &amp; PALETTES</h2>
                  </div>
                  <span className="px-3 py-1 bg-[#FFD23F] text-[#07334F] text-xs font-black rounded-lg border border-[#07334F]">
                    CMYK / RGB / PMS
                  </span>
                </div>

                {/* 5 Core Color Swatches */}
                <div className="grid grid-cols-5 gap-2.5">
                  {BRAND_COLORS.map((col) => (
                    <div key={col.id} className="p-3 bg-white rounded-2xl border-2 border-[#07334F] space-y-2 text-center shadow-sm">
                      <div
                        className="w-full h-14 rounded-xl border-2 border-[#07334F] flex items-center justify-center font-mono text-[9px] font-black"
                        style={{ backgroundColor: col.hex, color: col.textColor }}
                      >
                        {col.hex}
                      </div>
                      <div>
                        <span className="font-fun text-xs font-black block truncate text-[#07334F]">{col.name}</span>
                        <span className="text-[9px] font-mono text-[#07334F]/70 block">{col.pantone}</span>
                        <span className="text-[8px] font-mono text-[#07334F]/60 block">{col.cmyk}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Approved Combinations Table */}
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] space-y-3">
                  <h3 className="font-fun text-sm font-black text-[#07334F] uppercase">
                    6 Approved Color Combinations (WCAG AA / AAA Tested)
                  </h3>
                  <div className="grid grid-cols-3 gap-2.5 text-xs">
                    {COLOR_COMBINATIONS.map((combo) => (
                      <div
                        key={combo.id}
                        className="p-3 rounded-xl border-2 border-[#07334F] space-y-1"
                        style={{ backgroundColor: combo.bg, color: combo.body }}
                      >
                        <span className="font-black text-xs block" style={{ color: combo.headline }}>
                          {combo.title}
                        </span>
                        <span className="text-[10px] font-bold block opacity-85">
                          {combo.rating}
                        </span>
                        <p className="text-[9px] leading-tight opacity-75 line-clamp-2">
                          {combo.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <PageRunningFooter pageNum={6} totalPages={totalPages} />
            </div>
          )}

          {/* ========================================================
              A4 PAGE 7: SECTION 07 & 08 - TYPOGRAPHY & GRAPHIC SYSTEM
              ======================================================== */}
          {(selectedCategory === 'All' || selectedCategory === 'Design System') && (
            <div className="a4-page-sheet w-[210mm] min-h-[297mm] bg-white text-[#07334F] mx-auto my-6 p-[14mm] relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-[#07334F]/20 flex flex-col justify-between overflow-hidden">
              {showCropMarks && <CropMarks />}
              <PageRunningHeader sectionNumber="07-08" sectionName="Typography Hierarchy & Graphic Elements" pageNum={7} totalPages={totalPages} />

              <div className="space-y-5 my-auto">
                <div className="border-b-3 border-[#07334F] pb-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#D92F2F]">Design System</span>
                    <h2 className="font-fun text-2xl font-black text-[#07334F]">07 &amp; 08. TYPE TOKENS &amp; GRAPHIC ART</h2>
                  </div>
                  <span className="px-3 py-1 bg-[#297FC1] text-white text-xs font-black rounded-lg">
                    BRUTALIST STREET
                  </span>
                </div>

                {/* Typography Hierarchy */}
                <div className="space-y-2.5">
                  <div className="p-3.5 bg-[#FDEFEB] rounded-xl border-2 border-[#07334F] flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-black uppercase bg-[#D92F2F] text-white px-2 py-0.5 rounded mr-2">H1 Masthead</span>
                      <span className="font-fun text-2xl font-black text-[#07334F]">DONUTS WITH ATTITUDE.</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#07334F]/70 font-bold">Titan One • 52px</span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border-2 border-[#07334F] flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-black uppercase bg-[#297FC1] text-white px-2 py-0.5 rounded mr-2">H2 Subhead</span>
                      <span className="font-display text-lg font-black text-[#D92F2F]">FRESH DOUGH, ZERO COMPROMISE.</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#07334F]/70 font-bold">Fredoka 800 • 32px</span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border-2 border-[#07334F] flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-black uppercase bg-[#07334F] text-white px-2 py-0.5 rounded mr-2">Body Copy</span>
                      <span className="font-sans text-xs text-[#07334F] font-medium">Handcrafted brioche fried hourly and glazed with Japanese matcha &amp; local gula melaka.</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#07334F]/70 font-bold">Plus Jakarta 500 • 16px</span>
                  </div>
                </div>

                {/* Graphic Elements Matrix */}
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] space-y-3">
                  <h3 className="font-fun text-sm font-black text-[#07334F] uppercase">
                    Street Graphic Elements &amp; Signature Textures
                  </h3>
                  <div className="grid grid-cols-4 gap-3 text-center text-xs">
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F] flex flex-col items-center gap-1">
                      <StarSpark size={28} color="#FFD23F" />
                      <span className="font-black text-[10px]">Starburst Gold</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F] flex flex-col items-center gap-1">
                      <DonutIcon size={30} />
                      <span className="font-black text-[10px]">Vector Donut</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F] flex flex-col items-center gap-1">
                      <div className="w-12 h-6">
                        <DripsGraphic color="#EF9FBD" />
                      </div>
                      <span className="font-black text-[10px]">Glaze Drip Ribbons</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F] flex flex-col items-center gap-1">
                      <span className="font-black text-xs px-2 py-1 bg-[#FFD23F] rounded-full border border-[#07334F]">HOT!</span>
                      <span className="font-black text-[10px]">Die-Cut Pill Badges</span>
                    </div>
                  </div>
                </div>
              </div>

              <PageRunningFooter pageNum={7} totalPages={totalPages} />
            </div>
          )}

          {/* ========================================================
              A4 PAGE 8: SECTION 09 & 10 - DOH BOY MASCOT & ILLUSTRATION
              ======================================================== */}
          {(selectedCategory === 'All' || selectedCategory === 'Identity') && (
            <div className="a4-page-sheet w-[210mm] min-h-[297mm] bg-white text-[#07334F] mx-auto my-6 p-[14mm] relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-[#07334F]/20 flex flex-col justify-between overflow-hidden">
              {showCropMarks && <CropMarks />}
              <PageRunningHeader sectionNumber="09-10" sectionName="Doh Boy Mascot & Character Identity" pageNum={8} totalPages={totalPages} />

              <div className="space-y-5 my-auto">
                <div className="border-b-3 border-[#07334F] pb-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#297FC1]">Identity System</span>
                    <h2 className="font-fun text-2xl font-black text-[#07334F]">09 &amp; 10. DOH BOY CHARACTER RIGS</h2>
                  </div>
                  <span className="px-3 py-1 bg-[#EF9FBD] text-[#07334F] text-xs font-black rounded-lg border border-[#07334F]">
                    OFFICIAL MASCOT
                  </span>
                </div>

                {/* 4 Mascot Pose Rigs */}
                <div className="grid grid-cols-4 gap-3">
                  <div className="p-3 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center space-y-1">
                    <div className="h-28 flex items-center justify-center">
                      <DohBoyMascot pose="hero" size={100} />
                    </div>
                    <span className="font-fun text-xs font-black text-[#07334F] block">1. Hero Peace</span>
                    <span className="text-[9px] text-[#07334F]/70 block">Main packaging &amp; merch</span>
                  </div>

                  <div className="p-3 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center space-y-1">
                    <div className="h-28 flex items-center justify-center">
                      <DohBoyMascot pose="waving" size={100} />
                    </div>
                    <span className="font-fun text-xs font-black text-[#07334F] block">2. Friendly Wave</span>
                    <span className="text-[9px] text-[#07334F]/70 block">Store entrance &amp; web</span>
                  </div>

                  <div className="p-3 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center space-y-1">
                    <div className="h-28 flex items-center justify-center">
                      <DohBoyMascot pose="eating" size={100} />
                    </div>
                    <span className="font-fun text-xs font-black text-[#07334F] block">3. Munching</span>
                    <span className="text-[9px] text-[#07334F]/70 block">Menu board &amp; napkins</span>
                  </div>

                  <div className="p-3 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center space-y-1">
                    <div className="h-28 flex items-center justify-center">
                      <DohBoyMascot pose="avatar" size={90} />
                    </div>
                    <span className="font-fun text-xs font-black text-[#07334F] block">4. Face Stamp</span>
                    <span className="text-[9px] text-[#07334F]/70 block">Social avatar &amp; seals</span>
                  </div>
                </div>

                {/* Character Anatomy Breakdown */}
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] space-y-2 text-xs">
                  <h3 className="font-fun text-sm font-black text-[#07334F] uppercase">
                    Character Anatomy &amp; Illustration Rules
                  </h3>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
                      <strong className="text-[#D92F2F] block">1. Glaze Drip Frosting:</strong>
                      <span className="text-[11px] text-[#07334F]/80">Organic drip silhouettes in Strawberry Pink (#EF9FBD) with 5-color confetti sprinkles.</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
                      <strong className="text-[#297FC1] block">2. High-Top Sneakers:</strong>
                      <span className="text-[11px] text-[#07334F]/80">Two-tone street kicks with rubber white toes and gold star eyelets.</span>
                    </div>
                  </div>
                </div>
              </div>

              <PageRunningFooter pageNum={8} totalPages={totalPages} />
            </div>
          )}

          {/* ========================================================
              A4 PAGE 9: SECTION 11 & 12 - PATTERNS & PHOTOGRAPHY
              ======================================================== */}
          {(selectedCategory === 'All' || selectedCategory === 'Design System') && (
            <div className="a4-page-sheet w-[210mm] min-h-[297mm] bg-white text-[#07334F] mx-auto my-6 p-[14mm] relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-[#07334F]/20 flex flex-col justify-between overflow-hidden">
              {showCropMarks && <CropMarks />}
              <PageRunningHeader sectionNumber="11-12" sectionName="Pattern Systems & Photography Direction" pageNum={9} totalPages={totalPages} />

              <div className="space-y-5 my-auto">
                <div className="border-b-3 border-[#07334F] pb-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#297FC1]">Design System</span>
                    <h2 className="font-fun text-2xl font-black text-[#07334F]">11 &amp; 12. PATTERNS &amp; PHOTO ART</h2>
                  </div>
                  <span className="px-3 py-1 bg-[#FFD23F] text-[#07334F] text-xs font-black rounded-lg border border-[#07334F]">
                    SURFACES &amp; LENSES
                  </span>
                </div>

                {/* 3 Pattern Repeat Tiles */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center space-y-2">
                    <div className="w-full h-20 rounded-xl border border-[#07334F] bg-[#07334F] p-2 flex items-center justify-center gap-1.5 flex-wrap overflow-hidden">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#FFD23F]" />
                      ))}
                    </div>
                    <span className="font-fun text-xs font-black block text-[#07334F]">Confetti Scatter</span>
                    <span className="text-[9px] text-[#07334F]/70 block">Tissue wrappers &amp; box interiors</span>
                  </div>

                  <div className="p-3 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center space-y-2">
                    <div className="w-full h-20 rounded-xl border border-[#07334F] bg-white grid grid-cols-4 grid-rows-3 overflow-hidden">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className={i % 2 === 0 ? 'bg-[#07334F]' : 'bg-[#FDEFEB]'} />
                      ))}
                    </div>
                    <span className="font-fun text-xs font-black block text-[#07334F]">Street Diner Check</span>
                    <span className="text-[9px] text-[#07334F]/70 block">Counter vinyl &amp; tray liners</span>
                  </div>

                  <div className="p-3 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center space-y-2">
                    <div className="w-full h-20 rounded-xl border border-[#07334F] bg-[#EF9FBD] flex flex-col justify-between overflow-hidden p-1">
                      <DripsGraphic color="#D92F2F" />
                    </div>
                    <span className="font-fun text-xs font-black block text-[#07334F]">Glaze Flow Ribbon</span>
                    <span className="text-[9px] text-[#07334F]/70 block">Takeout bag headers &amp; tape</span>
                  </div>
                </div>

                {/* Photography Direction */}
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] space-y-2 text-xs">
                  <h3 className="font-fun text-sm font-black text-[#07334F] uppercase">
                    Photography Style Guide (High-Energy Street Food)
                  </h3>
                  <div className="grid grid-cols-3 gap-2.5 text-[11px] pt-1">
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
                      <strong className="block text-[#D92F2F]">1. Glaze Specular Light:</strong>
                      <span>Direct 45° key lighting catching glossy liquid reflections.</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
                      <strong className="block text-[#297FC1]">2. Action &amp; Bite Marks:</strong>
                      <span>Pull-aparts showing airy sourdough crumb structures.</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
                      <strong className="block text-[#07334F]">3. Vibrant Backdrops:</strong>
                      <span>Shot against solid brand yellow and cyan seamless paper.</span>
                    </div>
                  </div>
                </div>
              </div>

              <PageRunningFooter pageNum={9} totalPages={totalPages} />
            </div>
          )}

          {/* ========================================================
              A4 PAGE 10: SECTION 13 & 14 - PACKAGING & STICKER SYSTEM
              ======================================================== */}
          {(selectedCategory === 'All' || selectedCategory === 'Applications') && (
            <div className="a4-page-sheet w-[210mm] min-h-[297mm] bg-white text-[#07334F] mx-auto my-6 p-[14mm] relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-[#07334F]/20 flex flex-col justify-between overflow-hidden">
              {showCropMarks && <CropMarks />}
              <PageRunningHeader sectionNumber="13-14" sectionName="Packaging Engineering & Sticker Systems" pageNum={10} totalPages={totalPages} />

              <div className="space-y-5 my-auto">
                <div className="border-b-3 border-[#07334F] pb-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#D92F2F]">Applications</span>
                    <h2 className="font-fun text-2xl font-black text-[#07334F]">13 &amp; 14. PACKAGING &amp; DIE-CUT STICKERS</h2>
                  </div>
                  <span className="px-3 py-1 bg-[#D92F2F] text-white text-xs font-black rounded-lg">
                    RETAIL UNBOXING
                  </span>
                </div>

                {/* Packaging Applications */}
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center space-y-1.5">
                    <div className="w-full h-24 bg-[#D92F2F] rounded-xl border-2 border-[#07334F] flex items-center justify-center text-white font-fun text-sm p-2">
                      6-PACK BOX
                    </div>
                    <strong className="block text-[#07334F]">1. Master Takeout Box</strong>
                    <p className="text-[10px] text-[#07334F]/70">Corrugated flame-red box with master badge top.</p>
                  </div>

                  <div className="p-3 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center space-y-1.5">
                    <div className="w-full h-24 bg-white rounded-xl border-2 border-[#07334F] flex items-center justify-center text-[#297FC1] font-fun text-sm p-2">
                      BEVERAGE CUP
                    </div>
                    <strong className="block text-[#07334F]">2. Kopi-C &amp; Cold Brew</strong>
                    <p className="text-[10px] text-[#07334F]/70">Clear frosted PET cup with bold cyan sticker seal.</p>
                  </div>

                  <div className="p-3 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center space-y-1.5">
                    <div className="w-full h-24 bg-[#E7D6C4] rounded-xl border-2 border-[#07334F] flex items-center justify-center text-[#07334F] font-fun text-sm p-2">
                      KRAFT BAG
                    </div>
                    <strong className="block text-[#07334F]">3. Heavy Kraft Carry Bag</strong>
                    <p className="text-[10px] text-[#07334F]/70">Unbleached brown kraft with screen-printed navy seal.</p>
                  </div>
                </div>

                {/* Sticker Specifications */}
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] space-y-2 text-xs">
                  <h3 className="font-fun text-sm font-black text-[#07334F] uppercase">
                    Die-Cut Vinyl Sticker Specs &amp; Finish
                  </h3>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
                      <strong className="text-[#D92F2F] block">Material:</strong>
                      <span className="text-[11px] text-[#07334F]/80">Heavyweight 100μm waterproof vinyl with UV protective laminate.</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
                      <strong className="text-[#297FC1] block">Die-Cut Margin:</strong>
                      <span className="text-[11px] text-[#07334F]/80">2mm white bleed border surrounding all character and slogan peels.</span>
                    </div>
                  </div>
                </div>
              </div>

              <PageRunningFooter pageNum={10} totalPages={totalPages} />
            </div>
          )}

          {/* ========================================================
              A4 PAGE 11: SECTION 15 & 16 - SOCIAL MEDIA & STOREFRONT
              ======================================================== */}
          {(selectedCategory === 'All' || selectedCategory === 'Applications') && (
            <div className="a4-page-sheet w-[210mm] min-h-[297mm] bg-white text-[#07334F] mx-auto my-6 p-[14mm] relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-[#07334F]/20 flex flex-col justify-between overflow-hidden">
              {showCropMarks && <CropMarks />}
              <PageRunningHeader sectionNumber="15-16" sectionName="Social Media & Store Signage" pageNum={11} totalPages={totalPages} />

              <div className="space-y-5 my-auto">
                <div className="border-b-3 border-[#07334F] pb-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#297FC1]">Applications</span>
                    <h2 className="font-fun text-2xl font-black text-[#07334F]">15 &amp; 16. SOCIAL MARKETING &amp; RETAIL STORE</h2>
                  </div>
                  <span className="px-3 py-1 bg-[#FFD23F] text-[#07334F] text-xs font-black rounded-lg border border-[#07334F]">
                    DIGITAL &amp; SPACES
                  </span>
                </div>

                {/* Social Posts Layouts */}
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] space-y-2">
                    <span className="font-fun text-sm font-black text-[#D92F2F] block">1. Instagram 1:1 Square Post</span>
                    <p className="text-[11px] text-[#07334F]/80">
                      Center-weighted composition with high-contrast headline, brutalist frame border, and Mascot Doh Boy reaction sticker in the lower corner.
                    </p>
                  </div>
                  <div className="p-3.5 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] space-y-2">
                    <span className="font-fun text-sm font-black text-[#297FC1] block">2. TikTok / Story 9:16 Format</span>
                    <p className="text-[11px] text-[#07334F]/80">
                      Vertical kinetic video layouts with animated price callouts, top master badge banner, and bottom swipe-up order badge.
                    </p>
                  </div>
                </div>

                {/* Storefront Signage Specifications */}
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] space-y-2 text-xs">
                  <h3 className="font-fun text-sm font-black text-[#07334F] uppercase">
                    Storefront Physical Architecture &amp; Signage
                  </h3>
                  <div className="grid grid-cols-3 gap-2.5 text-[11px] pt-1">
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
                      <strong className="block text-[#D92F2F]">Lightbox Header:</strong>
                      <span>Extruded 3D acrylic letters illuminated with warm 3500K LEDs.</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
                      <strong className="block text-[#297FC1]">Sidewalk A-Frame:</strong>
                      <span>Heavy steel blackboard with yellow magnetic flavor badges.</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-[#07334F]">
                      <strong className="block text-[#07334F]">Counter Menu:</strong>
                      <span>High-legibility 32px prices with clear dietary tags.</span>
                    </div>
                  </div>
                </div>
              </div>

              <PageRunningFooter pageNum={11} totalPages={totalPages} />
            </div>
          )}

          {/* ========================================================
              A4 PAGE 12: SECTION 17 & 18 - MERCHANDISE & BRAND VOICE
              ======================================================== */}
          {(selectedCategory === 'All' || selectedCategory === 'Applications' || selectedCategory === 'Governance') && (
            <div className="a4-page-sheet w-[210mm] min-h-[297mm] bg-white text-[#07334F] mx-auto my-6 p-[14mm] relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-[#07334F]/20 flex flex-col justify-between overflow-hidden">
              {showCropMarks && <CropMarks />}
              <PageRunningHeader sectionNumber="17-18" sectionName="Streetwear Merch & Tone of Voice" pageNum={12} totalPages={totalPages} />

              <div className="space-y-5 my-auto">
                <div className="border-b-3 border-[#07334F] pb-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#D92F2F]">Voice &amp; Goods</span>
                    <h2 className="font-fun text-2xl font-black text-[#07334F]">17 &amp; 18. MERCH &amp; BRAND VOICE PILLARS</h2>
                  </div>
                  <span className="px-3 py-1 bg-[#D92F2F] text-white text-xs font-black rounded-lg">
                    CULTURE &amp; TONE
                  </span>
                </div>

                {/* Merch Applications */}
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center space-y-1">
                    <span className="font-fun text-xs font-black text-[#07334F] block">Heavyweight Tees</span>
                    <p className="text-[10px] text-[#07334F]/70">240gsm drop-shoulder cotton with oversized back mascot print.</p>
                  </div>
                  <div className="p-3 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center space-y-1">
                    <span className="font-fun text-xs font-black text-[#07334F] block">Canvas Totes</span>
                    <p className="text-[10px] text-[#07334F]/70">16oz natural canvas with reinforced handles and inner zipper pocket.</p>
                  </div>
                  <div className="p-3 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center space-y-1">
                    <span className="font-fun text-xs font-black text-[#07334F] block">Dad Caps &amp; Pins</span>
                    <p className="text-[10px] text-[#07334F]/70">Unstructured 6-panel caps with embroidered 3D DOH! patch.</p>
                  </div>
                </div>

                {/* 4 Voice Pillars */}
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] space-y-2 text-xs">
                  <h3 className="font-fun text-sm font-black text-[#07334F] uppercase">
                    4 Tone of Voice Pillars &amp; Copy Rules
                  </h3>
                  <div className="grid grid-cols-2 gap-2.5 text-[11px] pt-1">
                    {BRAND_VOICE_PILLARS.map((p) => (
                      <div key={p.title} className="p-2.5 bg-white rounded-xl border border-[#07334F] space-y-1">
                        <div className="flex items-center justify-between">
                          <strong className="text-[#07334F]">{p.title}</strong>
                          <span className="text-[9px] font-black px-1.5 py-0.5 bg-[#FFD23F] rounded border border-[#07334F]">{p.badge}</span>
                        </div>
                        <p className="text-[10px] text-[#07334F]/75">{p.desc}</p>
                        <span className="text-[9px] font-mono font-bold text-[#D92F2F] block">Ex: "{p.example}"</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <PageRunningFooter pageNum={12} totalPages={totalPages} />
            </div>
          )}

          {/* ========================================================
              A4 PAGE 13: SECTION 19 & 20 - GOVERNANCE CHECKLIST & BOARD
              ======================================================== */}
          {(selectedCategory === 'All' || selectedCategory === 'Governance') && (
            <div className="a4-page-sheet w-[210mm] min-h-[297mm] bg-white text-[#07334F] mx-auto my-6 p-[14mm] relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-[#07334F]/20 flex flex-col justify-between overflow-hidden">
              {showCropMarks && <CropMarks />}
              <PageRunningHeader sectionNumber="19-20" sectionName="Governance DO/DON'T & Master Board" pageNum={13} totalPages={totalPages} />

              <div className="space-y-5 my-auto">
                <div className="border-b-3 border-[#07334F] pb-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#D92F2F]">Governance System</span>
                    <h2 className="font-fun text-2xl font-black text-[#07334F]">19 &amp; 20. DESIGN COMPLIANCE CHECKLIST</h2>
                  </div>
                  <span className="px-3 py-1 bg-[#07334F] text-white text-xs font-black rounded-lg">
                    FINAL SIGN-OFF
                  </span>
                </div>

                {/* DO & DON'T Matrix */}
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 bg-green-50 rounded-2xl border-2 border-green-500 space-y-2">
                    <span className="font-black text-green-800 text-sm block">✓ ALWAYS DO</span>
                    <ul className="space-y-1 text-[11px] text-green-900 list-disc list-inside">
                      <li>Use heavy 5pt comic outlines on cartoon assets.</li>
                      <li>Pair Titan One display with clean Plus Jakarta body.</li>
                      <li>Maintain 1.0 "D" clearance space around the badge.</li>
                      <li>Use warm pastry cream #FDEFEB as default canvas.</li>
                    </ul>
                  </div>

                  <div className="p-3.5 bg-red-50 rounded-2xl border-2 border-red-500 space-y-2">
                    <span className="font-black text-red-800 text-sm block">✕ NEVER DO</span>
                    <ul className="space-y-1 text-[11px] text-red-900 list-disc list-inside">
                      <li>Never skew or alter the mascot anatomy.</li>
                      <li>Never use gradients inside flat character vector fills.</li>
                      <li>Never place red logos on cyan backgrounds without white stroke.</li>
                      <li>Never write passive, corporate, or boring sales copy.</li>
                    </ul>
                  </div>
                </div>

                {/* Authorization Sign-off Box */}
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] space-y-3">
                  <h3 className="font-fun text-sm font-black text-[#07334F] uppercase">
                    Brand Stewardship &amp; Release Authorization
                  </h3>
                  <p className="text-[11px] text-[#07334F]/80 leading-relaxed">
                    This manual constitutes the official visual standards for DOH-NUT Malaysia. Any deviation requires formal written consent from the Lead Brand Designer.
                  </p>
                  <div className="grid grid-cols-3 gap-3 text-xs pt-1 border-t border-[#07334F]/20">
                    <div>
                      <span className="text-[9px] font-bold text-[#07334F]/60 block uppercase">Approved By:</span>
                      <span className="font-black text-[#07334F]">{userProfile?.username || 'DOH-NUT Brand Committee'}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-[#07334F]/60 block uppercase">Document Status:</span>
                      <span className="font-black text-green-700">APPROVED PRODUCTION v1.0</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-[#07334F]/60 block uppercase">Copyright:</span>
                      <span className="font-black text-[#07334F]">© 2026 DOH-NUT All Rights Reserved</span>
                    </div>
                  </div>
                </div>
              </div>

              <PageRunningFooter pageNum={13} totalPages={totalPages} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ========================================================
// REUSABLE RUNNING HEADER & FOOTER HELPERS FOR A4 PAGES
// ========================================================

const PageRunningHeader: React.FC<{
  sectionNumber: string;
  sectionName: string;
  pageNum: number;
  totalPages: number;
}> = ({ sectionNumber, sectionName, pageNum, totalPages }) => (
  <div className="flex items-center justify-between border-b-2 border-[#07334F] pb-2 text-xs font-mono">
    <div className="flex items-center gap-2">
      <span className="font-fun font-black text-[#D92F2F]">DOH-NUT BRAND BOOK</span>
      <span className="text-[#07334F]/40">•</span>
      <span className="font-bold text-[#07334F] uppercase">SPEC-{sectionNumber}</span>
      <span className="text-[#07334F]/40">•</span>
      <span className="text-[#07334F]/70 hidden sm:inline">{sectionName}</span>
    </div>
    <span className="font-black text-[#07334F]">
      PAGE {pageNum.toString().padStart(2, '0')} / {totalPages.toString().padStart(2, '0')}
    </span>
  </div>
);

const PageRunningFooter: React.FC<{
  pageNum: number;
  totalPages: number;
}> = ({ pageNum, totalPages }) => (
  <div className="flex items-center justify-between border-t-2 border-[#07334F] pt-2 text-[10px] font-mono text-[#07334F]/70">
    <span>CONFIDENTIAL &amp; PROPRIETARY • DOH-NUT MALAYSIA BRAND SYSTEM v1.0</span>
    <span>A4 SPEC SHEET • PAGE {pageNum} OF {totalPages}</span>
  </div>
);

// Crop Marks Helper for Print Precision
const CropMarks: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none z-10 no-print">
    {/* Top Left */}
    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-red-500/50" />
    {/* Top Right */}
    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-red-500/50" />
    {/* Bottom Left */}
    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-red-500/50" />
    {/* Bottom Right */}
    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-500/50" />
  </div>
);
