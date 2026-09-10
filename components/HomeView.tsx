/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShopifyTheme } from '../types';
import { ThemeCard } from './ThemeCard';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Layout, 
  Globe, 
  Star, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Cpu, 
  CheckCircle2,
  Download
} from 'lucide-react';

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
    <div id="home-view" className="relative z-10 space-y-28 pb-28">
      
      {/* 1. Signature Creativeans Hero Section */}
      <section className="relative flex min-h-[90vh] md:min-h-[94vh] flex-col justify-between px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-6 md:pb-8">
        <div className="mx-auto flex flex-col items-center gap-x-12 md:flex-row md:items-end w-full max-w-7xl my-auto">
          
          {/* Left: Giant Memogram Display Headline */}
          <div className="font-memogram text-[#ebebe6] text-[3.5rem] leading-[1.02] sm:text-[4.75rem] md:leading-[1.04] lg:text-[5.75rem] xl:text-[6.85rem] select-none w-full md:w-auto">
            <div className="space-y-4">
              <h1 className="flex w-fit flex-col md:gap-y-3">
                <span className="tracking-tight">Build A Store</span>
                <span className="flex items-center gap-3 sm:gap-5">
                  That
                  <hr className="inline-block h-[2px] w-28 sm:w-44 md:w-52 border-none bg-[#ebebe6] align-middle my-auto" />
                </span>
                <span className="place-self-end italic font-normal text-[#ebebe6] pr-2">
                  Matters
                </span>
              </h1>
            </div>
          </div>

          {/* Right: Editorial Description & Action CTAs */}
          <div className="mb-6 md:w-[420px] lg:w-[470px] shrink-0 mt-10 md:mt-0">
            <div className="text-[#ebebe6]/80 text-[1.02rem] leading-relaxed flex flex-col gap-y-4 text-center md:text-left font-sans">
              <p>
                Generic templates made every online storefront look the same. At Croese, we engineer Shopify themes and production web flagships that elevate brands from the inside out—with sub-second load speeds and conversion-obsessed UX.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <button
                onClick={() => onNavigate('/themes')}
                className="rounded-full bg-[#ebebe6] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black hover:bg-white transition-all shadow-[0_0_30px_rgba(235,235,230,0.25)] active:scale-95 duration-150 cursor-pointer"
              >
                Explore Themes
              </button>
              
              <button
                onClick={() => onNavigate('/websites')}
                className="rounded-full border border-[#ebebe6]/30 bg-black/40 backdrop-blur-md px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#ebebe6] hover:bg-white/10 hover:border-[#ebebe6]/60 transition-all active:scale-95 duration-150 cursor-pointer"
              >
                Production Websites
              </button>
            </div>

            {/* Micro badges below hero */}
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4 text-xs font-mono text-[#ebebe6]/50">
              <span className="flex items-center gap-1.5 text-[#ebebe6]/70">
                <Download className="w-3.5 h-3.5 text-[#27FCF2]" />
                Instant ZIP Archive
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[#ebebe6]/70">
                <ShieldCheck className="w-3.5 h-3.5 text-[#27FCF2]" />
                Commercial License
              </span>
            </div>

          </div>

        </div>

        {/* Scrolling Features Section (in the reserved space at the bottom of the hero) */}
        <div className="w-full max-w-7xl mx-auto pt-10 sm:pt-14 mt-auto z-20">
          <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-5 bg-black/60 border border-white/15 rounded-3xl p-3 sm:p-3.5 backdrop-blur-xl shadow-2xl">
            
            {/* Features label badge */}
            <div className="shrink-0 flex items-center gap-3 pl-1 sm:pl-2">
              <div className="flex items-center gap-2 rounded-full border border-[#27FCF2]/30 bg-[#27FCF2]/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-[#27FCF2] font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#27FCF2] animate-pulse" />
                <span>Features</span>
              </div>
              <div className="h-4 w-px bg-white/20 hidden md:block" />
            </div>

            {/* Continuous Marquee of Theme & Website Features */}
            <div className="relative w-full min-w-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] md:flex-1">
              <div className="animate-marquee flex items-center gap-3 sm:gap-4 whitespace-nowrap select-none py-1">
                {/* Track Items */}
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <Layers className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Shopify OS 2.0 Native</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• Sections Everywhere</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <Zap className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">0.8s Sub-Second Speeds</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• 99+ Core Web Vitals</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <Sparkles className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Zero App Subscriptions</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• Built-in Drawer & Upsells</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <Download className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Instant ZIP Package</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• Full Production Source</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <Cpu className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Next.js 15 & React</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• Production Web Templates</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <Layout className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Drag & Drop Visual Customizer</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• No Code Required</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Commercial Digital License</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• Lifetime Deployment</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <Globe className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Global Multi-Currency</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• Worldwide Markets</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Conversion-Obsessed UX</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• Sticky Buy & Micro-interactions</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <Star className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Priority Technical Support</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• 6 Months Direct Assistance</span>
                </div>

                {/* Seamless Loop Duplicate */}
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <Layers className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Shopify OS 2.0 Native</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• Sections Everywhere</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <Zap className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">0.8s Sub-Second Speeds</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• 99+ Core Web Vitals</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <Sparkles className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Zero App Subscriptions</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• Built-in Drawer & Upsells</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <Download className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Instant ZIP Package</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• Full Production Source</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <Cpu className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Next.js 15 & React</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• Production Web Templates</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <Layout className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Drag & Drop Visual Customizer</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• No Code Required</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Commercial Digital License</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• Lifetime Deployment</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <Globe className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Global Multi-Currency</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• Worldwide Markets</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Conversion-Obsessed UX</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• Sticky Buy & Micro-interactions</span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-[#ebebe6] hover:border-[#27FCF2]/50 hover:bg-white/10 transition-colors">
                  <Star className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
                  <span className="font-semibold">Priority Technical Support</span>
                  <span className="text-[#ebebe6]/50 text-[11px]">• 6 Months Direct Assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip (Creativeans impact figures layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full rounded-3xl border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 shadow-2xl">
          <div className="flex flex-col items-center text-center pt-4 md:pt-0">
            <span className="font-memogram text-4xl lg:text-5xl font-normal text-[#ebebe6] tracking-tight">10+</span>
            <span className="text-xs uppercase tracking-widest text-[#ebebe6]/60 mt-2 font-medium">Production Flagships</span>
          </div>
          <div className="flex flex-col items-center text-center pt-4 md:pt-0">
            <span className="font-memogram text-4xl lg:text-5xl font-normal text-[#ebebe6] tracking-tight">300+</span>
            <span className="text-xs uppercase tracking-widest text-[#ebebe6]/60 mt-2 font-medium">Active Stores Powered</span>
          </div>
          <div className="flex flex-col items-center text-center pt-4 md:pt-0">
            <span className="font-memogram text-4xl lg:text-5xl font-normal text-[#ebebe6] tracking-tight">0.8s</span>
            <span className="text-xs uppercase tracking-widest text-[#ebebe6]/60 mt-2 font-medium">Average Load Speed</span>
          </div>
          <div className="flex flex-col items-center text-center pt-4 md:pt-0">
            <span className="font-memogram text-4xl lg:text-5xl font-normal text-[#27FCF2] tracking-tight">100%</span>
            <span className="text-xs uppercase tracking-widest text-[#ebebe6]/60 mt-2 font-medium">Core Web Vitals Pass</span>
          </div>
        </div>
      </section>

      {/* 3. Global Quality Benchmark Ticker */}
      <section className="border-y border-white/10 bg-black/60 py-5 backdrop-blur-md overflow-hidden">
        <div className="animate-marquee-fast flex items-center gap-16 whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity select-none">
          <span className="text-sm font-semibold tracking-wider text-[#ebebe6] font-mono">SHOPIFY ONLINE STORE 2.0</span>
          <span className="text-neutral-700">/</span>
          <span className="text-sm font-semibold tracking-wider text-[#ebebe6] font-mono">SHOPIFY PLUS READY</span>
          <span className="text-neutral-700">/</span>
          <span className="text-sm font-semibold tracking-wider text-[#ebebe6] font-mono">SUB-SECOND LIQUID RUNTIME</span>
          <span className="text-neutral-700">/</span>
          <span className="text-sm font-semibold tracking-wider text-[#ebebe6] font-mono">NEXT.JS 14 PRODUCTION WEBSITES</span>
          <span className="text-neutral-700">/</span>
          <span className="text-sm font-semibold tracking-wider text-[#ebebe6] font-mono">ZERO APP SUBSCRIPTIONS NEEDED</span>
          <span className="text-neutral-700">/</span>
          <span className="text-sm font-semibold tracking-wider text-[#ebebe6] font-mono">LIFETIME COMMERCIAL USAGE</span>
          {/* Loop duplicate */}
          <span className="text-neutral-700">/</span>
          <span className="text-sm font-semibold tracking-wider text-[#ebebe6] font-mono">SHOPIFY ONLINE STORE 2.0</span>
          <span className="text-neutral-700">/</span>
          <span className="text-sm font-semibold tracking-wider text-[#ebebe6] font-mono">SHOPIFY PLUS READY</span>
          <span className="text-neutral-700">/</span>
          <span className="text-sm font-semibold tracking-wider text-[#ebebe6] font-mono">SUB-SECOND LIQUID RUNTIME</span>
          <span className="text-neutral-700">/</span>
          <span className="text-sm font-semibold tracking-wider text-[#ebebe6] font-mono">NEXT.JS 14 PRODUCTION WEBSITES</span>
          <span className="text-neutral-700">/</span>
          <span className="text-sm font-semibold tracking-wider text-[#ebebe6] font-mono">ZERO APP SUBSCRIPTIONS NEEDED</span>
          <span className="text-neutral-700">/</span>
          <span className="text-sm font-semibold tracking-wider text-[#ebebe6] font-mono">LIFETIME COMMERCIAL USAGE</span>
        </div>
      </section>

      {/* Creativeans Signature: "Featured Works" Scrolling Marquee Carousel */}
      <section className="space-y-8 overflow-hidden pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end justify-between">
          <div className="space-y-2">
            <span className="text-[#27FCF2] text-xs font-mono tracking-widest uppercase font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#27FCF2]" />
              Signature Deployments
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal text-[#ebebe6] tracking-tight uppercase font-memogram">
              Featured Works
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/themes')}
            className="text-xs font-mono text-[#ebebe6]/70 hover:text-[#27FCF2] uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer border border-white/15 px-4 py-2 rounded-full hover:border-[#27FCF2]/50 bg-white/5"
          >
            <span>See All Works</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Row 1: Scrolling Left */}
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="animate-marquee-slow flex items-center gap-6 py-2 select-none">
              {[...themes, ...themes].map((item, idx) => (
                <div
                  key={`track1-${item.slug}-${idx}`}
                  onClick={() => onNavigate(`/themes/${item.slug}`)}
                  className="group relative shrink-0 cursor-pointer overflow-hidden rounded-3xl md:rounded-4xl bg-neutral-900/60 border border-white/10 hover:border-[#27FCF2]/60 transition-all duration-300 h-64 w-[340px] sm:h-72 sm:w-[440px] md:h-80 md:w-[500px]"
                >
                  <img
                    src={item.coverImage}
                    alt={item.name}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  <div className="relative flex h-full flex-col justify-end p-6 md:p-8 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-memogram text-xl sm:text-2xl text-white tracking-wide">
                        {item.name}
                      </h3>
                      <div className="h-9 w-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#27FCF2] group-hover:text-black transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-[#ebebe6]">
                        {item.categoryLabel || (item.category === 'website' ? 'Production Web' : 'Shopify 2.0')}
                      </span>
                      <span className="rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-[#27FCF2]">
                        {item.price}
                      </span>
                      <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-mono text-[#ebebe6]/60">
                        {item.tagline}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="animate-marquee-reverse flex items-center gap-6 py-2 select-none">
              {[...themes].reverse().concat([...themes].reverse()).map((item, idx) => (
                <div
                  key={`track2-${item.slug}-${idx}`}
                  onClick={() => onNavigate(`/themes/${item.slug}`)}
                  className="group relative shrink-0 cursor-pointer overflow-hidden rounded-3xl md:rounded-4xl bg-neutral-900/60 border border-white/10 hover:border-[#27FCF2]/60 transition-all duration-300 h-64 w-[340px] sm:h-72 sm:w-[440px] md:h-80 md:w-[500px]"
                >
                  <img
                    src={item.coverImage}
                    alt={item.name}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  <div className="relative flex h-full flex-col justify-end p-6 md:p-8 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-memogram text-xl sm:text-2xl text-white tracking-wide">
                        {item.name}
                      </h3>
                      <div className="h-9 w-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#27FCF2] group-hover:text-black transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-[#ebebe6]">
                        {item.categoryLabel || (item.category === 'website' ? 'Production Web' : 'Shopify 2.0')}
                      </span>
                      <span className="rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-[#27FCF2]">
                        {item.price}
                      </span>
                      <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-mono text-[#ebebe6]/60">
                        {item.tagline}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Curated Showcase Section (Portfolio Products) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-[#27FCF2] text-xs font-mono tracking-widest uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#27FCF2]" />
              Croese Flagship Catalog
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal text-[#ebebe6] tracking-tight uppercase font-memogram">
              Commercial Flagships
            </h2>
            <p className="text-sm text-[#ebebe6]/70 max-w-xl leading-relaxed">
              Every release is built to enterprise standards with verified Core Web Vitals, native Shopify OS 2.0 section architecture, and full source code.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-[#121212] border border-white/15 p-1 rounded-full self-start md:self-auto shadow-inner">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'all' ? 'bg-[#ebebe6] text-black shadow-md' : 'text-[#ebebe6]/60 hover:text-white'
              }`}
            >
              All Editions
            </button>
            <button
              onClick={() => setActiveCategory('shopify')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeCategory === 'shopify' ? 'bg-[#ebebe6] text-black shadow-md' : 'text-[#ebebe6]/60 hover:text-white'
              }`}
            >
              <Layout className="h-3 w-3" />
              Shopify 2.0
            </button>
            <button
              onClick={() => setActiveCategory('website')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeCategory === 'website' ? 'bg-[#ebebe6] text-black shadow-md' : 'text-[#ebebe6]/60 hover:text-white'
              }`}
            >
              <Globe className="h-3 w-3" />
              Production Websites
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedThemes.map((theme) => (
            <ThemeCard
              key={theme.slug}
              theme={theme}
              onViewDetails={(slug) => onNavigate(`/themes/${slug}`)}
              onCheckout={onCheckout}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center pt-8">
          <button
            onClick={() => onNavigate('/themes')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-black/60 text-[#ebebe6] hover:bg-[#ebebe6] hover:text-black transition-all text-xs font-bold uppercase tracking-wider group cursor-pointer shadow-lg backdrop-blur-md"
          >
            <span>Browse All {themes.length} Themes & Websites</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* 5. Croese Engineering Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[#27FCF2] text-xs font-mono tracking-widest uppercase font-semibold">
            Engineering Rigor
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-[#ebebe6] tracking-tight uppercase font-memogram">
            Built for Serious Commerce
          </h2>
          <p className="text-sm text-[#ebebe6]/70 leading-relaxed">
            We bridge the gap between creative visual artistry, commercial performance, and clean software architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="rounded-3xl border border-white/10 bg-[#0a0a0a]/80 p-8 space-y-4 backdrop-blur-md hover:border-white/25 transition-all">
            <span className="text-xs font-mono font-bold text-[#27FCF2]">01 / ARCHITECTURE</span>
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <Layers className="w-6 h-6 text-[#27FCF2]" />
            </div>
            <h3 className="text-lg font-bold text-[#ebebe6] font-sans">Liquid 2.0 Native</h3>
            <p className="text-xs text-[#ebebe6]/60 leading-relaxed">
              Full section-everywhere flexibility, dynamic metaobjects, app blocks, and zero recurring theme subscriptions.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0a0a0a]/80 p-8 space-y-4 backdrop-blur-md hover:border-white/25 transition-all">
            <span className="text-xs font-mono font-bold text-[#27FCF2]">02 / CONVERSION</span>
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <Zap className="w-6 h-6 text-[#27FCF2]" />
            </div>
            <h3 className="text-lg font-bold text-[#ebebe6] font-sans">Sub-Second Velocity</h3>
            <p className="text-xs text-[#ebebe6]/60 leading-relaxed">
              Every checkout flow, sliding drawer cart, and image gallery is mathematically optimized for 95+ PageSpeed scores.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0a0a0a]/80 p-8 space-y-4 backdrop-blur-md hover:border-white/25 transition-all">
            <span className="text-xs font-mono font-bold text-[#27FCF2]">03 / OWNERSHIP</span>
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <ShieldCheck className="w-6 h-6 text-[#27FCF2]" />
            </div>
            <h3 className="text-lg font-bold text-[#ebebe6] font-sans">Full Source Code</h3>
            <p className="text-xs text-[#ebebe6]/60 leading-relaxed">
              Instant ZIP download including unminified Liquid or Next.js code, lifetime commercial rights, and no lock-in.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0a0a0a]/80 p-8 space-y-4 backdrop-blur-md hover:border-white/25 transition-all">
            <span className="text-xs font-mono font-bold text-[#27FCF2]">04 / SUPPORT</span>
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <Cpu className="w-6 h-6 text-[#27FCF2]" />
            </div>
            <h3 className="text-lg font-bold text-[#ebebe6] font-sans">Concierge Desk</h3>
            <p className="text-xs text-[#ebebe6]/60 leading-relaxed">
              Direct technical developer assistance from Ibrahim Ouedraogo with 24h turnaround for installation and questions.
            </p>
          </div>

        </div>
      </section>

      {/* 6. Merchant Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[#27FCF2] text-xs font-mono tracking-widest uppercase font-semibold">
            Merchant Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-[#ebebe6] tracking-tight uppercase font-memogram">
            Trusted by Modern Retailers
          </h2>
          <p className="text-sm text-[#ebebe6]/70 max-w-xl mx-auto">
            Read how ambitious founders use Croese themes to outshine legacy storefronts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="rounded-3xl border border-white/10 bg-[#0a0a0a]/90 p-8 space-y-6 backdrop-blur-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-[#ebebe6]/80 leading-relaxed font-sans">
                "Deploying the Manufactur theme transformed our European storefront. The design language is exceptionally refined, and our organic conversion rate jumped 34% within two weeks."
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold text-[#ebebe6] uppercase tracking-wider">Camilla Vance</h4>
              <p className="text-[11px] text-[#ebebe6]/50 font-mono">Velour D2C Collective</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0a0a0a]/90 p-8 space-y-6 backdrop-blur-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-[#ebebe6]/80 leading-relaxed font-sans">
                "The Palmo 3D template provided the exact high-end agency look our brand required. Super smooth performance, immaculate code quality, and zero third-party app dependencies."
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold text-[#ebebe6] uppercase tracking-wider">David Miller</h4>
              <p className="text-[11px] text-[#ebebe6]/50 font-mono">Creative Director, Tropics Collective</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0a0a0a]/90 p-8 space-y-6 backdrop-blur-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-[#ebebe6]/80 leading-relaxed font-sans">
                "Instant delivery, comprehensive documentation, and outstanding support. We imported the theme into Shopify in under 10 minutes. A true masterclass in digital craftsmanship."
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold text-[#ebebe6] uppercase tracking-wider">Elena Rossi</h4>
              <p className="text-[11px] text-[#ebebe6]/50 font-mono">E-Commerce Head, Studio Form</p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-white/15 bg-gradient-to-br from-[#111111] via-black to-[#080808] p-10 md:p-16 overflow-hidden text-center shadow-2xl backdrop-blur-2xl">
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#27FCF2]">
              Launch Your Flagship Store Today
            </span>

            <h2 className="text-3xl sm:text-5xl font-normal text-[#ebebe6] tracking-tight uppercase font-memogram leading-tight">
              Ready to build a store that matters?
            </h2>

            <p className="text-sm sm:text-base text-[#ebebe6]/70 leading-relaxed">
              Acquire any production theme or website template with instant ZIP delivery, lifetime commercial rights, and dedicated concierge setup assistance.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('/themes')}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs bg-[#ebebe6] text-black hover:bg-white transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer"
              >
                <span>Browse All Products</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <button
                onClick={() => onNavigate('/contact')}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs border border-white/20 bg-white/5 text-[#ebebe6] hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Contact Studio</span>
                <ArrowUpRight className="w-4 h-4 text-[#ebebe6]/60" />
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#ebebe6]/50 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#27FCF2]" />
                Zero Monthly Subscription
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#27FCF2]" />
                Full Source Code Included
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#27FCF2]" />
                Lifetime Commercial License
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
