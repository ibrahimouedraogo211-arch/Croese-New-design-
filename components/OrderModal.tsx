/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BuyModal } from './BuyModal';

export interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialThemeSlug?: string;
}

export function OrderModal({ isOpen, onClose, initialThemeSlug }: OrderModalProps) {
  return (
    <BuyModal
      isOpen={isOpen}
      onClose={onClose}
      productSlug={initialThemeSlug}
    />
  );
}
