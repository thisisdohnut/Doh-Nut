import React from 'react';
import { Camera, Sun, Sparkles, Check, X } from 'lucide-react';
import { DonutIcon } from '../brand/GraphicElements';

export const PhotographyDirectionSection: React.FC = () => {
  const photoMoods = [
    {
      title: 'Macro Texture & Glaze Drips',
      desc: 'Super high-res close-ups showing glistening honey glaze, crackled brioche crust, and gooey chocolate lava centers.',
      color: '#D92F2F',
      aspect: 'Top-down & 45° Macro'
    },
    {
      title: 'Real Human Bite Moments',
      desc: 'Candid lifestyle shots of people laughing, taking big bites, messy powdered fingers, sharing boxes in urban spaces.',
      color: '#297FC1',
      aspect: 'Eye-level Lifestyle'
    },
    {
      title: 'Vibrant Monochromatic Sets',
      desc: 'Donut boxes and cups styled on bright cream (#FDEFEB), cyan (#297FC1), or pink seamless studio paper sweeps.',
      color: '#EF9FBD',
      aspect: 'Hero Product Studio'
    },
  ];

  return (
    <div className="space-y-8">
      {/* Photography Mood & Rules */}
      <div className="bg-white p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#D92F2F] text-white rounded-2xl">
            <Camera size={24} />
          </div>
          <div>
            <h3 className="font-fun text-2xl font-black text-[#07334F]">
              PHOTOGRAPHY DIRECTION & MOOD
            </h3>
            <p className="text-xs font-semibold text-[#07334F]/80">
              Bright, crisp, crave-inducing street energy with vibrant color pops.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photoMoods.map((mood) => (
            <div key={mood.title} className="p-5 rounded-3xl bg-[#FDEFEB] border-3 border-[#07334F] space-y-3">
              <div className="flex justify-between items-center">
                <span
                  className="px-2.5 py-1 text-[10px] font-black rounded-lg text-white uppercase"
                  style={{ backgroundColor: mood.color }}
                >
                  {mood.aspect}
                </span>
                <Sparkles size={16} className="text-[#07334F]" />
              </div>
              <h4 className="font-display font-black text-base text-[#07334F]">
                {mood.title}
              </h4>
              <p className="text-xs text-[#07334F]/80 leading-relaxed font-medium">
                {mood.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Photography Mockups / Art Direction Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* DO Guide */}
        <div className="bg-white p-6 rounded-3xl border-4 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] space-y-4">
          <div className="flex items-center gap-2 text-[#48BB78] font-black text-sm uppercase">
            <Check size={18} />
            <span>APPROVED PHOTOGRAPHY LIGHTING & MOOD</span>
          </div>

          <div className="h-48 rounded-2xl bg-[radial-gradient(ellipse_at_top,_#FDEFEB,_#EF9FBD)] border-3 border-[#07334F] flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
            <div className="flex gap-4 items-center mb-2">
              <DonutIcon size={64} glazeColor="#D92F2F" />
              <DonutIcon size={64} glazeColor="#297FC1" />
              <DonutIcon size={64} glazeColor="#EF9FBD" />
            </div>
            <span className="font-fun text-sm font-black text-[#07334F]">
              HIGH SUNLIGHT • POPPING CRUNCH • VIBRANT ACCENTS
            </span>
          </div>

          <ul className="text-xs text-[#07334F] space-y-1.5 font-medium list-disc list-inside">
            <li>Direct, crisp, high-key sunlight or daylight balanced strobes</li>
            <li>Bright colorful backdrops (Cream, Pink, Cyan)</li>
            <li>Real messy joy, powdered sugar clouds, and gooey bite cross-sections</li>
          </ul>
        </div>

        {/* DON'T Guide */}
        <div className="bg-white p-6 rounded-3xl border-4 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] space-y-4">
          <div className="flex items-center gap-2 text-[#D92F2F] font-black text-sm uppercase">
            <X size={18} />
            <span>STRICTLY PROHIBITED PHOTOGRAPHY STYLES</span>
          </div>

          <div className="h-48 rounded-2xl bg-neutral-900 border-3 border-red-500 flex flex-col items-center justify-center p-4 text-center text-gray-400">
            <span className="text-3xl mb-2">🕯️ ☕ 🪵</span>
            <span className="text-xs font-bold text-red-400 uppercase">
              [ NO MOODY DARK WINE-BAR OR RUSTIC BURLAP CAFÉ SHOTS ]
            </span>
          </div>

          <ul className="text-xs text-red-700 space-y-1.5 font-medium list-disc list-inside">
            <li>No dim, moody, candlelight, or dark brown shadows</li>
            <li>No sterile corporate stock studio backgrounds with fake plastic models</li>
            <li>No dull muted filters or desaturated hipster vintage presets</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
