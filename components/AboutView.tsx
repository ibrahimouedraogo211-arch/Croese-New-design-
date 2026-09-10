/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Clock, ShieldCheck, MapPin, Building, Globe, Layout } from 'lucide-react';

export function AboutView() {
  return (
    <div id="about-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header section */}
      <div className="space-y-4 text-center">
        <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
          Brand Identity
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          About Croese
        </h1>
        <p className="text-neutral-400 text-sm max-w-2xl mx-auto leading-relaxed font-sans">
          We engineer high-conversion Shopify templates and production website architectures for ambitious merchants, founders, and creators worldwide.
        </p>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-4">
        
        {/* Left column: Story text */}
        <div className="space-y-6 text-sm text-neutral-300 leading-relaxed font-sans text-justify">
          <h2 className="text-xl font-bold text-white tracking-tight">Our Core Mission</h2>
          <p>
            Established by design experts and senior full-stack developers, Croese bridges the gap between boutique luxury aesthetics and the raw speed optimization standards required by modern commerce and digital products.
          </p>
          <p>
            We repeatedly witnessed founders slowing down their platforms by installing dozens of bloated auxiliary scripts. Our engineering philosophy is simple: <strong>build the most requested modern features directly into the template's clean core architecture—whether Liquid for Shopify 2.0 or React & Next.js for web applications.</strong>
          </p>
          <p>
            We offer both verified Shopify Online Store 2.0 themes and complete production website templates with direct instant purchasing and delivery.
          </p>
        </div>

        {/* Right column: Individual seller info */}
        <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl space-y-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider pb-3 border-b border-neutral-800 font-sans">
            Legal Information & Operator
          </h3>
          
          <p className="text-xs text-neutral-400 leading-relaxed font-sans text-justify">
            This website is operated by an independent individual creator, dedicated to crafting high-performance digital products:
          </p>

          <div className="space-y-4 text-xs font-sans">
            
            {/* Seller Name */}
            <div className="flex items-start gap-3">
              <Building className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-widest font-bold font-sans">Operator / Seller</span>
                <span className="text-neutral-200 font-semibold text-sm">Ibrahim Ouedraogo</span>
              </div>
            </div>

            {/* Country of Operation */}
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-widest font-bold font-sans">Country of Operation</span>
                <span className="text-neutral-200 font-semibold">The Netherlands</span>
              </div>
            </div>

            {/* Payment & Security */}
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-widest font-bold font-sans">Secure Checkout</span>
                <span className="text-neutral-300 leading-relaxed block">
                  All transactions are handled securely through encrypted payment processing with immediate digital delivery of source files and license certificates.
                </span>
              </div>
            </div>

            {/* Support info */}
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-widest font-bold font-sans">Direct Contact & Support</span>
                <a href="mailto:ibraoued14@gmail.com" className="text-emerald-400 font-mono font-semibold hover:underline block">
                  ibraoued14@gmail.com
                </a>
                <span className="block text-[10px] text-neutral-500 mt-1 leading-normal">
                  For any questions regarding licensing, digital deliveries, or technical guidance, feel free to contact us directly.
                </span>
              </div>
            </div>

          </div>

          <div className="h-px bg-neutral-800" />

          {/* SLA / Availability */}
          <div className="flex items-center gap-3 text-xs text-neutral-400 font-sans">
            <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Customer support response window: <strong>Mon - Fri, within 24h</strong></span>
          </div>

        </div>

      </div>

    </div>
  );
}
