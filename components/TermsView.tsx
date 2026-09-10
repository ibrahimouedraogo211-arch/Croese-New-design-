/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Scale } from 'lucide-react';

export function TermsView() {
  const lastUpdated = "June 16, 2026";

  return (
    <div id="terms-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-sm text-neutral-300 font-sans leading-relaxed">
      
      {/* Header section */}
      <div className="space-y-4 text-center pb-6 border-b border-neutral-900">
        <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
          Legal terms
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="text-neutral-500 font-mono text-xs">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Payment Processing Notice */}
      <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4">
        <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
          <Scale className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Payment & Order Terms</h4>
          <p className="text-xs text-neutral-400 leading-relaxed text-justify">
            All checkout and payment transactions are processed through encrypted payment infrastructure with instant digital delivery of production files upon completion.
          </p>
        </div>
      </div>

      {/* Main legal content */}
      <div className="space-y-8 select-all text-justify">
        
        {/* Section 1 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">1. Seller Identity</h3>
          <p>
            This website is operated by an individual creator, not a registered corporation.
          </p>
          <div className="bg-neutral-900/30 border border-neutral-800/60 rounded-xl p-4.5 space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-neutral-800/40">
              <div>
                <span className="block text-neutral-500 uppercase font-mono tracking-wider font-bold text-[10px]">Operator / Seller</span>
                <span className="text-white font-semibold text-sm">Ibrahim Ouedraogo</span>
              </div>
              <div>
                <span className="block text-neutral-500 uppercase font-mono tracking-wider font-bold text-[10px]">Country of Operation</span>
                <span className="text-white font-semibold text-sm">The Netherlands</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <span className="block text-neutral-500 uppercase font-mono tracking-wider font-bold text-[10px]">Fulfillment</span>
                <span className="text-neutral-300 font-medium">Instant Digital Delivery (Croese)</span>
              </div>
              <div>
                <span className="block text-neutral-500 uppercase font-mono tracking-wider font-bold text-[10px]">Customer Support</span>
                <a href="mailto:ibraoued14@gmail.com" className="text-emerald-400 font-mono font-semibold hover:underline block text-sm">ibraoued14@gmail.com</a>
              </div>
            </div>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            For purchase, licensing, billing, or technical inquiries, contact us at <a href="mailto:ibraoued14@gmail.com" className="text-emerald-400 hover:underline font-mono">ibraoued14@gmail.com</a>.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">2. Digital Products</h3>
          <p>
            We design, develop, and distribute ready-to-deploy digital goods, including premium Shopify Online Store 2.0 themes and production Website Templates built with modern frameworks (React, Next.js, Tailwind CSS). Each purchase grants the buyer a single-project, non-exclusive, perpetual commercial license to deploy the purchased product on one (1) live storefront or website.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">3. Direct Purchase & Instant Digital Delivery</h3>
          <p>
            Products are sold as completed digital downloads with direct "Buy" checkout buttons. We do not accept custom on-demand services through our automated checkout. Delivery occurs immediately upon verified payment authorization, providing an instant download package (.ZIP) and email confirmation containing license details.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">4. License Restrictions</h3>
          <p>
            The digital commercial license is strictly granted per production deployment. The buyer may not:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-neutral-400 font-sans">
            <li>Redistribute, sublicense, resell, or share source files with unauthorized third parties</li>
            <li>Use a single purchased license code across multiple independent stores or client websites</li>
            <li>Modify source code for the purpose of open-source distribution or competing template sales</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">5. Intellectual Property</h3>
          <p>
            All template files, code, design structures, and documentation remain the exclusive intellectual property of Croese. No transfer of copyright occurs upon purchase; buyers acquire a perpetual license to use and adapt the code for their licensed project.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">6. Limitation of Liability</h3>
          <p>
            Digital products are provided on an as-is basis. The operator is not liable for indirect damages, third-party platform downtime, conflicts caused by incompatible third-party plugins, or unauthorized code changes.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">7. Governing Law</h3>
          <p>
            These Terms are governed by and construed in accordance with the laws of the Netherlands.
          </p>
        </section>

      </div>

    </div>
  );
}
