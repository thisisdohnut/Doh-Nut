export interface BrandColor {
  id: string;
  name: string;
  role: 'primary' | 'secondary' | 'accent';
  hex: string;
  rgb: string;
  cmyk: string;
  pantone?: string;
  description: string;
  textColor: string;
}

export interface ColorCombination {
  id: string;
  title: string;
  bg: string;
  headline: string;
  body: string;
  accent: string;
  border: string;
  rating: string;
  description: string;
}

export interface SectionItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Foundation' | 'Identity' | 'Design System' | 'Applications' | 'Governance';
  iconName: string;
}

export type LogoVariant = 'primary' | 'secondary' | 'horizontal' | 'badge' | 'monochrome' | 'reversed' | 'small';
export type DohBoyPose = 'hero' | 'waving' | 'happy' | 'excited' | 'eating' | 'avatar';
export type PatternType = 'dense' | 'sparse' | 'border' | 'packaging';

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  role: string;
  avatarType: 'dohboy-hero' | 'dohboy-happy' | 'dohboy-excited' | 'dohboy-eating' | 'donut-strawberry' | 'donut-cyan' | 'badge-street';
  bio?: string;
  favoriteColorHex: string;
  favoriteTagline: string;
  savedPatterns: string[];
  savedPalettes: string[];
  donutGameHighScore: number;
  customDonutCreations: Array<{
    id: string;
    name: string;
    glazeColor: string;
    sprinkleType: string;
    date: string;
  }>;
}
