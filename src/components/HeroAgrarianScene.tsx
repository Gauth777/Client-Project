/**
 * Cinematic animated agrarian landscape for the homepage.
 * The scene tells the story from paddy field -> premium rice products -> family table.
 */

import React from 'react';
import { motion } from 'motion/react';

type ProductVariant = 'goldfish' | 'royal' | 'mangoGold' | 'mangoGreen';

interface ProductRiceBagProps {
  x: number;
  y: number;
  scale?: number;
  variant: ProductVariant;
}

const PRODUCT_THEME = {
  goldfish: {
    top: '#f8d487',
    mid: '#f8efd8',
    bottom: '#df7b22',
    edge: '#a95013',
    label: '#fff8ea',
    title: '#c72c27',
    glow: '#ffd46f',
  },
  royal: {
    top: '#c5e445',
    mid: '#55b93f',
    bottom: '#087441',
    edge: '#055a33',
    label: '#13713c',
    title: '#fff2ba',
    glow: '#dfff70',
  },
  mangoGold: {
    top: '#ffd44f',
    mid: '#f5a51b',
    bottom: '#df7915',
    edge: '#a94d11',
    label: '#fff1ab',
    title: '#7a1b18',
    glow: '#ffca45',
  },
  mangoGreen: {
    top: '#8ee439',
    mid: '#21ad4b',
    bottom: '#07823f',
    edge: '#045b31',
    label: '#eff6b8',
    title: '#7a1b18',
    glow: '#9cf05f',
  },
} as const;

