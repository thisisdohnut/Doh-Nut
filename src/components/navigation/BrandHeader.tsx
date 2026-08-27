import React from 'react';
import { Sparkles, Download, Layers, Presentation, Search, HelpCircle, User, Gamepad2, Palette, Printer } from 'lucide-react';
import { DohNutLogo } from '../brand/DohNutLogo';
import { UserProfile } from '../../types';
import { DohBoyMascot } from '../brand/DohBoyMascot';
import { DonutIcon, StreetStickerBadge } from '../brand/GraphicElements';

interface BrandHeaderProps {
  onOpenFigmaExport: () => void;
  presentationMode: boolean;
  onTogglePresentation: () => void;
  printViewMode?: boolean;
  onTogglePrintView?: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeSectionId: string;
  onOpenTutorial: () => void;
  onOpenProfile: () => void;
  onNavigateAssets: () => void;
  onNavigateMoodboard?: () => void;
  userProfile: UserProfile;
}

export const BrandHeader: React.FC<BrandHeaderProps> = ({
  onOpenFigmaExport,
  presentationMode,
  onTogglePresentation,
  printViewMode = false,
  onTogglePrintView,
  searchQuery,
  onSearchChange,
  activeSectionId,
  onOpenTutorial,
  onOpenProfile,
  onNavigateAssets,
  onNavigateMoodboard,
  userProfile,
}) => {
  const renderAvatarMini = () => {
    switch (userProfile.avatarType) {
      case 'dohboy-hero':
      case 'dohboy-happy':
      case 'dohboy-excited':
      case 'dohboy-eating':
        return <DohBoyMascot pose="hero" size={24} />;
      case 'donut-strawberry':
        return <DonutIcon size={20} glazeColor="#EF9FBD" />;
      case 'donut-cyan':
        return <DonutIcon size={20} glazeColor="#297FC1" />;
      case 'badge-street':
      default:
        return <StreetStickerBadge text="DOH" bgColor="#D92F2F" rotation={0} />;
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDEFEB] border-b-4 border-[#07334F] py-3 px-4 sm:px-8 transition-all">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Brand Logo & Creative Tool Title */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="scale-75 origin-left">
              <DohNutLogo variant="compact" size={60} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-fun text-xl sm:text-2xl font-black text-[#07334F] tracking-wide">
                  DOH-NUT
                </h1>
                <span className="px-2.5 py-0.5 bg-[#D92F2F] text-[#FDEFEB] text-[10px] font-black rounded-lg uppercase tracking-wider border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
                  BRAND SYSTEM
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 bg-[#FFD23F] text-[#07334F] text-[10px] font-black rounded-lg border-2 border-[#07334F]">
                  v1.0 FIGMA READY
                </span>
              </div>
              <p className="text-[11px] font-bold text-[#07334F]/80 hidden sm:block">
                Malaysian Street Dough Brand Guidelines & Design Tokens
              </p>
            </div>
          </div>
        </div>

        {/* Search & Actions with Brutalist Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Search bar */}
          <div className="relative hidden lg:block w-44 xl:w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#07334F]" size={14} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Filter 22 sections..."
              className="w-full pl-8 pr-3 py-1.5 bg-white text-xs font-black text-[#07334F] rounded-xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] focus:outline-none focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-[2px_2px_0px_0px_#07334F]"
            />
          </div>

          {/* Moodboard Studio Button */}
          {onNavigateMoodboard && (
            <button
              onClick={onNavigateMoodboard}
              className={`px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider border-3 border-[#07334F] flex items-center gap-1.5 transition-all ${
                activeSectionId === 'sec-23'
                  ? 'bg-[#FFD23F] text-[#07334F] shadow-[3px_3px_0px_0px_#07334F]'
                  : 'bg-white text-[#07334F] shadow-[3px_3px_0px_0px_#07334F] hover:bg-[#EF9FBD]'
              } active:translate-x-[2px] active:translate-y-[2px] active:shadow-none`}
              title="Jump to Drag & Drop Moodboard Builder Studio"
            >
              <Palette size={15} className={activeSectionId === 'sec-23' ? 'text-[#D92F2F]' : 'text-[#297FC1]'} />
              <span className="hidden sm:inline">Moodboard</span>
            </button>
          )}

          {/* Download Assets Hub Button */}
          <button
            onClick={onNavigateAssets}
            className={`px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider border-3 border-[#07334F] flex items-center gap-1.5 transition-all ${
              activeSectionId === 'sec-21'
                ? 'bg-[#D92F2F] text-[#FDEFEB] shadow-[3px_3px_0px_0px_#07334F]'
                : 'bg-white text-[#07334F] shadow-[3px_3px_0px_0px_#07334F] hover:bg-[#FFD23F]'
            } active:translate-x-[2px] active:translate-y-[2px] active:shadow-none`}
            title="Jump to Downloadable High-Res Assets & Vector Exports"
          >
            <Download size={15} className={activeSectionId === 'sec-21' ? 'text-[#FDEFEB]' : 'text-[#D92F2F]'} />
            <span className="hidden sm:inline">Assets Hub</span>
          </button>

          {/* Quick Tour / Tutorial Button */}
          <button
            onClick={onOpenTutorial}
            className="px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider border-3 border-[#07334F] bg-white text-[#07334F] shadow-[3px_3px_0px_0px_#07334F] hover:bg-[#FFD23F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-1.5"
            title="Open Interactive Onboarding Tutorial"
          >
            <HelpCircle size={15} className="text-[#D92F2F]" />
            <span className="hidden sm:inline">Guide Tour</span>
          </button>

          {/* Presentation Mode Toggle */}
          <button
            onClick={onTogglePresentation}
            className={`px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider border-3 border-[#07334F] flex items-center gap-1.5 transition-all ${
              presentationMode
                ? 'bg-[#297FC1] text-[#FDEFEB] shadow-[3px_3px_0px_0px_#07334F]'
                : 'bg-white text-[#07334F] shadow-[3px_3px_0px_0px_#07334F] hover:bg-[#EF9FBD]'
            } active:translate-x-[2px] active:translate-y-[2px] active:shadow-none`}
            title="Toggle Slide by Slide Presentation Mode"
          >
            <Presentation size={15} />
            <span className="hidden sm:inline">{presentationMode ? 'Slide View' : 'Deck'}</span>
          </button>

          {/* Print View / PDF Layout Toggle */}
          {onTogglePrintView && (
            <button
              onClick={onTogglePrintView}
              className={`px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider border-3 border-[#07334F] flex items-center gap-1.5 transition-all ${
                printViewMode
                  ? 'bg-[#D92F2F] text-[#FDEFEB] shadow-[3px_3px_0px_0px_#07334F]'
                  : 'bg-white text-[#07334F] shadow-[3px_3px_0px_0px_#07334F] hover:bg-[#FFD23F]'
              } active:translate-x-[2px] active:translate-y-[2px] active:shadow-none`}
              title="Toggle Clean A4 PDF & Printer Layout"
            >
              <Printer size={15} className={printViewMode ? 'text-[#FDEFEB]' : 'text-[#D92F2F]'} />
              <span className="hidden sm:inline">Print View</span>
            </button>
          )}

          {/* User Profile Button */}
          <button
            onClick={onOpenProfile}
            className="px-3 py-1.5 bg-[#FDEFEB] hover:bg-white text-[#07334F] rounded-xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2"
            title="View & Edit User Profile, Saved Preferences & Game"
          >
            <div className="w-6 h-6 rounded-full bg-white border-2 border-[#07334F] flex items-center justify-center overflow-hidden shrink-0">
              {renderAvatarMini()}
            </div>
            <div className="text-left hidden md:block leading-tight">
              <span className="font-fun text-xs font-black block truncate max-w-[90px]">
                {userProfile.username}
              </span>
              <span className="text-[9px] font-bold text-[#D92F2F] block truncate max-w-[90px]">
                {userProfile.role || 'Member'}
              </span>
            </div>
          </button>

          {/* Figma Export Button */}
          <button
            onClick={onOpenFigmaExport}
            className="px-3.5 sm:px-4 py-2 bg-[#D92F2F] text-[#FDEFEB] font-display font-black text-xs rounded-xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#07334F] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all flex items-center gap-2"
          >
            <Sparkles size={14} className="animate-spin" style={{ animationDuration: '4s' }} />
            <span className="hidden xs:inline">Figma Export</span>
          </button>
        </div>
      </div>
    </header>
  );
};

