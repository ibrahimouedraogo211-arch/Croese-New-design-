/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export function CookieBanner() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    // Read previous choices
    const savedConsent = localStorage.getItem('cookie-consent');
    if (savedConsent) {
      setConsent(savedConsent);
    } else {
      setConsent('none');
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setConsent('accepted');
  };

  const handleRefuseAll = () => {
    localStorage.setItem('cookie-consent', 'refused');
    setConsent('refused');
  };

  if (consent !== 'none') {
    return null; // Don't render anything if decision is made (either accepted or refused)
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:max-w-md z-45 bg-black/80 border border-white/15 text-[#ebebe6] p-6 rounded-3xl shadow-2xl backdrop-blur-xl animate-fade-in divide-y divide-white/10">
      <div className="pb-4">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="h-4 w-4 text-[#27FCF2]" />
          <h3 className="font-normal text-sm tracking-wide uppercase font-memogram text-[#ebebe6]">Privacy Preference</h3>
        </div>
        <p className="text-xs text-[#ebebe6]/70 leading-relaxed font-sans">
          We utilize essential cookies to secure your transactions and to evaluate overall performance on our digital store. You can choose to accept or refuse non-essential trackers. More details are available in our{" "}
          <a href="#/legal/privacy-policy" className="text-[#27FCF2] hover:underline">
            Privacy Policy
          </a>.
        </p>
      </div>
      <div className="pt-4 flex items-center justify-end gap-3 text-xs font-mono">
        <button
          onClick={handleRefuseAll}
          className="px-4 py-2 rounded-full border border-white/15 hover:bg-white/10 text-[#ebebe6] transition-colors cursor-pointer"
        >
          Refuse
        </button>
        <button
          onClick={handleAcceptAll}
          className="px-5 py-2 rounded-full bg-[#27FCF2] hover:bg-[#27FCF2]/90 text-black font-bold tracking-wide transition-colors cursor-pointer shadow-md shadow-[#27FCF2]/20"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
