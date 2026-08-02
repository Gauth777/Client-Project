/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Flame, Droplets, Clock, Utensils, Info, CheckCircle2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type CookingMethod = 'pressure-cooker' | 'electric-cooker' | 'open-pot';

interface StageInfo {
  stepNumber: number;
  title: string;
  generalDesc: string;
  methodDesc: Record<CookingMethod, string>;
}

const COOKING_STAGES: StageInfo[] = [
  {
    stepNumber: 1,
    title: 'Measure the Rice',
    generalDesc: 'Use a standard measuring cup for consistent water-to-rice ratios across every meal.',
    methodDesc: {
      'pressure-cooker': 'Measure 1 cup of aged rice for 2-3 standard servings.',
      'electric-cooker': 'Measure using the cup provided with your electric cooker.',
      'open-pot': 'Measure 1 cup of rice into a deep, wide cooking pot.'
    }
  },
  {
    stepNumber: 2,
    title: 'Rinse Gently 2–3 Times',
    generalDesc: 'Wash in cold water with a gentle swirling motion to remove surface starch without breaking the grains.',
    methodDesc: {
      'pressure-cooker': 'Rinse until the water runs mostly clear. Drain completely.',
      'electric-cooker': 'Rinse in a separate bowl to protect your cooker pot lining.',
      'open-pot': 'Swirl gently and drain off starch water thoroughly.'
    }
  },
  {
    stepNumber: 3,
    title: 'Soak When Required',
    generalDesc: 'Soaking allows water to penetrate the kernel, promoting uniform heat distribution and fluffier elongation.',
    methodDesc: {
      'pressure-cooker': 'Soak aged Ponni for 15 to 20 minutes before closing lid.',
      'electric-cooker': 'Soak for 20 to 30 minutes in the cooking water for optimal grain rise.',
      'open-pot': 'Soak for 30 minutes for maximum grain separation.'
    }
  },
  {
    stepNumber: 4,
    title: 'Add Water Proportionately',
    generalDesc: 'Water quantities vary based on variety, age, and cooking method.',
    methodDesc: {
      'pressure-cooker': 'Use 1 : 2.0 or 1 : 2.25 water ratio (1 cup rice to 2–2.25 cups water).',
      'electric-cooker': 'Use 1 : 2.25 to 2.5 water ratio or follow inner pot line markers.',
      'open-pot': 'Use generous water (1 : 4 or 5 ratio) for boiling and draining off surplus.'
    }
  },
  {
    stepNumber: 5,
    title: 'Cook Using Selected Method',
    generalDesc: 'Apply steady heat to transform grain starch into light, fluffy rice.',
    methodDesc: {
      'pressure-cooker': 'Cook on medium flame for 3 whistles. Turn off flame and let pressure drop naturally.',
      'electric-cooker': 'Switch to Cook mode. Allow machine to automatically trip to Warm mode.',
      'open-pot': 'Boil rapidly on open flame for 12–15 minutes until grains are tender. Drain excess water.'
    }
  },
  {
    stepNumber: 6,
    title: 'Rest Before Opening',
    generalDesc: 'Resting lets internal steam equalize, preventing grains from sticking or tearing.',
    methodDesc: {
      'pressure-cooker': 'Rest for 10–12 minutes until steam releases fully.',
      'electric-cooker': 'Leave on Warm mode for 10 minutes without lifting the lid.',
      'open-pot': 'Cover drained pot tightly with lid and let rest off heat for 5 minutes.'
    }
  },
  {
    stepNumber: 7,
    title: 'Fluff and Serve',
    generalDesc: 'Use a soft fork or flat paddle to gently lift and separate the grains.',
    methodDesc: {
      'pressure-cooker': 'Gently slice through rice with a wooden paddle from edges to center.',
      'electric-cooker': 'Fluff gently to release trapped steam and enjoy piping hot.',
      'open-pot': 'Fluff gently for spotless, distinct, pearled grains.'
    }
  }
];

