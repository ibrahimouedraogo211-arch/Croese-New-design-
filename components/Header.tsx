/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Themes', path: '/themes' },
    { label: 'Websites', path: '/websites' },
    { label: 'About Croese', path: '/about' },
    { label: 'Installation', path: '/support' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Announcement Ticker Bar (Creativeans signature ticker format) */}
      <div className="relative z-40 overflow-hidden bg-[#0a0a0a]/90 border-b border-white/10 py-2 backdrop-blur-md text-[11px] tracking-wide text-[#ebebe6]/80 select-none">
        <div className="animate-marquee flex items-center whitespace-nowrap gap-12">
          <span className="flex items-center gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#27FCF2] animate-pulse" />
            <span className="font-medium text-[#ebebe6]">Croese Flagship Commerce • Certified Shopify 2.0 Themes & Production Websites</span>
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-2">
            <span>Instant Digital ZIP Delivery with Lifetime Commercial Rights</span>
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#27FCF2]" />
            <span className="text-[#27FCF2] font-semibold">Sub-Second Liquid Runtime • 100% Core Web Vitals Score</span>
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-2">
            <span>Direct Concierge Support by Ibrahim Ouedraogo • 24h Turnaround</span>
          </span>

          {/* Duplicate set for seamless continuous marquee loop */}
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#27FCF2] animate-pulse" />
            <span className="font-medium text-[#ebebe6]">Croese Flagship Commerce • Certified Shopify 2.0 Themes & Production Websites</span>
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-2">
            <span>Instant Digital ZIP Delivery with Lifetime Commercial Rights</span>
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#27FCF2]" />
            <span className="text-[#27FCF2] font-semibold">Sub-Second Liquid Runtime • 100% Core Web Vitals Score</span>
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-2">
            <span>Direct Concierge Support by Ibrahim Ouedraogo • 24h Turnaround</span>
          </span>
        </div>
      </div>

      {/* Floating Pill Navigation Header */}
      <header className="sticky top-4 z-50 px-4 pointer-events-none transition-all duration-300">
        <div className="max-w-6xl mx-auto pointer-events-auto rounded-full border border-white/15 bg-black/85 px-4 sm:px-6 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-300 hover:border-white/25 flex items-center justify-between">
          
          {/* Left: 3D C Logo + Wordmark */}
          <div 
            id="brand-logo-container"
            className="flex items-center gap-3 cursor-pointer group select-none" 
            onClick={() => handleNavClick('/')}
          >
            <div className="relative flex items-center justify-center">
              <img 
                src="/c_logo.svg" 
                alt="Croese C Logo" 
                className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)]"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <span className="font-memogram text-xl sm:text-2xl font-normal tracking-wider text-[#ebebe6] uppercase transition-colors group-hover:text-white">
                Croese
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#27FCF2] font-semibold border-l border-white/20 pl-2 hidden sm:inline-block">
                Studio
              </span>
            </div>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {menuItems.map((item) => {
              const isActive = currentPath === item.path || 
                (item.path === '/themes' && currentPath.startsWith('/themes/')) ||
                (item.path === '/websites' && currentPath === '/websites');

              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white bg-white/10 shadow-inner'
                      : 'text-[#ebebe6]/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#27FCF2] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Actions & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleNavClick('/contact')}
              aria-label="Contact Studio"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#ebebe6]/80 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#27FCF2]" />
              <span>Contact</span>
            </button>

            <button
              onClick={() => handleNavClick('/themes')}
              className="group relative inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full font-bold text-xs tracking-wider uppercase bg-[#ebebe6] text-black hover:bg-white transition-all shadow-[0_0_20px_rgba(235,235,230,0.2)] active:scale-95 duration-150 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-black" />
              <span>Catalog</span>
              <ArrowUpRight className="w-3 h-3 text-black transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#ebebe6] hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 max-w-6xl mx-auto pointer-events-auto rounded-3xl border border-white/15 bg-black/95 p-6 shadow-2xl backdrop-blur-2xl animate-scale-up space-y-4">
            <div className="grid grid-cols-1 gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left px-4 py-3 rounded-2xl text-sm font-semibold transition-colors cursor-pointer ${
                    currentPath === item.path
                      ? 'bg-white/10 text-white border border-white/15'
                      : 'text-[#ebebe6]/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('/contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-white/15 text-xs uppercase font-bold text-[#ebebe6] hover:bg-white/5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#27FCF2]" />
                <span>Contact Studio</span>
              </button>
              <button
                onClick={() => handleNavClick('/themes')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#ebebe6] text-black text-xs uppercase font-bold hover:bg-white cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-black" />
                <span>Browse All Themes & Websites</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
