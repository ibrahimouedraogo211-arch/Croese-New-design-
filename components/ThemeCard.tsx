/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShopifyTheme } from '../types';
import { ArrowUpRight, Star, ShoppingBag, Globe, Layout } from 'lucide-react';

interface ThemeCardProps {
  theme: ShopifyTheme;
  onViewDetails: (slug: string) => void;
  onCheckout: (slugOrPriceId: string) => void;
}

export function ThemeCard({ theme, onViewDetails, onCheckout }: ThemeCardProps) {
  const avgRating = theme.reviews.length > 0
    ? (theme.reviews.reduce((acc, r) => acc + r.rating, 0) / theme.reviews.length).toFixed(1)
    : "5.0";

  const isWebsite = theme.category === 'website';

  return (
    <article 
      id={`product-card-${theme.slug}`} 
      className="group relative rounded-3xl border border-white/10 bg-[#0d0d0c]/80 backdrop-blur-md overflow-hidden hover:border-white/25 transition-all duration-500 flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
    >
      {/* Cover Image Segment with Smooth Zoom */}
      <div 
        className="relative aspect-[16/10] overflow-hidden bg-black cursor-pointer" 
        onClick={() => onViewDetails(theme.slug)}
      >
        <img
          src={theme.coverImage}
          alt={isWebsite ? `Preview of ${theme.name}` : `Shopify Theme ${theme.name}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        
        {/* Subtle Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0c] via-transparent to-transparent opacity-80" />

        {/* Hover View Details Pill */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <span className="text-xs bg-[#ebebe6] text-black font-extrabold px-4 py-2 rounded-full flex items-center gap-1.5 uppercase tracking-wider shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            View Details <ArrowUpRight className="h-3.5 w-3.5 text-black" />
          </span>
        </div>

        {/* Category & Tag Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="text-[10px] font-mono font-bold bg-black/80 text-[#ebebe6] border border-white/15 px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-sm">
            {isWebsite ? <Globe className="h-3 w-3 text-[#27FCF2]" /> : <Layout className="h-3 w-3 text-[#27FCF2]" />}
            {theme.categoryLabel || (isWebsite ? 'Production Website' : 'Shopify 2.0')}
          </span>
        </div>
      </div>

      {/* Main Content Info */}
      <div className="p-6 md:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          
          {/* Header row: title and reviews rating */}
          <div className="flex items-start justify-between gap-2">
            <h3 
              className="text-2xl font-normal text-[#ebebe6] tracking-tight group-hover:text-[#27FCF2] transition-colors cursor-pointer font-memogram" 
              onClick={() => onViewDetails(theme.slug)}
            >
              {theme.name}
            </h3>
            <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20 shrink-0">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span>{avgRating}</span>
            </div>
          </div>
          
          <p className="text-xs text-[#27FCF2] font-medium tracking-wide">
            {theme.tagline}
          </p>

          <p className="text-xs text-[#ebebe6]/70 leading-relaxed line-clamp-2 font-sans">
            {theme.description}
          </p>
        </div>

        {/* Purchase & Pricing Bar */}
        <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#ebebe6]/50 uppercase tracking-widest font-mono font-medium">
              Commercial License
            </span>
            <span className="text-2xl font-bold text-[#ebebe6] font-mono">
              {theme.price}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => onViewDetails(theme.slug)}
              className="px-3.5 py-2 rounded-full font-medium text-xs text-[#ebebe6]/80 hover:text-white hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
            >
              Details
            </button>
            <button
              onClick={() => onCheckout(theme.slug)}
              className="px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider bg-[#ebebe6] text-black hover:bg-white transition-all flex items-center gap-1.5 cursor-pointer shadow-lg active:scale-95 duration-150"
            >
              <ShoppingBag className="h-3.5 w-3.5 text-black" />
              Buy
            </button>
          </div>
        </div>

      </div>

    </article>
  );
}
