/**
 * Panoramic illustrated hero scene inspired by Tamil agricultural life,
 * with an overlapping standing South Indian woman illustration.
 */

import React from 'react';
import { motion } from 'motion/react';

const HERO_STATS = [
  {
    value: '15+ Years',
    label: 'Milling Legacy',
    description: 'Established in 2011 in Kallakurichi',
  },
  {
    value: '150 Tons',
    label: 'Daily Processing',
    description: 'Automated high-capacity continuous lines',
  },
  {
    value: '250+ Farms',
    label: 'Partner Sourcing',
    description: 'Direct fair-trade Cauvery basin network',
  },
  {
    value: '99.99%',
    label: 'Purity Standard',
    description: 'Bühler Sortex trichromatic laser sorters',
  },
];

interface RiceBagProps {
  x: number;
  y: number;
  scale?: number;
  body: string;
  accent: string;
  label: string;
  sublabel: string;
}

function RiceBag({ x, y, scale = 1, body, accent, label, sublabel }: RiceBagProps) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="68" cy="210" rx="62" ry="10" fill="rgba(25,64,26,0.18)" />
      <path d="M18 18h104c10 0 17 7 17 17v150c0 13-8 22-20 22H21c-12 0-20-9-20-22V35c0-10 7-17 17-17Z" fill={body} />
      <path d="M13 28c27 17 86 17 114 0" fill="none" stroke="rgba(255,255,255,0.48)" strokeWidth="6" strokeLinecap="round" />
      <path d="M1 183c27-13 111-13 138 0v12c-9 8-17 12-20 12H21c-5 0-12-4-20-12Z" fill={accent} />
      <circle cx="70" cy="76" r="32" fill="#fff8dc" opacity="0.96" />
      <path d="M31 121c18-29 38-48 61-59 16 8 31 23 44 44-18-4-37-4-56 0-18 4-34 9-49 15Z" fill="rgba(255,255,255,0.18)" />
      <rect x="23" y="43" width="94" height="34" rx="17" fill="#c92c25" />
      <text x="70" y="65" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#fffdf6">{label}</text>
      <text x="70" y="101" textAnchor="middle" fontFamily="Georgia, serif" fontSize="14" fill="#3f2a12">{sublabel}</text>
      <text x="70" y="118" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8" letterSpacing="1.2" fill="#3f2a12">PREMIUM RICE</text>
      <path d="M29 150h82" stroke="rgba(255,255,255,0.34)" strokeWidth="4" strokeLinecap="round" />
      <path d="M32 163h59" stroke="rgba(255,255,255,0.25)" strokeWidth="3" strokeLinecap="round" />
      <text x="109" y="179" textAnchor="end" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700" fill="#fffaf0">25 KG</text>
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

