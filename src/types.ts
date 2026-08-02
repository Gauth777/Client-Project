/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  tamilName?: string;
  tagline: string;
  category: 'aged' | 'boiled' | 'steamed' | 'premium';
  description: string;
  features: string[];
  specs: {
    moisture: string;
    brokenGrains: string;
    grainLength: string;
    sortingAccuracy: string;
    shelfLife: string;
  };
  packSizes: string[];
  image: string;
  isPopular?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  authority: string;
  year: string;
  iconName: string;
  description: string;
}

export interface DealerEnquiryInput {
  businessName: string;
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  gstin?: string;
  expectedVolume: string;
  preferredProducts: string[];
  message?: string;
}

export interface ContactInput {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
