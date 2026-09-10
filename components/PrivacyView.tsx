import React from 'react';
import { Shield, Info, Database, Eye, Scale, Download, RefreshCw, Cookie, Globe } from 'lucide-react';

export function PrivacyView() {
  const lastUpdated = "June 16, 2026";

  return (
    <div id="privacy-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 text-sm text-[#ebebe6]/80 font-sans leading-relaxed relative z-10">
      
      {/* Page Header */}
      <div className="space-y-4 text-center pb-8 border-b border-white/10">
        <span className="text-[#27FCF2] text-xs font-mono tracking-widest uppercase font-semibold">
          GDPR & Privacy Compliance
        </span>
        <h1 className="text-3xl sm:text-5xl font-normal text-[#ebebe6] tracking-tight uppercase font-memogram">
          Privacy Policy
        </h1>
        <p className="text-[#ebebe6]/50 font-mono text-xs">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Intro Notice card */}
      <div className="bg-black/60 border border-white/15 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-start gap-5 backdrop-blur-xl shadow-2xl">
        <div className="h-12 w-12 bg-white/5 border border-white/10 text-[#27FCF2] rounded-2xl flex items-center justify-center shrink-0">
          <Shield className="h-6 w-6" />
        </div>
        <div className="space-y-1.5">
          <h4 className="text-sm font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">Our GDPR Commitment</h4>
          <p className="text-xs text-[#ebebe6]/70 leading-relaxed text-justify font-sans">
            Croese unconditionally stands committed to protecting your personal information and commercial credentials in total accordance with General Data Protection Regulations (EU GDPR 2016/679).
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-10 select-all text-justify">
        
        {/* Section 1 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">
            1. Data Controller
          </h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            This website is operated by:
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="block text-[#ebebe6]/50 uppercase font-mono tracking-wider font-semibold text-[10px]">Controller</span>
                <span className="text-[#ebebe6] font-semibold text-sm">Ibrahim Ouedraogo</span>
              </div>
              <div>
                <span className="block text-[#ebebe6]/50 uppercase font-mono tracking-wider font-semibold text-[10px]">Country</span>
                <span className="text-[#ebebe6] font-semibold text-sm">The Netherlands</span>
              </div>
            </div>
            <div>
              <span className="block text-[#ebebe6]/50 uppercase font-mono tracking-wider font-semibold text-[10px]">Contact</span>
              <a href="mailto:ibraoued14@gmail.com" className="text-[#27FCF2] hover:underline font-mono text-sm font-semibold">ibraoued14@gmail.com</a>
            </div>
          </div>
          <p className="text-xs text-[#ebebe6]/60 font-sans">
            For any privacy-related requests or questions, please contact us at the email address above.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">
            2. Data We Collect
          </h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            When you browse this website or make a purchase, we may collect the following information:
          </p>
          <div className="space-y-4 pl-3 border-l-2 border-[#27FCF2]/50">
            <div>
              <strong className="text-[#ebebe6] block text-xs font-mono uppercase tracking-wide">Personal & order details</strong>
              <p className="text-[#ebebe6]/70 text-xs mt-1 font-sans">Your name, company name (if applicable), Shopify store URL, and email address.</p>
            </div>
            <div>
              <strong className="text-[#ebebe6] block text-xs font-mono uppercase tracking-wide">Billing details</strong>
              <p className="text-[#ebebe6]/70 text-xs mt-1 font-sans">Billing address, VAT number (if applicable), and transaction records. We never access or store your card number or raw payment credentials — all payment data is handled exclusively by secure payment gateways under PCI-DSS standards.</p>
            </div>
            <div>
              <strong className="text-[#ebebe6] block text-xs font-mono uppercase tracking-wide">Technical data</strong>
              <p className="text-[#ebebe6]/70 text-xs mt-1 font-sans">IP address, browser type, and session cookies used to ensure the website functions correctly.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">
            3. Payment Processing
          </h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            All payment transactions are processed by certified secure payment processors. Our payment partners independently collect and process payment data in accordance with PCI-DSS standards.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">
            4. Purpose & Legal Basis for Processing
          </h3>
          
          <div className="overflow-x-auto border border-white/10 rounded-2xl bg-white/5">
            <table className="min-w-full divide-y divide-white/10 text-xs">
              <thead>
                <tr className="bg-black/30 text-[#ebebe6]/70 uppercase font-mono tracking-wider text-[10px]">
                  <th scope="col" className="px-5 py-3.5 text-left font-semibold">Purpose</th>
                  <th scope="col" className="px-5 py-3.5 text-left font-semibold">Legal Basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-[#ebebe6]/80 font-sans">
                <tr>
                  <td className="px-5 py-3.5 font-semibold text-[#ebebe6]">Processing your order and delivering purchased files</td>
                  <td className="px-5 py-3.5 text-[#ebebe6]/60">Performance of a contract (Art. 6(1)(b) GDPR)</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-semibold text-[#ebebe6]">Issuing invoices and maintaining accounting records</td>
                  <td className="px-5 py-3.5 text-[#ebebe6]/60">Legal obligation (Art. 6(1)(c) GDPR)</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-semibold text-[#ebebe6]">Responding to support requests</td>
                  <td className="px-5 py-3.5 text-[#ebebe6]/60">Legitimate interest (Art. 6(1)(f) GDPR)</td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-semibold text-[#ebebe6]">Notifying you of theme updates</td>
                  <td className="px-5 py-3.5 text-[#ebebe6]/60">Legitimate interest (Art. 6(1)(f) GDPR)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">
            5. Data Retention
          </h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            Order records are retained for <strong className="text-[#ebebe6]">10 years</strong> in accordance with Dutch accounting and tax law (Belastingdienst requirements). Support correspondence is retained for <strong className="text-[#ebebe6]">2 years</strong>. You may request deletion of non-legally-required data at any time.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">
            6. Your Rights Under GDPR
          </h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            As an EU resident, you have the right to:
          </p>
          <ul className="space-y-3 my-4 pl-1">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-4 w-4 bg-[#27FCF2]/10 border border-[#27FCF2]/30 text-[#27FCF2] rounded flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">1</span>
              <div>
                <strong className="text-[#ebebe6]">Access</strong> — request a copy of the personal data we hold about you
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-4 w-4 bg-[#27FCF2]/10 border border-[#27FCF2]/30 text-[#27FCF2] rounded flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">2</span>
              <div>
                <strong className="text-[#ebebe6]">Rectification</strong> — request correction of inaccurate data
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-4 w-4 bg-[#27FCF2]/10 border border-[#27FCF2]/30 text-[#27FCF2] rounded flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">3</span>
              <div>
                <strong className="text-[#ebebe6]">Erasure</strong> — request deletion of your data where no legal obligation requires us to retain it
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-4 w-4 bg-[#27FCF2]/10 border border-[#27FCF2]/30 text-[#27FCF2] rounded flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">4</span>
              <div>
                <strong className="text-[#ebebe6]">Restriction</strong> — request that we limit how we use your data
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-4 w-4 bg-[#27FCF2]/10 border border-[#27FCF2]/30 text-[#27FCF2] rounded flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">5</span>
              <div>
                <strong className="text-[#ebebe6]">Portability</strong> — receive your data in a structured, machine-readable format
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 h-4 w-4 bg-[#27FCF2]/10 border border-[#27FCF2]/30 text-[#27FCF2] rounded flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">6</span>
              <div>
                <strong className="text-[#ebebe6]">Object</strong> — object to processing based on legitimate interest
              </div>
            </li>
          </ul>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            To exercise any of these rights, contact us at <a href="mailto:ibraoued14@gmail.com" className="text-[#27FCF2] hover:underline font-mono">ibraoued14@gmail.com</a>. We will respond within 30 days, as required by GDPR.
          </p>
          <p className="text-xs text-[#ebebe6]/50 mt-2 font-sans">
            You also have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) at <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-[#ebebe6]/70 underline hover:text-[#27FCF2]">autoriteitpersoonsgegevens.nl</a>.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">
            7. Cookies
          </h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            This website uses only strictly necessary cookies required for the website to function (session management and checkout state). We do not use advertising cookies, tracking pixels, or third-party analytics that require consent. No personal data is sold or shared with advertising networks.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-4 bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          <h3 className="text-base font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">
            8. International Data Transfers
          </h3>
          <p className="text-sm text-[#ebebe6]/80 font-sans">
            Payment data may be processed outside the European Economic Area. Our payment partners ensure that any such transfers comply with applicable data protection law, including through Standard Contractual Clauses.
          </p>
        </section>

      </div>

    </div>
  );
}
