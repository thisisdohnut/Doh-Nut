import { BrandColor, ColorCombination, SectionItem } from '../types';

export const BRAND_COLORS: BrandColor[] = [
  {
    id: 'red',
    name: 'DOH-NUT RED',
    role: 'primary',
    hex: '#D92F2F',
    rgb: '217, 47, 47',
    cmyk: '8%, 93%, 92%, 1%',
    pantone: 'PMS 1795 C',
    description: 'The primary energetic brand engine. Used for the master badge, hero calls-to-action, hot highlights, and major packaging surfaces.',
    textColor: '#FDEFEB'
  },
  {
    id: 'navy',
    name: 'DEEP NAVY',
    role: 'primary',
    hex: '#07334F',
    rgb: '7, 51, 79',
    cmyk: '95%, 70%, 42%, 40%',
    pantone: 'PMS 296 C',
    description: 'The anchor and contrast backbone. Used for street-art stroke outlines, primary body copy, typography hierarchy, and structural cards.',
    textColor: '#FDEFEB'
  },
  {
    id: 'cream',
    name: 'CREAM',
    role: 'primary',
    hex: '#FDEFEB',
    rgb: '253, 239, 235',
    cmyk: '0%, 6%, 6%, 0%',
    pantone: 'PMS 7506 C (Pale)',
    description: 'The warm neutral canvas. Replaces sterile white to give a warm bakery pastry vibe, comforting warmth, and high contrast against Deep Navy.',
    textColor: '#07334F'
  },
  {
    id: 'cyan',
    name: 'BRIGHT CYAN',
    role: 'secondary',
    hex: '#297FC1',
    rgb: '41, 127, 193',
    cmyk: '79%, 41%, 1%, 0%',
    pantone: 'PMS 2174 C',
    description: 'The energetic secondary accent. Used for the master logo outer stroke border, sticker highlights, tags, and cool contrast pops.',
    textColor: '#FDEFEB'
  },
  {
    id: 'pink',
    name: 'STRAWBERRY PINK',
    role: 'secondary',
    hex: '#EF9FBD',
    rgb: '239, 159, 189',
    cmyk: '2%, 46%, 10%, 0%',
    pantone: 'PMS 707 C',
    description: 'The playful indulgence tone. Used for Doh Boy mascot strawberry frosting, sweet sprinkles, flavor badges, and cheerful illustrations.',
    textColor: '#07334F'
  }
];

export const COLOR_COMBINATIONS: ColorCombination[] = [
  {
    id: 'combo-1',
    title: '1. Red + Cream',
    bg: '#D92F2F',
    headline: '#FDEFEB',
    body: '#FDEFEB',
    accent: '#297FC1',
    border: '#07334F',
    rating: 'AAA (Primary Impact)',
    description: 'High-impact packaging boxes, campaign banners, and hero signage.'
  },
  {
    id: 'combo-2',
    title: '2. Navy + Cream',
    bg: '#FDEFEB',
    headline: '#07334F',
    body: '#07334F',
    accent: '#D92F2F',
    border: '#07334F',
    rating: 'AAA (Editorial & Web)',
    description: 'Standard brand document background, editorial copy, receipts, menus.'
  },
  {
    id: 'combo-3',
    title: '3. Red + Navy',
    bg: '#07334F',
    headline: '#D92F2F',
    body: '#FDEFEB',
    accent: '#297FC1',
    border: '#D92F2F',
    rating: 'AA (Night / Street)',
    description: 'Late-night pop-up signage, merchandise hoodies, and dark-mode stickers.'
  },
  {
    id: 'combo-4',
    title: '4. Cyan + Navy',
    bg: '#297FC1',
    headline: '#FDEFEB',
    body: '#07334F',
    accent: '#D92F2F',
    border: '#07334F',
    rating: 'AA+ (Cool Energy)',
    description: 'Beverage cups, iced drink promos, social media graphics.'
  },
  {
    id: 'combo-5',
    title: '5. Pink + Navy',
    bg: '#EF9FBD',
    headline: '#07334F',
    body: '#07334F',
    accent: '#D92F2F',
    border: '#07334F',
    rating: 'AAA (Mascot & Sweet)',
    description: 'Doh Boy merch, strawberry glazed promotions, dessert tissue wrappers.'
  },
  {
    id: 'combo-6',
    title: '6. Red + Cyan + Cream (Trio)',
    bg: '#FDEFEB',
    headline: '#D92F2F',
    body: '#07334F',
    accent: '#297FC1',
    border: '#07334F',
    rating: 'AAA (Master Balance)',
    description: 'The definitive DOH-NUT brand tri-color balance used across retail & packaging.'
  }
];

