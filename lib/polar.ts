/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PolarCheckoutOptions {
  productSlug: string;
  productName: string;
  price: string;
  priceNumber?: number;
  polarUrl?: string;
  customerEmail?: string;
  priceId?: string;
  onSuccess?: (txnId: string) => void;
  onClose?: () => void;
}

/**
 * Returns the Polar checkout URL for a given product and customer email
 */
export function getPolarCheckoutUrl(productSlug: string, customerEmail?: string): string {
  const envKey = `VITE_POLAR_CHECKOUT_${productSlug.toUpperCase().replace(/-/g, '_')}`;
  const envUrl = (import.meta as any).env?.[envKey];
  
  const baseStore = (import.meta as any).env?.VITE_POLAR_STORE_URL || 'https://polar.sh/croese';
  const cleanStore = baseStore.replace(/\/$/, '');

  let targetUrl: string;
  if (envUrl && envUrl.startsWith('http')) {
    targetUrl = envUrl;
  } else if (cleanStore.includes('checkout')) {
    targetUrl = `${cleanStore}?product=${encodeURIComponent(productSlug)}`;
  } else {
    // Standard Polar store product checkout link
    targetUrl = `${cleanStore}/products/${encodeURIComponent(productSlug)}`;
  }

  if (customerEmail && customerEmail.trim()) {
    const separator = targetUrl.includes('?') ? '&' : '?';
    targetUrl = `${targetUrl}${separator}customer_email=${encodeURIComponent(customerEmail.trim())}`;
  }

  return targetUrl;
}

/**
 * Initiates checkout on the user's Polar store
 * Once the email is provided, it redirects the customer directly to the Polar checkout.
 */
export async function startPolarCheckout({
  productSlug,
  productName,
  price,
  polarUrl,
  customerEmail,
  priceId,
  onSuccess
}: PolarCheckoutOptions): Promise<{ url: string; success: boolean }> {
  let finalUrl = polarUrl;

  // 1. Check if direct URL with email is already supplied
  if (!finalUrl) {
    // 2. Check if a Polar Access Token is configured to create an authenticated Polar Checkout Session
    const polarToken = 
      (import.meta as any).env?.VITE_POLAR_ACCESS_TOKEN || 
      (import.meta as any).env?.POLAR_ACCESS_TOKEN;

    if (polarToken && customerEmail) {
      try {
        const response = await fetch('https://api.polar.sh/v1/checkouts/custom/', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${polarToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            product_price_id: priceId || `pri_${productSlug}`,
            customer_email: customerEmail.trim()
          })
        });

        if (response.ok) {
          const data = await response.json();
          if (data?.url) {
            finalUrl = data.url;
          }
        }
      } catch (err) {
        console.warn('Polar API custom checkout error, falling back to direct URL:', err);
      }
    }

    // 3. Fallback to the configured Polar store checkout URL with customer_email param
    if (!finalUrl) {
      finalUrl = getPolarCheckoutUrl(productSlug, customerEmail);
    }
  } else if (customerEmail && !finalUrl.includes('customer_email=')) {
    const separator = finalUrl.includes('?') ? '&' : '?';
    finalUrl = `${finalUrl}${separator}customer_email=${encodeURIComponent(customerEmail.trim())}`;
  }

  // Execute redirection to Polar checkout
  try {
    const opened = window.open(finalUrl, '_blank');
    if (!opened || opened.closed || typeof opened.closed === 'undefined') {
      window.location.href = finalUrl;
    }
  } catch {
    window.location.href = finalUrl;
  }

  return { url: finalUrl, success: true };
}
