import React, { useState, useMemo } from 'react';
import { DOWNLOADABLE_ASSETS, DownloadableAsset } from '../../data/downloadableAssetsData';
import { downloadSvgFile, exportSvgToPng } from '../../utils/exportUtils';
import {
  Download,
  Copy,
  Check,
  Search,
  Sparkles,
  Maximize2,
  Image as ImageIcon,
  Layers,
  FileCode,
  CheckCircle2,
  X,
  Sliders,
  ShieldCheck,
  FolderArchive,
  RefreshCw
} from 'lucide-react';

interface DownloadableAssetsSectionProps {
  onSelectSection?: (id: string) => void;
}

export const DownloadableAssetsSection: React.FC<DownloadableAssetsSectionProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [exportScale, setExportScale] = useState<number>(2); // 1x, 2x, 4x
  const [exportBg, setExportBg] = useState<string>('transparent'); // 'transparent', '#FDEFEB', '#07334F', '#D92F2F', '#297FC1'
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [inspectAsset, setInspectAsset] = useState<DownloadableAsset | null>(null);
  const [isBatchDownloading, setIsBatchDownloading] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const categories = ['All', 'Logos', 'Mascot', 'Patterns', 'Motifs'];

  const filteredAssets = useMemo(() => {
    return DOWNLOADABLE_ASSETS.filter((asset) => {
      const matchesCat = activeCategory === 'All' || asset.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        asset.name.toLowerCase().includes(q) ||
        asset.description.toLowerCase().includes(q) ||
        asset.tags.some((t) => t.toLowerCase().includes(q)) ||
        asset.recommendedUse.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleDownloadSvg = (asset: DownloadableAsset) => {
    try {
      downloadSvgFile(asset.svgContent, `${asset.filename}.svg`);
      showToast(`Downloaded ${asset.name} (.SVG)`);
    } catch (e) {
      console.error(e);
      showToast('Error downloading SVG');
    }
  };

  const handleDownloadPng = async (asset: DownloadableAsset, customScale?: number, customBg?: string) => {
    const scale = customScale !== undefined ? customScale : exportScale;
    const bg = customBg !== undefined ? customBg : exportBg;
    setDownloadingId(asset.id);
    try {
      await exportSvgToPng({
        svgString: asset.svgContent,
        filename: `${asset.filename}@${scale}x`,
        width: asset.dimensions.width,
        height: asset.dimensions.height,
        scale: scale,
        backgroundColor: bg
      });
      showToast(`Downloaded ${asset.name} (${scale}x PNG)`);
    } catch (e) {
      console.error(e);
      showToast('Error rendering high-res PNG');
    } finally {
      setDownloadingId(null);
    }
  };

  const handleCopySvgCode = (asset: DownloadableAsset) => {
    navigator.clipboard.writeText(asset.svgContent);
    setCopiedId(asset.id);
    showToast(`Copied ${asset.name} SVG markup to clipboard!`);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleBatchDownloadAllSvg = async () => {
    setIsBatchDownloading(true);
    showToast(`Starting batch download of ${filteredAssets.length} SVG vector files...`);
    try {
      for (let i = 0; i < filteredAssets.length; i++) {
        const asset = filteredAssets[i];
        downloadSvgFile(asset.svgContent, `${asset.filename}.svg`);
        // short delay to prevent browser download throttling
        await new Promise((resolve) => setTimeout(resolve, 350));
      }
      showToast(`Batch downloaded ${filteredAssets.length} SVG files successfully!`);
    } catch (e) {
      console.error(e);
      showToast('Batch download encountered an issue');
    } finally {
      setIsBatchDownloading(false);
    }
  };

  return (
    <div className="space-y-8" id="downloadable-assets-section">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#07334F] text-[#FDEFEB] px-5 py-3 rounded-2xl border-3 border-[#EF9FBD] shadow-[6px_6px_0px_0px_#D92F2F] flex items-center gap-3 font-display font-black text-xs animate-bounce">
          <Sparkles size={16} className="text-[#FFD23F]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Container Card */}
      <div className="bg-white rounded-3xl border-4 border-[#07334F] shadow-[8px_8px_0px_0px_#07334F] p-6 sm:p-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b-4 border-[#07334F] pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] text-xs font-black rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
              <Download size={14} />
              <span>OFFICIAL ASSET VAULT</span>
            </div>
            <h2 className="font-fun text-3xl sm:text-4xl font-black text-[#07334F] tracking-tight">
              DOWNLOADABLE ASSETS & EXPORTS
            </h2>
            <p className="text-xs sm:text-sm font-bold text-[#07334F]/80 max-w-2xl">
              High-resolution, production-grade vector SVGs and crystal-clear PNG exports for the Master Logo, Doh Boy mascot poses, seamless pattern tiles, and street sticker motifs.
            </p>
          </div>

          {/* Master Batch Download Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={handleBatchDownloadAllSvg}
              disabled={isBatchDownloading || filteredAssets.length === 0}
              className="px-5 py-3 bg-[#D92F2F] hover:bg-[#b82626] text-[#FDEFEB] font-display font-black text-xs rounded-2xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] flex items-center justify-center gap-2 transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:opacity-50"
            >
              {isBatchDownloading ? (
                <>
                  <RefreshCw size={16} className="animate-spin text-[#FFD23F]" />
                  <span>DOWNLOADING ({filteredAssets.length})...</span>
                </>
              ) : (
                <>
                  <FolderArchive size={16} />
                  <span>EXPORT ALL {filteredAssets.length} SVGs</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Global Export Toolbar & Customizer */}
        <div className="bg-[#FDEFEB] p-5 rounded-2xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[240px] max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#07334F]/60" />
              <input
                type="text"
                placeholder="Search assets (e.g. logo, mascot, pattern, sticker)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white text-xs font-bold text-[#07334F] placeholder:text-[#07334F]/40 rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] focus:outline-none focus:ring-2 focus:ring-[#D92F2F]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#07334F]/60 hover:text-[#07334F]"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Resolution Selector */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black text-[#07334F] uppercase tracking-wider flex items-center gap-1">
                <ImageIcon size={13} className="text-[#297FC1]" />
                PNG Scale:
              </span>
              <div className="flex bg-white rounded-xl p-1 border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
                {[
                  { label: '1x (Web)', value: 1 },
                  { label: '2x (Retina)', value: 2 },
                  { label: '4x (Print HD)', value: 4 }
                ].map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setExportScale(s.value)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-black tracking-wider transition-all ${
                      exportScale === s.value
                        ? 'bg-[#07334F] text-[#FDEFEB]'
                        : 'text-[#07334F] hover:bg-[#EF9FBD]/30'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* PNG Canvas Background Color Selector */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black text-[#07334F] uppercase tracking-wider">
                PNG BG:
              </span>
              <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
                {[
                  { name: 'Transparent', value: 'transparent', pattern: true },
                  { name: 'Cream (#FDEFEB)', value: '#FDEFEB' },
                  { name: 'Navy (#07334F)', value: '#07334F' },
                  { name: 'Red (#D92F2F)', value: '#D92F2F' },
                  { name: 'Cyan (#297FC1)', value: '#297FC1' },
                  { name: 'Pink (#EF9FBD)', value: '#EF9FBD' }
                ].map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setExportBg(c.value)}
                    title={c.name}
                    className={`w-6 h-6 rounded-lg border-2 border-[#07334F] transition-transform ${
                      exportBg === c.value
                        ? 'scale-115 ring-2 ring-[#D92F2F] shadow-[1px_1px_0px_0px_#07334F]'
                        : 'hover:scale-105'
                    } ${c.pattern ? 'bg-checkerboard-micro' : ''}`}
                    style={{ backgroundColor: c.pattern ? undefined : c.value }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t-2 border-[#07334F]/15">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? DOWNLOADABLE_ASSETS.length
                  : DOWNLOADABLE_ASSETS.filter((a) => a.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border-2 border-[#07334F] ${
                    activeCategory === cat
                      ? 'bg-[#D92F2F] text-[#FDEFEB] shadow-[2px_2px_0px_0px_#07334F]'
                      : 'bg-white text-[#07334F] hover:bg-[#EF9FBD]/40 shadow-[1px_1px_0px_0px_#07334F]'
                  } active:translate-x-[1px] active:translate-y-[1px] active:shadow-none`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Assets Grid */}
        {filteredAssets.length === 0 ? (
          <div className="p-12 text-center bg-[#FDEFEB] rounded-3xl border-3 border-[#07334F] space-y-3">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-[#EF9FBD] border-2 border-[#07334F] flex items-center justify-center text-[#07334F]">
              <Search size={24} />
            </div>
            <h4 className="font-fun text-xl font-black text-[#07334F]">No matching assets found</h4>
            <p className="text-xs font-bold text-[#07334F]/70">
              Try searching with another keyword or reset the category filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#297FC1] text-[#FDEFEB] text-xs font-black rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssets.map((asset) => {
              const isCopied = copiedId === asset.id;
              const isDownloading = downloadingId === asset.id;

              return (
                <div
                  key={asset.id}
                  className="bg-white rounded-3xl border-3.5 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] overflow-hidden flex flex-col hover:shadow-[8px_8px_0px_0px_#D92F2F] transition-all group"
                >
                  {/* Asset Preview Artboard */}
                  <div
                    className={`relative p-6 min-h-[220px] max-h-[260px] flex items-center justify-center border-b-3 border-[#07334F] transition-colors overflow-hidden ${
                      exportBg === 'transparent'
                        ? 'bg-[#FDEFEB] dot-pattern-paper'
                        : ''
                    }`}
                    style={{
                      backgroundColor: exportBg === 'transparent' ? undefined : exportBg
                    }}
                  >
                    {/* Category Pill Tag */}
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 bg-[#07334F] text-[#FDEFEB] text-[10px] font-black uppercase tracking-wider rounded-lg border border-[#07334F]">
                        {asset.category}
                      </span>
                      <span className="px-2 py-0.5 bg-white text-[#07334F] text-[10px] font-mono font-bold rounded-lg border border-[#07334F]">
                        {asset.dimensions.width}×{asset.dimensions.height}
                      </span>
                    </div>

                    {/* Inspect Button in Top Right */}
                    <button
                      onClick={() => setInspectAsset(asset)}
                      title="Inspect full resolution"
                      className="absolute top-3 right-3 z-10 w-7 h-7 bg-white/90 hover:bg-white text-[#07334F] rounded-lg border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                    >
                      <Maximize2 size={13} />
                    </button>

                    {/* Rendered SVG Component */}
                    <div
                      className="w-full h-full max-h-[170px] flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-105"
                      dangerouslySetInnerHTML={{ __html: asset.svgContent }}
                    />
                  </div>

                  {/* Asset Info Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <h3 className="font-fun text-lg font-black text-[#07334F] leading-tight">
                        {asset.name}
                      </h3>
                      <p className="text-xs text-[#07334F]/80 font-bold leading-relaxed line-clamp-2">
                        {asset.description}
                      </p>
                    </div>

                    {/* Recommended Usage Tag */}
                    <div className="p-2.5 bg-[#FDEFEB] rounded-xl border-2 border-[#07334F]/30 text-[11px] font-bold text-[#07334F]">
                      <span className="text-[#D92F2F] font-black uppercase block text-[10px]">Usage:</span>
                      <span className="line-clamp-1">{asset.recommendedUse}</span>
                    </div>

                    {/* Action Buttons Toolbar */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t-2 border-[#07334F]/15">
                      {/* PNG Download Button */}
                      <button
                        onClick={() => handleDownloadPng(asset)}
                        disabled={isDownloading}
                        title={`Download high-res ${exportScale}x PNG`}
                        className="px-2 py-2 bg-[#297FC1] hover:bg-[#1f669e] text-[#FDEFEB] font-display font-black text-[11px] rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] flex items-center justify-center gap-1 transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                      >
                        {isDownloading ? (
                          <RefreshCw size={12} className="animate-spin" />
                        ) : (
                          <Download size={12} />
                        )}
                        <span>PNG ({exportScale}x)</span>
                      </button>

                      {/* SVG Download Button */}
                      <button
                        onClick={() => handleDownloadSvg(asset)}
                        title="Download Vector SVG"
                        className="px-2 py-2 bg-[#D92F2F] hover:bg-[#b82626] text-[#FDEFEB] font-display font-black text-[11px] rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] flex items-center justify-center gap-1 transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                      >
                        <FileCode size={12} />
                        <span>SVG</span>
                      </button>

                      {/* Copy Markup Button */}
                      <button
                        onClick={() => handleCopySvgCode(asset)}
                        title="Copy SVG XML to Clipboard"
                        className={`px-2 py-2 font-display font-black text-[11px] rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] flex items-center justify-center gap-1 transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none ${
                          isCopied
                            ? 'bg-[#FFD23F] text-[#07334F]'
                            : 'bg-white text-[#07334F] hover:bg-[#EF9FBD]/40'
                        }`}
                      >
                        {isCopied ? <Check size={12} /> : <Copy size={12} />}
                        <span>{isCopied ? 'COPIED' : 'CODE'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Formats & Production Guidance Banner */}
        <div className="bg-[#07334F] text-[#FDEFEB] p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#D92F2F] space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#D92F2F] flex items-center justify-center text-[#FDEFEB] border-2 border-[#FDEFEB]">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="font-fun text-xl font-black text-[#FDEFEB]">
                FILE FORMAT & PRODUCTION SPECIFICATIONS
              </h4>
              <p className="text-xs text-[#EF9FBD] font-bold">
                Guidelines for designers, screen printers, vinyl signmakers, and web developers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-bold">
            <div className="p-4 bg-white/10 rounded-2xl border-2 border-[#FDEFEB]/20 space-y-1">
              <span className="font-black text-[#FFD23F] uppercase block text-sm">Vector SVG (Scale Unlimited)</span>
              <p className="text-white/80 text-[11px]">
                Clean bezier curves with embedded XML paths. Always use SVG for signage cutting, laser engraving, Figma imports, and responsive web assets.
              </p>
            </div>
            <div className="p-4 bg-white/10 rounded-2xl border-2 border-[#FDEFEB]/20 space-y-1">
              <span className="font-black text-[#EF9FBD] uppercase block text-sm">High-Res PNG (1x / 2x / 4x)</span>
              <p className="text-white/80 text-[11px]">
                Rasterized at 300 DPI equivalent with crystal-clear antialiasing. Use 2x/4x for social promo decks, merch mockups, and presentations.
              </p>
            </div>
            <div className="p-4 bg-white/10 rounded-2xl border-2 border-[#FDEFEB]/20 space-y-1">
              <span className="font-black text-[#297FC1] uppercase block text-sm">Seamless Pattern Repeats</span>
              <p className="text-white/80 text-[11px]">
                Pre-configured 800×800px seamless tiles. Tile infinitely horizontally and vertically across packaging paper, apparel, and retail wallpapers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Asset Inspection Modal */}
      {inspectAsset && (
        <div className="fixed inset-0 z-50 bg-[#07334F]/85 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center overflow-y-auto">
          <div className="bg-white rounded-3xl border-4 border-[#07334F] shadow-[10px_10px_0px_0px_#D92F2F] max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-3 border-[#07334F] pb-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#D92F2F] text-[#FDEFEB] text-xs font-black rounded-xl border-2 border-[#07334F]">
                  {inspectAsset.category.toUpperCase()}
                </span>
                <h3 className="font-fun text-2xl font-black text-[#07334F]">
                  {inspectAsset.name}
                </h3>
              </div>
              <button
                onClick={() => setInspectAsset(null)}
                className="w-9 h-9 rounded-xl bg-[#FDEFEB] hover:bg-[#D92F2F] hover:text-[#FDEFEB] text-[#07334F] border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Large Interactive Canvas */}
            <div
              className={`p-10 rounded-2xl border-3 border-[#07334F] min-h-[320px] flex items-center justify-center relative overflow-hidden transition-colors ${
                exportBg === 'transparent' ? 'bg-[#FDEFEB] grid-pattern-paper' : ''
              }`}
              style={{ backgroundColor: exportBg === 'transparent' ? undefined : exportBg }}
            >
              <div className="max-w-md w-full max-h-[280px] flex items-center justify-center" dangerouslySetInnerHTML={{ __html: inspectAsset.svgContent }} />
            </div>

            {/* Asset Metadata & Dimensions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-bold">
              <div className="p-3 bg-[#FDEFEB] rounded-xl border-2 border-[#07334F]">
                <span className="text-[10px] text-[#D92F2F] uppercase block font-black">Dimensions</span>
                <span className="font-mono text-sm text-[#07334F] font-black">{inspectAsset.dimensions.width} × {inspectAsset.dimensions.height} px</span>
              </div>
              <div className="p-3 bg-[#FDEFEB] rounded-xl border-2 border-[#07334F]">
                <span className="text-[10px] text-[#297FC1] uppercase block font-black">Aspect Ratio</span>
                <span className="font-mono text-sm text-[#07334F] font-black">{inspectAsset.aspectRatio}</span>
              </div>
              <div className="p-3 bg-[#FDEFEB] rounded-xl border-2 border-[#07334F]">
                <span className="text-[10px] text-[#07334F] uppercase block font-black">Vector Scale</span>
                <span className="font-mono text-sm text-[#07334F] font-black">Infinite (Lossless)</span>
              </div>
              <div className="p-3 bg-[#FDEFEB] rounded-xl border-2 border-[#07334F]">
                <span className="text-[10px] text-[#D92F2F] uppercase block font-black">Color Profile</span>
                <span className="font-mono text-sm text-[#07334F] font-black">sRGB / Hex</span>
              </div>
            </div>

            {/* Description & Recommended Use */}
            <div className="p-4 bg-[#FDEFEB] rounded-2xl border-2 border-[#07334F] space-y-2 text-xs">
              <div className="font-bold text-[#07334F] leading-relaxed">
                {inspectAsset.description}
              </div>
              <div className="text-[11px] font-bold text-[#297FC1]">
                <strong>Recommended Use:</strong> {inspectAsset.recommendedUse}
              </div>
            </div>

            {/* Direct Export Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-3 border-[#07334F]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-black text-[#07334F] uppercase">Export PNG:</span>
                {[1, 2, 4].map((scale) => (
                  <button
                    key={scale}
                    onClick={() => handleDownloadPng(inspectAsset, scale)}
                    className="px-3 py-1.5 bg-[#297FC1] hover:bg-[#1f669e] text-[#FDEFEB] font-display font-black text-xs rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]"
                  >
                    PNG @{scale}x ({inspectAsset.dimensions.width * scale}px)
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleCopySvgCode(inspectAsset)}
                  className="px-4 py-2 bg-white text-[#07334F] font-display font-black text-xs rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] hover:bg-[#EF9FBD]/40 flex items-center gap-1.5"
                >
                  <Copy size={14} />
                  <span>Copy SVG Code</span>
                </button>
                <button
                  onClick={() => handleDownloadSvg(inspectAsset)}
                  className="px-5 py-2 bg-[#D92F2F] hover:bg-[#b82626] text-[#FDEFEB] font-display font-black text-xs rounded-xl border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] flex items-center gap-1.5"
                >
                  <Download size={14} />
                  <span>Download SVG File</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
