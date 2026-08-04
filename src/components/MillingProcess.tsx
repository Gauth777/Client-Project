/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Droplets,
  Timer,
  Flame,
  Sparkles,
  Utensils,
  ChevronRight,
  FileCheck,
  Leaf,
  QrCode,
} from 'lucide-react'

interface MillingProcessProps {
  onNavigate: (tabId: string) => void
}

interface CookingStep {
  id: number
  title: string
  subtitle: string
  ratio: string
  time: string
  icon: React.ElementType
  badge: string
  badgeClass: string
  iconClass: string
  description: string
  tips: string[]
}

const COOKING_STEPS: CookingStep[] = [
  {
    id: 1,
    title: 'Rinse Thoroughly',
    subtitle: 'Wash away excess surface starch',
    ratio: '2 - 3 Times',
    time: '2 mins',
    icon: Droplets,
    badge: 'Clean Preparation',
    badgeClass: 'bg-blue-100 text-blue-800',
    iconClass: 'text-blue-700',
    description:
      'Gentle hand-washing removes loose powder without stripping essential nutrients from the grain.',
    tips: [
      'Gently rub grains between palms in cold water',
      'Drain water until it turns clear to ensure separate non-sticky grains',
    ],
  },
  {
    id: 2,
    title: 'Soak Grains',
    subtitle: 'Allow uniform water absorption',
    ratio: '1 : 2 Ratio',
    time: '15 - 20 mins',
    icon: Timer,
    badge: 'Fluffy Texture Key',
    badgeClass: 'bg-amber-100 text-amber-800',
    iconClass: 'text-amber-700',
    description:
      'Soaking allows heat to penetrate evenly to the core of each grain during cooking.',
    tips: [
      'Use 1 cup of rice to 2 cups of fresh water',
      'Soaking prevents breaking during boiling',
    ],
  },
  {
    id: 3,
    title: 'Cook & Simmer',
    subtitle: 'Simmer on medium flame',
    ratio: '2 Whistles / 12 mins',
    time: '12 - 15 mins',
    icon: Flame,
    badge: 'Optimal Heat',
    badgeClass: 'bg-red-100 text-red-800',
    iconClass: 'text-red-700',
    description:
      'Bring to a full boil, then reduce heat to low and cover with a tight-fitting lid.',
    tips: [
      'Pressure Cooker: 2 Whistles on medium heat',
      'Open Pot: Cover and simmer till water is completely absorbed',
    ],
  },
  {
    id: 4,
    title: 'Rest & Fluff',
    subtitle: 'Steam lock and final fluffing',
    ratio: 'Resting Stage',
    time: '5 mins',
    icon: Sparkles,
    badge: 'Aroma Release',
    badgeClass: 'bg-emerald-100 text-emerald-800',
    iconClass: 'text-emerald-700',
    description:
      'Let the pot rest unopened off heat to allow moisture to redistribute evenly.',
    tips: [
      'Do not open lid immediately after turning off heat',
      'Fluff gently with a fork before serving warm',
    ],
  },
]

