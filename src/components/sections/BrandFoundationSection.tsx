import React from 'react';
import { Sparkles, XCircle, CheckCircle } from 'lucide-react';
import { DohBoyMascot } from '../brand/DohBoyMascot';

export const BrandFoundationSection: React.FC = () => {
  const personalities = [
    { title: 'Playful & Cheeky', desc: 'Lighthearted attitude that brings an immediate smile without taking itself too seriously.' },
    { title: 'Youthful & Energetic', desc: 'Tuned to modern Malaysian street and pop-food culture, vibrant and high-tempo.' },
    { title: 'Bold & Confident', desc: 'Fearless color palettes, chunky typography, and zero-apology punchy taglines.' },
    { title: 'Approachable & Warm', desc: 'Friendly bakery comfort food welcoming all ages, from students to families.' },
    { title: 'Malaysian Street-Food Spirit', desc: 'Celebrates local craving culture, night-market energy, and sharing moments.' },
  ];

  const avoidList = [
    'Luxury / premium fine-dining aesthetics (no pretentious marble, gold foil, or serif scripts)',
    'Corporate minimalism (no sterile gray grids or tech-firm soulless aesthetics)',
    'Generic café branding (no rustic wooden signs or pastel latte-art cliché tropes)',
    'Overly childish kindergarten visuals (maintain sharp street culture edge)',
    'Excessive 3D gradients or hyper-realistic renders',
    'Stock-looking graphics or generic donut clip-art',
  ];

  return (
    <div className="space-y-8">
      {/* Hero Brand Idea Card */}
      <div className="bg-[#07334F] text-[#FDEFEB] p-8 sm:p-10 rounded-3xl border-4 border-[#07334F] shadow-[8px_8px_0px_0px_#297FC1] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-xl z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] text-xs font-black rounded-xl uppercase tracking-wider border-2 border-[#FDEFEB] shadow-[2px_2px_0px_0px_#07334F]">
            <Sparkles size={14} />
            <span>Brand Idea & Positioning</span>
          </div>

          <h2 className="font-fun text-4xl sm:text-5xl font-black text-[#FFD23F] leading-tight">
            “DONUTS WITH ATTITUDE.”
          </h2>

          <p className="text-base sm:text-lg text-[#FDEFEB] font-bold leading-relaxed">
            DOH-NUT is a modern, vibrant Malaysian snack and lifestyle brand that turns a familiar comfort food into a bold cultural statement. It is built to be photographed, shared, collected, worn, and talked about.
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#297FC1] text-[#FDEFEB] rounded-xl text-xs font-black border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">#DOHwithAttitude</span>
            <span className="px-3 py-1 bg-[#EF9FBD] text-[#07334F] rounded-xl text-xs font-black border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">#MalaysianStreetDough</span>
            <span className="px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] rounded-xl text-xs font-black border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">#GoodDoughBadAttitude</span>
          </div>
        </div>

        <div className="z-10 bg-[#FDEFEB] p-6 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#D92F2F] flex flex-col items-center">
          <DohBoyMascot pose="hero" size={160} animated />
          <span className="text-xs font-black text-[#07334F] mt-2 px-2.5 py-0.5 rounded-lg bg-[#FFD23F] border-2 border-[#07334F]">DOH BOY • MASCOT</span>
        </div>

        {/* Background grid */}
        <div className="absolute inset-0 opacity-10 grid-pattern-paper pointer-events-none" />
      </div>

      {/* Personality Matrix & What to Avoid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personality Traits */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b-3 border-[#07334F]">
            <CheckCircle className="text-[#297FC1]" size={22} />
            <h3 className="font-display font-black text-xl text-[#07334F]">
              Brand Personality Pillars
            </h3>
          </div>

          <div className="space-y-3">
            {personalities.map((p) => (
              <div key={p.title} className="p-3.5 rounded-2xl bg-[#FDEFEB] border-2.5 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]">
                <h4 className="font-display font-black text-sm text-[#D92F2F]">{p.title}</h4>
                <p className="text-xs text-[#07334F] mt-0.5 font-bold leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What to Avoid */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#D92F2F] space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b-3 border-[#07334F]">
            <XCircle className="text-[#D92F2F]" size={22} />
            <h3 className="font-display font-black text-xl text-[#07334F]">
              Aesthetic Guardrails (Strictly Avoid)
            </h3>
          </div>

          <div className="space-y-2.5">
            {avoidList.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-[#D92F2F]/10 border-2 border-[#D92F2F] text-xs font-bold text-[#07334F] shadow-[2px_2px_0px_0px_#D92F2F]">
                <span className="text-[#D92F2F] font-black text-sm">✕</span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
