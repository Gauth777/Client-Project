/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  ArrowRight,
  Award,
  ChevronRight,
  Cpu,
  ExternalLink,
  Sprout,
  Star,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import { APP_INFO } from '../data';
import { Product } from '../types';
import FacilityCarousel from './FacilityCarousel';
import MillingProcess from './MillingProcess';
import TraditionalRiceWoman from './TraditionalRiceWoman';

interface HomeSectionProps {
  onNavigate: (tabId: string) => void;
  onSelectProduct: (product: Product) => void;
  openDealerModal: () => void;
}

const STATS = [
  { value: '15+ Years', label: 'Milling Legacy', desc: 'Established in 2011 in Kallakurichi' },
  { value: '150 Tons', label: 'Daily Processing', desc: 'Automated high-capacity continuous lines' },
  { value: '250+ Farms', label: 'Partner Sourcing', desc: 'Regional paddy sourcing network' },
  { value: 'Sortex', label: 'Grain Selection', desc: 'Optical sorting for consistent grain quality' },
];

const PARTICLES = [
  { left: '8%', top: '15%', delay: 0.5, duration: 11, size: 24 },
  { left: '42%', top: '78%', delay: 2.2, duration: 14, size: 18 },
  { left: '78%', top: '12%', delay: 1.1, duration: 9, size: 20 },
  { left: '88%', top: '65%', delay: 3.5, duration: 16, size: 28 },
  { left: '22%', top: '85%', delay: 1.8, duration: 12, size: 16 },
];