function ProductRiceBag({ x, y, scale = 1, variant }: ProductRiceBagProps) {
  const theme = PRODUCT_THEME[variant];
  const bodyId = `product-body-${variant}`;
  const sideId = `product-side-${variant}`;
  const shineId = `product-shine-${variant}`;
  const shadowId = `product-shadow-${variant}`;
  const clipId = `product-clip-${variant}`;
  const isMango = variant === 'mangoGold' || variant === 'mangoGreen';

  const bagPath = 'M12 10Q64 1 116 10L121 29L116 201Q115 219 99 226H29Q12 221 10 202L5 29Z';

  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <defs>
        <linearGradient id={bodyId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={theme.top} />
          <stop offset="48%" stopColor={theme.mid} />
          <stop offset="100%" stopColor={theme.bottom} />
        </linearGradient>
        <linearGradient id={sideId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.42" />
          <stop offset="24%" stopColor="#fff" stopOpacity="0.08" />
          <stop offset="76%" stopColor="#111827" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#111827" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id={shineId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff" stopOpacity="0" />
          <stop offset="45%" stopColor="#fff" stopOpacity="0" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0.72" />
          <stop offset="56%" stopColor="#fff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <filter id={shadowId} x="-45%" y="-35%" width="190%" height="200%">
          <feDropShadow dx="0" dy="14" stdDeviation="8" floodColor="#17351f" floodOpacity="0.32" />
        </filter>
        <clipPath id={clipId}>
          <path d={bagPath} />
        </clipPath>
      </defs>

      <ellipse cx="64" cy="229" rx="56" ry="10" fill="#17351f" opacity="0.22" />
      <motion.ellipse
        cx="64"
        cy="227"
        rx="46"
        ry="7"
        fill={theme.glow}
        opacity="0.2"
        animate={{ opacity: [0.12, 0.32, 0.12], rx: [43, 54, 43] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <path d={bagPath} fill={`url(#${bodyId})`} stroke={theme.edge} strokeWidth="2.4" filter={`url(#${shadowId})`} />
      <path d={bagPath} fill={`url(#${sideId})`} opacity="0.72" />
      <path d="M10 23Q64 12 117 23" fill="none" stroke="#fff5d4" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
      <path d="M9 31Q64 21 119 31" fill="none" stroke={theme.edge} strokeWidth="3" strokeLinecap="round" opacity="0.62" />
      <path d="M19 41Q12 106 20 190" fill="none" stroke="#fff" strokeWidth="2" opacity="0.24" />
      <path d="M108 41Q116 111 106 190" fill="none" stroke="#2f2415" strokeWidth="2" opacity="0.12" />

      {variant === 'goldfish' && (
        <>
          <rect x="17" y="45" width="94" height="39" rx="9" fill={theme.label} stroke="#d9a65e" strokeWidth="1.4" />
          <text x="64" y="63" textAnchor="middle" fontFamily="Georgia, serif" fontSize="14.5" fontWeight="800" fill={theme.title}>
            தங்கமீன்
          </text>
          <text x="64" y="76" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6.5" fontWeight="700" fill="#304f99">
            SORTEX CLEANED RICE
          </text>

          <ellipse cx="31" cy="111" rx="10" ry="19" fill="#1d5ca8" />
          <text x="31" y="106" textAnchor="middle" fontFamily="Georgia, serif" fontSize="6.8" fontWeight="700" fill="#fff">P</text>
          <text x="31" y="115" textAnchor="middle" fontFamily="Georgia, serif" fontSize="6.8" fontWeight="700" fill="#fff">V</text>
          <text x="31" y="124" textAnchor="middle" fontFamily="Georgia, serif" fontSize="6.8" fontWeight="700" fill="#fff">M</text>
          <ellipse cx="97" cy="111" rx="10" ry="19" fill="#1d5ca8" />
          <text x="97" y="106" textAnchor="middle" fontFamily="Georgia, serif" fontSize="6.8" fontWeight="700" fill="#fff">P</text>
          <text x="97" y="115" textAnchor="middle" fontFamily="Georgia, serif" fontSize="6.8" fontWeight="700" fill="#fff">V</text>
          <text x="97" y="124" textAnchor="middle" fontFamily="Georgia, serif" fontSize="6.8" fontWeight="700" fill="#fff">M</text>

          <motion.g
            animate={{ x: [-2, 3, -2], rotate: [-2, 2, -2] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '64px 119px' }}
          >
            <ellipse cx="62" cy="119" rx="24" ry="14" fill="#f6a619" />
            <ellipse cx="56" cy="115" rx="13" ry="8" fill="#ffd554" opacity="0.9" />
            <path d="M83 119l21-15-5 15 5 15Z" fill="#e97818" />
            <path d="M58 106c8-12 17-12 24-7-7 2-12 6-16 11Z" fill="#f5be2d" />
            <path d="M59 131c8 10 17 9 24 4-8 0-13-4-17-8Z" fill="#e87b1b" />
            <circle cx="48" cy="115" r="2.4" fill="#261711" />
            <circle cx="47.4" cy="114.3" r="0.8" fill="#fff" />
          </motion.g>

          <rect x="26" y="148" width="76" height="18" rx="9" fill="#e8248d" />
          <text x="64" y="160" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="800" fill="#fff">SORTEX CLEANED</text>
          <path d="M17 182c19-10 40-12 59-6 13 5 25 5 36 1v23H17Z" fill="#a96a2f" opacity="0.72" />
          <path d="M18 188c17-8 31-8 44 0 13 8 30 8 50 2" fill="none" stroke="#f7e8bd" strokeWidth="4" strokeLinecap="round" />
        </>
      )}

      {variant === 'royal' && (
        <>
          <path d="M18 44Q64 26 110 44L105 79Q64 67 23 79Z" fill={theme.label} stroke="#f4c651" strokeWidth="2.2" />
          <text x="64" y="58" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11.5" fontWeight="800" fill={theme.title}>
            மணிமகுடம்
          </text>
          <text x="64" y="70" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5.5" fontWeight="700" fill="#ffe89a">
            CELEBRATION OF VICTORY
          </text>

          <motion.g
            animate={{ y: [0, -2.5, 0], rotate: [0, 1.4, 0, -1.4, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '64px 128px' }}
          >
            <path d="M40 110c5-20 14-31 24-31 9 0 18 11 24 31Z" fill="#c98518" stroke="#f6d15b" strokeWidth="2" />
            <path d="M43 101l8-17 7 10 6-19 7 19 8-10 5 17Z" fill="#eab33a" stroke="#81460b" strokeWidth="1.5" />
            <ellipse cx="64" cy="117" rx="18" ry="21" fill="#a76542" />
            <path d="M46 112c4-17 12-25 19-25 10 0 16 9 18 22-13-5-25-4-37 3Z" fill="#241816" />
            <path d="M48 128c9 5 20 5 31 0-2 19-10 30-16 30-7 0-13-10-15-30Z" fill="#211919" />
            <circle cx="57" cy="116" r="1.8" fill="#18100c" />
            <circle cx="71" cy="116" r="1.8" fill="#18100c" />
            <path d="M57 126c4 3 10 3 14 0" stroke="#6f362b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M30 165c9-23 21-35 34-35 15 0 28 13 35 35Z" fill="#0d653a" stroke="#efc754" strokeWidth="2" />
            <path d="M37 143h54" stroke="#f4ca4e" strokeWidth="5" opacity="0.82" />
            <path d="M29 100v76" stroke="#835919" strokeWidth="4" strokeLinecap="round" />
            <circle cx="29" cy="94" r="8" fill="none" stroke="#c18b23" strokeWidth="3" />
            <path d="M97 99v77" stroke="#795018" strokeWidth="3" strokeLinecap="round" />
            <motion.path
              d="M97 99c12 4 19 10 23 21-8-3-15-3-23 0Z"
              fill="#0d7942"
              animate={{ scaleX: [1, 0.9, 1.08, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '97px 110px' }}
            />
          </motion.g>

          <path d="M17 176h94v24H17Z" fill="#07643a" opacity="0.78" />
          <path d="M20 178l10-12 8 12 9-17 9 17 9-22 11 22 9-15 8 15 8-11 9 11" fill="none" stroke="#e0b84c" strokeWidth="2" />
        </>
      )}

      {isMango && (
        <>
          <path d="M18 44Q64 25 110 44L102 79Q64 67 26 79Z" fill="#b82620" stroke="#fff3d4" strokeWidth="3" />
          <text x="64" y="59" textAnchor="middle" fontFamily="Georgia, serif" fontSize="13.2" fontWeight="800" fill="#fff9ec">
            மாம்பழம்
          </text>
          <text x="64" y="71" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5.7" fontWeight="700" fill="#ffe4a6">
            MAMBAZHAM
          </text>

          <path d="M28 106c14-29 31-44 51-52" fill="none" stroke="#653b20" strokeWidth="5" strokeLinecap="round" />
          <path d="M43 90c16-16 33-21 51-16" fill="none" stroke="#2f612c" strokeWidth="4" strokeLinecap="round" />
          {[47, 60, 74, 87, 98].map((cx, index) => (
            <motion.ellipse
              key={`${variant}-${cx}`}
              cx={cx}
              cy={index % 2 === 0 ? 84 : 74}
              rx="4.3"
              ry="6.2"
              fill={variant === 'mangoGold' ? '#f6bd31' : '#ddd935'}
              animate={{ rotate: [-5, 6, -5], y: [0, 1.5, 0] }}
              transition={{ duration: 3 + index * 0.22, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: `${cx}px ${index % 2 === 0 ? 84 : 74}px` }}
            />
          ))}

          <ellipse cx="65" cy="110" rx="41" ry="24" fill={theme.label} opacity="0.97" />
          <text x="65" y="106" textAnchor="middle" fontFamily="Georgia, serif" fontSize="8" fill="#4b2c16">Rajabogam</text>
          <text x="65" y="120" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10.8" fontWeight="800" fill="#171717">Kichadi Ponni</text>

          <path d="M17 143c24-15 49-16 73-5 10 5 18 6 22 4v35H17Z" fill={variant === 'mangoGold' ? '#d98118' : '#179449'} opacity="0.88" />
          <path d="M18 156c20-9 39-10 58-1 14 7 26 8 36 3" fill="none" stroke="#f6e8a4" strokeWidth="3" strokeLinecap="round" />
          <path d="M78 155h20v18H78Z" fill="#f5e1a0" />
          <path d="M76 155l12-10 12 10Z" fill="#87501f" />
          <path d="M24 173c8-15 17-21 26-21 8 0 15 5 20 14" fill="none" stroke="#f2d75b" strokeWidth="2.5" />
          <motion.path
            d="M42 170c4-7 8-7 12 0-4 5-8 5-12 0Z"
            fill="#7d41c4"
            animate={{ scale: [1, 1.18, 1], rotate: [-6, 6, -6] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '48px 170px' }}
          />
        </>
      )}

      <rect x="79" y="187" width="31" height="18" rx="9" fill="#fff8de" opacity="0.94" />
      <text x="94.5" y="199" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="800" fill={theme.edge}>26 KG</text>

      <g clipPath={`url(#${clipId})`} pointerEvents="none">
        <motion.rect
          x="-58"
          y="5"
          width="30"
          height="225"
          fill={`url(#${shineId})`}
          transform="skewX(-13)"
          animate={{ x: [-58, 186] }}
          transition={{ duration: 2.9, repeat: Infinity, repeatDelay: 2.7, ease: 'easeInOut' }}
          opacity="0.7"
        />
      </g>
    </g>
  );
}

interface WorkerProps {
  x: number;
  y: number;
  scale?: number;
  sari: string;
  blouse: string;
}

function Worker({ x, y, scale = 1, sari, blouse }: WorkerProps) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="8" cy="88" rx="27" ry="6" fill="#184d28" opacity="0.17" />
      <circle cx="2" cy="5" r="9" fill="#995638" />
      <path d="M-7 11c10-8 22-7 31 2-1 12-6 21-14 26-12-4-18-13-17-28Z" fill="#251817" />
      <path d="M-3 24c9-5 18-5 27 1l-5 16-22-1Z" fill={blouse} />
      <path d="M-6 39c18 2 32 15 38 36-11 11-27 14-45 8-1-16 1-31 7-44Z" fill={sari} />
      <path d="M-7 43c6 10 9 24 10 39" stroke="#995638" strokeWidth="5" strokeLinecap="round" />
      <path d="M24 37c12 9 22 21 31 37" stroke="#995638" strokeWidth="5" strokeLinecap="round" />
      <path d="M52 75c17-3 29 1 41 13" stroke="#705421" strokeWidth="4" strokeLinecap="round" />
      <path d="M1 81c9 10 17 11 24 4" stroke="#995638" strokeWidth="5" strokeLinecap="round" />
      <path d="M-1 81c-4 14-8 27-13 39" stroke="#995638" strokeWidth="5" strokeLinecap="round" />
      <path d="M23 83c11 11 19 23 25 37" stroke="#995638" strokeWidth="5" strokeLinecap="round" />
    </g>
  );
}

function CookingScene() {
  const steam = [0, 1, 2];
  return (
    <g transform="translate(1000 285)">
      <ellipse cx="96" cy="293" rx="105" ry="17" fill="#173b20" opacity="0.16" />
      <path d="M142 258c31 17 50 37 59 63-37 14-74 14-112 0 6-27 23-48 53-63Z" fill="#0f6f76" />
      <path d="M120 205c20-9 38-8 55 4l-7 34h-43Z" fill="#d88d24" />
      <path d="M111 158c33 1 56 22 60 53-1 21-10 38-27 50l-57-2c-18-14-27-32-26-52 3-30 22-48 50-49Z" fill="#251817" />
      <ellipse cx="115" cy="213" rx="38" ry="44" fill="#a8603c" />
      <path d="M80 203c5-26 20-40 46-44 20 5 32 17 36 38-21-4-44-2-68 4-5 1-10 2-14 2Z" fill="#241817" />
      <circle cx="103" cy="213" r="3" fill="#2b1a15" />
      <circle cx="129" cy="213" r="3" fill="#2b1a15" />
      <path d="M109 228c5 4 12 4 17 0" stroke="#5b2e27" strokeWidth="2.3" fill="none" strokeLinecap="round" />
      <circle cx="116" cy="194" r="3" fill="#c62234" />
      <path d="M82 258c18-6 32-5 44 1 28 37 39 83 34 141H69c20-49 28-97 23-142Z" fill="#ce6f24" />
      <path d="M84 265c36 10 65 38 86 86" fill="none" stroke="#f0d064" strokeWidth="14" strokeLinecap="round" />
      <path d="M96 258c10-9 19-12 28-13 11 2 20 7 26 16l-8 49-46-2Z" fill="#c92d37" />
      <motion.path
        d="M89 270c-23 14-37 36-43 65"
        fill="none"
        stroke="#a8603c"
        strokeWidth="20"
        strokeLinecap="round"
        animate={{ d: ['M89 270c-23 14-37 36-43 65', 'M89 270c-20 17-34 39-39 67', 'M89 270c-23 14-37 36-43 65'] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <path d="M158 270c25 14 42 36 49 65" fill="none" stroke="#a8603c" strokeWidth="20" strokeLinecap="round" />
      <ellipse cx="46" cy="329" rx="38" ry="15" fill="#7c5020" />
      <path d="M19 332c7 32 49 32 55 0" fill="#b57423" />
      <ellipse cx="46" cy="331" rx="28" ry="9" fill="#f4eee0" />
      <ellipse cx="224" cy="346" rx="46" ry="12" fill="#3d2c12" opacity="0.18" />
      <rect x="177" y="304" width="94" height="42" rx="5" fill="#71502a" />
      <path d="M172 301h105l-12 16h-81Z" fill="#624219" />
      <ellipse cx="218" cy="308" rx="26" ry="7" fill="#2a2116" />
      <path d="M192 304c5 26 47 26 53 0" fill="#473221" />
      {steam.map((index) => (
        <motion.path
          key={index}
          d={`M${211 + index * 12} 297c-6-10-3-20 5-28 8-8 11-18 5-28`}
          stroke="#ffffff"
          strokeOpacity="0.8"
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
          animate={{ opacity: [0, 0.9, 0], y: [0, -13, -27] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.45, ease: 'easeOut' }}
        />
      ))}
    </g>
  );
}

export default function HeroAgrarianScene() {
  const foregroundGrass = Array.from({ length: 42 }, (_, index) => ({ x: 18 + index * 31, delay: index * 0.06 }));
  const fieldSparkles = [
    [372, 241], [408, 221], [458, 254], [520, 212], [572, 242], [636, 215], [698, 247], [756, 222], [815, 252], [868, 228],
  ];
  const birds = [
    [250, 112], [285, 134], [334, 103], [918, 147], [952, 125],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="overflow-hidden rounded-[30px] border border-emerald-100 bg-[#f1f7e8] shadow-[0_28px_70px_rgba(24,72,41,0.16)]"
    >
      <svg
        viewBox="0 0 1280 680"
        role="img"
        aria-labelledby="agrarian-scene-title agrarian-scene-description"
        className="h-auto w-full"
      >
        <title id="agrarian-scene-title">Animated journey from paddy field to premium rice and the family table</title>
        <desc id="agrarian-scene-description">
          A cinematic Tamil agricultural landscape with workers in paddy fields, four animated rice products on a premium showcase stage, and a warm home cooking scene.
        </desc>

        <defs>
          <linearGradient id="sceneSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dff4ff" />
            <stop offset="42%" stopColor="#f7efbb" />
            <stop offset="100%" stopColor="#d5e9a7" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffce2" stopOpacity="1" />
            <stop offset="35%" stopColor="#ffec8a" stopOpacity="0.74" />
            <stop offset="100%" stopColor="#f3cc4a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="farHills" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7daa63" />
            <stop offset="52%" stopColor="#6b9e55" />
            <stop offset="100%" stopColor="#4f7f48" />
          </linearGradient>
          <linearGradient id="fieldTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9bdd5a" />
            <stop offset="100%" stopColor="#4e9837" />
          </linearGradient>
          <linearGradient id="fieldNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#65ad3b" />
            <stop offset="100%" stopColor="#286f2f" />
          </linearGradient>
          <linearGradient id="waterPath" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d8e6ba" />
            <stop offset="45%" stopColor="#a9d0a2" />
            <stop offset="100%" stopColor="#e6d28a" />
          </linearGradient>
          <linearGradient id="platformTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f4ddb2" />
            <stop offset="100%" stopColor="#b68a50" />
          </linearGradient>
          <linearGradient id="platformFace" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9a6d3d" />
            <stop offset="100%" stopColor="#5c3b22" />
          </linearGradient>
          <filter id="sceneSoftGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <filter id="platformShadow" x="-30%" y="-80%" width="160%" height="260%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        <rect width="1280" height="680" fill="url(#sceneSky)" />

        <motion.circle
          cx="198"
          cy="137"
          r="108"
          fill="url(#sunGlow)"
          animate={{ opacity: [0.68, 0.94, 0.68], r: [102, 116, 102] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <circle cx="198" cy="137" r="42" fill="#fff4a4" opacity="0.94" />

        <motion.g animate={{ x: [0, 34, 0] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} opacity="0.68">
          <ellipse cx="475" cy="95" rx="76" ry="24" fill="#fff" />
          <ellipse cx="432" cy="99" rx="42" ry="18" fill="#fff" />
          <ellipse cx="528" cy="102" rx="47" ry="17" fill="#fff" />
        </motion.g>
        <motion.g animate={{ x: [0, -28, 0] }} transition={{ duration: 27, repeat: Infinity, ease: 'easeInOut' }} opacity="0.46">
          <ellipse cx="830" cy="118" rx="68" ry="21" fill="#fff" />
          <ellipse cx="790" cy="122" rx="37" ry="15" fill="#fff" />
          <ellipse cx="875" cy="122" rx="42" ry="16" fill="#fff" />
        </motion.g>

        {birds.map(([x, y], index) => (
          <motion.path
            key={`${x}-${y}`}
            d={`M${x - 8} ${y}q8-7 16 0q8-7 16 0`}
            fill="none"
            stroke="#41512f"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ y: [0, index % 2 === 0 ? -4 : 3, 0], x: [0, 8, 0] }}
            transition={{ duration: 5 + index * 0.6, repeat: Infinity, ease: 'easeInOut' }}
            opacity="0.72"
          />
        ))}

        <path d="M0 229C120 180 246 178 369 216c124 39 250 38 378 3 168-46 346-42 533 17V0H0Z" fill="url(#farHills)" />
        <path d="M0 246c158 9 304 3 438-25 153-31 302-30 452 5 129 30 259 33 390 12v69H0Z" fill="#78ad5a" opacity="0.58" />

        <path d="M0 292h1280v388H0Z" fill="#e3f0c9" />
        <path d="M0 329c155-47 319-46 492 4 144 42 297 48 469 17 120-22 226-16 319 18v312H0Z" fill="url(#fieldTop)" />
        <path d="M0 402c170-49 310-51 462-5 93 28 190 38 288 29 92-8 176-27 262-26 98 1 187 14 268 40v240H0Z" fill="#79bb45" opacity="0.88" />
        <path d="M0 548c176-38 340-28 492 26 124 44 239 47 361 20 133-30 276-24 427 23v63H0Z" fill="url(#fieldNear)" />

        {[338, 368, 399, 430, 461, 492].map((y, index) => (
          <motion.path
            key={y}
            d={`M0 ${y}C170 ${y - 36} 324 ${y - 24} 489 ${y + 7}c153 28 303 25 450-4 113-22 227-19 341 10`}
            fill="none"
            stroke={index % 2 === 0 ? '#d9eca2' : '#447f30'}
            strokeWidth={index % 2 === 0 ? 2.4 : 2}
            opacity={index % 2 === 0 ? 0.42 : 0.32}
            animate={{ pathLength: [0.72, 1, 0.72] }}
            transition={{ duration: 8 + index * 0.7, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        <path d="M310 530c93-43 190-45 292-5 45 18 84 19 119 2 87-41 177-44 270-7 36 14 72 24 108 30 49 8 79 19 91 34v96H81v-70c30-17 63-29 99-35 43-7 86-22 130-45Z" fill="#327f31" opacity="0.9" />
        <path d="M338 430c47 25 79 60 96 105 14 36 38 61 70 77" fill="none" stroke="url(#waterPath)" strokeWidth="34" strokeLinecap="round" opacity="0.88" />
        <path d="M500 612c82 9 158 2 229-20 89-27 173-28 254-2" fill="none" stroke="#c8b36c" strokeWidth="24" strokeLinecap="round" opacity="0.72" />

        <path d="M80 234c20-79 75-124 164-132-65 44-99 99-103 164Z" fill="#3f7c2b" />
        <path d="M142 108c49 21 78 57 90 105" fill="none" stroke="#2f6b22" strokeWidth="13" strokeLinecap="round" />
        <path d="M193 209c5-50 31-79 76-94" fill="none" stroke="#315f22" strokeWidth="10" strokeLinecap="round" />

        <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}>
          <Worker x={160} y={398} scale={1.07} sari="#d6a22d" blouse="#a7431d" />
        </motion.g>
        <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 4.1, repeat: Infinity, delay: 0.45, ease: 'easeInOut' }}>
          <Worker x={270} y={421} scale={0.94} sari="#398c3c" blouse="#854124" />
        </motion.g>
        <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 5.2, repeat: Infinity, delay: 0.8, ease: 'easeInOut' }}>
          <Worker x={75} y={433} scale={0.87} sari="#2a7ca0" blouse="#8a3822" />
        </motion.g>

        {fieldSparkles.map(([x, y], index) => (
          <motion.circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={index % 3 === 0 ? 2.5 : 1.8}
            fill="#fff4ae"
            animate={{ opacity: [0.05, 0.82, 0.05], y: [0, -7, 0] }}
            transition={{ duration: 3 + (index % 4) * 0.5, repeat: Infinity, delay: index * 0.21, ease: 'easeInOut' }}
          />
        ))}

        <ellipse cx="662" cy="518" rx="300" ry="37" fill="#17351f" opacity="0.24" filter="url(#platformShadow)" />
        <motion.circle
          cx="662"
          cy="340"
          r="165"
          fill="none"
          stroke="#fff0b2"
          strokeWidth="2"
          strokeDasharray="7 12"
          opacity="0.35"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '662px 340px' }}
        />
        <motion.circle
          cx="662"
          cy="340"
          r="137"
          fill="none"
          stroke="#e6bd51"
          strokeWidth="1.5"
          strokeDasharray="3 11"
          opacity="0.32"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 64, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '662px 340px' }}
        />
        <ellipse cx="662" cy="501" rx="278" ry="30" fill="url(#platformTop)" stroke="#8a653d" strokeWidth="2" />
        <path d="M392 502c28 46 520 46 540 0v30c-26 49-509 49-540 0Z" fill="url(#platformFace)" stroke="#654322" strokeWidth="2" />
        <path d="M430 523q35 22 70 0t70 0t70 0t70 0t70 0t70 0" fill="none" stroke="#d4ae72" strokeWidth="4" opacity="0.72" />
        <path d="M453 510h419" stroke="#fff1c9" strokeWidth="2" opacity="0.45" />

        <motion.g
          animate={{ y: [0, -9, 0], rotate: [-0.8, 0.8, -0.8] }}
          transition={{ duration: 5.1, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '493px 400px' }}
        >
          <ProductRiceBag x={425} y={282} scale={0.92} variant="goldfish" />
        </motion.g>
        <motion.g
          animate={{ y: [0, -13, 0], rotate: [0.7, -0.7, 0.7] }}
          transition={{ duration: 5.7, repeat: Infinity, delay: 0.25, ease: 'easeInOut' }}
          style={{ transformOrigin: '602px 390px' }}
        >
          <ProductRiceBag x={537} y={248} scale={1.05} variant="royal" />
        </motion.g>
        <motion.g
          animate={{ y: [0, -10, 0], rotate: [-0.6, 0.6, -0.6] }}
          transition={{ duration: 4.9, repeat: Infinity, delay: 0.55, ease: 'easeInOut' }}
          style={{ transformOrigin: '724px 402px' }}
        >
          <ProductRiceBag x={660} y={273} scale={0.98} variant="mangoGold" />
        </motion.g>
        <motion.g
          animate={{ y: [0, -11, 0], rotate: [0.55, -0.55, 0.55] }}
          transition={{ duration: 5.3, repeat: Infinity, delay: 0.9, ease: 'easeInOut' }}
          style={{ transformOrigin: '844px 407px' }}
        >
          <ProductRiceBag x={784} y={284} scale={0.92} variant="mangoGreen" />
        </motion.g>

        {[420, 455, 890, 925].map((x, index) => (
          <motion.path
            key={x}
            d={`M${x} 487q10-22 20 0`}
            fill="none"
            stroke="#e7c44f"
            strokeWidth="4"
            strokeLinecap="round"
            animate={{ rotate: [-5, 6, -5] }}
            transition={{ duration: 2.7 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: `${x + 10}px 487px` }}
          />
        ))}

        <CookingScene />

        {foregroundGrass.map((blade, index) => (
          <motion.path
            key={blade.x}
            d={`M${blade.x} 684c12-28 15-49 0-73`}
            stroke={index % 3 === 0 ? '#256e2b' : '#317e31'}
            strokeWidth={index % 4 === 0 ? 6 : 5}
            strokeLinecap="round"
            animate={{ rotate: [0, index % 2 === 0 ? 4 : -4, 0] }}
            transition={{ duration: 2.4 + (index % 5) * 0.22, repeat: Infinity, delay: blade.delay, ease: 'easeInOut' }}
            style={{ transformOrigin: `${blade.x}px 680px` }}
          />
        ))}

        <motion.g
          animate={{ opacity: [0.25, 0.6, 0.25], x: [0, 12, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <circle cx="598" cy="192" r="2" fill="#fff8bf" />
          <circle cx="645" cy="179" r="1.6" fill="#fff8bf" />
          <circle cx="708" cy="195" r="2.2" fill="#fff8bf" />
          <circle cx="751" cy="176" r="1.7" fill="#fff8bf" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
