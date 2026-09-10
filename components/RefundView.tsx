/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function RefundView() {
  const lastUpdated = "June 16, 2026";

  return (
    <div id="refund-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 text-sm text-[#ebebe6]/80 font-sans leading-relaxed relative z-10">
      
      {/* Page Header */}
      <div className="space-y-4 text-center pb-8 border-b border-white/10">
        <span className="text-[#27FCF2] text-xs font-mono tracking-widest uppercase font-semibold">
          Guarantee & Refunds
        </span>
        <h1 className="text-3xl sm:text-5xl font-normal text-[#ebebe6] tracking-tight uppercase font-memogram">
          Refund Policy
        </h1>
        <p className="text-[#ebebe6]/50 font-mono text-xs">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Trust Notice box */}
      <div className="bg-black/60 border border-white/15 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-start gap-5 backdrop-blur-xl shadow-2xl">
        <div className="h-12 w-12 bg-white/5 border border-white/10 text-[#27FCF2] rounded-2xl flex items-center justify-center shrink-0">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <div className="space-y-1.5">
          <h4 className="text-sm font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">Quality Guarantee & Support</h4>
          <p className="text-xs text-[#ebebe6]/70 leading-relaxed text-justify font-sans">
            All checkouts and digital orders come with our direct engineering guarantee. Refund requests are reviewed by our engineering desk and executed promptly upon verification.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-10 select-all text-justify">
        
        {/* Section 1 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">
            1. Digital Products & Right of Withdrawal
          </h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            Under EU Directive 2011/83/EU on consumer rights and international standards for digital products, the statutory 14-day right of withdrawal does not apply to digital content once delivery has begun, provided the consumer has given explicit prior consent to immediate delivery and acknowledged the waiver of their right of withdrawal.
          </p>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            By completing a purchase on Croese, you confirm:
          </p>
          <ul className="space-y-3 pl-1 my-3">
            <li className="flex items-start gap-3 text-xs text-[#ebebe6]/70 font-sans">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[#27FCF2] shrink-0" />
              <span>You consent to immediate digital delivery of the theme or website source code files</span>
            </li>
            <li className="flex items-start gap-3 text-xs text-[#ebebe6]/70 font-sans">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[#27FCF2] shrink-0" />
              <span>You acknowledge that the right of withdrawal is waived upon initiation of digital access</span>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">
            2. 14-Day Technical Defect Guarantee
          </h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            Although statutory withdrawal does not apply, we stand behind our engineering quality. We offer a full refund within 14 days of purchase if all of the following conditions are met:
          </p>
          <ul className="space-y-3.5 pl-1 text-xs font-sans">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-5 w-5 bg-[#27FCF2]/10 border border-[#27FCF2]/30 text-[#27FCF2] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 rounded-lg">A</span>
              <div>
                <strong className="text-[#ebebe6]">Verified technical defect:</strong> The template or theme contains an unresolvable defect in its core codebase that prevents core functionality from operating as documented.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-5 w-5 bg-[#27FCF2]/10 border border-[#27FCF2]/30 text-[#27FCF2] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 rounded-lg">B</span>
              <div>
                <strong className="text-[#ebebe6]">Support request submitted:</strong> You have contacted us at <a href="mailto:ibraoued14@gmail.com" className="text-[#27FCF2] hover:underline font-mono font-semibold">ibraoued14@gmail.com</a> with reproducible error logs or screenshots.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-5 w-5 bg-[#27FCF2]/10 border border-[#27FCF2]/30 text-[#27FCF2] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 rounded-lg">C</span>
              <div>
                <strong className="text-[#ebebe6]">Unable to resolve:</strong> We are unable to provide a functional patch within <strong className="text-[#ebebe6]">5 business days</strong> of your support ticket.
              </div>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">
            3. Non-Refundable Situations
          </h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            Refunds cannot be granted for:
          </p>
          <ul className="space-y-2 pl-1 text-xs text-[#ebebe6]/70 font-sans">
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 bg-white/30 rounded-full shrink-0" />
              <span>Change of mind or remorse after downloading source files</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 bg-white/30 rounded-full shrink-0" />
              <span>Purchase of an incorrect item once downloaded</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 bg-white/30 rounded-full shrink-0" />
              <span>Incompatibilities caused by unauthorized third-party modifications</span>
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">
            4. How to Request a Refund
          </h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            To submit a claim, email us at <a href="mailto:ibraoued14@gmail.com" className="text-[#27FCF2] hover:underline font-mono">ibraoued14@gmail.com</a> with:
          </p>
          <ul className="space-y-2.5 pl-1 my-3 text-xs text-[#ebebe6]/80 font-sans">
            <li className="flex items-start gap-2.5">
              <span className="text-[#27FCF2] font-mono font-bold">1.</span>
              <span>Your checkout email address</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#27FCF2] font-mono font-bold">2.</span>
              <span>Your order transaction ID or invoice reference</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#27FCF2] font-mono font-bold">3.</span>
              <span>A description of the technical issue with reproduction details</span>
            </li>
          </ul>
        </section>

      </div>

    </div>
  );
}
