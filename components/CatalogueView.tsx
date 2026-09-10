/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShopifyTheme } from '../types';
import { ThemeCard } from './ThemeCard';
import { Sliders, Layout, Globe, Sparkles, ShieldCheck, Download, Zap } from 'lucide-react';

interface CatalogueViewProps {
  themes: ShopifyTheme[];
  onNavigate: (path: string) => void;
  onCheckout: (slugOrPriceId: string) => void;
  initialCategory?: 'all' | 'shopify' | 'website';
}

export function CatalogueView({ themes, onNavigate, onCheckout, initialCategory = 'all' }: CatalogueViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'shopify' | 'website'>(initialCategory);
  const [filter, setFilter] = useState<string>('all');

  // Filter products based on category and niche
  const filteredThemes = themes.filter(item => {
    // 1. Category filter
    if (selectedCategory === 'shopify' && item.category === 'website') return false;
    if (selectedCategory === 'website' && item.category !== 'website') return false;

    // 2. Sub-filter
    if (filter === 'all') return true;
    if (filter === 'shopify-speed') return item.slug === 'brigade-overland' || item.slug === 'selkirk-courtstrike';
    if (filter === 'shopify-luxury') return item.slug === 'manufactur' || item.slug === 'their-nibs' || item.slug === 'ferm-living';
    if (filter === 'site-creative') return item.slug === 'milan-compain' || item.slug === 'huyml' || item.slug === 'palmo';
    if (filter === 'site-architecture') return item.slug === 'dsgn-interior';
    if (filter === 'site-commerce') return item.slug === 'sigma-imaging' || item.slug === 'palmo';

    return true;
  });

  return (
    <div id="catalogue-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 relative z-10">
      
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <span className="text-[#27FCF2] text-xs font-mono tracking-widest uppercase font-bold flex items-center justify-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5" />
          Croese Product Catalog • Instant Digital Delivery
        </span>
        <h1 className="text-3xl sm:text-5xl font-normal text-[#ebebe6] tracking-tight leading-tight uppercase font-memogram">
          Shopify Themes & Production Websites
        </h1>
        <p className="text-sm text-[#ebebe6]/70 leading-relaxed font-sans">
          Engineered for peak performance, ultra-fast conversions, and seamless deployment. Buy directly with instant digital download and commercial licensing.
        </p>
      </div>

      {/* Main Category Tabs */}
      <div className="flex items-center justify-center">
        <div className="inline-flex p-1.5 rounded-full bg-black/80 border border-white/15 shadow-2xl backdrop-blur-xl max-w-full overflow-x-auto">
          <button
            onClick={() => { setSelectedCategory('all'); setFilter('all'); }}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#ebebe6] text-black shadow-md'
                : 'text-[#ebebe6]/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <span>All Products</span>
          </button>

          <button
            onClick={() => { setSelectedCategory('shopify'); setFilter('all'); }}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              selectedCategory === 'shopify'
                ? 'bg-[#ebebe6] text-black shadow-md'
                : 'text-[#ebebe6]/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layout className="h-3.5 w-3.5" />
            <span>Shopify 2.0</span>
          </button>

          <button
            onClick={() => { setSelectedCategory('website'); setFilter('all'); }}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              selectedCategory === 'website'
                ? 'bg-[#ebebe6] text-black shadow-md'
                : 'text-[#ebebe6]/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <Globe className="h-3.5 w-3.5" />
            <span>Websites</span>
          </button>
        </div>
      </div>

      {/* Sub-filter Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-y border-white/10 py-6">
        <div className="flex items-center gap-2 text-[#ebebe6] text-xs font-bold uppercase tracking-wider font-mono">
          <Sliders className="h-4 w-4 text-[#27FCF2]" />
          <span>Curated Filters:</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'View All' },
            ...(selectedCategory !== 'website' ? [
              { id: 'shopify-luxury', label: 'Boutique & Luxury' },
              { id: 'shopify-speed', label: 'Expedition & Speed' }
            ] : []),
            ...(selectedCategory !== 'shopify' ? [
              { id: 'site-creative', label: 'Motion & Design' },
              { id: 'site-architecture', label: 'Architecture & Spatial' },
              { id: 'site-commerce', label: 'Brand & Flagship' }
            ] : [])
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-colors border ${
                filter === btn.id
                  ? 'bg-[#ebebe6] text-black border-[#ebebe6] font-bold'
                  : 'bg-white/5 text-[#ebebe6]/70 border-white/10 hover:text-white hover:border-white/25'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredThemes.map((theme) => (
          <ThemeCard
            key={theme.slug}
            theme={theme}
            onViewDetails={(slug) => onNavigate(`/themes/${slug}`)}
            onCheckout={onCheckout}
          />
        ))}
      </div>

      {filteredThemes.length === 0 && (
        <div className="text-center py-16 border border-dashed border-white/10 rounded-3xl">
          <p className="text-sm text-[#ebebe6]/60">No template matches the selected filter.</p>
        </div>
      )}

      {/* Trust guarantees bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-black/60 border border-white/10 rounded-3xl p-8 mt-16 backdrop-blur-xl">
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-2xl bg-white/5 text-[#27FCF2] flex items-center justify-center font-bold text-xs shrink-0 border border-white/10">
            <Download className="h-4 w-4" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Instant Digital Download</h4>
            <p className="text-[11px] text-[#ebebe6]/60 leading-relaxed font-sans">
              Instant access to your production ZIP package immediately after checkout. Zero waiting time.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-2xl bg-white/5 text-[#27FCF2] flex items-center justify-center font-bold text-xs shrink-0 border border-white/10">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Commercial Digital License</h4>
            <p className="text-[11px] text-[#ebebe6]/60 leading-relaxed font-sans">
              Deploy freely for your commercial brand or client website with lifetime rights and verifiable license token.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-2xl bg-white/5 text-[#27FCF2] flex items-center justify-center font-bold text-xs shrink-0 border border-white/10">
            <Zap className="h-4 w-4" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">30 Days Technical Support</h4>
            <p className="text-[11px] text-[#ebebe6]/60 leading-relaxed font-sans">
              All themes and websites include 30 days of dedicated developer technical support and installation guidance.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
