import React, { useState } from 'react';
import { DohNutLogo } from './DohNutLogo';
import { DohBoyMascot } from './DohBoyMascot';

export const SignageAndStore: React.FC = () => {
  const [activeSign, setActiveSign] = useState<'storefront' | 'menu' | 'aframe' | 'window'>('storefront');

  return (
    <div className="space-y-6">
      {/* Tab Selectors */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'storefront', label: '1. Storefront Lightbox Sign' },
          { id: 'menu', label: '2. Counter Menu Board' },
          { id: 'aframe', label: '3. Sidewalk A-Frame' },
          { id: 'window', label: '4. Window Decals & Graphics' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSign(tab.id as any)}
            className={`px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-wider transition-all ${
              activeSign === tab.id
                ? 'bg-[#D92F2F] text-[#FDEFEB] border-2 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]'
                : 'bg-[#FDEFEB] text-[#07334F] border-2 border-[#07334F] hover:bg-[#EF9FBD]/40'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mockup Canvas */}
      <div className="bg-[#FDEFEB] p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] min-h-[460px] flex items-center justify-center relative overflow-hidden">
        {/* 1. STOREFRONT LIGHTBOX SIGN */}
        {activeSign === 'storefront' && (
          <div className="w-full max-w-2xl bg-[#07334F] rounded-3xl border-4 border-[#07334F] p-8 shadow-2xl flex flex-col items-center relative overflow-hidden">
            {/* Storefront Façade Wall texture */}
            <div className="w-full h-12 bg-[#297FC1]/20 border-b-4 border-[#07334F] flex items-center justify-around mb-6">
              <span className="text-[10px] text-[#FDEFEB]/50 font-bold uppercase tracking-widest">
                KUALA LUMPUR FLAGSHIP OUTLET
              </span>
            </div>

            {/* Huge Glowing 3D Acrylic Lightbox Logo */}
            <div className="p-6 bg-[#D92F2F] rounded-[48px] border-4 border-[#297FC1] shadow-[0_0_40px_rgba(41,127,193,0.6),0_8px_0_0_#07334F] relative group cursor-pointer transition-transform hover:scale-105">
              <DohNutLogo variant="primary" size={320} />
            </div>

            {/* Glowing Open Sign & Hours */}
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2 px-4 py-1.5 bg-[#FFD23F] rounded-full border-2 border-[#07334F] shadow">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D92F2F] animate-ping" />
                <span className="text-xs font-black text-[#07334F]">OPEN DAILY: 10AM - 10PM</span>
              </div>
              <div className="text-xs font-bold text-[#FDEFEB]">
                HOT DONUTS EVERY 30 MINS
              </div>
            </div>
          </div>
        )}

        {/* 2. COUNTER MENU BOARD */}
        {activeSign === 'menu' && (
          <div className="w-full max-w-2xl bg-[#FDEFEB] rounded-3xl border-4 border-[#07334F] p-6 shadow-2xl">
            {/* Header with logo & title */}
            <div className="flex justify-between items-center border-b-4 border-[#07334F] pb-4 mb-4">
              <div>
                <h3 className="font-fun text-3xl font-black text-[#D92F2F]">
                  DOH-NUT MENU
                </h3>
                <p className="text-xs font-bold text-[#07334F] tracking-wide">
                  FRESH ARTISAN DOUGH • FRIED HOURLY
                </p>
              </div>
              <DohNutLogo variant="compact" size={80} />
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Column 1: Signatures */}
              <div className="space-y-2.5">
                <div className="px-3 py-1 bg-[#07334F] text-[#FDEFEB] text-xs font-black rounded-lg uppercase tracking-wider">
                  Signature Doughs
                </div>
                {[
                  { name: 'OG Honey Glaze', desc: 'Classic golden honey crystal dip', price: 'RM 4.50' },
                  { name: 'Strawberry Bomb (Doh Boy)', desc: 'Strawberry cream + rainbow crunch', price: 'RM 5.50' },
                  { name: 'Ondeh-Ondeh Magic', desc: 'Gula Melaka lava + toasted coconut', price: 'RM 6.00' },
                  { name: 'Dark Choco Ganache', desc: '70% Belgian chocolate dip', price: 'RM 5.50' },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-center p-2 rounded-xl bg-white border-2 border-[#07334F]">
                    <div>
                      <div className="text-xs font-black text-[#07334F]">{item.name}</div>
                      <div className="text-[10px] text-gray-500 font-medium">{item.desc}</div>
                    </div>
                    <span className="font-black text-xs text-[#D92F2F] px-2 py-0.5 bg-[#FDEFEB] rounded border border-[#07334F]">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 2: Boxes & Drinks */}
              <div className="space-y-2.5">
                <div className="px-3 py-1 bg-[#297FC1] text-[#FDEFEB] text-xs font-black rounded-lg uppercase tracking-wider">
                  Combo Boxes & Cold Drinks
                </div>
                {[
                  { name: 'Box of 6 (Half Dozen)', desc: 'Pick any 6 artisanal flavours', price: 'RM 28.00' },
                  { name: 'Party Box of 12', desc: 'Full dozen with party sprinkles', price: 'RM 52.00' },
                  { name: 'Kopi Cham Cold Brew', desc: 'Traditional Malaysian iced roast', price: 'RM 8.50' },
                  { name: 'Pink Berry Fizz', desc: 'Sparkling strawberry lemonade', price: 'RM 7.90' },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-center p-2 rounded-xl bg-white border-2 border-[#07334F]">
                    <div>
                      <div className="text-xs font-black text-[#07334F]">{item.name}</div>
                      <div className="text-[10px] text-gray-500 font-medium">{item.desc}</div>
                    </div>
                    <span className="font-black text-xs text-[#07334F] px-2 py-0.5 bg-[#EF9FBD]/40 rounded border border-[#07334F]">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. SIDEWALK A-FRAME */}
        {activeSign === 'aframe' && (
          <div className="flex flex-col items-center">
            <div className="w-72 bg-[#07334F] rounded-3xl border-4 border-[#07334F] p-6 shadow-2xl text-center relative overflow-hidden">
              {/* Wooden leg tops */}
              <div className="w-12 h-3 bg-[#E8B072] mx-auto rounded-t border-2 border-[#07334F] -mt-6 mb-4" />
              
              <DohBoyMascot pose="happy" size={110} />

              <div className="mt-4 font-fun text-2xl font-black text-[#FDEFEB] leading-tight">
                YOU CAN'T BUY HAPPINESS.
              </div>
              <div className="font-fun text-2xl font-black text-[#FFD23F] mt-1">
                BUT YOU CAN BUY DOH-NUTS!
              </div>

              <div className="mt-4 inline-block px-4 py-1.5 bg-[#D92F2F] text-[#FDEFEB] font-extrabold text-xs rounded-xl border-2 border-[#FDEFEB]">
                HOT BATCH READY NOW ⬇
              </div>
            </div>
            {/* A-frame legs */}
            <div className="flex justify-between w-64 -mt-2">
              <div className="w-4 h-12 bg-[#E8B072] border-2 border-[#07334F]" />
              <div className="w-4 h-12 bg-[#E8B072] border-2 border-[#07334F]" />
            </div>
          </div>
        )}

        {/* 4. WINDOW DECALS */}
        {activeSign === 'window' && (
          <div className="w-full max-w-xl h-80 rounded-3xl border-4 border-[#07334F] bg-[linear-gradient(135deg,rgba(41,127,193,0.2)_0%,rgba(239,159,189,0.2)_100%)] p-6 relative flex items-center justify-between overflow-hidden shadow-inner">
            <div className="absolute top-4 left-6 text-xs font-black text-[#07334F] uppercase tracking-wider">
              [ Clear Storefront Glass Simulation ]
            </div>

            {/* Left Decal */}
            <div className="p-4 bg-white/80 backdrop-blur-sm rounded-3xl border-3 border-[#07334F] shadow-lg rotate-[-4deg]">
              <DohNutLogo variant="compact" size={120} />
            </div>

            {/* Center Motto */}
            <div className="text-center bg-white/90 backdrop-blur-sm px-6 py-4 rounded-3xl border-3 border-[#07334F] shadow-lg">
              <div className="font-fun text-2xl font-black text-[#D92F2F]">
                BITE INTO FUN
              </div>
              <div className="text-xs font-black text-[#07334F]">
                MALAYSIAN STREET DOUGH
              </div>
            </div>

            {/* Right Mascot Decal */}
            <div className="p-2 bg-white/80 backdrop-blur-sm rounded-3xl border-3 border-[#07334F] shadow-lg rotate-[4deg]">
              <DohBoyMascot pose="waving" size={110} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