export default function MillingProcess({ onNavigate }: MillingProcessProps) {
  const [activeStep, setActiveStep] = useState<number>(1)
  const currentStep =
    COOKING_STEPS.find((s) => s.id === activeStep) || COOKING_STEPS[0]

  return (
    <section
      id='cooking-instructions-story'
      className='bg-stone-50 py-12 lg:py-20'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto mb-12 space-y-3'>
          <span className='text-xs text-emerald-800 font-bold uppercase tracking-wider block'>
            Cooking Guide
          </span>
          <h2 className='font-serif text-2xl sm:text-4xl font-bold text-stone-900'>
            How to Cook Perfectly Every Time
          </h2>
          <p className='text-stone-600 text-sm sm:text-base leading-relaxed'>
            Follow our animated step-by-step guide to bring out the natural
            aroma and fluffy texture of our aged rice.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8'>
          {COOKING_STEPS.map((step) => {
            const Icon = step.icon
            const isActive = activeStep === step.id
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`relative flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-300 ${
                  isActive
                    ? 'bg-emerald-950 text-white border-emerald-950 shadow-md'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-emerald-700'
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${isActive ? 'bg-amber-500 text-stone-950' : 'bg-stone-100 text-stone-600'}`}
                >
                  <Icon className='w-5 h-5' />
                </div>
                <div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider block ${isActive ? 'text-amber-400' : 'text-stone-400'}`}
                  >
                    Step 0{step.id}
                  </span>
                  <span className='text-sm font-bold block truncate'>
                    {step.title}
                  </span>
                </div>
                {isActive && (
                  <motion.div
                    layoutId='active-step-indicator'
                    className='absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-amber-500 rounded-full'
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Animated Card Presentation */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className='bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'
          >
            {/* Visual Icon Box */}
            <div className='lg:col-span-5 flex flex-col items-center justify-center p-8 bg-[#fffdf7] border border-amber-100 rounded-xl text-center'>
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut',
                }}
                className={`p-6 rounded-full bg-white shadow-md mb-4 ${currentStep.iconClass}`}
              >
                <currentStep.icon className='w-12 h-12' />
              </motion.div>
              <span
                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2 ${currentStep.badgeClass}`}
              >
                {currentStep.badge}
              </span>
              <div className='flex items-center gap-4 text-xs font-bold text-stone-600 mt-2'>
                <span>Ratio: {currentStep.ratio}</span>
                <span>•</span>
                <span>Time: {currentStep.time}</span>
              </div>
            </div>

            {/* Step Details & Tips */}
            <div className='lg:col-span-7 space-y-4'>
              <div>
                <span className='text-xs font-bold uppercase text-amber-700 tracking-wider'>
                  Step 0{currentStep.id} Instructions
                </span>
                <h3 className='font-serif text-2xl font-bold text-stone-900 mt-1'>
                  {currentStep.title}
                </h3>
                <p className='text-stone-600 text-sm leading-relaxed mt-2'>
                  {currentStep.description}
                </p>
              </div>

              <div className='space-y-2 pt-2'>
                <h4 className='text-xs font-bold uppercase text-stone-900 tracking-wider'>
                  Pro Tips:
                </h4>
                {currentStep.tips.map((tip, idx) => (
                  <div
                    key={idx}
                    className='flex items-start gap-2 text-xs sm:text-sm text-stone-700'
                  >
                    <ChevronRight className='w-4 h-4 text-emerald-700 shrink-0 mt-0.5' />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>

              {/* Progress buttons */}
              <div className='flex items-center gap-3 pt-4 border-t border-stone-100'>
                {currentStep.id < COOKING_STEPS.length ? (
                  <button
                    onClick={() => setActiveStep((prev) => prev + 1)}
                    className='flex items-center gap-2 px-5 py-2.5 bg-emerald-950 text-white rounded-full text-xs font-semibold hover:bg-emerald-900 transition-colors'
                  >
                    <span>Next Step</span>
                    <ChevronRight className='w-4 h-4' />
                  </button>
                ) : (
                  <div className='flex items-center gap-2 text-emerald-800 font-bold text-xs'>
                    <Utensils className='w-4 h-4' />
                    <span>Ready to Serve! Enjoy your meal.</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Trust Statement Bar */}
        <div className='mt-12 lg:mt-16 bg-stone-100 border border-stone-200 rounded-2xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-stone-300'>
          <div className='flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-0 w-full sm:w-auto justify-center'>
            <FileCheck
              aria-hidden='true'
              className='w-4 h-4 text-emerald-700 shrink-0'
            />
            <span className='text-xs sm:text-sm font-semibold text-stone-800'>
              FSSAI Licensed Mill
            </span>
          </div>
          <div className='flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-0 w-full sm:w-auto justify-center'>
            <Leaf
              aria-hidden='true'
              className='w-4 h-4 text-emerald-700 shrink-0'
            />
            <span className='text-xs sm:text-sm font-semibold text-stone-800'>
              No chemical additives
            </span>
          </div>
          <button
            type='button'
            id='milling-process-verify-link'
            onClick={() => onNavigate('certifications')}
            className='flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-0 w-full sm:w-auto justify-center hover:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600/40 rounded transition-colors'
          >
            <QrCode
              aria-hidden='true'
              className='w-4 h-4 text-emerald-700 shrink-0'
            />
            <span className='text-xs sm:text-sm font-semibold text-stone-800 underline decoration-dotted underline-offset-4'>
              Batch-traceable via QR
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
