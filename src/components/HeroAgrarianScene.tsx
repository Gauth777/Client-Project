/**
 * Panoramic illustrated hero scene inspired by Tamil agricultural life.
 */

import React from 'react';
import { motion } from 'motion/react';

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
      <ellipse cx="70" cy="211" rx="61" ry="10" fill="rgba(25,64,26,0.18)" />
      <path
        d="M18 18h104c10 0 17 7 17 17v150c0 13-8 22-20 22H21c-12 0-20-9-20-22V35c0-10 7-17 17-17Z"
        fill={body}
      />
      <path d="M13 28c27 17 86 17 114 0" fill="none" stroke="rgba(255,255,255,0.48)" strokeWidth="6" strokeLinecap="round" />
      <path d="M1 183c27-13 111-13 138 0v12c-9 8-17 12-20 12H21c-5 0-12-4-20-12Z" fill={accent} />
      <circle cx="70" cy="76" r="32" fill="#fff8dc" opacity="0.96" />
      <path d="M31 121c18-29 38-48 61-59 16 8 31 23 44 44-18-4-37-4-56 0-18 4-34 9-49 15Z" fill="rgba(255,255,255,0.18)" />
      <rect x="23" y="43" width="94" height="34" rx="17" fill="#c92c25" />
      <text x="70" y="65" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#fffdf6">
        {label}
      </text>
      <text x="70" y="101" textAnchor="middle" fontFamily="Georgia, serif" fontSize="14" fill="#3f2a12">
        {sublabel}
      </text>
      <text x="70" y="118" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8" letterSpacing="1.2" fill="#3f2a12">
        PREMIUM RICE
      </text>
      <path d="M29 150h82" stroke="rgba(255,255,255,0.34)" strokeWidth="4" strokeLinecap="round" />
      <path d="M32 163h59" stroke="rgba(255,255,255,0.25)" strokeWidth="3" strokeLinecap="round" />
      <text x="109" y="179" textAnchor="end" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700" fill="#fffaf0">
        25 KG
      </text>
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
          Workers tend a green paddy field on the left, artistic rice bags are arranged in the centre, and a traditionally dressed woman cooks rice on the right.
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

        <motion.g animate={{ y: [0, -7, 0] }} transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}>
          <RiceBag x={454} y={292} scale={1.06} body="#ef9411" accent="#d87312" label="MAMBAZHAM" sublabel="Rajabogam" />
        </motion.g>
        <motion.g animate={{ y: [0, -10, 0] }} transition={{ duration: 4.8, repeat: Infinity, delay: 0.6, ease: 'easeInOut' }}>
          <RiceBag x={573} y={268} scale={1.15} body="#18bd43" accent="#078b31" label="MAMBAZHAM" sublabel="Kichadi Ponni" />
        </motion.g>
        <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 4.6, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}>
          <RiceBag x={714} y={291} scale={1.05} body="#c8df36" accent="#98ad28" label="PREMIUM" sublabel="Ponni Rice" />
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
