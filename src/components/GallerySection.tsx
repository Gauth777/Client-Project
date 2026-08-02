/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, BookOpen, Check, X, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import authorizedPhoto from '../assets/Just dial/Authorized.png';
import riceBagsPhoto from '../assets/Just dial/Rice bags.png';

interface QualityFactor {
  title: string;
  goodIndicator: string;
  warningSign: string;
  whyItMatters: string;
}

const QUALITY_FACTORS: QualityFactor[] = [
  {
    title: 'Grain Uniformity',
    goodIndicator: 'Consistent grain size, shape, and length across the pack.',
    warningSign: 'Mixed sizes, chalky white patches, or broken fragments.',
    whyItMatters: 'Uniform grains cook evenly at the exact same rate.'
  },
  {
    title: 'Natural Colour',
    goodIndicator: 'Translucent pearlescent white or light golden tint.',
    warningSign: 'Unnatural bright white, yellowed tint, or black specks.',
    whyItMatters: 'Natural luster reflects proper post-harvest drying and mist polishing.'
  },
  {
    title: 'Low Broken Grain Ratio',
    goodIndicator: 'Whole unbroken grains exceeding 98.5% of the total volume.',
    warningSign: 'Excessive small broken chips and fine rice dust.',
    whyItMatters: 'Broken grains release excess starch, making cooked rice sticky.'
  },
  {
    title: 'Clean Aroma',
    goodIndicator: 'Fresh, sweet natural grain fragrance.',
    warningSign: 'Musty, sour, or damp chemical smell.',
    whyItMatters: 'Clean aroma indicates fresh milling and hygienic storage.'
  },
  {
    title: 'Absence of Impurities',
    goodIndicator: '100% stone-free, chaff-free, and bug-free pack.',
    warningSign: 'Presence of small pebbles, mud particles, or insect webbing.',
    whyItMatters: 'Sortex optical cleaning isolates foreign contaminants before packing.'
  },
  {
    title: 'Moisture Balance & Dryness',
    goodIndicator: 'Dry, free-flowing grains without clumping.',
    warningSign: 'Clumping grains or damp condensation inside bag.',
    whyItMatters: 'Correct moisture (12-13.5%) prevents warehouse mold and extends shelf life.'
  },
  {
    title: 'Cooking Result & Grain Separation',
    goodIndicator: 'Fluffy, non-sticky grains that expand up to 2.5x upon cooking.',
    warningSign: 'Mushy, pasty texture where grains clump together.',
    whyItMatters: 'High-quality aged Ponni holds its shape and separates cleanly.'
  },
  {
    title: 'Proper Storage Practices',
    goodIndicator: 'Stored in clean, airtight containers off damp floors.',
    warningSign: 'Open sacks exposed to humidity, sunlight, or pests.',
    whyItMatters: 'Protects rice from absorbing surrounding kitchen moisture.'
  }
];

interface KnowledgeTopic {
  id: string;
  title: string;
  content: string;
}

const RICE_KNOWLEDGE_TOPICS: KnowledgeTopic[] = [
  {
    id: 'raw-vs-boiled',
    title: 'Raw Rice vs. Boiled Rice',
    content: 'Raw rice is milled directly from harvested paddy, keeping its delicate natural sweetness and lightweight texture. Boiled rice undergoes steam-tempering before husking, gelatinizing the inner starch to create firmer grains rich in retained nutrients.'
  },
  {
    id: 'aged-rice',
    title: 'Why Aged Rice Behaves Differently',
    content: 'As raw rice ages for 12 to 18 months, moisture content decreases naturally. This alters the starch matrix, allowing grains to absorb more water during cooking without breaking, resulting in extra long, fluffy, non-sticky rice.'
  },
  {
    id: 'rinsing-benefits',
    title: 'Why Rinsing is Recommended',
    content: 'Rinsing raw rice 2 to 3 times in cold water removes surface micro-starch dust generated during milling friction. Eliminating this free starch prevents cooked grains from clumping together.'
  },
  {
    id: 'soaking-effect',
    title: 'The Effect of Soaking',
    content: 'Soaking rice in water for 15–30 minutes before heating allows moisture to penetrate to the grain core. This leads to uniform heat transfer and maximum length expansion during cooking.'
  },
  {
    id: 'moisture-storage',
    title: 'How Moisture Affects Storage',
    content: 'Rice milled and packed at an ideal dry moisture level (12–13.5%) is naturally resistant to fungal mold and insect infestation. Excess humidity in storage can trigger rapid spoilage.'
  },
  {
    id: 'safe-home-storage',
    title: 'How to Store Rice Safely at Home',
    content: 'Transfer rice into a clean, airtight stainless steel or food-grade plastic container immediately after opening the bag. Keep the container elevated off cold floors in a cool, dry pantry.'
  },
  {
    id: 'broken-texture',
    title: 'Why Grain Breakage Influences Texture',
    content: 'Intact rice kernels hold their starch inside during boiling. When broken kernels are present, starch leaks into the cooking water, turning the meal sticky and mushy.'
  }
];

