/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Clock, ShieldAlert, Sparkles, MessageSquare } from 'lucide-react';

export function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    
    // Simulate sending message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'general', message: '' });
    }, 1000);
  };

  return (
    <div id="contact-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 relative z-10">
      
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <span className="text-[#27FCF2] text-xs font-mono tracking-widest uppercase font-bold">
          Direct Concierge Desk
        </span>
        <h1 className="text-3xl sm:text-5xl font-normal text-[#ebebe6] tracking-tight leading-tight uppercase font-memogram">
          Contact Croese Studio
        </h1>
        <p className="text-[#ebebe6]/70 text-sm leading-relaxed font-sans">
          Have questions about theme compatibility, custom store modifications, license verification, or instant download access? Ibrahim Ouedraogo is here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pt-4">
        
        {/* Left pane details (5/12) */}
        <div className="md:col-span-12 lg:col-span-5 space-y-6">
          
          {/* Card 1: Official Email */}
          <div className="bg-black/60 border border-white/15 p-6 rounded-3xl space-y-3 backdrop-blur-xl">
            <div className="h-10 w-10 bg-white/5 text-[#27FCF2] border border-white/10 rounded-2xl flex items-center justify-center">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">Direct Studio Email</h3>
            <p className="text-xs text-[#ebebe6]/60 font-sans leading-relaxed">
              Send us inquiries regarding product licenses, technical guidance, or custom theme modifications:
            </p>
            <a 
              href="mailto:ibraoued14@gmail.com" 
              className="text-[#27FCF2] hover:underline font-mono text-sm block font-semibold pt-1"
            >
              ibraoued14@gmail.com
            </a>
          </div>

          {/* Card 2: Turnaround Hours */}
          <div className="bg-black/60 border border-white/15 p-6 rounded-3xl space-y-3 backdrop-blur-xl">
            <div className="h-10 w-10 bg-white/5 text-[#27FCF2] border border-white/10 rounded-2xl flex items-center justify-center">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">Turnaround SLA</h3>
            <p className="text-xs text-[#ebebe6]/60 font-sans leading-relaxed">
              All merchant support requests receive personal attention from Ibrahim Ouedraogo within 24 hours (Monday to Friday).
            </p>
          </div>

          {/* Card 3: Instant Access Guarantee */}
          <div className="bg-black/60 border border-white/15 p-6 rounded-3xl space-y-3 backdrop-blur-xl">
            <div className="h-10 w-10 bg-white/5 text-[#27FCF2] border border-white/10 rounded-2xl flex items-center justify-center">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-normal text-[#ebebe6] uppercase tracking-wider font-memogram">Instant ZIP Delivery</h3>
            <p className="text-xs text-[#ebebe6]/60 font-sans leading-relaxed">
              Theme source code archives are delivered immediately via email upon checkout completion.
            </p>
          </div>

        </div>

        {/* Right pane form (7/12) */}
        <div className="md:col-span-12 lg:col-span-7 bg-black/60 border border-white/15 p-8 rounded-3xl space-y-6 backdrop-blur-xl shadow-2xl">
          <h2 className="text-lg font-normal text-[#ebebe6] uppercase tracking-wider font-memogram pb-3 border-b border-white/10 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#27FCF2]" />
            <span>Send Direct Message</span>
          </h2>

          {submitted ? (
            <div className="bg-white/5 border border-[#27FCF2]/30 p-8 rounded-2xl text-center space-y-3">
              <CheckCircle className="h-10 w-10 text-[#27FCF2] mx-auto" />
              <h3 className="text-sm font-bold text-[#ebebe6] uppercase tracking-wider">Message Transmitted</h3>
              <p className="text-xs text-[#ebebe6]/70 leading-relaxed max-w-sm mx-auto">
                Thank you. Your message has been routed directly to Ibrahim Ouedraogo. We will reply to your provided email address shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs text-[#27FCF2] underline cursor-pointer"
              >
                Send another dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-medium text-[#ebebe6]/70 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Camilla Vance"
                  className="w-full bg-white/5 border border-white/15 focus:border-[#27FCF2] text-[#ebebe6] px-4 py-3 rounded-2xl text-xs outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-medium text-[#ebebe6]/70 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@store.com"
                  className="w-full bg-white/5 border border-white/15 focus:border-[#27FCF2] text-[#ebebe6] px-4 py-3 rounded-2xl text-xs outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-medium text-[#ebebe6]/70 uppercase tracking-wider">
                  Inquiry Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#121212] border border-white/15 focus:border-[#27FCF2] text-[#ebebe6] px-4 py-3 rounded-2xl text-xs outline-none transition-colors cursor-pointer"
                >
                  <option value="general">Theme Selection & Compatibility Advice</option>
                  <option value="customization">Custom Shopify Store Setup</option>
                  <option value="technical">Installation Assistance & Liquid Questions</option>
                  <option value="license">Commercial Licensing & Enterprise Rights</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-medium text-[#ebebe6]/70 uppercase tracking-wider">
                  Message Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your brand, store requirements, or questions..."
                  className="w-full bg-white/5 border border-white/15 focus:border-[#27FCF2] text-[#ebebe6] px-4 py-3 rounded-2xl text-xs outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#ebebe6] text-black hover:bg-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg disabled:opacity-50"
              >
                {loading ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Message to Studio</span>
                  </>
                )}
              </button>
            </form>
          )}

        </div>

      </div>

    </div>
  );
}
