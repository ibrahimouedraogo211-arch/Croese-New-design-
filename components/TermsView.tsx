/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Scale } from 'lucide-react';

export function TermsView() {
  const lastUpdated = "June 16, 2026";

  return (
    <div id="terms-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 text-sm text-[#ebebe6]/80 font-sans leading-relaxed relative z-10">
      
      {/* Header section */}
      <div className="space-y-4 text-center pb-8 border-b border-white/10">
        <span className="text-[#27FCF2] text-xs font-mono tracking-widest uppercase font-semibold">
          Legal Framework
        </span>
        <h1 className="text-3xl sm:text-5xl font-normal text-[#ebebe6] tracking-tight uppercase font-memogram">
          Terms of Service
        </h1>
        <p className="text-[#ebebe6]/50 font-mono text-xs">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Payment Processing Notice */}
      <div className="bg-black/60 border border-white/15 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-start gap-5 backdrop-blur-xl shadow-2xl">
        <div className="h-12 w-12 bg-white/5 border border-white/10 text-[#27FCF2] rounded-2xl flex items-center justify-center shrink-0">
          <Scale className="h-6 w-6" />
        </div>
        <div className="space-y-1.5">
          <h4 className="text-sm font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">Payment & Order Terms</h4>
          <p className="text-xs text-[#ebebe6]/70 leading-relaxed text-justify font-sans">
            All checkout and payment transactions are processed through encrypted payment infrastructure with instant digital delivery of production files upon completion.
          </p>
        </div>
      </div>

      {/* Main legal content */}
      <div className="space-y-10 select-all text-justify">
        
        {/* Section 1 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">1. Seller Identity</h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            This website is operated by an individual creator, not a registered corporation.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="block text-[#ebebe6]/50 uppercase font-mono tracking-wider font-semibold text-[10px]">Operator / Seller</span>
                <span className="text-[#ebebe6] font-semibold text-sm">Ibrahim Ouedraogo</span>
              </div>
              <div>
                <span className="block text-[#ebebe6]/50 uppercase font-mono tracking-wider font-semibold text-[10px]">Country of Operation</span>
                <span className="text-[#ebebe6] font-semibold text-sm">The Netherlands</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <span className="block text-[#ebebe6]/50 uppercase font-mono tracking-wider font-semibold text-[10px]">Fulfillment</span>
                <span className="text-[#ebebe6]/80 font-medium">Instant Digital Delivery (Croese)</span>
              </div>
              <div>
                <span className="block text-[#ebebe6]/50 uppercase font-mono tracking-wider font-semibold text-[10px]">Customer Support</span>
                <a href="mailto:ibraoued14@gmail.com" className="text-[#27FCF2] font-mono font-semibold hover:underline block text-sm">ibraoued14@gmail.com</a>
              </div>
            </div>
          </div>
          <p className="text-xs text-[#ebebe6]/60 leading-relaxed font-sans">
            For purchase, licensing, billing, or technical inquiries, contact us at <a href="mailto:ibraoued14@gmail.com" className="text-[#27FCF2] hover:underline font-mono">ibraoued14@gmail.com</a>.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">2. Digital Products</h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            We design, develop, and distribute ready-to-deploy digital goods, including premium Shopify Online Store 2.0 themes and production Website Templates built with modern frameworks (React, Next.js, Tailwind CSS). Each purchase grants the buyer a single-project, non-exclusive, perpetual commercial license to deploy the purchased product on one (1) live storefront or website.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">3. Direct Purchase & Instant Digital Delivery</h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            Products are sold as completed digital downloads with direct "Buy" checkout buttons. We do not accept custom on-demand services through our automated checkout. Delivery occurs immediately upon verified payment authorization, providing an instant download package (.ZIP) and email confirmation containing license details.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">4. License Restrictions</h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            The digital commercial license is strictly granted per production deployment. The buyer may not:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#ebebe6]/70 font-sans">
            <li>Redistribute, sublicense, resell, or share source files with unauthorized third parties</li>
            <li>Use a single purchased license code across multiple independent stores or client websites</li>
            <li>Modify source code for the purpose of open-source distribution or competing template sales</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">5. Intellectual Property</h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            All template files, code, design structures, and documentation remain the exclusive intellectual property of Croese. No transfer of copyright occurs upon purchase; buyers acquire a perpetual license to use and adapt the code for their licensed project.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">6. Limitation of Liability</h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            Digital products are provided on an as-is basis. The operator is not liable for indirect damages, third-party platform downtime, conflicts caused by incompatible third-party plugins, or unauthorized code changes.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">7. Governing Law</h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            These Terms are governed by and construed in accordance with the laws of the Netherlands.
          </p>
        </section>

      </div>

    </div>
  );
}
