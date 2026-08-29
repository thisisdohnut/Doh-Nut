import React, { useState } from 'react';
import { BRAND_TAGLINES, BRAND_VOICE_PILLARS } from '../../data/brandData';
import {
  MessageSquare,
  Check,
  X,
  Sparkles,
  Copy,
  RefreshCw,
  Share2,
  Store,
  Headphones,
  Flame,
  CheckCircle2,
  Smile,
  Zap
} from 'lucide-react';
import { GeminiHeadlineGenerator } from '../brand/GeminiHeadlineGenerator';
import { DohNutFlavorGenerator } from '../brand/DohNutFlavorGenerator';

interface ContextExample {
  id: string;
  category: 'social' | 'store' | 'service' | 'street';
  contextTitle: string;
  subCategory: string;
  copyText: string;
  taglineAnchor: string;
  personalityPill: string;
  tips: string;
}

export const BrandVoiceSection: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<number>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeContextTab, setActiveContextTab] = useState<'all' | 'social' | 'store' | 'service' | 'street'>('all');
  const [copiedContextId, setCopiedContextId] = useState<string | null>(null);

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
      dohnut: 'DOH-NUT WORRY. Buy 5, get 1 on us. Weekend sugar rush unlocked. 🚀',
      tag: 'PROMO'
    },
    {
      context: 'Order Slip / Receipt Footer',
      corporate: 'We appreciate your business. Please retain this receipt for your records and reward points.',
      dohnut: 'JUST ONE MORE. (We won’t tell anyone). See you again soon, donut lover! ✨',
      tag: 'RECEIPT'
    }
  ];

  const contextualExamples: ContextExample[] = [
    // 1. SOCIAL MEDIA CAPTIONS
    {
      id: 'soc-1',
      category: 'social',
      subCategory: 'TikTok / Reels Drop Announcement',
      contextTitle: 'Fresh Batch Drop',
      copyText: 'POOF! 💨 Fresh batch panas-panas just landed on the racks. Kalau lambat, tengok kawan makan je la! 😭 Grab your 6-pack box right now before licin. #DohNutMY #HotDough #KLFoodie',
      taglineAnchor: 'DONUTS WITH ATTITUDE.',
      personalityPill: '🔥 High Energy & FOMO',
      tips: 'Use sound effects, short Malaysian slang triggers (panas-panas, licin), and quick visual transitions.'
    },
    {
      id: 'soc-2',
      category: 'social',
      subCategory: 'Instagram Aesthetic Post',
      contextTitle: 'Glaze Close-Up Beauty Shot',
      copyText: 'DOH-NUT WORRY, BE SQUISHY. 🍓 Double strawberry glaze, extra rainbow sprinkles, zero regrets. Tag that one friend who owes you a treat today! 👀👇',
      taglineAnchor: 'DOH-NUT WORRY.',
      personalityPill: '✨ Playful & Aesthetic',
      tips: 'Keep taglines in all-caps, followed by an immediate friend-tag CTA.'
    },
    {
      id: 'soc-3',
      category: 'social',
      subCategory: 'Twitter / X Banter',
      contextTitle: 'Relatable Foodie Confession',
      copyText: 'Me in my car: "I\'m strictly eating ONE donut from the box."\nMe 5 minutes later: *staring at 6 empty paper cups and sugar all over my shirt* 🚗💨 #DohNutAttitude',
      taglineAnchor: 'JUST ONE MORE.',
      personalityPill: '😎 Cheeky & Relatable',
      tips: 'Self-deprecating humor about snack cravings converts highest on X/Threads.'
    },
    {
      id: 'soc-4',
      category: 'social',
      subCategory: 'Limited Flavour Teaser',
      contextTitle: 'Secret Flavour Reveal',
      copyText: 'Pistachio Kunafa Doh-Nut just entered the chat. Rangup di luar, padu leleh di dalam! 🤤 Sumpah sedap. Only 100 boxes per outlet per day. Ready or not?',
      taglineAnchor: 'GOOD DOUGH. BAD ATTITUDE.',
      personalityPill: '⚡ Hype Drop',
      tips: 'Pair Malaysian appetite descriptors (padu, leleh, rangup) with strict rarity limits.'
    },

    // 2. IN-STORE SIGNAGE & RETAIL
    {
      id: 'store-1',
      category: 'store',
      subCategory: 'Floor Decal & Queue Line',
      contextTitle: 'Queue Management Marker',
      copyText: 'STAND HERE IF YOU CRAVE HOT DOUGH. 🍩 (Jarak sikit bossku, donut tak lari mana-mana!)',
      taglineAnchor: 'BITE FIRST. THINK LATER.',
      personalityPill: '👟 Street Friendly',
      tips: 'Floor decals should break awkward silence with funny, warm local humor.'
    },
    {
      id: 'store-2',
      category: 'store',
      subCategory: 'Pickup Counter Masthead',
      contextTitle: 'Order Ready Collection Sign',
      copyText: 'HOT OUT OF THE CLAY PRESS. 🔥 Grab your box, snap the drip, and take the first bite before the glaze sets. Enjoy boss!',
      taglineAnchor: 'FRESHLY GLAZED.',
      personalityPill: '⚡ Action Oriented',
      tips: 'Encourage instant consumption and immediate social photo-taking right at the counter.'
    },
    {
      id: 'store-3',
      category: 'store',
      subCategory: 'Packaging Box Inside Liner',
      contextTitle: 'Unboxing Delight Message',
      copyText: 'DOH-NUT PANIC! 📦 Best consumed within 24 hours (or 24 seconds, we won’t judge). Pro tip: Pop in microwave for 8 seconds for maximum squishiness!',
      taglineAnchor: 'DOH-NUT PANIC.',
      personalityPill: '🍩 Care & Cheekiness',
      tips: 'Provide real product handling advice disguised with punchy brand humor.'
    },
    {
      id: 'store-4',
      category: 'store',
      subCategory: 'Kitchen & Staff Only Door',
      contextTitle: 'Back-of-House Warning Sign',
      copyText: 'DANGER: TOP SECRET DOUGH EXPERIMENTS IN PROGRESS. 🧪🧑‍🍳 Unauthorized entry will be dipped in hot glaze.',
      taglineAnchor: 'PLAY-DOH SPIRIT.',
      personalityPill: '🎨 Creative & Secretive',
      tips: 'Turn functional back-of-house doors into branded Instagrammable background moments.'
    },
    {
      id: 'store-5',
      category: 'store',
      subCategory: 'Washroom Mirror Vinyl',
      contextTitle: 'Mirror Selfie Touchpoint',
      copyText: 'LOOKING SWEET. SMELLING LIKE FRESH STRAWBERRY DOUGH. 🪞🍓 Don’t forget to check your teeth for sprinkles!',
      taglineAnchor: 'KEEP IT SQUISHY.',
      personalityPill: '📸 Selfie Bait',
      tips: 'Position at eye level on mirror frames for organic user-generated content.'
    },

    // 3. CUSTOMER SERVICE RESPONSES
    {
      id: 'serv-1',
      category: 'service',
      subCategory: 'Instagram DM / WhatsApp',
      contextTitle: 'Sold Out Product Inquiry',
      copyText: 'Alamak bossku! Sold out habis licin for today! 😭 Our bakers are already prepping the next batch for tomorrow 10:00 AM sharp. Set alarm awal-awal okay? We’ll save the best strawberry glaze for you! ⏰🍩',
      taglineAnchor: 'DOH-NUT WORRY.',
      personalityPill: '❤️ Empathetic & Warm',
      tips: 'Acknowledge disappointment immediately in local friendly tone, then provide exact restock timing.'
    },
    {
      id: 'serv-2',
      category: 'service',
      subCategory: 'Delivery Platform Chat',
      contextTitle: 'Rider Delay / Traffic Update',
      copyText: 'Donut worry, we got you covered! 🛵 Abang rider is currently navigating KL traffic to make sure your box arrives intact and fresh. Here is your live tracking link, plus a voucher code [DOHFRESH] for free drinks on your next order! 🙌',
      taglineAnchor: 'DOH-NUT WORRY.',
      personalityPill: '🛡️ Reassuring & Generous',
      tips: 'Proactively appease impatient customers with tangible sweetness and tracking clarity.'
    },
    {
      id: 'serv-3',
      category: 'service',
      subCategory: 'Customer Flavour Suggestion',
      contextTitle: 'New Flavour Idea DM',
      copyText: 'Wah, padu gila idea you ni! 💡 We just screenshot this and dropped it in our R&D Dough Chef channel. If this flavour makes it to the menu, first 2 boxes are 100% on us! Stay awesome! 🍩🚀',
      taglineAnchor: 'PLAYFUL SPIRIT.',
      personalityPill: '🤝 Enthusiastic & Welcoming',
      tips: 'Reward user creativity and make them feel like co-creators of the brand.'
    },
    {
      id: 'serv-4',
      category: 'service',
      subCategory: 'Damaged Box / Issue Escalation',
      contextTitle: 'Mishap & Quality Guarantee',
      copyText: 'Aduh, that box looks like it went through a skate park! 💔 Not cool at all. Send us your order number & address right now—we are dispatching a brand-new, freshly glazed 6-pack to your doorstep right this second, free of charge. We want you smiling, not frowning!',
      taglineAnchor: 'ZERO APOLOGIES, PURE LOVE.',
      personalityPill: '🚀 Immediate Resolution',
      tips: 'Zero friction, zero interrogation. Replace immediately with high-speed generosity.'
    },

    // 4. STREET SLANG & PUNS
    {
      id: 'str-1',
      category: 'street',
      subCategory: 'Malaysian Slang & Street Puns',
      contextTitle: 'Bilingual Street Punchlines',
      copyText: '"Doh-Nut give up, rezeki ada di mana-mana (especially in a box of 6)." 🍩🇲🇾',
      taglineAnchor: 'DOH-NUT GIVE UP.',
      personalityPill: '🇲🇾 Malaysian Local Slang',
      tips: 'Mix localized Manglish warmth with iconic dough wordplay.'
    },
    {
      id: 'str-2',
      category: 'street',
      subCategory: 'Malaysian Slang & Street Puns',
      contextTitle: 'Late Night Lepak Hook',
      copyText: '"Lepak mana malam ni? Jom pekena DOH-NUT dulu baru balik tidur lena." 🌙✨',
      taglineAnchor: 'NIGHT SPRINT.',
      personalityPill: '☕ Lepak Culture',
      tips: 'Target Malaysian late-night supper/lepak culture around youth hubs.'
    }
  ];

  const handleCopyTagline = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyContextText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedContextId(id);
    setTimeout(() => setCopiedContextId(null), 2000);
  };

  const filteredContextExamples =
    activeContextTab === 'all'
      ? contextualExamples
      : contextualExamples.filter((ex) => ex.category === activeContextTab);

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
          The DOH-NUT voice is <strong className="text-[#FFD23F]">short</strong>, <strong className="text-[#EF9FBD]">punchy</strong>, <strong className="text-[#297FC1]">friendly</strong>, <strong className="text-[#D92F2F]">cheeky</strong>, <strong className="text-[#FFD23F]">confident</strong>, and <strong className="text-[#FDEFEB]">conversational</strong>. It channels the energy of youth street culture, Malaysian pasar malam snack excitement, and Play-Doh nostalgic tactile joy. We never sound like a boring corporate boardroom.
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

      {/* ========================================================
          NEW: EXPANDED CONTEXTUAL BRAND VOICE LIBRARY MATRIX
          ======================================================== */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-3 border-[#07334F] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="text-[#D92F2F]" size={24} />
              <h3 className="font-fun text-xl sm:text-2xl font-black text-[#07334F]">
                CONTEXTUAL BRAND VOICE PLAYBOOK
              </h3>
            </div>
            <p className="text-xs font-bold text-[#07334F]/80 mt-1">
              Ready-to-use copywriting templates for Social Media, In-Store Touchpoints, Customer Service DMs, and Malaysian Street Slang.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Contexts', icon: Zap },
              { id: 'social', label: 'Social Media', icon: Share2 },
              { id: 'store', label: 'In-Store Signage', icon: Store },
              { id: 'service', label: 'Customer Care & DMs', icon: Headphones },
              { id: 'street', label: 'MY Street Slang & Puns', icon: Flame }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveContextTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border-2 border-[#07334F] flex items-center gap-1.5 ${
                    activeContextTab === tab.id
                      ? 'bg-[#D92F2F] text-[#FDEFEB] shadow-[3px_3px_0px_0px_#07334F]'
                      : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#FFD23F] shadow-[1px_1px_0px_0px_#07334F]'
                  } active:translate-x-[1px] active:translate-y-[1px] active:shadow-none`}
                >
                  <Icon size={14} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid of Context Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredContextExamples.map((ex) => {
            const isCopied = copiedContextId === ex.id;
            return (
              <div
                key={ex.id}
                className="p-5 rounded-3xl bg-[#FDEFEB] border-3.5 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] flex flex-col justify-between space-y-4 group hover:bg-[#fff7f5] transition-all"
              >
                <div className="space-y-3">
                  {/* Card Header & Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#07334F]/15 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black px-2.5 py-0.5 rounded-lg bg-[#07334F] text-[#FDEFEB] uppercase font-mono">
                        {ex.category.toUpperCase()}
                      </span>
                      <span className="font-display font-black text-xs text-[#297FC1]">
                        {ex.subCategory}
                      </span>
                    </div>

                    <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-[#EF9FBD] text-[#07334F] border border-[#07334F]">
                      {ex.personalityPill}
                    </span>
                  </div>

                  {/* Context Header */}
                  <h4 className="font-fun text-base font-black text-[#07334F]">
                    {ex.contextTitle}
                  </h4>

                  {/* The Actual Copy Box */}
                  <div className="p-4 bg-white rounded-2xl border-2.5 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] relative">
                    <p className="text-xs sm:text-sm font-bold text-[#07334F] leading-relaxed whitespace-pre-line font-sans">
                      "{ex.copyText}"
                    </p>
                  </div>

                  {/* Operational Usage Tip */}
                  <div className="text-[11px] text-[#07334F]/75 font-medium flex items-start gap-1.5 bg-[#07334F]/5 p-2.5 rounded-xl border border-[#07334F]/10">
                    <span className="font-black text-[#D92F2F]">Guideline Tip:</span>
                    <span>{ex.tips}</span>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="flex items-center justify-between pt-2 border-t-2 border-[#07334F]/15">
                  <div className="text-[10px] font-mono font-bold text-[#07334F]/60">
                    Anchor: <strong className="text-[#D92F2F]">{ex.taglineAnchor}</strong>
                  </div>

                  <button
                    onClick={() => handleCopyContextText(ex.copyText, ex.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black border-2 border-[#07334F] flex items-center gap-1.5 transition-all shadow-[2px_2px_0px_0px_#07334F] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none ${
                      isCopied
                        ? 'bg-[#48BB78] text-white'
                        : 'bg-[#FFD23F] text-[#07334F] hover:bg-[#FDEFEB]'
                    }`}
                  >
                    {isCopied ? <Check size={14} /> : <Copy size={14} />}
                    {isCopied ? 'Copied to Clipboard!' : 'Copy Copywriting'}
                  </button>
                </div>
              </div>
            );
          })}
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