function StandingWomanIllustration() {
  const paddy = Array.from({ length: 7 }, (_, index) => ({ x: 232 + index * 6, y: 150 - index * 8 }));
  const vessels = [
    { x: 94, y: 455, w: 62, h: 24, fill: '#ad6f23' },
    { x: 148, y: 467, w: 54, h: 20, fill: '#8c5920' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 18, y: 12 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' }}
      className="pointer-events-none absolute -right-2 bottom-[118px] z-20 hidden w-[42%] min-w-[250px] max-w-[360px] lg:block xl:-right-4"
    >
      <motion.svg
        viewBox="0 0 320 520"
        className="h-auto w-full drop-shadow-[0_24px_36px_rgba(41,38,20,0.18)]"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="womanSari" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#eb8e20" />
            <stop offset="100%" stopColor="#c85f19" />
          </linearGradient>
          <linearGradient id="blouseRed" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d63e32" />
            <stop offset="100%" stopColor="#a71d2d" />
          </linearGradient>
          <linearGradient id="goldMetal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d89e3a" />
            <stop offset="100%" stopColor="#9d601d" />
          </linearGradient>
        </defs>

        <ellipse cx="148" cy="495" rx="90" ry="18" fill="rgba(59,82,28,0.16)" />
        <ellipse cx="190" cy="471" rx="44" ry="12" fill="rgba(59,82,28,0.12)" />

        {vessels.map((v, index) => (
          <g key={index}>
            <ellipse cx={v.x} cy={v.y} rx={v.w / 2} ry={v.h / 2} fill="#6c4717" opacity="0.18" />
            <path d={`M${v.x - v.w / 2} ${v.y - 4}c6 24 ${v.w - 12} 24 ${v.w} 0`} fill={v.fill} />
            <ellipse cx={v.x} cy={v.y - 4} rx={v.w / 2} ry={v.h / 2} fill="url(#goldMetal)" />
            <ellipse cx={v.x} cy={v.y - 7} rx={v.w / 2 - 10} ry={v.h / 2 - 6} fill="#f1ead7" />
          </g>
        ))}

        <path d="M136 74c37 0 64 24 70 59 4 22-2 43-18 62l-70-1c-21-17-31-40-28-67 3-31 22-53 46-53Z" fill="#281916" />
        <ellipse cx="154" cy="113" rx="40" ry="47" fill="#a8603c" />
        <path d="M115 100c8-28 23-42 48-45 22 5 35 19 38 40-23-4-46-2-71 4-4 1-9 2-15 1Z" fill="#241716" />
        <circle cx="140" cy="113" r="3.5" fill="#2b1a15" />
        <circle cx="166" cy="113" r="3.5" fill="#2b1a15" />
        <path d="M144 130c6 4 13 4 18 0" stroke="#5b2e27" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="153" cy="93" r="3.5" fill="#bf2435" />
        <path d="M117 154c14-9 27-13 40-13 13 2 23 9 31 18l-8 60-71-1Z" fill="url(#blouseRed)" />

        <path d="M105 175c22-6 39-5 52 2 33 44 46 107 40 187H82c22-59 30-121 23-189Z" fill="url(#womanSari)" />
        <path d="M107 186c44 12 77 48 101 108" fill="none" stroke="#f0cb68" strokeWidth="16" strokeLinecap="round" />
        <path d="M94 191c-24 16-39 39-45 70" fill="none" stroke="#a8603c" strokeWidth="22" strokeLinecap="round" />
        <path d="M47 261c-3 22 0 44 9 66" fill="none" stroke="#a8603c" strokeWidth="20" strokeLinecap="round" />
        <path d="M191 192c23 18 37 45 42 81" fill="none" stroke="#a8603c" strokeWidth="20" strokeLinecap="round" />
        <path d="M230 269c8 34 8 72 2 112" fill="none" stroke="#a8603c" strokeWidth="18" strokeLinecap="round" />

        <path d="M94 363c-6 42-14 71-25 98" fill="none" stroke="#a8603c" strokeWidth="18" strokeLinecap="round" />
        <path d="M183 364c13 35 28 67 47 95" fill="none" stroke="#a8603c" strokeWidth="18" strokeLinecap="round" />

        <g>
          <path d="M227 208c15 2 29 8 41 18" fill="none" stroke="#a8603c" strokeWidth="15" strokeLinecap="round" />
          <path d="M262 226c-9-17-12-35-9-53" fill="none" stroke="#a8603c" strokeWidth="12" strokeLinecap="round" />
          <path d="M245 174c7-5 14-6 22-4" fill="none" stroke="#a8603c" strokeWidth="8" strokeLinecap="round" />
          {paddy.map((stem, index) => (
            <g key={index}>
              <path d={`M238 186 Q ${stem.x} ${stem.y} ${stem.x + 8} ${stem.y - 22}`} fill="none" stroke="#74a53d" strokeWidth="2.8" strokeLinecap="round" />
              <ellipse cx={stem.x + 8} cy={stem.y - 24} rx="5" ry="10" fill="#d8c55f" transform={`rotate(${12 + index * 4} ${stem.x + 8} ${stem.y - 24})`} />
              <ellipse cx={stem.x + 13} cy={stem.y - 17} rx="4.5" ry="9" fill="#d8c55f" transform={`rotate(${18 + index * 4} ${stem.x + 13} ${stem.y - 17})`} />
            </g>
          ))}
        </g>

        <g>
          <ellipse cx="131" cy="470" rx="24" ry="10" fill="#744713" />
          <path d="M109 470c4 18 40 18 44 0" fill="#a76621" />
          <ellipse cx="131" cy="468" rx="19" ry="8" fill="#f0e8d3" />
        </g>
      </motion.svg>
    </motion.div>
  );
}

export default function HeroAgrarianScene() {
  const foregroundGrass = Array.from({ length: 40 }, (_, index) => ({
    x: 30 + index * 32,
    delay: index * 0.07,
  }));

  const branchLeaves = [
    { x: 154, y: 88, rotation: -16 },
    { x: 192, y: 104, rotation: 11 },
    { x: 228, y: 80, rotation: -9 },
    { x: 264, y: 111, rotation: 13 },
  ];

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative overflow-visible rounded-[30px] border border-emerald-100 bg-[#edf8e7] shadow-[0_24px_60px_rgba(24,72,41,0.14)]"
      >
        <svg
          viewBox="0 0 1280 520"
          role="img"
          aria-labelledby="agrarian-scene-title agrarian-scene-description"
          className="h-auto w-full rounded-[30px]"
        >
          <title id="agrarian-scene-title">Illustrated journey from paddy field to premium rice</title>
          <desc id="agrarian-scene-description">Workers tend a green paddy field on the left, artistic rice bags are arranged in the centre, and a standing South Indian woman overlaps the illustrated landscape on the right.</desc>

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
          </defs>

          <rect width="1280" height="520" fill="url(#heroSky)" />
          <circle cx="1015" cy="106" r="54" fill="#fff0a1" opacity="0.88" />
          <path d="M0 165C128 122 257 125 374 167c120 43 247 44 381 3 157-48 331-47 525 15V0H0Z" fill="url(#heroHills)" />
          <path d="M0 198c145 12 287 7 420-21 144-31 282-35 431 0 127 30 273 35 429 11v58H0Z" fill="#75ae59" opacity="0.58" />

          <path d="M0 228h1280v292H0Z" fill="#e6f5d3" />
          <path d="M0 271c154-48 319-48 492 3 145 43 292 50 467 18 121-22 226-17 321 18v210H0Z" fill="url(#heroField)" />
          <path d="M0 320c161-51 298-53 452-7 88 27 180 39 281 32 87-6 172-27 260-29 101-3 197 9 287 39v165H0Z" fill="#78ba46" opacity="0.9" />
          <path d="M0 406c178-38 341-30 491 24 126 45 239 48 361 20 134-30 277-25 428 23v47H0Z" fill="#4b9131" />
          <path d="M315 417c118-51 238-51 369 1 35 18 68 18 103 0 103-52 209-50 319 1 32 15 65 25 97 30 39 6 65 17 77 33v8H0v-21c18-15 44-25 78-31 34-6 72-18 113-37 38-17 79-21 124-11Z" fill="#3d842c" />

          <path d="M496 341c57 24 101 58 139 105" fill="none" stroke="url(#heroPath)" strokeWidth="28" strokeLinecap="round" />
          <path d="M632 443c65 6 127 0 187-19" fill="none" stroke="url(#heroPath)" strokeWidth="18" strokeLinecap="round" />

          <path d="M74 201c18-75 69-117 152-124-60 41-93 93-96 153Z" fill="#4a842e" />
          <path d="M131 87c46 20 75 53 86 97" fill="none" stroke="#347021" strokeWidth="12" strokeLinecap="round" />
          <path d="M180 184c5-46 29-73 71-87" fill="none" stroke="#326821" strokeWidth="10" strokeLinecap="round" />

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
            <Worker x={157} y={314} scale={1.02} sari="#d8a52e" blouse="#a8431d" />
          </motion.g>
          <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 4.2, repeat: Infinity, delay: 0.4, ease: 'easeInOut' }}>
            <Worker x={266} y={336} scale={0.9} sari="#3e8c3d" blouse="#854124" />
          </motion.g>
          <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 5.1, repeat: Infinity, delay: 0.8, ease: 'easeInOut' }}>
            <Worker x={72} y={348} scale={0.84} sari="#267ca0" blouse="#8c3822" />
          </motion.g>

          <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}>
            <RiceBag x={438} y={250} scale={1.02} body="#ef9411" accent="#d87312" label="MAMBAZHAM" sublabel="Rajabogam" />
          </motion.g>
          <motion.g animate={{ y: [0, -9, 0] }} transition={{ duration: 4.8, repeat: Infinity, delay: 0.4, ease: 'easeInOut' }}>
            <RiceBag x={558} y={224} scale={1.12} body="#18bd43" accent="#078b31" label="MAMBAZHAM" sublabel="Kichadi Ponni" />
          </motion.g>
          <motion.g animate={{ y: [0, -7, 0] }} transition={{ duration: 4.6, repeat: Infinity, delay: 0.2, ease: 'easeInOut' }}>
            <RiceBag x={694} y={250} scale={1.02} body="#c8df36" accent="#98ad28" label="PREMIUM" sublabel="Ponni Rice" />
          </motion.g>

          {foregroundGrass.map((blade, index) => (
            <motion.path
              key={blade.x}
              d={`M${blade.x} 522c12-27 15-48 0-71`}
              stroke="#2e7e30"
              strokeWidth="5"
              strokeLinecap="round"
              animate={{ rotate: [0, index % 2 === 0 ? 3 : -3, 0] }}
              transition={{ duration: 2.6 + (index % 5) * 0.2, repeat: Infinity, delay: blade.delay, ease: 'easeInOut' }}
              style={{ transformOrigin: `${blade.x}px 520px` }}
            />
          ))}
        </svg>

        <StandingWomanIllustration />
      </motion.div>

      <section
        id="hero-statistics"
        aria-label="Rice mill statistics"
        className="relative z-10 mx-auto -mt-2 grid max-w-[1500px] grid-cols-1 gap-4 px-3 sm:grid-cols-2 sm:px-5 lg:-mt-5 lg:grid-cols-4 lg:gap-6"
      >
        {HERO_STATS.map((stat, index) => (
          <motion.article
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 + index * 0.08 }}
            className="flex min-h-[210px] flex-col rounded-[18px] border border-[#e9e1d1] bg-white px-7 py-8 shadow-[0_10px_28px_rgba(58,49,31,0.07)] sm:min-h-[225px] sm:px-8 sm:py-9"
          >
            <div>
              <div className="font-serif text-[34px] font-bold leading-none tracking-[-0.02em] text-emerald-950 sm:text-[38px]">{stat.value}</div>
              <div className="mt-3 text-[13px] font-extrabold uppercase tracking-[0.04em] text-stone-950 sm:text-sm">{stat.label}</div>
            </div>
            <div className="mt-auto border-t border-[#eee8dc] pt-5 text-sm leading-7 text-[#b89b68]">{stat.description}</div>
          </motion.article>
        ))}
      </section>
    </div>
  );
}
