import React from 'react';

export const StarSpark: React.FC<{ className?: string; color?: string; size?: number }> = ({
  className = '',
  color = '#297FC1',
  size = 32
}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <path
      d="M16 2 L19 12.5 L29.5 16 L19 19.5 L16 30 L13 19.5 L2.5 16 L13 12.5 Z"
      fill={color}
      stroke="#07334F"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const MiniSparkle: React.FC<{ className?: string; color?: string; size?: number }> = ({
  className = '',
  color = '#FFD23F',
  size = 24
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2 Q 12 12, 2 12 Q 12 12, 12 22 Q 12 12, 22 12 Q 12 12, 12 2 Z"
      fill={color}
      stroke="#07334F"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export const StreetArrow: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#D92F2F'
}) => (
  <svg width="48" height="32" viewBox="0 0 48 32" fill="none" className={className}>
    <path
      d="M4 16 C 14 13, 26 19, 38 16 M28 6 L42 16 L28 26"
      stroke={color}
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CurvedArrowDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#297FC1'
}) => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className={className}>
    <path
      d="M8 36 C 8 16, 22 8, 36 12 M28 4 L38 12 L30 20"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const OrganicBlob: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#EF9FBD'
}) => (
  <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className={className}>
    <path
      d="M20 50 C 15 20, 45 10, 75 18 C 105 25, 115 55, 100 80 C 85 105, 35 95, 20 50 Z"
      fill={color}
      stroke="#07334F"
      strokeWidth="4"
    />
  </svg>
);

export const WavyLineDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#D92F2F'
}) => (
  <svg width="120" height="24" viewBox="0 0 120 24" fill="none" className={className}>
    <path
      d="M4 12 Q 18 2, 32 12 T 60 12 T 88 12 T 116 12"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SmileyBubble: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = '',
  size = 48,
  color = '#FFD23F'
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="24" cy="24" r="21" fill={color} stroke="#07334F" strokeWidth="3.5" />
    <circle cx="17" cy="18" r="3" fill="#07334F" />
    <circle cx="31" cy="18" r="3" fill="#07334F" />
    <path
      d="M15 27 C 18 34, 30 34, 33 27"
      stroke="#07334F"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

export const BubbleCluster: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#297FC1'
}) => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className={className}>
    <circle cx="22" cy="22" r="16" fill={color} stroke="#07334F" strokeWidth="3" />
    <circle cx="17" cy="17" r="3" fill="#FDEFEB" />
    <circle cx="42" cy="38" r="10" fill="#EF9FBD" stroke="#07334F" strokeWidth="2.5" />
    <circle cx="39" cy="35" r="2" fill="#FDEFEB" />
    <circle cx="44" cy="16" r="6" fill="#FFD23F" stroke="#07334F" strokeWidth="2" />
  </svg>
);

export const HandDrawnAccents: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#07334F'
}) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
    {/* 3 action explosion lines */}
    <path d="M8 8 L18 18" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M20 4 L20 16" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M32 8 L22 18" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

export const DohLetteringBadge: React.FC<{
  className?: string;
  bgColor?: string;
  textColor?: string;
}> = ({
  className = '',
  bgColor = '#D92F2F',
  textColor = '#FDEFEB'
}) => (
  <div
    className={`inline-flex items-center justify-center px-4 py-1.5 rounded-2xl border-[3.5px] border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] rotate-[-3deg] ${className}`}
    style={{ backgroundColor: bgColor }}
  >
    <span
      className="font-fun text-base font-black tracking-wider uppercase drop-shadow-sm"
      style={{ color: textColor }}
    >
      DOH!
    </span>
  </div>
);

export const DonutIcon: React.FC<{ className?: string; size?: number; glazeColor?: string }> = ({
  className = '',
  size = 64,
  glazeColor = '#EF9FBD'
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="32" r="28" fill="#E8B072" stroke="#07334F" strokeWidth="3.5" />
    <path
      d="M10 28 C 12 18, 22 10, 32 10 C 42 10, 52 18, 54 28 C 53 38, 47 40, 42 36 C 38 32, 34 38, 30 40 C 24 42, 18 36, 14 38 C 11 36, 9 32, 10 28 Z"
      fill={glazeColor}
      stroke="#07334F"
      strokeWidth="3"
    />
    <circle cx="32" cy="32" r="9" fill="#FDEFEB" stroke="#07334F" strokeWidth="3" />
    <rect x="22" y="18" width="5" height="2" rx="1" transform="rotate(30 22 18)" fill="#297FC1" />
    <rect x="36" y="16" width="5" height="2" rx="1" transform="rotate(-20 36 16)" fill="#FFD23F" />
    <rect x="44" y="26" width="5" height="2" rx="1" transform="rotate(45 44 26)" fill="#FDEFEB" />
  </svg>
);

export const StreetStickerBadge: React.FC<{
  text: string;
  subtext?: string;
  bgColor?: string;
  textColor?: string;
  rotation?: number;
  className?: string;
}> = ({
  text,
  subtext,
  bgColor = '#D92F2F',
  textColor = '#FDEFEB',
  rotation = -2,
  className = ''
}) => (
  <div
    className={`inline-flex flex-col items-center justify-center px-4 py-2 rounded-2xl border-[3.5px] border-[#07334F] shadow-[3px_3px_0px_0px_#07334F] select-none transition-transform hover:scale-105 active:scale-95 ${className}`}
    style={{
      backgroundColor: bgColor,
      color: textColor,
      transform: `rotate(${rotation}deg)`
    }}
  >
    <span className="font-display font-black text-sm tracking-wider uppercase drop-shadow-sm whitespace-nowrap">
      {text}
    </span>
    {subtext && (
      <span className="text-[9px] font-extrabold tracking-widest uppercase opacity-90">
        {subtext}
      </span>
    )}
  </div>
);

export const DripsGraphic: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#EF9FBD'
}) => (
  <svg viewBox="0 0 400 60" fill="none" className={`w-full h-auto ${className}`}>
    <path
      d="M0 0 L400 0 L400 25 C 380 25, 370 45, 360 45 C 350 45, 345 25, 330 25 C 315 25, 305 55, 290 55 C 275 55, 265 20, 240 20 C 215 20, 205 50, 190 50 C 175 50, 165 15, 140 15 C 115 15, 105 40, 90 40 C 75 40, 65 25, 45 25 C 25 25, 15 35, 0 35 Z"
      fill={color}
      stroke="#07334F"
      strokeWidth="3.5"
    />
  </svg>
);