const METHOD_DETAILS: Record<CookingMethod, { name: string; icon: string; ratio: string; time: string; tip: string }> = {
  'pressure-cooker': {
    name: 'Pressure Cooker',
    icon: 'Flame',
    ratio: '1 Cup Rice : 2.0 to 2.25 Cups Water',
    time: '3 Whistles (~12-15 mins)',
    tip: 'Adding 1/2 teaspoon of ghee or oil while closing the cooker prevents froth and keeps grains non-sticky.'
  },
  'electric-cooker': {
    name: 'Electric Rice Cooker',
    icon: 'Sparkles',
    ratio: '1 Cup Rice : 2.25 to 2.5 Cups Water',
    time: 'Auto-Switch (~20 mins)',
    tip: 'Allow the cooker to stay on Warm mode for 10 minutes after switching off to seal in aroma.'
  },
  'open-pot': {
    name: 'Open Pot Boiling',
    icon: 'Utensils',
    ratio: 'Ample Water (1 : 4+)',
    time: '12 - 15 mins boiling',
    tip: 'Draining surplus water after boiling reduces overall starch for a lighter, diabetic-friendly meal.'
  }
};

export default function ProcessSection() {
  const [selectedMethod, setSelectedMethod] = useState<CookingMethod>('pressure-cooker');

  const currentMethod = METHOD_DETAILS[selectedMethod];

  return (
    <div id="process-section-container" className="space-y-12 pb-16 font-sans">
      {/* Page Header */}
      <section className="bg-emerald-950 text-white py-12 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Culinary Excellence</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold">Cooking Instructions</h1>
          <p className="text-emerald-300/80 text-sm max-w-xl mx-auto">Step-by-step cooking guide for perfect, fluffy rice every time.</p>
        </div>
      </section>

      {/* Interactive Method Selector */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-6 text-center">
          <div className="space-y-1">
            <span className="text-xs text-emerald-800 font-bold uppercase tracking-wider block">Choose Your Equipment</span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">Select Cooking Method</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {(['pressure-cooker', 'electric-cooker', 'open-pot'] as CookingMethod[]).map((method) => {
              const active = selectedMethod === method;
              const details = METHOD_DETAILS[method];

              return (
                <button
                  key={method}
                  id={`method-btn-${method}`}
                  onClick={() => setSelectedMethod(method)}
                  className={`p-4 rounded-xl border text-sm font-semibold transition-all duration-200 flex flex-col items-center justify-center space-y-2 ${
                    active
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-md scale-[1.02]'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                  }`}
                >
                  <span className="font-serif font-bold">{details.name}</span>
                  <span className={`text-[10px] font-mono ${active ? 'text-amber-300' : 'text-stone-500'}`}>
                    {details.time}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Method Quick Summary Banner */}
          <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between text-left gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">Recommended Ratio</span>
              <span className="font-semibold text-stone-900 text-sm block">{currentMethod.ratio}</span>
              <p className="text-stone-600 text-xs italic">{currentMethod.tip}</p>
            </div>
            <div className="bg-white px-3 py-1.5 rounded-lg border border-emerald-200 text-xs font-bold text-emerald-800 shrink-0">
              {currentMethod.name}
            </div>
          </div>
        </div>
      </section>

      {/* 7 Animated Cooking Stages Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs text-emerald-800 font-bold uppercase tracking-wider block">Stage by Stage</span>
          <h2 className="font-serif text-2xl font-bold text-stone-900">7 Steps to Perfect Fluffiness</h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMethod}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {COOKING_STAGES.map((stage) => (
              <div
                key={stage.stepNumber}
                id={`cooking-stage-${stage.stepNumber}`}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-5"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white font-serif font-bold text-base flex items-center justify-center shrink-0 shadow-sm">
                  {stage.stepNumber}
                </div>

                <div className="space-y-1 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="font-serif font-bold text-base text-stone-900">{stage.title}</h3>
                    <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-semibold w-fit mt-1 sm:mt-0">
                      Step 0{stage.stepNumber} of 7
                    </span>
                  </div>
                  <p className="text-stone-500 text-xs">{stage.generalDesc}</p>
                  <div className="pt-2 text-stone-800 font-medium text-xs flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mr-1.5 shrink-0" />
                    <span>{stage.methodDesc[selectedMethod]}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Mandatory Disclaimer Note */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-stone-100 border border-stone-200/80 p-4 rounded-xl flex items-start space-x-3 text-stone-600 text-xs leading-relaxed">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p>
            Water requirements may vary according to rice age, variety and cooking appliance. Adjust after the first preparation or follow the instructions printed on the pack.
          </p>
        </div>
      </section>
    </div>
  );
}
