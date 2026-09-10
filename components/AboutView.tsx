/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Clock, ShieldCheck, Sparkles, Layers, Zap, Cpu, CheckCircle2 } from 'lucide-react';

export function AboutView() {
  return (
    <div id="about-view" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 relative z-10">
      
      {/* Header section */}
      <div className="space-y-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-1.5 text-xs text-[#ebebe6] backdrop-blur-md">
          <img src="/c_logo.svg" alt="" className="w-4 h-4 object-contain" />
          <span className="font-mono text-[11px] tracking-widest uppercase font-semibold text-[#27FCF2]">
            About Croese Commerce Studio
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-normal text-[#ebebe6] tracking-tight uppercase font-memogram leading-tight">
          Building Digital Flagships That Matter
        </h1>
        <p className="text-[#ebebe6]/70 text-base max-w-2xl mx-auto leading-relaxed font-sans">
          Croese is an independent digital commerce studio dedicated to engineering high-performance Shopify Online Store 2.0 themes and production website architectures.
        </p>
      </div>

      {/* Brand & Studio Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        
        <div className="md:col-span-7 space-y-6 text-sm text-[#ebebe6]/80 leading-relaxed font-sans">
          <h2 className="text-2xl font-normal text-[#ebebe6] tracking-tight font-memogram uppercase">
            Our Purpose & Vision
          </h2>
          <p>
            Established by Ibrahim Ouedraogo, Croese was created with a single mission: to eliminate the bloated, slow, generic templates that degrade modern brand experiences and replace them with architectural masterpieces calibrated for conversion velocity.
          </p>
          <p>
            Every storefront we release is built from clean source code—free from fragile third-party dependencies and monthly subscription lock-ins. By prioritizing native Shopify 2.0 section architecture, modular metaobjects, and sub-second page performance, we empower brands to own their digital flagships outright.
          </p>
          
          <div className="pt-4 space-y-4">
            <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">
              Engineering Pillars
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-black/60 p-5 space-y-2 backdrop-blur-md">
                <div className="flex items-center gap-2 text-[#ebebe6] font-bold text-xs uppercase">
                  <Layers className="w-4 h-4 text-[#27FCF2]" />
                  <span>Liquid 2.0 Architecture</span>
                </div>
                <p className="text-xs text-[#ebebe6]/60 leading-relaxed">
                  Full section-everywhere flexibility, dynamic collection matrices, and metaobject blocks editable in the visual Shopify Theme Editor.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/60 p-5 space-y-2 backdrop-blur-md">
                <div className="flex items-center gap-2 text-[#ebebe6] font-bold text-xs uppercase">
                  <Zap className="w-4 h-4 text-[#27FCF2]" />
                  <span>Sub-Second Velocity</span>
                </div>
                <p className="text-xs text-[#ebebe6]/60 leading-relaxed">
                  Engineered to achieve 95+ PageSpeed insights scores and pass all Google Core Web Vitals on desktop and mobile.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Card / Operator Facts */}
        <div className="md:col-span-5 space-y-6">
          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#111111] to-black p-8 space-y-6 shadow-2xl backdrop-blur-xl">
            <div className="space-y-2 pb-4 border-b border-white/10">
              <span className="text-[10px] font-mono tracking-widest text-[#27FCF2] uppercase font-bold block">
                Direct Governance
              </span>
              <h3 className="text-xl font-normal text-[#ebebe6] font-memogram uppercase">
                Studio Leadership
              </h3>
              <p className="text-xs text-[#ebebe6]/70 leading-relaxed font-sans">
                Each product release, technical update, and customer support ticket is personally reviewed and handled by founder Ibrahim Ouedraogo.
              </p>
            </div>

            <div className="space-y-4 text-xs font-sans">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#27FCF2] shrink-0" />
                <div>
                  <span className="text-[#ebebe6] font-semibold block">24h Turnaround Support</span>
                  <span className="text-[11px] text-[#ebebe6]/50">Installation assistance & code guidance</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#27FCF2] shrink-0" />
                <div>
                  <span className="text-[#ebebe6] font-semibold block">Commercial Lifetime License</span>
                  <span className="text-[11px] text-[#ebebe6]/50">Perpetual use on 1 commercial store</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#27FCF2] shrink-0" />
                <div>
                  <span className="text-[#ebebe6] font-semibold block">Founder Contact</span>
                  <a href="mailto:ibraoued14@gmail.com" className="text-[11px] text-[#27FCF2] hover:underline font-mono">
                    ibraoued14@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#ebebe6]/60">
                <span>Code Guarantee</span>
                <span className="text-[#27FCF2] font-semibold">100% Unobfuscated</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Trust & Guarantee Grid */}
      <div className="rounded-3xl border border-white/10 bg-black/60 p-8 md:p-12 space-y-8 backdrop-blur-xl">
        <h3 className="text-xl font-normal text-[#ebebe6] font-memogram uppercase text-center">
          The Croese Quality Commitment
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="space-y-2">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-white font-bold text-xs uppercase font-mono">
              <CheckCircle2 className="w-4 h-4 text-[#27FCF2]" />
              <span>Zero App Dependencies</span>
            </div>
            <p className="text-xs text-[#ebebe6]/60 leading-relaxed font-sans">
              Critical conversion tools—slide-out carts, free shipping tiers, cross-sells, swatch pickers—are coded directly in Liquid with zero monthly app fees.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-white font-bold text-xs uppercase font-mono">
              <CheckCircle2 className="w-4 h-4 text-[#27FCF2]" />
              <span>Instant Digital Delivery</span>
            </div>
            <p className="text-xs text-[#ebebe6]/60 leading-relaxed font-sans">
              Immediately following checkout, your production .ZIP archive is delivered directly with one-click Shopify upload instructions.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-white font-bold text-xs uppercase font-mono">
              <CheckCircle2 className="w-4 h-4 text-[#27FCF2]" />
              <span>Full Source Code</span>
            </div>
            <p className="text-xs text-[#ebebe6]/60 leading-relaxed font-sans">
              Enjoy complete ownership to customize styles, Liquid templates, JavaScript modules, and Tailwind configurations without limitations.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
