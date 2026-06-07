/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Calendar, Phone, Award, Shield, Users, Clock } from "lucide-react";
import { IMAGES } from "../data";

interface HeroProps {
  onBookNow: () => void;
  onContactUs: () => void;
  onExploreServices: () => void;
}

export default function Hero({ onBookNow, onContactUs, onExploreServices }: HeroProps) {
  return (
    <div
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.8) 100%), url(${IMAGES.heroBridal})`,
      }}
    >
      {/* Elegantly overlay faint lines/patterns to enhance luxury feel */}
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/20 to-black/90 pointer-events-none"></div>

      {/* Gold floating ambient particles / subtle decorative circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gold-400/10 blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold-600/10 blur-[120px] pointer-events-none animate-pulse duration-5000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full flex flex-col justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Elegant luxury badge indicating supreme status */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/40 bg-gold-950/30 backdrop-blur-md text-gold-300 font-sans font-semibold text-xs tracking-widest uppercase animate-fade-in"
            >
              <Award className="w-4 h-4 text-gold-400" />
              Pakistan's Premier Bridal & Beauty Oasis
            </div>

            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold text-white tracking-wide leading-tight"
            >
              Where Silk <br /> Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">Gold & Elegance</span>
            </h1>

            <p
              id="hero-subtext"
              className="text-neutral-300 text-base sm:text-lg max-w-xl font-sans tracking-wide leading-relaxed"
            >
              Tasleem Beauty Parlour translates classic Eastern bridal heritage into exquisite, flawless visual masterpieces. Step into our sanctuary of pure luxury.
            </p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 border-y border-gold-400/15 py-4 max-w-lg">
              <div>
                <span className="block font-serif text-2xl lg:text-3xl font-semibold text-gold-300">12+</span>
                <span className="block text-[10px] tracking-widest uppercase text-neutral-400 font-sans">Years Experience</span>
              </div>
              <div className="border-x border-gold-400/15 px-4">
                <span className="block font-serif text-2xl lg:text-3xl font-semibold text-gold-300">15K+</span>
                <span className="block text-[10px] tracking-widest uppercase text-neutral-400 font-sans">Brides Perfected</span>
              </div>
              <div>
                <span className="block font-serif text-2xl lg:text-3xl font-semibold text-gold-300">99%</span>
                <span className="block text-[10px] tracking-widest uppercase text-neutral-400 font-sans">Rating Score</span>
              </div>
            </div>

            {/* Premium action buttons */}
            <div id="hero-actions" className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                id="hero-btn-book"
                onClick={onBookNow}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-white font-sans font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 active:scale-95 cursor-pointer border border-gold-400"
              >
                <Calendar className="w-4.5 h-4.5" />
                Online Booking
              </button>

              <button
                id="hero-btn-contact"
                onClick={onContactUs}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black/40 text-white border border-white/20 font-sans font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-black hover:border-white active:scale-95 cursor-pointer"
              >
                <Phone className="w-4.5 h-4.5 text-gold-400" />
                Contact Branches
              </button>
            </div>
          </div>

          {/* Luxury Promotional Panel Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              id="hero-promo-card"
              className="w-full max-w-sm rounded-2xl glass-dark p-6 text-white border border-gold-300/20 space-y-6 select-none relative group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl pointer-events-none group-hover:bg-gold-400/10 transition-all"></div>
              
              <div className="space-y-1">
                <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-gold-400 block">Today's Special Booking Promotion</span>
                <h3 className="font-serif text-2xl font-medium tracking-wide">Royal Harmony Pack</h3>
              </div>

              <div className="space-y-3">
                <div className="flex gap-2.5 items-start">
                  <div className="p-1 rounded-full bg-gold-950/40 text-gold-400 shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold font-sans">99.9% Hygienic Standards</h4>
                    <p className="text-xs text-neutral-400">Strict single-use tools & premium sanitized palettes.</p>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start">
                  <div className="p-1 rounded-full bg-gold-950/40 text-gold-400 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold font-sans font-medium">Top Certified Stylists</h4>
                    <p className="text-xs text-neutral-400">Services guided by renowned experts certified from London academies.</p>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start">
                  <div className="p-1 rounded-full bg-gold-950/40 text-gold-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold font-sans">Open Daily</h4>
                    <p className="text-xs text-neutral-400">Monday to Sunday: 10:00 AM – 9:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-gold-550/10 border border-gold-400/20 p-4 rounded-xl text-center">
                <p className="text-xs text-neutral-300">Book online right now and receive a reward of</p>
                <span className="block font-serif text-3xl font-semibold text-gold-300 my-1">100 Loyalty Points</span>
                <p className="text-[10px] text-gold-400 font-sans tracking-wide">Redeemable on all haircuts, styling and facial services.</p>
              </div>

              <button
                id="hero-promo-btn"
                onClick={onExploreServices}
                className="w-full py-3 rounded-lg bg-neutral-900 border border-gold-400/40 text-gold-300 hover:bg-gold-600 hover:text-white transition-all text-xs uppercase font-serif tracking-widest cursor-pointer"
              >
                Explore Premium Services
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Hero Curve Splitter */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 fill-luxury-cream">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,53.05,22,79.54,34,142.18,62.36,211.23,76.82,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
}
