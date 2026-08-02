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
  Leaf,
  Sprout,
  Star,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import { APP_INFO } from '../data';
import { Product } from '../types';
import FacilityCarousel from './FacilityCarousel';
import HeroAgrarianScene from './HeroAgrarianScene';
import MillingProcess from './MillingProcess';

interface HomeSectionProps {
  onNavigate: (tabId: string) => void;
  onSelectProduct: (product: Product) => void;
  openDealerModal: () => void;
}

const HERO_CREDENTIALS = [
  { value: '2011', label: 'Milling Legacy' },
  { value: 'ISO 22000:2018', label: 'Food Safety Standard' },
  { value: 'FSSAI', label: 'Food Safety Registration' },
];

const FLOATING_LEAVES = [
  { left: '4%', top: '34%', delay: 0.2, size: 17 },
  { left: '92%', top: '38%', delay: 1.1, size: 14 },
  { left: '7%', top: '62%', delay: 0.7, size: 15 },
  { left: '89%', top: '69%', delay: 1.5, size: 18 },
  { left: '5%', top: '86%', delay: 0.4, size: 13 },
  { left: '94%', top: '90%', delay: 1.2, size: 16 },
];

const GOOGLE_REVIEWS = [
  {
    name: 'Venugopal Raghavan',
    text: 'Best quality in the market and on-time delivery.',
  },
  {
    name: 'Saran Raj',
    text: 'Quality is very good — a trustworthy mill.',
  },
  {
    name: 'Vijay Kumar',
    text: 'Good product and response.',
  },
  {
    name: 'Latha',
    text: 'Good quality rice and best service.',
  },
];

export default function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <div id="home-section-container" className="relative space-y-20 overflow-hidden pb-16">
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {FLOATING_LEAVES.map((leaf, index) => (
          <motion.div
            key={`floating-leaf-${index}`}
            className="absolute z-0 text-emerald-800/[0.07]"
            style={{ left: leaf.left, top: leaf.top }}
            animate={{ y: [0, -9, 0], rotate: [0, 12, -8, 0] }}
            transition={{
              duration: 5.6 + index * 0.45,
              repeat: Infinity,
              delay: leaf.delay,
              ease: 'easeInOut',
            }}
          >
            <Leaf style={{ width: leaf.size, height: leaf.size }} />
          </motion.div>
        ))}
      </div>

      <section
        id="home-hero"
        className="relative overflow-hidden border-b border-stone-200 bg-[linear-gradient(180deg,#f5faee_0%,#fffdf8_48%,#ffffff_100%)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(116,173,70,0.14),transparent_31%),radial-gradient(circle_at_top_right,rgba(239,185,55,0.13),transparent_26%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex rounded-full bg-emerald-900 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.26em] text-white"
            >
              Since 2011 • Kallakurichi
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.08 }}
              className="mt-5 font-serif text-4xl font-light leading-[1.04] text-stone-900 sm:text-5xl lg:text-6xl"
            >
              From fertile fields,
              <br />
              <span className="font-normal italic text-amber-600">to every family table.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.15 }}
              className="mt-5 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base"
            >
              A colourful journey inspired by Tamil agricultural life — hardworking hands in the paddy field, carefully packed rice at the centre, and the warmth of a freshly cooked meal at home.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.22 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <button
                id="hero-products-btn"
                type="button"
                onClick={() => onNavigate('products')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-emerald-700 active:scale-95"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                id="hero-contact-btn"
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center rounded-full border border-amber-500 bg-white/80 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-amber-700 transition-all hover:bg-amber-50 active:scale-95"
              >
                Contact Us
              </button>
            </motion.div>
          </div>

          <div className="mt-10 lg:mt-12">
            <HeroAgrarianScene />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mx-auto mt-8 grid max-w-4xl grid-cols-1 divide-y divide-stone-200 border-y border-stone-200 bg-white/65 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          >
            {HERO_CREDENTIALS.map((item) => (
              <div key={item.value} className="px-5 py-5 text-center">
                <div className="font-serif text-xl font-bold text-emerald-950 sm:text-2xl">{item.value}</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-amber-700">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="home-facility-carousel" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 space-y-1.5 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Where It All Happens</span>
          <h2 className="font-serif text-2xl font-bold text-stone-900 sm:text-3xl">Inside Our Facility</h2>
        </div>
        <FacilityCarousel />
      </section>

      <section id="home-intro-about" className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
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

      <div className="relative z-10">
        <MillingProcess onNavigate={onNavigate} />
      </div>

      <section id="home-operational-values" className="relative z-10 mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
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

      <section id="home-google-reviews" className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[28px] border border-emerald-900 bg-emerald-950 p-7 text-white shadow-xl sm:p-10">
          <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full border border-amber-300/15" />
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-1.5 text-amber-400">
              {[0, 1, 2, 3, 4].map((star) => (
                <Star key={star} className="h-5 w-5 fill-amber-400 sm:h-6 sm:w-6" />
              ))}
            </div>
            <span className="mt-4 block text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Google Customer Reviews</span>
            <h2 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">What customers have shared</h2>
            <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-emerald-200/90 sm:text-sm">
              Select any review to open the mill’s Google Business listing and view the public feedback directly.
            </p>
          </div>

          <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GOOGLE_REVIEWS.map((review) => (
              <a
                key={review.name}
                href={APP_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-48 flex-col justify-between rounded-2xl border border-emerald-700/60 bg-white/[0.07] p-5 text-left transition-all hover:-translate-y-1 hover:border-amber-400/70 hover:bg-white/[0.11]"
                aria-label={`Open ${review.name}'s review on Google`}
              >
                <div>
                  <div className="flex gap-0.5 text-amber-400">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-3.5 w-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-emerald-50">“{review.text}”</p>
                </div>
                <div className="mt-5 flex items-end justify-between gap-3 border-t border-emerald-700/50 pt-4">
                  <span className="text-xs font-bold text-white">{review.name}</span>
                  <ExternalLink className="h-4 w-4 text-emerald-300 transition-colors group-hover:text-amber-300" />
                </div>
              </a>
            ))}
          </div>

          <div className="relative z-10 mt-8 text-center">
            <a
              id="view-google-reviews-btn"
              href={APP_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-950 shadow-lg transition-colors hover:bg-amber-400 active:scale-95"
            >
              View All Reviews on Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
