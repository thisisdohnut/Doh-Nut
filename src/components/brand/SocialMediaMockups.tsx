import React, { useState } from 'react';
import { DohNutLogo } from './DohNutLogo';
import { DohBoyMascot } from './DohBoyMascot';
import { DonutIcon, StarSpark } from './GraphicElements';

export const SocialMediaMockups: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'story' | 'promo' | 'drop'>('feed');

  return (
    <div className="space-y-6">
      {/* Platform Switcher */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'feed', label: '1. Instagram Post (1:1)', desc: 'Grid Campaign' },
          { id: 'story', label: '2. IG Story / TikTok (9:16)', desc: 'Vertical Video & Stories' },
          { id: 'promo', label: '3. Promo: Buy 5 Free 1', desc: 'Campaign Announcement' },
          { id: 'drop', label: '4. Flavour Drop: Ondeh-Ondeh', desc: 'Malaysian Special' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all text-left ${
              activeTab === tab.id
                ? 'bg-[#D92F2F] text-[#FDEFEB] border-2 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]'
                : 'bg-[#FDEFEB] text-[#07334F] border-2 border-[#07334F] hover:bg-[#EF9FBD]/40'
            }`}
          >
            <div className="font-display">{tab.label}</div>
            <div className={`text-[10px] font-medium ${activeTab === tab.id ? 'text-[#FDEFEB]/80' : 'text-[#07334F]/60'}`}>
              {tab.desc}
            </div>
          </button>
        ))}
      </div>

      {/* Mockup Canvas */}
      <div className="bg-[#07334F] p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] flex items-center justify-center min-h-[460px]">
        {/* 1. INSTAGRAM FEED POST (1:1) */}
        {activeTab === 'feed' && (
          <div className="w-full max-w-sm aspect-square bg-[#FDEFEB] rounded-3xl border-4 border-[#07334F] p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#D92F2F] border-2 border-[#07334F] flex items-center justify-center font-display font-black text-xs text-[#FDEFEB]">
                  DN
                </div>
                <div>
                  <div className="text-xs font-black text-[#07334F]">dohnut.my</div>
                  <div className="text-[9px] text-[#07334F]/70 font-bold">Kuala Lumpur, Malaysia</div>
                </div>
              </div>
              <span className="px-2 py-0.5 bg-[#297FC1] text-[#FDEFEB] text-[9px] font-black rounded-full border border-[#07334F]">
                OFFICIAL
              </span>
            </div>

            {/* Visual Center */}
            <div className="my-auto text-center relative z-10 flex flex-col items-center">
              <div className="relative">
                <DohBoyMascot pose="hero" size={150} />
                <div className="absolute -top-4 -right-8">
                  <StarSpark size={40} color="#FFD23F" />
                </div>
              </div>
              <div className="mt-2">
                <h3 className="font-fun text-3xl font-black text-[#D92F2F] leading-tight">
                  GOOD DOUGH.
                </h3>
                <h4 className="font-fun text-2xl font-black text-[#07334F]">
                  BAD ATTITUDE.
                </h4>
              </div>
            </div>

            {/* Bottom Footer Callout */}
            <div className="flex items-center justify-between border-t-2 border-[#07334F] pt-3 z-10">
              <span className="text-[11px] font-extrabold text-[#07334F]">
                🍩 Tag us @dohnut.my
              </span>
              <span className="px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] text-[10px] font-black rounded-xl border border-[#07334F]">
                GRAB YOUR BOX
              </span>
            </div>

            {/* Background Blob Decor */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#EF9FBD] opacity-50 -z-0" />
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#297FC1] opacity-30 -z-0" />
          </div>
        )}

        {/* 2. INSTAGRAM STORY / TIKTOK (9:16) */}
        {activeTab === 'story' && (
          <div className="w-full max-w-[280px] h-[500px] bg-[#D92F2F] rounded-3xl border-4 border-[#07334F] p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Story Top Header */}
            <div className="flex items-center gap-2 z-10">
              <div className="w-7 h-7 rounded-full bg-[#FDEFEB] border-2 border-[#07334F] flex items-center justify-center font-display font-black text-[10px] text-[#D92F2F]">
                DN
              </div>
              <span className="text-xs font-black text-[#FDEFEB]">dohnut.my</span>
              <span className="text-[10px] text-[#FDEFEB]/70">2h ago</span>
            </div>

            {/* Center Story Content */}
            <div className="text-center my-auto z-10 flex flex-col items-center space-y-3">
              <div className="px-4 py-1.5 bg-[#FFD23F] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] rotate-[-3deg]">
                <span className="font-fun text-xl font-black text-[#07334F]">
                  TODAY'S SPECIAL
                </span>
              </div>

              <div className="relative">
                <DohBoyMascot pose="eating" size={170} />
              </div>

              <div className="bg-[#07334F] text-[#FDEFEB] px-5 py-2.5 rounded-2xl border-2 border-[#EF9FBD] shadow-lg">
                <div className="font-fun text-xl font-black text-[#EF9FBD]">
                  HOT GLAZED DROP!
                </div>
                <div className="text-[10px] font-bold text-gray-200 mt-0.5">
                  Available at Bukit Bintang outlet
                </div>
              </div>
            </div>

            {/* Story Interactive Swipe Up / Link Pill */}
            <div className="z-10 bg-[#FDEFEB] border-3 border-[#07334F] rounded-2xl py-2 px-4 text-center shadow-[3px_3px_0px_0px_#07334F]">
              <span className="text-xs font-black text-[#07334F] uppercase tracking-wider">
                👆 Tap to Order Now
              </span>
            </div>

            {/* Background Sprinkles floating */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FDEFEB_2px,transparent_2px)] [background-size:20px_20px]" />
          </div>
        )}

        {/* 3. PROMOTIONAL POST */}
        {activeTab === 'promo' && (
          <div className="w-full max-w-sm aspect-square bg-[#297FC1] rounded-3xl border-4 border-[#07334F] p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Promo Header */}
            <div className="flex justify-between items-center z-10">
              <DohNutLogo variant="horizontal" size={180} />
              <div className="px-3 py-1 bg-[#FFD23F] text-[#07334F] font-black text-xs rounded-full border-2 border-[#07334F]">
                LIMITED TIME
              </div>
            </div>

            {/* Main Promo Offer */}
            <div className="text-center my-auto z-10">
              <div className="font-fun text-5xl font-black text-[#FDEFEB] drop-shadow-[4px_4px_0px_#07334F] leading-none">
                BUY 5 FREE 1
              </div>
              <div className="mt-3 inline-block px-4 py-1.5 bg-[#D92F2F] text-[#FDEFEB] font-display font-black text-base rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]">
                BOX OF HAPPINESS 🍩
              </div>
            </div>

            {/* Promo Terms */}
            <div className="bg-[#FDEFEB] p-3 rounded-2xl border-3 border-[#07334F] flex items-center justify-between z-10">
              <span className="text-[10px] font-extrabold text-[#07334F]">
                Valid for dine-in & takeaway across all outlets
              </span>
              <span className="font-black text-xs text-[#D92F2F]">CODE: DOH5</span>
            </div>
          </div>
        )}

        {/* 4. FLAVOUR DROP */}
        {activeTab === 'drop' && (
          <div className="w-full max-w-sm aspect-square bg-[#FDEFEB] rounded-3xl border-4 border-[#07334F] p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between items-center z-10">
              <span className="px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] font-black text-xs rounded-full border-2 border-[#07334F]">
                🇲🇾 MALAYSIAN HERITAGE DROP
              </span>
              <span className="text-xs font-black text-[#07334F]">SERIES 01</span>
            </div>

            <div className="text-center my-auto z-10">
              <div className="inline-block p-4 bg-[#297FC1]/15 rounded-full border-3 border-[#07334F] mb-2">
                <DonutIcon size={80} glazeColor="#48BB78" />
              </div>
              <div className="font-fun text-3xl font-black text-[#07334F]">
                ONDEH-ONDEH BOMB
              </div>
              <div className="text-xs font-bold text-[#D92F2F] mt-1">
                Pandan Glaze • Gula Melaka Core • Desiccated Coconut
              </div>
            </div>

            <div className="flex items-center justify-between border-t-2 border-[#07334F] pt-3 z-10">
              <span className="text-sm font-black text-[#07334F]">RM 6.50 / piece</span>
              <span className="px-4 py-1.5 bg-[#07334F] text-[#FDEFEB] font-black text-xs rounded-xl">
                TRY IT TODAY
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
