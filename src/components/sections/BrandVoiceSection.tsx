import React, { useState } from 'react';
import { BRAND_TAGLINES, BRAND_VOICE_PILLARS } from '../../data/brandData';
import { MessageSquare, Check, X, Sparkles, Copy, RefreshCw, Volume2, ArrowRight } from 'lucide-react';
import { GeminiHeadlineGenerator } from '../brand/GeminiHeadlineGenerator';
import { DohNutFlavorGenerator } from '../brand/DohNutFlavorGenerator';

export const BrandVoiceSection: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<number>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const scenarioTranslations = [
    {
      context: 'Product Launch & Drop Announcement',
      corporate: 'We are delighted to introduce our innovative seasonal pastry collection crafted with curated ingredients for our valued clientele.',
      dohnut: 'HOT DOUGH. FRESH GLAZE. ZERO APOLOGIES. 🍩 The Strawberry Bomb just dropped. Grab it before it’s gone.',
      tag: 'LAUNCH DROP'
    },
    {
      context: 'Sold Out / Stock Depleted',
      corporate: 'We sincerely regret to inform our patrons that daily inventory has been completely exhausted. Please visit tomorrow.',
      dohnut: 'ALL DOUGH’D OUT! 💥 You guys went wild. Fresh batch drops tomorrow at 10 AM sharp. Don’t sleep on it.',
      tag: 'SOLD OUT'
    },
    {
      context: 'Packaging Masthead & Box Tape',
      corporate: 'Thank you for choosing our establishment. We strive to provide quality dessert experiences.',
      dohnut: 'GOOD DOUGH. BAD ATTITUDE. Bite first. Think later. You know you want one more.',
      tag: 'PACKAGING'
    },
    {
      context: 'Social Media Call-to-Action',
      corporate: 'Please consider engaging with our digital platform by sharing your feedback in the comments section below.',
      dohnut: 'DID SOMEONE SAY DOH-NUT? Tag that one friend who owes you a box right now. 👀👇',
      tag: 'SOCIAL'
    },
    {
      context: 'Discount & Promo Offer',
      corporate: 'Patrons are eligible to redeem a 15% discount incentive on select culinary confectioneries this weekend.',
      dohnut: 'DONUT WORRY. Buy 5, get 1 on us. Weekend sugar rush unlocked. 🚀',
      tag: 'PROMO'
    },
    {
      context: 'Order Slip / Receipt Footer',
      corporate: 'We appreciate your business. Please retain this receipt for your records and reward points.',
      dohnut: 'JUST ONE MORE. (We won’t tell anyone). See you again soon, donut lover! ✨',
      tag: 'RECEIPT'
    }
  ];

  const handleCopyTagline = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Brand Voice Philosophy Banner */}
      <div className="bg-[#07334F] text-[#FDEFEB] p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[8px_8px_0px_0px_#297FC1] relative overflow-hidden space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 z-10 relative">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-[#D92F2F] text-[#FDEFEB] rounded-xl font-display font-black text-xs border-2 border-[#FDEFEB] shadow-[2px_2px_0px_0px_#07334F]">
              VOICE SPEC
            </span>
            <h3 className="font-fun text-xl sm:text-2xl font-black text-[#FFD23F]">
              DOH-NUT BRAND VOICE & COPYWRITING
            </h3>
          </div>
          <span className="text-[11px] font-black px-3 py-1 rounded-xl bg-[#297FC1] text-[#FDEFEB] border-2 border-[#FDEFEB]">
            NO CORPORATE JARGON
          </span>
        </div>

        <p className="text-sm sm:text-base font-bold text-[#FDEFEB] max-w-3xl leading-relaxed z-10 relative">
          The DOH-NUT voice is <strong className="text-[#FFD23F]">short</strong>, <strong className="text-[#EF9FBD]">punchy</strong>, <strong className="text-[#297FC1]">friendly</strong>, <strong className="text-[#D92F2F]">cheeky</strong>, <strong className="text-[#FFD23F]">confident</strong>, and <strong className="text-[#FDEFEB]">conversational</strong>. It channels the energy of youth street culture, Malaysian pasar malam snack excitement, and skate attitude. We never sound like a boring boardroom.
        </p>

        {/* 4 Voice Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-3 z-10 relative">
          {BRAND_VOICE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-[#FDEFEB]/30 space-y-2 hover:bg-white/20 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black px-2 py-0.5 rounded-lg bg-[#D92F2F] text-[#FDEFEB]">
                  {pillar.badge}
                </span>
              </div>
              <h4 className="font-fun text-sm font-black text-[#FFD23F]">{pillar.title}</h4>
              <p className="text-[11px] text-[#FDEFEB]/90 font-medium leading-relaxed">{pillar.desc}</p>
              <div className="pt-1 text-[10px] font-bold text-[#EF9FBD] italic">
                eg: "{pillar.example}"
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Official Master Tagline Bank */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-3 border-[#07334F] pb-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="text-[#D92F2F]" size={24} />
            <div>
              <h3 className="font-fun text-xl sm:text-2xl font-black text-[#07334F]">
                APPROVED MASTER TAGLINES & CATCHPHRASES
              </h3>
              <p className="text-xs font-bold text-[#07334F]/80">
                Click any phrase to copy it directly to your clipboard.
              </p>
            </div>
          </div>
          <span className="text-xs font-black px-3 py-1 rounded-xl bg-[#FDEFEB] text-[#D92F2F] border-2 border-[#07334F]">
            10 MASTER PHRASES
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {BRAND_TAGLINES.map((tagline, i) => (
            <button
              key={i}
              onClick={() => handleCopyTagline(tagline, i)}
              className={`p-4 rounded-2xl border-3 border-[#07334F] text-left transition-all flex items-center justify-between group active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
                copiedIndex === i
                  ? 'bg-[#48BB78] text-white shadow-[2px_2px_0px_0px_#07334F]'
                  : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#FFD23F] shadow-[4px_4px_0px_0px_#07334F]'
              }`}
            >
              <div className="space-y-1">
                <span className="font-fun text-sm font-black tracking-wide block">
                  "{tagline}"
                </span>
                <span className="text-[10px] font-mono font-bold text-[#07334F]/70">
                  {copiedIndex === i ? '✓ COPIED!' : 'Click to copy'}
                </span>
              </div>
              <span className="text-xs font-black px-2 py-1 rounded-lg bg-[#07334F] text-[#FDEFEB] border border-[#07334F] group-hover:bg-[#D92F2F] transition-colors">
                #{i + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Attitude Translator: Corporate vs DOH-NUT Street */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-3 border-[#07334F] pb-4">
          <div className="flex items-center gap-2">
            <RefreshCw className="text-[#297FC1]" size={22} />
            <h3 className="font-fun text-xl sm:text-2xl font-black text-[#07334F]">
              ATTITUDE TRANSLATOR: BORING CORPORATE ➔ DOH-NUT STREET
            </h3>
          </div>
          <span className="text-xs font-bold text-[#07334F]">
            Select scenario to preview rewrite
          </span>
        </div>

        {/* Scenario Pills */}
        <div className="flex flex-wrap gap-2">
          {scenarioTranslations.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedScenario(idx)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border-2 border-[#07334F] ${
                selectedScenario === idx
                  ? 'bg-[#D92F2F] text-[#FDEFEB] shadow-[3px_3px_0px_0px_#07334F]'
                  : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#EF9FBD] shadow-[1px_1px_0px_0px_#07334F]'
              } active:translate-x-[1px] active:translate-y-[1px] active:shadow-none`}
            >
              {s.tag}
            </button>
          ))}
        </div>

        {/* Comparison Box */}
        <div className="p-6 bg-[#FDEFEB] rounded-3xl border-3.5 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] space-y-4">
          <div className="text-xs font-black uppercase text-[#297FC1] flex items-center justify-between">
            <span>Context: {scenarioTranslations[selectedScenario].context}</span>
            <span className="text-[#D92F2F]">Live Rewrite</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Boring Corporate */}
            <div className="p-5 bg-white rounded-2xl border-3 border-[#D92F2F] space-y-2 shadow-[3px_3px_0px_0px_#D92F2F]">
              <div className="flex items-center gap-2">
                <span className="p-1 bg-[#D92F2F] text-white rounded-full">
                  <X size={14} />
                </span>
                <span className="text-[11px] font-black text-[#D92F2F] uppercase">
                  STRICTLY AVOID: Formal / Stuffy
                </span>
              </div>
              <p className="text-xs text-gray-500 font-medium line-through leading-relaxed">
                "{scenarioTranslations[selectedScenario].corporate}"
              </p>
            </div>

            {/* Approved DOH-NUT Street Voice */}
            <div className="p-5 bg-white rounded-2xl border-3 border-[#48BB78] space-y-2 shadow-[3px_3px_0px_0px_#48BB78]">
              <div className="flex items-center gap-2">
                <span className="p-1 bg-[#48BB78] text-white rounded-full">
                  <Check size={14} />
                </span>
                <span className="text-[11px] font-black text-[#48BB78] uppercase">
                  APPROVED: DOH-NUT Street Attitude
                </span>
              </div>
              <p className="font-fun text-sm sm:text-base text-[#07334F] font-black leading-snug">
                "{scenarioTranslations[selectedScenario].dohnut}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive DOH-NUT Flavor Concept Generator Tool */}
      <DohNutFlavorGenerator />

      {/* Interactive AI Headline Generator Tool (Gemini / BYOK) */}
      <GeminiHeadlineGenerator />
    </div>
  );
};
