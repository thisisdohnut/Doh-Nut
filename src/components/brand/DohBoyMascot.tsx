import React from 'react';
import { DohBoyPose } from '../../types';

interface DohBoyMascotProps {
  pose?: DohBoyPose;
  className?: string;
  size?: number | string;
  caption?: string;
  animated?: boolean;
}

export const DohBoyMascot: React.FC<DohBoyMascotProps> = ({
  pose = 'hero',
  className = '',
  size = 200,
  caption,
  animated = false,
}) => {
  const renderMascot = () => {
    switch (pose) {
      case 'avatar':
        return (
          <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Background circle */}
            <circle cx="80" cy="80" r="76" fill="#FDEFEB" stroke="#07334F" strokeWidth="5" />
            
            {/* Donut Head */}
            <circle cx="80" cy="80" r="62" fill="#E8B072" stroke="#07334F" strokeWidth="5" />
            
            {/* Strawberry Frosting */}
            <path
              d="M32 68 C 30 50, 48 26, 80 26 C 112 26, 130 50, 128 68 C 126 84, 116 88, 108 80 C 102 74, 96 82, 88 88 C 80 94, 72 82, 64 80 C 54 78, 44 90, 36 82 C 32 78, 32 74, 32 68 Z"
              fill="#EF9FBD"
              stroke="#07334F"
              strokeWidth="4.5"
            />
            
            {/* Donut Center Hole */}
            <ellipse cx="80" cy="84" rx="16" ry="12" fill="#FDEFEB" stroke="#07334F" strokeWidth="4" />

            {/* Sprinkles */}
            <rect x="52" y="38" width="8" height="3.5" rx="1.5" transform="rotate(30 52 38)" fill="#297FC1" />
            <rect x="74" y="32" width="8" height="3.5" rx="1.5" transform="rotate(-15 74 32)" fill="#FFD23F" />
            <rect x="98" y="42" width="8" height="3.5" rx="1.5" transform="rotate(45 98 42)" fill="#FDEFEB" />
            <rect x="114" y="60" width="7" height="3.5" rx="1.5" transform="rotate(-40 114 60)" fill="#D92F2F" />

            {/* Eyes */}
            <ellipse cx="64" cy="62" rx="7" ry="10" fill="#07334F" />
            <circle cx="62" cy="59" r="3" fill="#FDEFEB" />
            <ellipse cx="96" cy="62" rx="7" ry="10" fill="#07334F" />
            <circle cx="94" cy="59" r="3" fill="#FDEFEB" />

            {/* Cheek blushes */}
            <ellipse cx="50" cy="72" rx="5" ry="3" fill="#D92F2F" opacity="0.6" />
            <ellipse cx="110" cy="72" rx="5" ry="3" fill="#D92F2F" opacity="0.6" />

            {/* Mischievous Smile */}
            <path
              d="M70 74 Q 80 84 90 74"
              fill="none"
              stroke="#07334F"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        );

      case 'waving':
        return (
          <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Left waving arm & glove */}
            <g transform="translate(18, 50)">
              <path d="M42 55 C 20 40, 10 20, 12 10 C 14 0, 26 2, 34 16 C 36 10, 44 8, 48 14 C 52 20, 48 30, 42 42" fill="#FDEFEB" stroke="#07334F" strokeWidth="4.5" strokeLinejoin="round" />
            </g>

            {/* Right arm resting on hip */}
            <path d="M140 135 C 160 140, 172 155, 160 170 C 150 178, 142 165, 138 152" fill="#FDEFEB" stroke="#07334F" strokeWidth="4.5" strokeLinejoin="round" />

            {/* Cute Cartoon Legs & Sneakers */}
            <g>
              {/* Left leg & street sneaker */}
              <path d="M78 180 L76 210" stroke="#07334F" strokeWidth="8" strokeLinecap="round" />
              <path d="M54 212 C 54 205, 84 205, 90 212 L90 226 C 90 230, 50 232, 54 212 Z" fill="#D92F2F" stroke="#07334F" strokeWidth="4.5" />
              <rect x="52" y="222" width="38" height="6" rx="3" fill="#FDEFEB" stroke="#07334F" strokeWidth="2" />

              {/* Right leg & sneaker */}
              <path d="M122 180 L124 210" stroke="#07334F" strokeWidth="8" strokeLinecap="round" />
              <path d="M110 212 C 110 205, 140 205, 146 212 L146 226 C 146 230, 106 232, 110 212 Z" fill="#297FC1" stroke="#07334F" strokeWidth="4.5" />
              <rect x="108" y="222" width="38" height="6" rx="3" fill="#FDEFEB" stroke="#07334F" strokeWidth="2" />
            </g>

            {/* Donut Body / Head */}
            <circle cx="100" cy="110" r="68" fill="#E8B072" stroke="#07334F" strokeWidth="6" />
            
            {/* Strawberry Frosting Layer with Droops */}
            <path
              d="M44 94 C 42 66, 68 44, 100 44 C 134 44, 156 66, 154 94 C 152 115, 140 120, 130 110 C 122 102, 116 112, 106 118 C 96 124, 88 112, 80 108 C 68 104, 56 122, 48 114 C 44 108, 44 102, 44 94 Z"
              fill="#EF9FBD"
              stroke="#07334F"
              strokeWidth="5"
            />
            
            {/* Donut Center Hole */}
            <ellipse cx="100" cy="120" rx="18" ry="14" fill="#FDEFEB" stroke="#07334F" strokeWidth="4.5" />

            {/* Colorful Sprinkles */}
            <rect x="68" y="60" width="10" height="4.5" rx="2" transform="rotate(30 68 60)" fill="#297FC1" />
            <rect x="94" y="52" width="10" height="4.5" rx="2" transform="rotate(-15 94 52)" fill="#FFD23F" />
            <rect x="124" y="65" width="10" height="4.5" rx="2" transform="rotate(45 124 65)" fill="#FDEFEB" />
            <rect x="138" y="88" width="9" height="4.5" rx="2" transform="rotate(-35 138 88)" fill="#D92F2F" />
            <rect x="58" y="85" width="9" height="4.5" rx="2" transform="rotate(60 58 85)" fill="#FFD23F" />

            {/* Cartoon Big Eyes */}
            <ellipse cx="80" cy="88" rx="9" ry="13" fill="#07334F" />
            <circle cx="77" cy="84" r="4" fill="#FDEFEB" />
            <ellipse cx="120" cy="88" rx="9" ry="13" fill="#07334F" />
            <circle cx="117" cy="84" r="4" fill="#FDEFEB" />

            {/* Cheek blushes */}
            <ellipse cx="64" cy="100" rx="6" ry="4" fill="#D92F2F" opacity="0.6" />
            <ellipse cx="136" cy="100" rx="6" ry="4" fill="#D92F2F" opacity="0.6" />

            {/* Cheerful Open Smile with red tongue */}
            <path
              d="M86 102 C 86 102, 100 120, 114 102 Z"
              fill="#07334F"
              stroke="#07334F"
              strokeWidth="3.5"
            />
            <path
              d="M92 110 C 96 116, 104 116, 108 110 Z"
              fill="#D92F2F"
            />
          </svg>
        );

      case 'happy':
        return (
          <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Dual thumbs up arms */}
            <path d="M48 110 C 26 100, 18 80, 24 72 C 30 64, 40 76, 46 92" fill="#FDEFEB" stroke="#07334F" strokeWidth="4.5" />
            <path d="M152 110 C 174 100, 182 80, 176 72 C 170 64, 160 76, 154 92" fill="#FDEFEB" stroke="#07334F" strokeWidth="4.5" />

            {/* Cartoon Sneakers */}
            <path d="M80 180 L80 208" stroke="#07334F" strokeWidth="8" strokeLinecap="round" />
            <path d="M58 210 C 58 202, 88 202, 94 210 L94 224 C 94 228, 54 230, 58 210 Z" fill="#D92F2F" stroke="#07334F" strokeWidth="4" />
            
            <path d="M120 180 L120 208" stroke="#07334F" strokeWidth="8" strokeLinecap="round" />
            <path d="M106 210 C 106 202, 136 202, 142 210 L142 224 C 142 228, 102 230, 106 210 Z" fill="#D92F2F" stroke="#07334F" strokeWidth="4" />

            {/* Body */}
            <circle cx="100" cy="110" r="68" fill="#E8B072" stroke="#07334F" strokeWidth="6" />
            <path
              d="M44 94 C 42 66, 68 44, 100 44 C 134 44, 156 66, 154 94 C 152 115, 140 120, 130 110 C 122 102, 116 112, 106 118 C 96 124, 88 112, 80 108 C 68 104, 56 122, 48 114 Z"
              fill="#EF9FBD"
              stroke="#07334F"
              strokeWidth="5"
            />
            <ellipse cx="100" cy="120" rx="18" ry="14" fill="#FDEFEB" stroke="#07334F" strokeWidth="4.5" />

            {/* Sprinkles */}
            <rect x="70" y="58" width="9" height="4" rx="2" transform="rotate(25 70 58)" fill="#297FC1" />
            <rect x="110" y="54" width="9" height="4" rx="2" transform="rotate(-30 110 54)" fill="#FFD23F" />
            <rect x="135" y="75" width="9" height="4" rx="2" transform="rotate(40 135 75)" fill="#FDEFEB" />

            {/* Happy Closed Winking / Crescent Eyes ^ ^ */}
            <path d="M72 88 C 76 80, 88 80, 92 88" stroke="#07334F" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M108 88 C 112 80, 124 80, 128 88" stroke="#07334F" strokeWidth="4.5" strokeLinecap="round" fill="none" />

            {/* Big Smile */}
            <path d="M84 100 Q 100 122 116 100 Z" fill="#07334F" stroke="#07334F" strokeWidth="3" />
            <path d="M92 110 Q 100 118 108 110 Z" fill="#D92F2F" />
          </svg>
        );

      case 'excited':
        return (
          <svg viewBox="0 0 220 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Jumping arms in air */}
            <path d="M50 85 C 30 50, 20 30, 26 22 C 34 14, 48 30, 56 60" fill="#FDEFEB" stroke="#07334F" strokeWidth="4.5" />
            <path d="M170 85 C 190 50, 200 30, 194 22 C 186 14, 172 30, 164 60" fill="#FDEFEB" stroke="#07334F" strokeWidth="4.5" />

            {/* Jumping Bent Legs */}
            <path d="M80 175 Q 60 190 70 215" stroke="#07334F" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M56 215 C 56 208, 86 208, 92 215 L92 228 C 92 232, 52 234, 56 215 Z" fill="#D92F2F" stroke="#07334F" strokeWidth="4" />

            <path d="M140 175 Q 160 190 150 215" stroke="#07334F" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M136 215 C 136 208, 166 208, 172 215 L172 228 C 172 232, 132 234, 136 215 Z" fill="#297FC1" stroke="#07334F" strokeWidth="4" />

            {/* Head & Body */}
            <circle cx="110" cy="110" r="68" fill="#E8B072" stroke="#07334F" strokeWidth="6" />
            <path
              d="M54 94 C 52 66, 78 44, 110 44 C 144 44, 166 66, 164 94 C 162 115, 150 120, 140 110 C 132 102, 126 112, 116 118 C 106 124, 98 112, 90 108 C 78 104, 66 122, 58 114 Z"
              fill="#EF9FBD"
              stroke="#07334F"
              strokeWidth="5"
            />
            <ellipse cx="110" cy="120" rx="18" ry="14" fill="#FDEFEB" stroke="#07334F" strokeWidth="4.5" />

            {/* Excitement Action Sparks */}
            <path d="M30 40 L35 48 L45 50 L35 52 L30 60 L25 52 L15 50 L25 48 Z" fill="#FFD23F" stroke="#07334F" strokeWidth="1.5" />
            <path d="M185 40 L190 48 L200 50 L190 52 L185 60 L180 52 L170 50 L180 48 Z" fill="#FFD23F" stroke="#07334F" strokeWidth="1.5" />

            {/* Sparkly Star Eyes */}
            <path d="M90 85 L93 92 L100 95 L93 98 L90 105 L87 98 L80 95 L87 92 Z" fill="#07334F" />
            <path d="M130 85 L133 92 L140 95 L133 98 L130 105 L127 98 L120 95 L127 92 Z" fill="#07334F" />

            {/* Huge Open Laughing Mouth */}
            <path d="M92 102 Q 110 130 128 102 Z" fill="#07334F" stroke="#07334F" strokeWidth="3" />
            <path d="M100 116 Q 110 126 120 116 Z" fill="#D92F2F" />
          </svg>
        );

      case 'eating':
        return (
          <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Arm holding a mini donut near mouth */}
            <path d="M140 120 C 160 110, 150 90, 130 92" fill="#FDEFEB" stroke="#07334F" strokeWidth="4.5" />
            {/* Mini Donut being munched */}
            <circle cx="126" cy="92" r="14" fill="#E8B072" stroke="#07334F" strokeWidth="3" />
            <path d="M116 88 C 118 82, 134 82, 136 88 C 136 94, 116 96, 116 88 Z" fill="#D92F2F" stroke="#07334F" strokeWidth="2" />
            <circle cx="126" cy="92" r="4" fill="#FDEFEB" stroke="#07334F" strokeWidth="1.5" />
            {/* Bite mark */}
            <circle cx="138" cy="90" r="5" fill="#EF9FBD" />

            {/* Left arm giving thumbs up */}
            <path d="M48 130 C 26 120, 20 98, 28 90 C 34 82, 44 94, 50 110" fill="#FDEFEB" stroke="#07334F" strokeWidth="4.5" />

            {/* Legs */}
            <path d="M80 180 L80 208" stroke="#07334F" strokeWidth="8" strokeLinecap="round" />
            <path d="M58 210 C 58 202, 88 202, 94 210 L94 224 C 94 228, 54 230, 58 210 Z" fill="#D92F2F" stroke="#07334F" strokeWidth="4" />
            
            <path d="M120 180 L120 208" stroke="#07334F" strokeWidth="8" strokeLinecap="round" />
            <path d="M106 210 C 106 202, 136 202, 142 210 L142 224 C 142 228, 102 230, 106 210 Z" fill="#297FC1" stroke="#07334F" strokeWidth="4" />

            {/* Donut Body */}
            <circle cx="100" cy="110" r="68" fill="#E8B072" stroke="#07334F" strokeWidth="6" />
            <path
              d="M44 94 C 42 66, 68 44, 100 44 C 134 44, 156 66, 154 94 C 152 115, 140 120, 130 110 C 122 102, 116 112, 106 118 C 96 124, 88 112, 80 108 C 68 104, 56 122, 48 114 Z"
              fill="#EF9FBD"
              stroke="#07334F"
              strokeWidth="5"
            />
            <ellipse cx="100" cy="120" rx="18" ry="14" fill="#FDEFEB" stroke="#07334F" strokeWidth="4.5" />

            {/* Eyes looking at mini donut */}
            <ellipse cx="78" cy="85" rx="8" ry="12" fill="#07334F" />
            <circle cx="82" cy="82" r="3.5" fill="#FDEFEB" />
            <ellipse cx="112" cy="85" rx="8" ry="12" fill="#07334F" />
            <circle cx="116" cy="82" r="3.5" fill="#FDEFEB" />

            {/* Chewing mouth with crumbs */}
            <path d="M92 102 Q 106 116 116 102" stroke="#07334F" strokeWidth="4" strokeLinecap="round" fill="none" />
            <circle cx="100" cy="118" r="2" fill="#E8B072" />
            <circle cx="110" cy="122" r="1.5" fill="#E8B072" />
          </svg>
        );

      case 'hero':
      default:
        return (
          <svg
            viewBox="0 0 220 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-auto ${animated ? 'transition-transform duration-300 hover:scale-105' : ''}`}
          >
            {/* Street spray drip accent behind */}
            <path d="M50 140 Q 40 170 42 195" stroke="#297FC1" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
            <circle cx="43" cy="202" r="3" fill="#297FC1" opacity="0.5" />

            {/* Left Arm: Confident peace sign */}
            <g transform="translate(15, 60)">
              <path d="M46 70 C 22 55, 12 35, 16 20 C 18 10, 28 8, 34 22 L36 10 C 38 4, 46 4, 48 12 L50 30" fill="#FDEFEB" stroke="#07334F" strokeWidth="4.5" strokeLinejoin="round" />
            </g>

            {/* Right Arm: Hip rest */}
            <path d="M155 130 C 178 135, 190 152, 178 168 C 168 176, 158 162, 152 148" fill="#FDEFEB" stroke="#07334F" strokeWidth="4.5" strokeLinejoin="round" />

            {/* Chunky Street Sneakers */}
            <g>
              <path d="M85 185 L82 215" stroke="#07334F" strokeWidth="9" strokeLinecap="round" />
              {/* Left red high-top */}
              <path d="M60 215 C 60 206, 94 206, 100 215 L100 232 C 100 236, 56 238, 60 215 Z" fill="#D92F2F" stroke="#07334F" strokeWidth="4.5" />
              <rect x="58" y="226" width="42" height="7" rx="3.5" fill="#FDEFEB" stroke="#07334F" strokeWidth="2" />
              {/* Star on shoe */}
              <path d="M78 218 L79 221 L82 222 L79 223 L78 226 L77 223 L74 222 L77 221 Z" fill="#FFD23F" />

              <path d="M135 185 L138 215" stroke="#07334F" strokeWidth="9" strokeLinecap="round" />
              {/* Right cyan high-top */}
              <path d="M120 215 C 120 206, 154 206, 160 215 L160 232 C 160 236, 116 238, 120 215 Z" fill="#297FC1" stroke="#07334F" strokeWidth="4.5" />
              <rect x="118" y="226" width="42" height="7" rx="3.5" fill="#FDEFEB" stroke="#07334F" strokeWidth="2" />
              {/* Star on shoe */}
              <path d="M138 218 L139 221 L142 222 L139 223 L138 226 L137 223 L134 222 L137 221 Z" fill="#FFD23F" />
            </g>

            {/* Golden Fried Dough Body */}
            <circle cx="110" cy="115" r="74" fill="#E8B072" stroke="#07334F" strokeWidth="6" />

            {/* Glossy Pink Strawberry Glaze with Drips */}
            <path
              d="M48 98 C 46 66, 76 42, 110 42 C 146 42, 172 66, 170 98 C 168 122, 154 128, 142 116 C 134 108, 128 118, 118 124 C 106 130, 96 118, 88 114 C 74 110, 62 130, 52 120 C 48 114, 48 106, 48 98 Z"
              fill="#EF9FBD"
              stroke="#07334F"
              strokeWidth="5.5"
            />

            {/* Glaze Highlights (Gloss) */}
            <path d="M72 56 C 84 48, 102 48, 114 50" stroke="#FDEFEB" strokeWidth="4" strokeLinecap="round" fill="none" />

            {/* Donut Center Hole */}
            <ellipse cx="110" cy="126" rx="20" ry="15" fill="#FDEFEB" stroke="#07334F" strokeWidth="5" />

            {/* Signature Multi-colored Sprinkles */}
            <rect x="74" y="62" width="11" height="5" rx="2" transform="rotate(28 74 62)" fill="#297FC1" />
            <rect x="104" y="54" width="11" height="5" rx="2" transform="rotate(-15 104 54)" fill="#FFD23F" />
            <rect x="136" y="66" width="11" height="5" rx="2" transform="rotate(45 136 66)" fill="#FDEFEB" />
            <rect x="152" y="92" width="10" height="5" rx="2" transform="rotate(-35 152 92)" fill="#D92F2F" />
            <rect x="62" y="90" width="10" height="5" rx="2" transform="rotate(65 62 90)" fill="#FFD23F" />
            <rect x="135" y="112" width="10" height="5" rx="2" transform="rotate(15 135 112)" fill="#297FC1" />

            {/* Expressive Big Cartoon Eyes */}
            <ellipse cx="88" cy="90" rx="10" ry="15" fill="#07334F" />
            <circle cx="85" cy="85" r="4.5" fill="#FDEFEB" />
            <circle cx="91" cy="96" r="2" fill="#FDEFEB" />

            <ellipse cx="132" cy="90" rx="10" ry="15" fill="#07334F" />
            <circle cx="129" cy="85" r="4.5" fill="#FDEFEB" />
            <circle cx="135" cy="96" r="2" fill="#FDEFEB" />

            {/* Cheek Glows */}
            <ellipse cx="70" cy="104" rx="7" ry="4.5" fill="#D92F2F" opacity="0.65" />
            <ellipse cx="150" cy="104" rx="7" ry="4.5" fill="#D92F2F" opacity="0.65" />

            {/* Confident, Cheeky Open Smile */}
            <path
              d="M94 106 C 94 106, 110 128, 126 106 Z"
              fill="#07334F"
              stroke="#07334F"
              strokeWidth="4"
            />
            {/* Bright Red Tongue */}
            <path
              d="M102 116 C 106 124, 114 124, 118 116 Z"
              fill="#D92F2F"
            />
          </svg>
        );
    }
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`} style={{ maxWidth: size }}>
      {renderMascot()}
      {caption && (
        <div className="mt-2 text-center">
          <span className="inline-block px-3 py-1 bg-[#07334F] text-[#FDEFEB] text-xs font-bold rounded-full tracking-wider uppercase">
            {caption}
          </span>
        </div>
      )}
    </div>
  );
};
