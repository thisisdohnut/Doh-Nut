import React, { useState } from 'react';
import { DohNutLogo } from './DohNutLogo';
import { DohBoyMascot } from './DohBoyMascot';

export const PackagingMockups: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('box');

  const packagingItems = [
    { id: 'box', label: '6-Pack Donut Box', tag: 'Hero Packaging' },
    { id: 'sleeve', label: 'Single Donut Bag', tag: 'Street Grab & Go' },
    { id: 'cup', label: 'Beverage Cup', tag: 'Iced Drinks / Boba' },
    { id: 'kraft', label: 'Paper Takeaway Bag', tag: 'Retail Carry' },
    { id: 'tissue', label: 'Greaseproof Tissue', tag: 'Liner & Wrap' },
    { id: 'delivery', label: 'Delivery Pack & Seal', tag: 'Tamper-Evident' },
  ];

  return (
    <div className="space-y-6">
      {/* Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {packagingItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeItem === item.id
                ? 'bg-[#D92F2F] text-[#FDEFEB] border-2 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]'
                : 'bg-[#FDEFEB] text-[#07334F] border-2 border-[#07334F] hover:bg-[#EF9FBD]/40'
            }`}
          >
            <span>{item.label}</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeItem === item.id ? 'bg-[#07334F] text-[#FDEFEB]' : 'bg-[#07334F]/10 text-[#07334F]'}`}>
              {item.tag}
            </span>
          </button>
        ))}
      </div>

      {/* Mockup Display Box */}
      <div className="bg-[#FDEFEB] rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] p-8 min-h-[420px] flex items-center justify-center relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#07334F_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* 1. 6-PACK DONUT BOX */}
        {activeItem === 'box' && (
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full">
            {/* Box 3D Isometric View */}
            <div className="w-full md:w-1/2 flex justify-center">
              <svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[340px] drop-shadow-2xl">
                {/* Box Base (Red #D92F2F) */}
                <path d="M40 80 L180 20 L320 80 L180 140 Z" fill="#D92F2F" stroke="#07334F" strokeWidth="4.5" />
                <path d="M40 80 L40 190 L180 250 L180 140 Z" fill="#B32424" stroke="#07334F" strokeWidth="4.5" />
                <path d="M180 140 L180 250 L320 190 L320 80 Z" fill="#D92F2F" stroke="#07334F" strokeWidth="4.5" />

                {/* Box Top Window (Cream / Die-cut) */}
                <path d="M100 80 L180 46 L260 80 L180 114 Z" fill="#FDEFEB" stroke="#07334F" strokeWidth="3.5" />
                
                {/* Donuts visible through window */}
                <circle cx="150" cy="72" r="14" fill="#E8B072" stroke="#07334F" strokeWidth="2" />
                <circle cx="150" cy="72" r="6" fill="#EF9FBD" />
                <circle cx="180" cy="82" r="14" fill="#E8B072" stroke="#07334F" strokeWidth="2" />
                <circle cx="180" cy="82" r="6" fill="#297FC1" />
                <circle cx="210" cy="72" r="14" fill="#E8B072" stroke="#07334F" strokeWidth="2" />
                <circle cx="210" cy="72" r="6" fill="#D92F2F" />

                {/* Box Front Face Graphics */}
                <g transform="translate(60, 160) skewY(22) scale(0.65)">
                  <rect x="0" y="0" width="160" height="40" rx="20" fill="#297FC1" stroke="#07334F" strokeWidth="3" />
                  <text x="80" y="27" textAnchor="middle" fill="#FDEFEB" fontSize="22" fontWeight="900" fontFamily="'Titan One', sans-serif">
                    DOH-NUT
                  </text>
                </g>

                {/* Right Face Graphics */}
                <g transform="translate(200, 220) skewY(-22) scale(0.6)">
                  <text x="0" y="0" fill="#FDEFEB" fontSize="14" fontWeight="800" fontFamily="'Plus Jakarta Sans', sans-serif">
                    DONUTS WITH ATTITUDE
                  </text>
                  <text x="0" y="20" fill="#EF9FBD" fontSize="11" fontWeight="700">
                    6x FRESH ARTISAN DOUGHS
                  </text>
                </g>

                {/* Corner Sticker Stamp */}
                <g transform="translate(260, 40) rotate(15)">
                  <circle cx="20" cy="20" r="22" fill="#FFD23F" stroke="#07334F" strokeWidth="3" />
                  <text x="20" y="19" textAnchor="middle" fill="#07334F" fontSize="8" fontWeight="900" fontFamily="'Titan One', sans-serif">FRESH</text>
                  <text x="20" y="28" textAnchor="middle" fill="#07334F" fontSize="7" fontWeight="800">DAILY</text>
                </g>
              </svg>
            </div>

            {/* Specifications Details */}
            <div className="w-full md:w-1/2 space-y-3">
              <div className="inline-block px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] text-xs font-black rounded-lg uppercase tracking-wider">
                Production Specs: 6-Pack Box
              </div>
              <h3 className="text-2xl font-black text-[#07334F] font-display">DOH-NUT Half-Dozen Master Carton</h3>
              <p className="text-sm text-[#07334F]/80 leading-relaxed">
                Constructed from 350gsm food-grade SBS bleached board with matte dispersion varnish. Features an organic scalloped transparent PET viewing window and reinforced auto-lock bottom.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <div className="p-2.5 bg-white rounded-xl border-2 border-[#07334F]">
                  <span className="text-[10px] text-gray-500 font-bold block uppercase">Dimensions</span>
                  <span className="font-extrabold text-[#07334F]">320 × 220 × 85 mm</span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border-2 border-[#07334F]">
                  <span className="text-[10px] text-gray-500 font-bold block uppercase">Colorway</span>
                  <span className="font-extrabold text-[#07334F]">DOH-NUT Red / Navy / Cream</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. SINGLE DONUT BAG / SLEEVE */}
        {activeItem === 'sleeve' && (
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[260px] drop-shadow-xl">
                {/* Glassine / Bag body */}
                <path d="M30 40 L250 40 L230 300 L50 300 Z" fill="#FDEFEB" stroke="#07334F" strokeWidth="4.5" />
                {/* Wavy zig-zag top edge */}
                <path d="M30 40 L40 30 L50 40 L60 30 L70 40 L80 30 L90 40 L100 30 L110 40 L120 30 L130 40 L140 30 L150 40 L160 30 L170 40 L180 30 L190 40 L200 30 L210 40 L220 30 L230 40 L240 30 L250 40" stroke="#07334F" strokeWidth="3" fill="none" />
                
                {/* Giant Red Badge printed on sleeve */}
                <g transform="translate(140, 160) scale(0.65)">
                  <DohNutLogo variant="primary" size={240} />
                </g>

                {/* Bottom cheeky motto */}
                <text x="140" y="270" textAnchor="middle" fill="#07334F" fontSize="10" fontWeight="900" letterSpacing="1.5" fontFamily="'Plus Jakarta Sans', sans-serif">
                  BITE FIRST. THINK LATER.
                </text>
              </svg>
            </div>

            <div className="w-full md:w-1/2 space-y-3">
              <div className="inline-block px-3 py-1 bg-[#297FC1] text-[#FDEFEB] text-xs font-black rounded-lg uppercase tracking-wider">
                Production Specs: Single Sleeve
              </div>
              <h3 className="text-2xl font-black text-[#07334F] font-display">Street Donut Glassine Pouch</h3>
              <p className="text-sm text-[#07334F]/80 leading-relaxed">
                60gsm greaseproof unbleached micro-perforated food paper. Perfect for street food hand-to-mouth eating with zero oily bleed-through. Flexographic 2-color print.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <div className="p-2.5 bg-white rounded-xl border-2 border-[#07334F]">
                  <span className="text-[10px] text-gray-500 font-bold block uppercase">Dimensions</span>
                  <span className="font-extrabold text-[#07334F]">140 × 160 mm</span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border-2 border-[#07334F]">
                  <span className="text-[10px] text-gray-500 font-bold block uppercase">Finish</span>
                  <span className="font-extrabold text-[#07334F]">Grease-Resistant Matte</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. BEVERAGE CUP */}
        {activeItem === 'cup' && (
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <svg viewBox="0 0 280 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[240px] drop-shadow-2xl">
                {/* Clear dome lid */}
                <ellipse cx="140" cy="50" rx="90" ry="25" fill="#297FC1" opacity="0.4" stroke="#07334F" strokeWidth="4" />
                <path d="M70 50 C 70 20, 210 20, 210 50" stroke="#07334F" strokeWidth="4" fill="none" />
                {/* Straw */}
                <rect x="135" y="10" width="10" height="70" rx="5" fill="#D92F2F" stroke="#07334F" strokeWidth="2.5" transform="rotate(10 140 40)" />

                {/* Cup Body (Tapered) */}
                <path d="M55 55 L75 320 L205 320 L225 55 Z" fill="#FDEFEB" stroke="#07334F" strokeWidth="5" />

                {/* Kraft / Cyan Corrugated Sleeve */}
                <path d="M63 130 L70 230 L210 230 L217 130 Z" fill="#297FC1" stroke="#07334F" strokeWidth="4" />
                
                {/* Logo on sleeve */}
                <g transform="translate(140, 180) scale(0.48)">
                  <DohNutLogo variant="compact" size={160} />
                </g>

                {/* Boba / Coffee liquid lines */}
                <path d="M76 270 Q 140 280 204 270 L205 315 L75 315 Z" fill="#EF9FBD" opacity="0.85" />
              </svg>
            </div>

            <div className="w-full md:w-1/2 space-y-3">
              <div className="inline-block px-3 py-1 bg-[#EF9FBD] text-[#07334F] text-xs font-black rounded-lg uppercase tracking-wider">
                Production Specs: Iced Cup
              </div>
              <h3 className="text-2xl font-black text-[#07334F] font-display">16oz Signature Iced Drink Cup</h3>
              <p className="text-sm text-[#07334F]/80 leading-relaxed">
                Double-wall insulated recyclable PLA cup with embossed textured bright cyan heat sleeve. Accommodates cold brew, iced matcha, and signature strawberry donut shakes.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <div className="p-2.5 bg-white rounded-xl border-2 border-[#07334F]">
                  <span className="text-[10px] text-gray-500 font-bold block uppercase">Capacity</span>
                  <span className="font-extrabold text-[#07334F]">16 oz / 500 ml</span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border-2 border-[#07334F]">
                  <span className="text-[10px] text-gray-500 font-bold block uppercase">Sleeve Stock</span>
                  <span className="font-extrabold text-[#07334F]">250gsm Kraft Flute</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. PAPER TAKEAWAY BAG */}
        {activeItem === 'kraft' && (
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <svg viewBox="0 0 300 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[260px] drop-shadow-2xl">
                {/* Twisted Paper Handles */}
                <path d="M100 90 C 100 20, 140 20, 140 90" stroke="#07334F" strokeWidth="6" fill="none" strokeLinecap="round" />
                <path d="M160 90 C 160 20, 200 20, 200 90" stroke="#07334F" strokeWidth="6" fill="none" strokeLinecap="round" />

                {/* Bag Body (Warm Cream / Kraft) */}
                <path d="M40 90 L260 90 L240 340 L60 340 Z" fill="#FDEFEB" stroke="#07334F" strokeWidth="5" />
                {/* Gusset fold */}
                <path d="M60 340 L85 90" stroke="#07334F" strokeWidth="2.5" strokeDasharray="6 4" />

                {/* Big Master Logo */}
                <g transform="translate(150, 190) scale(0.65)">
                  <DohNutLogo variant="primary" size={240} />
                </g>

                {/* Mascot Peeking out from bottom corner */}
                <g transform="translate(200, 260) scale(0.35) rotate(-10)">
                  <DohBoyMascot pose="waving" size={140} />
                </g>
              </svg>
            </div>

            <div className="w-full md:w-1/2 space-y-3">
              <div className="inline-block px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] text-xs font-black rounded-lg uppercase tracking-wider">
                Production Specs: Takeout Bag
              </div>
              <h3 className="text-2xl font-black text-[#07334F] font-display">Large Retail Shopper Carrier</h3>
              <p className="text-sm text-[#07334F]/80 leading-relaxed">
                180gsm reinforced premium kraft paper with twisted cotton cord handles. Fits up to three 6-pack boxes vertically or two boxes plus beverages safely.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <div className="p-2.5 bg-white rounded-xl border-2 border-[#07334F]">
                  <span className="text-[10px] text-gray-500 font-bold block uppercase">Load Capacity</span>
                  <span className="font-extrabold text-[#07334F]">Up to 4.5 kg</span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border-2 border-[#07334F]">
                  <span className="text-[10px] text-gray-500 font-bold block uppercase">Ink Spec</span>
                  <span className="font-extrabold text-[#07334F]">Soy-Based Pantone</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. GREASEPROOF TISSUE LINER */}
        {activeItem === 'tissue' && (
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-64 h-64 bg-[#FDEFEB] rounded-2xl border-4 border-[#07334F] p-4 shadow-xl relative overflow-hidden flex flex-col justify-between">
                {/* Diagonal repeating pattern */}
                <div className="grid grid-cols-3 gap-4 opacity-85">
                  <div className="text-center font-display font-black text-xs text-[#D92F2F]">DOH!</div>
                  <div className="text-center font-display font-black text-xs text-[#297FC1]">★</div>
                  <div className="text-center font-display font-black text-xs text-[#07334F]">DOH-NUT</div>
                  <div className="text-center font-display font-black text-xs text-[#07334F]">🍩</div>
                  <div className="text-center font-display font-black text-xs text-[#D92F2F]">ATTITUDE</div>
                  <div className="text-center font-display font-black text-xs text-[#EF9FBD]">★</div>
                  <div className="text-center font-display font-black text-xs text-[#297FC1]">DOH-NUT</div>
                  <div className="text-center font-display font-black text-xs text-[#07334F]">FRESH</div>
                  <div className="text-center font-display font-black text-xs text-[#D92F2F]">🍩</div>
                </div>
                <div className="border-t-2 border-dashed border-[#07334F] pt-2 text-center text-[10px] font-extrabold text-[#07334F]">
                  100% FOOD SAFE GREASEPROOF LINER
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-3">
              <div className="inline-block px-3 py-1 bg-[#07334F] text-[#FDEFEB] text-xs font-black rounded-lg uppercase tracking-wider">
                Production Specs: Tissue Paper
              </div>
              <h3 className="text-2xl font-black text-[#07334F] font-display">Patterned Pastry Tissue</h3>
              <p className="text-sm text-[#07334F]/80 leading-relaxed">
                40gsm bleached parchment wrapping tissue. Used inside all bakery boxes and tray liners to cushion fresh donuts and elevate unboxing aesthetics.
              </p>
            </div>
          </div>
        )}

        {/* 6. DELIVERY PACKAGING & TAMPER SEAL */}
        {activeItem === 'delivery' && (
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-64 h-72 bg-[#D92F2F] rounded-2xl border-4 border-[#07334F] p-4 shadow-xl relative overflow-hidden flex flex-col justify-between items-center text-center">
                {/* Tamper Seal Sticker across top */}
                <div className="w-full bg-[#FFD23F] border-2 border-[#07334F] rounded-lg py-1 px-2 font-black text-[#07334F] text-[10px] tracking-wider uppercase shadow">
                  🔒 FRESHNESS SEALED — DO NOT ACCEPT IF BROKEN
                </div>

                <div className="my-auto">
                  <div className="font-fun text-3xl font-black text-[#FDEFEB] drop-shadow-md">
                    HOT DOUGH ON THE MOVE!
                  </div>
                  <div className="text-xs font-bold text-[#FDEFEB] mt-2">
                    Delivered with pure attitude
                  </div>
                </div>

                <div className="bg-[#07334F] text-[#FDEFEB] px-4 py-1.5 rounded-full text-[11px] font-bold">
                  Order #DN-8842
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-3">
              <div className="inline-block px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] text-xs font-black rounded-lg uppercase tracking-wider">
                Production Specs: Delivery Pack
              </div>
              <h3 className="text-2xl font-black text-[#07334F] font-display">Thermal Delivery Sleeve & Seal</h3>
              <p className="text-sm text-[#07334F]/80 leading-relaxed">
                Insulated delivery bag accompanied by high-adhesion holographic security tamper stickers, guaranteeing maximum freshness for GrabFood, ShopeeFood, and direct online orders.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