export default function GallerySection() {
  const [activeKnowledgeId, setActiveKnowledgeId] = useState<string>('raw-vs-boiled');

  return (
    <div id="quality-section-container" className="space-y-16 pb-16 font-sans">
      {/* Page Header */}
      <section className="bg-emerald-950 text-white py-12 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Educational Buyer Guide</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold">Quality Identification</h1>
          <p className="text-emerald-300/80 text-sm max-w-xl mx-auto">Learn how to evaluate genuine high-quality rice before and after cooking.</p>
        </div>
      </section>

      {/* 1. Good Quality vs. Warning Signs Comparison Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs text-emerald-800 font-bold uppercase tracking-wider block">Consumer Guide</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">Good Quality vs. Warning Signs</h2>
          <p className="text-stone-500 text-xs max-w-md mx-auto">Use these simple visual and sensory benchmarks to verify premium rice.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {QUALITY_FACTORS.map((factor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg text-stone-900 border-b border-stone-100 pb-2">
                  {factor.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {/* Good Indicator */}
                  <div className="bg-emerald-50/70 border border-emerald-100 p-3 rounded-xl space-y-1 text-emerald-950">
                    <span className="font-bold text-[10px] uppercase tracking-wider text-emerald-800 flex items-center">
                      <Check className="w-3.5 h-3.5 text-emerald-700 mr-1 shrink-0" />
                      <span>Good Quality</span>
                    </span>
                    <p className="text-[11px] leading-relaxed">{factor.goodIndicator}</p>
                  </div>

                  {/* Warning Sign */}
                  <div className="bg-rose-50/70 border border-rose-100 p-3 rounded-xl space-y-1 text-rose-950">
                    <span className="font-bold text-[10px] uppercase tracking-wider text-rose-800 flex items-center">
                      <X className="w-3.5 h-3.5 text-rose-700 mr-1 shrink-0" />
                      <span>Warning Sign</span>
                    </span>
                    <p className="text-[11px] leading-relaxed">{factor.warningSign}</p>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-stone-500 italic pt-2 border-t border-stone-100">
                <span className="font-semibold text-stone-700 font-sans">Why it matters: </span>
                <span>{factor.whyItMatters}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Visual Quality Proof Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200/80 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div className="rounded-xl overflow-hidden shadow-sm aspect-video border border-stone-200 bg-white">
            <img src={authorizedPhoto} alt="Quality Inspection Floor" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-3 text-stone-700">
            <span className="text-xs text-emerald-800 font-bold uppercase tracking-wider block">Purity Assurance</span>
            <h3 className="font-serif text-xl font-bold text-stone-900">Sortex Optical Cleaning</h3>
            <p className="text-xs leading-relaxed">
              Every pack from Sri Kannika Parameswari undergoes optical color sorting to eliminate defective grains, discoloration, and foreign stones before sealing.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Animated Rice Knowledge Module */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs text-emerald-800 font-bold uppercase tracking-wider flex items-center justify-center">
            <BookOpen className="w-4 h-4 mr-1.5" />
            <span>Interactive Guide</span>
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">Rice Knowledge Module</h2>
          <p className="text-stone-500 text-xs max-w-md mx-auto">Click any topic below to learn essential rice handling and storage facts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Topic Selector Tabs (Left) */}
          <div className="md:col-span-5 space-y-2">
            {RICE_KNOWLEDGE_TOPICS.map((topic) => {
              const active = activeKnowledgeId === topic.id;
              return (
                <button
                  key={topic.id}
                  id={`knowledge-tab-${topic.id}`}
                  onClick={() => setActiveKnowledgeId(topic.id)}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs font-semibold transition-all duration-200 flex items-center justify-between ${
                    active
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-md font-bold'
                      : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-200'
                  }`}
                >
                  <span>{topic.title}</span>
                  <span className={`text-sm ${active ? 'text-amber-400' : 'text-stone-300'}`}>→</span>
                </button>
              );
            })}
          </div>

          {/* Active Topic Content Display (Right) */}
          <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm min-h-[220px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {RICE_KNOWLEDGE_TOPICS.filter((t) => t.id === activeKnowledgeId).map((topic) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="inline-flex items-center space-x-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    <Sparkles className="w-3 h-3 text-emerald-700" />
                    <span>Rice Fact</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-stone-900">{topic.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">{topic.content}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
