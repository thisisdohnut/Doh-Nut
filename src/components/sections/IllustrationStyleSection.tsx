import React from 'react';
import { DohBoyMascot } from '../brand/DohBoyMascot';
import { Check, X } from 'lucide-react';

export const IllustrationStyleSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Visual Principles */}
      <div className="bg-white p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] text-xs font-black rounded-lg uppercase">
            ILLUSTRATION DNA
          </span>
          <h3 className="font-fun text-2xl font-black text-[#07334F]">
            Vector Character & Asset Rules
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] space-y-2">
            <div className="font-display font-black text-sm text-[#D92F2F]">
              1. Flat Color Fills
            </div>
            <p className="text-xs text-[#07334F]/80 leading-relaxed font-medium">
              Use solid, vibrant Pantone-matched flat color fills with zero airbrushed shading or pseudo-realistic gradient meshes.
            </p>
          </div>

          <div className="p-4 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] space-y-2">
            <div className="font-display font-black text-sm text-[#297FC1]">
              2. Heavy Outline Geometry
            </div>
            <p className="text-xs text-[#07334F]/80 leading-relaxed font-medium">
              Every asset must be bounded by consistent 3pt–6pt solid Deep Navy (#07334F) strokes with rounded caps and joins.
            </p>
          </div>

          <div className="p-4 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] space-y-2">
            <div className="font-display font-black text-sm text-[#07334F]">
              3. Street Fashion Accents
            </div>
            <p className="text-xs text-[#07334F]/80 leading-relaxed font-medium">
              Characters incorporate streetwear culture touchpoints—high-top sneakers, snapbacks, sunglasses, and skate stickers.
            </p>
          </div>
        </div>
      </div>

      {/* Illustration DO vs DON'T */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* DO: Flat & Bold */}
        <div className="bg-white p-6 rounded-3xl border-4 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] space-y-4">
          <div className="flex items-center gap-2 text-[#48BB78] font-black text-sm uppercase">
            <Check size={18} />
            <span>APPROVED: Flat Street Vector</span>
          </div>

          <div className="p-6 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] flex items-center justify-center min-h-[200px]">
            <DohBoyMascot pose="hero" size={150} />
          </div>

          <ul className="text-xs text-[#07334F] space-y-1.5 font-medium list-disc list-inside">
            <li>Solid flat tones with deep navy outline</li>
            <li>Exaggerated cartoon eyes and open smile</li>
            <li>Geometric rainbow sprinkles</li>
          </ul>
        </div>

        {/* DON'T: 3D / Realism */}
        <div className="bg-white p-6 rounded-3xl border-4 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] space-y-4">
          <div className="flex items-center gap-2 text-[#D92F2F] font-black text-sm uppercase">
            <X size={18} />
            <span>STRICTLY FORBIDDEN: 3D Gloss / Realistic</span>
          </div>

          <div className="p-6 bg-gray-100 rounded-2xl border-2 border-dashed border-red-400 flex items-center justify-center min-h-[200px] text-center">
            <div className="space-y-2">
              <div className="w-24 h-24 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ff9999,#990000)] mx-auto shadow-2xl blur-[0.5px]" />
              <span className="text-[11px] font-bold text-red-600 uppercase block">
                [ No 3D CGI / Glossy Specular Renders ]
              </span>
            </div>
          </div>

          <ul className="text-xs text-red-700 space-y-1.5 font-medium list-disc list-inside">
            <li>No hyper-realistic 3D CGI dough textures</li>
            <li>No glossy lighting reflections or plastic shaders</li>
            <li>No delicate thin lines or sketch watercolor</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
