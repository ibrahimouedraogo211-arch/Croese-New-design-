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
    <div id={`detail-view-${theme.slug}`} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 relative z-10">
      
      {/* Back button */}
      <div>
        <button
          onClick={() => onNavigate('/themes')}
          className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ebebe6]/60 hover:text-[#27FCF2] transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Catalog
        </button>
      </div>

      {/* Main product showcase section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Cover & screenshot gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/15 bg-black shadow-2xl">
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
                    className={`relative aspect-[16/10] rounded-2xl overflow-hidden border transition-all cursor-pointer bg-black ${
                      isSelected ? 'border-[#27FCF2] ring-2 ring-[#27FCF2]/30' : 'border-white/10 hover:border-white/25'
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
                          <Play className="h-3.5 w-3.5 text-[#27FCF2] fill-[#27FCF2]" />
                        </div>
                        <span className="absolute bottom-1 right-1 text-[7px] uppercase tracking-wider bg-black/80 text-[#27FCF2] px-1 py-0.5 rounded font-mono font-bold">
                          Video
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
                className="w-full py-3.5 px-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-[#ebebe6] hover:text-white transition-all text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4 text-[#27FCF2]" />
                <span>Open Live Interactive Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Checkout panel & specs */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] bg-white/5 text-[#27FCF2] border border-white/15 px-3 py-1 rounded-full font-bold font-mono tracking-wider uppercase flex items-center gap-1.5">
                {isWebsite ? <Globe className="h-3 w-3" /> : <Code2 className="h-3 w-3" />}
                {theme.categoryLabel || (isWebsite ? 'Website Template' : 'Shopify OS 2.0')}
              </span>
              <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span>{avgRating}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-normal text-[#ebebe6] tracking-tight leading-none uppercase font-memogram">
              {theme.name}
            </h1>
            <p className="text-sm text-[#27FCF2] font-medium tracking-wide">
              {theme.tagline}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#ebebe6]/70 leading-relaxed font-sans">
            {theme.fullDescription}
          </p>

          {/* Tech Stack tags if present */}
          {theme.techStack && theme.techStack.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#ebebe6]/50 font-bold block">
                Tech Stack & Requirements:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {theme.techStack.map((tech, idx) => (
                  <span key={idx} className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#ebebe6]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Digital Product Instant Purchase Box */}
          <div className="bg-black/80 border border-white/15 p-6 rounded-3xl space-y-5 backdrop-blur-xl shadow-2xl">
            <div className="flex justify-between items-baseline">
              <div>
                <span className="text-xs text-[#ebebe6]/70 font-medium font-sans block">Digital Commercial License</span>
                <span className="text-[10px] text-[#27FCF2] font-mono">Instant digital download archive</span>
              </div>
              <span className="text-3xl font-bold text-[#ebebe6] font-mono">
                {theme.price}
                <span className="text-xs font-normal text-[#ebebe6]/50 ml-1">one-time</span>
              </span>
            </div>

            <div className="h-px bg-white/10" />

            <div className="space-y-2.5 text-xs text-[#ebebe6]/70 font-sans">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-[#27FCF2] shrink-0" />
                <span>Instant ready-to-deploy ZIP archive download</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-[#27FCF2] shrink-0" />
                <span>Commercial digital rights license & receipt</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-[#27FCF2] shrink-0" />
                <span>{theme.supportPeriod} included</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-[#27FCF2] shrink-0" />
                <span>Step-by-step setup documentation & guides</span>
              </div>
            </div>

            <div className="pt-2">
              <CheckoutButton
                priceId={theme.priceId}
                productSlug={theme.slug}
                price={theme.price}
                label={`Buy Now • ${theme.price}`}
                className="w-full bg-[#ebebe6] hover:bg-white text-black px-6 py-4 rounded-full shadow-2xl font-bold text-xs uppercase tracking-widest cursor-pointer active:scale-98 transition-all"
              />
            </div>

            {/* Trust notice */}
            <div className="text-[10px] text-[#ebebe6]/50 text-center font-mono flex items-center justify-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#27FCF2] shrink-0" />
              <span>Direct Instant Download • 256-bit SSL</span>
            </div>
          </div>

          {/* Quick specs grid */}
          <div className="grid grid-cols-2 gap-4 text-xs bg-black/60 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
            <div>
              <span className="text-[#ebebe6]/50 block font-medium">Developer</span>
              <span className="text-[#ebebe6] font-semibold">{theme.author}</span>
            </div>
            <div>
              <span className="text-[#ebebe6]/50 block font-medium">Current Version</span>
              <span className="text-[#ebebe6] font-mono font-semibold">v{theme.version}</span>
            </div>
            <div>
              <span className="text-[#ebebe6]/50 block font-medium">Released on</span>
              <span className="text-[#ebebe6] font-semibold">{theme.releaseDate}</span>
            </div>
            <div>
              <span className="text-[#ebebe6]/50 block font-medium">Compatibility</span>
              <span className="text-[#ebebe6] font-semibold">{theme.compatibility}</span>
            </div>
          </div>

        </div>

      </div>

      {/* Tabs */}
      <div className="border-t border-white/10 pt-10">
        <div className="flex border-b border-white/10 mb-8 overflow-x-auto whitespace-nowrap gap-6 text-sm font-semibold">
          {[
            { id: 'features', label: 'Key Features' },
            { id: 'faq', label: isWebsite ? 'Template FAQ' : 'Theme FAQ' },
            { id: 'reviews', label: 'Verified Reviews' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-4 border-b-2 px-1 transition-colors hover:text-white cursor-pointer uppercase text-xs tracking-wider ${
                activeTab === tab.id ? 'border-[#27FCF2] text-[#ebebe6] font-bold' : 'border-transparent text-[#ebebe6]/50'
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
                <div key={idx} className="flex items-start gap-3 bg-black/60 border border-white/10 p-5 rounded-2xl backdrop-blur-md">
                  <CheckCircle className="h-5 w-5 text-[#27FCF2] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#ebebe6]/80 font-sans">{feature}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="space-y-4 max-w-3xl">
              {theme.faq.map((item, idx) => (
                <div key={idx} className="border border-white/10 bg-black/60 rounded-2xl p-5 space-y-2 backdrop-blur-md">
                  <h4 className="text-sm font-bold text-white font-sans">{item.question}</h4>
                  <p className="text-xs text-[#ebebe6]/70 leading-relaxed font-sans">{item.answer}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {theme.reviews.map((rev) => (
                <div key={rev.id} className="border border-white/10 bg-black/60 p-6 rounded-2xl space-y-3 backdrop-blur-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="block text-sm font-bold text-white font-sans">{rev.userName}</span>
                      <span className="text-[10px] text-[#27FCF2] font-mono italic">Store / Project: {rev.shopName}</span>
                    </div>
                    <span className="text-[10px] text-[#ebebe6]/50 font-medium">{rev.date}</span>
                  </div>
                  <div className="flex gap-1 text-amber-400 text-xs">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-[#ebebe6]/70 leading-relaxed font-sans">{rev.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Help block */}
      <div className="bg-black/60 border border-white/10 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
        <div className="space-y-2">
          <h3 className="text-xl font-normal text-[#ebebe6] font-memogram uppercase">Need setup guidance or technical documentation?</h3>
          <p className="text-xs text-[#ebebe6]/70 max-w-xl font-sans leading-relaxed text-left">
            Read our step-by-step installation guides, check asset configuration tutorials, or contact Ibrahim Ouedraogo at Croese for technical support.
          </p>
        </div>
        <div className="flex gap-4 shrink-0 text-xs font-bold">
          <button onClick={() => onNavigate('/support')} className="text-[#27FCF2] hover:underline inline-flex items-center gap-1 cursor-pointer font-mono">
            Explore Documentation <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
