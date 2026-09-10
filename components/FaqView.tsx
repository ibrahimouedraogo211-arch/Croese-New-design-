/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FaqView() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "How do I purchase and download my chosen theme or website?",
      answer: "Transactions are executed directly via our secure checkout. You can check out with Credit/Debit Card or Apple Pay/Google Pay. Once completed, you receive immediate access to the production ZIP download, your commercial license certificate, and receipt email."
    },
    {
      question: "What are the new 'Sites' (Websites) in the catalog?",
      answer: "In addition to our flagship Shopify Online Store 2.0 themes, we now offer production-ready Website Templates built with modern frameworks such as Next.js 15, React, and Tailwind CSS. They include complete source code, responsive designs, and clean modular code for SaaS, agencies, luxury portfolios, and headless storefronts."
    },
    {
      question: "Are your Shopify themes fully compatible with Shopify 2.0?",
      answer: "Yes. All Shopify themes in our catalog are built strictly to comply with Shopify's Online Store 2.0 liquid architecture, supporting drag-and-drop sections everywhere, native metaobjects, fast collection filtering, and slide-out carts. Compatible with Shopify Basic, Shopify, Advanced, and Shopify Plus."
    },
    {
      question: "What is included with my digital license purchase?",
      answer: "Your purchase includes: 1) The complete, production-ready source code ZIP archive. 2) Step-by-step setup documentation and deployment guides. 3) A verifiable single-project commercial license token. 4) 30 days of dedicated developer technical support and installation guidance."
    },
    {
      question: "Why do you sell digital products with direct 'Buy' buttons?",
      answer: "We deliver ready-to-deploy digital templates with instant download. You receive pristine production-ready code immediately upon purchase without any waiting period."
    },
    {
      question: "Can I use the template on multiple client projects?",
      answer: "A standard license permits deployment for one (1) live production store or website project. If you are an agency creating distinct sites for multiple clients, you can purchase separate licenses per project or contact us at ibraoued14@gmail.com for bulk commercial licensing."
    },
    {
      question: "How are payment and checkout security handled?",
      answer: "All checkouts are encrypted with industry-standard 256-bit SSL protocols. We support major payment cards and digital wallets with automatic global tax and VAT handling and immediate digital fulfillment."
    }
  ];

  const toggleIdx = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div id="faq-view" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Page Header */}
      <div className="space-y-4 text-center">
        <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
          Clear answers
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-neutral-400 text-sm leading-relaxed font-sans">
          Everything you need to know about our Shopify themes, website templates, direct checkout, licensing, and immediate digital delivery.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 pt-4">
        {faqData.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div 
              key={idx} 
              className="border border-neutral-800 bg-neutral-900/10 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleIdx(idx)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-neutral-900/40 transition-colors cursor-pointer"
              >
                <span className="text-sm sm:text-base font-bold text-white font-sans">
                  {item.question}
                </span>
                <span className="text-neutral-500 shrink-0">
                  {isOpen ? <ChevronUp className="h-4 w-4 text-emerald-400" /> : <ChevronDown className="h-4 w-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed text-justify border-t border-neutral-850/50">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct support invite */}
      <div className="text-center pt-8 border-t border-neutral-900">
        <p className="text-xs text-neutral-400">
          Have a specific technical question? Contact our engineering desk at{' '}
          <a href="mailto:ibraoued14@gmail.com" className="text-emerald-400 font-bold hover:underline">
            ibraoued14@gmail.com
          </a>
        </p>
      </div>

    </div>
  );
}
