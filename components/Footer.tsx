/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, ArrowUpRight, ShieldCheck, Send, Check, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmailInput('');
    }
  };

  return (
    <footer id="app-footer" className="relative bg-black text-[#ebebe6]/70 border-t border-white/10 pt-20 pb-12 mt-auto overflow-hidden">
      
      {/* Massive Brand Watermark Typography across background */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center text-[13vw] font-normal uppercase tracking-tighter text-white/[0.03] font-memogram whitespace-nowrap leading-none z-0"
      >
        CROESE
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Tier: Brand Statement & Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-6">
            <div 
              className="flex items-center gap-3 cursor-pointer group select-none" 
              onClick={() => handleNavClick('/')}
            >
              <img 
                src="/c_logo.svg" 
                alt="Croese C Logo" 
                className="h-10 w-auto object-contain transition-transform group-hover:scale-110 drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)]"
              />
              <span className="font-memogram text-2xl font-normal tracking-wider text-[#ebebe6] uppercase">
                Croese
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#27FCF2] font-semibold border-l border-white/20 pl-2">
                Commerce Studio
              </span>
            </div>

            <p className="text-sm text-[#ebebe6]/70 leading-relaxed font-sans max-w-md">
              Engineered digital flagships for high-growth e-commerce brands. We combine sub-second performance with architectural elegance across Shopify OS 2.0 and modern web frameworks.
            </p>

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 max-w-fit">
              <ShieldCheck className="w-5 h-5 text-[#27FCF2] shrink-0" />
              <div className="text-xs text-[#ebebe6]">
                <span className="font-semibold text-white block">Official Source Releases</span>
                <span className="text-[10px] text-[#ebebe6]/50 font-mono">Instant ZIP Download • Lifetime Commercial License</span>
              </div>
            </div>
          </div>

          {/* Studio Direct Support */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#27FCF2]" />
              Direct Studio Support
            </div>
            <p className="text-xs text-[#ebebe6]/70 leading-relaxed">
              Every theme purchase includes 30 days of direct developer assistance from founder Ibrahim Ouedraogo.
            </p>
            <div className="pt-2">
              <a 
                href="mailto:ibraoued14@gmail.com" 
                className="inline-flex items-center gap-2 text-white hover:text-[#27FCF2] font-mono transition-colors text-xs bg-white/5 border border-white/10 px-4 py-2 rounded-full"
              >
                <Mail className="w-3.5 h-3.5 text-[#27FCF2]" />
                <span>ibraoued14@gmail.com</span>
              </a>
              <p className="text-[10px] text-[#ebebe6]/40 font-mono mt-2">
                Typical response time: Under 24 hours
              </p>
            </div>
          </div>

          {/* Newsletter / Release Dispatch */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">
              Product Updates & Releases
            </h4>
            <p className="text-xs text-[#ebebe6]/70 leading-relaxed">
              Be notified when new Shopify 2.0 flagships, update patches, and free store modules are released.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="merchant@store.com"
                  required
                  className="w-full rounded-full bg-white/5 border border-white/15 px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#27FCF2] transition-colors pr-10"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to updates"
                  className="absolute right-1.5 p-1.5 rounded-full bg-[#ebebe6] text-black hover:bg-white transition-colors cursor-pointer"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5 text-black" /> : <Send className="w-3.5 h-3.5 text-black" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-[#27FCF2] font-mono">
                  Thank you. You have been added to our release notification list.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Second Tier: Categorized Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          
          <div className="space-y-3">
            <span className="font-bold uppercase tracking-widest text-white block font-mono text-[11px]">Shopify 2.0 Themes</span>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavClick('/themes/manufactur')} className="hover:text-white transition-colors text-left">
                  Manufactur 2.0 Theme
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/brigade-overland')} className="hover:text-white transition-colors text-left">
                  Brigade Overland Theme
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/selkirk-courtstrike')} className="hover:text-white transition-colors text-left">
                  Selkirk Courtstrike Theme
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/ferm-living')} className="hover:text-white transition-colors text-left">
                  ferm LIVING Minimalist
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/their-nibs')} className="hover:text-white transition-colors text-left">
                  Their Nibs Boutique Theme
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-bold uppercase tracking-widest text-white block font-mono text-[11px]">Production Websites</span>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavClick('/themes/palmo')} className="hover:text-white transition-colors text-left">
                  Palmo 3D Interactive
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/sigma-imaging')} className="hover:text-white transition-colors text-left">
                  Sigma Imaging Flagship
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/milan-compain')} className="hover:text-white transition-colors text-left">
                  Milan Compain Architecture
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/dsgn-interior')} className="hover:text-white transition-colors text-left">
                  dsgn interior Editorial
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/huyml')} className="hover:text-white transition-colors text-left">
                  Huyml Creative Portfolio
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-bold uppercase tracking-widest text-white block font-mono text-[11px]">Resources & Help</span>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavClick('/about')} className="hover:text-white transition-colors text-left">
                  About Croese
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/support')} className="hover:text-white transition-colors text-left">
                  Installation Guides
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/faq')} className="hover:text-white transition-colors text-left">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/contact')} className="hover:text-white transition-colors text-left">
                  Contact Studio
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-bold uppercase tracking-widest text-white block font-mono text-[11px]">Commercial Protection</span>
            <p className="text-xs text-[#ebebe6]/60 leading-relaxed">
              All purchases include clean source code archives, verified virus-free, with perpetual commercial deployment rights for one production store.
            </p>
            <div className="pt-1">
              <button 
                onClick={() => handleNavClick('/legal/license')} 
                className="inline-flex items-center gap-1.5 text-xs text-[#27FCF2] hover:underline"
              >
                <span>Read License Terms</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Legal, Copyright, and Licensing */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#ebebe6]/50">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 font-medium">
            <button onClick={() => handleNavClick('/legal/terms-of-service')} className="hover:text-white transition-colors">
              Terms of Service
            </button>
            <button onClick={() => handleNavClick('/legal/privacy-policy')} className="hover:text-white transition-colors">
              Privacy Policy (GDPR)
            </button>
            <button onClick={() => handleNavClick('/legal/refund-policy')} className="hover:text-white transition-colors">
              Refund Policy
            </button>
            <button onClick={() => handleNavClick('/legal/license')} className="hover:text-white transition-colors">
              Commercial License
            </button>
          </div>

          <div className="font-mono text-[11px] text-[#ebebe6]/50">
            © {currentYear} Croese. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