export const SECTIONS: SectionItem[] = [
  { id: 'sec-01', number: '01', title: 'Brand Foundation', subtitle: 'Personality, positioning, core ethos & street spirit', category: 'Foundation', iconName: 'Sparkles' },
  { id: 'sec-02', number: '02', title: 'Master Logo', subtitle: 'Primary badge, horizontal, lockups & variations', category: 'Identity', iconName: 'Award' },
  { id: 'sec-03', number: '03', title: 'Logo Clear Space', subtitle: 'Clearance grid, proportional "D" unit & minimum sizing', category: 'Identity', iconName: 'Maximize2' },
  { id: 'sec-04', number: '04', title: 'Logo Misuse', subtitle: 'Strict DOs and DON\'Ts with red violation markers', category: 'Identity', iconName: 'AlertTriangle' },
  { id: 'sec-05', number: '05', title: 'Colour System', subtitle: 'Hex, RGB, CMYK values, roles & hierarchy', category: 'Design System', iconName: 'Palette' },
  { id: 'sec-06', number: '06', title: 'Colour Combinations', subtitle: 'Tested pairings, contrast matrices & approved usage', category: 'Design System', iconName: 'Layers' },
  { id: 'sec-07', number: '07', title: 'Typography System', subtitle: 'Chunky display, geometric subheads, body & price tokens', category: 'Design System', iconName: 'Type' },
  { id: 'sec-08', number: '08', title: 'Graphic Language', subtitle: 'Thick outlines, stickers, blobs, sparks & street doodles', category: 'Design System', iconName: 'Shapes' },
  { id: 'sec-09', number: '09', title: 'Doh Boy Mascot', subtitle: 'Character anatomy, hero poses, expressions & gestures', category: 'Identity', iconName: 'Smile' },
  { id: 'sec-10', number: '10', title: 'Illustration Style', subtitle: 'Flat art rules, silhouette clarity & stroke weight', category: 'Design System', iconName: 'Brush' },
  { id: 'sec-11', number: '11', title: 'Pattern System', subtitle: 'Dense, sparse, border & packaging repeats', category: 'Design System', iconName: 'Grid' },
  { id: 'sec-12', number: '12', title: 'Photography Direction', subtitle: 'Lighting, glaze close-ups, action shots & styling', category: 'Design System', iconName: 'Camera' },
  { id: 'sec-13', number: '13', title: 'Packaging System', subtitle: '6-pack boxes, sleeves, cups, kraft bags & tamper seals', category: 'Applications', iconName: 'Package' },
  { id: 'sec-14', number: '14', title: 'Sticker System', subtitle: 'Die-cut badges, character peels, specs & live AR camera photobooth', category: 'Applications', iconName: 'Tag' },
  { id: 'sec-15', number: '15', title: 'Social Media System', subtitle: 'Instagram 1:1, Story 9:16, TikTok drop & promo layouts', category: 'Applications', iconName: 'Share2' },
  { id: 'sec-16', number: '16', title: 'Store & Signage', subtitle: 'Front lightbox, counter menu board, A-frame & decals', category: 'Applications', iconName: 'Store' },
  { id: 'sec-17', number: '17', title: 'Merchandise', subtitle: 'Streetwear tees, caps, heavy tote bags, keychains & cups', category: 'Applications', iconName: 'Shirt' },
  { id: 'sec-18', number: '18', title: 'Brand Voice', subtitle: 'Pillars, taglines, attitude translator & Gemini AI headline tool', category: 'Governance', iconName: 'MessageSquare' },
  { id: 'sec-19', number: '19', title: 'Brand DO / DON\'T', subtitle: 'Golden rules for designers, creators & vendors', category: 'Governance', iconName: 'CheckSquare' },
  { id: 'sec-20', number: '20', title: 'Brand at a Glance', subtitle: 'Master identity board uniting all assets on one canvas', category: 'Governance', iconName: 'Layout' },
  { id: 'sec-21', number: '21', title: 'Downloadable Assets', subtitle: 'High-res vector SVGs, PNG exports, mascot poses & pattern tiles', category: 'Applications', iconName: 'Download' },
  { id: 'sec-22', number: '22', title: 'Doh-Catcher Game', subtitle: 'Interactive browser canvas arcade, gameplay mechanics & brand activation', category: 'Applications', iconName: 'Gamepad2' },
  { id: 'sec-23', number: '23', title: 'Moodboard Builder', subtitle: 'Drag & drop infinite canvas composition studio with approved brand assets & export', category: 'Applications', iconName: 'Palette' }
];

export const BRAND_TAGLINES = [
  "DONUTS WITH ATTITUDE.",
  "DONUT WORRY.",
  "JUST ONE MORE.",
  "GOOD DOUGH. BAD ATTITUDE.",
  "YOU KNOW YOU WANT ONE.",
  "DID SOMEONE SAY DOH-NUT?",
  "BITE FIRST. THINK LATER.",
  "BITE INTO FUN.",
  "ONE MORE DOH-NUT.",
  "HOT DOUGH, FRESH GLAZE, ZERO APOLOGIES."
];

export const BRAND_VOICE_PILLARS = [
  {
    title: "Short & Punchy",
    desc: "Cut the fluff. Use 3-5 word high-impact headlines that hit like a street billboard or skate deck graphic.",
    badge: "PUNCHY",
    example: "GOOD DOUGH. BAD ATTITUDE."
  },
  {
    title: "Friendly & Cheeky",
    desc: "Speak like a playful best friend who always convinces you to grab another snack. Witty, never rude or aggressive.",
    badge: "CHEEKY",
    example: "YOU KNOW YOU WANT ONE."
  },
  {
    title: "Confident & Direct",
    desc: "Own the flavors unapologetically. We don't ask for permission; we drop hot glaze and fresh donuts.",
    badge: "CONFIDENT",
    example: "BITE FIRST. THINK LATER."
  },
  {
    title: "Conversational & Malaysian Pop",
    desc: "Inspired by late-night mamak banter, Pasar Malam street food excitement, and youth skate energy.",
    badge: "CONVERSATIONAL",
    example: "DID SOMEONE SAY DOH-NUT?"
  }
];
