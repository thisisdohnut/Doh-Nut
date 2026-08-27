import React, { useState } from 'react';
import { DohNutLogo } from './DohNutLogo';
import { DohBoyMascot } from './DohBoyMascot';

export const MerchApplications: React.FC = () => {
  const [activeMerch, setActiveMerch] = useState<'tee' | 'cap' | 'tote' | 'keychain' | 'tumbler'>('tee');

  return (
    <div className="space-y-6">
      {/* Merch Selectors */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'tee', label: '1. Heavyweight Streetwear Tee' },
          { id: 'cap', label: '2. Embroidered Dad Cap' },
          { id: 'tote', label: '3. Canvas Shopper Tote' },
          { id: 'keychain', label: '4. Enamel Mascot Keychain' },
          { id: 'tumbler', label: '5. Stainless Steel Tumbler' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveMerch(item.id as any)}
            className={`px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-wider transition-all ${
              activeMerch === item.id
                ? 'bg-[#D92F2F] text-[#FDEFEB] border-2 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]'
                : 'bg-[#FDEFEB] text-[#07334F] border-2 border-[#07334F] hover:bg-[#EF9FBD]/40'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Merch Canvas Display */}
      <div className="bg-[#FDEFEB] p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] min-h-[440px] flex items-center justify-center relative overflow-hidden">
        {/* 1. STREETWEAR T-SHIRT */}
        {activeMerch === 'tee' && (
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <svg viewBox="0 0 320 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[280px] drop-shadow-2xl">
                {/* T-Shirt Silhouette (Cream / Deep Navy) */}
                <path
                  d="M100 40 Q 160 70 220 40 L300 100 L250 160 L210 130 L210 320 L110 320 L110 130 L70 160 L20 100 Z"
                  fill="#07334F"
                  stroke="#07334F"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                {/* Neck Ribbing */}
                <path d="M100 40 Q 160 70 220 40" stroke="#FDEFEB" strokeWidth="4" fill="none" />

                {/* Back / Front Graphic on Tee */}
                <g transform="translate(160, 180) scale(0.65)">
                  <DohBoyMascot pose="hero" size={160} />
                </g>

                <text x="160" y="270" textAnchor="middle" fill="#FDEFEB" fontSize="14" fontWeight="900" fontFamily="'Titan One', sans-serif" letterSpacing="1.5">
                  DONUTS WITH ATTITUDE
                </text>
                <text x="160" y="288" textAnchor="middle" fill="#EF9FBD" fontSize="9" fontWeight="800" letterSpacing="2">
                  MALAYSIA • EST. 2026
                </text>
              </svg>
            </div>

            <div className="w-full md:w-1/2 space-y-3">
              <div className="inline-block px-3 py-1 bg-[#07334F] text-[#FDEFEB] text-xs font-black rounded-lg uppercase tracking-wider">
                Merchandise Specs: Street Tee
              </div>
              <h3 className="text-2xl font-black text-[#07334F] font-display">260gsm Heavyweight Boxy Fit Tee</h3>
              <p className="text-sm text-[#07334F]/80 leading-relaxed">
                100% combed ring-spun cotton with drop-shoulder oversized streetwear silhouette. Features high-density screenprint on front chest and oversized back graphic with plastisol finish.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <div className="p-2.5 bg-white rounded-xl border-2 border-[#07334F]">
                  <span className="text-[10px] text-gray-500 font-bold block uppercase">Colorways</span>
                  <span className="font-extrabold text-[#07334F]">Deep Navy / Vintage Cream</span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border-2 border-[#07334F]">
                  <span className="text-[10px] text-gray-500 font-bold block uppercase">Print Process</span>
                  <span className="font-extrabold text-[#07334F]">5-Color Silk Screen</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. DAD CAP */}
        {activeMerch === 'cap' && (
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[260px] drop-shadow-2xl">
                {/* Cap Crown */}
                <path d="M40 140 C 40 50, 260 50, 260 140 Z" fill="#D92F2F" stroke="#07334F" strokeWidth="5" />
                {/* Cap Brim Visor */}
                <path d="M30 140 C 30 140, 60 190, 270 190 C 270 190, 270 140, 260 140 Z" fill="#B32424" stroke="#07334F" strokeWidth="5" />
                {/* Top Button */}
                <ellipse cx="150" cy="52" rx="10" ry="5" fill="#297FC1" stroke="#07334F" strokeWidth="2.5" />
                
                {/* Embroidered Patch */}
                <g transform="translate(150, 105) scale(0.6)">
                  <DohNutLogo variant="small" size={80} />
                </g>
              </svg>
            </div>

            <div className="w-full md:w-1/2 space-y-3">
              <div className="inline-block px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] text-xs font-black rounded-lg uppercase tracking-wider">
                Merchandise Specs: Strapback
              </div>
              <h3 className="text-2xl font-black text-[#07334F] font-display">6-Panel Unstructured Cotton Twill Cap</h3>
              <p className="text-sm text-[#07334F]/80 leading-relaxed">
                Classic vintage wash with brass buckle strap closure and 3D raised embroidery of the primary DN seal on center front.
              </p>
            </div>
          </div>
        )}

        {/* 3. CANVAS TOTE */}
        {activeMerch === 'tote' && (
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[240px] drop-shadow-2xl">
                {/* Tote Straps */}
                <path d="M90 100 C 90 20, 130 20, 130 100" stroke="#07334F" strokeWidth="10" fill="none" />
                <path d="M150 100 C 150 20, 190 20, 190 100" stroke="#07334F" strokeWidth="10" fill="none" />

                {/* Tote Body */}
                <rect x="50" y="100" width="180" height="210" rx="8" fill="#FDEFEB" stroke="#07334F" strokeWidth="5" />

                {/* Graphic on Tote */}
                <g transform="translate(140, 185) scale(0.58)">
                  <DohNutLogo variant="primary" size={220} />
                </g>

                <text x="140" y="275" textAnchor="middle" fill="#07334F" fontSize="10" fontWeight="900" letterSpacing="1.5" fontFamily="'Plus Jakarta Sans', sans-serif">
                  DONUTS WITH ATTITUDE
                </text>
              </svg>
            </div>

            <div className="w-full md:w-1/2 space-y-3">
              <div className="inline-block px-3 py-1 bg-[#297FC1] text-[#FDEFEB] text-xs font-black rounded-lg uppercase tracking-wider">
                Merchandise Specs: Tote
              </div>
              <h3 className="text-2xl font-black text-[#07334F] font-display">16oz Heavy Natural Canvas Tote</h3>
              <p className="text-sm text-[#07334F]/80 leading-relaxed">
                Reinforced cross-stitched handles and bottom gusset. High-durability screen print for grocery runs and street culture everyday carry.
              </p>
            </div>
          </div>
        )}

        {/* 4. KEYCHAIN */}
        {activeMerch === 'keychain' && (
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <svg viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px] drop-shadow-2xl">
                {/* Key Ring & Chain Links */}
                <circle cx="120" cy="40" r="22" stroke="#FFD23F" strokeWidth="6" fill="none" />
                <rect x="117" y="62" width="6" height="12" rx="3" fill="#FFD23F" stroke="#07334F" strokeWidth="1.5" />
                <rect x="117" y="76" width="6" height="12" rx="3" fill="#FFD23F" stroke="#07334F" strokeWidth="1.5" />

                {/* Hard Enamel Charm Mascot */}
                <g transform="translate(120, 180) scale(0.65)">
                  <DohBoyMascot pose="hero" size={180} />
                </g>
              </svg>
            </div>

            <div className="w-full md:w-1/2 space-y-3">
              <div className="inline-block px-3 py-1 bg-[#EF9FBD] text-[#07334F] text-xs font-black rounded-lg uppercase tracking-wider">
                Merchandise Specs: Keychain
              </div>
              <h3 className="text-2xl font-black text-[#07334F] font-display">Hard Enamel Gold-Plated Mascot Charm</h3>
              <p className="text-sm text-[#07334F]/80 leading-relaxed">
                Polished gold zinc alloy metal with vibrant recessed Pantone hard enamel color fills and epoxy protective dome.
              </p>
            </div>
          </div>
        )}

        {/* 5. TUMBLER */}
        {activeMerch === 'tumbler' && (
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <svg viewBox="0 0 200 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[160px] drop-shadow-2xl">
                {/* Tumbler Lid */}
                <rect x="50" y="30" width="100" height="20" rx="6" fill="#07334F" stroke="#07334F" strokeWidth="4" />
                {/* Tumbler Body */}
                <path d="M55 50 L65 300 L135 300 L145 50 Z" fill="#297FC1" stroke="#07334F" strokeWidth="5" />
                {/* Laser Engraved Logo on Tumbler */}
                <g transform="translate(100, 160) scale(0.4) rotate(-90)">
                  <DohNutLogo variant="horizontal" size={200} />
                </g>
              </svg>
            </div>

            <div className="w-full md:w-1/2 space-y-3">
              <div className="inline-block px-3 py-1 bg-[#297FC1] text-[#FDEFEB] text-xs font-black rounded-lg uppercase tracking-wider">
                Merchandise Specs: Tumbler
              </div>
              <h3 className="text-2xl font-black text-[#07334F] font-display">500ml Vacuum Insulated Stainless Flask</h3>
              <p className="text-sm text-[#07334F]/80 leading-relaxed">
                Double-wall 18/8 food-grade stainless steel with powder-coated matte finish and precision laser-etched DOH-NUT graphics.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
