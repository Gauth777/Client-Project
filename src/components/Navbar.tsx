/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import logoImg from '../assets/logo/logo.png'

interface NavbarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  openDealerModal: () => void
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Our Products' },
  { id: 'process', label: 'Cooking Process' },
  { id: 'gallery', label: 'Quality identification' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 36)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId)
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      id='main-header'
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-stone-200 bg-white/95 py-2 shadow-[0_10px_35px_rgba(28,25,23,0.08)] backdrop-blur-xl'
          : 'border-stone-100 bg-[#fffdf7]/95 py-3 backdrop-blur-lg'
      }`}
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8'>
        <button
          type='button'
          id='header-logo'
          onClick={() => handleNavClick('home')}
          className='group flex min-w-0 items-center gap-3 text-left'
          aria-label='Go to home page'
        >
          {/* Larger container sizing for higher prominence */}
          <span
            className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-[#e6d6b4] p-1.5 shadow-sm transition-all duration-300 group-hover:scale-[1.05] ${
              isScrolled
                ? 'h-16 w-16 sm:h-18 sm:w-18'
                : 'h-16 w-16 sm:h-20 sm:w-20'
            }`}
          >
            {/* Scaled-up image to fill container cleanly */}
            <img
              src={logoImg}
              alt='Sri Kannika Parameswari rice logo'
              className='h-full w-full object-contain scale-125'
            />
          </span>
          <span className='hidden min-w-0 sm:block'>
            <span className='block truncate font-serif text-base font-bold uppercase tracking-[0.04em] text-stone-900 md:text-lg'>
              Sri Kannika Parameswari
            </span>
            <span className='mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-700 md:text-[11px]'>
              Modern Rice Mill
            </span>
          </span>
        </button>

        <nav
          id='desktop-nav'
          className='hidden items-center gap-0.5 lg:flex xl:gap-1'
          aria-label='Primary navigation'
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id
            return (
              <button
                type='button'
                key={item.id}
                id={`nav-btn-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative whitespace-nowrap rounded-full px-2.5 py-2 text-[12px] font-semibold transition-colors xl:px-3.5 xl:text-[13px] ${
                  isActive
                    ? 'text-emerald-900'
                    : 'text-stone-600 hover:bg-stone-100 hover:text-emerald-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId='active-nav-indicator'
                    className='absolute inset-x-3 -bottom-[9px] h-0.5 rounded-full bg-amber-500'
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
              </button>
            )
          })}
        </nav>

        <button
          type='button'
          id='mobile-menu-toggle'
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className='rounded-full border border-stone-200 bg-white p-2.5 text-stone-700 shadow-sm transition-colors hover:border-emerald-700 hover:text-emerald-800 lg:hidden'
          aria-label='Toggle navigation menu'
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className='h-5 w-5' />
          ) : (
            <Menu className='h-5 w-5' />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type='button'
              aria-label='Close navigation menu'
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.38 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className='fixed inset-0 top-[73px] z-40 bg-stone-950 lg:hidden'
            />
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className='absolute inset-x-4 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-stone-200 bg-white p-2 shadow-2xl lg:hidden'
              aria-label='Mobile navigation'
            >
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeTab === item.id
                return (
                  <button
                    type='button'
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-emerald-950 text-white'
                        : 'text-stone-700 hover:bg-stone-100 hover:text-emerald-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`text-xs ${isActive ? 'text-amber-300' : 'text-stone-300'}`}
                    >
                      0{index + 1}
                    </span>
                  </button>
                )
              })}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
