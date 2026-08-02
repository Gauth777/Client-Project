/**
 * Stylized animated hero illustration for the Mayil rice brand.
 */

import React from 'react';
import { motion } from 'motion/react';

export default function TraditionalRiceWoman() {
  const grains = [
    [116, 472, 4], [134, 462, 3], [151, 477, 4], [165, 466, 3], [181, 479, 4],
    [198, 468, 3], [211, 479, 4], [228, 465, 3], [244, 477, 4], [259, 468, 3],
    [286, 506, 3], [302, 497, 4], [318, 509, 3], [335, 498, 4], [351, 508, 3],
  ];

  return (
    <motion.div
      className="relative w-full max-w-[520px] mx-auto"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <svg
        viewBox="0 0 520 620"
        role="img"
        aria-labelledby="traditional-rice-woman-title traditional-rice-woman-desc"
        className="w-full h-auto drop-shadow-[0_28px_35px_rgba(3,40,30,0.28)]"
      >
        <title id="traditional-rice-woman-title">South Indian woman presenting Mayil rice</title>
        <desc id="traditional-rice-woman-desc">
          A stylized traditionally dressed South Indian woman holding a rice sack, with brass bowls of rice arranged beside her.
        </desc>

        <defs>
          <linearGradient id="heroBackdrop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff8dc" />
            <stop offset="55%" stopColor="#f6d58a" />
            <stop offset="100%" stopColor="#d59b24" />
          </linearGradient>
          <linearGradient id="sareeGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0b4d9d" />
            <stop offset="55%" stopColor="#12367f" />
            <stop offset="100%" stopColor="#071f4e" />
          </linearGradient>
          <linearGradient id="sareeBorder" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f7dc72" />
            <stop offset="100%" stopColor="#c88d16" />
          </linearGradient>
          <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b96c43" />
            <stop offset="100%" stopColor="#8c4c32" />
          </linearGradient>
          <linearGradient id="sack" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#efe2bc" />
            <stop offset="100%" stopColor="#c7ad73" />
          </linearGradient>
          <radialGradient id="brass" cx="35%" cy="25%" r="80%">
            <stop offset="0%" stopColor="#ffe69a" />
            <stop offset="55%" stopColor="#d9a72d" />
            <stop offset="100%" stopColor="#8a5b0f" />
          </radialGradient>
          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#082d22" floodOpacity="0.22" />
          </filter>
        </defs>

        <motion.ellipse
          cx="268"
          cy="306"
          rx="214"
          ry="260"
          fill="url(#heroBackdrop)"
          animate={{ scale: [1, 1.015, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '268px 306px' }}
        />

        <g opacity="0.28" fill="none" stroke="#1d6c45" strokeWidth="3">
          <path d="M84 192c45-44 94-59 151-63" />
          <path d="M73 221c55-32 109-42 164-33" />
          <path d="M388 131c-47 23-83 56-108 98" />
          <path d="M424 171c-55 12-94 39-126 80" />
        </g>

        <motion.g
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ellipse cx="286" cy="563" rx="138" ry="24" fill="#0a3929" opacity="0.22" />

          <motion.g
            animate={{ rotate: [0, -1.4, 0, 1.2, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '286px 330px' }}
          >
            <path d="M279 142c28 2 48 20 51 48-1 19-9 35-23 47l-55-1c-17-13-25-30-24-50 3-27 22-44 51-44Z" fill="#1d1715" />
            <ellipse cx="279" cy="191" rx="37" ry="43" fill="url(#skin)" />
            <path d="M243 182c4-25 18-39 43-43 19 4 31 16 35 36-20-4-42-3-65 3-5 2-9 3-13 4Z" fill="#1b1615" />
            <path d="M311 203c-1 25-11 43-31 54-22-10-35-28-37-54 18 8 41 8 68 0Z" fill="url(#skin)" opacity="0.88" />
            <circle cx="266" cy="190" r="2.8" fill="#2b1a15" />
            <circle cx="293" cy="190" r="2.8" fill="#2b1a15" />
            <path d="M273 205c5 4 11 4 17 0" stroke="#5b2e27" strokeWidth="2.4" fill="none" strokeLinecap="round" />
            <circle cx="280" cy="174" r="3" fill="#c62032" />
            <path d="M246 188c-10 12-13 26-8 41 3 8 9 14 17 19" fill="none" stroke="#1b1615" strokeWidth="12" strokeLinecap="round" />
            <path d="M314 185c13 16 18 35 14 58-1 8-4 16-9 23" fill="none" stroke="#1b1615" strokeWidth="12" strokeLinecap="round" />
            <circle cx="319" cy="219" r="14" fill="#1b1615" />
            <circle cx="322" cy="217" r="7" fill="#f2d77c" />

            <path d="M246 244c18-16 47-19 69-4 24 31 34 74 31 128-3 63-23 124-59 181h-90c24-50 37-104 40-162 2-58 5-105 9-143Z" fill="url(#sareeGradient)" filter="url(#softShadow)" />
            <path d="M245 245c29 33 53 72 71 116 10 26 17 58 21 97l-27 9c-7-35-18-67-33-96-15-31-31-58-49-82Z" fill="#0d7f61" opacity="0.82" />
            <path d="M229 294c32 24 60 55 83 92 14 22 26 51 37 87l-19 15c-16-34-34-62-53-84-18-21-38-41-61-58Z" fill="none" stroke="url(#sareeBorder)" strokeWidth="16" strokeLinecap="round" />
            <path d="M205 531h119" stroke="url(#sareeBorder)" strokeWidth="14" strokeLinecap="round" />
            <path d="M236 248c7-9 16-14 28-16 11 3 19 9 24 18l-7 54-49-1Z" fill="#8b1838" />
            <path d="M245 252c15 8 29 8 42 0" fill="none" stroke="#efc95a" strokeWidth="5" strokeLinecap="round" />

            <path d="M235 266c-27 14-45 38-52 72" fill="none" stroke="url(#skin)" strokeWidth="22" strokeLinecap="round" />
            <path d="M183 338c-7 30-5 62 6 95" fill="none" stroke="url(#skin)" strokeWidth="20" strokeLinecap="round" />
            <path d="M308 262c24 17 41 41 50 72" fill="none" stroke="url(#skin)" strokeWidth="22" strokeLinecap="round" />
            <path d="M358 334c8 31 10 61 4 91" fill="none" stroke="url(#skin)" strokeWidth="20" strokeLinecap="round" />
            <circle cx="186" cy="435" r="12" fill="url(#skin)" />
            <circle cx="361" cy="426" r="12" fill="url(#skin)" />
            <path d="M177 422c8 4 16 4 24 0" stroke="#e9b83f" strokeWidth="5" strokeLinecap="round" />
            <path d="M350 414c8 4 16 4 24 0" stroke="#e9b83f" strokeWidth="5" strokeLinecap="round" />
          </motion.g>

          <motion.g
            animate={{ rotate: [0, 1.8, 0, -1, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '158px 438px' }}
          >
            <path d="M93 382c27-20 71-21 104-4 18 45 20 99 7 162H92c-15-61-15-114 1-158Z" fill="url(#sack)" filter="url(#softShadow)" />
            <path d="M103 384c27 13 55 13 85 0" fill="none" stroke="#9d7843" strokeWidth="6" strokeLinecap="round" />
            <path d="M111 406h70" stroke="#c59b54" strokeWidth="4" strokeDasharray="8 7" />
            <ellipse cx="146" cy="392" rx="38" ry="12" fill="#f4e8c8" />
            <path d="M111 392c20-20 48-20 70 0" fill="#d7bd82" />
            <text x="145" y="468" textAnchor="middle" fontFamily="Georgia, serif" fontSize="24" fontWeight="700" fill="#0b4d9d">MAYIL</text>
            <text x="145" y="489" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" letterSpacing="2" fill="#705427">PREMIUM RICE</text>
          </motion.g>

          <motion.g
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          >
            <ellipse cx="309" cy="532" rx="68" ry="16" fill="#6d4810" opacity="0.35" />
            <path d="M257 489c7 45 96 45 104 0" fill="url(#brass)" />
            <ellipse cx="309" cy="489" rx="53" ry="18" fill="#f5d36e" />
            <ellipse cx="309" cy="488" rx="43" ry="13" fill="#f4efe1" />
            <ellipse cx="398" cy="546" rx="48" ry="13" fill="#6d4810" opacity="0.3" />
            <path d="M360 512c6 33 70 33 76 0" fill="url(#brass)" />
            <ellipse cx="398" cy="512" rx="38" ry="14" fill="#f5d36e" />
            <ellipse cx="398" cy="511" rx="29" ry="10" fill="#f5f0df" />
          </motion.g>

          {grains.map(([cx, cy, r], index) => (
            <motion.ellipse
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              rx={r}
              ry={r * 0.45}
              fill="#f8f3e3"
              animate={{ y: [0, index % 2 === 0 ? -2 : 2, 0] }}
              transition={{ duration: 2.8 + index * 0.05, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </motion.g>

        <motion.g
          fill="#2e7d4f"
          opacity="0.82"
          animate={{ rotate: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '445px 287px' }}
        >
          <path d="M420 322c8-72 34-129 76-171-17 64-24 126-20 186Z" />
          <path d="M433 329c-7-59 1-111 25-158 3 54 13 105 30 151Z" opacity="0.75" />
          <path d="M407 331c20-54 46-94 79-119-18 44-31 88-37 132Z" opacity="0.6" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
