import React, { useState } from 'react';
import { BRAND_COLORS } from '../../data/brandData';
import { Check, Copy, X } from 'lucide-react';

interface FigmaExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FigmaExportModal: React.FC<FigmaExportModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'prompt' | 'tokens' | 'css'>('prompt');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const figmaPromptText = `Create a complete, polished, professional Brand Guidelines / Brand Identity System for a Malaysian donut brand called DOH-NUT.

Personality: Playful, Cheeky, Friendly, Youthful, Bold, Energetic, Malaysian street-food spirit.
Brand Idea: "Donuts with attitude."

Colour System:
- DOH-NUT RED: #D92F2F (Primary energetic brand colour)
- DEEP NAVY: #07334F (Outlines, typography, contrast, structure)
- BRIGHT CYAN: #297FC1 (Secondary accent & outer logo border)
- CREAM: #FDEFEB (Primary light background & warm neutral)
- STRAWBERRY PINK: #EF9FBD (Playful accent, frosting & Doh Boy character)

Master Logo: Bold "Doh-Nut" wordmark inside a rounded red badge with cream lettering, deep navy outline, and bright cyan outer border.
Mascot: "DOH BOY" - street-style donut mascot with pink strawberry glaze, rainbow sprinkles, big expressive eyes, confident smile, and sneakers.`;

  const jsonTokens = {
    brand: "DOH-NUT",
    colors: {
      primary: {
        red: { value: "#D92F2F", type: "color" },
        navy: { value: "#07334F", type: "color" },
        cream: { value: "#FDEFEB", type: "color" }
      },
      secondary: {
        cyan: { value: "#297FC1", type: "color" },
        pink: { value: "#EF9FBD", type: "color" }
      }
    },
    typography: {
      display: "Titan One, Fredoka",
      subhead: "Plus Jakarta Sans Bold",
      body: "Plus Jakarta Sans Regular"
    },
    borderRadius: {
      badge: "44px",
      card: "24px",
      pill: "9999px"
    },
    borderWidth: {
      stroke: "3px solid #07334F",
      thick: "4.5px solid #07334F"
    }
  };

  const cssVariables = `:root {
  --color-dohnut-red: #D92F2F;
  --color-dohnut-navy: #07334F;
  --color-dohnut-cream: #FDEFEB;
  --color-dohnut-cyan: #297FC1;
  --color-dohnut-pink: #EF9FBD;

  --font-display: "Titan One", "Fredoka", cursive;
  --font-body: "Plus Jakarta Sans", sans-serif;

  --border-stroke: 3px solid #07334F;
  --shadow-street: 4px 4px 0px 0px #07334F;
}`;

  const getCopyContent = () => {
    switch (activeTab) {
      case 'prompt':
        return figmaPromptText;
      case 'tokens':
        return JSON.stringify(jsonTokens, null, 2);
      case 'css':
        return cssVariables;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCopyContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FDEFEB] w-full max-w-2xl rounded-3xl border-4 border-[#07334F] shadow-[8px_8px_0px_0px_#07334F] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b-4 border-[#07334F] bg-white">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-[#D92F2F] text-[#FDEFEB] rounded-xl font-display font-black text-xs border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
              FIGMA SPEC
            </span>
            <h3 className="font-fun text-2xl font-black text-[#07334F]">
              Export Tokens & Figma Prompt
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl border-2.5 border-[#07334F] hover:bg-[#D92F2F] hover:text-[#FDEFEB] shadow-[2px_2px_0px_0px_#07334F] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 p-4 bg-[#07334F]/5 border-b-3 border-[#07334F]">
          {[
            { id: 'prompt', label: 'Figma Make Prompt' },
            { id: 'tokens', label: 'JSON Design Tokens' },
            { id: 'css', label: 'CSS Variables' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all border-2 border-[#07334F] ${
                activeTab === tab.id
                  ? 'bg-[#D92F2F] text-[#FDEFEB] shadow-[3px_3px_0px_0px_#07334F]'
                  : 'bg-white text-[#07334F] hover:bg-[#EF9FBD] shadow-[1px_1px_0px_0px_#07334F]'
              } active:translate-x-[1px] active:translate-y-[1px] active:shadow-none`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code / Content Area */}
        <div className="p-6 overflow-y-auto flex-1 font-mono text-xs dot-pattern-paper">
          <pre className="bg-[#07334F] text-[#FDEFEB] p-5 rounded-2xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] overflow-x-auto whitespace-pre-wrap leading-relaxed">
            {getCopyContent()}
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t-4 border-[#07334F] flex items-center justify-between">
          <span className="text-xs font-bold text-[#07334F]">
            Ready to paste directly into Figma or codebases
          </span>
          <button
            onClick={handleCopy}
            className="px-5 py-2.5 bg-[#D92F2F] text-[#FDEFEB] font-display font-black text-xs rounded-xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#07334F] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all flex items-center gap-2"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy to Clipboard'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
