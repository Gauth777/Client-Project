/**
 * Panoramic illustrated hero scene inspired by Tamil agricultural life.
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

function ProductRiceBag({ x, y, scale = 1, variant }: ProductRiceBagProps) {
  const themes = {
    goldfish: {
      top: '#f7c96a',
      bottom: '#f3e4c8',
      accent: '#d66b18',
      panel: '#fff7e8',
      ink: '#b91c1c',
    },
    royal: {
      top: '#b8db35',
      bottom: '#078a43',
      accent: '#075e36',
      panel: '#16853f',
      ink: '#fff6c4',
    },
    mangoGold: {
      top: '#f7bf31',
      bottom: '#ed8d12',
      accent: '#c75913',
      panel: '#fff0a8',
      ink: '#7f1d1d',
    },
    mangoGreen: {
      top: '#7fda28',
      bottom: '#088b3f',
      accent: '#056533',
      panel: '#f4f7bf',
      ink: '#7f1d1d',
    },
  } as const;

  const theme = themes[variant];
  const bodyGradientId = `bag-body-${variant}`;
  const sheenGradientId = `bag-sheen-${variant}`;
  const shadowId = `bag-shadow-${variant}`;
  const isMango = variant === 'mangoGold' || variant === 'mangoGreen';

  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <defs>
        <linearGradient id={bodyGradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={theme.top} />
          <stop offset="100%" stopColor={theme.bottom} />
        </linearGradient>
        <linearGradient id={sheenGradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id={shadowId} x="-35%" y="-30%" width="170%" height="180%">
          <feDropShadow dx="0" dy="12" stdDeviation="7" floodColor="#173e25" floodOpacity="0.28" />
        </filter>
      </defs>

      <ellipse cx="63" cy="219" rx="58" ry="10" fill="#163f28" opacity="0.18" />
      <path
        d="M10 12Q63 4 116 12L121 30V190Q121 209 106 216H20Q5 209 5 190V30Z"
        fill={`url(#${bodyGradientId})`}
        stroke={theme.accent}
        strokeWidth="2.4"
        filter={`url(#${shadowId})`}
      />
      <path d="M9 23Q63 13 117 23" fill="none" stroke="#fff8d8" strokeWidth="4" strokeLinecap="round" opacity="0.72" />
      <path d="M7 31Q63 22 119 31" fill="none" stroke={theme.accent} strokeWidth="3" strokeLinecap="round" opacity="0.65" />
      <path d="M11 193Q63 181 115 193V207Q107 216 98 216H28Q18 216 10 207Z" fill={theme.accent} opacity="0.92" />

      {variant === 'goldfish' && (
        <>
          <rect x="16" y="42" width="94" height="42" rx="8" fill={theme.panel} stroke="#d4a86b" strokeWidth="1.5" />
          <text x="63" y="61" textAnchor="middle" fontFamily="Georgia, serif" fontSize="15" fontWeight="800" fill="#d22c24">
            தங்கமீன்
          </text>
          <text x="63" y="75" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="700" fill="#24428e">
            PREMIUM SORTEX RICE
          </text>

          <ellipse cx="31" cy="104" rx="11" ry="20" fill="#1d5aaa" />
          <text x="31" y="99" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7" fontWeight="700" fill="#fff">P</text>
          <text x="31" y="108" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7" fontWeight="700" fill="#fff">V</text>
          <text x="31" y="117" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7" fontWeight="700" fill="#fff">M</text>

          <ellipse cx="95" cy="104" rx="11" ry="20" fill="#1d5aaa" />
          <text x="95" y="99" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7" fontWeight="700" fill="#fff">P</text>
          <text x="95" y="108" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7" fontWeight="700" fill="#fff">V</text>
          <text x="95" y="117" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7" fontWeight="700" fill="#fff">M</text>

          <motion.g
            animate={{ x: [0, 3, 0], rotate: [0, -2, 0, 2, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '64px 115px' }}
          >
            <ellipse cx="63" cy="115" rx="23" ry="14" fill="#f29f16" />
            <ellipse cx="56" cy="111" rx="13" ry="8" fill="#ffc83d" opacity="0.88" />
            <path d="M84 115l20-15-4 15 4 15Z" fill="#ef7516" />
            <path d="M59 102c8-12 18-12 25-7-8 1-13 5-17 11Z" fill="#f6b323" />
            <path d="M60 128c8 11 18 11 25 5-8 0-13-4-17-9Z" fill="#ef7a18" />
            <circle cx="49" cy="111" r="2.6" fill="#24180e" />
            <circle cx="48.3" cy="110.2" r="0.8" fill="#fff" />
          </motion.g>

          <rect x="27" y="143" width="72" height="18" rx="9" fill="#ec238c" />
          <text x="63" y="155" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="800" fill="#fff">SORTEX CLEANED</text>
          <path d="M18 177c21-10 41-12 60-5 12 5 23 5 32 2v16H18Z" fill="#b97432" opacity="0.7" />
          <path d="M17 182c18-7 32-7 44 0 12 7 30 8 49 2" fill="none" stroke="#f5e5bd" strokeWidth="4" strokeLinecap="round" />
        </>
      )}

      {variant === 'royal' && (
        <>
          <path d="M21 42Q63 27 105 42V77Q63 66 21 77Z" fill="#17743b" stroke="#f0bd3b" strokeWidth="2" />
          <text x="63" y="55" textAnchor="middle" fontFamily="Georgia, serif" fontSize="12" fontWeight="800" fill="#fff6d1">
            மணிமகுடம்
          </text>
          <text x="63" y="67" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5.6" fontWeight="700" fill="#ffe082">
            CELEBRATION OF VICTORY
          </text>

          <motion.g
            animate={{ y: [0, -2, 0], rotate: [0, 1.2, 0, -1.2, 0] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '63px 126px' }}
          >
            <path d="M41 112c6-21 14-32 22-32s17 11 23 32Z" fill="#c47d16" stroke="#f5cf55" strokeWidth="2" />
            <path d="M44 101l7-15 7 9 6-18 7 18 7-9 5 15Z" fill="#e7ac2c" stroke="#8b4a0b" strokeWidth="1.5" />
            <ellipse cx="63" cy="116" rx="17" ry="20" fill="#a8613b" />
            <path d="M46 112c4-17 12-24 18-24 9 0 15 8 17 21-13-5-24-4-35 3Z" fill="#241816" />
            <path d="M48 127c8 4 19 4 30 0-2 18-10 29-16 29-7 0-12-10-14-29Z" fill="#1f1818" />
            <circle cx="57" cy="115" r="1.8" fill="#17100c" />
            <circle cx="70" cy="115" r="1.8" fill="#17100c" />
            <path d="M57 125c4 3 9 3 13 0" stroke="#6f352a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M30 163c8-22 21-34 33-34 14 0 27 12 34 34Z" fill="#0f683c" stroke="#efc351" strokeWidth="2" />
            <path d="M37 141h52" stroke="#f4c84c" strokeWidth="5" opacity="0.8" />
            <path d="M30 99v74" stroke="#8d5b17" strokeWidth="4" strokeLinecap="round" />
            <circle cx="30" cy="94" r="8" fill="none" stroke="#c18720" strokeWidth="3" />
            <path d="M95 98v76" stroke="#805719" strokeWidth="3" strokeLinecap="round" />
            <path d="M95 98c10 4 16 10 20 20-7-3-13-3-20 0Z" fill="#117846" />
          </motion.g>

          <path d="M19 175h88v18H19Z" fill="#0a6b3d" opacity="0.72" />
          <path d="M20 175l10-11 7 11 9-16 9 16 9-20 10 20 9-14 8 14 8-10 9 10" fill="none" stroke="#d9b44a" strokeWidth="2" />
        </>
      )}

      {isMango && (
        <>
          <path d="M18 42Q63 24 108 42L100 76Q63 68 26 76Z" fill="#b92120" stroke="#fff3d0" strokeWidth="3" />
          <text x="63" y="58" textAnchor="middle" fontFamily="Georgia, serif" fontSize="14" fontWeight="800" fill="#fffaf0">
            மாம்பழம்
          </text>
          <text x="63" y="69" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5.8" fontWeight="700" fill="#ffe3a6">
            MAMBAZHAM
          </text>

          <path d="M29 102c15-27 31-41 49-49" fill="none" stroke="#6a3b1f" strokeWidth="5" strokeLinecap="round" />
          <path d="M44 88c14-15 30-20 48-16" fill="none" stroke="#315c28" strokeWidth="4" strokeLinecap="round" />
          {[46, 58, 72, 85, 96].map((cx, index) => (
            <motion.ellipse
              key={`${variant}-${cx}`}
              cx={cx}
              cy={index % 2 === 0 ? 82 : 72}
              rx="4.2"
              ry="6"
              fill={variant === 'mangoGold' ? '#f4b62e' : '#dbd72c'}
              animate={{ rotate: [-4, 5, -4] }}
              transition={{ duration: 3.2 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: `${cx}px ${index % 2 === 0 ? 82 : 72}px` }}
            />
          ))}

          <ellipse cx="65" cy="106" rx="40" ry="23" fill={theme.panel} opacity="0.96" />
          <text x="65" y="103" textAnchor="middle" fontFamily="Georgia, serif" fontSize="8" fill="#4c2d18">Rajabogam</text>
          <text x="65" y="116" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="800" fill="#171717">Kichadi Ponni</text>

          <path d="M18 139c22-13 45-15 69-4 11 5 19 6 25 4v36H18Z" fill={variant === 'mangoGold' ? '#d9831b' : '#199744'} opacity="0.82" />
          <path d="M19 153c20-9 39-9 56-1 14 7 26 8 37 3" fill="none" stroke="#f5e6a7" strokeWidth="3" strokeLinecap="round" />
          <path d="M77 152h20v17H77Z" fill="#f4e0a0" />
          <path d="M75 152l12-10 12 10Z" fill="#8a4d1d" />
          <path d="M25 169c8-14 16-20 25-20 8 0 14 5 19 13" fill="none" stroke="#f3d85e" strokeWidth="2.5" />
          <motion.path
            d="M42 166c4-7 8-7 12 0-4 5-8 5-12 0Z"
            fill="#7d3fc5"
            animate={{ scale: [1, 1.16, 1], rotate: [-5, 5, -5] }}
            transition={{ duration: 2.7, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '48px 166px' }}
          />
        </>
      )}

      <rect x="79" y="185" width="30" height="18" rx="9" fill="#fff7dc" opacity="0.9" />
      <text x="94" y="197" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="800" fill={theme.accent}>26 KG</text>

      <motion.path
        d="M18 37L37 35 80 194 60 198Z"
        fill={`url(#${sheenGradientId})`}
        animate={{ opacity: [0, 0.65, 0], x: [-18, 24, 52] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
      />
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
      <ellipse cx="8" cy="88" rx="27" ry="6" fill="rgba(18,67,28,0.16)" />
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

export default function HeroAgrarianScene() {
  const foregroundGrass = Array.from({ length: 40 }, (_, index) => ({
    x: 30 + index * 32,
    delay: index * 0.07,
  }));

  const branchLeaves = [
    { x: 171, y: 84, rotation: -16 },
    { x: 210, y: 102, rotation: 11 },
    { x: 249, y: 78, rotation: -9 },
    { x: 285, y: 113, rotation: 13 },
  ];

  const steam = [
    { x: 225, delay: 0 },
    { x: 238, delay: 0.45 },
    { x: 251, delay: 0.9 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="overflow-hidden rounded-[30px] border border-emerald-100 bg-[#edf8e7] shadow-[0_24px_60px_rgba(24,72,41,0.14)]"
    >
      <svg
        viewBox="0 0 1280 680"
        role="img"
        aria-labelledby="agrarian-scene-title agrarian-scene-description"
        className="h-auto w-full"
      >
        <title id="agrarian-scene-title">Illustrated journey from paddy field to cooked rice</title>
        <desc id="agrarian-scene-description">
          Workers tend a green paddy field on the left, four animated rice products are arranged in the centre, and a traditionally dressed woman cooks rice on the right.
        </desc>

        <defs>
          <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dff5ff" />
            <stop offset="60%" stopColor="#eaf7d9" />
            <stop offset="100%" stopColor="#d9efbe" />
          </linearGradient>
          <linearGradient id="heroHills" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9acb74" />
            <stop offset="100%" stopColor="#669b51" />
          </linearGradient>
          <linearGradient id="heroField" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#91d963" />
            <stop offset="100%" stopColor="#4c9837" />
          </linearGradient>
          <linearGradient id="heroPath" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#edd58c" />
            <stop offset="100%" stopColor="#c9aa51" />
          </linearGradient>
          <linearGradient id="sariBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#126da1" />
            <stop offset="100%" stopColor="#073c67" />
          </linearGradient>
        </defs>

        <rect width="1280" height="680" fill="url(#heroSky)" />
        <circle cx="995" cy="112" r="61" fill="#fff0a1" opacity="0.88" />
        <path d="M0 203C128 158 247 158 369 202c119 43 244 44 379 4 157-47 333-46 532 17V0H0Z" fill="url(#heroHills)" />
        <path d="M0 237c150 11 291 6 423-22 144-31 282-35 431 0 127 30 273 35 426 12v61H0Z" fill="#75ae59" opacity="0.58" />

        <path d="M0 267h1280v413H0Z" fill="#e6f5d3" />
        <path d="M0 320c154-48 319-48 492 3 145 43 292 50 467 18 121-22 226-17 321 18v321H0Z" fill="url(#heroField)" />
        <path d="M0 380c161-51 298-53 452-7 88 27 180 39 281 32 87-6 172-27 260-29 101-3 197 9 287 39v265H0Z" fill="#78ba46" opacity="0.9" />
        <path d="M0 528c178-38 341-30 491 24 126 45 239 48 361 20 134-30 277-25 428 23v85H0Z" fill="#4b9131" />
        <path d="M315 538c118-51 238-51 369 1 35 18 68 18 103 0 103-52 209-50 319 1 32 15 65 25 97 30 39 6 65 17 77 33v77H0v-63c18-15 44-25 78-31 34-6 72-18 113-37 38-17 79-21 124-11Z" fill="#3d842c" />

        <path d="M532 409c58 38 97 100 111 174" fill="none" stroke="url(#heroPath)" strokeWidth="36" strokeLinecap="round" />
        <path d="M636 583c72 7 142 2 211-20" fill="none" stroke="url(#heroPath)" strokeWidth="25" strokeLinecap="round" />

        <path d="M82 223c20-79 75-124 163-132-65 44-99 99-103 164Z" fill="#4a842e" />
        <path d="M143 101c48 21 78 56 89 104" fill="none" stroke="#347021" strokeWidth="13" strokeLinecap="round" />
        <path d="M193 203c5-50 31-79 76-94" fill="none" stroke="#326821" strokeWidth="10" strokeLinecap="round" />

        {branchLeaves.map((leaf, index) => (
          <motion.g
            key={`${leaf.x}-${leaf.y}`}
            animate={{ rotate: [leaf.rotation, leaf.rotation + 4, leaf.rotation] }}
            transition={{ duration: 3.4 + index * 0.45, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: `${leaf.x}px ${leaf.y}px` }}
          >
            <ellipse cx={leaf.x} cy={leaf.y} rx="10" ry="17" fill="#b8db3e" />
            <path d={`M${leaf.x} ${leaf.y - 15}q-3 15 0 30`} stroke="#75a736" strokeWidth="2" fill="none" />
          </motion.g>
        ))}

        <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}>
          <Worker x={163} y={387} scale={1.08} sari="#d8a52e" blouse="#a8431d" />
        </motion.g>
        <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 4.2, repeat: Infinity, delay: 0.4, ease: 'easeInOut' }}>
          <Worker x={276} y={411} scale={0.95} sari="#3e8c3d" blouse="#854124" />
        </motion.g>
        <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 5.1, repeat: Infinity, delay: 0.8, ease: 'easeInOut' }}>
          <Worker x={76} y={423} scale={0.88} sari="#267ca0" blouse="#8c3822" />
        </motion.g>

        <motion.g
          animate={{ y: [0, -8, 0], rotate: [-0.7, 0.7, -0.7] }}
          transition={{ duration: 4.9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '468px 410px' }}
        >
          <ProductRiceBag x={402} y={287} scale={0.9} variant="goldfish" />
        </motion.g>
        <motion.g
          animate={{ y: [0, -12, 0], rotate: [0.6, -0.7, 0.6] }}
          transition={{ duration: 5.4, repeat: Infinity, delay: 0.35, ease: 'easeInOut' }}
          style={{ transformOrigin: '579px 400px' }}
        >
          <ProductRiceBag x={518} y={258} scale={1.03} variant="royal" />
        </motion.g>
        <motion.g
          animate={{ y: [0, -9, 0], rotate: [-0.5, 0.6, -0.5] }}
          transition={{ duration: 4.7, repeat: Infinity, delay: 0.7, ease: 'easeInOut' }}
          style={{ transformOrigin: '700px 411px' }}
        >
          <ProductRiceBag x={640} y={278} scale={0.96} variant="mangoGold" />
        </motion.g>
        <motion.g
          animate={{ y: [0, -10, 0], rotate: [0.5, -0.5, 0.5] }}
          transition={{ duration: 5.1, repeat: Infinity, delay: 1.05, ease: 'easeInOut' }}
          style={{ transformOrigin: '817px 414px' }}
        >
          <ProductRiceBag x={760} y={286} scale={0.91} variant="mangoGreen" />
        </motion.g>

        <g transform="translate(950 274)">
          <ellipse cx="101" cy="302" rx="112" ry="17" fill="rgba(37,73,21,0.17)" />
          <path d="M149 267c32 17 53 39 63 67-40 15-78 15-119 0 5-29 23-51 56-67Z" fill="url(#sariBlue)" />
          <path d="M127 207c20-10 39-9 57 4l-7 36h-46Z" fill="#df8f22" />
          <path d="M119 159c34 1 58 23 62 56-1 22-10 39-28 52l-59-2c-19-15-28-34-27-55 3-31 23-50 52-51Z" fill="#251817" />
          <ellipse cx="122" cy="216" rx="40" ry="47" fill="#a8603c" />
          <path d="M85 206c5-27 20-42 47-46 21 5 34 18 38 39-22-4-46-2-71 4-5 1-10 2-14 3Z" fill="#241817" />
          <circle cx="109" cy="216" r="3" fill="#2b1a15" />
          <circle cx="136" cy="216" r="3" fill="#2b1a15" />
          <path d="M115 232c5 4 12 4 17 0" stroke="#5b2e27" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <circle cx="123" cy="196" r="3" fill="#c62234" />
          <path d="M87 264c18-6 33-5 46 1 29 39 41 88 35 150H72c21-52 29-102 25-151Z" fill="#cf7024" />
          <path d="M89 272c38 10 68 40 90 91" fill="none" stroke="#efd065" strokeWidth="15" strokeLinecap="round" />
          <path d="M102 264c10-9 19-13 29-14 12 2 21 8 27 17l-8 52-49-2Z" fill="#c92d37" />
          <path d="M94 275c-24 15-39 38-45 68" fill="none" stroke="#a8603c" strokeWidth="21" strokeLinecap="round" />
          <path d="M48 343c-4 20-2 39 5 59" fill="none" stroke="#a8603c" strokeWidth="19" strokeLinecap="round" />
          <path d="M165 275c26 15 43 38 50 68" fill="none" stroke="#a8603c" strokeWidth="21" strokeLinecap="round" />
          <path d="M214 343c8 18 11 36 11 57" fill="none" stroke="#a8603c" strokeWidth="19" strokeLinecap="round" />

          <ellipse cx="51" cy="331" rx="40" ry="16" fill="#7c5020" />
          <path d="M22 334c7 34 52 34 59 0" fill="#b57423" />
          <ellipse cx="51" cy="333" rx="29" ry="10" fill="#f2ecdd" />

          <ellipse cx="235" cy="351" rx="49" ry="13" fill="rgba(60,44,10,0.18)" />
          <rect x="184" y="307" width="102" height="44" rx="4" fill="#71502a" />
          <rect x="197" y="294" width="12" height="13" fill="#593d17" />
          <rect x="260" y="294" width="12" height="13" fill="#593d17" />
          <path d="M178 304h114l-13 17h-88Z" fill="#624219" />
          <ellipse cx="228" cy="311" rx="28" ry="8" fill="#2a2116" />
          <path d="M199 306c5 28 52 28 58 0" fill="#473221" />

          {steam.map((puff) => (
            <motion.path
              key={puff.x}
              d={`M${puff.x} 299c-7-10-4-21 5-29 9-9 12-19 6-30`}
              stroke="rgba(255,255,255,0.82)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              animate={{ opacity: [0, 0.95, 0], y: [0, -13, -27] }}
              transition={{ duration: 3, repeat: Infinity, delay: puff.delay, ease: 'easeOut' }}
            />
          ))}
        </g>

        {foregroundGrass.map((blade, index) => (
          <motion.path
            key={blade.x}
            d={`M${blade.x} 682c12-27 15-48 0-71`}
            stroke="#2e7e30"
            strokeWidth="5"
            strokeLinecap="round"
            animate={{ rotate: [0, index % 2 === 0 ? 3 : -3, 0] }}
            transition={{ duration: 2.6 + (index % 5) * 0.2, repeat: Infinity, delay: blade.delay, ease: 'easeInOut' }}
            style={{ transformOrigin: `${blade.x}px 680px` }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
