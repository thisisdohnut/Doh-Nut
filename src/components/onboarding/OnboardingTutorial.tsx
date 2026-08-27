import React, { useState } from 'react';
import {
  Sparkles,
  ChevronRight,
  ChevronLeft,
  X,
  Award,
  Layers,
  Palette,
  MessageSquare,
  Package,
  User,
  Gamepad2,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { DohBoyMascot } from '../brand/DohBoyMascot';
import { DonutIcon, StarSpark, StreetStickerBadge } from '../brand/GraphicElements';

interface OnboardingTutorialProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const OnboardingTutorial: React.FC<OnboardingTutorialProps> = ({
  isOpen,
  onClose,
  onNavigateSection
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [dontShowAgain, setDontShowAgain] = useState<boolean>(false);

  if (!isOpen) return null;

  const steps = [
    {
      title: 'Welcome to DOH-NUT System Studio',
      tag: 'STEP 1 OF 5 • OVERVIEW',
      desc: 'Explore the complete visual identity, graphic language, pattern engine, packaging guidelines, and brand governance for DOH-NUT—crafted with authentic Malaysian street food spirit and skate attitude.',
      icon: Sparkles,
      preview: (
        <div className="flex flex-col items-center justify-center p-6 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] relative overflow-hidden">
          <DohBoyMascot pose="hero" size={120} animated />
          <div className="mt-3 flex items-center gap-2">
            <span className="font-fun text-sm font-black text-[#D92F2F] bg-white px-3 py-1 rounded-xl border-2 border-[#07334F]">
              20 Interactive Brand Sections
            </span>
          </div>
        </div>
      ),
      highlightPoints: [
        'Top Header: Quick jump to any of the 20 identity sections, Figma export, and user profile.',
        'Brutalist Paper Grid: Precision layout with tactile Deep Navy outline borders and drop shadows.',
        'Zero Corporate Jargon: Fast, cheeky, and practical design tokens ready for production.'
      ]
    },
    {
      title: 'Master Logos & Clear Space Rules',
      tag: 'STEP 2 OF 5 • IDENTITY',
      desc: 'Inspect vector master lockups, horizontal layouts, monochrome badges, and the 1D clear space clearance safety zone.',
      icon: Award,
      preview: (
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]">
          <div className="p-4 bg-[#D92F2F] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] flex items-center gap-3">
            <DonutIcon size={44} glazeColor="#EF9FBD" />
            <span className="font-fun text-2xl font-black text-[#FDEFEB] tracking-wider">
              DOH-NUT
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold text-[#07334F] mt-2 bg-[#FDEFEB] px-2 py-0.5 rounded border border-[#07334F]">
            1D Grid Clearance • Min Width: 120px
          </span>
        </div>
      ),
      highlightPoints: [
        'Interactive Clearance Grid: Toggle 1D boundary lines to check spacing rules.',
        'Misuse Warnings: Live DOs and DON\'Ts with clear violation indicators.',
        'Vector Download Ready: Clean SVG geometry for signs, apps, and print packaging.'
      ]
    },
    {
      title: 'Graphic Language & Pattern System',
      tag: 'STEP 3 OF 5 • DESIGN SYSTEM',
      desc: 'Explore thick navy outlines, organic dough blobs, stars, smileys, hand-drawn arrows, and 4 seamless pattern repeats (Dense, Sparse, Border, Packaging).',
      icon: Palette,
      preview: (
        <div className="flex items-center justify-around p-5 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] gap-2">
          <StarSpark size={36} color="#297FC1" />
          <StreetStickerBadge text="DOH!" bgColor="#D92F2F" />
          <DonutIcon size={48} glazeColor="#EF9FBD" />
          <StarSpark size={36} color="#FFD23F" />
        </div>
      ),
      highlightPoints: [
        'Pattern Engine: Test Dense, Sparse, Border, and Packaging patterns with live zoom and canvas tints.',
        'Graphic Motifs: Donuts, sprinkles, star sparks, bubbles, smileys, Doh Boy, and "DOH" lettering.',
        'SVG Token Copying: One-click export for web backgrounds and packaging boxes.'
      ]
    },
    {
      title: 'Cheeky Brand Voice & Copywriting',
      tag: 'STEP 4 OF 5 • GOVERNANCE',
      desc: 'Short, punchy, confident, and friendly voice. Access 10 official taglines and the interactive Attitude Translator.',
      icon: MessageSquare,
      preview: (
        <div className="p-4 bg-white rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-2">
          <div className="p-2 bg-[#FDEFEB] rounded-xl border border-[#07334F] text-center">
            <span className="font-fun text-sm font-black text-[#D92F2F]">
              “GOOD DOUGH. BAD ATTITUDE.”
            </span>
          </div>
          <div className="p-2 bg-[#FDEFEB] rounded-xl border border-[#07334F] text-center">
            <span className="font-fun text-sm font-black text-[#07334F]">
              “BITE FIRST. THINK LATER.”
            </span>
          </div>
        </div>
      ),
      highlightPoints: [
        'Tagline Vault: "DONUT WORRY.", "JUST ONE MORE.", "YOU KNOW YOU WANT ONE."',
        'Attitude Translator: Convert boring corporate memo copy into snappy street punchlines.',
        'Copywriting Matrix: Context-specific guidance for packaging, social media, and receipts.'
      ]
    },
    {
      title: 'User Profile, Saved Preferences & Game',
      tag: 'STEP 5 OF 5 • PROFILE & SAVES',
      desc: 'Sign up, customize your avatar, save brand preferences, and challenge your reflexes with the Doh-Nut Crafter mini-game!',
      icon: User,
      preview: (
        <div className="flex items-center justify-between p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] gap-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#EF9FBD] border-2 border-[#07334F] flex items-center justify-center">
              <DohBoyMascot pose="happy" size={32} />
            </div>
            <div>
              <div className="text-xs font-black text-[#07334F]">DohMaster</div>
              <div className="text-[9px] font-bold text-[#D92F2F]">Lead Brand Designer</div>
            </div>
          </div>
          <div className="px-2.5 py-1 bg-[#FFD23F] rounded-xl border-2 border-[#07334F] text-[10px] font-black text-[#07334F] flex items-center gap-1">
            <Gamepad2 size={12} />
            <span>Mini-Game</span>
          </div>
        </div>
      ),
      highlightPoints: [
        'Profile Customization: Choose from 7 custom avatars and save roles.',
        'Favorite Tokens: Bookmark color palettes, patterns, and taglines.',
        'Donut Crafter Game: Catch falling glazes, create custom flavor boxes, and log high scores!'
      ]
    }
  ];

  const handleFinish = () => {
    if (dontShowAgain) {
      localStorage.setItem('dohnut_onboarding_completed', 'true');
    }
    onClose();
  };

  const current = steps[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07334F]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border-4 border-[#07334F] shadow-[10px_10px_0px_0px_#07334F] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#FDEFEB] border-b-3 border-[#07334F]">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-[#D92F2F] text-white rounded-xl border-2 border-[#07334F]">
              <current.icon size={18} />
            </span>
            <div>
              <span className="text-[10px] font-black tracking-widest uppercase text-[#297FC1] block">
                {current.tag}
              </span>
              <h3 className="font-fun text-lg font-black text-[#07334F] leading-tight">
                {current.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white text-[#07334F] border-2 border-[#07334F] hover:bg-[#D92F2F] hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Visual Preview */}
          <div className="w-full">
            {current.preview}
          </div>

          {/* Description */}
          <p className="text-sm font-bold text-[#07334F]/90 leading-relaxed">
            {current.desc}
          </p>

          {/* Key Feature Checklist */}
          <div className="p-4 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] space-y-2.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#07334F] block">
              Core Capabilities:
            </span>
            {current.highlightPoints.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs font-bold text-[#07334F]">
                <CheckCircle size={14} className="text-[#48BB78] shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-[#FDEFEB] border-t-3 border-[#07334F]">
          {/* Step Progress Indicators */}
          <div className="flex items-center gap-1.5">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentStep(i)}
                className={`h-2.5 rounded-full transition-all border border-[#07334F] ${
                  currentStep === i
                    ? 'w-7 bg-[#D92F2F]'
                    : 'w-2.5 bg-white hover:bg-[#EF9FBD]'
                }`}
                title={`Go to step ${i + 1}`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-4 py-2 rounded-xl text-xs font-black bg-white text-[#07334F] border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] hover:bg-[#FDEFEB] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center gap-1"
              >
                <ChevronLeft size={14} />
                <span>Back</span>
              </button>
            )}

            {currentStep < steps.length - 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-5 py-2 rounded-xl text-xs font-black bg-[#297FC1] text-[#FDEFEB] border-2 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] hover:bg-[#1E68A3] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center gap-1.5"
              >
                <span>Next Step</span>
                <ChevronRight size={14} />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                className="px-6 py-2 rounded-xl text-xs font-black bg-[#D92F2F] text-[#FDEFEB] border-2 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] hover:bg-[#B72424] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center gap-1.5"
              >
                <span>Start Exploring</span>
                <Sparkles size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
