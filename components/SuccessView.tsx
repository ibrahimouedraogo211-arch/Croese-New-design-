/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { CheckCircle, Download, FileText, ChevronRight, Loader2, ShieldCheck, Sparkles } from 'lucide-react';
import { getThemeBySlug } from '../lib/themes';

interface SuccessViewProps {
  onNavigate: (path: string) => void;
}

export function SuccessView({ onNavigate }: SuccessViewProps) {
  const [productSlug, setProductSlug] = useState('manufactur');
  const [email, setEmail] = useState('customer@example.com');
  const [txn, setTxn] = useState('pol_live_demo');
  const [isCompilingZIP, setIsCompilingZIP] = useState(false);

  useEffect(() => {
    // Parse Hash Parameters: e.g. #success?slug=apex-saas&email=xxx&txn=pol_yyy
    const hash = window.location.hash || '';
    const queryPart = hash.includes('?') ? hash.split('?')[1] : '';
    if (queryPart) {
      const params = new URLSearchParams(queryPart);
      const slugVal = params.get('slug');
      const emailVal = params.get('email');
      const txnVal = params.get('txn');
      
      if (slugVal) setProductSlug(slugVal);
      if (emailVal) setEmail(emailVal);
      if (txnVal) setTxn(txnVal);
    }
  }, []);

  const product = getThemeBySlug(productSlug);
  const isWebsite = product?.category === 'website';
  const productName = product ? product.name : 'Croese Digital Product';
  const fullTitle = `Croese - ${productName} ${isWebsite ? 'Website Template' : 'Shopify Theme'}`;

  /**
   * Crafts and downloads a real, importable .ZIP
   * matching the actual purchased product, embedded with its transaction certificate
   */
  const handleDownloadZip = async () => {
    setIsCompilingZIP(true);
    try {
      const zip = new JSZip();

      // 1. Licensing certificate file
      const licenseTxt = `=====================================================
DIGITAL RIGHTS CERTIFICATE - CROESE
=====================================================
Transaction ID    : ${txn}
Delivered Product : ${fullTitle}
Product Category  : ${isWebsite ? 'Production Website Template' : 'Shopify OS 2.0 Theme'}
License Standard  : Single-Project Commercial Production License
Licensed To       : ${email}
Fulfillment       : Instant Digital Delivery by Croese
Date of Issuance  : ${new Date().toLocaleDateString('en-US')}

TERMS OF LICENSE:
This official digital token authorizes the licensee to deploy, run, and modify
this digital product for exactly one (1) live production deployment (or personal brand).
Redistribution, public sharing, or unauthorized resale of this source code
is strictly prohibited under international copyright conventions.

Thank you for purchasing premium digital products from Croese!
Need assistance? Contact our developer team at: ibraoued14@gmail.com
=====================================================`;
      zip.file("LICENSE.txt", licenseTxt);

      if (isWebsite) {
        // Website template boilerplate
        const packageJson = {
          name: productSlug,
          version: product?.version || "1.0.0",
          private: true,
          type: "module",
          scripts: {
            dev: "vite",
            build: "vite build",
            preview: "vite preview"
          },
          dependencies: {
            "react": "^19.0.0",
            "react-dom": "^19.0.0",
            "lucide-react": "^1.16.0",
            "clsx": "^2.1.1",
            "tailwind-merge": "^2.6.0"
          },
          devDependencies: {
            "@types/react": "^19.0.0",
            "@types/react-dom": "^19.0.0",
            "@vitejs/plugin-react": "^4.3.4",
            "typescript": "~5.7.2",
            "vite": "^6.1.0",
            "tailwindcss": "^4.0.0"
          }
        };
        zip.file("package.json", JSON.stringify(packageJson, null, 2));

        const readmeMd = `# ${fullTitle}

Licensed to: ${email}
Transaction ID: ${txn}

## Quick Setup
1. Unzip this package.
2. Run \`npm install\` to install dependencies.
3. Run \`npm run dev\` to start the local development server at \`http://localhost:5173\`.
4. Run \`npm run build\` to generate production-ready static assets in \`dist/\`.

For technical assistance, contact: ibraoued14@gmail.com
`;
        zip.file("README.md", readmeMd);

        // src/App.tsx
        const appCode = `import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl text-center space-y-4">
        <span className="text-[#27FCF2] text-xs font-mono uppercase tracking-widest font-bold">
          Croese Production Template
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight">
          Welcome to ${productName}
        </h1>
        <p className="text-sm text-neutral-400">
          Your licensed website template is ready to customize. Edit \`src/App.tsx\` to begin building.
        </p>
      </div>
    </div>
  );
}
`;
        zip.file("src/App.tsx", appCode);

      } else {
        // Shopify theme boilerplate
        const configJson = {
          name: fullTitle,
          theme_name: fullTitle,
          theme_version: product?.version || "1.0.0",
          theme_author: "Croese",
          theme_documentation_url: "https://croese.com/support",
          theme_support_email: "ibraoued14@gmail.com",
          settings: [
            {
              name: "Global Colors",
              settings: [
                {
                  type: "color",
                  id: "color_accent",
                  label: "Accent branding focus color",
                  default: "#10b981"
                }
              ]
            }
          ]
        };
        zip.file("config/settings_schema.json", JSON.stringify(configJson, null, 2));

        const themeLiquidCode = `<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>{{ page_title }}</title>
    {{ content_for_header }}
    
    <!-- Code block belonging to ${fullTitle} - License Token: ${txn} -->
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        background: #0a0a0a;
        color: #fff;
        margin: 0;
      }
      .croese-badge {
        padding: 8px 12px;
        background: #10b981;
        color: #050505;
        font-family: monospace;
        font-size: 11px;
        font-weight: bold;
      }
    </style>
  </head>
  <body class="gradient">
    <main id="MainContent" class="content-for-layout focus-none" role="main" tabindex="-1">
      {{ content_for_layout }}
    </main>
  </body>
</html>`;
        zip.file("layout/theme.liquid", themeLiquidCode);

        // templates/index.json
        const indexJson = {
          sections: {
            hero: {
              type: "hero-banner",
              settings: {
                heading: `Welcome to ${productName}`,
                subheading: "Powered by Croese Shopify Themes"
              }
            }
          },
          order: ["hero"]
        };
        zip.file("templates/index.json", JSON.stringify(indexJson, null, 2));
      }

      // Generate the zip blob
      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, `Croese_${productSlug}_License_${txn.slice(0, 8)}.zip`);

    } catch (err) {
      console.error("ZIP Generation error:", err);
    } finally {
      setIsCompilingZIP(false);
    }
  };

  return (
    <div id="success-view" className="max-w-2xl mx-auto px-4 sm:px-6 py-16 space-y-8 animate-fade-in text-[#ebebe6]/80 relative z-10">
      
      {/* Visual Success Confirmation Box */}
      <div className="bg-black/60 border border-white/15 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        <div className="mx-auto h-16 w-16 bg-white/5 border border-white/10 text-[#27FCF2] rounded-2xl flex items-center justify-center">
          <CheckCircle className="h-8 w-8" />
        </div>
        
        <div className="space-y-2">
          <span className="text-xs tracking-widest font-mono font-semibold uppercase text-[#27FCF2]">
            Payment Completed • Instant Digital Delivery
          </span>
          <h1 className="text-2xl sm:text-3xl font-normal text-[#ebebe6] tracking-tight uppercase font-memogram">
            Thank you for your purchase
          </h1>
        </div>

        <p className="text-xs text-[#ebebe6]/70 leading-normal max-w-sm mx-auto font-sans">
          Your digital order has been completed successfully. Your download links and customized installation files are initialized below.
        </p>

        {/* Transaction attributes */}
        <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-left text-xs font-sans">
          <div className="space-y-1 p-3.5 bg-white/5 rounded-2xl border border-white/10">
            <span className="block text-[9px] text-[#ebebe6]/50 uppercase tracking-widest font-semibold font-mono">Delivered Product</span>
            <span className="text-[#ebebe6] font-medium truncate block">{fullTitle}</span>
          </div>
          <div className="space-y-1 p-3.5 bg-white/5 rounded-2xl border border-white/10">
            <span className="block text-[9px] text-[#ebebe6]/50 uppercase tracking-widest font-semibold font-mono">Licensed Email</span>
            <span className="text-[#ebebe6] font-medium truncate block" title={email}>{email}</span>
          </div>
          <div className="col-span-2 space-y-1 p-3.5 bg-white/5 rounded-2xl border border-white/10 font-mono">
            <span className="block text-[9px] text-[#ebebe6]/50 uppercase tracking-widest font-semibold font-mono">Order Transaction Identifier</span>
            <span className="text-[#27FCF2] text-[11px] select-all break-all">{txn}</span>
          </div>
        </div>

        {/* Dynamic downloads compiled via JSZip */}
        <div className="pt-4">
          <button
            onClick={handleDownloadZip}
            disabled={isCompilingZIP}
            className="w-full py-4 bg-[#27FCF2] hover:bg-[#27FCF2]/90 disabled:opacity-50 text-black rounded-full text-xs uppercase tracking-wider font-mono font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg shadow-[#27FCF2]/20"
          >
            {isCompilingZIP ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-black shrink-0" />
                <span>Compiling Production Package (.ZIP)...</span>
              </>
            ) : (
              <>
                <Download className="h-4 w-4 text-black" />
                <span>Download Production Package (.ZIP)</span>
              </>
            )}
          </button>
        </div>

        {/* Trust confirmation */}
        <div className="pt-2 flex items-center justify-center gap-2 text-[10px] text-[#ebebe6]/50 font-mono">
          <ShieldCheck className="h-3.5 w-3.5 text-[#27FCF2]" />
          <span>Encrypted 256-bit SSL • Direct Digital Fulfillment</span>
        </div>
      </div>

      {/* Post transaction guides */}
      <div className="bg-black/60 border border-white/15 rounded-3xl p-6 md:p-8 space-y-4 font-sans text-xs text-[#ebebe6]/75 backdrop-blur-xl">
        <h3 className="font-normal text-[#ebebe6] uppercase tracking-wider text-xs mb-2 flex items-center gap-2 font-memogram">
          <FileText className="h-4 w-4 text-[#27FCF2]" />
          Next Steps for Setup
        </h3>
        
        <ul className="space-y-3 pl-4 list-decimal marker:text-[#27FCF2] marker:font-bold leading-normal text-justify">
          <li>
            Click the button above to download your full production package (.ZIP) containing all source files and commercial license certificate.
          </li>
          <li>
            {isWebsite ? (
              <span>
                Extract the ZIP archive and run <code className="text-[#27FCF2] bg-white/5 px-1.5 py-0.5 rounded font-mono">npm install</code>, then follow the enclosed <code className="text-[#27FCF2] bg-white/5 px-1.5 py-0.5 rounded font-mono">README.md</code>.
              </span>
            ) : (
              <span>
                Follow our <button onClick={() => onNavigate('/support')} className="text-[#27FCF2] hover:underline inline-flex font-semibold">Step-by-Step Installation Manual</button> to upload the theme archive directly into your Shopify admin under Online Store &gt; Themes.
              </span>
            )}
          </li>
          <li>
            Activate technical developer assistance anytime by providing your transaction code <code>{txn.slice(0, 16)}...</code> to <a href="mailto:ibraoued14@gmail.com" className="text-[#27FCF2] hover:underline font-mono">ibraoued14@gmail.com</a>.
          </li>
        </ul>
      </div>

      <div className="text-center">
        <button
          onClick={() => onNavigate('/themes')}
          className="text-xs text-[#ebebe6]/60 hover:text-white font-mono uppercase tracking-wider inline-flex items-center gap-1 transition-colors cursor-pointer"
        >
          <span>Return to Product Catalog</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

    </div>
  );
}
