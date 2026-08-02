/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Certification } from './types';
import prod10 from './assets/products/product1/3.jpg.jpeg';
import mambazhamRealBag from './assets/Just dial/Individual rice bag.png';
import goldFishBag from './assets/Just dial/Gold fish.png';
import princeBag from './assets/Just dial/Prince.png';

export const APP_INFO = {
  name: 'Sri Kannika Parameswari Modern Rice Mill',
  foundedYear: '2011',
  location: '134, Periyaye Kovil Road, Thachur Post, Kallakurichi, Kallakurichi Dt, Tamil Nadu - 606202',
  mapsLink: 'https://share.google/9BhsrGM7miHf5E4Du',
  phone: '+91 99443 60308',
  altPhone: '+91 94422 84994',
  email: 'info@kannikaricemill.com',
  enquiryEmail: 'dealers@kannikaricemill.com',
  gstNumber: '33ACFPV4181Q1ZX',
  fssai: 'Food Safety Registration',
  workingHours: 'Mon - Sun: 9:00 AM - 6:00 PM',
  taglineEn: 'Royal taste that touches your heart',
  aboutBrief: 'Based in Kallakurichi, Tamil Nadu, we blend traditional agricultural wisdom with modern optical sorting technology to deliver rice of exceptional purity, aroma, and taste.',
};

export const PRODUCTS: Product[] = [
  {
    id: 'ponni-premium',
    name: 'Kannika Parameshwari Modern Rice Supreme Golden Ponni Rice (Aged)',
    tagline: 'The epitome of traditional Tanjore flavor, aged to perfection.',
    category: 'premium',
    description: 'Our flagship product, sourced directly from the fertile Cauvery delta. Naturally aged for 12 to 18 months, ensuring non-sticky, fluffy grains that expand up to 2.5x upon cooking. Perfect for daily meals and grand feasts alike.',
    features: [
      '100% naturally aged for 12-18 months',
      'Extremely fluffy texture with distinct grain separation',
      'Rich in natural nutrition and low glycemic index',
      'Delightful traditional aroma of rural Tamil Nadu'
    ],
    specs: {
      moisture: '12% - 13.5%',
      brokenGrains: 'Less than 1.5%',
      grainLength: 'Average 5.2mm to 5.5mm',
      sortingAccuracy: '99.9% Optical Sorter Purity',
      shelfLife: '24 Months'
    },
    packSizes: ['5 kg', '10 kg', '25 kg', '75 kg'],
    image: prod10,
    isPopular: true,
  },
  {
    id: 'sona-masoori',
    name: 'Rajapogam Kichadi Ponni Rice',
    tagline: 'Aromatic, ultra-slender grains with premium softness.',
    category: 'aged',
    description: 'Sourced from selected high-yield farms of the river basin, this lightweight, aromatic medium-grain raw rice is processed under low temperatures. Ideal for traditional South Indian variety rice dishes and daily consumption.',
    features: [
      'Ultra-slender light grain profile',
      'Soft and sweet cooking finish',
      'Low starch content, highly recommended for health-conscious meals',
      'Completely stone-free and dust-free'
    ],
    specs: {
      moisture: '12% Max',
      brokenGrains: 'Less than 2.5%',
      grainLength: 'Average 4.8mm to 5.0mm',
      sortingAccuracy: '99.7% Optical Sorter Purity',
      shelfLife: '12 Months'
    },
    packSizes: ['5 kg', '10 kg', '25 kg'],
    image: mambazhamRealBag,
    isPopular: true,
  },
  {
    id: 'gold-fish',
    name: 'Gold Fish Brand No.1 Premium Rice',
    tagline: 'Our No.1 Sortex-cleaned premium rice, trusted across Kallakurichi households.',
    category: 'premium',
    description: 'Packed under our Gold Fish brand at the Kallakurichi facility, this Sortex-cleaned premium rice runs through our optical sorting line, delivering consistent, stone-free grains for everyday cooking.',
    features: [
      'Sortex optically-cleaned for zero stones and impurities',
      'PVM quality-marked packaging',
      'Trusted No.1 premium rice branding',
      'Milled and packed at our Kallakurichi facility'
    ],
    specs: {
      moisture: '12% Max',
      brokenGrains: 'Less than 2.5%',
      grainLength: 'Average 4.8mm to 5.0mm',
      sortingAccuracy: '99.7% Optical Sorter Purity',
      shelfLife: '12 Months'
    },
    packSizes: ['25 kg'],
    image: goldFishBag,
    isPopular: true,
  },
  {
    id: 'prince',
    name: 'Prince Brand No.1 Thidam Rice',
    tagline: 'Sortex-cleaned Thidam rice with dependable everyday quality.',
    category: 'aged',
    description: 'Our Prince brand Thidam rice is Sortex-cleaned and packed at our Kallakurichi facility under food-grade conditions, giving distributors and households a reliable everyday grain option.',
    features: [
      'Sortex-cleaned, stone-free grains',
      'PVM quality-marked, food-grade packaging',
      'No.1 Thidam rice variety',
      'Milled and packed at our Kallakurichi facility'
    ],
    specs: {
      moisture: '12% Max',
      brokenGrains: 'Less than 2.5%',
      grainLength: 'Average 4.8mm to 5.0mm',
      sortingAccuracy: '99.7% Optical Sorter Purity',
      shelfLife: '12 Months'
    },
    packSizes: ['25 kg'],
    image: princeBag,
    isPopular: true,
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'iso-22000',
    title: 'ISO 22000:2018',
    authority: 'International Food Safety Standard',
    year: 'Certified Standard',
    iconName: 'Award',
    description: 'Demonstrates our implementation of a comprehensive food safety management system covering all stages of procurement, milling, storage, and supply.'
  },
  {
    id: 'fssai',
    title: 'FSSAI Registration',
    authority: 'Food Safety and Standards Authority of India',
    year: 'Food Safety Registration',
    iconName: 'FileCheck',
    description: 'Fully registered and audited for meeting the national hygiene, sanitation, and safety metrics established for food production.'
  },
  {
    id: 'agmark',
    title: 'AGMARK Grade A Standards',
    authority: 'Directorate of Marketing & Inspection, Govt of India',
    year: 'Quality Assured',
    iconName: 'ShieldCheck',
    description: 'National quality benchmark guidelines confirming that our Ponni rice varieties adhere to parameters for grain size, moisture, and purity.'
  }
];
