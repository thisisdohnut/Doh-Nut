import React, { useState } from 'react';
import {
  Sparkles,
  Zap,
  Copy,
  Check,
  RefreshCw,
  Key,
  Flame,
  ChevronDown,
  ChevronUp,
  Share2,
  Bookmark,
  AlertCircle,
  Lightbulb
} from 'lucide-react';
import { DohBoyMascot } from './DohBoyMascot';

interface GeneratedHeadline {
  headline: string;
  subtext: string;
  category: string;
  vibeScore: string;
}

const PRESET_KEYWORDS = [
  'Matcha Glaze',
  'Midnight Drop',
  'Kopi-C Crunch',
  'Strawberry Bomb',
  'Payday 6-Pack',
  'Skate Park Jam',
  'Pasar Malam Craving',
  'Caramel Swirl'
];

const TONE_OPTIONS = [
  { id: 'street-drop', label: 'Street Drop', desc: 'Hype drops & limited runs' },
  { id: 'cheeky-social', label: 'Cheeky Social', desc: 'Viral reels & captions' },
  { id: 'packaging-tape', label: 'Packaging Tape', desc: 'Box tape & receipt stamps' },
  { id: 'pasar-malam', label: 'Pasar Malam Vibe', desc: 'Malaysian street energy' },
  { id: 'late-night', label: 'Late Night Fuel', desc: 'Midnight sugar rush' }
];

