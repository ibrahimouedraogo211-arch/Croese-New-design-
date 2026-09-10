/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ThemeFAQItem {
  question: string;
  answer: string;
}

export interface ReviewItem {
  id: string;
  userName: string;
  shopName: string;
  rating: number;
  text: string;
  date: string;
}

export type ProductCategory = 'shopify' | 'website';

export interface ShopifyTheme {
  id: string;
  slug: string;
  name: string;
  category?: ProductCategory;
  categoryLabel?: string;
  tagline: string;
  description: string;
  fullDescription: string;
  price: string;
  priceNumber: number;
  priceId: string;
  polarUrl?: string;
  demoUrl: string;
  coverImage: string;
  images: string[];
  features: string[];
  techStack?: string[];
  compatibility: string;
  releaseDate: string;
  version: string;
  author: string;
  supportPeriod: string;
  updatesIncluded: string;
  faq: ThemeFAQItem[];
  reviews: ReviewItem[];
}

export type Product = ShopifyTheme;

export interface CartItem {
  theme: ShopifyTheme;
  licenseType: 'single' | 'multi';
}
