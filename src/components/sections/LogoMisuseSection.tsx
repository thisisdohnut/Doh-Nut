import React from 'react';
import { DohNutLogo } from '../brand/DohNutLogo';
import { CheckCircle2, XCircle } from 'lucide-react';

export const LogoMisuseSection: React.FC = () => {
  const misuseCases = [
    {
      id: 'stretch',
      title: 'Do Not Distort / Stretch',
      desc: 'Never scale the logo disproportionately.',
      renderMisuse: () => (
        <div className="scale-x-150 scale-y-75 py-2">
          <DohNutLogo variant="primary" size={160} />
        </div>
      )
    },
    {
      id: 'squash',
      title: 'Do Not Squash Vertically',
      desc: 'Never compress aspect ratios.',
      renderMisuse: () => (
        <div className="scale-y-150 scale-x-75 py-2">
          <DohNutLogo variant="primary" size={160} />
        </div>
      )
    },
    {
      id: 'rotate',
      title: 'Do Not Rotate Awkwardly',
      desc: 'Never tilt the master badge on extreme angles.',
      renderMisuse: () => (
        <div className="rotate-45 py-2">
          <DohNutLogo variant="primary" size={140} />
        </div>
      )
    },
    {
      id: 'colors',
      title: 'Do Not Alter Brand Colors',
      desc: 'Never use unapproved palettes (e.g. neon green/purple).',
      renderMisuse: () => (
        <div className="py-2 filter hue-rotate-90">
          <DohNutLogo variant="primary" size={160} />
        </div>
      )
    },
    {
      id: 'shadow',
      title: 'Do Not Add Fuzzy Drop Shadows',
      desc: 'Avoid heavy blurred drop shadows or bevel emboss.',
      renderMisuse: () => (
        <div className="py-2 drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]">
          <DohNutLogo variant="primary" size={160} />
        </div>
      )
    },
    {
      id: 'noisy',
      title: 'Do Not Place On Cluttered BG',
      desc: 'Maintain contrast against high-density photography.',
      renderMisuse: () => (
        <div className="p-3 rounded-2xl bg-[repeating-linear-gradient(45deg,#D92F2F,#D92F2F_10px,#07334F_10px,#07334F_20px)] flex items-center justify-center">
          <DohNutLogo variant="primary" size={140} />
        </div>
      )
    },
    {
      id: 'outline',
      title: 'Do Not Strip Navy Outlines',
      desc: 'The thick outline system is mandatory for street identity.',
      renderMisuse: () => (
        <div className="py-2 opacity-50 contrast-50">
          <DohNutLogo variant="primary" size={160} />
        </div>
      )
    },
    {
      id: 'spelling',
      title: 'Do Not Alter Official Spelling',
      desc: 'Always spell exactly "DOH-NUT" with hyphen. Never "Dohnut".',
      renderMisuse: () => (
        <div className="p-4 bg-[#D92F2F] rounded-2xl border-2 border-[#07334F] text-center">
          <span className="font-serif italic text-2xl text-white">Doh Nut Gourmet</span>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-8">
      {/* Golden Rule banner */}
      <div className="p-6 bg-white rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#D92F2F] text-[#FDEFEB] rounded-2xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
            <CheckCircle2 size={32} />
          </div>
          <div>
            <h3 className="font-fun text-2xl font-black text-[#07334F]">
              THE GOLDEN LOGO INTEGRITY RULE
            </h3>
            <p className="text-xs font-bold text-[#07334F]/80 mt-0.5">
              The DOH-NUT master logo must always be rendered from official vector artwork. Never attempt to manually redraw, distort, or modify outline thicknesses.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
          <span className="text-xs font-black text-[#D92F2F]">DO NOT RESHAPE</span>
        </div>
      </div>

      {/* Misuse Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {misuseCases.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border-3.5 border-[#07334F] shadow-[5px_5px_0px_0px_#07334F] overflow-hidden flex flex-col justify-between relative hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_0px_#07334F] transition-all"
          >
            {/* Visual Example Box */}
            <div className="h-44 bg-[#FDEFEB] p-4 flex items-center justify-center relative overflow-hidden border-b-3 border-[#07334F] grid-pattern-paper">
              {/* Red DON'T Badge */}
              <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 bg-[#D92F2F] text-[#FDEFEB] px-2 py-0.5 rounded-lg text-[10px] font-black border-2 border-[#07334F] shadow-[1.5px_1.5px_0px_0px_#07334F]">
                <XCircle size={12} />
                <span>DON'T</span>
              </div>

              {/* Distorted Graphic */}
              <div className="pointer-events-none">
                {item.renderMisuse()}
              </div>
            </div>

            {/* Description */}
            <div className="p-4 space-y-1 bg-white">
              <h4 className="font-display font-black text-xs text-[#D92F2F] uppercase tracking-wide">
                {item.title}
              </h4>
              <p className="text-[11px] text-[#07334F]/85 leading-normal font-bold">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
