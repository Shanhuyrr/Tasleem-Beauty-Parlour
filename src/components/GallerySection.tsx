/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight, Filter, Columns, Eye, Layers } from "lucide-react";
import { GalleryItem } from "../types";
import { GALLERY } from "../data";

export default function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [isComparedReveal, setIsComparedReveal] = useState<boolean>(true);

  const categories = [
    "All",
    "Bridal Gallery",
    "Party Makeup Gallery",
    "Hair Styling Gallery",
    "Hair Color Gallery",
    "Mehndi Gallery",
    "Skin Care Gallery",
    "Before & After Gallery"
  ];

  // Filtering Logic
  const filteredGallery = selectedFilter === "All"
    ? GALLERY
    : GALLERY.filter(item => item.category === selectedFilter);

  // Lightbox Navigation Indexing
  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeLightbox) return;
    const currentIdx = filteredGallery.findIndex(item => item.id === activeLightbox.id);
    const prevIdx = (currentIdx - 1 + filteredGallery.length) % filteredGallery.length;
    setActiveLightbox(filteredGallery[prevIdx]);
    setZoomScale(1);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeLightbox) return;
    const currentIdx = filteredGallery.findIndex(item => item.id === activeLightbox.id);
    const nextIdx = (currentIdx + 1) % filteredGallery.length;
    setActiveLightbox(filteredGallery[nextIdx]);
    setZoomScale(1);
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale(prev => (prev === 1 ? 1.75 : 1));
  };

  return (
    <section id="beauty-gallery" className="py-20 bg-luxury-cream text-neutral-900 animate-fade-in select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-gold-600 font-sans font-semibold text-xs uppercase tracking-widest block mb-2 font-medium">Bespoke Visual Portfolio</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-neutral-900">
            Aesthetic Work Galleries
          </h2>
          <p className="text-xs text-neutral-500 mt-2">
            Inspect verified photographs showcasing real brides, party styles, and skincare results completed in our salon.
          </p>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4"></div>
        </div>

        {/* Categories filters tabs */}
        <div className="mb-10 max-w-5xl mx-auto px-1">
          <div className="flex items-center gap-1.5 mb-3 text-neutral-500 text-xs uppercase font-sans font-extrabold justify-center">
            <Filter className="w-3.5 h-3.5 text-gold-500" /> 
            <span>Filter Master Portfolio:</span>
          </div>
          
          {/* Scrollable track on mobile screens, elegant wrapped flex on desktop/laptop */}
          <div 
            id="gallery-category-filter-bar" 
            className="flex overflow-x-auto md:flex-wrap md:justify-center items-center gap-2 pb-3 md:pb-0 scrollbar-none snap-x touch-pan-x"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                id={`gallery-filter-btn-${cat.replace(/\s+/g, "-")}`}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2.5 rounded-lg font-sans font-semibold text-[11px] uppercase tracking-wider transition-all duration-300 cursor-pointer border shrink-0 snap-center ${
                  selectedFilter === cat
                    ? "bg-neutral-950 border-neutral-950 text-white shadow-mdScale"
                    : "bg-white border-gold-200/40 text-neutral-700 hover:bg-gold-50 hover:text-gold-600"
                }`}
              >
                {cat.replace(" Gallery", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Layout grid style */}
        <div
          id="gallery-masonry-container"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-block-${item.id}`}
              onClick={() => {
                setActiveLightbox(item);
                setZoomScale(1);
              }}
              className="group relative rounded-2xl overflow-hidden border border-gold-200/40 shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer bg-white"
            >
              {/* Image base render */}
              <div className="aspect-[3/4] bg-neutral-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Absolute Golden Floating Cover On Hover/Touch - subtle visual assist for touch screens as well as laptops */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-black/40 to-transparent lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-gold-400 font-sans font-bold">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-sm font-bold tracking-wide">
                    {item.title}
                  </h4>
                  {item.beforeImage && (
                    <span className="inline-flex items-center gap-1 text-[9px] bg-gold-600 text-white font-sans px-2 py-0.5 rounded-full mt-1 uppercase font-extrabold shadow-sm">
                      <Layers className="w-3 h-3" /> Before & After
                    </span>
                  )}
                </div>
                
                {/* Visual action markers */}
                <div className="absolute top-4 right-4 p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20 text-white transform lg:translate-y-3 lg:group-hover:translate-y-0 transition-transform">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty placeholder warning */}
        {filteredGallery.length === 0 && (
          <div className="text-center py-12 text-neutral-450 border-2 border-dashed border-gold-200/35 rounded-3xl">
            No work uploads found matching that query tab. Check back shortly.
          </div>
        )}

        {/* HIGH-END INTERACTIVE LIGHTBOX MODAL */}
        {activeLightbox && (
          <div
            id="gallery-lightbox-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/95 backdrop-blur-md animate-fade-in"
            onClick={() => setActiveLightbox(null)}
          >
            {/* Modal Box */}
            <div
              className="bg-neutral-900 border border-gold-550/30 rounded-3xl w-full max-w-3xl overflow-hidden relative shadow-2xl flex flex-col text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header inside modal */}
              <div className="p-4 bg-neutral-955 border-b border-gold-550/10 flex justify-between items-center bg-black/40">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-gold-400 font-sans font-semibold">
                    {activeLightbox.category}
                  </span>
                  <h3 className="font-serif text-base font-bold text-white leading-normal">
                    {activeLightbox.title}
                  </h3>
                </div>
                
                <div className="flex gap-2 items-center">
                  <button
                    id="lightbox-zoom-toggle"
                    onClick={toggleZoom}
                    className="p-2 rounded-lg bg-neutral-800 text-gold-400 hover:text-white transition-all text-xs flex gap-1 items-center"
                    title="Toggle Magnification Zoom"
                  >
                    <ZoomIn className="w-4 h-4" /> <span>{zoomScale > 1 ? "Reset Zoom" : "Toggle Zoom"}</span>
                  </button>

                  <button
                    id="lightbox-close-btn"
                    onClick={() => setActiveLightbox(null)}
                    className="p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Hero Image View Box */}
              <div className="relative w-full bg-neutral-950 p-4 overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[450px] aspect-[4/3] sm:aspect-[16/10]">
                
                {/* Dual Layout for Before & After compares */}
                {activeLightbox.beforeImage ? (
                  <div className="w-full h-full relative flex flex-col sm:flex-row gap-2">
                    {isComparedReveal ? (
                      <>
                        {/* BEFORE PANEL */}
                        <div className="w-full sm:w-1/2 h-full rounded-xl overflow-hidden border border-neutral-800 relative bg-neutral-900">
                          <img
                            src={activeLightbox.beforeImage}
                            alt="Before Stage"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            style={{ transform: `scale(${zoomScale})`, transition: "transform 0.2s" }}
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute bottom-3 left-3 bg-black/70 px-2 py-0.5 rounded text-[10px] tracking-widest text-neutral-400 uppercase font-sans font-bold z-10-custom">Before Makeup</span>
                        </div>

                        {/* AFTER PANEL */}
                        <div className="w-full sm:w-1/2 h-full rounded-xl overflow-hidden border border-gold-300/35 relative bg-neutral-900">
                          <img
                            src={activeLightbox.image}
                            alt="After Master"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            style={{ transform: `scale(${zoomScale})`, transition: "transform 0.2s" }}
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute bottom-3 left-3 bg-gold-600 px-2 py-0.5 rounded text-[10px] tracking-widest text-white uppercase font-sans font-bold z-10-custom">After Royal HD Finish</span>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full rounded-xl overflow-hidden relative">
                        <img
                          src={activeLightbox.image}
                          alt="After Fullscreen"
                          className="w-full h-full object-contain pointer-events-none"
                          style={{ transform: `scale(${zoomScale})`, transition: "transform 0.2s" }}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}

                    {/* Double Toggle compare styles */}
                    <button
                      id="compare-reveal-toggle"
                      onClick={() => setIsComparedReveal(!isComparedReveal)}
                      className="absolute bottom-4 left-4 z-20-custom px-3 py-1.5 bg-neutral-950 text-gold-400 border border-gold-400/40 text-[10px] rounded uppercase font-bold hover:bg-neutral-900"
                    >
                      {isComparedReveal ? "Show Single Fullscreen" : "Show Side-by-Side Comparison"}
                    </button>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center overflow-hidden">
                    <img
                      src={activeLightbox.image}
                      alt={activeLightbox.title}
                      className="max-h-full max-w-full object-contain pointer-events-none"
                      style={{ transform: `scale(${zoomScale})`, transition: "transform 0.2s" }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                {/* Navigational Arrows Left / Right */}
                <button
                  id="lightbox-prev-btn"
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:text-gold-400 border border-neutral-800 transition-all cursor-pointer z-20-custom"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  id="lightbox-next-btn"
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:text-gold-400 border border-neutral-800 transition-all cursor-pointer z-20-custom"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Modal footer summary information */}
              <div className="p-4 bg-neutral-950 text-neutral-400 text-xs text-center border-t border-gold-550/10">
                Use arrows to browse. Drag/scroll can magnify high-details. Photo model is certified real.
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
