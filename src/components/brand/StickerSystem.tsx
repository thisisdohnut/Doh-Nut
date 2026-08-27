import React, { useState } from 'react';
import { DohNutLogo } from './DohNutLogo';
import { DohBoyMascot } from './DohBoyMascot';
import { StarSpark, DonutIcon } from './GraphicElements';
import { DohNutCameraStudio } from './DohNutCameraStudio';
import { MoodboardBuilder } from './MoodboardBuilder';
import { Camera, Tag, Sparkles, Palette } from 'lucide-react';

export const StickerSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'camera' | 'sheet' | 'moodboard'>('moodboard');
  const [copiedSticker, setCopiedSticker] = useState<string | null>(null);

  const handleCopy = (id: string, name: string) => {
    setCopiedSticker(name);
    setTimeout(() => setCopiedSticker(null), 2000);
  };

  const stickers = [
    {
      id: 'st-1',
      name: 'Master Logo Die-Cut',
      shape: 'Die-cut badge with 4mm white border',
      component: <DohNutLogo variant="primary" size={170} />
    },
    {
      id: 'st-2',
      name: 'Doh Boy Waving Mascot',
      shape: 'Contour die-cut',
      component: <DohBoyMascot pose="waving" size={130} />
    },
    {
      id: 'st-3',
      name: 'Glazed Pink Donut',
      shape: 'Circular die-cut',
      component: (
        <div className="p-2 bg-white rounded-full border-4 border-[#07334F] shadow-lg">
          <DonutIcon size={90} />
        </div>
      )
    },
    {
      id: 'st-4',
      name: '"DOH!" Punch Sticker',
      shape: 'Organic Comic Blob',
      component: (
        <div className="px-6 py-4 bg-[#FFD23F] rounded-3xl border-4 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] rotate-[-4deg]">
          <span className="font-fun text-4xl font-black text-[#D92F2F] drop-shadow-[2px_2px_0px_#07334F]">
            DOH!
          </span>
        </div>
      )
    },
    {
      id: 'st-5',
      name: '"ONE MORE" Pill',
      shape: 'Rounded Capsule Badge',
      component: (
        <div className="px-6 py-3 bg-[#297FC1] rounded-full border-4 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] rotate-[3deg]">
          <span className="font-display text-lg font-black text-[#FDEFEB] tracking-widest uppercase">
            ★ JUST ONE MORE ★
          </span>
        </div>
      )
    },
    {
      id: 'st-6',
      name: '"DONUTS WITH ATTITUDE"',
      shape: 'Street Tag Rectangle',
      component: (
        <div className="px-5 py-3 bg-[#07334F] rounded-2xl border-4 border-[#EF9FBD] shadow-[4px_4px_0px_0px_#07334F] rotate-[-2deg]">
          <span className="font-display text-sm font-black text-[#FDEFEB] tracking-wider uppercase block text-center">
            DONUTS WITH ATTITUDE
          </span>
          <span className="text-[9px] font-extrabold text-[#EF9FBD] tracking-widest block text-center mt-0.5">
            EST. MALAYSIA
          </span>
        </div>
      )
    },
    {
      id: 'st-7',
      name: 'Electric Starburst',
      shape: 'Star Die-Cut',
      component: (
        <div className="p-3 bg-[#EF9FBD] rounded-3xl border-4 border-[#07334F] shadow-lg rotate-[12deg]">
          <StarSpark size={60} color="#FDEFEB" />
        </div>
      )
    },
    {
      id: 'st-8',
      name: 'Doh Boy Avatar Face',
      shape: 'Round Avatar Stamp',
      component: <DohBoyMascot pose="avatar" size={110} />
    }
  ];

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {copiedSticker && (
        <div className="fixed top-6 right-6 z-50 bg-[#07334F] text-[#FDEFEB] px-5 py-3 rounded-2xl border-2 border-[#EF9FBD] shadow-2xl flex items-center gap-3 animate-bounce">
          <span className="text-xl">✨</span>
          <span className="text-sm font-bold">Copied asset reference: {copiedSticker}!</span>
        </div>
      )}

      {/* Top View Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F]">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTab('moodboard')}
            className={`px-4 py-2.5 rounded-xl font-fun text-sm font-black border-2 border-[#07334F] transition-all flex items-center gap-2 ${
              activeTab === 'moodboard'
                ? 'bg-[#FFD23F] text-[#07334F] shadow-[2px_2px_0px_0px_#07334F]'
                : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#FFD23F]'
            }`}
          >
            <Palette size={16} className="text-[#D92F2F]" /> 🎨 Moodboard Builder & Infinite Studio
          </button>
          <button
            onClick={() => setActiveTab('camera')}
            className={`px-4 py-2.5 rounded-xl font-fun text-sm font-black border-2 border-[#07334F] transition-all flex items-center gap-2 ${
              activeTab === 'camera'
                ? 'bg-[#D92F2F] text-[#FDEFEB] shadow-[2px_2px_0px_0px_#07334F]'
                : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#FFD23F]'
            }`}
          >
            <Camera size={16} /> 📸 AR Photobooth & Try-On
          </button>
          <button
            onClick={() => setActiveTab('sheet')}
            className={`px-4 py-2.5 rounded-xl font-fun text-sm font-black border-2 border-[#07334F] transition-all flex items-center gap-2 ${
              activeTab === 'sheet'
                ? 'bg-[#297FC1] text-[#FDEFEB] shadow-[2px_2px_0px_0px_#07334F]'
                : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#FFD23F]'
            }`}
          >
            <Tag size={16} /> 🏷️ Sticker Sheet & Specs
          </button>
        </div>

        <span className="text-xs font-bold text-[#07334F]/80 hidden sm:flex items-center gap-1">
          <Sparkles size={14} className="text-[#FFD23F]" />
          Infinite Drag & Drop Brand Canvas
        </span>
      </div>

      {/* View Content */}
      {activeTab === 'moodboard' ? (
        <MoodboardBuilder />
      ) : activeTab === 'camera' ? (
        <DohNutCameraStudio />
      ) : (
        /* Interactive Sticker Sheet Canvas */
        <div className="bg-[#297FC1]/15 p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] relative overflow-hidden">
          {/* Decorative Grid Lines */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#07334F_1px,transparent_1px),linear-gradient(to_bottom,#07334F_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {stickers.map((st) => (
              <div
                key={st.id}
                onClick={() => handleCopy(st.id, st.name)}
                className="group cursor-pointer bg-[#FDEFEB] p-5 rounded-2xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] hover:shadow-[6px_6px_0px_0px_#07334F] hover:-translate-y-1.5 transition-all flex flex-col items-center justify-between min-h-[220px]"
              >
                {/* Sticker Graphic Container */}
                <div className="my-auto flex items-center justify-center transition-transform group-hover:scale-110">
                  {st.component}
                </div>

                {/* Sticker Info */}
                <div className="w-full text-center mt-3 pt-2 border-t-2 border-[#07334F]/20">
                  <span className="text-xs font-black text-[#07334F] block tracking-wide">
                    {st.name}
                  </span>
                  <span className="text-[10px] text-[#07334F]/70 font-semibold block">
                    {st.shape}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Sticker Sheet Production Notes */}
          <div className="mt-8 pt-6 border-t-3 border-[#07334F] flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-[#07334F]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#D92F2F] border border-[#07334F]" />
              <span>Vinyl Material: 100μm High-Tack Waterproof UV-Proof Gloss Vinyl</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#297FC1] border border-[#07334F]" />
              <span>Cut Line: 0.5pt Kiss-Cut with 3mm Bleed Clearance</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
