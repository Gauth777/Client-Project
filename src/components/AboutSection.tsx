/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react'
import {
  Award,
  ShieldCheck,
  Sparkles,
  MapPin,
  HeartHandshake,
  CheckCircle,
} from 'lucide-react'
import { motion } from 'motion/react'
import { APP_INFO } from '../data'
import paddyFieldPhoto from '../assets/Just dial/paddy.png'

export default function AboutSection() {
  const reasons = [
    {
      icon: <Award className='w-6 h-6 text-emerald-800' />,
      title: 'Product Quality',
      desc: 'Our rice varieties are carefully processed and naturally aged to deliver delightful aroma, fluffy texture, and non-sticky cooking results.',
    },
    {
      icon: <Sparkles className='w-6 h-6 text-emerald-800' />,
      title: 'Clean Processing',
      desc: 'Equipped with multi-stage pre-cleaners, de-stoners, and optical color sorters to ensure 100% stone-free and dust-free grains.',
    },
    {
      icon: <ShieldCheck className='w-6 h-6 text-emerald-800' />,
      title: 'Consistent Grain Selection',
      desc: 'Strict raw paddy selection standards ensure uniform grain length, low breakage, and dependable cooking performance batch after batch.',
    },
    {
      icon: <MapPin className='w-6 h-6 text-emerald-800' />,
      title: 'Trusted Local Presence',
      desc: 'Serving Kallakurichi and surrounding regions since 2011, building long-standing trust with retail families and wholesalers.',
    },
    {
      icon: <HeartHandshake className='w-6 h-6 text-emerald-800' />,
      title: 'Customer-Focused Service',
      desc: 'Dedicated to fair pricing, transparent specifications, and responsive support for individual buyers and bulk distributors.',
    },
  ]

  return (
    <div id='about-section-container' className='space-y-16 pb-16 font-sans'>
      {/* Page Header */}
      <section className='bg-emerald-950 text-white py-12 border-b-4 border-amber-500'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3'>
          <span className='text-xs text-amber-400 font-bold uppercase tracking-wider'>
            About Sri Kannika Parameswari Rice Mill
          </span>
          <h1 className='font-serif text-3xl sm:text-4xl font-bold'>
            Why Choose Sri Kannika Parameswari Rice Mill?
          </h1>
          <p className='text-emerald-300/80 text-sm max-w-xl mx-auto'>
            Committed to quality, hygiene, and authentic Tamil agricultural
            heritage since 2011.
          </p>
        </div>
      </section>

      {/* Company Overview Narrative */}
      <section className='max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center'>
        <div className='lg:col-span-7 space-y-5'>
          <span className='text-xs text-emerald-800 font-bold uppercase tracking-wider block'>
            Established 2011 • Kallakurichi, Tamil Nadu
          </span>
          <h2 className='font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight'>
            A Legacy of Quality and Trust
          </h2>
          <p className='text-stone-600 text-sm leading-relaxed font-sans'>
            Sri Kannika Parameswari Modern Rice Mill was founded in 2011 with a
            clear mission: to supply households, caterers, and wholesalers with
            unadulterated, premium-quality rice. Located in Kallakurichi, our
            facility combines agricultural expertise with modern mechanical
            processing.
          </p>
          <p className='text-stone-600 text-sm leading-relaxed font-sans'>
            We focus on clean processing, hygienic handling, and consistent
            grain quality. By carefully selecting paddy and maintaining strict
            moisture and cleaning controls, we ensure every bag meets standard
            expectations for aroma and taste.
          </p>
        </div>

        <div className='lg:col-span-5 aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-stone-100 relative'>
          <img
            src={paddyFieldPhoto}
            alt='Paddy sourcing fields'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-5'>
            <div className='text-white text-xs space-y-0.5'>
              <span className='font-bold block'>
                Sri Kannika Parameswari Mill
              </span>
              <span className='text-stone-300 block'>{APP_INFO.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Animated "Why Choose Us" Cards */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10'>
        <div className='text-center space-y-2'>
          <span className='text-xs text-emerald-800 font-bold uppercase tracking-wider'>
            Our Core Strengths
          </span>
          <h2 className='font-serif text-2xl sm:text-3xl font-bold text-stone-900'>
            Why Us?
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className='bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-4 hover:shadow-md transition-shadow'
            >
              <div className='w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-100'>
                {reason.icon}
              </div>
              <h3 className='font-serif font-bold text-lg text-stone-900'>
                {reason.title}
              </h3>
              <p className='text-stone-600 text-xs leading-relaxed border-t border-stone-100 pt-3 font-sans'>
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
