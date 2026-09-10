/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function LicenseView() {
  const lastUpdated = "June 16, 2026";

  return (
    <div id="license-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 text-sm text-[#ebebe6]/80 font-sans leading-relaxed relative z-10">
      
      {/* Page Header */}
      <div className="space-y-4 text-center pb-8 border-b border-white/10">
        <span className="text-[#27FCF2] text-xs font-mono tracking-widest uppercase font-semibold">
          Scope of usage
        </span>
        <h1 className="text-3xl sm:text-5xl font-normal text-[#ebebe6] tracking-tight uppercase font-memogram">
          License Agreement
        </h1>
        <p className="text-[#ebebe6]/50 font-mono text-xs">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Intro block */}
      <div className="bg-black/60 border border-white/15 rounded-3xl p-6 md:p-8 backdrop-blur-xl">
        <p className="text-justify font-sans text-[#ebebe6]/80 text-sm leading-relaxed">
          By purchasing a template or website architecture from Croese, you agree to the terms of this End User License Agreement (EULA).
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-8 select-all text-justify">
        
        {/* Section 1 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-sm font-normal text-[#ebebe6] uppercase tracking-wider flex items-center gap-2 font-memogram">
            <span className="h-2 w-2 rounded-full bg-[#27FCF2]" />
            1. Standard License (Single-Use)
          </h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            Each theme purchase grants a Single-Use License:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#ebebe6]/70 font-sans">
            <li>You may install and use the theme on exactly <strong>one (1) live Shopify store</strong>.</li>
            <li>You may also use the theme on development or staging environments directly linked to that same store, for testing purposes only.</li>
            <li>To transfer your license to a different store, you must first remove the theme entirely from the original store and notify us at <a href="mailto:ibraoued14@gmail.com" className="text-[#27FCF2] font-mono hover:underline">ibraoued14@gmail.com</a> so we can update our records.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-sm font-normal text-[#ebebe6] uppercase tracking-wider flex items-center gap-2 font-memogram">
            <span className="h-2 w-2 rounded-full bg-[#27FCF2]" />
            2. Restrictions
          </h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            You may not:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#ebebe6]/70 font-sans">
            <li>Resell, sublicense, share, or redistribute the theme's source code (Liquid, JavaScript, CSS), in original or modified form</li>
            <li>Upload or share the theme files on any public repository, marketplace, or file-sharing platform</li>
            <li>Use a single license to activate the theme on more than one live store at the same time</li>
          </ul>
          <p className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-[#ebebe6]/75 text-xs leading-relaxed font-sans">
            Violation of these terms may result in immediate termination of support access and revocation of the license, at our discretion.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-sm font-normal text-[#ebebe6] uppercase tracking-wider flex items-center gap-2 font-memogram">
            <span className="h-2 w-2 rounded-full bg-[#27FCF2]" />
            3. Agencies & Multiple Stores
          </h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            If you are a developer or agency building stores for multiple clients, each client store requires its own individual license. For volume pricing or agency licensing arrangements, contact us at <a href="mailto:ibraoued14@gmail.com" className="text-[#27FCF2] font-mono hover:underline">ibraoued14@gmail.com</a>.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-sm font-normal text-[#ebebe6] uppercase tracking-wider flex items-center gap-2 font-memogram">
            <span className="h-2 w-2 rounded-full bg-[#27FCF2]" />
            4. Support & Updates
          </h3>
          <p className="text-[#ebebe6]/75 font-sans leading-relaxed">
            Each license includes 6 months of priority support from the date of purchase, covering installation assistance and bug fixes.
          </p>
          <p className="text-[#ebebe6]/75 font-sans leading-relaxed">
            Compatibility updates — to keep the theme working with new Shopify core platform changes — are provided free of charge for as long as the theme remains actively maintained. We do not guarantee indefinite updates but will provide reasonable notice if a theme is discontinued.
          </p>
        </section>

      </div>

    </div>
  );
}
