import React from 'react';
import { DohNutLogo } from './DohNutLogo';
import { DohBoyMascot } from './DohBoyMascot';
import { BRAND_COLORS } from '../../data/brandData';
import { DonutIcon, StarSpark, StreetStickerBadge } from './GraphicElements';

export const FinalBrandBoard: React.FC = () => {
  return (
    <div className="bg-[#FDEFEB] rounded-3xl border-4 border-[#07334F] shadow-[8px_8px_0px_0px_#07334F] p-8 relative overflow-hidden">
      {/* Background Street Texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#07334F_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

      <div className="relative z-10 space-y-8">
        {/* Board Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-[#07334F] pb-6">
          <div>
            <div className="inline-block px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] text-xs font-black rounded-lg uppercase tracking-wider mb-2">
              SECTION 20 • MASTER SUMMARY BOARD
            </div>
            <h2 className="font-fun text-3xl sm:text-4xl font-black text-[#07334F]">
              DOH-NUT BRAND AT A GLANCE
            </h2>
            <p className="text-sm font-bold text-[#07334F]/75 mt-1">
              Complete Visual Identity System • Malaysian Street Dough With Attitude
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-4 py-2 bg-[#07334F] text-[#FDEFEB] font-display font-black text-xs rounded-2xl border-2 border-[#EF9FBD] shadow">
              EST. KUALA LUMPUR
            </span>
          </div>
        </div>

        {/* Bento Grid layout uniting all identity assets */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Master Logo (Span 5) */}
          <div className="md:col-span-5 bg-white p-6 rounded-3xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] flex flex-col justify-between items-center text-center">
            <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
              01 • MASTER LOGO BADGE
            </span>
            <div className="py-6">
              <DohNutLogo variant="primary" size={260} animated />
            </div>
            <div className="text-xs font-black text-[#07334F] bg-[#FDEFEB] px-4 py-1.5 rounded-full border border-[#07334F]">
              Red Arched Dome + Cyan Rim + 3D White Wordmark
            </div>
          </div>

          {/* Card 2: Doh Boy Mascot (Span 4) */}
          <div className="md:col-span-4 bg-[#EF9FBD]/30 p-6 rounded-3xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] flex flex-col justify-between items-center text-center">
            <span className="text-[10px] font-black tracking-widest text-[#07334F] uppercase">
              02 • DOH BOY MASCOT
            </span>
            <div className="py-4">
              <DohBoyMascot pose="hero" size={170} animated />
            </div>
            <div className="text-xs font-black text-[#07334F] bg-white px-4 py-1.5 rounded-full border border-[#07334F]">
              Pink Glaze + Rainbow Sprinkles + High-Tops
            </div>
          </div>

          {/* Card 3: Brand Voice & Attitude (Span 3) */}
          <div className="md:col-span-3 bg-[#07334F] p-6 rounded-3xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] text-[#FDEFEB] flex flex-col justify-between">
            <span className="text-[10px] font-black tracking-widest text-[#EF9FBD] uppercase">
              03 • BRAND VOICE
            </span>
            <div className="space-y-2 my-auto">
              <div className="font-fun text-xl font-black text-[#FFD23F] leading-tight">
                "DONUTS WITH ATTITUDE."
              </div>
              <p className="text-xs text-gray-300 font-medium leading-relaxed">
                Short, punchy, confident, cheeky Malaysian street energy.
              </p>
            </div>
            <div className="pt-3 border-t border-white/20 text-[10px] font-bold text-[#EF9FBD]">
              • GOOD DOUGH. BAD ATTITUDE.<br />
              • BITE FIRST. THINK LATER.
            </div>
          </div>

          {/* Card 4: Colour System Palette (Span 6) */}
          <div className="md:col-span-6 bg-white p-6 rounded-3xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
                04 • COLOUR SYSTEM
              </span>
              <span className="text-[10px] font-black text-[#D92F2F]">5 CORE HUES</span>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {BRAND_COLORS.map((c) => (
                <div key={c.id} className="text-center">
                  <div
                    className="h-16 rounded-2xl border-2 border-[#07334F] shadow-sm mb-1.5"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="text-[10px] font-black text-[#07334F] truncate">{c.name.split(' ')[0]}</div>
                  <div className="text-[9px] font-mono text-gray-500 font-bold">{c.hex}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 5: Typography Tokens (Span 6) */}
          <div className="md:col-span-6 bg-white p-6 rounded-3xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] flex flex-col justify-between">
            <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
              05 • TYPOGRAPHY SPECIMEN
            </span>
            <div className="space-y-1.5 my-2">
              <div className="font-fun text-2xl font-black text-[#D92F2F]">
                TITAN ONE / FREDOKA
              </div>
              <div className="font-sans text-sm font-extrabold text-[#07334F]">
                Plus Jakarta Sans (Subheads & Body)
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2 border-t-2 border-[#07334F]/10 text-xs font-bold text-[#07334F]">
              <span className="px-2 py-0.5 bg-[#FFD23F] rounded border border-[#07334F]">PRICE: RM 4.50</span>
              <span className="px-2 py-0.5 bg-[#297FC1] text-white rounded border border-[#07334F]">CHUNKY • ROUNDED</span>
            </div>
          </div>

          {/* Card 6: Packaging & Stickers Mini Showcase (Span 12) */}
          <div className="md:col-span-12 bg-white p-6 rounded-3xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
                06 • RETAIL PACKAGING & STICKER UNIVERSE
              </span>
              <span className="text-xs font-extrabold text-[#07334F]">
                Box • Sleeves • Die-Cuts • Streetwear
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="p-4 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center flex flex-col items-center justify-center">
                <DonutIcon size={56} />
                <span className="text-[11px] font-black text-[#07334F] mt-2">Glazed Doughs</span>
              </div>

              <div className="p-4 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center flex flex-col items-center justify-center">
                <StreetStickerBadge text="DOH!" bgColor="#FFD23F" textColor="#07334F" />
                <span className="text-[11px] font-black text-[#07334F] mt-2">Punch Stickers</span>
              </div>

              <div className="p-4 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center flex flex-col items-center justify-center">
                <StreetStickerBadge text="ONE MORE" bgColor="#297FC1" textColor="#FDEFEB" />
                <span className="text-[11px] font-black text-[#07334F] mt-2">Capsule Badges</span>
              </div>

              <div className="p-4 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] text-center flex flex-col items-center justify-center">
                <StarSpark size={44} color="#EF9FBD" />
                <span className="text-[11px] font-black text-[#07334F] mt-2">Street Sparks</span>
              </div>
            </div>
          </div>
        </div>

        {/* Board Footer Signoff */}
        <div className="pt-6 border-t-4 border-[#07334F] flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-[#07334F]">
          <div>
            © 2026 DOH-NUT ENTERPRISE. ALL RIGHTS RESERVED. MALAYSIAN STREET BRAND IDENTITY.
          </div>
          <div className="px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] font-black rounded-lg uppercase">
            VERSION 1.0 PRO
          </div>
        </div>
      </div>
    </div>
  );
};
