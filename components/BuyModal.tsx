/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, ShoppingCart, ArrowRight, Download, Sparkles, Lock } from 'lucide-react';
import { getThemeBySlug, getThemes } from '../lib/themes';
import { startPolarCheckout } from '../lib/polar';

export interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  productSlug?: string;
  onSuccess?: (txnId: string) => void;
}

export function BuyModal({ isOpen, onClose, productSlug = 'manufactur', onSuccess }: BuyModalProps) {
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const themes = getThemes();
  const product = getThemeBySlug(productSlug) || themes[0];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.trim()) return;

    setIsProcessing(true);

    try {
      await startPolarCheckout({
        productSlug: product.slug,
        productName: product.name,
        price: product.price,
        priceNumber: product.priceNumber,
        polarUrl: product.polarUrl,
        priceId: product.priceId,
        customerEmail: email.trim(),
        onSuccess: (txn) => {
          if (onSuccess) onSuccess(txn);
        }
      });
      onClose();
    } catch (err) {
      console.error('Polar checkout redirection error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const isWebsite = product.category === 'website';

  return (
    <div 
      id="buy-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        id="buy-modal-container"
        className="bg-[#0e0e0d] border border-white/15 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative text-[#ebebe6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 bg-white/5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-white/5 text-[#27FCF2] border border-white/10 flex items-center justify-center font-bold text-sm">
              <ShoppingCart className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-normal text-lg text-white font-memogram uppercase tracking-wide">Buy {product.name}</h3>
                <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-[#27FCF2] border border-white/10">
                  {isWebsite ? 'Website' : 'Shopify 2.0'}
                </span>
              </div>
              <p className="text-[11px] text-[#ebebe6]/60 font-mono">
                Instant digital license & ZIP download
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-[#ebebe6]/60 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Product Summary Box */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/60 border border-white/10">
            <img 
              src={product.coverImage} 
              alt={product.name} 
              className="w-20 h-20 rounded-xl object-cover border border-white/10 shrink-0"
            />
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-baseline justify-between gap-2">
                <h4 className="font-bold text-white text-base truncate font-memogram uppercase tracking-wide">{product.name}</h4>
                <span className="text-xl font-bold text-[#27FCF2] shrink-0 font-mono">
                  {product.price}
                </span>
              </div>
              <p className="text-xs text-[#ebebe6]/60 line-clamp-2 leading-relaxed font-sans">
                {product.tagline}
              </p>
              <div className="text-[10px] text-[#ebebe6]/40 font-mono pt-1">
                Version {product.version} • {product.compatibility}
              </div>
            </div>
          </div>

          {/* What's included checklist */}
          <div className="space-y-2 text-xs bg-black/40 border border-white/10 rounded-2xl p-4">
            <span className="text-[10px] uppercase tracking-wider font-mono text-[#ebebe6]/50 font-bold block mb-1">
              Included with your digital purchase:
            </span>
            <div className="flex items-center gap-2 text-[#ebebe6]/80">
              <CheckCircle className="h-4 w-4 text-[#27FCF2] shrink-0" />
              <span>Full source code & install-ready ZIP archive</span>
            </div>
            <div className="flex items-center gap-2 text-[#ebebe6]/80">
              <CheckCircle className="h-4 w-4 text-[#27FCF2] shrink-0" />
              <span>Commercial license key (perpetual single-domain usage)</span>
            </div>
            <div className="flex items-center gap-2 text-[#ebebe6]/80">
              <CheckCircle className="h-4 w-4 text-[#27FCF2] shrink-0" />
              <span>30 days developer technical support & setup documentation</span>
            </div>
          </div>

          {/* Purchase Form */}
          <form onSubmit={handleCheckout} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="customer-email" className="block text-xs font-mono uppercase tracking-wider text-[#ebebe6]/70">
                Delivery Email Address <span className="text-[#27FCF2]">*</span>
              </label>
              <input
                id="customer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="merchant@store.com"
                className="w-full bg-black/60 border border-white/15 rounded-full px-5 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#27FCF2] transition-colors font-mono"
              />
              <p className="text-[10px] text-[#ebebe6]/40 font-mono pl-1">
                Your ZIP download link and commercial invoice will be sent here.
              </p>
            </div>

            {/* Direct action button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isProcessing || !email}
                className="w-full py-4 px-6 rounded-full font-bold text-xs uppercase tracking-widest bg-[#ebebe6] hover:bg-white text-black transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-98"
              >
                {isProcessing ? (
                  <span>Connecting to Checkout...</span>
                ) : (
                  <>
                    <Lock className="h-3.5 w-3.5 text-black" />
                    <span>Complete Purchase • {product.price}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-black" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Trust Footer */}
          <div className="border-t border-white/10 pt-4 flex items-center justify-center gap-4 text-[10px] text-[#ebebe6]/50 font-mono">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-[#27FCF2]" />
              Direct Instant Delivery
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Lock className="h-3.5 w-3.5 text-[#27FCF2]" />
              256-Bit SSL Encrypted
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Keep OrderModal exported as an alias for seamless backward compatibility
export const OrderModal = BuyModal;
