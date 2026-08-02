/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, MapPin, Phone, Mail, Award, Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { APP_INFO } from '../data';
import logoImg from '../assets/logo/mayil-logo.jpeg';
import paddyFieldPhoto from '../assets/Just dial/paddy.png';

interface HomeSectionProps {
  onNavigate: (tabId: string) => void;
  onSelectProduct: (product: any) => void;
  openDealerModal: () => void;
}

export default function HomeSection({ onNavigate, openDealerModal }: HomeSectionProps) {
  return (
    <div id="home-section-container" className="space-y-16 pb-16 font-sans">
      {/* 1. Hero Section */}
      <section
        id="home-hero"
        className="relative bg-gradient-to-b from-stone-100 via-stone-50 to-white py-12 sm:py-20 border-b border-stone-200 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Narrative */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Mayil Logo Hero Badge */}
              <div className="inline-flex items-center space-x-3 bg-white p-2.5 sm:p-3 rounded-2xl border border-stone-200 shadow-md">
                <div className="w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] bg-white rounded-xl border border-stone-100 overflow-hidden flex items-center justify-center shrink-0">
                  <img
                    src={logoImg}
                    alt="Mayil Brand Logo - Sri Kannika Parameswari Rice Mill"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left pr-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 block">
                    Mayil Brand Rice
                  </span>
                  <span className="font-serif font-bold text-stone-900 text-sm sm:text-base block">
                    Sri Kannika Parameswari
                  </span>
                  <span className="text-[11px] text-stone-500 block">
                    Modern Rice Mill • Est. 2011
                  </span>
                </div>
              </div>

              {/* Main Hero Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight text-stone-900 font-bold">
                Pure Delta Grains,<br />
                <span className="text-emerald-800 font-normal italic">Timeless Quality.</span>
              </h1>

              {/* Factual Introduction */}
              <p className="text-stone-600 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light mx-auto lg:mx-0">
                Located in Kallakurichi, Tamil Nadu, Sri Kannika Parameswari Modern Rice Mill produces high-quality Ponni rice varieties processed through advanced optical color-sorting technology.
              </p>

              {/* Hero Call To Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  id="hero-products-btn"
                  onClick={() => onNavigate('products')}
                  className="w-full sm:w-auto px-8 py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-200 active:scale-95 shadow-md flex items-center justify-center space-x-2"
                >
                  <span>View Our Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  id="hero-quote-btn"
                  onClick={() => onNavigate('quote')}
                  className="w-full sm:w-auto px-8 py-3.5 border border-emerald-800 text-emerald-800 hover:bg-emerald-800/10 font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-200 active:scale-95 flex items-center justify-center"
                >
                  <span>Get a Quote</span>
                </button>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 aspect-[4/3] bg-stone-100 group">
                <img
                  src={paddyFieldPhoto}
                  alt="Sourced paddy fields"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">
                      Quality Sourced
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold">Cauvery Basin Heritage</h3>
                    <p className="text-stone-300 text-xs leading-relaxed">
                      Sourced from regional Tamil Nadu paddy fields and milled with strict quality standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Concise Company Introduction Section */}
      <section id="home-intro" className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-stone-200 shadow-sm space-y-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-stone-100 pb-6 gap-4">
            <div>
              <span className="text-xs text-emerald-800 font-bold uppercase tracking-wider block">
                About S.K.P. Modern Rice Mill
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Delivering Excellence in Every Grain
              </h2>
            </div>
            <button
              id="home-learn-about-btn"
              onClick={() => onNavigate('about')}
              className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg transition-colors shrink-0"
            >
              Learn More About Us
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-600 text-sm leading-relaxed">
            <p>
              Sri Kannika Parameswari Modern Rice Mill was established in 2011 with a commitment to providing clean, uniform, and delicious rice for South Indian households and commercial kitchens. Our facility in Kallakurichi combines traditional agricultural expertise with automated cleaning systems.
            </p>
            <p>
              From pre-cleaning and de-stoning to optical color sorting and food-grade packaging, every stage is designed to deliver stone-free, spotless grains. We offer reliable supply for families, wholesalers, and food service partners.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-center border-t border-stone-100">
            <div className="p-3 bg-stone-50 rounded-xl">
              <span className="font-serif text-xl font-bold text-emerald-800 block">2011</span>
              <span className="text-[10px] text-stone-500 font-semibold uppercase">Established Year</span>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl">
              <span className="font-serif text-xl font-bold text-emerald-800 block">Sortex</span>
              <span className="text-[10px] text-stone-500 font-semibold uppercase">Optical Sorting</span>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl">
              <span className="font-serif text-xl font-bold text-emerald-800 block">100%</span>
              <span className="text-[10px] text-stone-500 font-semibold uppercase">Stone-Free Guarantee</span>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl">
              <span className="font-serif text-xl font-bold text-emerald-800 block">4 Brands</span>
              <span className="text-[10px] text-stone-500 font-semibold uppercase">Rice Varieties</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Customer Google Reviews CTA Section */}
      <section id="home-google-reviews" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-emerald-950 text-white p-8 sm:p-10 rounded-2xl border border-emerald-900 shadow-xl text-center space-y-6 relative overflow-hidden">
          <div className="space-y-3 relative z-10">
            {/* Google-style review iconography */}
            <div className="flex items-center justify-center space-x-1.5 text-amber-400">
              <Star className="w-6 h-6 fill-amber-400" />
              <Star className="w-6 h-6 fill-amber-400" />
              <Star className="w-6 h-6 fill-amber-400" />
              <Star className="w-6 h-6 fill-amber-400" />
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">Customer Feedback & Reviews</h3>
            <p className="text-emerald-200/90 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              We take pride in delivering consistent quality to our customers. Visit our official Google Business page to read genuine customer reviews, location directions, and feedback.
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <a
              id="view-google-reviews-btn"
              href={APP_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg active:scale-95"
            >
              <span>View Reviews on Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="text-[10px] text-emerald-400 font-mono relative z-10">
            <span>Verified Google Maps Location • Kallakurichi, Tamil Nadu</span>
          </div>
        </div>
      </section>
    </div>
  );
}
