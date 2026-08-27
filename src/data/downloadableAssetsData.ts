export interface DownloadableAsset {
  id: string;
  name: string;
  category: 'Logos' | 'Mascot' | 'Patterns' | 'Motifs';
  description: string;
  dimensions: { width: number; height: number };
  aspectRatio: string;
  recommendedUse: string;
  filename: string;
  svgContent: string;
  tags: string[];
}

export const DOWNLOADABLE_ASSETS: DownloadableAsset[] = [
  // ==================== LOGOS & BADGES ====================
  {
    id: 'logo-primary',
    name: 'Official Master Logo (Cloud Arch Badge)',
    category: 'Logos',
    description: 'The authentic official DOH-NUT brand logo featuring the iconic red clay arched dome badge, sky-blue outer trim, crisp white middle border, and 3D white clay "Doh-Nut" wordmark with navy shadow.',
    dimensions: { width: 800, height: 480 },
    aspectRatio: '5:3',
    recommendedUse: 'Primary store signage, packaging hero boxes, official merchandise, master stationery, marketing banners.',
    filename: 'dohnut-official-master-logo',
    tags: ['logo', 'badge', 'official', 'primary', 'vector', 'red', 'cloud-arch'],
    svgContent: `<svg viewBox="0 0 400 240" width="800" height="480" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="badgeRadialHighlight" cx="50%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#FF4A4E" />
      <stop offset="35%" stop-color="#EE2228" />
      <stop offset="75%" stop-color="#D2141A" />
      <stop offset="100%" stop-color="#9C0A0F" />
    </radialGradient>
  </defs>
  <path d="M 30,120 C 10,90 30,55 70,45 C 95,20 155,0 200,0 C 245,0 305,20 330,45 C 370,55 390,90 370,120 C 388,165 360,215 320,225 C 265,205 135,205 80,225 C 40,215 12,165 30,120 Z" fill="#009EE2" />
  <path d="M 38,120 C 20,93 38,62 75,53 C 98,30 154,10 200,10 C 246,10 302,30 325,53 C 362,62 380,93 362,120 C 378,160 352,206 316,215 C 264,196 136,196 84,215 C 48,206 22,160 38,120 Z" fill="#FFFFFF" />
  <path d="M 46,120 C 30,96 46,69 80,61 C 101,40 153,20 200,20 C 247,20 299,40 320,61 C 354,69 370,96 354,120 C 368,155 344,197 312,205 C 263,187 137,187 88,205 C 56,197 32,155 46,120 Z" fill="url(#badgeRadialHighlight)" />
  <path d="M 86,64 C 112,46 156,30 200,30 C 244,30 288,46 314,64 C 285,49 240,40 200,40 C 160,40 115,49 86,64 Z" fill="#FFFFFF" opacity="0.3" />
  <g transform="translate(200, 142)">
    <text x="0" y="8" text-anchor="middle" font-family="'Fredoka', 'Titan One', 'Arial Black', sans-serif" font-size="76" font-weight="900" letter-spacing="1" fill="#162238">Doh-Nut</text>
    <text x="2" y="10" text-anchor="middle" font-family="'Fredoka', 'Titan One', 'Arial Black', sans-serif" font-size="76" font-weight="900" letter-spacing="1" fill="#111B2C">Doh-Nut</text>
    <text x="-3" y="0" text-anchor="middle" font-family="'Fredoka', 'Titan One', 'Arial Black', sans-serif" font-size="76" font-weight="900" letter-spacing="1" fill="#FFFFFF" stroke="#162238" stroke-width="4.5" paint-order="stroke fill">Doh-Nut</text>
    <text x="148" y="12" font-family="'Fredoka', 'Arial Black', sans-serif" font-size="14" font-weight="900" fill="#162238">TM</text>
  </g>
</svg>`
  },
  {
    id: 'logo-horizontal',
    name: 'Horizontal Brand Lockup',
    category: 'Logos',
    description: 'Wide horizontal configuration pairing the official arched badge silhouette with bold typography and official brand pill.',
    dimensions: { width: 920, height: 260 },
    aspectRatio: '23:6.5',
    recommendedUse: 'Website navigation headers, narrow horizontal store fascia, receipt banners, social covers.',
    filename: 'dohnut-logo-horizontal-lockup',
    tags: ['logo', 'horizontal', 'header', 'wordmark'],
    svgContent: `<svg viewBox="0 0 460 130" width="920" height="260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="hzRedGrad" cx="50%" cy="25%" r="65%">
      <stop offset="0%" stop-color="#FF4146" />
      <stop offset="45%" stop-color="#E31A21" />
      <stop offset="100%" stop-color="#A30E14" />
    </radialGradient>
  </defs>
  <g transform="translate(8, 10)">
    <path d="M 12,50 C 4,38 12,22 28,18 C 38,8 62,0 75,0 C 88,0 112,8 122,18 C 138,22 146,38 138,50 C 145,68 134,88 118,92 C 98,84 52,84 32,92 C 16,88 5,68 12,50 Z" fill="#009EE2" />
    <path d="M 16,50 C 9,39 16,25 30,21 C 39,11 61,4 75,4 C 89,4 111,11 120,21 C 134,25 141,39 134,50 C 140,66 130,84 116,88 C 97,80 53,80 34,88 C 20,84 10,66 16,50 Z" fill="#FFFFFF" />
    <path d="M 20,50 C 14,41 20,29 32,25 C 41,16 61,9 75,9 C 89,9 109,16 118,25 C 130,29 136,41 130,50 C 135,64 126,79 113,83 C 96,76 54,76 37,83 C 24,79 15,64 20,50 Z" fill="url(#hzRedGrad)" />
    <text x="75" y="58" text-anchor="middle" font-family="'Fredoka', 'Titan One', 'Arial Black', sans-serif" font-size="32" font-weight="900" fill="#FFFFFF" stroke="#162238" stroke-width="2.5" paint-order="stroke fill">DN</text>
  </g>
  <g transform="translate(170, 20)">
    <text x="0" y="62" font-family="'Fredoka', 'Titan One', 'Arial Black', sans-serif" font-size="56" font-weight="900" letter-spacing="1" fill="#162238">Doh-Nut</text>
    <text x="-3" y="58" font-family="'Fredoka', 'Titan One', 'Arial Black', sans-serif" font-size="56" font-weight="900" letter-spacing="1" fill="#FFFFFF" stroke="#162238" stroke-width="4.5" paint-order="stroke fill">Doh-Nut</text>
    <rect x="0" y="74" width="240" height="24" rx="12" fill="#009EE2" />
    <text x="120" y="90" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="900" letter-spacing="3" text-anchor="middle" fill="#FFFFFF">OFFICIAL BRAND</text>
  </g>
</svg>`
  },
  {
    id: 'logo-secondary',
    name: 'Secondary Round App Icon & Stamp',
    category: 'Logos',
    description: 'Balanced circular brand stamp optimized for app icons, profile avatars, and round seal packaging.',
    dimensions: { width: 480, height: 480 },
    aspectRatio: '1:1',
    recommendedUse: 'Mobile app launcher icon, favicon, Instagram profile photo, circular box stickers.',
    filename: 'dohnut-logo-round-badge',
    tags: ['logo', 'secondary', 'badge', 'app-icon', 'circle'],
    svgContent: `<svg viewBox="0 0 240 240" width="480" height="480" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="compRedGrad" cx="50%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#FF4146" />
      <stop offset="50%" stop-color="#E31A21" />
      <stop offset="100%" stop-color="#A30E14" />
    </radialGradient>
  </defs>
  <circle cx="120" cy="120" r="112" fill="#009EE2" />
  <circle cx="120" cy="120" r="102" fill="#FFFFFF" />
  <circle cx="120" cy="120" r="92" fill="url(#compRedGrad)" />
  <path d="M120 40 L123 48 L131 51 L123 54 L120 62 L117 54 L109 51 L117 48 Z" fill="#FFFFFF" opacity="0.9" />
  <g transform="translate(120, 130)">
    <text x="0" y="12" text-anchor="middle" font-family="'Fredoka', 'Titan One', 'Arial Black', sans-serif" font-size="48" font-weight="900" fill="#162238">Doh-Nut</text>
    <text x="-2" y="8" text-anchor="middle" font-family="'Fredoka', 'Titan One', 'Arial Black', sans-serif" font-size="48" font-weight="900" fill="#FFFFFF" stroke="#162238" stroke-width="4" paint-order="stroke fill">Doh-Nut</text>
  </g>
  <g transform="translate(60, 168)">
    <rect x="0" y="0" width="120" height="22" rx="11" fill="#162238" />
    <text x="60" y="15" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="900" letter-spacing="2" fill="#FFFFFF">EST. MALAYSIA</text>
  </g>
</svg>`
  },
  {
    id: 'logo-monochrome',
    name: 'Monochrome Print Vector (Navy & White)',
    category: 'Logos',
    description: 'High-contrast 1-color navy vector for thermal receipts, laser engraving, and single-pass print runs.',
    dimensions: { width: 800, height: 480 },
    aspectRatio: '5:3',
    recommendedUse: 'Thermal receipt printers, monochrome packaging carton stamps, single-color silk screening.',
    filename: 'dohnut-logo-monochrome',
    tags: ['logo', 'monochrome', 'single-color', 'receipt'],
    svgContent: `<svg viewBox="0 0 400 240" width="800" height="480" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M 30,120 C 10,90 30,55 70,45 C 95,20 155,0 200,0 C 245,0 305,20 330,45 C 370,55 390,90 370,120 C 388,165 360,215 320,225 C 265,205 135,205 80,225 C 40,215 12,165 30,120 Z" fill="#07334F" />
  <path d="M 40,120 C 22,93 40,63 76,54 C 99,31 154,12 200,12 C 246,12 301,31 324,54 C 360,63 378,93 360,120 C 376,160 350,205 314,214 C 263,195 137,195 86,214 C 50,205 24,160 40,120 Z" fill="#FFFFFF" />
  <path d="M 50,120 C 34,96 50,71 82,63 C 103,42 153,24 200,24 C 247,24 297,42 318,63 C 350,71 366,96 350,120 C 364,155 340,195 308,203 C 261,185 139,185 92,203 C 60,195 36,155 50,120 Z" fill="#07334F" />
  <g transform="translate(200, 142)">
    <text x="0" y="0" text-anchor="middle" font-family="'Fredoka', 'Titan One', 'Arial Black', sans-serif" font-size="74" font-weight="900" letter-spacing="1" fill="#FFFFFF">Doh-Nut</text>
    <text x="148" y="6" font-family="'Fredoka', sans-serif" font-size="14" font-weight="900" fill="#FFFFFF">TM</text>
  </g>
</svg>`
  },
  {
    id: 'logo-reversed-dark',
    name: 'Reversed Dark Mode Badge',
    category: 'Logos',
    description: 'High-visibility dark navy badge with glowing cyan trim for night pop-ups, hoodies, and dark UI backgrounds.',
    dimensions: { width: 800, height: 480 },
    aspectRatio: '5:3',
    recommendedUse: 'Black and deep navy streetwear apparel, late-night pop-up neon banners, dark mode apps.',
    filename: 'dohnut-logo-reversed-dark',
    tags: ['logo', 'dark-mode', 'reversed', 'apparel'],
    svgContent: `<svg viewBox="0 0 400 240" width="800" height="480" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M 30,120 C 10,90 30,55 70,45 C 95,20 155,0 200,0 C 245,0 305,20 330,45 C 370,55 390,90 370,120 C 388,165 360,215 320,225 C 265,205 135,205 80,225 C 40,215 12,165 30,120 Z" fill="#FFFFFF" />
  <path d="M 40,120 C 22,93 40,63 76,54 C 99,31 154,12 200,12 C 246,12 301,31 324,54 C 360,63 378,93 360,120 C 376,160 350,205 314,214 C 263,195 137,195 86,214 C 50,205 24,160 40,120 Z" fill="#009EE2" />
  <path d="M 50,120 C 34,96 50,71 82,63 C 103,42 153,24 200,24 C 247,24 297,42 318,63 C 350,71 366,96 350,120 C 364,155 340,195 308,203 C 261,185 139,185 92,203 C 60,195 36,155 50,120 Z" fill="#07334F" />
  <g transform="translate(200, 142)">
    <text x="0" y="5" text-anchor="middle" font-family="'Fredoka', 'Titan One', 'Arial Black', sans-serif" font-size="74" font-weight="900" letter-spacing="1" fill="#009EE2">Doh-Nut</text>
    <text x="-3" y="0" text-anchor="middle" font-family="'Fredoka', 'Titan One', 'Arial Black', sans-serif" font-size="74" font-weight="900" letter-spacing="1" fill="#FFFFFF" stroke="#07334F" stroke-width="4" paint-order="stroke fill">Doh-Nut</text>
    <text x="148" y="6" font-family="'Fredoka', sans-serif" font-size="14" font-weight="900" fill="#FFFFFF">TM</text>
  </g>
</svg>`
  },
  {
    id: 'logo-app-favicon',
    name: 'App Icon / Favicon (DN Tile)',
    category: 'Logos',
    description: 'Crisp square icon with bold "DN" initials optimized for micro display sizes down to 32px.',
    dimensions: { width: 512, height: 512 },
    aspectRatio: '1:1',
    recommendedUse: 'Web browser favicons, mobile app home icons, point-of-sale terminal avatars.',
    filename: 'dohnut-icon-favicon-dn',
    tags: ['icon', 'favicon', 'app-icon', 'square'],
    svgContent: `<svg viewBox="0 0 80 80" width="512" height="512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="80" height="80" rx="22" fill="#297FC1" stroke="#07334F" stroke-width="4" />
  <rect x="4" y="4" width="72" height="72" rx="18" fill="#D92F2F" stroke="#07334F" stroke-width="3" />
  <text x="40" y="48" text-anchor="middle" font-family="'Titan One', 'Fredoka', 'Arial Black', sans-serif" font-size="30" font-weight="900" fill="#FDEFEB" stroke="#07334F" stroke-width="2.5" paint-order="stroke fill">DN</text>
  <circle cx="60" cy="22" r="4" fill="#FFD23F" stroke="#07334F" stroke-width="1.5" />
</svg>`
  },

  // ==================== DOH BOY MASCOT POSES ====================
  {
    id: 'mascot-hero',
    name: 'Doh Boy — Hero Peace Stance',
    category: 'Mascot',
    description: 'The master character pose with confident peace sign, two-tone sneakers (red & cyan), and strawberry drip glaze.',
    dimensions: { width: 660, height: 750 },
    aspectRatio: '22:25',
    recommendedUse: 'Storefront cutouts, hero website landing banners, billboard campaigns, t-shirt front prints.',
    filename: 'dohboy-mascot-hero-pose',
    tags: ['mascot', 'dohboy', 'hero', 'character', 'character-rig'],
    svgContent: `<svg viewBox="0 0 220 250" width="660" height="750" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 140 Q 40 170 42 195" stroke="#297FC1" stroke-width="4" stroke-linecap="round" opacity="0.5" />
  <circle cx="43" cy="202" r="3" fill="#297FC1" opacity="0.5" />
  <g transform="translate(15, 60)">
    <path d="M46 70 C 22 55, 12 35, 16 20 C 18 10, 28 8, 34 22 L36 10 C 38 4, 46 4, 48 12 L50 30" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" stroke-linejoin="round" />
  </g>
  <path d="M155 130 C 178 135, 190 152, 178 168 C 168 176, 158 162, 152 148" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" stroke-linejoin="round" />
  <g>
    <path d="M85 185 L82 215" stroke="#07334F" stroke-width="9" stroke-linecap="round" />
    <path d="M60 215 C 60 206, 94 206, 100 215 L100 232 C 100 236, 56 238, 60 215 Z" fill="#D92F2F" stroke="#07334F" stroke-width="4.5" />
    <rect x="58" y="226" width="42" height="7" rx="3.5" fill="#FDEFEB" stroke="#07334F" stroke-width="2" />
    <path d="M78 218 L79 221 L82 222 L79 223 L78 226 L77 223 L74 222 L77 221 Z" fill="#FFD23F" />
    <path d="M135 185 L138 215" stroke="#07334F" stroke-width="9" stroke-linecap="round" />
    <path d="M120 215 C 120 206, 154 206, 160 215 L160 232 C 160 236, 116 238, 120 215 Z" fill="#297FC1" stroke="#07334F" stroke-width="4.5" />
    <rect x="118" y="226" width="42" height="7" rx="3.5" fill="#FDEFEB" stroke="#07334F" stroke-width="2" />
    <path d="M138 218 L139 221 L142 222 L139 223 L138 226 L137 223 L134 222 L137 221 Z" fill="#FFD23F" />
  </g>
  <circle cx="110" cy="115" r="74" fill="#E8B072" stroke="#07334F" stroke-width="6" />
  <path d="M48 98 C 46 66, 76 42, 110 42 C 146 42, 172 66, 170 98 C 168 122, 154 128, 142 116 C 134 108, 128 118, 118 124 C 106 130, 96 118, 88 114 C 74 110, 62 130, 52 120 C 48 114, 48 106, 48 98 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="5.5" />
  <path d="M72 56 C 84 48, 102 48, 114 50" stroke="#FDEFEB" stroke-width="4" stroke-linecap="round" fill="none" />
  <ellipse cx="110" cy="126" rx="20" ry="15" fill="#FDEFEB" stroke="#07334F" stroke-width="5" />
  <rect x="74" y="62" width="11" height="5" rx="2" transform="rotate(28 74 62)" fill="#297FC1" />
  <rect x="104" y="54" width="11" height="5" rx="2" transform="rotate(-15 104 54)" fill="#FFD23F" />
  <rect x="136" y="66" width="11" height="5" rx="2" transform="rotate(45 136 66)" fill="#FDEFEB" />
  <rect x="152" y="92" width="10" height="5" rx="2" transform="rotate(-35 152 92)" fill="#D92F2F" />
  <rect x="62" y="90" width="10" height="5" rx="2" transform="rotate(65 62 90)" fill="#FFD23F" />
  <rect x="135" y="112" width="10" height="5" rx="2" transform="rotate(15 135 112)" fill="#297FC1" />
  <ellipse cx="88" cy="90" rx="10" ry="15" fill="#07334F" />
  <circle cx="85" cy="85" r="4.5" fill="#FDEFEB" />
  <circle cx="91" cy="96" r="2" fill="#FDEFEB" />
  <ellipse cx="132" cy="90" rx="10" ry="15" fill="#07334F" />
  <circle cx="129" cy="85" r="4.5" fill="#FDEFEB" />
  <circle cx="135" cy="96" r="2" fill="#FDEFEB" />
  <ellipse cx="70" cy="104" rx="7" ry="4.5" fill="#D92F2F" opacity="0.65" />
  <ellipse cx="150" cy="104" rx="7" ry="4.5" fill="#D92F2F" opacity="0.65" />
  <path d="M94 106 C 94 106, 110 128, 126 106 Z" fill="#07334F" stroke="#07334F" stroke-width="4" />
  <path d="M102 116 C 106 124, 114 124, 118 116 Z" fill="#D92F2F" />
</svg>`
  },
  {
    id: 'mascot-waving',
    name: 'Doh Boy — Friendly Waving',
    category: 'Mascot',
    description: 'Friendly cartoon waving hand greeting customers at entrances, ordering kiosks, and app welcoming screens.',
    dimensions: { width: 600, height: 720 },
    aspectRatio: '5:6',
    recommendedUse: 'Store entry glass decals, website "Welcome" banner, order confirmation screen, takeaway receipts.',
    filename: 'dohboy-mascot-waving-greeting',
    tags: ['mascot', 'waving', 'greeting', 'friendly'],
    svgContent: `<svg viewBox="0 0 200 240" width="600" height="720" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(18, 50)">
    <path d="M42 55 C 20 40, 10 20, 12 10 C 14 0, 26 2, 34 16 C 36 10, 44 8, 48 14 C 52 20, 48 30, 42 42" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" stroke-linejoin="round" />
  </g>
  <path d="M140 135 C 160 140, 172 155, 160 170 C 150 178, 142 165, 138 152" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" stroke-linejoin="round" />
  <g>
    <path d="M78 180 L76 210" stroke="#07334F" stroke-width="8" stroke-linecap="round" />
    <path d="M54 212 C 54 205, 84 205, 90 212 L90 226 C 90 230, 50 232, 54 212 Z" fill="#D92F2F" stroke="#07334F" stroke-width="4.5" />
    <rect x="52" y="222" width="38" height="6" rx="3" fill="#FDEFEB" stroke="#07334F" stroke-width="2" />
    <path d="M122 180 L124 210" stroke="#07334F" stroke-width="8" stroke-linecap="round" />
    <path d="M110 212 C 110 205, 140 205, 146 212 L146 226 C 146 230, 106 232, 110 212 Z" fill="#297FC1" stroke="#07334F" stroke-width="4.5" />
    <rect x="108" y="222" width="38" height="6" rx="3" fill="#FDEFEB" stroke="#07334F" stroke-width="2" />
  </g>
  <circle cx="100" cy="110" r="68" fill="#E8B072" stroke="#07334F" stroke-width="6" />
  <path d="M44 94 C 42 66, 68 44, 100 44 C 134 44, 156 66, 154 94 C 152 115, 140 120, 130 110 C 122 102, 116 112, 106 118 C 96 124, 88 112, 80 108 C 68 104, 56 122, 48 114 C 44 108, 44 102, 44 94 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="5" />
  <ellipse cx="100" cy="120" rx="18" ry="14" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" />
  <rect x="68" y="60" width="10" height="4.5" rx="2" transform="rotate(30 68 60)" fill="#297FC1" />
  <rect x="94" y="52" width="10" height="4.5" rx="2" transform="rotate(-15 94 52)" fill="#FFD23F" />
  <rect x="124" y="65" width="10" height="4.5" rx="2" transform="rotate(45 124 65)" fill="#FDEFEB" />
  <rect x="138" y="88" width="9" height="4.5" rx="2" transform="rotate(-35 138 88)" fill="#D92F2F" />
  <rect x="58" y="85" width="9" height="4.5" rx="2" transform="rotate(60 58 85)" fill="#FFD23F" />
  <ellipse cx="80" cy="88" rx="9" ry="13" fill="#07334F" />
  <circle cx="77" cy="84" r="4" fill="#FDEFEB" />
  <ellipse cx="120" cy="88" rx="9" ry="13" fill="#07334F" />
  <circle cx="117" cy="84" r="4" fill="#FDEFEB" />
  <ellipse cx="64" cy="100" rx="6" ry="4" fill="#D92F2F" opacity="0.6" />
  <ellipse cx="136" cy="100" rx="6" ry="4" fill="#D92F2F" opacity="0.6" />
  <path d="M86 102 C 86 102, 100 120, 114 102 Z" fill="#07334F" stroke="#07334F" stroke-width="3.5" />
  <path d="M92 110 C 96 116, 104 116, 108 110 Z" fill="#D92F2F" />
</svg>`
  },
  {
    id: 'mascot-happy',
    name: 'Doh Boy — Happy Dual Thumbs Up',
    category: 'Mascot',
    description: 'Cheeky and satisfied double thumbs-up pose with happy crescent eyes.',
    dimensions: { width: 600, height: 720 },
    aspectRatio: '5:6',
    recommendedUse: 'Product review badges, rating badges, loyalty rewards screens, flavor stamps.',
    filename: 'dohboy-mascot-happy-thumbs',
    tags: ['mascot', 'happy', 'thumbs-up', 'approval'],
    svgContent: `<svg viewBox="0 0 200 240" width="600" height="720" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M48 110 C 26 100, 18 80, 24 72 C 30 64, 40 76, 46 92" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" />
  <path d="M152 110 C 174 100, 182 80, 176 72 C 170 64, 160 76, 154 92" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" />
  <path d="M80 180 L80 208" stroke="#07334F" stroke-width="8" stroke-linecap="round" />
  <path d="M58 210 C 58 202, 88 202, 94 210 L94 224 C 94 228, 54 230, 58 210 Z" fill="#D92F2F" stroke="#07334F" stroke-width="4" />
  <path d="M120 180 L120 208" stroke="#07334F" stroke-width="8" stroke-linecap="round" />
  <path d="M106 210 C 106 202, 136 202, 142 210 L142 224 C 142 228, 102 230, 106 210 Z" fill="#D92F2F" stroke="#07334F" stroke-width="4" />
  <circle cx="100" cy="110" r="68" fill="#E8B072" stroke="#07334F" stroke-width="6" />
  <path d="M44 94 C 42 66, 68 44, 100 44 C 134 44, 156 66, 154 94 C 152 115, 140 120, 130 110 C 122 102, 116 112, 106 118 C 96 124, 88 112, 80 108 C 68 104, 56 122, 48 114 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="5" />
  <ellipse cx="100" cy="120" rx="18" ry="14" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" />
  <rect x="70" y="58" width="9" height="4" rx="2" transform="rotate(25 70 58)" fill="#297FC1" />
  <rect x="110" y="54" width="9" height="4" rx="2" transform="rotate(-30 110 54)" fill="#FFD23F" />
  <rect x="135" y="75" width="9" height="4" rx="2" transform="rotate(40 135 75)" fill="#FDEFEB" />
  <path d="M72 88 C 76 80, 88 80, 92 88" stroke="#07334F" stroke-width="4.5" stroke-linecap="round" fill="none" />
  <path d="M108 88 C 112 80, 124 80, 128 88" stroke="#07334F" stroke-width="4.5" stroke-linecap="round" fill="none" />
  <path d="M84 100 Q 100 122 116 100 Z" fill="#07334F" stroke="#07334F" stroke-width="3" />
  <path d="M92 110 Q 100 118 108 110 Z" fill="#D92F2F" />
</svg>`
  },
  {
    id: 'mascot-excited',
    name: 'Doh Boy — Excited Jump in Air',
    category: 'Mascot',
    description: 'High-energy celebratory jump pose with starburst eyes, sparkling action lines, and laughing mouth.',
    dimensions: { width: 660, height: 720 },
    aspectRatio: '11:12',
    recommendedUse: 'Grand opening announcements, limited edition flavor drops, holiday sales banners, flash discounts.',
    filename: 'dohboy-mascot-excited-jump',
    tags: ['mascot', 'excited', 'jump', 'promo', 'drop'],
    svgContent: `<svg viewBox="0 0 220 240" width="660" height="720" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 85 C 30 50, 20 30, 26 22 C 34 14, 48 30, 56 60" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" />
  <path d="M170 85 C 190 50, 200 30, 194 22 C 186 14, 172 30, 164 60" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" />
  <path d="M80 175 Q 60 190 70 215" stroke="#07334F" stroke-width="8" stroke-linecap="round" fill="none" />
  <path d="M56 215 C 56 208, 86 208, 92 215 L92 228 C 92 232, 52 234, 56 215 Z" fill="#D92F2F" stroke="#07334F" stroke-width="4" />
  <path d="M140 175 Q 160 190 150 215" stroke="#07334F" stroke-width="8" stroke-linecap="round" fill="none" />
  <path d="M136 215 C 136 208, 166 208, 172 215 L172 228 C 172 232, 132 234, 136 215 Z" fill="#297FC1" stroke="#07334F" stroke-width="4" />
  <circle cx="110" cy="110" r="68" fill="#E8B072" stroke="#07334F" stroke-width="6" />
  <path d="M54 94 C 52 66, 78 44, 110 44 C 144 44, 166 66, 164 94 C 162 115, 150 120, 140 110 C 132 102, 126 112, 116 118 C 106 124, 98 112, 90 108 C 78 104, 66 122, 58 114 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="5" />
  <ellipse cx="110" cy="120" rx="18" ry="14" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" />
  <path d="M30 40 L35 48 L45 50 L35 52 L30 60 L25 52 L15 50 L25 48 Z" fill="#FFD23F" stroke="#07334F" stroke-width="1.5" />
  <path d="M185 40 L190 48 L200 50 L190 52 L185 60 L180 52 L170 50 L180 48 Z" fill="#FFD23F" stroke="#07334F" stroke-width="1.5" />
  <path d="M90 85 L93 92 L100 95 L93 98 L90 105 L87 98 L80 95 L87 92 Z" fill="#07334F" />
  <path d="M130 85 L133 92 L140 95 L133 98 L130 105 L127 98 L120 95 L127 92 Z" fill="#07334F" />
  <path d="M92 102 Q 110 130 128 102 Z" fill="#07334F" stroke="#07334F" stroke-width="3" />
  <path d="M100 116 Q 110 126 120 116 Z" fill="#D92F2F" />
</svg>`
  },
  {
    id: 'mascot-eating',
    name: 'Doh Boy — Munching Glazed Donut',
    category: 'Mascot',
    description: 'Irresistible appetite pose with Doh Boy eating a mini glazed pastry with crumbs and thumbs-up.',
    dimensions: { width: 600, height: 720 },
    aspectRatio: '5:6',
    recommendedUse: 'Menu boards, food app meal deals, dessert combos, bakery napkin graphics.',
    filename: 'dohboy-mascot-eating-donut',
    tags: ['mascot', 'eating', 'food', 'snack', 'menu'],
    svgContent: `<svg viewBox="0 0 200 240" width="600" height="720" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M140 120 C 160 110, 150 90, 130 92" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" />
  <circle cx="126" cy="92" r="14" fill="#E8B072" stroke="#07334F" stroke-width="3" />
  <path d="M116 88 C 118 82, 134 82, 136 88 C 136 94, 116 96, 116 88 Z" fill="#D92F2F" stroke="#07334F" stroke-width="2" />
  <circle cx="126" cy="92" r="4" fill="#FDEFEB" stroke="#07334F" stroke-width="1.5" />
  <circle cx="138" cy="90" r="5" fill="#EF9FBD" />
  <path d="M48 130 C 26 120, 20 98, 28 90 C 34 82, 44 94, 50 110" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" />
  <path d="M80 180 L80 208" stroke="#07334F" stroke-width="8" stroke-linecap="round" />
  <path d="M58 210 C 58 202, 88 202, 94 210 L94 224 C 94 228, 54 230, 58 210 Z" fill="#D92F2F" stroke="#07334F" stroke-width="4" />
  <path d="M120 180 L120 208" stroke="#07334F" stroke-width="8" stroke-linecap="round" />
  <path d="M106 210 C 106 202, 136 202, 142 210 L142 224 C 142 228, 102 230, 106 210 Z" fill="#297FC1" stroke="#07334F" stroke-width="4" />
  <circle cx="100" cy="110" r="68" fill="#E8B072" stroke="#07334F" stroke-width="6" />
  <path d="M44 94 C 42 66, 68 44, 100 44 C 134 44, 156 66, 154 94 C 152 115, 140 120, 130 110 C 122 102, 116 112, 106 118 C 96 124, 88 112, 80 108 C 68 104, 56 122, 48 114 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="5" />
  <ellipse cx="100" cy="120" rx="18" ry="14" fill="#FDEFEB" stroke="#07334F" stroke-width="4.5" />
  <ellipse cx="78" cy="85" rx="8" ry="12" fill="#07334F" />
  <circle cx="82" cy="82" r="3.5" fill="#FDEFEB" />
  <ellipse cx="112" cy="85" rx="8" ry="12" fill="#07334F" />
  <circle cx="116" cy="82" r="3.5" fill="#FDEFEB" />
  <path d="M92 102 Q 106 116 116 102" stroke="#07334F" stroke-width="4" stroke-linecap="round" fill="none" />
  <circle cx="100" cy="118" r="2" fill="#E8B072" />
  <circle cx="110" cy="122" r="1.5" fill="#E8B072" />
</svg>`
  },
  {
    id: 'mascot-avatar',
    name: 'Doh Boy — Round Avatar Head',
    category: 'Mascot',
    description: 'Circular portrait profile ideal for social avatars, employee pins, and circular packaging seals.',
    dimensions: { width: 512, height: 512 },
    aspectRatio: '1:1',
    recommendedUse: 'Social media profile pictures, loyalty app avatars, employee uniform enamel pins.',
    filename: 'dohboy-mascot-avatar-circle',
    tags: ['mascot', 'avatar', 'profile', 'pin', 'badge'],
    svgContent: `<svg viewBox="0 0 160 160" width="512" height="512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="80" cy="80" r="76" fill="#FDEFEB" stroke="#07334F" stroke-width="5" />
  <circle cx="80" cy="80" r="62" fill="#E8B072" stroke="#07334F" stroke-width="5" />
  <path d="M32 68 C 30 50, 48 26, 80 26 C 112 26, 130 50, 128 68 C 126 84, 116 88, 108 80 C 102 74, 96 82, 88 88 C 80 94, 72 82, 64 80 C 54 78, 44 90, 36 82 C 32 78, 32 74, 32 68 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="4.5" />
  <ellipse cx="80" cy="84" rx="16" ry="12" fill="#FDEFEB" stroke="#07334F" stroke-width="4" />
  <rect x="52" y="38" width="8" height="3.5" rx="1.5" transform="rotate(30 52 38)" fill="#297FC1" />
  <rect x="74" y="32" width="8" height="3.5" rx="1.5" transform="rotate(-15 74 32)" fill="#FFD23F" />
  <rect x="98" y="42" width="8" height="3.5" rx="1.5" transform="rotate(45 98 42)" fill="#FDEFEB" />
  <rect x="114" y="60" width="7" height="3.5" rx="1.5" transform="rotate(-40 114 60)" fill="#D92F2F" />
  <ellipse cx="64" cy="62" rx="7" ry="10" fill="#07334F" />
  <circle cx="62" cy="59" r="3" fill="#FDEFEB" />
  <ellipse cx="96" cy="62" rx="7" ry="10" fill="#07334F" />
  <circle cx="94" cy="59" r="3" fill="#FDEFEB" />
  <ellipse cx="50" cy="72" rx="5" ry="3" fill="#D92F2F" opacity="0.6" />
  <ellipse cx="110" cy="72" rx="5" ry="3" fill="#D92F2F" opacity="0.6" />
  <path d="M70 74 Q 80 84 90 74" fill="none" stroke="#07334F" stroke-width="3.5" stroke-linecap="round" />
</svg>`
  },

  // ==================== PATTERN TILES ====================
  {
    id: 'pattern-dense',
    name: 'Dense Street Sticker Repeat (Seamless Tile)',
    category: 'Patterns',
    description: 'High-energy seamless repeating pattern tile with glazed donuts, sprinkles, graffiti doodles, and action stars.',
    dimensions: { width: 800, height: 800 },
    aspectRatio: '1:1',
    recommendedUse: 'Greaseproof box liners, takeaway bag print, hoodie inner hood lining, sticker wraps.',
    filename: 'dohnut-pattern-dense-tile',
    tags: ['pattern', 'dense', 'seamless', 'wrapper', 'packaging'],
    svgContent: `<svg viewBox="0 0 200 200" width="800" height="800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#FDEFEB" />
  <g transform="translate(30, 30)">
    <circle cx="20" cy="20" r="18" fill="#E8B072" stroke="#07334F" stroke-width="3" />
    <path d="M8 16 C 8 10, 16 6, 24 6 C 32 6, 34 12, 32 18 C 30 24, 26 26, 20 24 C 14 22, 8 22, 8 16 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="2" />
    <circle cx="20" cy="20" r="5" fill="#FDEFEB" stroke="#07334F" stroke-width="2" />
  </g>
  <g transform="translate(130, 40)">
    <rect width="50" height="26" rx="13" fill="#D92F2F" stroke="#07334F" stroke-width="3" />
    <text x="25" y="18" font-family="'Titan One', 'Fredoka', 'Arial Black', sans-serif" font-size="12" font-weight="900" text-anchor="middle" fill="#FDEFEB">DOH!</text>
  </g>
  <g transform="translate(40, 130)">
    <rect width="44" height="22" rx="11" fill="#297FC1" stroke="#07334F" stroke-width="3" />
    <text x="22" y="15" font-family="'Titan One', 'Fredoka', 'Arial Black', sans-serif" font-size="10" font-weight="900" text-anchor="middle" fill="#FDEFEB">YUM!</text>
  </g>
  <g transform="translate(140, 140)">
    <circle cx="18" cy="18" r="16" fill="#E8B072" stroke="#07334F" stroke-width="3" />
    <path d="M6 14 C 6 8, 14 6, 22 6 C 30 6, 30 14, 28 20 C 26 24, 20 24, 16 22 C 10 20, 6 18, 6 14 Z" fill="#297FC1" stroke="#07334F" stroke-width="2" />
    <circle cx="18" cy="18" r="4.5" fill="#FDEFEB" stroke="#07334F" stroke-width="2" />
  </g>
  <path d="M100 15 L102 21 L108 23 L102 25 L100 31 L98 25 L92 23 L98 21 Z" fill="#FFD23F" stroke="#07334F" stroke-width="1.5" />
  <path d="M20 95 L22 101 L28 103 L22 105 L20 111 L18 105 L12 103 L18 101 Z" fill="#FFD23F" stroke="#07334F" stroke-width="1.5" />
  <path d="M180 100 L182 106 L188 108 L182 110 L180 116 L178 110 L172 108 L178 106 Z" fill="#D92F2F" stroke="#07334F" stroke-width="1.5" />
  <circle cx="100" cy="100" r="14" fill="#FFD23F" stroke="#07334F" stroke-width="2.5" />
  <ellipse cx="96" cy="98" rx="1.5" ry="2.5" fill="#07334F" />
  <ellipse cx="104" cy="98" rx="1.5" ry="2.5" fill="#07334F" />
  <path d="M96 104 Q 100 108 104 104" stroke="#07334F" stroke-width="1.5" stroke-linecap="round" fill="none" />
  <rect x="80" y="55" width="8" height="3.5" rx="1.5" transform="rotate(30 80 55)" fill="#297FC1" />
  <rect x="115" y="165" width="8" height="3.5" rx="1.5" transform="rotate(-25 115 165)" fill="#EF9FBD" />
  <rect x="15" y="165" width="8" height="3.5" rx="1.5" transform="rotate(45 15 165)" fill="#FFD23F" />
  <rect x="175" y="25" width="8" height="3.5" rx="1.5" transform="rotate(-40 175 25)" fill="#D92F2F" />
</svg>`
  },
  {
    id: 'pattern-sparse',
    name: 'Sparse Rhythmic Pattern (Seamless Tile)',
    category: 'Patterns',
    description: 'Clean, elegant repeating pattern with generous cream breathing room and subtle pop accents.',
    dimensions: { width: 800, height: 800 },
    aspectRatio: '1:1',
    recommendedUse: 'Delicate tissue wraps, beverage cup sleeves, letterhead stationery, web backgrounds.',
    filename: 'dohnut-pattern-sparse-tile',
    tags: ['pattern', 'sparse', 'minimal', 'tissue', 'background'],
    svgContent: `<svg viewBox="0 0 200 200" width="800" height="800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#FDEFEB" />
  <g transform="translate(45, 45)">
    <circle cx="22" cy="22" r="20" fill="#E8B072" stroke="#07334F" stroke-width="3" />
    <path d="M8 18 C 8 10, 18 8, 28 8 C 36 8, 38 16, 36 22 C 34 28, 28 30, 22 28 C 14 26, 8 24, 8 18 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="2.5" />
    <circle cx="22" cy="22" r="6" fill="#FDEFEB" stroke="#07334F" stroke-width="2" />
    <rect x="14" y="14" width="4" height="2" rx="1" transform="rotate(30 14 14)" fill="#297FC1" />
    <rect x="26" y="14" width="4" height="2" rx="1" transform="rotate(-20 26 14)" fill="#FFD23F" />
  </g>
  <g transform="translate(145, 145)">
    <circle cx="22" cy="22" r="20" fill="#E8B072" stroke="#07334F" stroke-width="3" />
    <path d="M8 18 C 8 10, 18 8, 28 8 C 36 8, 38 16, 36 22 C 34 28, 28 30, 22 28 C 14 26, 8 24, 8 18 Z" fill="#297FC1" stroke="#07334F" stroke-width="2.5" />
    <circle cx="22" cy="22" r="6" fill="#FDEFEB" stroke="#07334F" stroke-width="2" />
    <rect x="14" y="14" width="4" height="2" rx="1" transform="rotate(45 14 14)" fill="#D92F2F" />
  </g>
  <path d="M155 45 L157 52 L164 54 L157 56 L155 63 L153 56 L146 54 L153 52 Z" fill="#FFD23F" stroke="#07334F" stroke-width="1.5" />
  <path d="M45 155 L47 162 L54 164 L47 166 L45 173 L43 166 L36 164 L43 162 Z" fill="#D92F2F" stroke="#07334F" stroke-width="1.5" />
  <circle cx="100" cy="100" r="5" fill="#EF9FBD" stroke="#07334F" stroke-width="1.5" />
</svg>`
  },
  {
    id: 'pattern-border-tape',
    name: 'Border & Sealing Tape Repeat (Strip)',
    category: 'Patterns',
    description: 'Linear repeating tape strip with "DOH!" pill badges, donut stamps, and street star accents.',
    dimensions: { width: 1024, height: 256 },
    aspectRatio: '4:1',
    recommendedUse: 'Tamper-evident delivery tape, ribbon bands, store wall baseboard graphics, web dividers.',
    filename: 'dohnut-pattern-border-tape',
    tags: ['pattern', 'border', 'tape', 'sealing', 'ribbon'],
    svgContent: `<svg viewBox="0 0 400 100" width="1024" height="256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="100" fill="#D92F2F" />
  <line x1="0" y1="6" x2="400" y2="6" stroke="#07334F" stroke-width="4" stroke-dasharray="12 8" />
  <line x1="0" y1="94" x2="400" y2="94" stroke="#07334F" stroke-width="4" stroke-dasharray="12 8" />
  <g transform="translate(20, 25)">
    <rect width="90" height="50" rx="25" fill="#FDEFEB" stroke="#07334F" stroke-width="4" />
    <text x="45" y="34" font-family="'Titan One', 'Fredoka', 'Arial Black', sans-serif" font-size="24" font-weight="900" text-anchor="middle" fill="#07334F">DOH!</text>
  </g>
  <g transform="translate(140, 22)">
    <circle cx="28" cy="28" r="26" fill="#297FC1" stroke="#07334F" stroke-width="4" />
    <circle cx="28" cy="28" r="18" fill="#FDEFEB" stroke="#07334F" stroke-width="3" />
    <circle cx="28" cy="28" r="7" fill="#D92F2F" stroke="#07334F" stroke-width="2" />
  </g>
  <g transform="translate(225, 25)">
    <rect width="90" height="50" rx="25" fill="#297FC1" stroke="#07334F" stroke-width="4" />
    <text x="45" y="34" font-family="'Titan One', 'Fredoka', 'Arial Black', sans-serif" font-size="24" font-weight="900" text-anchor="middle" fill="#FDEFEB">FRESH</text>
  </g>
  <g transform="translate(345, 22)">
    <circle cx="28" cy="28" r="26" fill="#EF9FBD" stroke="#07334F" stroke-width="4" />
    <path d="M28 8 L30 20 L42 22 L30 24 L28 36 L26 24 L14 22 L26 20 Z" fill="#FDEFEB" stroke="#07334F" stroke-width="2" />
  </g>
</svg>`
  },
  {
    id: 'pattern-packaging-checker',
    name: 'Packaging Checkerboard Repeat (Seamless Tile)',
    category: 'Patterns',
    description: 'Chunky 2x2 street checkerboard repeat combining cream and pink panels with badges and stars.',
    dimensions: { width: 800, height: 800 },
    aspectRatio: '1:1',
    recommendedUse: '6-pack & 12-pack master box base paper, kraft bag patterns, retail wallpaper, streetwear prints.',
    filename: 'dohnut-pattern-packaging-checker',
    tags: ['pattern', 'checker', 'packaging', 'box', 'bold'],
    svgContent: `<svg viewBox="0 0 200 200" width="800" height="800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100" height="100" fill="#FDEFEB" />
  <rect x="100" y="0" width="100" height="100" fill="#EF9FBD" opacity="0.4" />
  <rect x="0" y="100" width="100" height="100" fill="#297FC1" opacity="0.15" />
  <rect x="100" y="100" width="100" height="100" fill="#FDEFEB" />
  <g transform="translate(15, 25)">
    <circle cx="35" cy="25" r="24" fill="#E8B072" stroke="#07334F" stroke-width="3" />
    <path d="M18 20 C 18 10, 30 8, 42 8 C 52 8, 54 18, 52 25 C 50 32, 42 34, 35 32 C 25 30, 18 28, 18 20 Z" fill="#D92F2F" stroke="#07334F" stroke-width="2.5" />
    <circle cx="35" cy="25" r="8" fill="#FDEFEB" stroke="#07334F" stroke-width="2" />
  </g>
  <g transform="translate(115, 28)">
    <rect width="70" height="44" rx="22" fill="#D92F2F" stroke="#07334F" stroke-width="3" />
    <text x="35" y="28" font-family="'Titan One', 'Fredoka', 'Arial Black', sans-serif" font-size="16" font-weight="900" text-anchor="middle" fill="#FDEFEB">DOH!</text>
  </g>
  <g transform="translate(15, 128)">
    <rect width="70" height="44" rx="22" fill="#297FC1" stroke="#07334F" stroke-width="3" />
    <text x="35" y="28" font-family="'Titan One', 'Fredoka', 'Arial Black', sans-serif" font-size="15" font-weight="900" text-anchor="middle" fill="#FDEFEB">HOT</text>
  </g>
  <g transform="translate(115, 125)">
    <circle cx="35" cy="25" r="24" fill="#E8B072" stroke="#07334F" stroke-width="3" />
    <path d="M18 20 C 18 10, 30 8, 42 8 C 52 8, 54 18, 52 25 C 50 32, 42 34, 35 32 C 25 30, 18 28, 18 20 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="2.5" />
    <circle cx="35" cy="25" r="8" fill="#FDEFEB" stroke="#07334F" stroke-width="2" />
  </g>
  <path d="M100 0 L100 200" stroke="#07334F" stroke-width="1.5" stroke-dasharray="4 4" />
  <path d="M0 100 L200 100" stroke="#07334F" stroke-width="1.5" stroke-dasharray="4 4" />
</svg>`
  },

  // ==================== GRAPHIC MOTIFS & STICKERS ====================
  {
    id: 'motif-classic-donut',
    name: 'Glazed Strawberry Donut Stamp',
    category: 'Motifs',
    description: 'Standalone vector donut illustration with golden fried dough, pink strawberry frosting, and multi-colored sprinkles.',
    dimensions: { width: 480, height: 480 },
    aspectRatio: '1:1',
    recommendedUse: 'Spot illustrations, menu flavor indicators, merchandise embroidery, social stickers.',
    filename: 'dohnut-motif-strawberry-donut',
    tags: ['motif', 'donut', 'food', 'strawberry', 'illustration'],
    svgContent: `<svg viewBox="0 0 160 160" width="480" height="480" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="80" cy="80" r="68" fill="#E8B072" stroke="#07334F" stroke-width="6" />
  <path d="M26 68 C 24 40, 50 20, 80 20 C 114 20, 136 40, 134 68 C 132 94, 118 100, 108 90 C 100 82, 94 92, 84 98 C 74 104, 64 92, 56 88 C 44 84, 34 102, 26 94 C 22 88, 22 80, 26 68 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="5" />
  <ellipse cx="80" cy="88" rx="20" ry="15" fill="#FDEFEB" stroke="#07334F" stroke-width="5" />
  <rect x="48" y="38" width="10" height="4.5" rx="2" transform="rotate(30 48 38)" fill="#297FC1" />
  <rect x="74" y="30" width="10" height="4.5" rx="2" transform="rotate(-15 74 30)" fill="#FFD23F" />
  <rect x="104" y="42" width="10" height="4.5" rx="2" transform="rotate(45 104 42)" fill="#FDEFEB" />
  <rect x="118" y="66" width="9" height="4.5" rx="2" transform="rotate(-35 118 66)" fill="#D92F2F" />
  <rect x="42" y="65" width="9" height="4.5" rx="2" transform="rotate(60 42 65)" fill="#FFD23F" />
  <rect x="105" y="85" width="9" height="4.5" rx="2" transform="rotate(15 105 85)" fill="#297FC1" />
</svg>`
  },
  {
    id: 'sticker-doh-badge',
    name: '"DOH!" Street Graffiti Sticker',
    category: 'Motifs',
    description: 'Chunky red pill badge with bold white graffiti text and deep navy drop shadow.',
    dimensions: { width: 600, height: 360 },
    aspectRatio: '5:3',
    recommendedUse: 'Die-cut vinyl stickers, skate deck decals, tamper seal tabs, laptop stickers.',
    filename: 'dohnut-sticker-doh-pill',
    tags: ['sticker', 'doh', 'badge', 'graffiti', 'die-cut'],
    svgContent: `<svg viewBox="0 0 200 120" width="600" height="360" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="18" width="172" height="84" rx="42" fill="#07334F" />
  <rect x="8" y="10" width="172" height="84" rx="42" fill="#D92F2F" stroke="#07334F" stroke-width="5.5" />
  <path d="M28 26 L30 32 L36 34 L30 36 L28 42 L26 36 L20 34 L26 32 Z" fill="#FDEFEB" />
  <circle cx="160" cy="30" r="4.5" fill="#FFD23F" stroke="#07334F" stroke-width="1.5" />
  <text x="94" y="64" text-anchor="middle" font-family="'Titan One', 'Fredoka', 'Arial Black', sans-serif" font-size="44" font-weight="900" letter-spacing="1" fill="#07334F">DOH!</text>
  <text x="92" y="61" text-anchor="middle" font-family="'Titan One', 'Fredoka', 'Arial Black', sans-serif" font-size="44" font-weight="900" letter-spacing="1" fill="#FDEFEB" stroke="#07334F" stroke-width="3" paint-order="stroke fill">DOH!</text>
</svg>`
  },
  {
    id: 'motif-star-spark',
    name: '4-Point Street Star Spark',
    category: 'Motifs',
    description: 'Iconic street sparkle motif used to denote flavor bursts, crispy highlights, and street attitude.',
    dimensions: { width: 400, height: 400 },
    aspectRatio: '1:1',
    recommendedUse: 'Accent doodles, UI sparkles, menu price stars, background bursts.',
    filename: 'dohnut-motif-star-spark',
    tags: ['star', 'sparkle', 'accent', 'burst', 'vector'],
    svgContent: `<svg viewBox="0 0 100 100" width="400" height="400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 6 L59 38 L91 50 L59 62 L50 94 L41 62 L9 50 L41 38 Z" fill="#297FC1" stroke="#07334F" stroke-width="6" stroke-linejoin="round" />
  <path d="M50 18 L55 42 L79 50 L55 58 L50 82 L45 58 L21 50 L45 42 Z" fill="#FDEFEB" opacity="0.4" />
</svg>`
  },
  {
    id: 'motif-smiley-bubble',
    name: 'Yellow Smiley Attitude Bubble',
    category: 'Motifs',
    description: 'Cheerful yellow attitude smiley with heavy comic outline and playful expression.',
    dimensions: { width: 400, height: 400 },
    aspectRatio: '1:1',
    recommendedUse: 'Social media reactions, review highlights, packaging emotion badges, pins.',
    filename: 'dohnut-motif-smiley-bubble',
    tags: ['smiley', 'yellow', 'badge', 'friendly', 'attitude'],
    svgContent: `<svg viewBox="0 0 100 100" width="400" height="400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="44" fill="#FFD23F" stroke="#07334F" stroke-width="7" />
  <ellipse cx="36" cy="42" rx="5" ry="9" fill="#07334F" />
  <ellipse cx="64" cy="42" rx="5" ry="9" fill="#07334F" />
  <path d="M32 58 Q 50 80 68 58" stroke="#07334F" stroke-width="6.5" stroke-linecap="round" fill="none" />
  <ellipse cx="26" cy="52" rx="4" ry="2.5" fill="#D92F2F" opacity="0.5" />
  <ellipse cx="74" cy="52" rx="4" ry="2.5" fill="#D92F2F" opacity="0.5" />
</svg>`
  },
  {
    id: 'motif-organic-blob',
    name: 'Street Dough Blob Shape',
    category: 'Motifs',
    description: 'Fluid, organic pink pastry blob used for background framing and product badges.',
    dimensions: { width: 600, height: 500 },
    aspectRatio: '6:5',
    recommendedUse: 'Background framing behind food photography, price callout backdrops, social post cards.',
    filename: 'dohnut-motif-dough-blob',
    tags: ['blob', 'organic', 'dough', 'framing', 'pink'],
    svgContent: `<svg viewBox="0 0 120 100" width="600" height="500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 50 C 15 20, 45 10, 75 18 C 105 25, 115 55, 100 80 C 85 105, 35 95, 20 50 Z" fill="#EF9FBD" stroke="#07334F" stroke-width="5" />
</svg>`
  },
  {
    id: 'motif-street-arrow',
    name: 'Graffiti Street Arrow',
    category: 'Motifs',
    description: 'Dynamic hand-drawn red graffiti arrow directing eye flow toward key menu items or callout stickers.',
    dimensions: { width: 600, height: 400 },
    aspectRatio: '3:2',
    recommendedUse: 'Menu callouts ("TRY THIS!"), store directional signage, promotional banners.',
    filename: 'dohnut-motif-street-arrow',
    tags: ['arrow', 'graffiti', 'street', 'direction', 'red'],
    svgContent: `<svg viewBox="0 0 60 40" width="600" height="400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 20 C 18 16, 32 24, 48 20 M36 8 L54 20 L36 32" stroke="#D92F2F" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`
  }
];
