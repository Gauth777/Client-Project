/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Package, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data';
import { Product } from '../types';

interface ProductsSectionProps {
  onSelectProduct: (product: Product) => void;
  openDealerModal: () => void;
}

export default function ProductsSection({ onSelectProduct, openDealerModal }: ProductsSectionProps) {
  return (
    <div id="products-section-container" className="space-y-12 pb-16 font-sans">
      {/* Page Header */}
      <section className="bg-emerald-950 text-white py-12 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Sri Kannika Parameswari Rice Varieties</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold">Our Rice Brands</h1>
          <p className="text-emerald-300/80 text-sm max-w-xl mx-auto">Discover our range of meticulously cleaned, premium rice varieties.</p>
        </div>
      </section>

      {/* 2x2 Responsive Brand Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((prod, idx) => {
            const isFlagship = prod.id === 'ponni-premium';

            return (
              <motion.div
                key={prod.id}
                id={`brand-card-${prod.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between relative group"
              >
                {/* Tasteful "Premium Choice" Badge for flagship product */}
                {isFlagship && (
                  <div className="absolute top-4 left-4 z-10 bg-amber-500 text-stone-950 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md flex items-center space-x-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Premium Choice</span>
                  </div>
                )}

                {/* Rice-Bag Photograph */}
                <div className="w-full h-64 sm:h-72 bg-gradient-to-b from-stone-50 to-stone-100 p-6 flex items-center justify-center relative overflow-hidden border-b border-stone-100">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                  />
                </div>

                {/* Card Info Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <h2 className="font-serif font-bold text-xl text-stone-900 leading-snug group-hover:text-emerald-800 transition-colors">
                      {prod.name}
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                      {prod.tagline}
                    </p>
                  </div>

                  {/* Pack Sizes & Action Button */}
                  <div className="space-y-4 pt-4 border-t border-stone-100">
                    <div className="flex items-center text-xs text-stone-600 space-x-2">
                      <Package className="w-4 h-4 text-emerald-800 shrink-0" />
                      <span>Available Pack Sizes: </span>
                      <span className="font-bold text-stone-900">{prod.packSizes.join(', ')}</span>
                    </div>

                    <button
                      id={`brand-card-view-${prod.id}`}
                      onClick={() => onSelectProduct(prod)}
                      className="w-full bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm active:scale-95"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Trust Callout Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">
        <div className="bg-emerald-950 text-emerald-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-emerald-900 shadow-md">
          <div className="space-y-1.5 text-center sm:text-left max-w-xl">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white flex items-center justify-center sm:justify-start">
              <ShieldCheck className="w-5 h-5 text-amber-500 mr-2" />
              <span>Wholesale & Bulk Orders</span>
            </h3>
            <p className="text-emerald-200/80 text-xs leading-relaxed">
              We supply retail packs and bulk bags to distributors, supermarkets, and commercial kitchens across South India.
            </p>
          </div>
          <button
            id="products-dealer-enquiry-cta"
            onClick={openDealerModal}
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shrink-0 w-full sm:w-auto text-center shadow-lg transition-colors"
          >
            Request Dealership Quote
          </button>
        </div>
      </section>
    </div>
  );
}
