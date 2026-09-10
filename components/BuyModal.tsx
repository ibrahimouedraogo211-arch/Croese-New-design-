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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        id="buy-modal-container"
        className="bg-neutral-950 border border-neutral-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-neutral-900 px-6 py-4 bg-neutral-900/40">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center font-bold text-sm">
              <ShoppingCart className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-white">Buy {product.name}</h3>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-neutral-900 text-emerald-400 border border-neutral-800">
                  {isWebsite ? 'Website Template' : 'Shopify Theme'}
                </span>
              </div>
              <p className="text-[10px] text-neutral-400 font-mono">
                Instant digital delivery
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-900 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Product Summary Box */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800/80">
            <img 
              src={product.coverImage} 
              alt={product.name} 
              className="w-20 h-20 rounded-xl object-cover border border-neutral-800 shrink-0"
            />
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-baseline justify-between gap-2">
                <h4 className="font-bold text-white text-base truncate">{product.name}</h4>
                <span className="text-xl font-extrabold text-emerald-400 shrink-0 font-mono">
                  {product.price}
                </span>
              </div>
              <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                {product.tagline}
              </p>
              <div className="text-[10px] text-neutral-500 font-mono pt-1">
                Version {product.version} • {product.compatibility}
              </div>
            </div>
          </div>

          {/* What's included checklist */}
          <div className="space-y-2 text-xs bg-neutral-900/30 border border-neutral-900 rounded-xl p-4">
            <span className="text-[10px] uppercase tracking-wider font-mono text-neutral-500 font-bold block mb-1">
              Included with your digital purchase:
            </span>
            <div className="flex items-center gap-2 text-neutral-300">
              <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Full source code & install-ready ZIP archive</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Commercial license key (single domain or personal usage)</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>30 days of technical support & step-by-step setup documentation</span>
            </div>
          </div>

          {/* Purchase Form */}
          <form onSubmit={handleCheckout} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="customer-email" className="block text-xs font-semibold text-neutral-300">
                Delivery Email Address <span className="text-emerald-400">*</span>
              </label>
              <input
                id="customer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors font-mono"
              />
              <p className="text-[10px] text-neutral-500">
                Your delivery address will be forwarded directly to your Polar checkout session.
              </p>
            </div>

            {/* Direct action button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isProcessing || !email}
                className="w-full py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <span>Redirecting to Polar checkout...</span>
                ) : (
                  <>
                    <Lock className="h-4 w-4 text-neutral-950" />
                    <span>Buy Now • {product.price}</span>
                    <ArrowRight className="h-4 w-4 text-neutral-950" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Trust Footer */}
          <div className="border-t border-neutral-900/80 pt-4 flex items-center justify-center gap-4 text-[10px] text-neutral-500 font-mono">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              Direct Instant Delivery
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Lock className="h-3.5 w-3.5 text-emerald-400" />
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
