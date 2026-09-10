/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Download, Upload, Sliders, Mail, FileText, ChevronRight } from 'lucide-react';

interface SupportViewProps {
  onNavigate: (path: string) => void;
}

export function SupportView({ onNavigate }: SupportViewProps) {
  const [docNotice, setDocNotice] = React.useState(false);

  return (
    <div id="support-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 relative z-10">
      
      {/* Header section */}
      <div className="space-y-4 text-center pb-8 border-b border-white/10">
        <span className="text-[#27FCF2] text-xs font-mono tracking-widest uppercase font-semibold">
          Support Hub
        </span>
        <h1 className="text-3xl sm:text-5xl font-normal text-[#ebebe6] tracking-tight leading-tight uppercase font-memogram">
          Installation Manual & Resources
        </h1>
        <p className="text-[#ebebe6]/70 text-sm max-w-2xl mx-auto leading-relaxed font-sans">
          Step-by-step guidance to deploy your Shopify theme or website architecture package seamlessly.
        </p>
      </div>

      {/* Steps list */}
      <div className="space-y-8 pt-2">
        <h2 className="text-xl font-normal text-[#ebebe6] tracking-tight border-b border-white/10 pb-4 uppercase font-memogram">
          Step-by-Step Installation Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 1 */}
          <div className="bg-black/60 border border-white/15 p-6 md:p-8 rounded-3xl space-y-5 flex flex-col justify-between backdrop-blur-xl shadow-2xl">
            <div className="space-y-4">
              <div className="h-12 w-12 bg-white/5 border border-white/10 text-[#27FCF2] rounded-2xl flex items-center justify-center font-bold font-mono text-base">
                01
              </div>
              <h3 className="text-sm font-normal text-[#ebebe6] flex items-center gap-2 font-memogram uppercase tracking-wide">
                <Download className="h-4 w-4 text-[#27FCF2] shrink-0" />
                Obtain ZIP Package
              </h3>
              <p className="text-xs text-[#ebebe6]/70 leading-relaxed font-sans text-justify">
                Immediately following checkout verification, review your email inbox. You will receive an official download link with your custom compressed theme assets (e.g. <code className="text-[#27FCF2] font-mono">theme-package.zip</code>) and license certificate token.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-black/60 border border-white/15 p-6 md:p-8 rounded-3xl space-y-5 flex flex-col justify-between backdrop-blur-xl shadow-2xl">
            <div className="space-y-4">
              <div className="h-12 w-12 bg-white/5 border border-white/10 text-[#27FCF2] rounded-2xl flex items-center justify-center font-bold font-mono text-base">
                02
              </div>
              <h3 className="text-sm font-normal text-[#ebebe6] flex items-center gap-2 font-memogram uppercase tracking-wide">
                <Upload className="h-4 w-4 text-[#27FCF2] shrink-0" />
                Upload to Store
              </h3>
              <p className="text-xs text-[#ebebe6]/70 leading-relaxed font-sans text-justify">
                Sign in to your Shopify store administration portal. Navigate to <strong className="text-[#ebebe6]">Online Store</strong> → <strong className="text-[#ebebe6]">Themes</strong>. Inside the Theme Library deck, select <strong className="text-[#ebebe6]">Add Theme</strong> and upload your downloaded <code className="text-[#27FCF2] font-mono">.zip</code> package directly.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-black/60 border border-white/15 p-6 md:p-8 rounded-3xl space-y-5 flex flex-col justify-between backdrop-blur-xl shadow-2xl">
            <div className="space-y-4">
              <div className="h-12 w-12 bg-white/5 border border-white/10 text-[#27FCF2] rounded-2xl flex items-center justify-center font-bold font-mono text-base">
                03
              </div>
              <h3 className="text-sm font-normal text-[#ebebe6] flex items-center gap-2 font-memogram uppercase tracking-wide">
                <Sliders className="h-4 w-4 text-[#27FCF2] shrink-0" />
                Customize & Design
              </h3>
              <p className="text-xs text-[#ebebe6]/70 leading-relaxed font-sans text-justify">
                Once downloaded, the theme displays underneath your library slots. Tap <strong className="text-[#ebebe6]">Customize</strong> to open the visual editor to adjust colors, typography, and layouts safely before publishing to production.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Help ticketing info block */}
      <div className="bg-black/60 border border-white/15 rounded-3xl p-8 space-y-6 backdrop-blur-xl">
        <h3 className="text-lg font-normal text-[#ebebe6] uppercase font-memogram tracking-wider">How to initiate a support request ticket?</h3>
        
        <p className="text-xs text-[#ebebe6]/75 leading-relaxed font-sans text-justify">
          If you encounter difficulties customizing sections, integrating pixel trackers, or solving conflicts induced by third-party apps, our specialized technical support desk is entirely free for 6 months after acquisition:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#ebebe6]/75 font-sans">
          
          <div className="space-y-3 border-l-2 border-[#27FCF2] pl-5">
            <h4 className="font-semibold text-[#ebebe6] text-sm font-memogram uppercase">Interactive Support Forms</h4>
            <p className="text-justify leading-relaxed">
              Use our on-site ticket routing layout to outline details. Insert snapshots of your Shopify block layout settings to let our agents diagnose discrepancies rapidly.
            </p>
            <button 
              onClick={() => onNavigate('/contact')}
              className="text-[#27FCF2] hover:text-[#27FCF2]/80 font-bold hover:underline inline-flex items-center gap-1 pt-1 cursor-pointer font-mono"
            >
              Open Ticket Form <ChevronRight className="h-3 w-3" />
            </button>
          </div>

          <div className="space-y-3 border-l-2 border-[#27FCF2] pl-5">
            <h4 className="font-semibold text-[#ebebe6] text-sm font-memogram uppercase">Direct Priority Email Contacts</h4>
            <p className="text-justify leading-relaxed">
              Email our support desk using the authorized account. Always include your order reference number or your licensed domain address to qualify for priority queue response.
            </p>
            <a href="mailto:ibraoued14@gmail.com" className="text-[#27FCF2] font-mono font-bold hover:underline block pt-1">
              ibraoued14@gmail.com
            </a>
          </div>

        </div>
      </div>

      {/* Documentation Starter Templates */}
      <div className="border border-white/15 bg-black/60 p-6 md:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-white/5 border border-white/10 text-[#27FCF2] rounded-2xl flex items-center justify-center shrink-0">
            <FileText className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">Need the PDF Setup Manual?</h4>
            <p className="text-xs text-[#ebebe6]/60 font-sans text-justify">
              Detailed PDF documentation, code selectors, and asset guides are bundled directly inside your downloaded theme ZIP package.
            </p>
            {docNotice && (
              <p className="text-xs text-[#27FCF2] font-mono mt-1">
                The setup guide is bundled inside the .ZIP archive in the /docs folder.
              </p>
            )}
          </div>
        </div>
        <button 
          onClick={() => setDocNotice(true)}
          className="text-black bg-[#27FCF2] hover:bg-[#27FCF2]/90 text-xs font-mono font-bold uppercase tracking-wider shrink-0 px-6 py-3 rounded-full transition-all cursor-pointer shadow-lg shadow-[#27FCF2]/20"
        >
          View Documentation Info
        </button>
      </div>

    </div>
  );
}
