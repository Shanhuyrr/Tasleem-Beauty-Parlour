/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sparkles, MapPin, Phone, Mail, Instagram, Facebook, Clock, Award, Shield } from "lucide-react";

export default function Footer() {
  const socialPlats = [
    { name: "Instagram", url: "https://instagram.com", icon: <Instagram className="w-5.5 h-5.5" /> },
    { name: "Facebook", url: "https://facebook.com", icon: <Facebook className="w-5.5 h-5.5" /> }
  ];

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-8 border-t border-gold-550/20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-neutral-900 pb-12 mb-8 items-start">
        
        {/* Brand identity */}
        <div className="col-span-1 md:col-span-4 space-y-4">
          <div className="flex gap-2.5 items-center">
            <span className="text-xl font-serif tracking-widest text-gold-400 font-extrabold uppercase">Tasleem</span>
            <div className="h-4 w-px bg-gold-400/40"></div>
            <span className="text-[10px] tracking-widest text-white uppercase font-bold font-sans">Beauty Parlour</span>
          </div>
          
          <p className="text-[11px] text-neutral-450 leading-relaxed font-sans max-w-sm">
            Bridal transformations under royal white & gold sensory structures. Certified trainers, advanced clinical skincare treatments, and authentic organic henna craft since inception.
          </p>

          <div className="flex gap-3">
            {socialPlats.map((plat) => (
              <a
                key={plat.name}
                href={plat.url}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-neutral-900 border border-gold-500/25 text-neutral-400 hover:text-white hover:border-gold-400 transition-colors"
                title={`Follow Tasleem on ${plat.name}`}
              >
                {plat.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Branches Coordinates */}
        <div className="col-span-1 md:col-span-4 space-y-4 text-xs">
          <h4 className="font-serif text-sm font-semibold tracking-wider text-gold-400">Our Salon Branches</h4>
          <div className="space-y-3 font-sans text-neutral-450 leading-relaxed">
            <div className="flex gap-2 items-start">
              <MapPin className="w-4.5 h-4.5 text-gold-550 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-[11px]">Primary HQ - Wah Cantt</strong>
                <span>Basti Area, Near Sapna Cloth, Wah Cantt, Punjab, Pakistan</span>
              </div>
            </div>

            <div className="flex gap-2 items-start">
              <MapPin className="w-4.5 h-4.5 text-gold-550 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-[11px]">Boutique Hub - Islamabad</strong>
                <span>Sector E-11, Islamabad Capital, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule & Direct Contact */}
        <div className="col-span-1 md:col-span-4 space-y-4 text-xs font-sans text-neutral-450">
          <h4 className="font-serif text-sm font-semibold tracking-wider text-gold-400 text-left">Salon Office Hours</h4>
          <div className="space-y-3 text-left">
            <div className="flex gap-2 items-center">
              <Clock className="w-4.5 h-4.5 text-gold-550 shrink-0" />
              <span>Monday to Sunday: <strong>10:00 AM – 9:00 PM</strong></span>
            </div>

            <div className="flex gap-2 items-center">
              <Phone className="w-4.5 h-4.5 text-gold-550 shrink-0" />
              <span>Direct Hotline: <strong className="text-white select-all">03220591711</strong></span>
            </div>

            <div className="flex gap-2 items-center">
              <Mail className="w-4.5 h-4.5 text-gold-550 shrink-0" />
              <span>Inbox: <strong className="text-white select-all">usmanramzan655768@gmail.com</strong></span>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-neutral-500 font-sans tracking-wide">
        <p>© {new Date().getFullYear()} Tasleem Beauty Parlour and Training Institute. All rights reserved.</p>
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5 text-gold-500" /> Executive Class Service Guarantee</span>
          <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-gold-500" /> Autoclave Sanitized Space Assured</span>
        </div>
      </div>
    </footer>
  );
}
