import React from 'react';
import { LogoVariant } from '../../types';
import officialLogoAsset from '../../assets/images/official_dohnut_logo_1787855521338.jpg';

interface DohNutLogoProps {
  variant?: LogoVariant | 'official-art';
  className?: string;
  size?: number | string;
  showClearSpace?: boolean;
  clearSpaceColor?: string;
  animated?: boolean;
  useRasterAsset?: boolean;
}

export const DohNutLogo: React.FC<DohNutLogoProps> = ({
  variant = 'primary',
  className = '',
  size = 280,
  showClearSpace = false,
  clearSpaceColor = 'rgba(0, 158, 226, 0.2)',
  animated = false,
  useRasterAsset = false,
}) => {
  if (useRasterAsset || variant === 'official-art') {
    return (
      <div
        className={`inline-block overflow-hidden rounded-3xl ${className} ${
          animated ? 'transition-transform duration-300 hover:scale-105' : ''
        }`}
        style={{ maxWidth: size, width: '100%' }}
      >
        <img
          src={officialLogoAsset}
          alt="Doh-Nut Official Play-Doh Inspired Master Logo"
          className="w-full h-auto object-contain rounded-2xl shadow-[4px_4px_0px_0px_#07334F] border-3 border-[#07334F]"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  const renderLogoContent = () => {
    switch (variant) {
      case 'horizontal':
        return (
          <svg
            viewBox="0 0 480 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-auto ${className} ${animated ? 'transition-transform duration-300 hover:scale-105' : ''}`}
            style={{ maxWidth: size }}
          >
            <defs>
              <radialGradient id="hzRedGrad" cx="50%" cy="25%" r="65%">
                <stop offset="0%" stopColor="#FF4A4E" />
                <stop offset="45%" stopColor="#E31A21" />
                <stop offset="100%" stopColor="#B30E14" />
              </radialGradient>
            </defs>

            {/* Play-Doh Arched Mini Cloud Badge on Left */}
            <g transform="translate(10, 12)">
              {/* Outer Cyan Border */}
              <path
                d="M 12,58 C 4,44 14,24 32,20 C 44,8 72,0 88,0 C 104,0 132,8 144,20 C 162,24 172,44 164,58 C 172,78 158,102 138,106 C 114,96 62,96 38,106 C 18,102 4,78 12,58 Z"
                fill="#009EE2"
              />
              {/* White Mid Border */}
              <path
                d="M 17,58 C 10,46 19,28 35,24 C 46,12 73,4 88,4 C 103,4 130,12 141,24 C 157,28 166,46 159,58 C 166,76 153,98 135,102 C 113,92 63,92 41,102 C 23,98 10,76 17,58 Z"
                fill="#FFFFFF"
              />
              {/* Red Clay Body */}
              <path
                d="M 22,58 C 16,48 24,32 38,28 C 48,16 74,8 88,8 C 102,8 128,16 138,28 C 152,32 160,48 154,58 C 160,74 148,94 132,98 C 112,88 64,88 44,98 C 28,94 16,74 22,58 Z"
                fill="url(#hzRedGrad)"
              />
              {/* Play-Doh Mini Lettering DN */}
              <text
                x="88"
                y="68"
                textAnchor="middle"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="38"
                fontWeight="900"
                fill="#FFFFFF"
                stroke="#162238"
                strokeWidth="3"
                paintOrder="stroke fill"
              >
                Doh
              </text>
            </g>

            {/* Horizontal Text Wordmark */}
            <g transform="translate(195, 25)">
              {/* 3D Navy Shadow */}
              <text
                x="0"
                y="64"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="58"
                fontWeight="900"
                letterSpacing="1"
                fill="#162238"
              >
                Doh-Nut
              </text>
              {/* Main White Text */}
              <text
                x="-3"
                y="60"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="58"
                fontWeight="900"
                letterSpacing="1"
                fill="#FFFFFF"
                stroke="#162238"
                strokeWidth="4.5"
                paintOrder="stroke fill"
              >
                Doh-Nut
              </text>
              {/* Sub-tag */}
              <rect x="0" y="76" width="260" height="24" rx="12" fill="#009EE2" />
              <text
                x="130"
                y="92"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontSize="11"
                fontWeight="900"
                letterSpacing="3"
                textAnchor="middle"
                fill="#FFFFFF"
              >
                PLAY-DOH INSPIRED • EST. MY
              </text>
            </g>
          </svg>
        );

      case 'secondary':
      case 'compact':
      case 'badge':
        return (
          <svg
            viewBox="0 0 260 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-auto ${className}`}
            style={{ maxWidth: size }}
          >
            <defs>
              <radialGradient id="compRedGrad" cx="50%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#FF4A4E" />
                <stop offset="50%" stopColor="#E31A21" />
                <stop offset="100%" stopColor="#B30E14" />
              </radialGradient>
            </defs>

            {/* Circular App Badge with Play-Doh Colors */}
            <circle cx="130" cy="130" r="122" fill="#009EE2" />
            <circle cx="130" cy="130" r="112" fill="#FFFFFF" />
            <circle cx="130" cy="130" r="102" fill="url(#compRedGrad)" />

            {/* Top Shine Sparkle */}
            <path d="M130 45 L133 53 L141 56 L133 59 L130 67 L127 59 L119 56 L127 53 Z" fill="#FFFFFF" opacity="0.9" />

            {/* Play-Doh Style "Doh-Nut" Centered */}
            <g transform="translate(130, 138)">
              <text
                x="0"
                y="8"
                textAnchor="middle"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="46"
                fontWeight="900"
                fill="#162238"
              >
                Doh-Nut
              </text>
              <text
                x="-2"
                y="5"
                textAnchor="middle"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="46"
                fontWeight="900"
                fill="#FFFFFF"
                stroke="#162238"
                strokeWidth="4"
                paintOrder="stroke fill"
              >
                Doh-Nut
              </text>
            </g>

            {/* Bottom Est Pill */}
            <g transform="translate(70, 178)">
              <rect x="0" y="0" width="120" height="22" rx="11" fill="#162238" />
              <text
                x="60"
                y="15"
                textAnchor="middle"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontSize="9"
                fontWeight="900"
                letterSpacing="2"
                fill="#FFFFFF"
              >
                PLAY-DOH VIBE
              </text>
            </g>
          </svg>
        );

      case 'monochrome':
        return (
          <svg
            viewBox="0 0 420 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-auto ${className}`}
            style={{ maxWidth: size }}
          >
            {/* Play-Doh Arched Lozenge Cloud Outer */}
            <path
              d="M 35,130 C 15,100 35,65 75,55 C 100,28 165,6 210,6 C 255,6 320,28 345,55 C 385,65 405,100 385,130 C 403,178 375,230 332,240 C 275,218 145,218 88,240 C 45,230 17,178 35,130 Z"
              fill="#07334F"
            />
            {/* White Mid Border */}
            <path
              d="M 45,130 C 27,103 45,73 81,64 C 104,39 164,18 210,18 C 256,18 316,39 339,64 C 375,73 393,103 375,130 C 391,172 365,220 326,229 C 273,208 147,208 94,229 C 55,220 29,172 45,130 Z"
              fill="#FFFFFF"
            />
            {/* Solid Navy Body */}
            <path
              d="M 55,130 C 39,106 55,81 87,73 C 108,50 163,30 210,30 C 257,30 312,50 333,73 C 365,81 381,106 365,130 C 379,167 355,210 320,218 C 271,198 149,198 100,218 C 65,210 41,167 55,130 Z"
              fill="#07334F"
            />
            {/* Wordmark in Pure White */}
            <g transform="translate(210, 152)">
              <text
                x="0"
                y="0"
                textAnchor="middle"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="76"
                fontWeight="900"
                letterSpacing="1"
                fill="#FFFFFF"
              >
                Doh-Nut
              </text>
              <text
                x="152"
                y="6"
                fontFamily="'Fredoka', sans-serif"
                fontSize="14"
                fontWeight="900"
                fill="#FFFFFF"
              >
                TM
              </text>
            </g>
          </svg>
        );

      case 'reversed':
        return (
          <svg
            viewBox="0 0 420 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-auto ${className}`}
            style={{ maxWidth: size }}
          >
            {/* Outer White Badge Contour */}
            <path
              d="M 35,130 C 15,100 35,65 75,55 C 100,28 165,6 210,6 C 255,6 320,28 345,55 C 385,65 405,100 385,130 C 403,178 375,230 332,240 C 275,218 145,218 88,240 C 45,230 17,178 35,130 Z"
              fill="#FFFFFF"
            />
            {/* Cyan Border */}
            <path
              d="M 45,130 C 27,103 45,73 81,64 C 104,39 164,18 210,18 C 256,18 316,39 339,64 C 375,73 393,103 375,130 C 391,172 365,220 326,229 C 273,208 147,208 94,229 C 55,220 29,172 45,130 Z"
              fill="#009EE2"
            />
            {/* Deep Navy Body */}
            <path
              d="M 55,130 C 39,106 55,81 87,73 C 108,50 163,30 210,30 C 257,30 312,50 333,73 C 365,81 381,106 365,130 C 379,167 355,210 320,218 C 271,198 149,198 100,218 C 65,210 41,167 55,130 Z"
              fill="#07334F"
            />
            {/* Wordmark in Cyan & White */}
            <g transform="translate(210, 152)">
              <text
                x="0"
                y="5"
                textAnchor="middle"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="76"
                fontWeight="900"
                letterSpacing="1"
                fill="#009EE2"
              >
                Doh-Nut
              </text>
              <text
                x="-3"
                y="0"
                textAnchor="middle"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="76"
                fontWeight="900"
                letterSpacing="1"
                fill="#FFFFFF"
                stroke="#07334F"
                strokeWidth="4"
                paintOrder="stroke fill"
              >
                Doh-Nut
              </text>
              <text
                x="152"
                y="6"
                fontFamily="'Fredoka', sans-serif"
                fontSize="14"
                fontWeight="900"
                fill="#FFFFFF"
              >
                TM
              </text>
            </g>
          </svg>
        );

      case 'small':
        return (
          <svg
            viewBox="0 0 110 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-auto ${className}`}
            style={{ maxWidth: size }}
          >
            <defs>
              <radialGradient id="smRedGrad" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FF4A4E" />
                <stop offset="60%" stopColor="#E31A21" />
                <stop offset="100%" stopColor="#B30E14" />
              </radialGradient>
            </defs>
            <rect width="110" height="110" rx="32" fill="#009EE2" />
            <rect x="5" y="5" width="100" height="100" rx="27" fill="#FFFFFF" />
            <rect x="10" y="10" width="90" height="90" rx="22" fill="url(#smRedGrad)" />
            <text
              x="55"
              y="68"
              textAnchor="middle"
              fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
              fontSize="44"
              fontWeight="900"
              fill="#FFFFFF"
              stroke="#162238"
              strokeWidth="4"
              paintOrder="stroke fill"
            >
              DN
            </text>
          </svg>
        );

      case 'primary':
      default:
        return (
          <svg
            viewBox="0 0 420 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-auto ${className} ${animated ? 'transition-all duration-300 hover:scale-105 hover:rotate-[-0.5deg]' : ''}`}
            style={{ maxWidth: size }}
          >
            <defs>
              {/* Play-Doh Rich Red Gradient with Soft Top Highlight */}
              <radialGradient id="playDohRedGrad" cx="50%" cy="22%" r="65%">
                <stop offset="0%" stopColor="#FF4A4E" />
                <stop offset="35%" stopColor="#EB1C24" />
                <stop offset="75%" stopColor="#D92F2F" />
                <stop offset="100%" stopColor="#A30E14" />
              </radialGradient>

              <filter id="softClayShadow" x="-10%" y="-10%" width="120%" height="130%">
                <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#07334F" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* LAYER 1: Electric Blue / Cyan Outer Cloud Lozenge */}
            <path
              d="M 35,130 C 15,100 35,65 75,55 C 100,28 165,6 210,6 C 255,6 320,28 345,55 C 385,65 405,100 385,130 C 403,178 375,230 332,240 C 275,218 145,218 88,240 C 45,230 17,178 35,130 Z"
              fill="#009EE2"
              filter="url(#softClayShadow)"
            />

            {/* LAYER 2: Crisp White Middle Border Contour */}
            <path
              d="M 43,130 C 25,103 43,71 80,62 C 103,37 164,16 210,16 C 256,16 317,37 340,62 C 377,71 395,103 377,130 C 393,173 367,222 328,231 C 274,210 146,210 92,231 C 53,222 27,173 43,130 Z"
              fill="#FFFFFF"
            />

            {/* LAYER 3: Rich Scarlet Red Main Clay Cloud Body */}
            <path
              d="M 51,130 C 35,106 51,77 85,69 C 106,46 163,26 210,26 C 257,26 314,46 335,69 C 369,77 385,106 369,130 C 383,168 359,213 324,222 C 273,202 147,202 96,222 C 61,213 37,168 51,130 Z"
              fill="url(#playDohRedGrad)"
            />

            {/* LAYER 4: Soft Clay Dome Gloss Highlight Arc */}
            <path
              d="M 92,72 C 120,52 165,36 210,36 C 255,36 300,52 328,72 C 298,56 252,47 210,47 C 168,47 122,56 92,72 Z"
              fill="#FFFFFF"
              opacity="0.28"
            />

            {/* LAYER 5: Authentic Play-Doh Style Wordmark "Doh-Nut" */}
            <g transform="translate(210, 150)">
              {/* 3D Deep Navy Drop Shadow */}
              <text
                x="0"
                y="9"
                textAnchor="middle"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="78"
                fontWeight="900"
                letterSpacing="1"
                fill="#162238"
              >
                Doh-Nut
              </text>
              <text
                x="2"
                y="11"
                textAnchor="middle"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="78"
                fontWeight="900"
                letterSpacing="1"
                fill="#07334F"
              >
                Doh-Nut
              </text>

              {/* Pure White Letter Faces with crisp dark navy outline */}
              <text
                x="-3"
                y="0"
                textAnchor="middle"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="78"
                fontWeight="900"
                letterSpacing="1"
                fill="#FFFFFF"
                stroke="#162238"
                strokeWidth="4.5"
                paintOrder="stroke fill"
              >
                Doh-Nut
              </text>

              {/* Trademark Symbol (TM) */}
              <text
                x="154"
                y="14"
                fontFamily="'Fredoka', 'Arial Black', sans-serif"
                fontSize="14"
                fontWeight="900"
                fill="#162238"
              >
                TM
              </text>
            </g>
          </svg>
        );
    }
  };

  if (showClearSpace) {
    return (
      <div className="relative inline-block p-8 border-2 border-dashed border-[#009EE2] rounded-3xl bg-[#009EE2]/5 group">
        <div className="absolute top-2 left-2 text-[10px] font-mono font-black text-[#009EE2]">
          X CLEAR SPACE = 0.5 × [D]
        </div>
        <div className="absolute bottom-2 right-2 text-[10px] font-mono font-black text-[#009EE2]">
          SAFE ZONE (MIN 24px)
        </div>
        <div
          className="absolute inset-2 pointer-events-none rounded-2xl"
          style={{ backgroundColor: clearSpaceColor }}
        />
        <div className="relative z-10">{renderLogoContent()}</div>
      </div>
    );
  }

  return <div className="inline-flex items-center justify-center">{renderLogoContent()}</div>;
};

