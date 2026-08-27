import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const BrandChecklistSection: React.FC = () => {
  const dos = [
    'Be bold, playful, and street-confident across all brand touchpoints.',
    'Strictly use the established 5-color palette (#D92F2F, #07334F, #297FC1, #FDEFEB, #EF9FBD).',
    'Keep the master logo clear with full clearance space (1D rule).',
    'Use thick navy stroke outlines (#07334F) for graphic elements and character art.',
    'Celebrate Doh Boy mascot in appropriate poses for marketing and merch.',
    'Keep product photography bright, fresh, close-up, and appetizing.',
    'Use short, cheeky, punchy slogans that celebrate Malaysian snack culture.',
    'Spell the brand name exactly as DOH-NUT in all communications.',
  ];

  const donts = [
    'Never make the brand look like a sterile corporate tech company or luxury fine-dining.',
    'Do not introduce random gradients, neon greens, purples, or unapproved hues.',
    'Do not distort, stretch, squash, rotate, or alter the master logo badge.',
    'Do not remove the deep navy stroke system from brand illustrations.',
    'Do not use thin, delicate serif fonts or fashion scripts for headlines.',
    'Do not use generic stock photography, sterile white backgrounds, or artificial clip-art.',
    'Do not spell the brand as "DohNut", "DowNut", "Dohnut", or "Doh Nut".',
    'Do not overcomplicate layouts with excessive layers or conflicting graphic styles.',
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* DO Column */}
      <div className="bg-white p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b-3 border-[#48BB78]/30">
          <div className="p-2.5 bg-[#48BB78] text-white rounded-2xl">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <h3 className="font-fun text-2xl font-black text-[#07334F]">
              BRAND DO'S
            </h3>
            <span className="text-xs font-bold text-[#48BB78]">Essential Brand Practices</span>
          </div>
        </div>

        <div className="space-y-3">
          {dos.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 rounded-2xl bg-[#48BB78]/10 border border-[#48BB78]/30 text-xs font-bold text-[#07334F] leading-relaxed"
            >
              <span className="text-[#48BB78] font-black text-sm">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* DON'T Column */}
      <div className="bg-white p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b-3 border-[#D92F2F]/30">
          <div className="p-2.5 bg-[#D92F2F] text-white rounded-2xl">
            <XCircle size={24} />
          </div>
          <div>
            <h3 className="font-fun text-2xl font-black text-[#07334F]">
              BRAND DON'TS
            </h3>
            <span className="text-xs font-bold text-[#D92F2F]">Strict Violations</span>
          </div>
        </div>

        <div className="space-y-3">
          {donts.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 rounded-2xl bg-[#D92F2F]/10 border border-[#D92F2F]/30 text-xs font-bold text-[#07334F] leading-relaxed"
            >
              <span className="text-[#D92F2F] font-black text-sm">✕</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