export const GeminiHeadlineGenerator: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('Matcha Glaze');
  const [selectedTone, setSelectedTone] = useState<string>('street-drop');
  const [customKey, setCustomKey] = useState<string>(() => {
    return localStorage.getItem('dohnut_gemini_byok') || '';
  });
  const [showKeyInput, setShowKeyInput] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingTextIndex, setLoadingTextIndex] = useState<number>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [savedHeadlines, setSavedHeadlines] = useState<string[]>([]);

  const [headlines, setHeadlines] = useState<GeneratedHeadline[]>([
    {
      headline: 'HOT GREEN. WILD DOUGH. 💥',
      subtext: 'Fresh Japanese matcha meets our signature crispy sourdough. Zero apologies.',
      category: 'STREET DROP',
      vibeScore: '100% Crisp'
    },
    {
      headline: 'BITTER SWEET. NEVER BORING.',
      subtext: 'For the ones who like their glaze with real attitude.',
      category: 'BOX TAPE',
      vibeScore: 'Cheeky 10/10'
    },
    {
      headline: 'DROP EVERYTHING. MATCHA IS HERE.',
      subtext: 'Bite first. Ask questions when the box is empty.',
      category: 'SOCIAL HOOK',
      vibeScore: 'Sugar Rush'
    },
    {
      headline: 'STEADY LAH, FRESH BATCH JUST DROPPED!',
      subtext: 'Get yours hot before your tablemate steals the last piece.',
      category: 'STORE SIGN',
      vibeScore: 'Pasar Malam Hype'
    }
  ]);

  const loadingPhrases = [
    'Kneading fresh dough syllables...',
    'Glazing with high-octane attitude...',
    'Consulting Doh Boy on street slang...',
    'Deep-frying corporate jargon into crispiness...',
    'Sprinkling Malaysian street vibes...'
  ];

  const handleSaveKey = (val: string) => {
    setCustomKey(val);
    if (val.trim()) {
      localStorage.setItem('dohnut_gemini_byok', val.trim());
    } else {
      localStorage.removeItem('dohnut_gemini_byok');
    }
  };

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!keyword.trim()) return;

    setLoading(true);
    setErrorMsg(null);

    // Rotate loading text
    const textInterval = setInterval(() => {
      setLoadingTextIndex((prev) => (prev + 1) % loadingPhrases.length);
    }, 900);

    try {
      const response = await fetch('/api/generate-headlines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          keyword: keyword.trim(),
          tone: selectedTone,
          customApiKey: customKey.trim() || undefined
        })
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error === 'API_KEY_REQUIRED') {
          setShowKeyInput(true);
          throw new Error('Please provide your Gemini API key (BYOK) below or set GEMINI_API_KEY in app settings.');
        }
        throw new Error(data.message || 'Failed to generate headlines.');
      }

      if (data.headlines && Array.isArray(data.headlines) && data.headlines.length > 0) {
        setHeadlines(data.headlines);
      } else {
        throw new Error('Invalid format received from AI model.');
      }
    } catch (err: any) {
      console.warn('Gemini API call returned error, using smart fallback generator:', err);
      setErrorMsg(err.message);

      // Intelligent Client-Side DOH-NUT Fallback Engine
      const kw = keyword.trim().toUpperCase();
      const fallbackList: GeneratedHeadline[] = [
        {
          headline: `HOT ${kw}. ZERO COMPROMISE. 🍩`,
          subtext: `Our signature yeast dough dipped in ultra-fresh ${keyword.trim()} glaze.`,
          category: 'STREET DROP',
          vibeScore: '100% Crisp'
        },
        {
          headline: `DONUT PANIC. ${kw} IS HERE.`,
          subtext: 'Bite first. Think later. You know you want the full box.',
          category: 'SOCIAL HOOK',
          vibeScore: 'Cheeky 10/10'
        },
        {
          headline: `STEADY MAKAN: ${kw} MADNESS!`,
          subtext: 'Hot from the fryer to your hands. Best enjoyed right on the curb.',
          category: 'PASAR MALAM VIBE',
          vibeScore: 'Street Level Max'
        },
        {
          headline: `GOOD DOUGH. REAL ${kw}.`,
          subtext: 'No artificial talk. Just unapologetic crunch and heavy glaze.',
          category: 'BOX TAPE',
          vibeScore: 'Zero Apologies'
        }
      ];
      setHeadlines(fallbackList);
    } finally {
      clearInterval(textInterval);
      setLoading(false);
    }
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const toggleBookmark = (text: string) => {
    setSavedHeadlines((prev) =>
      prev.includes(text) ? prev.filter((item) => item !== text) : [...prev, text]
    );
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border-4 border-[#07334F] shadow-[6px_6px_0px_0px_#07334F] space-y-6">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-3 border-[#07334F] pb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#FFD23F] border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] flex items-center justify-center text-[#07334F]">
            <Sparkles size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-fun text-xl sm:text-2xl font-black text-[#07334F]">
                DOH-NUT AI HEADLINE GENERATOR
              </h3>
              <span className="px-2.5 py-0.5 bg-[#D92F2F] text-[#FDEFEB] text-[10px] font-black rounded-lg border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F]">
                GEMINI 3.7 FLASH
              </span>
            </div>
            <p className="text-xs font-bold text-[#07334F]/80">
              Generate punchy, street-attitude brand slogans, drop announcements, and packaging copy instantly.
            </p>
          </div>
        </div>

        {/* BYOK Toggle Button */}
        <button
          onClick={() => setShowKeyInput(!showKeyInput)}
          className="px-3.5 py-1.5 rounded-xl bg-[#FDEFEB] hover:bg-[#FFD23F] text-[#07334F] font-black text-xs border-2 border-[#07334F] shadow-[2px_2px_0px_0px_#07334F] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center gap-1.5 transition-all"
        >
          <Key size={14} className={customKey ? 'text-[#48BB78]' : 'text-[#07334F]'} />
          <span>{customKey ? 'BYOK Active' : 'Configure API Key (BYOK)'}</span>
          {showKeyInput ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {/* Collapsible BYOK Input Drawer */}
      {showKeyInput && (
        <div className="p-4 bg-[#FDEFEB] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-xs font-black text-[#07334F]">
            <span className="flex items-center gap-1.5">
              <Key size={15} className="text-[#D92F2F]" />
              Custom Gemini API Key (Optional / BYOK)
            </span>
            <span className="text-[10px] font-bold text-gray-500">
              Stored locally in browser session
            </span>
          </div>
          <div className="flex gap-2">
            <input
              type="password"
              value={customKey}
              onChange={(e) => handleSaveKey(e.target.value)}
              placeholder="Paste your Gemini API key (AIzaSy...)"
              className="flex-1 px-3 py-2 bg-white text-xs font-mono font-bold text-[#07334F] rounded-xl border-2 border-[#07334F] focus:outline-none focus:ring-2 focus:ring-[#297FC1]"
            />
            {customKey && (
              <button
                onClick={() => handleSaveKey('')}
                className="px-3 py-2 bg-[#D92F2F] text-white text-xs font-black rounded-xl border-2 border-[#07334F] hover:bg-[#B32424]"
              >
                Clear
              </button>
            )}
          </div>
          <p className="text-[11px] font-medium text-[#07334F]/80">
            If no key is entered, the tool automatically uses your environment's configured <code className="bg-white px-1 py-0.5 rounded border border-[#07334F] font-mono text-[10px]">GEMINI_API_KEY</code>.
          </p>
        </div>
      )}

      {/* Main Input Form */}
      <form onSubmit={handleGenerate} className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-black uppercase text-[#07334F] flex items-center justify-between">
            <span>Flavor, Topic, or Drop Theme Keyword</span>
            <span className="text-gray-400 font-normal">e.g. Pistachio, Skate Drop, Rainy Day</span>
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter any flavor or campaign theme..."
                className="w-full px-4 py-3.5 bg-[#FDEFEB] text-sm font-black text-[#07334F] rounded-2xl border-3 border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] focus:outline-none focus:bg-white focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-[2px_2px_0px_0px_#07334F]"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !keyword.trim()}
              className="px-6 py-3.5 bg-[#D92F2F] hover:bg-[#FF4146] text-[#FDEFEB] font-fun text-sm font-black rounded-2xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
            >
              {loading ? (
                <>
                  <RefreshCw size={18} className="animate-spin" />
                  BAKING HEADLINES...
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  GENERATE WITH GEMINI
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Keyword Preset Chips */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-black uppercase tracking-wider text-[#07334F]/70 flex items-center gap-1">
            <Lightbulb size={12} className="text-[#FFD23F]" /> Quick Inspiration:
          </span>
          <div className="flex flex-wrap gap-2">
            {PRESET_KEYWORDS.map((preset) => (
              <button
                type="button"
                key={preset}
                onClick={() => setKeyword(preset)}
                className={`px-3 py-1 text-xs font-bold rounded-xl border-2 border-[#07334F] transition-all ${
                  keyword.toLowerCase() === preset.toLowerCase()
                    ? 'bg-[#FFD23F] text-[#07334F] shadow-[2px_2px_0px_0px_#07334F]'
                    : 'bg-white text-[#07334F] hover:bg-[#FDEFEB] shadow-[1px_1px_0px_0px_#07334F]'
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Tone Selection Tabs */}
        <div className="space-y-2 pt-1">
          <label className="text-xs font-black uppercase text-[#07334F]">
            Select Brand Voice Angle / Context
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {TONE_OPTIONS.map((tone) => (
              <button
                type="button"
                key={tone.id}
                onClick={() => setSelectedTone(tone.id)}
                className={`p-3 rounded-2xl border-3 border-[#07334F] text-left transition-all ${
                  selectedTone === tone.id
                    ? 'bg-[#297FC1] text-[#FDEFEB] shadow-[3px_3px_0px_0px_#07334F]'
                    : 'bg-[#FDEFEB] text-[#07334F] hover:bg-white shadow-[2px_2px_0px_0px_#07334F]'
                }`}
              >
                <div className="font-fun text-xs font-black">{tone.label}</div>
                <div className="text-[10px] font-medium opacity-80 mt-0.5 leading-tight">
                  {tone.desc}
                </div>
              </button>
            ))}
          </div>
        </div>
      </form>

      {/* Loading Banner */}
      {loading && (
        <div className="p-6 bg-[#FDEFEB] rounded-3xl border-3 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] flex flex-col items-center justify-center space-y-3 text-center animate-in fade-in">
          <div className="animate-bounce">
            <DohBoyMascot pose="eating" size={70} />
          </div>
          <div className="space-y-1">
            <div className="font-fun text-base font-black text-[#07334F] flex items-center justify-center gap-2">
              <RefreshCw size={16} className="animate-spin text-[#D92F2F]" />
              {loadingPhrases[loadingTextIndex]}
            </div>
            <p className="text-xs font-bold text-[#07334F]/70">
              Querying Gemini 3.7 Flash with DOH-NUT street brand voice rules...
            </p>
          </div>
        </div>
      )}

      {/* Notice / Warning if fallback used */}
      {errorMsg && !loading && (
        <div className="p-3.5 bg-[#FFF3CD] rounded-2xl border-2 border-[#FFEBAA] text-[#856404] text-xs flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-bold">
            <AlertCircle size={16} className="text-[#D92F2F] shrink-0" />
            <span>AI Notice: {errorMsg}</span>
          </div>
          <button
            onClick={() => setShowKeyInput(true)}
            className="px-2.5 py-1 bg-white rounded-lg border border-[#856404] font-black text-[10px] uppercase text-[#07334F] hover:bg-[#FFD23F]"
          >
            Enter Key
          </button>
        </div>
      )}

      {/* Generated Headlines Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-black text-[#07334F]">
          <span className="flex items-center gap-1.5">
            <Flame size={15} className="text-[#D92F2F]" />
            Generated Copy Variations ({headlines.length})
          </span>
          <span className="text-[10px] font-bold text-gray-500">
            Click copy button or card to grab text
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {headlines.map((item, idx) => {
            const isCopied = copiedIndex === idx;
            const isBookmarked = savedHeadlines.includes(item.headline);

            return (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-[#FDEFEB] border-3.5 border-[#07334F] shadow-[4px_4px_0px_0px_#07334F] space-y-3 flex flex-col justify-between hover:border-[#D92F2F] transition-all group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-lg bg-[#07334F] text-[#FDEFEB] text-[10px] font-black uppercase tracking-wider">
                      {item.category || 'SLOGAN'}
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-[#FFD23F] text-[#07334F] text-[10px] font-black border border-[#07334F]">
                      {item.vibeScore || '100% Crisp'}
                    </span>
                  </div>

                  <h4 className="font-fun text-lg sm:text-xl font-black text-[#07334F] leading-tight group-hover:text-[#D92F2F] transition-colors">
                    "{item.headline}"
                  </h4>

                  <p className="text-xs font-medium text-[#07334F]/85 leading-relaxed">
                    {item.subtext}
                  </p>
                </div>

                <div className="pt-2 border-t-2 border-[#07334F]/15 flex items-center justify-between gap-2">
                  <button
                    onClick={() => toggleBookmark(item.headline)}
                    className={`p-2 rounded-xl border-2 border-[#07334F] transition-all ${
                      isBookmarked
                        ? 'bg-[#D92F2F] text-white'
                        : 'bg-white text-[#07334F] hover:bg-[#FFD23F]'
                    }`}
                    title={isBookmarked ? 'Saved to Brand Book' : 'Save to Favorites'}
                  >
                    <Bookmark size={14} fill={isBookmarked ? 'currentColor' : 'none'} />
                  </button>

                  <button
                    onClick={() => handleCopy(item.headline, idx)}
                    className={`flex-1 py-2 px-3 rounded-xl border-2 border-[#07334F] font-black text-xs flex items-center justify-center gap-1.5 transition-all active:translate-x-[1px] active:translate-y-[1px] ${
                      isCopied
                        ? 'bg-[#48BB78] text-white shadow-none'
                        : 'bg-white text-[#07334F] hover:bg-[#FFD23F] shadow-[2px_2px_0px_0px_#07334F]'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check size={14} /> COPIED TO CLIPBOARD
                      </>
                    ) : (
                      <>
                        <Copy size={14} /> COPY HEADLINE
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
