/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Tag, Copy, Check, Calendar, Sparkles, Clock, ArrowRight } from "lucide-react";
import { SPECIAL_OFFERS, IMAGES } from "../data";

interface OffersSectionProps {
  onBookNow: () => void;
}

export default function OffersSection({ onBookNow }: OffersSectionProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Map each offer to an appropriate stunning image from IMAGES
  const getOfferImage = (id: string) => {
    switch (id) {
      case "o-bridal":
        return IMAGES.bridalTraditional;
      case "o-student":
        return IMAGES.academyClass;
      case "o-eid":
        return IMAGES.partyMakeup;
      default:
        return IMAGES.skinCare;
    }
  };

  return (
    <section id="special-offers-section" className="py-20 bg-luxury-cream text-neutral-900 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-600 font-sans font-semibold text-xs tracking-widest block mb-1 uppercase">Limited Time Rewards</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-neutral-900">
            Exclusive Packages & Deals
          </h2>
          <p className="text-xs text-neutral-500 mt-2">
            Unlock premium beauty and styling treatments at unbeatable seasonal prices. Apply coupons directly during your next reservation.
          </p>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4"></div>
        </div>

        {/* Responsive Grid of Offers */}
        <div id="offers-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIAL_OFFERS.map((offer) => (
            <div
              key={offer.id}
              id={`offer-card-${offer.id}`}
              className="group bg-white rounded-3xl overflow-hidden border border-gold-200/40 shadow-sm hover:shadow-xl hover:border-gold-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Offer Image & Tag */}
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={getOfferImage(offer.id)}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent"></div>
                {/* Floating Discount Badge */}
                <div className="absolute top-4 left-4 bg-neutral-950 font-sans font-bold text-xs text-gold-400 px-3 py-1.5 rounded-full border border-gold-400/40 tracking-wider">
                  {offer.discount}
                </div>
              </div>

              {/* Offer Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-semibold text-neutral-900 group-hover:text-gold-600 transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                    {offer.description}
                  </p>
                </div>

                {/* Voucher Code Block */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-gold-50/50 border border-gold-100 p-3 rounded-xl">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-sans font-extrabold flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5 text-gold-500" /> Promo Code:
                    </span>
                    <button
                      id={`copy-offer-btn-${offer.id}`}
                      onClick={() => handleCopyCode(offer.code)}
                      className="flex items-center gap-1 text-xs font-mono font-bold tracking-wider text-neutral-900 transition-colors hover:text-gold-600 bg-white border border-gold-200/50 px-2.5 py-1 rounded-md"
                    >
                      {offer.code}
                      {copiedCode === offer.code ? (
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-neutral-400 hover:text-gold-500" />
                      )}
                    </button>
                  </div>

                  {/* Expiration Details */}
                  <div className="flex items-center gap-1.5 text-[10px] text-neutral-400 font-sans font-medium uppercase tracking-widest">
                    <Clock className="w-3.5 h-3.5 text-gold-500" /> Valid Until: {offer.validTill}
                  </div>
                </div>
              </div>

              {/* Footer CTA Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  id={`cta-offer-book-${offer.id}`}
                  onClick={onBookNow}
                  className="w-full py-3 px-4 rounded-xl bg-neutral-950 text-white font-sans font-semibold text-xs uppercase tracking-widest group-hover:bg-gold-600 group-hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  Book Deal Now
                  <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Promotional Trust Banner */}
        <div id="offers-trust-banner" className="mt-16 p-8 bg-neutral-950 text-white rounded-3xl border border-gold-450/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl pointer-events-none group-hover:bg-gold-400/10 transition-all duration-1000"></div>
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2 text-left">
              <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-gold-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> VIP Loyalty Status
              </span>
              <h3 className="font-serif text-2xl font-semibold tracking-wide">
                Earn Double Lifetime Points!
              </h3>
              <p className="text-xs text-neutral-400 max-w-xl leading-relaxed font-sans">
                Create a digital customer account today and unlock Bronze Tier benefits automatically. Earn 10 loyalty points for every PKR 1,000 spent, redeemable for haircuts, waxing, and bridal packages.
              </p>
            </div>
            
            <button
              id="trust-banner-cta"
              onClick={onBookNow}
              className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 border border-gold-400/30 text-white font-sans font-semibold text-xs tracking-widest uppercase rounded-full hover:shadow-lg hover:shadow-gold-500/25 transition-all text-center shrink-0"
            >
              Start Earning Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