export default function HomeSection({ onNavigate, openDealerModal }: HomeSectionProps) {
  return (
    <div id="home-section-container" className="space-y-20 pb-16">
      <section
        id="home-hero"
        className="relative flex min-h-[85vh] flex-col overflow-hidden border-b border-stone-200 lg:min-h-[80vh] lg:flex-row"
      >
        <div className="relative z-10 flex w-full flex-col justify-center overflow-hidden bg-stone-50 p-6 sm:p-12 lg:w-3/5 lg:p-16">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:24px_24px]" />
          </div>

          {PARTICLES.map((particle, index) => (
            <motion.div
              key={`hero-left-particle-${index}`}
              className="pointer-events-none absolute z-0 select-none text-emerald-800/10"
              style={{ left: particle.left, top: particle.top }}
              animate={{ y: [0, -25, 0], x: [0, 8, 0], rotate: [0, 20, -20, 0] }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeInOut',
              }}
            >
              <Sprout className="opacity-65" style={{ width: particle.size, height: particle.size }} />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="z-10 mb-6"
          >
            <span className="rounded-sm bg-emerald-800 px-3.5 py-1.5 text-[10px] font-bold uppercase italic tracking-[0.25em] text-stone-50">
              Since 2011 • Kallakurichi
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="z-10 mb-6 font-serif text-4xl font-light leading-[1.05] text-stone-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Pure Delta Grains,
            <br />
            <span className="font-normal italic text-amber-500">Timeless Traditions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="z-10 mb-8 max-w-xl text-sm font-light leading-relaxed text-stone-700 sm:text-base md:text-lg"
          >
            Celebrating the agricultural heritage of Tamil Nadu. Our modern rice mill in Kallakurichi combines careful paddy selection with contemporary processing to bring dependable Ponni rice to every table.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="z-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <button
              id="hero-products-btn"
              type="button"
              onClick={() => onNavigate('products')}
              className="flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-stone-50 shadow-md transition-all duration-200 hover:bg-emerald-700 active:scale-95"
            >
              <span>Explore Products</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              id="hero-dealer-btn"
              type="button"
              onClick={openDealerModal}
              className="flex items-center justify-center rounded-full border border-emerald-800 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-emerald-800 transition-all duration-200 hover:bg-emerald-800/5 active:scale-95"
            >
              Become a Distributor
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.32 }}
            className="z-10 mt-10 flex flex-wrap items-center gap-6 border-t border-stone-200/80 pt-8 sm:gap-10"
          >
            <div>
              <div className="font-serif text-xl font-bold text-emerald-800 sm:text-2xl">2011</div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-stone-500">Milling Legacy</div>
            </div>
            <div className="hidden h-8 w-px bg-stone-200 sm:block" />
            <div>
              <div className="font-serif text-xl font-bold text-emerald-800 sm:text-2xl">Mayil</div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-stone-500">Signature Brand</div>
            </div>
            <div className="hidden h-8 w-px bg-stone-200 sm:block" />
            <div>
              <div className="font-serif text-xl font-bold text-emerald-800 sm:text-2xl">Ponni</div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-stone-500">Selected Rice</div>
            </div>
          </motion.div>
        </div>

        <div className="relative flex min-h-[520px] w-full flex-col justify-between overflow-hidden bg-emerald-950 p-7 text-left sm:p-10 lg:min-h-auto lg:w-2/5 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(245,190,59,0.28),transparent_38%),linear-gradient(155deg,#064e3b_0%,#06372d_48%,#031e1a_100%)]" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-amber-300/20" />
          <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-amber-300/20" />
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-emerald-950 to-transparent" />

          {PARTICLES.map((particle, index) => (
            <motion.div
              key={`hero-right-particle-${index}`}
              className="pointer-events-none absolute z-10 select-none text-amber-300/15"
              style={{ left: `${100 - Number.parseFloat(particle.left)}%`, top: particle.top }}
              animate={{ y: [0, -30, 0], x: [0, -8, 0], rotate: [0, -15, 15, 0] }}
              transition={{
                duration: particle.duration * 1.1,
                repeat: Infinity,
                delay: particle.delay * 0.8,
                ease: 'easeInOut',
              }}
            >
              <Sprout style={{ width: particle.size, height: particle.size }} />
            </motion.div>
          ))}

          <div className="relative z-20 self-end text-right">
            <div className="font-serif text-[68px] font-bold leading-none text-stone-50/15 sm:text-[80px]">01</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">The Gold Standard</div>
          </div>

          <div className="relative z-10 -mx-4 -mb-3 mt-[-20px] flex flex-1 items-end justify-center sm:-mx-2">
            <TraditionalRiceWoman />
          </div>

          <div className="relative z-20 mt-auto max-w-sm pt-3">
            <h3 className="mb-2 font-serif text-2xl italic text-stone-50">From tradition to every table</h3>
            <p className="text-xs leading-relaxed text-stone-300">
              A celebration of South Indian food culture, carefully selected grains and the warmth of meals shared at home.
            </p>
          </div>
        </div>
      </section>

      <section id="home-stats" className="relative z-10 -mt-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col justify-between rounded-xl border border-stone-200/80 bg-white p-6 shadow-lg shadow-stone-100"
            >
              <div>
                <span className="block font-serif text-3xl font-extrabold tracking-tight text-emerald-800">{stat.value}</span>
                <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-stone-900">{stat.label}</span>
              </div>
              <p className="mt-3 border-t border-stone-100 pt-2.5 text-xs leading-relaxed text-stone-500">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="home-facility-carousel" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 space-y-1.5 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Where It All Happens</span>
          <h2 className="font-serif text-2xl font-bold text-stone-900 sm:text-3xl">Inside Our Facility</h2>
        </div>
        <FacilityCarousel />
      </section>

      <section id="home-intro-about" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="space-y-6 lg:col-span-5">
          <div className="space-y-2">
            <span className="flex items-center text-xs font-bold uppercase tracking-wider text-emerald-800">
              <Sprout className="mr-1.5 h-4 w-4" />
              Sustaining years of trust
            </span>
            <h2 className="font-serif text-2xl font-bold leading-tight text-stone-900 sm:text-3xl md:text-4xl">
              Honouring Tamil agricultural wisdom
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-stone-600">
            Sri Kannika Parameswari Modern Rice Mill brings together local agricultural knowledge and disciplined processing to deliver consistent rice for homes, retailers and commercial kitchens.
          </p>
          <p className="text-sm leading-relaxed text-stone-600">
            From paddy selection and cleaning to sorting and packaging, each stage is handled with attention to grain quality, hygiene and reliable supply.
          </p>
          <button
            id="home-about-learn-more"
            type="button"
            onClick={() => onNavigate('about')}
            className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-emerald-800 transition-colors hover:bg-emerald-100 hover:text-emerald-700"
          >
            Our Mill Story
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-7">
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden rounded-xl border border-stone-200 bg-stone-100 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1557703913-d2b0cbf82722?q=80&w=900&auto=format&fit=crop"
                alt="Rice harvest"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="space-y-2 rounded-xl bg-emerald-900 p-6 text-emerald-100">
              <span className="block font-serif text-lg font-bold text-white">Regional Paddy Selection</span>
              <span className="block text-[11px] leading-relaxed text-emerald-300">
                Paddy is selected with close attention to variety, condition and suitability for consistent milling.
              </span>
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="space-y-2 rounded-xl bg-amber-600 p-6 text-amber-50">
              <span className="block font-serif text-lg font-bold text-white">Modern Grain Sorting</span>
              <span className="block text-[11px] leading-relaxed text-amber-100">
                Optical sorting supports cleaner, more uniform grains across finished batches.
              </span>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-xl border border-stone-200 bg-stone-100 shadow-md">
              <img
                src="https://plus.unsplash.com/premium_photo-1664117187648-5c84f3ea6b03?w=900&auto=format&fit=crop&q=80"
                alt="Paddy field"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <MillingProcess onNavigate={onNavigate} />

      <section id="home-operational-values" className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-1.5 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Quality Assurance</span>
          <h2 className="font-serif text-2xl font-bold text-stone-900 sm:text-3xl">Care at every stage</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              icon: Cpu,
              title: 'Optical Grain Sorting',
              text: 'Modern sorting equipment helps separate visible grain defects and supports consistent finished batches.',
            },
            {
              icon: Award,
              title: 'Process Discipline',
              text: 'Cleaning, milling and packaging stages are organised to support hygiene and reliable day-to-day production.',
            },
            {
              icon: Users,
              title: 'Customer Relationships',
              text: 'The mill serves households, retailers and trade partners with an emphasis on dependable supply and service.',
            },
          ].map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4 p-4 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 shadow-sm">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">{title}</h3>
              <p className="mx-auto max-w-xs text-xs leading-relaxed text-stone-600">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="home-google-reviews" className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-emerald-900 bg-emerald-950 p-8 text-center text-white shadow-xl sm:p-10">
          <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full border border-amber-300/15" />
          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-center gap-1.5 text-amber-400">
              {[0, 1, 2, 3, 4].map((star) => (
                <Star key={star} className="h-5 w-5 fill-amber-400 sm:h-6 sm:w-6" />
              ))}
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Customer Experiences</span>
              <h2 className="font-serif text-2xl font-bold sm:text-3xl">Read genuine customer feedback</h2>
              <p className="mx-auto max-w-xl text-xs leading-relaxed text-emerald-200/90 sm:text-sm">
                Visit the official Google Business listing for customer reviews, location details and directions to the mill.
              </p>
            </div>
            <a
              id="view-google-reviews-btn"
              href={APP_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-950 shadow-lg transition-colors hover:bg-amber-400 active:scale-95"
            >
              View Reviews on Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
