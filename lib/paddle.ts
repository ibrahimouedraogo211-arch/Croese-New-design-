/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CheckoutOptions {
  priceId: string;
  email?: string;
  onSuccess?: (data: any) => void;
  onClose?: () => void;
}

export type PaddleCheckoutOptions = CheckoutOptions;

/**
 * Open checkout overlay
 */
export function openPaddleCheckout({ priceId, email, onSuccess, onClose }: CheckoutOptions) {
  engageSimulator(priceId, onSuccess, onClose);
}

export const openCheckout = openPaddleCheckout;

/**
 * In-app checkout overlay
 */
function engageSimulator(priceId: string, onSuccess?: (data: any) => void, onClose?: () => void) {
  const overlayId = "checkout-simulator-overlay";
  if (document.getElementById(overlayId)) return;

  const overlay = document.createElement("div");
  overlay.id = overlayId;
  overlay.className = "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fade-in";

  let themeName = "Premium Shopify Theme";
  let themePrice = "590 €";
  if (priceId.includes("manufactur") || priceId === "pri_manufactur" || priceId.includes("gravity") || priceId === "pri_gravity") {
    themeName = "Manufactur Shopify Theme";
    themePrice = "590 €";
  } else if (priceId.includes("brigade") || priceId === "pri_brigade" || priceId.includes("lively") || priceId === "pri_lively") {
    themeName = "Brigade Overland Shopify Theme";
    themePrice = "680 €";
  } else if (priceId.includes("selkirk") || priceId === "pri_selkirk" || priceId.includes("soleway") || priceId === "pri_soleway") {
    themeName = "Selkirk Sport Shopify Theme";
    themePrice = "880 €";
  } else if (priceId.includes("theirnibs") || priceId.includes("their-nibs") || priceId === "pri_theirnibs" || priceId.includes("vows") || priceId === "pri_vows") {
    themeName = "Their Nibs Boutique Theme";
    themePrice = "320 €";
  } else if (priceId.includes("fermliving") || priceId === "pri_fermliving" || priceId.includes("ferm-living") || priceId.includes("crimson") || priceId === "pri_crimson") {
    themeName = "ferm LIVING Shopify Theme";
    themePrice = "520 €";
  } else if (priceId.includes("palmo") || priceId === "pri_palmo") {
    themeName = "Palmo 3D Website";
    themePrice = "290 €";
  } else if (priceId.includes("sigma") || priceId === "pri_sigma") {
    themeName = "Sigma Imaging Website";
    themePrice = "240 €";
  } else if (priceId.includes("milan") || priceId.includes("nexus") || priceId === "pri_milancompain") {
    themeName = "Milan Compain Website";
    themePrice = "340 €";
  } else if (priceId.includes("dsgn") || priceId.includes("vanguard") || priceId === "pri_dsgn") {
    themeName = "dsgn interior Website";
    themePrice = "260 €";
  } else if (priceId.includes("huyml") || priceId.includes("palais") || priceId === "pri_huyml") {
    themeName = "Huyml Portfolio Website";
    themePrice = "220 €";
  }

  overlay.innerHTML = `
    <div class="relative w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl p-6 text-white animate-scale-up">
      <!-- Header -->
      <div class="flex justify-between items-center border-b border-neutral-800 pb-4 mb-4">
        <div class="flex items-center gap-2">
          <div class="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center">
            <span class="text-xs font-bold text-black">✓</span>
          </div>
          <span class="text-sm font-semibold text-neutral-300">Secure Checkout</span>
        </div>
        <button id="simulator-close-btn" class="text-neutral-400 hover:text-white transition-colors duration-150 p-1 text-lg font-mono">
          ✕
        </button>
      </div>

      <!-- Product Details Card -->
      <div class="bg-neutral-950 border border-neutral-800 p-4 rounded-xl mb-6">
        <div class="flex justify-between text-sm mb-2">
          <span class="text-neutral-400">Store Provider</span>
          <span class="font-medium text-emerald-400">Croese</span>
        </div>
        <div class="flex justify-between text-sm mb-2">
          <span class="text-neutral-400">Product</span>
          <span class="font-medium">${themeName} (Single-Use License)</span>
        </div>
        <div class="h-px bg-neutral-800 my-2"></div>
        <div class="flex justify-between font-bold text-base mt-2">
          <span class="text-neutral-200">Total amount</span>
          <span class="text-emerald-400 text-lg">${themePrice}</span>
        </div>
      </div>

      <!-- User Email Form -->
      <div class="space-y-4 mb-6">
        <div>
          <label class="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2">
            Your Delivery Email Address
          </label>
          <input 
            type="email" 
            id="simulator-email-field" 
            placeholder="merchant@example.com" 
            value="demo@shopify-merchant.com" 
            class="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 font-sans"
          />
        </div>
        <div>
          <label class="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2">
            Payment Method
          </label>
          <input 
            type="text" 
            placeholder="4242 •••• •••• 4242" 
            disabled 
            class="w-full bg-neutral-950 border border-neutral-800 text-neutral-500 rounded-lg px-3 py-2 text-sm select-none"
          />
        </div>
      </div>

      <!-- Actions Button -->
      <div class="grid grid-cols-2 gap-3">
        <button id="simulator-cancel-btn" class="w-full bg-neutral-950 border border-neutral-800 hover:bg-neutral-800 text-neutral-300 font-medium py-2.5 rounded-xl text-sm transition-colors duration-150">
          Cancel
        </button>
        <button id="simulator-complete-btn" class="w-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold py-2.5 rounded-xl text-sm transition-transform active:scale-95 duration-100 flex items-center justify-center gap-1">
          Pay ${themePrice}
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const closeOverlay = () => {
    overlay.classList.add("opacity-0");
    setTimeout(() => {
      if (document.body.contains(overlay)) {
        document.body.removeChild(overlay);
      }
    }, 300);
  };

  const closeButton = document.getElementById("simulator-close-btn");
  const cancelButton = document.getElementById("simulator-cancel-btn");
  const completeButton = document.getElementById("simulator-complete-btn");

  closeButton?.addEventListener("click", () => {
    closeOverlay();
    if (onClose) onClose();
  });

  cancelButton?.addEventListener("click", () => {
    closeOverlay();
    if (onClose) onClose();
  });

  completeButton?.addEventListener("click", () => {
    const emailField = document.getElementById("simulator-email-field") as HTMLInputElement;
    const finalEmail = emailField?.value || "demo@shopify-merchant.com";

    closeOverlay();
    if (onSuccess) {
      onSuccess({
        transaction_id: "txn_simulated_" + Math.random().toString(36).substring(2, 9),
        customer_email: finalEmail,
        amount: themePrice,
        price_id: priceId,
        theme_slug: priceId.includes("brigade") ? "brigade-overland"
          : (priceId.includes("selkirk") || priceId.includes("soleway")) ? "selkirk-courtstrike"
          : (priceId.includes("their") || priceId.includes("vows")) ? "their-nibs"
          : (priceId.includes("ferm") || priceId.includes("crimson")) ? "ferm-living"
          : priceId.includes("palmo") ? "palmo"
          : priceId.includes("sigma") ? "sigma-imaging"
          : (priceId.includes("milan") || priceId.includes("nexus")) ? "milan-compain"
          : (priceId.includes("dsgn") || priceId.includes("vanguard")) ? "dsgn-interior"
          : (priceId.includes("huyml") || priceId.includes("palais")) ? "huyml"
          : "manufactur"
      });
    }
  });
}
