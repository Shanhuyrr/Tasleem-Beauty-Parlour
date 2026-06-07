/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Clock, Tag, Check, Award, ArrowRight, Play } from "lucide-react";
import { ServiceCategory, Service } from "../types";
import { SERVICES } from "../data";

interface ServicesSectionProps {
  onBookService: (serviceId: string) => void;
}

export default function ServicesSection({ onBookService }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<"All" | ServiceCategory>("All");
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isResizing, setIsResizing] = useState<boolean>(false);

  // Categories list
  const tabs: ("All" | ServiceCategory)[] = [
    "All",
    ServiceCategory.BRIDAL,
    ServiceCategory.PARTY,
    ServiceCategory.HAIR_STYLING,
    ServiceCategory.HAIR_TREATMENTS,
    ServiceCategory.SKIN_CARE,
    ServiceCategory.MEHNDI
  ];

  // Filters services
  const filteredServices = activeTab === "All"
    ? SERVICES
    : SERVICES.filter(s => s.category === activeTab);

  // Before After slider touch / drag support
  const handleMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX, rect);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1 || isResizing) {
      const container = e.currentTarget;
      const rect = container.getBoundingClientRect();
      handleMove(e.clientX, rect);
    }
  };

  return (
    <section id="services-page" className="py-20 bg-luxury-cream text-neutral-900 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-gold-600 font-sans font-semibold text-xs uppercase tracking-widest block mb-2">Our Luxe Offerings</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-neutral-900">
            Premium Parlour Services
          </h2>
          <p className="text-xs text-neutral-500 mt-2">
            Every treatment features organic inputs, top-grade brands, and a relaxing, safe, and clean sanitation guarantee.
          </p>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4"></div>
        </div>

        {/* Live Transformation Section / Before and After Compare */}
        <div id="transformation-slider-section" className="mb-20 bg-white rounded-3xl p-6 lg:p-10 border border-gold-200/40 shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-50 text-gold-700 text-[10px] uppercase font-bold tracking-widest border border-gold-200">
                <Award className="w-3.5 h-3.5 text-gold-500" /> Live Transformations
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-neutral-950">
                HD Bridal Flawless Glamour Showcase
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Drag the slider handle sideways to inspect the precision-blended, camera-ready dewy skin transformation. We optimize skin contours, hydrate pores, and apply flawless coverage.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                  <Check className="w-4 h-4 text-gold-500" />
                  <span>Conceals open blemishes completely without caking</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                  <Check className="w-4 h-4 text-gold-500" />
                  <span>100% natural, dewy, non-flashback HD formulation</span>
                </div>
              </div>
              <button
                id="book-hd-bridal-compare"
                onClick={() => onBookService("b-hd")}
                className="mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white font-sans font-semibold text-xs tracking-wider uppercase hover:bg-gold-600 transition-all cursor-pointer"
              >
                Book HD Bridal Makeup
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </button>
            </div>

            {/* Slider view container */}
            <div className="lg:col-span-7 flex justify-center">
              <div
                className="before-after-container relative w-full aspect-[4/3] max-w-lg rounded-2xl shadow-xl overflow-hidden cursor-ew-resize select-none border border-gold-300"
                onTouchMove={handleTouchMove}
                onMouseMove={handleMouseMove}
                onMouseDown={() => setIsResizing(true)}
                onMouseUp={() => setIsResizing(false)}
                onMouseLeave={() => setIsResizing(false)}
              >
                {/* AFTER image (Behind layer) */}
                <img
                  src="https://images.unsplash.com/photo-1610136633659-42b781165e31?q=80&w=800&auto=format&fit=crop"
                  alt="After Glam Makeup"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] tracking-widest uppercase px-2 py-1 rounded font-sans z-10-custom font-bold">
                  After (HD Bridal Glam)
                </span>

                {/* BEFORE image (Slider cropped wrapper) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?q=80&w=800&auto=format&fit=crop"
                    alt="Before Skin Prep"
                    className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none"
                    style={{ width: "480px", height: "100%" }}
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] tracking-widest uppercase px-2 py-1 rounded font-sans font-bold">
                    Before
                  </span>
                </div>

                {/* Sliding separator handle bar */}
                <div
                  className="absolute inset-y-0 w-1 bg-gold-400 cursor-ew-resize shadow-md"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-gold-400 bg-white shadow-xl flex items-center justify-center pointer-events-none">
                    <span className="text-xs font-bold text-gold-600 font-sans tracking-tight">↔</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Category Tab Selectors */}
        <div id="service-tabs-drawer" className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab === "All" ? "all" : tab}
              id={`tab-btn-${tab === "All" ? "all" : tab.replace(/\s+/g, "-")}`}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full font-sans font-semibold text-xs uppercase tracking-wider transition-all duration-300 transform active:scale-95 cursor-pointer border ${
                activeTab === tab
                  ? "bg-gold-550 border-gold-550 text-white shadow-md shadow-gold-500/10"
                  : "bg-white border-gold-200/50 text-neutral-700 hover:bg-gold-50/50 hover:text-gold-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Services Listings Grid */}
        <div id="services-listings-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group rounded-2xl bg-white border border-gold-200/40 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card visual wrapper */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual price tag badge */}
                <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md text-gold-300 border border-gold-400/40 px-3.5 py-1.5 rounded-full font-serif text-sm font-semibold">
                  PKR {service.price.toLocaleString()}
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-neutral-800 text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-gold-100">
                  {service.category}
                </div>
              </div>

              {/* Card details body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-serif text-xl font-bold tracking-wide text-neutral-900 group-hover:text-gold-600 transition-colors">
                      {service.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-3">
                    <Clock className="w-3.5 h-3.5 text-gold-500" />
                    <span>Duration: {service.duration}</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Benefits listed list */}
                <div className="border-t border-gold-100/45 pt-4 space-y-2">
                  <span className="block text-[10px] font-sans font-extrabold tracking-widest uppercase text-gold-600">Key Benifits</span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {service.benefits.map((b, idx) => (
                      <div key={idx} className="flex gap-1.5 items-start text-[11px] text-neutral-700 font-medium leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply Booking action button */}
                <div className="pt-4 border-t border-gold-100/45 mt-4 flex items-center justify-between">
                  <button
                    id={`service-book-btn-${service.id}`}
                    onClick={() => onBookService(service.id)}
                    className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-neutral-950 text-white font-sans font-bold text-xs uppercase tracking-wider transition-all hover:bg-gold-500 cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
