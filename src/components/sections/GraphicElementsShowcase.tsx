import React, { useState } from 'react';
import {
  StarSpark,
  MiniSparkle,
  StreetArrow,
  CurvedArrowDoodle,
  OrganicBlob,
  WavyLineDoodle,
  SmileyBubble,
  BubbleCluster,
  HandDrawnAccents,
  DohLetteringBadge,
  DonutIcon,
  StreetStickerBadge,
  DripsGraphic
} from '../brand/GraphicElements';
import { DohBoyMascot } from '../brand/DohBoyMascot';
import { Sparkles, Layers, Sliders, Palette } from 'lucide-react';

export const GraphicElementsShowcase: React.FC = () => {
  const [activeCanvasBg, setActiveCanvasBg] = useState<string>('#FDEFEB');
  const [selectedStickerColor, setSelectedStickerColor] = useState<string>('#D92F2F');
  const [customBadgeText, setCustomBadgeText] = useState<string>('GOOD DOUGH');

  return (
    <div className="space-y-8">
      {/* Visual Header / Drips & Waves Spec Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] overflow-hidden space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-[#D92F2F] text-[#FDEFEB] rounded-xl font-display font-black text-xs border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
              GRAPHIC SPEC
            </span>
            <h3 className="font-fun text-xl sm:text-2xl font-black text-[#07334F]">
              DOH-NUT DISTINCT GRAPHIC LANGUAGE
            </h3>
          </div>
          <span className="text-[11px] font-black px-3 py-1 rounded-xl bg-[#FFD23F] text-[#07334F] border-2 border-[#07334F]">
            STREET & POP-FOOD AESTHETIC
          </span>
        </div>

        <p className="text-xs sm:text-sm font-bold text-[#07334F]/85 max-w-3xl leading-relaxed">
          The DOH-NUT visual identity combines bold Malaysian food culture, skate and street sticker aesthetics, and playful pop energy. Every graphic utilizes heavy 3.5pt–5pt Deep Navy outlines, rich warm colors, rounded contours, and expressive hand-drawn marks.
        </p>

        {/* Signature Glaze Drips & Wavy Ribbons */}
        <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] overflow-hidden space-y-2">
          <div className="text-[10px] font-black uppercase text-[#07334F] flex items-center justify-between">
            <span>Signature Glaze Drips & Wavy Ribbons</span>
            <span className="text-[#D92F2F]">Top & Bottom Edge Transitions</span>
          </div>
          <DripsGraphic color="#EF9FBD" />
          <DripsGraphic color="#D92F2F" className="-mt-3" />
        </div>
      </div>

      {/* Interactive Sticker & Motif Sandbox */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-3 border-[#07334F] pb-4">
          <div className="flex items-center gap-2">
            <Palette className="text-[#297FC1]" size={20} />
            <h4 className="font-fun text-xl font-black text-[#07334F]">
              Interactive Graphic Language Canvas
            </h4>
          </div>

          {/* Sandbox Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-[#07334F]">Canvas:</span>
              {[
                { hex: '#FDEFEB', name: 'Cream' },
                { hex: '#07334F', name: 'Navy' },
                { hex: '#D92F2F', name: 'Red' },
                { hex: '#297FC1', name: 'Cyan' },
                { hex: '#EF9FBD', name: 'Pink' }
              ].map((c) => (
                <button
                  key={c.hex}
                  onClick={() => setActiveCanvasBg(c.hex)}
                  title={c.name}
                  className={`w-6 h-6 rounded-full border-2 border-[#07334F] transition-transform ${
                    activeCanvasBg === c.hex ? 'scale-125 ring-2 ring-[#07334F]' : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-[#07334F]">Badge Fill:</span>
              {[
                { hex: '#D92F2F', name: 'Red' },
                { hex: '#297FC1', name: 'Cyan' },
                { hex: '#FFD23F', name: 'Yellow' },
                { hex: '#07334F', name: 'Navy' }
              ].map((c) => (
                <button
                  key={c.hex}
                  onClick={() => setSelectedStickerColor(c.hex)}
                  title={c.name}
                  className={`w-6 h-6 rounded-full border-2 border-[#07334F] transition-transform ${
                    selectedStickerColor === c.hex ? 'scale-125 ring-2 ring-[#07334F]' : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Live Graphic Artboard Canvas */}
        <div
          className="p-8 rounded-2xl border-3.5 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] min-h-[320px] flex flex-wrap items-center justify-around gap-6 relative overflow-hidden transition-colors"
          style={{ backgroundColor: activeCanvasBg }}
        >
          {/* Background Blobs */}
          <div className="absolute -top-10 -left-10 opacity-40 pointer-events-none">
            <OrganicBlob color="#EF9FBD" />
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-30 pointer-events-none">
            <OrganicBlob color="#297FC1" />
          </div>

          {/* Interactive motifs on canvas */}
          <div className="flex flex-col items-center gap-2 z-10">
            <DonutIcon size={72} glazeColor="#EF9FBD" />
            <span className="text-[10px] font-black uppercase text-[#07334F] bg-white/90 px-2 py-0.5 rounded border border-[#07334F]">
              Glaze Circle
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 z-10">
            <DohBoyMascot pose="happy" size={110} animated />
            <span className="text-[10px] font-black uppercase text-[#07334F] bg-white/90 px-2 py-0.5 rounded border border-[#07334F]">
              Doh Boy Smile
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 z-10">
            <SmileyBubble size={60} color="#FFD23F" />
            <span className="text-[10px] font-black uppercase text-[#07334F] bg-white/90 px-2 py-0.5 rounded border border-[#07334F]">
              Smiley Bubble
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 z-10">
            <StreetStickerBadge
              text={customBadgeText}
              subtext="ATTITUDE DEPT"
              bgColor={selectedStickerColor}
              textColor="#FDEFEB"
              rotation={-3}
            />
            <input
              type="text"
              value={customBadgeText}
              onChange={(e) => setCustomBadgeText(e.target.value.toUpperCase())}
              placeholder="Edit text..."
              className="text-[10px] font-black text-center w-28 px-2 py-0.5 rounded-lg border border-[#07334F] bg-white text-[#07334F]"
            />
          </div>

          <div className="flex flex-col items-center gap-2 z-10">
            <div className="flex items-center gap-2">
              <StarSpark size={36} color="#297FC1" />
              <MiniSparkle size={30} color="#FFD23F" />
              <HandDrawnAccents color="#07334F" />
            </div>
            <span className="text-[10px] font-black uppercase text-[#07334F] bg-white/90 px-2 py-0.5 rounded border border-[#07334F]">
              Sparks & Bursts
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 z-10">
            <DohLetteringBadge bgColor="#D92F2F" textColor="#FDEFEB" />
            <StreetArrow color="#297FC1" />
          </div>
        </div>
      </div>

      {/* Comprehensive Graphic Language Motifs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* 1. Thick Navy Outlines */}
        <div className="bg-white p-6 rounded-3xl border-4 border-[#07334F] shadow-[5px_5px_0px_0px_#07334F] space-y-3 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_0px_#07334F] transition-all">
          <div className="h-36 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] flex items-center justify-center grid-pattern-paper">
            <div className="px-5 py-2.5 bg-[#D92F2F] text-[#FDEFEB] font-fun text-xl rounded-2xl border-4 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] rotate-[-2deg]">
              3.5pt–5pt STROKES
            </div>
          </div>
          <h4 className="font-display font-black text-sm text-[#07334F] uppercase">
            1. Thick Navy Outlines
          </h4>
          <p className="text-xs text-[#07334F]/85 leading-relaxed font-bold">
            Every sticker, character, badge, and graphic shape must feature solid Deep Navy (<code className="font-mono text-[10px]">#07334F</code>) outlines to guarantee unmistakable street silhouette clarity.
          </p>
        </div>

        {/* 2. Star & Spark Shapes */}
        <div className="bg-white p-6 rounded-3xl border-4 border-[#07334F] shadow-[5px_5px_0px_0px_#07334F] space-y-3 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_0px_#07334F] transition-all">
          <div className="h-36 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] flex items-center justify-center gap-3 dot-pattern-paper">
            <StarSpark size={42} color="#297FC1" />
            <MiniSparkle size={38} color="#FFD23F" />
            <StarSpark size={46} color="#D92F2F" />
            <MiniSparkle size={28} color="#EF9FBD" />
          </div>
          <h4 className="font-display font-black text-sm text-[#07334F] uppercase">
            2. Stars, Sparks & Bursts
          </h4>
          <p className="text-xs text-[#07334F]/85 leading-relaxed font-bold">
            4-point geometric sparks, mini 4-lobe diamond sparkles, and starburst accents scatter around typography, photos, and price tags for energetic pop.
          </p>
        </div>

        {/* 3. Playful Arrows & Directional Marks */}
        <div className="bg-white p-6 rounded-3xl border-4 border-[#07334F] shadow-[5px_5px_0px_0px_#07334F] space-y-3 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_0px_#07334F] transition-all">
          <div className="h-36 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] flex items-center justify-center gap-4">
            <StreetArrow color="#D92F2F" />
            <CurvedArrowDoodle color="#297FC1" />
            <StreetArrow color="#07334F" className="rotate-[-45deg]" />
          </div>
          <h4 className="font-display font-black text-sm text-[#07334F] uppercase">
            3. Playful Street Arrows
          </h4>
          <p className="text-xs text-[#07334F]/85 leading-relaxed font-bold">
            Hand-drawn chunky directional arrows guide eye movement toward CTAs, glaze flavor drops, order counters, and QR codes.
          </p>
        </div>

        {/* 4. Organic Blobs & Dough Shapes */}
        <div className="bg-white p-6 rounded-3xl border-4 border-[#07334F] shadow-[5px_5px_0px_0px_#07334F] space-y-3 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_0px_#07334F] transition-all">
          <div className="h-36 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] flex items-center justify-center relative overflow-hidden">
            <OrganicBlob color="#EF9FBD" />
            <div className="absolute font-fun text-xs font-black text-[#07334F]">DOUGH SHAPES</div>
          </div>
          <h4 className="font-display font-black text-sm text-[#07334F] uppercase">
            4. Organic Dough Blobs
          </h4>
          <p className="text-xs text-[#07334F]/85 leading-relaxed font-bold">
            Imperfect, rising dough-inspired asymmetrical blobs provide organic framing behind photography, mascot stickers, and sale callouts.
          </p>
        </div>

        {/* 5. Donut-Inspired Circular Forms & Smileys */}
        <div className="bg-white p-6 rounded-3xl border-4 border-[#07334F] shadow-[5px_5px_0px_0px_#07334F] space-y-3 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_0px_#07334F] transition-all">
          <div className="h-36 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] flex items-center justify-center gap-3">
            <DonutIcon size={52} glazeColor="#EF9FBD" />
            <SmileyBubble size={48} color="#FFD23F" />
            <BubbleCluster color="#297FC1" />
          </div>
          <h4 className="font-display font-black text-sm text-[#07334F] uppercase">
            5. Donut Circles & Smileys
          </h4>
          <p className="text-xs text-[#07334F]/85 leading-relaxed font-bold">
            Concentric circular donut forms, glaze bubbles, and cheeky yellow smileys reflect joyful indulgence and youth snack culture.
          </p>
        </div>

        {/* 6. Hand-Drawn Accent Marks & Doodles */}
        <div className="bg-white p-6 rounded-3xl border-4 border-[#07334F] shadow-[5px_5px_0px_0px_#07334F] space-y-3 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_0px_#07334F] transition-all">
          <div className="h-36 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-3">
              <HandDrawnAccents color="#D92F2F" />
              <DohLetteringBadge bgColor="#07334F" textColor="#FFD23F" />
              <HandDrawnAccents color="#297FC1" />
            </div>
            <WavyLineDoodle color="#D92F2F" />
          </div>
          <h4 className="font-display font-black text-sm text-[#07334F] uppercase">
            6. Hand-Drawn Accent Marks & Doodles
          </h4>
          <p className="text-xs text-[#07334F]/85 leading-relaxed font-bold">
            Explosion speed lines, action doodles, wavy squiggles, and graffiti-style 'DOH!' tags inject vibrant street attitude into marketing collateral.
          </p>
        </div>
      </div>
    </div>
  );
};
