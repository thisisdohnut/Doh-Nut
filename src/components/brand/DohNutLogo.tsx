import React from 'react';
import { LogoVariant } from '../../types';

interface DohNutLogoProps {
  variant?: LogoVariant;
  className?: string;
  size?: number | string;
  showClearSpace?: boolean;
  clearSpaceColor?: string;
  animated?: boolean;
}

export const DohNutLogo: React.FC<DohNutLogoProps> = ({
  variant = 'primary',
  className = '',
  size = 280,
  showClearSpace = false,
  clearSpaceColor = 'rgba(0, 158, 226, 0.2)',
  animated = false,
}) => {
  const renderLogoContent = () => {
    switch (variant) {
      case 'horizontal':
        return (
          <svg
            viewBox="0 0 460 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-auto ${className} ${animated ? 'transition-transform duration-300 hover:scale-105' : ''}`}
            style={{ maxWidth: size }}
          >
            <defs>
              <radialGradient id="hzRedGrad" cx="50%" cy="25%" r="65%">
                <stop offset="0%" stopColor="#FF4146" />
                <stop offset="45%" stopColor="#E31A21" />
                <stop offset="100%" stopColor="#A30E14" />
              </radialGradient>
            </defs>

            {/* Arched Mini Badge on Left */}
            <g transform="translate(8, 10)">
              {/* Outer Cyan Border */}
              <path
                d="M 12,50 C 4,38 12,22 28,18 C 38,8 62,0 75,0 C 88,0 112,8 122,18 C 138,22 146,38 138,50 C 145,68 134,88 118,92 C 98,84 52,84 32,92 C 16,88 5,68 12,50 Z"
                fill="#009EE2"
              />
              {/* White Mid Border */}
              <path
                d="M 16,50 C 9,39 16,25 30,21 C 39,11 61,4 75,4 C 89,4 111,11 120,21 C 134,25 141,39 134,50 C 140,66 130,84 116,88 C 97,80 53,80 34,88 C 20,84 10,66 16,50 Z"
                fill="#FFFFFF"
              />
              {/* Red Body */}
              <path
                d="M 20,50 C 14,41 20,29 32,25 C 41,16 61,9 75,9 C 89,9 109,16 118,25 C 130,29 136,41 130,50 C 135,64 126,79 113,83 C 96,76 54,76 37,83 C 24,79 15,64 20,50 Z"
                fill="url(#hzRedGrad)"
              />
              {/* Mini White Clay DN Icon */}
              <text
                x="75"
                y="58"
                textAnchor="middle"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="32"
                fontWeight="900"
                fill="#FFFFFF"
                stroke="#162238"
                strokeWidth="2.5"
                paintOrder="stroke fill"
              >
                DN
              </text>
            </g>

            {/* Horizontal Text Wordmark */}
            <g transform="translate(170, 20)">
              {/* 3D Navy Shadow */}
              <text
                x="0"
                y="62"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="56"
                fontWeight="900"
                letterSpacing="1"
                fill="#162238"
              >
                Doh-Nut
              </text>
              {/* Main White Text */}
              <text
                x="-3"
                y="58"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="56"
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
              <rect x="0" y="74" width="240" height="24" rx="12" fill="#009EE2" />
              <text
                x="120"
                y="90"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontSize="11"
                fontWeight="900"
                letterSpacing="3"
                textAnchor="middle"
                fill="#FFFFFF"
              >
                OFFICIAL BRAND
              </text>
            </g>
          </svg>
        );

      case 'secondary':
      case 'compact':
      case 'badge':
        return (
          <svg
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-auto ${className}`}
            style={{ maxWidth: size }}
          >
            <defs>
              <radialGradient id="compRedGrad" cx="50%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#FF4146" />
                <stop offset="50%" stopColor="#E31A21" />
                <stop offset="100%" stopColor="#A30E14" />
              </radialGradient>
            </defs>

            {/* Circular App Badge */}
            <circle cx="120" cy="120" r="112" fill="#009EE2" />
            <circle cx="120" cy="120" r="102" fill="#FFFFFF" />
            <circle cx="120" cy="120" r="92" fill="url(#compRedGrad)" />

            {/* Top Shine Sparkle */}
            <path d="M120 40 L123 48 L131 51 L123 54 L120 62 L117 54 L109 51 L117 48 Z" fill="#FFFFFF" opacity="0.9" />

            {/* Doh-Nut Wordmark Centered */}
            <g transform="translate(120, 130)">
              <text
                x="0"
                y="12"
                textAnchor="middle"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="48"
                fontWeight="900"
                fill="#162238"
              >
                Doh-Nut
              </text>
              <text
                x="-2"
                y="8"
                textAnchor="middle"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="48"
                fontWeight="900"
                fill="#FFFFFF"
                stroke="#162238"
                strokeWidth="4"
                paintOrder="stroke fill"
              >
                Doh-Nut
              </text>
            </g>

            {/* Bottom Tag */}
            <g transform="translate(60, 168)">
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
                EST. MALAYSIA
              </text>
            </g>
          </svg>
        );

      case 'monochrome':
        return (
          <svg
            viewBox="0 0 400 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-auto ${className}`}
            style={{ maxWidth: size }}
          >
            {/* Outer Navy Border */}
            <path
              d="M 30,120 C 10,90 30,55 70,45 C 95,20 155,0 200,0 C 245,0 305,20 330,45 C 370,55 390,90 370,120 C 388,165 360,215 320,225 C 265,205 135,205 80,225 C 40,215 12,165 30,120 Z"
              fill="#07334F"
            />
            {/* White Mid Border */}
            <path
              d="M 40,120 C 22,93 40,63 76,54 C 99,31 154,12 200,12 C 246,12 301,31 324,54 C 360,63 378,93 360,120 C 376,160 350,205 314,214 C 263,195 137,195 86,214 C 50,205 24,160 40,120 Z"
              fill="#FFFFFF"
            />
            {/* Solid Navy Body */}
            <path
              d="M 50,120 C 34,96 50,71 82,63 C 103,42 153,24 200,24 C 247,24 297,42 318,63 C 350,71 366,96 350,120 C 364,155 340,195 308,203 C 261,185 139,185 92,203 C 60,195 36,155 50,120 Z"
              fill="#07334F"
            />
            {/* Wordmark in Pure White */}
            <g transform="translate(200, 142)">
              <text
                x="0"
                y="0"
                textAnchor="middle"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="74"
                fontWeight="900"
                letterSpacing="1"
                fill="#FFFFFF"
              >
                Doh-Nut
              </text>
              <text
                x="148"
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
            viewBox="0 0 400 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-auto ${className}`}
            style={{ maxWidth: size }}
          >
            {/* Outer White Badge Contour */}
            <path
              d="M 30,120 C 10,90 30,55 70,45 C 95,20 155,0 200,0 C 245,0 305,20 330,45 C 370,55 390,90 370,120 C 388,165 360,215 320,225 C 265,205 135,205 80,225 C 40,215 12,165 30,120 Z"
              fill="#FFFFFF"
            />
            {/* Cyan Border */}
            <path
              d="M 40,120 C 22,93 40,63 76,54 C 99,31 154,12 200,12 C 246,12 301,31 324,54 C 360,63 378,93 360,120 C 376,160 350,205 314,214 C 263,195 137,195 86,214 C 50,205 24,160 40,120 Z"
              fill="#009EE2"
            />
            {/* Deep Navy Body */}
            <path
              d="M 50,120 C 34,96 50,71 82,63 C 103,42 153,24 200,24 C 247,24 297,42 318,63 C 350,71 366,96 350,120 C 364,155 340,195 308,203 C 261,185 139,185 92,203 C 60,195 36,155 50,120 Z"
              fill="#07334F"
            />
            {/* Wordmark in Cyan & White */}
            <g transform="translate(200, 142)">
              <text
                x="0"
                y="5"
                textAnchor="middle"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="74"
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
                fontSize="74"
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
                x="148"
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
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-auto ${className}`}
            style={{ maxWidth: size }}
          >
            <defs>
              <radialGradient id="smRedGrad" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FF4146" />
                <stop offset="60%" stopColor="#E31A21" />
                <stop offset="100%" stopColor="#A30E14" />
              </radialGradient>
            </defs>
            <rect width="100" height="100" rx="30" fill="#009EE2" />
            <rect x="5" y="5" width="90" height="90" rx="25" fill="#FFFFFF" />
            <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#smRedGrad)" />
            <text
              x="50"
              y="62"
              textAnchor="middle"
              fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
              fontSize="40"
              fontWeight="900"
              fill="#FFFFFF"
              stroke="#162238"
              strokeWidth="3.5"
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
            viewBox="0 0 400 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-auto ${className} ${animated ? 'transition-all duration-300 hover:scale-105 hover:rotate-[-0.5deg]' : ''}`}
            style={{ maxWidth: size }}
          >
            <defs>
              {/* 3D Glossy Clay Lighting for Red Badge */}
              <radialGradient id="badgeRadialHighlight" cx="50%" cy="20%" r="60%">
                <stop offset="0%" stopColor="#FF4A4E" />
                <stop offset="35%" stopColor="#EE2228" />
                <stop offset="75%" stopColor="#D2141A" />
                <stop offset="100%" stopColor="#9C0A0F" />
              </radialGradient>
            </defs>

            {/* LAYER 1: Cyan / Sky Blue Outer Border Shape */}
            <path
              d="M 30,120 C 10,90 30,55 70,45 C 95,20 155,0 200,0 C 245,0 305,20 330,45 C 370,55 390,90 370,120 C 388,165 360,215 320,225 C 265,205 135,205 80,225 C 40,215 12,165 30,120 Z"
              fill="#009EE2"
            />

            {/* LAYER 2: Crisp White Middle Border Shape */}
            <path
              d="M 38,120 C 20,93 38,62 75,53 C 98,30 154,10 200,10 C 246,10 302,30 325,53 C 362,62 380,93 362,120 C 378,160 352,206 316,215 C 264,196 136,196 84,215 C 48,206 22,160 38,120 Z"
              fill="#FFFFFF"
            />

            {/* LAYER 3: Rich Red Clay Main Body */}
            <path
              d="M 46,120 C 30,96 46,69 80,61 C 101,40 153,20 200,20 C 247,20 299,40 320,61 C 354,69 370,96 354,120 C 368,155 344,197 312,205 C 263,187 137,187 88,205 C 56,197 32,155 46,120 Z"
              fill="url(#badgeRadialHighlight)"
            />

            {/* LAYER 4: Top Clay Dome Gloss Highlight Curve */}
            <path
              d="M 86,64 C 112,46 156,30 200,30 C 244,30 288,46 314,64 C 285,49 240,40 200,40 C 160,40 115,49 86,64 Z"
              fill="#FFFFFF"
              opacity="0.3"
            />

            {/* LAYER 5: 3D White Wordmark "Doh-Nut" with Dark Navy Extrusion Shadow */}
            <g transform="translate(200, 142)">
              {/* 3D Deep Navy Drop Shadow */}
              <text
                x="0"
                y="8"
                textAnchor="middle"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="76"
                fontWeight="900"
                letterSpacing="1"
                fill="#162238"
              >
                Doh-Nut
              </text>
              <text
                x="2"
                y="10"
                textAnchor="middle"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="76"
                fontWeight="900"
                letterSpacing="1"
                fill="#111B2C"
              >
                Doh-Nut
              </text>

              {/* Pure White Letter Faces with crisp dark navy outline */}
              <text
                x="-3"
                y="0"
                textAnchor="middle"
                fontFamily="'Fredoka', 'Titan One', 'Arial Black', sans-serif"
                fontSize="76"
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
                x="148"
                y="12"
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
