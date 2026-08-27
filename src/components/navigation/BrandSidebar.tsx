import React from 'react';
import { SECTIONS } from '../../data/brandData';
import { SectionItem } from '../../types';
import {
  Sparkles,
  Award,
  Maximize2,
  AlertTriangle,
  Palette,
  Layers,
  Type,
  Shapes,
  Smile,
  Brush,
  Grid,
  Camera,
  Package,
  Tag,
  Share2,
  Store,
  Shirt,
  MessageSquare,
  CheckSquare,
  Layout,
  Download,
  Gamepad2,
} from 'lucide-react';

interface BrandSidebarProps {
  activeSectionId: string;
  onSelectSection: (id: string) => void;
  filterCategory: string | null;
  onFilterCategory: (cat: string | null) => void;
}

export const BrandSidebar: React.FC<BrandSidebarProps> = ({
  activeSectionId,
  onSelectSection,
  filterCategory,
  onFilterCategory,
}) => {
  const categories = ['All', 'Foundation', 'Identity', 'Design System', 'Applications', 'Governance'];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles size={15} />;
      case 'Award': return <Award size={15} />;
      case 'Maximize2': return <Maximize2 size={15} />;
      case 'AlertTriangle': return <AlertTriangle size={15} />;
      case 'Palette': return <Palette size={15} />;
      case 'Layers': return <Layers size={15} />;
      case 'Type': return <Type size={15} />;
      case 'Shapes': return <Shapes size={15} />;
      case 'Smile': return <Smile size={15} />;
      case 'Brush': return <Brush size={15} />;
      case 'Grid': return <Grid size={15} />;
      case 'Camera': return <Camera size={15} />;
      case 'Package': return <Package size={15} />;
      case 'Tag': return <Tag size={15} />;
      case 'Share2': return <Share2 size={15} />;
      case 'Store': return <Store size={15} />;
      case 'Shirt': return <Shirt size={15} />;
      case 'MessageSquare': return <MessageSquare size={15} />;
      case 'CheckSquare': return <CheckSquare size={15} />;
      case 'Layout': return <Layout size={15} />;
      case 'Download': return <Download size={15} />;
      case 'Gamepad2': return <Gamepad2 size={15} />;
      default: return <Sparkles size={15} />;
    }
  };

  const filteredSections = SECTIONS.filter(
    (s) => !filterCategory || filterCategory === 'All' || s.category === filterCategory
  );

  return (
    <aside className="w-full lg:w-72 flex-shrink-0 space-y-4">
      {/* Category Pills - Brutalist Toolbar Style */}
      <div className="bg-white p-3 rounded-2xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] overflow-x-auto">
        <div className="text-[10px] font-black uppercase tracking-wider text-[#07334F] mb-2 flex items-center justify-between">
          <span>CATEGORY FILTER</span>
          <span className="text-[#297FC1]">FIGMA SPEC</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onFilterCategory(cat === 'All' ? null : cat)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all border-2 border-[#07334F] ${
                (cat === 'All' && !filterCategory) || filterCategory === cat
                  ? 'bg-[#D92F2F] text-[#FDEFEB] shadow-[2px_2px_0px_0px_#07334F]'
                  : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#EF9FBD] shadow-[1px_1px_0px_0px_#07334F]'
              } active:translate-x-[1px] active:translate-y-[1px] active:shadow-none`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Sections List - Brutalist Creative Tool Index */}
      <div className="bg-white rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] p-3 max-h-[calc(100vh-160px)] overflow-y-auto space-y-1.5">
        <div className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-[#07334F] border-b-2 border-[#07334F] mb-2 flex justify-between items-center bg-[#FDEFEB] rounded-xl">
          <span>SPEC MODULES ({SECTIONS.length})</span>
          <span className="font-mono text-[#D92F2F]">{SECTIONS.length} / {SECTIONS.length}</span>
        </div>

        {filteredSections.map((sec) => {
          const isActive = activeSectionId === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              className={`w-full text-left p-2.5 rounded-2xl flex items-center gap-3 transition-all border-2 ${
                isActive
                  ? 'bg-[#07334F] text-[#FDEFEB] border-[#07334F] shadow-[3px_3px_0px_0px_#D92F2F] translate-x-[2px]'
                  : 'hover:bg-[#FDEFEB] text-[#07334F] border-transparent hover:border-[#07334F]'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-xl flex items-center justify-center font-display font-black text-xs flex-shrink-0 border-2 border-[#07334F] ${
                  isActive ? 'bg-[#D92F2F] text-[#FDEFEB]' : 'bg-[#EF9FBD] text-[#07334F]'
                }`}
              >
                {sec.number}
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-xs font-black truncate font-display">
                  {sec.title}
                </div>
                <div className={`text-[10px] truncate font-bold ${isActive ? 'text-[#FFD23F]' : 'text-[#297FC1]'}`}>
                  {sec.category}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
