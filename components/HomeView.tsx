/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShopifyTheme } from '../types';
import { ThemeCard } from './ThemeCard';
import { ArrowRight, Zap, RefreshCw, HelpCircle, ShieldCheck, BadgeCheck, Download, Layout, Globe, ShoppingCart, Star } from 'lucide-react';

interface HomeViewProps {
  themes: ShopifyTheme[];
  onNavigate: (path: string) => void;
  onCheckout: (slugOrPriceId: string) => void;
}

export function HomeView({ themes, onNavigate, onCheckout }: HomeViewProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'shopify' | 'website'>('all');

  const displayedThemes = themes.filter(item => {
    if (activeCategory === 'shopify') return !item.category || item.category === 'shopify';
    if (activeCategory === 'website') return item.category === 'website';
    return true;
  }).slice(0, 6);

  return (
    <div id="home-view" className="space-y-24 pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-20 md:py-32 overflow-hidden">
        {/* Subtle decorative background gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-8 relative px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-1.5 text-xs text-neutral-300 transform hover:scale-102 transition-transform duration-100">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 load-indicator animate-pulse" />
            <span>Certified Shopify 2.0 & Next.js Website Templates — Direct Download</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Elite <span className="bg-gradient-to-r from-emerald-400 via-emerald-200 to-white bg-clip-text text-transparent">Shopify Themes</span> & <span className="text-white">Websites</span> <br />
            engineered to grow your brand.
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed">
            High-converting digital templates with clean liquid and React architecture. Instant ZIP download, commercial license, and 30 days of technical support with secure checkout.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('/themes')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition-all text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/15 flex items-center justify-center gap-2 cursor-pointer animate-scale-up"
            >
              Browse Catalog
              <ArrowRight className="h-4 w-4 text-neutral-950 animate-bounce-right" />
            </button>
            <button
              onClick={() => onNavigate('/support')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Installation Assistance
            </button>
          </div>

          {/* Social Proof metrics */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-neutral-900/80">
            <div>
              <span className="block text-3xl font-extrabold text-white">0.8s</span>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Average Load Speed</span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-white">+28%</span>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Conversion Rate Growth</span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-white">2,400+</span>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Stores & Sites Powered</span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-white">4.9/5</span>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Global Satisfaction Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Catalog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
              Studio Catalog
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Featured Themes & Websites
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl">
              Each product includes production code, instant digital download, commercial rights, and dedicated support.
            </p>
          </div>

          {/* Category Toggle */}
          <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 p-1 rounded-xl">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                activeCategory === 'all' ? 'bg-emerald-500 text-neutral-950' : 'text-neutral-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory('shopify')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer ${
                activeCategory === 'shopify' ? 'bg-emerald-500 text-neutral-950' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Layout className="h-3 w-3" />
              Shopify
            </button>
            <button
              onClick={() => setActiveCategory('website')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer ${
                activeCategory === 'website' ? 'bg-emerald-500 text-neutral-950' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Globe className="h-3 w-3" />
              Websites
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {displayedThemes.map((theme) => (
            <ThemeCard
              key={theme.slug}
              theme={theme}
              onViewDetails={(slug) => onNavigate(`/themes/${slug}`)}
              onCheckout={onCheckout}
            />
          ))}
        </div>

        <div className="text-center pt-6">
          <button
            onClick={() => onNavigate('/themes')}
            className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold inline-flex items-center gap-1.5 group cursor-pointer"
          >
            <span>Explore Entire Catalog</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* 3. Value Props Section */}
      <section className="bg-neutral-900/40 border-y border-neutral-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
              Built for high standards
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Why Croese?
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl mx-auto">
              We engineer beautiful premium utilities to help merchants and founders launch faster with clean layouts and robust core code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            
            {/* Speed card */}
            <div className="bg-neutral-950 border border-neutral-800/80 p-6 rounded-2xl space-y-4">
              <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Insane Performance & Speed</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Every loading millisecond damages conversions. Our code exhibits 98%+ PageSpeed scores to natively boost organic SEO indexing and decrease paid traffic bounces.
              </p>
            </div>

            {/* Instant Delivery card */}
            <div className="bg-neutral-950 border border-neutral-800/80 p-6 rounded-2xl space-y-4">
              <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center">
                <Download className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Instant Digital Delivery</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Immediate checkout with zero delays. Download your full source code ZIP archive and valid commercial license key within seconds of completed payment.
              </p>
            </div>

            {/* Updates card */}
            <div className="bg-neutral-950 border border-neutral-800/80 p-6 rounded-2xl space-y-4">
              <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center">
                <RefreshCw className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">30 Days Technical Support</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Benefit from 30 days of dedicated developer technical support for store installation, onboarding, and storefront setup assistance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Customer Trust / Review Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
            Customer & Developer Reviews
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Loved by ambitious independent brands & creators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="bg-neutral-900/30 border border-neutral-800/80 p-8 rounded-2xl space-y-4 relative">
            <span className="absolute top-6 right-8 text-6xl font-serif text-neutral-800 pointer-events-none select-none">“</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm font-medium text-neutral-200 leading-relaxed font-sans text-justify">
              "Buying the Manufactur theme directly was the best e-commerce decision we made. Instant download, clean code, and our bounce rate dropped down to 20% flat. Outstanding craftsmanship."
            </p>
            <div>
              <span className="block text-xs font-bold text-white">Justine G.</span>
              <span className="text-[10px] text-neutral-500">Founder of Maison Justine, Paris</span>
            </div>
          </div>

          <div className="bg-neutral-900/30 border border-neutral-800/80 p-8 rounded-2xl space-y-4 relative">
            <span className="absolute top-6 right-8 text-6xl font-serif text-neutral-800 pointer-events-none select-none">“</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm font-medium text-neutral-200 leading-relaxed font-sans text-justify">
              "We deployed the Palmo 3D template for our beverage brand launch. The Three.js liquid shaders and GSAP animations blew our audience away and doubled our conversion rate."
            </p>
            <div>
              <span className="block text-xs font-bold text-white">David Miller</span>
              <span className="text-[10px] text-neutral-500">Creative Director, Tropics Collective</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-emerald-500/5 blur-[50px] rounded-full pointer-events-none" />
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to launch your new store or website?
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-neutral-400 leading-relaxed">
            Instant digital delivery with secure checkout. Full source code, commercial rights, and 30 days of technical support included with every purchase.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/themes')}
              className="px-8 py-4 rounded-xl font-bold bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition-all text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingCart className="h-4 w-4" />
              Explore Catalog
            </button>
            <button
              onClick={() => onNavigate('/support')}
              className="px-8 py-4 rounded-xl font-bold bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              Installation Guide
            </button>
          </div>
          
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-[10px] text-neutral-500 font-medium">
            <span className="flex items-center gap-1">
              <BadgeCheck className="h-3.5 w-3.5 text-emerald-400" />
              Instant ZIP Download
            </span>
            <span className="flex items-center gap-1">
              <BadgeCheck className="h-3.5 w-3.5 text-emerald-400" />
              Commercial Rights License
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              Secure SSL Checkout
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
