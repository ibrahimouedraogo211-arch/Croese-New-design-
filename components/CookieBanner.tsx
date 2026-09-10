/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export function CookieBanner() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    // Read previous choices safely (handles iframe / private mode storage security restrictions)
    try {
      const savedConsent = localStorage.getItem('cookie-consent');
      if (savedConsent) {
        setConsent(savedConsent);
      } else {
        setConsent('none');
      }
    } catch (err) {
      console.warn('Could not read cookie-consent from localStorage:', err);
      setConsent('none');
    }
  }, []);

  const handleAcceptAll = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    try {
      localStorage.setItem('cookie-consent', 'accepted');
    } catch (err) {
      console.warn('Could not save cookie-consent to localStorage:', err);
    }
    // Always update state to dismiss the banner
    setConsent('accepted');
  };

  const handleRefuseAll = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    try {
      localStorage.setItem('cookie-consent', 'refused');
    } catch (err) {
      console.warn('Could not save cookie-consent to localStorage:', err);
    }
    // Always update state to dismiss the banner
    setConsent('refused');
  };

  if (consent !== 'none') {
    return null; // Don't render anything if decision is made (either accepted or refused)
  }

  return (
    <div
      id="cookie-consent-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Privacy & Cookie Preferences"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[9999] bg-[#0c0c0b]/95 border border-white/20 text-[#ebebe6] p-5 sm:p-6 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl animate-fade-in divide-y divide-white/10 pointer-events-auto"
    >
      <div className="pb-4 relative">
        <button
          id="cookie-banner-close-btn"
          type="button"
          onClick={handleRefuseAll}
          aria-label="Dismiss cookie banner"
          className="absolute -top-1 -right-1 text-white/50 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2 mb-2 pr-6">
          <ShieldCheck className="h-4 w-4 text-[#27FCF2] shrink-0" />
          <h3 className="font-normal text-sm tracking-wide uppercase font-memogram text-[#ebebe6]">
            Privacy & Cookie Preferences
          </h3>
        </div>
        <p className="text-xs text-[#ebebe6]/70 leading-relaxed font-sans">
          We utilize essential cookies to secure your transactions and evaluate store performance. You can choose to accept or refuse non-essential trackers. More details are available in our{" "}
          <a href="#/legal/privacy-policy" className="text-[#27FCF2] hover:underline underline-offset-2">
            Privacy Policy
          </a>.
        </p>
      </div>

      <div className="pt-4 flex items-center justify-end gap-3 text-xs font-mono">
        <button
          id="cookie-banner-refuse-btn"
          type="button"
          onClick={handleRefuseAll}
          className="min-h-[44px] px-4 py-2.5 rounded-full border border-white/20 hover:bg-white/10 active:scale-95 text-[#ebebe6] transition-all cursor-pointer font-medium hover:border-white/40 select-none"
        >
          Refuse
        </button>
        <button
          id="cookie-banner-accept-btn"
          type="button"
          onClick={handleAcceptAll}
          className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#27FCF2] hover:bg-[#27FCF2]/90 active:scale-95 text-black font-bold tracking-wide transition-all cursor-pointer shadow-lg shadow-[#27FCF2]/25 select-none"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
