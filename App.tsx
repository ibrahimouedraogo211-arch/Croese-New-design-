/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { BuyModal } from './components/BuyModal';
import { FloatingBackgroundC } from './components/FloatingBackgroundC';

// Views
import { HomeView } from './components/HomeView';
import { CatalogueView } from './components/CatalogueView';
import { DetailView } from './components/DetailView';
import { AboutView } from './components/AboutView';
import { SupportView } from './components/SupportView';
import { FaqView } from './components/FaqView';
import { ContactView } from './components/ContactView';
import { SuccessView } from './components/SuccessView';
import { TermsView } from './components/TermsView';
import { PrivacyView } from './components/PrivacyView';
import { RefundView } from './components/RefundView';
import { LicenseView } from './components/LicenseView';

// Helpers & Data
import { getThemes, getThemeBySlug } from './lib/themes';

/**
 * Extracts the current path from the URL hash.
 * Handles parameters and queries safely.
 */
const getPathFromHash = (): string => {
  const hash = window.location.hash || '#/';
  const routePart = hash.split('?')[0]; // Strip search queries
  if (routePart === '#/' || routePart === '#') return '/';
  
  const path = routePart.slice(1);
  return path.startsWith('/') ? path : '/' + path;
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(getPathFromHash());
  const [buyModalOpen, setBuyModalOpen] = useState<boolean>(false);
  const [buyModalSlug, setBuyModalSlug] = useState<string>('gravity');
  const allThemes = getThemes();

  // Listen for browser navigation hashchanges
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getPathFromHash());
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.location.hash = path;
  };

  /**
   * Opens direct product Buy modal (Polar.sh checkout)
   */
  const handleOpenBuy = (slugOrPriceId?: string) => {
    const foundTheme = allThemes.find(t => t.slug === slugOrPriceId || t.priceId === slugOrPriceId);
    setBuyModalSlug(foundTheme ? foundTheme.slug : (slugOrPriceId || 'gravity'));
    setBuyModalOpen(true);
  };

  /**
   * Main Router Renderer
   */
  const renderView = () => {
    if (currentPath.startsWith('/themes/') && currentPath !== '/themes') {
      const slug = currentPath.split('/themes/')[1];
      const theme = getThemeBySlug(slug);
      
      if (theme) {
        return <DetailView theme={theme} onNavigate={navigateTo} />;
      }
      return <CatalogueView themes={allThemes} onNavigate={navigateTo} onCheckout={handleOpenBuy} />;
    }

    switch (currentPath) {
      case '/':
        return (
          <HomeView
            themes={allThemes}
            onNavigate={navigateTo}
            onCheckout={handleOpenBuy}
          />
        );
      
      case '/themes':
        return (
          <CatalogueView
            themes={allThemes}
            onNavigate={navigateTo}
            onCheckout={handleOpenBuy}
            initialCategory="all"
          />
        );

      case '/websites':
        return (
          <CatalogueView
            themes={allThemes}
            onNavigate={navigateTo}
            onCheckout={handleOpenBuy}
            initialCategory="website"
          />
        );

      case '/about':
        return <AboutView />;

      case '/support':
        return <SupportView onNavigate={navigateTo} />;

      case '/faq':
        return <FaqView />;

      case '/contact':
        return <ContactView />;

      case '/success':
        return <SuccessView onNavigate={navigateTo} />;

      // Legal Pages
      case '/legal/terms-of-service':
        return <TermsView />;
      
      case '/legal/privacy-policy':
        return <PrivacyView />;

      case '/legal/refund-policy':
        return <RefundView />;

      case '/legal/license':
        return <LicenseView />;

      default:
        return (
          <HomeView
            themes={allThemes}
            onNavigate={navigateTo}
            onCheckout={handleOpenBuy}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-[#ebebe6] font-sans flex flex-col antialiased relative selection:bg-[#27FCF2] selection:text-black">
      
      {/* Signature Creativeans 3D Rotating C Floating in Background */}
      <FloatingBackgroundC opacity={currentPath === '/' ? 1.0 : 0.45} />

      {/* Navigation Head */}
      <Header currentPath={currentPath} onNavigate={navigateTo} />

      {/* Dynamic Page Stage Container */}
      <main className="flex-1 animate-fade-in relative z-10">
        {renderView()}
      </main>

      {/* Global footer with legal notice links */}
      <Footer onNavigate={navigateTo} />

      {/* GDPR Compliant cookies bar */}
      <CookieBanner />

      {/* Global Direct Buy Modal (Polar.sh) */}
      <BuyModal
        isOpen={buyModalOpen}
        onClose={() => setBuyModalOpen(false)}
        productSlug={buyModalSlug}
      />

    </div>
  );
}
