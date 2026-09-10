/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, ShieldCheck, Heart, ArrowUpRight, Globe, Layout } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-neutral-950 text-neutral-400 border-t border-neutral-900 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand/Identity */}
          <div className="space-y-4 col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('/')}>
              <div className="h-8 w-8 rounded-lg bg-emerald-500 flex items-center justify-center text-neutral-950 font-extrabold text-sm">
                C
              </div>
              <span className="font-sans font-extrabold text-base text-white tracking-wider">
                CROESE
              </span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Boutique software studio engineering elite Shopify Online Store 2.0 themes and production website architectures for global founders and creators.
            </p>
            <div className="flex items-center gap-2 bg-neutral-900/60 border border-neutral-800/80 rounded-xl p-3 pr-4 max-w-fit">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <div className="text-[10px] leading-tight text-neutral-300 font-medium font-sans">
                Official Studio Store <br />
                <span className="text-neutral-500 font-mono font-bold">Direct Instant Delivery</span>
              </div>
            </div>
          </div>

          {/* Links: Themes & Websites */}
          <div>
            <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-widest mb-4">
              Featured Products
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNavClick('/themes/manufactur')} className="hover:text-emerald-400 text-left transition-colors flex items-center gap-1">
                  <Layout className="h-3 w-3 text-emerald-400 shrink-0" />
                  <span>Manufactur Shopify Theme</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/brigade-overland')} className="hover:text-emerald-400 text-left transition-colors flex items-center gap-1">
                  <Layout className="h-3 w-3 text-emerald-400 shrink-0" />
                  <span>Brigade Overland Shopify Theme</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/selkirk-courtstrike')} className="hover:text-emerald-400 text-left transition-colors flex items-center gap-1">
                  <Layout className="h-3 w-3 text-emerald-400 shrink-0" />
                  <span>Selkirk Sport Shopify Theme</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/ferm-living')} className="hover:text-emerald-400 text-left transition-colors flex items-center gap-1">
                  <Layout className="h-3 w-3 text-emerald-400 shrink-0" />
                  <span>ferm LIVING Shopify Theme</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/palmo')} className="hover:text-emerald-400 text-left transition-colors flex items-center gap-1">
                  <Globe className="h-3 w-3 text-emerald-400 shrink-0" />
                  <span>Palmo 3D Website</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/sigma-imaging')} className="hover:text-emerald-400 text-left transition-colors flex items-center gap-1">
                  <Globe className="h-3 w-3 text-emerald-400 shrink-0" />
                  <span>Sigma Imaging Website</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/milan-compain')} className="hover:text-emerald-400 text-left transition-colors flex items-center gap-1">
                  <Globe className="h-3 w-3 text-emerald-400 shrink-0" />
                  <span>Milan Compain Website</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/dsgn-interior')} className="hover:text-emerald-400 text-left transition-colors flex items-center gap-1">
                  <Globe className="h-3 w-3 text-emerald-400 shrink-0" />
                  <span>dsgn interior Website</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/huyml')} className="hover:text-emerald-400 text-left transition-colors flex items-center gap-1">
                  <Globe className="h-3 w-3 text-emerald-400 shrink-0" />
                  <span>Huyml Portfolio Website</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/their-nibs')} className="hover:text-emerald-400 text-left transition-colors flex items-center gap-1">
                  <Layout className="h-3 w-3 text-emerald-400 shrink-0" />
                  <span>Their Nibs Boutique Theme</span>
                </button>
              </li>
              <li className="pt-2">
                <button onClick={() => handleNavClick('/themes')} className="text-emerald-400 hover:underline inline-flex items-center gap-1 font-semibold">
                  Full Catalog <ArrowUpRight className="h-3 w-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Links: Infos & Support */}
          <div>
            <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-widest mb-4">
              Help & Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNavClick('/support')} className="hover:text-emerald-400 text-left transition-colors">
                  Installation Guides
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/about')} className="hover:text-emerald-400 text-left transition-colors">
                  Brand & Operator Info
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/faq')} className="hover:text-emerald-400 text-left transition-colors">
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/contact')} className="hover:text-emerald-400 text-left transition-colors">
                  Customer & Technical Support
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Security Statement */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-widest mb-4">
              Contact & Support
            </h4>
            <div className="space-y-2 text-xs">
              <a 
                href="mailto:ibraoued14@gmail.com" 
                className="flex items-center gap-2 text-neutral-300 hover:text-emerald-400 transition-colors bg-neutral-900 border border-neutral-800 p-2.5 rounded-lg font-mono font-medium max-w-max"
              >
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                ibraoued14@gmail.com
              </a>
              <p className="text-[10px] text-neutral-500 leading-normal">
                Direct developer desk response within 24 business hours. Priority support active for licensed customers.
              </p>
            </div>
            
            {/* Sec. Statement */}
            <div className="pt-2 border-t border-neutral-900 space-y-2">
              <div className="flex items-center gap-1">
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-bold font-mono">
                  SSL 256-bit
                </span>
                <span className="text-[10px] text-neutral-400">Encrypted Checkout</span>
              </div>
              <p className="text-[9px] text-neutral-600 leading-snug">
                All checkout operations and file deliveries are protected with standard 256-bit SSL encryption.
              </p>
            </div>
          </div>

        </div>

        {/* Legal links + Copyright */}
        <div className="border-t border-neutral-900 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-xs text-neutral-500 font-medium">
            <button onClick={() => handleNavClick('/legal/terms-of-service')} className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </button>
            <button onClick={() => handleNavClick('/legal/privacy-policy')} className="hover:text-neutral-300 transition-colors">
              Privacy Policy (GDPR)
            </button>
            <button onClick={() => handleNavClick('/legal/refund-policy')} className="hover:text-neutral-300 transition-colors">
              Refund Policy
            </button>
            <button onClick={() => handleNavClick('/legal/license')} className="hover:text-neutral-300 transition-colors">
              License Agreement
            </button>
          </div>
          
          <div className="text-[11px] text-neutral-600 flex items-center gap-1">
            <span>Copyright {currentYear} Croese. Engineered for merchants and founders.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
