import React, { useState } from 'react';
import { BRAND_COLORS, COLOR_COMBINATIONS } from '../../data/brandData';
import { Check, Copy } from 'lucide-react';

export const ColorSystemSection: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(label);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Primary Palette */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] font-black text-xs rounded-xl border-2 border-[#07334F]">
            PRIMARY HIERARCHY
          </div>
          <h3 className="font-display font-black text-xl text-[#07334F]">
            Core Brand Palette (Red + Navy + Cream)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BRAND_COLORS.filter((c) => c.role === 'primary').map((color) => (
            <div
              key={color.id}
              className="bg-white rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] overflow-hidden flex flex-col justify-between"
            >
              {/* Color Swatch Block */}
              <div
                className="h-44 p-6 flex flex-col justify-between relative transition-all group"
                style={{ backgroundColor: color.hex, color: color.textColor }}
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#07334F] text-[#FDEFEB] border border-white/20 uppercase tracking-wider">
                    {color.role}
                  </span>
                  <button
                    onClick={() => copyToClipboard(color.hex, color.hex)}
                    className="p-2 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/40 border border-white/30 text-white transition-all"
                    title="Copy HEX"
                  >
                    {copiedCode === color.hex ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>

                <div>
                  <h4 className="font-fun text-2xl font-black tracking-wide" style={{ color: color.textColor }}>
                    {color.name}
                  </h4>
                  <span className="font-mono text-base font-bold opacity-90 block mt-0.5">
                    {color.hex}
                  </span>
                </div>
              </div>

              {/* Color Details & Specs */}
              <div className="p-6 bg-white space-y-4 text-xs">
                <p className="text-[#07334F]/80 leading-relaxed font-medium">
                  {color.description}
                </p>

                <div className="space-y-2 pt-2 border-t-2 border-[#07334F]/10">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-500 font-bold">RGB</span>
                    <span className="font-mono font-bold text-[#07334F]">{color.rgb}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-500 font-bold">CMYK</span>
                    <span className="font-mono font-bold text-[#07334F]">{color.cmyk}</span>
                  </div>
                  {color.pantone && (
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-500 font-bold">Pantone</span>
                      <span className="font-mono font-bold text-[#07334F]">{color.pantone}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Palette */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="px-3 py-1 bg-[#297FC1] text-[#FDEFEB] font-black text-xs rounded-xl border-2 border-[#07334F]">
            SECONDARY ACCENTS
          </div>
          <h3 className="font-display font-black text-xl text-[#07334F]">
            Playful Accents (Bright Cyan + Strawberry Pink)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BRAND_COLORS.filter((c) => c.role === 'secondary').map((color) => (
            <div
              key={color.id}
              className="bg-white rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] overflow-hidden flex flex-col justify-between"
            >
              <div
                className="h-40 p-6 flex flex-col justify-between relative group"
                style={{ backgroundColor: color.hex, color: color.textColor }}
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#07334F] text-[#FDEFEB] border border-white/20 uppercase tracking-wider">
                    {color.role} Accent
                  </span>
                  <button
                    onClick={() => copyToClipboard(color.hex, color.hex)}
                    className="p-2 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/40 border border-white/30 text-white transition-all"
                    title="Copy HEX"
                  >
                    {copiedCode === color.hex ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>

                <div>
                  <h4 className="font-fun text-2xl font-black tracking-wide" style={{ color: color.textColor }}>
                    {color.name}
                  </h4>
                  <span className="font-mono text-base font-bold opacity-90 block mt-0.5">
                    {color.hex}
                  </span>
                </div>
              </div>

              <div className="p-6 bg-white space-y-4 text-xs">
                <p className="text-[#07334F]/80 leading-relaxed font-medium">
                  {color.description}
                </p>

                <div className="space-y-2 pt-2 border-t-2 border-[#07334F]/10">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-500 font-bold">RGB</span>
                    <span className="font-mono font-bold text-[#07334F]">{color.rgb}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-500 font-bold">CMYK</span>
                    <span className="font-mono font-bold text-[#07334F]">{color.cmyk}</span>
                  </div>
                  {color.pantone && (
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-500 font-bold">Pantone</span>
                      <span className="font-mono font-bold text-[#07334F]">{color.pantone}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Approved Colour Combinations */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="px-3 py-1 bg-[#07334F] text-[#FDEFEB] font-black text-xs rounded-xl border-2 border-[#07334F]">
            APPROVED PAIRINGS
          </div>
          <h3 className="font-display font-black text-xl text-[#07334F]">
            Verified High-Contrast Colour Combinations
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLOR_COMBINATIONS.map((combo) => (
            <div
              key={combo.id}
              className="p-6 rounded-3xl border-4 transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: combo.bg,
                borderColor: combo.border,
                boxShadow: `4px 4px 0px 0px ${combo.border}`
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <span
                  className="font-display font-black text-sm uppercase px-2 py-0.5 rounded border"
                  style={{
                    backgroundColor: combo.border,
                    color: combo.bg,
                    borderColor: combo.border
                  }}
                >
                  {combo.title}
                </span>
                <span
                  className="text-[10px] font-black px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: combo.accent, color: '#FDEFEB' }}
                >
                  {combo.rating}
                </span>
              </div>

              {/* Sample Typography Preview */}
              <div className="space-y-2 mb-4">
                <h4
                  className="font-fun text-xl font-black leading-tight"
                  style={{ color: combo.headline }}
                >
                  GOOD DOUGH.
                </h4>
                <p
                  className="text-xs font-semibold leading-relaxed"
                  style={{ color: combo.body }}
                >
                  {combo.description}
                </p>
              </div>

              {/* Palette tokens preview */}
              <div className="flex items-center gap-2 pt-3 border-t border-black/10">
                <div className="w-5 h-5 rounded-full border border-black/20" style={{ backgroundColor: combo.bg }} title="Background" />
                <div className="w-5 h-5 rounded-full border border-black/20" style={{ backgroundColor: combo.headline }} title="Headline" />
                <div className="w-5 h-5 rounded-full border border-black/20" style={{ backgroundColor: combo.accent }} title="Accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
