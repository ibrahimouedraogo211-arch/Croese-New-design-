/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShopifyTheme } from '../types';
import { CheckoutButton } from './CheckoutButton';
import { BadgeCheck, ArrowLeft, Star, CheckCircle, ChevronRight, ExternalLink, ShieldCheck, Download, Code2, Globe, Play } from 'lucide-react';

interface DetailViewProps {
  theme: ShopifyTheme;
  onNavigate: (path: string) => void;
}

export function DetailView({ theme, onNavigate }: DetailViewProps) {
  const [activeImage, setActiveImage] = useState(theme.images[0] || theme.coverImage);
  const [activeTab, setActiveTab] = useState<'features' | 'faq' | 'reviews'>('features');

  // Calculates reviews average rating
  const avgRating = theme.reviews.length > 0
    ? (theme.reviews.reduce((acc, r) => acc + r.rating, 0) / theme.reviews.length).toFixed(1)
    : "5.0";

  const isWebsite = theme.category === 'website';

  return (
    <div id={`detail-view-${theme.slug}`} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Back button */}
      <div>
        <button
          onClick={() => onNavigate('/themes')}
          className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-emerald-400 transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Catalog
        </button>
      </div>

      {/* Main product showcase section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Cover & screenshot gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
            {activeImage.includes('.mp4') ? (
              <video
                key={activeImage}
                src={activeImage}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={activeImage}
                alt={`Detailed preview of ${theme.name}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all"
              />
            )}
          </div>
          
          {/* Thumbnails switcher */}
          {theme.images.length > 1 && (
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {theme.images.map((imgUrl, idx) => {
                const isVideo = imgUrl.includes('.mp4');
                const isSelected = activeImage === imgUrl;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative aspect-[16/10] rounded-xl overflow-hidden border transition-all cursor-pointer bg-neutral-950 ${
                      isSelected ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    {isVideo ? (
                      <div className="relative w-full h-full flex items-center justify-center bg-neutral-900">
                        <video
                          src={imgUrl}
                          muted
                          playsInline
                          className="w-full h-full object-cover opacity-70"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <Play className="h-3.5 w-3.5 text-emerald-400 fill-emerald-400" />
                        </div>
                        <span className="absolute bottom-1 right-1 text-[7px] uppercase tracking-wider bg-black/80 text-emerald-400 px-1 py-0.5 rounded font-mono font-bold">
                          Vidéo
                        </span>
                      </div>
                    ) : (
                      <img
                        src={imgUrl}
                        alt={`${theme.name} layout preview ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* External Links */}
          <div className="space-y-2 pt-2">
            {theme.demoUrl && (
              <a
                href={theme.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-850 text-neutral-200 hover:text-white transition-all text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4 text-emerald-400" />
                <span>Open Live Interactive Demo</span>
              </a>
            )}
            {theme.slug === 'palmo' && (
              <a
                href="https://www.awwwards.com/inspiration/desktop-palmo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl border border-neutral-800/80 bg-neutral-950 hover:bg-neutral-900 text-neutral-400 hover:text-emerald-400 transition-all text-[11px] uppercase font-bold tracking-wider flex items-center justify-center gap-2"
              >
                <Globe className="h-3.5 w-3.5 text-emerald-400" />
                <span>View on Awwwards Inspiration</span>
              </a>
            )}
            {theme.slug === 'sigma-imaging' && (
              <a
                href="https://www.awwwards.com/sites/sigma-imaging"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl border border-neutral-800/80 bg-neutral-950 hover:bg-neutral-900 text-neutral-400 hover:text-emerald-400 transition-all text-[11px] uppercase font-bold tracking-wider flex items-center justify-center gap-2"
              >
                <Globe className="h-3.5 w-3.5 text-emerald-400" />
                <span>View on Awwwards Nominee</span>
              </a>
            )}
            {theme.slug === 'brigade-overland' && (
              <a
                href="https://www.awwwards.com/sites/brigade-overland"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl border border-neutral-800/80 bg-neutral-950 hover:bg-neutral-900 text-neutral-400 hover:text-emerald-400 transition-all text-[11px] uppercase font-bold tracking-wider flex items-center justify-center gap-2"
              >
                <Globe className="h-3.5 w-3.5 text-emerald-400" />
                <span>View on Awwwards Nominee</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Checkout panel & specs */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded font-extrabold font-mono tracking-wider uppercase flex items-center gap-1">
                {isWebsite ? <Globe className="h-3 w-3" /> : <Code2 className="h-3 w-3" />}
                {theme.categoryLabel || (isWebsite ? 'Website Template' : 'Shopify OS 2.0')}
              </span>
              <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/10">
                <Star className="h-3 w-3 fill-amber-500" />
                <span>{avgRating}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
              {theme.name} {isWebsite ? 'Site' : 'Theme'}
            </h1>
            <p className="text-sm text-emerald-400 font-medium italic">
              {theme.tagline}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans text-justify">
            {theme.fullDescription}
          </p>

          {/* Tech Stack tags if present */}
          {theme.techStack && theme.techStack.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 font-bold block">
                Tech Stack & Requirements:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {theme.techStack.map((tech, idx) => (
                  <span key={idx} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Digital Product Instant Purchase Box */}
          <div className="bg-neutral-900/60 border border-neutral-800 p-5 rounded-2xl space-y-4">
            <div className="flex justify-between items-baseline">
              <div>
                <span className="text-xs text-neutral-400 font-medium font-sans block">Digital Commercial License</span>
                <span className="text-[10px] text-emerald-400 font-mono">Instant digital download</span>
              </div>
              <span className="text-3xl font-black text-white font-mono">
                {theme.price}
                <span className="text-xs font-normal text-neutral-500 ml-1">one-time</span>
              </span>
            </div>

            <div className="h-px bg-neutral-800" />

            <div className="space-y-2 text-xs text-neutral-400 font-sans">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Instant ready-to-deploy ZIP archive download</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Commercial digital rights license & invoice</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{theme.supportPeriod} included</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Step-by-step setup documentation & guides</span>
              </div>
            </div>

            <div className="pt-2">
              <CheckoutButton
                priceId={theme.priceId}
                productSlug={theme.slug}
                price={theme.price}
                label={`Buy Now • ${theme.price}`}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 px-6 py-4 shadow-xl"
              />
            </div>

            {/* Trust notice */}
            <div className="text-[10px] text-neutral-500 text-center font-mono flex items-center justify-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>Direct Instant Download • 256-bit SSL</span>
            </div>
          </div>

          {/* Quick specs grid */}
          <div className="grid grid-cols-2 gap-4 text-xs bg-neutral-950 border border-neutral-800 rounded-xl p-4">
            <div>
              <span className="text-neutral-500 block font-medium">Developer</span>
              <span className="text-neutral-200 font-semibold">{theme.author}</span>
            </div>
            <div>
              <span className="text-neutral-500 block font-medium">Current Version</span>
              <span className="text-neutral-200 font-mono font-semibold">v{theme.version}</span>
            </div>
            <div>
              <span className="text-neutral-500 block font-medium">Released on</span>
              <span className="text-neutral-200 font-semibold">{theme.releaseDate}</span>
            </div>
            <div>
              <span className="text-neutral-500 block font-medium">Compatibility</span>
              <span className="text-neutral-200 font-semibold">{theme.compatibility}</span>
            </div>
          </div>

        </div>

      </div>

      {/* Tabs */}
      <div className="border-t border-neutral-900 pt-10">
        <div className="flex border-b border-neutral-800 mb-8 overflow-x-auto whitespace-nowrap gap-6 text-sm font-semibold">
          {[
            { id: 'features', label: 'Key Features' },
            { id: 'faq', label: isWebsite ? 'Template FAQ' : 'Theme FAQ' },
            { id: 'reviews', label: 'Verified Reviews' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-4 border-b-2 px-1 transition-colors hover:text-white cursor-pointer uppercase text-xs tracking-wider ${
                activeTab === tab.id ? 'border-emerald-500 text-white font-bold' : 'border-transparent text-neutral-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab contents */}
        <div className="min-h-[200px]">
          {activeTab === 'features' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {theme.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-neutral-900/20 border border-neutral-800 p-5 rounded-xl">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300 font-sans">{feature}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="space-y-4 max-w-3xl">
              {theme.faq.map((item, idx) => (
                <div key={idx} className="border border-neutral-800 bg-neutral-900/10 rounded-xl p-5 space-y-2">
                  <h4 className="text-sm font-bold text-white font-sans">{item.question}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans text-justify">{item.answer}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {theme.reviews.map((rev) => (
                <div key={rev.id} className="border border-neutral-800/80 bg-neutral-900/10 p-6 rounded-xl space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="block text-sm font-bold text-white font-sans">{rev.userName}</span>
                      <span className="text-[10px] text-emerald-400 font-mono italic">Store / Project: {rev.shopName}</span>
                    </div>
                    <span className="text-[10px] text-neutral-500 font-medium">{rev.date}</span>
                  </div>
                  <div className="flex gap-1 text-amber-500 text-xs">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans text-justify">{rev.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Help block */}
      <div className="bg-gradient-to-r from-neutral-900/40 via-neutral-950 to-neutral-900/40 border border-neutral-850 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-white">Need setup guidance or technical documentation?</h3>
          <p className="text-xs text-neutral-400 max-w-xl font-sans leading-relaxed text-left">
            Read our step-by-step installation guides, check asset configuration tutorials, or contact our developer team at Croese for technical support.
          </p>
        </div>
        <div className="flex gap-4 shrink-0 text-xs font-bold">
          <button onClick={() => onNavigate('/support')} className="text-emerald-400 hover:underline inline-flex items-center gap-1 cursor-pointer">
            Explore Documentation <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
