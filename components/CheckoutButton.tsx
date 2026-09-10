/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { BuyModal } from './BuyModal';

interface CheckoutButtonProps {
  priceId?: string;
  themeSlug?: string;
  productSlug?: string;
  price?: string;
  label?: string;
  className?: string;
  onSuccess?: (data: any) => void;
  onClick?: () => void;
}

export function CheckoutButton({ 
  priceId, 
  themeSlug = 'manufactur', 
  productSlug,
  price,
  label = "Buy Now", 
  className = "",
  onClick,
  onSuccess 
}: CheckoutButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeSlug = productSlug || themeSlug;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`relative overflow-hidden font-bold rounded-xl text-center uppercase tracking-wider text-xs transition-all active:scale-95 duration-150 flex items-center justify-center gap-2 px-6 py-4 cursor-pointer ${
          className || "bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-lg shadow-emerald-500/10"
        }`}
      >
        <ShoppingCart className="h-4 w-4 text-inherit shrink-0" />
        <span>{label}</span>
      </button>

      <BuyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productSlug={activeSlug}
        onSuccess={onSuccess}
      />
    </>
  );
}
