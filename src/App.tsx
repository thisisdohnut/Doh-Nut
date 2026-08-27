import React, { useState, useEffect, useRef } from 'react';
import { SECTIONS } from './data/brandData';
import { BrandHeader } from './components/navigation/BrandHeader';
import { BrandSidebar } from './components/navigation/BrandSidebar';
import { FigmaExportModal } from './components/brand/FigmaExportModal';
import { DohNutLogo } from './components/brand/DohNutLogo';
import { DohBoyMascot } from './components/brand/DohBoyMascot';
import { BrandFoundationSection } from './components/sections/BrandFoundationSection';
import { LogoMisuseSection } from './components/sections/LogoMisuseSection';
import { ColorSystemSection } from './components/brand/ColorSystemSection';
import { TypographySection } from './components/brand/TypographySection';
import { GraphicElementsShowcase } from './components/sections/GraphicElementsShowcase';
import { IllustrationStyleSection } from './components/sections/IllustrationStyleSection';
import { PhotographyDirectionSection } from './components/sections/PhotographyDirectionSection';
import { Patterns } from './components/brand/Patterns';
import { PackagingMockups } from './components/brand/PackagingMockups';
import { StickerSystem } from './components/brand/StickerSystem';
import { SocialMediaMockups } from './components/brand/SocialMediaMockups';
import { SignageAndStore } from './components/brand/SignageAndStore';
import { MerchApplications } from './components/brand/MerchApplications';
import { BrandVoiceSection } from './components/sections/BrandVoiceSection';
import { BrandChecklistSection } from './components/sections/BrandChecklistSection';
import { FinalBrandBoard } from './components/brand/FinalBrandBoard';
import { DownloadableAssetsSection } from './components/brand/DownloadableAssetsSection';
import { DohCatcherGame } from './components/brand/DohCatcherGame';
import { MoodboardBuilder } from './components/brand/MoodboardBuilder';
import { PrintViewLayout } from './components/brand/PrintViewLayout';
import { OnboardingTutorial } from './components/onboarding/OnboardingTutorial';
import { UserProfileModal } from './components/profile/UserProfileModal';
import { LogoVariant, DohBoyPose, UserProfile } from './types';
import { ChevronLeft, ChevronRight, Sparkles, Layers, CheckCircle2, Printer } from 'lucide-react';

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState('sec-01');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [presentationMode, setPresentationMode] = useState(false);
  const [printViewMode, setPrintViewMode] = useState(false);
  const [isFigmaModalOpen, setIsFigmaModalOpen] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // User Profile state
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('dohnut_user_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return {
      username: 'DohMaster99',
      email: 'designer@dohnut.com',
      avatarType: 'dohboy-hero',
      role: 'Lead Brand Designer',
      bio: 'Crafting bold street donut identities, packaging, and high-contrast vector systems for DOH-NUT Malaysia.',
      favoriteTagline: 'GOOD DOUGH. BAD ATTITUDE.',
      donutGameHighScore: 80,
      customDonutCreations: [
        {
          id: 'donut-1',
          name: 'Strawberry Velvet Bomb',
          glazeColor: '#EF9FBD',
          sprinkleType: 'Confetti Pop',
          date: '10/24/2026'
        },
        {
          id: 'donut-2',
          name: 'Electric Cyan Glaze',
          glazeColor: '#297FC1',
          sprinkleType: 'Gold Stars',
          date: '10/25/2026'
        }
      ]
    };
  });

  const handleUpdateProfile = (updated: UserProfile) => {
    setUserProfile(updated);
    localStorage.setItem('dohnut_user_profile', JSON.stringify(updated));
  };

  // Logo Section 02 state
  const [activeLogoVariant, setActiveLogoVariant] = useState<LogoVariant>('primary');
  // Clear space Section 03 state
  const [showClearspaceGuide, setShowClearspaceGuide] = useState(true);
  // Mascot Section 09 state
  const [activeMascotPose, setActiveMascotPose] = useState<DohBoyPose>('hero');

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const scrollToSection = (id: string) => {
    setActiveSectionId(id);
    if (!presentationMode) {
      const element = sectionRefs.current[id];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleNextSlide = () => {
    const currentIndex = SECTIONS.findIndex((s) => s.id === activeSectionId);
    if (currentIndex < SECTIONS.length - 1) {
      setActiveSectionId(SECTIONS[currentIndex + 1].id);
    }
  };

  const handlePrevSlide = () => {
    const currentIndex = SECTIONS.findIndex((s) => s.id === activeSectionId);
    if (currentIndex > 0) {
      setActiveSectionId(SECTIONS[currentIndex - 1].id);
    }
  };

  const filteredSections = SECTIONS.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.number.includes(searchQuery);
    const matchesCat = !filterCategory || filterCategory === 'All' || s.category === filterCategory;
    return matchesSearch && matchesCat;
  });

  if (printViewMode) {
    return (
      <PrintViewLayout
        onExitPrintView={() => setPrintViewMode(false)}
        userProfile={userProfile}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FDEFEB] text-[#07334F] font-sans flex flex-col selection:bg-[#EF9FBD] selection:text-[#07334F]">
      {/* Brand Top Header */}
      <BrandHeader
        onOpenFigmaExport={() => setIsFigmaModalOpen(true)}
        presentationMode={presentationMode}
        onTogglePresentation={() => setPresentationMode(!presentationMode)}
        printViewMode={printViewMode}
        onTogglePrintView={() => setPrintViewMode(!printViewMode)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeSectionId={activeSectionId}
        onOpenTutorial={() => setIsOnboardingOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onNavigateAssets={() => scrollToSection('sec-21')}
        onNavigateMoodboard={() => scrollToSection('sec-23')}
        userProfile={userProfile}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto w-full p-4 sm:p-8 flex-1 flex flex-col lg:flex-row gap-8">
        {/* Navigation Sidebar */}
        <BrandSidebar
          activeSectionId={activeSectionId}
          onSelectSection={scrollToSection}
          filterCategory={filterCategory}
          onFilterCategory={setFilterCategory}
        />

        {/* Content Area */}
        <div className="flex-1 min-w-0 space-y-16">
          {/* SLIDE / DECK PRESENTATION MODE */}
          {presentationMode ? (
            <div className="space-y-6">
              {/* Slide Navigation Controls */}
              <div className="flex items-center justify-between p-4 bg-white rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F]">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] text-xs font-black rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
                    SLIDE {SECTIONS.findIndex((s) => s.id === activeSectionId) + 1} / {SECTIONS.length}
                  </span>
                  <span className="font-display font-black text-sm text-[#07334F] truncate">
                    {SECTIONS.find((s) => s.id === activeSectionId)?.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevSlide}
                    disabled={SECTIONS.findIndex((s) => s.id === activeSectionId) === 0}
                    className="p-2 rounded-xl border-2.5 border-[#07334F] bg-[#FDEFEB] disabled:opacity-40 hover:bg-[#EF9FBD] shadow-[2px_2px_0px_0px_#07334F] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    disabled={SECTIONS.findIndex((s) => s.id === activeSectionId) === SECTIONS.length - 1}
                    className="p-2 rounded-xl border-2.5 border-[#07334F] bg-[#D92F2F] text-[#FDEFEB] disabled:opacity-40 hover:bg-[#B32424] shadow-[2px_2px_0px_0px_#07334F] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Render Selected Slide */}
              <div>{renderSectionContent(activeSectionId)}</div>
            </div>
          ) : (
            /* CONTINUOUS EDITORIAL SCROLL MODE (All 20 Sections) */
            filteredSections.map((sec) => (
              <section
                key={sec.id}
                id={sec.id}
                ref={(el) => (sectionRefs.current[sec.id] = el)}
                className="scroll-mt-24 space-y-6 pt-6 border-t-4 border-[#07334F]/20 first:border-t-0 first:pt-0"
              >
                {/* Section Header Banner - Brutalist Creative Tool Spec Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b-4 border-[#07334F]">
                  <div className="flex items-center gap-4">
                    <div className="w-13 h-13 rounded-2xl bg-[#D92F2F] border-3.5 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] flex items-center justify-center font-fun text-2xl font-black text-[#FDEFEB]">
                      {sec.number}
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2">
                        <span className="text-[11px] font-black uppercase tracking-widest text-[#297FC1]">
                          {sec.category} System
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D92F2F]"></span>
                        <span className="text-[10px] font-mono font-bold text-[#07334F]/60">SPEC-{sec.number}</span>
                      </div>
                      <h2 className="font-fun text-2xl sm:text-3xl font-black text-[#07334F]">
                        {sec.title}
                      </h2>
                    </div>
                  </div>

                  <span className="text-xs font-extrabold text-[#07334F] bg-[#EF9FBD]/40 px-3 py-1.5 rounded-xl border-2 border-[#07334F] hidden sm:block">
                    {sec.subtitle}
                  </span>
                </div>

                {/* Render Section Detailed Content */}
                <div>{renderSectionContent(sec.id)}</div>
              </section>
            ))
          )}
        </div>
      </main>

      {/* Export to Figma Modal */}
      <FigmaExportModal
        isOpen={isFigmaModalOpen}
        onClose={() => setIsFigmaModalOpen(false)}
      />

      {/* Interactive Onboarding Tutorial Modal */}
      <OnboardingTutorial
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
        onNavigateSection={scrollToSection}
      />

      {/* User Profile, Saved Preferences & Game Modal */}
      <UserProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        profile={userProfile}
        onUpdateProfile={handleUpdateProfile}
      />

      {/* Footer */}
      <footer className="mt-20 border-t-4 border-[#07334F] bg-[#07334F] text-[#FDEFEB] py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="scale-75 origin-left">
              <DohNutLogo variant="reversed" size={140} />
            </div>
            <div>
              <div className="font-fun text-xl font-black text-[#FDEFEB]">DOH-NUT MALAYSIA</div>
              <div className="text-xs text-[#EF9FBD] font-bold">Donuts With Attitude • Brand Identity System</div>
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-2 text-xs text-gray-300 font-medium">
            <div>Official Brand Standards & Design Guidelines</div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setPrintViewMode(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FDEFEB] text-[#07334F] hover:bg-[#FFD23F] font-fun text-xs font-black rounded-lg border-2 border-white transition-all shadow-sm"
              >
                <Printer size={13} className="text-[#D92F2F]" />
                Print-Ready A4 PDF Mode
              </button>
              <span className="text-[#FFD23F] font-bold">Production Release v1.0</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

  // Switcher to render each of the 20 distinct section modules
  function renderSectionContent(sectionId: string) {
    switch (sectionId) {
      case 'sec-01':
        return <BrandFoundationSection />;

      case 'sec-02':
        return (
          <div className="space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
              {/* Variant Selector */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b-3 border-[#07334F] pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] text-xs font-black rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
                    LOGO SYSTEM
                  </span>
                  <span className="font-display font-black text-sm text-[#07334F]">
                    7 Approved Variations
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(['primary', 'secondary', 'horizontal', 'badge', 'monochrome', 'reversed', 'small'] as LogoVariant[]).map((v) => (
                    <button
                      key={v}
                      onClick={() => setActiveLogoVariant(v)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border-2 border-[#07334F] ${
                        activeLogoVariant === v
                          ? 'bg-[#07334F] text-[#FDEFEB] shadow-[2px_2px_0px_0px_#D92F2F]'
                          : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#EF9FBD] shadow-[1px_1px_0px_0px_#07334F]'
                      } active:translate-x-[1px] active:translate-y-[1px] active:shadow-none`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Logo Preview Canvas - Grid Paper Studio Board */}
              <div
                className={`p-10 rounded-2xl border-3.5 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] min-h-[300px] flex items-center justify-center transition-colors relative overflow-hidden ${
                  activeLogoVariant === 'reversed' ? 'bg-[#07334F]' : 'bg-[#FDEFEB] grid-pattern-paper'
                }`}
              >
                <div className="absolute top-3 left-3 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/80 border border-[#07334F] text-[#07334F]">
                  ARTBOARD: {activeLogoVariant.toUpperCase()}
                </div>
                <DohNutLogo variant={activeLogoVariant} size={360} animated />
              </div>

              {/* Logo Rules Narrative */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]">
                  <span className="font-black text-[#D92F2F] block mb-1 uppercase font-display text-sm">1. Master Badge Shape</span>
                  Red rounded pill (<code className="font-mono text-[10px] bg-white px-1 py-0.5 rounded border border-[#07334F]">#D92F2F</code>) with deep navy outline (<code className="font-mono text-[10px] bg-white px-1 py-0.5 rounded border border-[#07334F]">#07334F</code>) and outer cyan border.
                </div>
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]">
                  <span className="font-black text-[#297FC1] block mb-1 uppercase font-display text-sm">2. Wordmark Lettering</span>
                  Cream/white chunky typography (<code className="font-mono text-[10px] bg-white px-1 py-0.5 rounded border border-[#07334F]">#FDEFEB</code>) with 3D navy drop shadow effect.
                </div>
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]">
                  <span className="font-black text-[#07334F] block mb-1 uppercase font-display text-sm">3. Official Spelling</span>
                  Always spelled exactly as <strong>“DOH-NUT”</strong> with hyphen. Never lowercase or unhyphenated.
                </div>
              </div>
            </div>
          </div>
        );

      case 'sec-03':
        return (
          <div className="space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b-3 border-[#07334F] pb-4">
                <div>
                  <h3 className="font-fun text-2xl font-black text-[#07334F]">
                    The "1D" Unit Clear-Space Rule
                  </h3>
                  <p className="text-xs font-bold text-[#07334F]/80 mt-1">
                    To maintain maximum visual impact, keep a safe exclusion zone around the logo equal to the cap-height of the letter 'D'.
                  </p>
                </div>

                <button
                  onClick={() => setShowClearspaceGuide(!showClearspaceGuide)}
                  className="px-4 py-2 bg-[#297FC1] text-[#FDEFEB] font-display font-black text-xs rounded-xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] hover:bg-[#1f669e] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                >
                  {showClearspaceGuide ? 'Hide Exclusion Grid' : 'Show Exclusion Grid'}
                </button>
              </div>

              {/* Interactive Clearspace Display */}
              <div className="p-10 bg-[#FDEFEB] rounded-2xl border-3.5 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] flex items-center justify-center min-h-[320px] dot-pattern-paper">
                <DohNutLogo variant="primary" size={320} showClearSpace={showClearspaceGuide} />
              </div>

              {/* Minimum Sizing Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-1">
                  <div className="text-xs font-black text-[#D92F2F] uppercase">Digital Minimum Size</div>
                  <div className="text-xl font-black text-[#07334F] font-mono">48px width (Favicon: 32px)</div>
                  <p className="text-[11px] text-[#07334F]/80 font-bold">For mobile apps, favicons, navigation headers, and social avatars.</p>
                </div>
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-1">
                  <div className="text-xs font-black text-[#297FC1] uppercase">Print Minimum Size</div>
                  <div className="text-xl font-black text-[#07334F] font-mono">25mm width (Stickers / Tags)</div>
                  <p className="text-[11px] text-[#07334F]/80 font-bold">Guarantees line-weight legibility and outer border sharpness during physical print.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'sec-04':
        return <LogoMisuseSection />;

      case 'sec-05':
        return <ColorSystemSection />;

      case 'sec-06':
        return (
          <div className="space-y-6">
            <ColorSystemSection />
          </div>
        );

      case 'sec-07':
        return <TypographySection />;

      case 'sec-08':
        return <GraphicElementsShowcase />;

      case 'sec-09':
        return (
          <div className="space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
              {/* Mascot Pose Selector */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b-3 border-[#07334F] pb-4">
                <div>
                  <h3 className="font-fun text-2xl font-black text-[#07334F]">
                    DOH BOY — MASCOT & CHARACTER IDENTITY
                  </h3>
                  <p className="text-xs font-bold text-[#07334F]/80 mt-1">
                    Playful, cheeky, confident donut personality with strawberry frosting and rainbow sprinkles.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(['hero', 'waving', 'happy', 'excited', 'eating', 'avatar'] as DohBoyPose[]).map((p) => (
                    <button
                      key={p}
                      onClick={() => setActiveMascotPose(p)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border-2 border-[#07334F] ${
                        activeMascotPose === p
                          ? 'bg-[#D92F2F] text-[#FDEFEB] shadow-[2px_2px_0px_0px_#07334F]'
                          : 'bg-[#FDEFEB] text-[#07334F] hover:bg-[#EF9FBD] shadow-[1px_1px_0px_0px_#07334F]'
                      } active:translate-x-[1px] active:translate-y-[1px] active:shadow-none`}
                    >
                      {p} Pose
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Pose Showcase */}
              <div className="p-8 bg-[#EF9FBD]/20 rounded-2xl border-3.5 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] min-h-[340px] flex items-center justify-center relative overflow-hidden grid-pattern-paper">
                <div className="absolute top-3 left-3 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/90 border border-[#07334F] text-[#07334F]">
                  POSE RIG: {activeMascotPose.toUpperCase()}
                </div>
                <DohBoyMascot pose={activeMascotPose} size={240} caption={`Active Pose: ${activeMascotPose}`} animated />
              </div>

              {/* Character Anatomy Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2 text-xs">
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]">
                  <span className="font-black text-[#D92F2F] block mb-1 font-display text-sm">1. Strawberry Glaze</span>
                  Smooth pink drip glaze with high-contrast rainbow sprinkles.
                </div>
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]">
                  <span className="font-black text-[#297FC1] block mb-1 font-display text-sm">2. Expressive Eyes</span>
                  Expressive big cartoon eyes with cheeky open-mouth smiles.
                </div>
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]">
                  <span className="font-black text-[#07334F] block mb-1 font-display text-sm">3. Street High-Tops</span>
                  Two-tone red & cyan sneakers with star badge accents.
                </div>
                <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F]">
                  <span className="font-black text-[#EF9FBD] block mb-1 font-display text-sm">4. Heavy 5pt Outlines</span>
                  Solid outlines guaranteeing high contrast on every surface.
                </div>
              </div>
            </div>
          </div>
        );

      case 'sec-10':
        return <IllustrationStyleSection />;

      case 'sec-11':
        return (
          <div className="space-y-6">
            <Patterns />
          </div>
        );

      case 'sec-12':
        return <PhotographyDirectionSection />;

      case 'sec-13':
        return <PackagingMockups />;

      case 'sec-14':
        return <StickerSystem />;

      case 'sec-15':
        return <SocialMediaMockups />;

      case 'sec-16':
        return <SignageAndStore />;

      case 'sec-17':
        return <MerchApplications />;

      case 'sec-18':
        return <BrandVoiceSection />;

      case 'sec-19':
        return <BrandChecklistSection />;

      case 'sec-20':
        return <FinalBrandBoard />;

      case 'sec-21':
        return <DownloadableAssetsSection onSelectSection={scrollToSection} />;

      case 'sec-22':
        return <DohCatcherGame userProfile={userProfile} onUpdateProfile={handleUpdateProfile} />;

      case 'sec-23':
        return <MoodboardBuilder />;

      default:
        return <BrandFoundationSection />;
    }
  }
}
