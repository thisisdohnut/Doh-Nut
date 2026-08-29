import React, { useState } from 'react';
import { BRAND_COLORS, COLOR_COMBINATIONS } from '../../data/brandData';
import { Check, Copy, Sparkles, Layers, Sliders, CheckCircle2, FileCode2, ExternalLink } from 'lucide-react';

export const ColorSystemSection: React.FC = () => {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedValue(text);
    setCopiedLabel(label);
    setTimeout(() => {
      setCopiedValue(null);
      setCopiedLabel(null);
    }, 2200);
  };

  const copyAllFigmaTokens = () => {
    const figmaJson = JSON.stringify(
      {
        dohnut_brand_palette: BRAND_COLORS.reduce((acc, col) => {
          acc[col.id] = {
            name: col.name,
            role: col.role,
            hex: col.hex,
            rgb: col.rgb,
            cmyk: col.cmyk,
            pantone: col.pantone || 'N/A'
          };
          return acc;
        }, {} as Record<string, any>)
      },
      null,
      2
    );
    copyToClipboard(figmaJson, 'All Figma Color Tokens');
  };

  return (
    <div className="space-y-12">
      {/* Toast Notification Bar */}
      {copiedValue && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#07334F] text-[#FDEFEB] px-5 py-3 rounded-2xl border-3 border-[#FFD23F] shadow-[6px_6px_0px_0px_#D92F2F] flex items-center gap-3 animate-bounce">
          <div className="p-1.5 bg-[#48BB78] rounded-xl text-white">
            <Check size={16} />
          </div>
          <div>
            <div className="font-fun text-xs font-black text-[#FFD23F]">COPIED TO CLIPBOARD!</div>
            <div className="text-xs font-mono font-bold text-[#FDEFEB]">{copiedLabel}: {copiedValue.slice(0, 32)}</div>
          </div>
        </div>
      )}

      {/* Interactive Helper Banner */}
      <div className="p-5 bg-[#FDEFEB] rounded-3xl border-3.5 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#FFD23F] text-[#07334F] rounded-2xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
            <Sparkles size={20} />
          </div>
          <div>
            <h4 className="font-fun text-base font-black text-[#07334F]">
              INTERACTIVE FIGMA-READY COLOR SPEC
            </h4>
            <p className="text-xs font-bold text-[#07334F]/80">
              Click <strong className="text-[#D92F2F]">any swatch card</strong> or individual <strong className="text-[#297FC1]">HEX, RGB, CMYK, or Pantone</strong> value to copy directly to your clipboard.
            </p>
          </div>
        </div>

        <button
          onClick={copyAllFigmaTokens}
          className="px-4 py-2 bg-[#07334F] text-[#FFD23F] hover:bg-[#297FC1] font-fun text-xs font-black rounded-xl border-2 border-[#07334F] shadow-[3px_3px_0px_0px_#D92F2F] flex items-center gap-2 transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
        >
          <FileCode2 size={15} />
          Copy All Tokens (Figma JSON)
        </button>
      </div>

      {/* Primary Palette */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] font-black text-xs rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
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
              className="bg-white rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] overflow-hidden flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_#297FC1] transition-all"
            >
              {/* Color Swatch Block - Clickable */}
              <div
                onClick={() => copyToClipboard(color.hex, `${color.name} HEX`)}
                className="h-44 p-6 flex flex-col justify-between relative transition-all cursor-pointer group select-none"
                style={{ backgroundColor: color.hex, color: color.textColor }}
                title="Click to copy HEX"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#07334F] text-[#FDEFEB] border border-white/20 uppercase tracking-wider">
                    {color.role}
                  </span>
                  <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm group-hover:bg-white/40 border border-white/30 text-white transition-all flex items-center gap-1">
                    {copiedValue === color.hex ? <Check size={16} /> : <Copy size={16} />}
                    <span className="text-[10px] font-black hidden group-hover:inline">Copy HEX</span>
                  </div>
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

              {/* Color Details & Specs - Individual Clickable Rows */}
              <div className="p-6 bg-white space-y-4 text-xs">
                <p className="text-[#07334F]/80 leading-relaxed font-medium">
                  {color.description}
                </p>

                <div className="space-y-2 pt-2 border-t-2 border-[#07334F]/10">
                  {/* HEX */}
                  <button
                    onClick={() => copyToClipboard(color.hex, `${color.name} HEX`)}
                    className="w-full flex justify-between items-center py-1.5 px-2 rounded-lg hover:bg-[#FDEFEB] transition-colors group text-left"
                  >
                    <span className="text-gray-500 font-bold">HEX Code</span>
                    <span className="font-mono font-black text-[#D92F2F] group-hover:underline flex items-center gap-1">
                      {color.hex} <Copy size={12} className="opacity-0 group-hover:opacity-100" />
                    </span>
                  </button>

                  {/* RGB */}
                  <button
                    onClick={() => copyToClipboard(color.rgb, `${color.name} RGB`)}
                    className="w-full flex justify-between items-center py-1.5 px-2 rounded-lg hover:bg-[#FDEFEB] transition-colors group text-left"
                  >
                    <span className="text-gray-500 font-bold">RGB Values</span>
                    <span className="font-mono font-bold text-[#07334F] group-hover:underline flex items-center gap-1">
                      {color.rgb} <Copy size={12} className="opacity-0 group-hover:opacity-100" />
                    </span>
                  </button>

                  {/* CMYK */}
                  <button
                    onClick={() => copyToClipboard(color.cmyk, `${color.name} CMYK`)}
                    className="w-full flex justify-between items-center py-1.5 px-2 rounded-lg hover:bg-[#FDEFEB] transition-colors group text-left"
                  >
                    <span className="text-gray-500 font-bold">CMYK Print</span>
                    <span className="font-mono font-bold text-[#07334F] group-hover:underline flex items-center gap-1">
                      {color.cmyk} <Copy size={12} className="opacity-0 group-hover:opacity-100" />
                    </span>
                  </button>

                  {/* Pantone */}
                  {color.pantone && (
                    <button
                      onClick={() => copyToClipboard(color.pantone!, `${color.name} Pantone`)}
                      className="w-full flex justify-between items-center py-1.5 px-2 rounded-lg hover:bg-[#FDEFEB] transition-colors group text-left"
                    >
                      <span className="text-gray-500 font-bold">Pantone Match</span>
                      <span className="font-mono font-bold text-[#297FC1] group-hover:underline flex items-center gap-1">
                        {color.pantone} <Copy size={12} className="opacity-0 group-hover:opacity-100" />
                      </span>
                    </button>
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
          <div className="px-3 py-1 bg-[#297FC1] text-[#FDEFEB] font-black text-xs rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
            SECONDARY ACCENTS
          </div>
          <h3 className="font-display font-black text-xl text-[#07334F]">
            Playful Accents (Bright Cyan + Strawberry Pink + Butter Gold)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BRAND_COLORS.filter((c) => c.role === 'secondary').map((color) => (
            <div
              key={color.id}
              className="bg-white rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] overflow-hidden flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_#297FC1] transition-all"
            >
              <div
                onClick={() => copyToClipboard(color.hex, `${color.name} HEX`)}
                className="h-40 p-6 flex flex-col justify-between relative group cursor-pointer select-none transition-all"
                style={{ backgroundColor: color.hex, color: color.textColor }}
                title="Click to copy HEX"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#07334F] text-[#FDEFEB] border border-white/20 uppercase tracking-wider">
                    {color.role} Accent
                  </span>
                  <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm group-hover:bg-white/40 border border-white/30 text-white transition-all flex items-center gap-1">
                    {copiedValue === color.hex ? <Check size={16} /> : <Copy size={16} />}
                    <span className="text-[10px] font-black hidden group-hover:inline">Copy HEX</span>
                  </div>
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
                  <button
                    onClick={() => copyToClipboard(color.hex, `${color.name} HEX`)}
                    className="w-full flex justify-between items-center py-1.5 px-2 rounded-lg hover:bg-[#FDEFEB] transition-colors group text-left"
                  >
                    <span className="text-gray-500 font-bold">HEX Code</span>
                    <span className="font-mono font-black text-[#D92F2F] group-hover:underline flex items-center gap-1">
                      {color.hex} <Copy size={12} className="opacity-0 group-hover:opacity-100" />
                    </span>
                  </button>

                  <button
                    onClick={() => copyToClipboard(color.rgb, `${color.name} RGB`)}
                    className="w-full flex justify-between items-center py-1.5 px-2 rounded-lg hover:bg-[#FDEFEB] transition-colors group text-left"
                  >
                    <span className="text-gray-500 font-bold">RGB</span>
                    <span className="font-mono font-bold text-[#07334F] group-hover:underline flex items-center gap-1">
                      {color.rgb} <Copy size={12} className="opacity-0 group-hover:opacity-100" />
                    </span>
                  </button>

                  <button
                    onClick={() => copyToClipboard(color.cmyk, `${color.name} CMYK`)}
                    className="w-full flex justify-between items-center py-1.5 px-2 rounded-lg hover:bg-[#FDEFEB] transition-colors group text-left"
                  >
                    <span className="text-gray-500 font-bold">CMYK</span>
                    <span className="font-mono font-bold text-[#07334F] group-hover:underline flex items-center gap-1">
                      {color.cmyk} <Copy size={12} className="opacity-0 group-hover:opacity-100" />
                    </span>
                  </button>

                  {color.pantone && (
                    <button
                      onClick={() => copyToClipboard(color.pantone!, `${color.name} Pantone`)}
                      className="w-full flex justify-between items-center py-1.5 px-2 rounded-lg hover:bg-[#FDEFEB] transition-colors group text-left"
                    >
                      <span className="text-gray-500 font-bold">Pantone</span>
                      <span className="font-mono font-bold text-[#297FC1] group-hover:underline flex items-center gap-1">
                        {color.pantone} <Copy size={12} className="opacity-0 group-hover:opacity-100" />
                      </span>
                    </button>
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
          <div className="px-3 py-1 bg-[#07334F] text-[#FDEFEB] font-black text-xs rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
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
              className="p-6 rounded-3xl border-4 transition-all hover:scale-[1.02] cursor-pointer"
              onClick={() => copyToClipboard(`BG: ${combo.bg}, Headline: ${combo.headline}, Accent: ${combo.accent}`, combo.title)}
              style={{
                backgroundColor: combo.bg,
                borderColor: combo.border,
                boxShadow: `4px 4px 0px 0px ${combo.border}`
              }}
              title="Click to copy combo tokens"
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
              <div className="flex items-center justify-between pt-3 border-t border-black/10 text-[10px] font-mono font-bold">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-black/20" style={{ backgroundColor: combo.bg }} title="Background" />
                  <div className="w-5 h-5 rounded-full border border-black/20" style={{ backgroundColor: combo.headline }} title="Headline" />
                  <div className="w-5 h-5 rounded-full border border-black/20" style={{ backgroundColor: combo.accent }} title="Accent" />
                </div>
                <span className="opacity-70 flex items-center gap-1">Click to copy <Copy size={11} /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

