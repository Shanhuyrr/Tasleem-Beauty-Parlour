/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Phone, Mail, Clock, MapPin, Navigation, Map, Compass, ExternalLink, RefreshCw, Star } from "lucide-react";
import { IMAGES } from "../data";

export default function ContactSection() {
  const [activeBranchMap, setActiveBranchMap] = useState<"cantt" | "islamabad">("cantt");
  const [streetViewMode, setStreetViewMode] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<string>("");
  const [distanceCalculated, setDistanceCalculated] = useState<string>("");

  const handleCalculateDistance = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userLocation) return;
    
    // Generates a mock proximity estimation based on Pakistan locations
    setTimeout(() => {
      const isIsb = userLocation.toLowerCase().includes("islamabad") || userLocation.toLowerCase().includes("isb");
      const isRwp = userLocation.toLowerCase().includes("rawalpindi") || userLocation.toLowerCase().includes("pindi");
      
      if (activeBranchMap === "cantt") {
        if (isIsb) setDistanceCalculated("Approx. 45 km (50 mins drive via Grand Trunk Rd)");
        else if (isRwp) setDistanceCalculated("Approx. 35 km (40 mins drive via Peshawar Rd)");
        else setDistanceCalculated("Approx. 12 km (18 mins drive from your current location)");
      } else {
        if (isIsb) setDistanceCalculated("Approx. 4 km (8 mins drive within sector coordinates)");
        else if (isRwp) setDistanceCalculated("Approx. 15 km (25 mins drive via Kashmir Highway)");
        else setDistanceCalculated("Approx. 8 km (12 mins from your designated zone)");
      }
    }, 500);
  };

  const mapMarkerCoords = activeBranchMap === "cantt"
    ? { name: "Wah Cantt Main Branch", address: "Basti Area, Near Sapna Cloth, Wah Cantt", landmark: "Sapna Cloth Landmark", coords: "33.7715° N, 72.7512° E" }
    : { name: "Sector E-11 Boutique Branch", address: "Sector E-11, Islamabad Capital", landmark: "Margalla Hills View Corridor", coords: "33.6934° N, 72.9876° E" };

  return (
    <section id="contact-us-page" className="py-20 bg-luxury-cream text-neutral-900 animate-fade-in select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-600 font-sans font-semibold text-xs uppercase tracking-widest block mb-2 font-medium">Bespoke Consultations</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-neutral-900">
            Contact Tasleem Branches
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4"></div>
        </div>

        {/* Contact info channels blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-white rounded-2xl p-6 border border-gold-200/40 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-gold-50 text-gold-600 mx-auto flex items-center justify-center border border-gold-200/50">
              <Phone className="w-5 h-5 text-gold-500" />
            </div>
            <h4 className="font-serif text-base font-bold text-neutral-950">Phone / WhatsApp</h4>
            <p className="text-xs text-neutral-500 leading-normal">Our central help desk answers direct bookings adjustments 24/7.</p>
            <a
              href="https://wa.me/923220591711"
              target="_blank"
              rel="noreferrer"
              className="block font-sans text-sm font-bold text-gold-600 hover:text-neutral-900 transition-colors"
            >
              03220591711
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gold-200/40 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-gold-50 text-gold-600 mx-auto flex items-center justify-center border border-gold-200/50">
              <Mail className="w-5 h-5 text-gold-500" />
            </div>
            <h4 className="font-serif text-base font-bold text-neutral-950">Email Support</h4>
            <p className="text-xs text-neutral-500 leading-normal">Submit wedding details or model applications on our support inbox.</p>
            <a
              href="mailto:usmanramzan655768@gmail.com"
              className="block font-sans text-sm font-bold text-gold-600 hover:text-neutral-900 transition-colors select-all"
            >
              usmanramzan655768@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gold-200/40 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-gold-50 text-gold-600 mx-auto flex items-center justify-center border border-gold-200/50">
              <Clock className="w-5 h-5 text-gold-500" />
            </div>
            <h4 className="font-serif text-base font-bold text-neutral-950">Operating Hours</h4>
            <p className="text-xs text-neutral-500 leading-normal">We stay open all week, including Sundays and holidays.</p>
            <span className="block text-sm font-sans font-bold text-gold-600">
              Monday to Sunday: 10AM – 9PM
            </span>
          </div>

        </div>

        {/* MAPS & BRANCH SELECTOR INTERFACE */}
        <div className="bg-white rounded-3xl border border-gold-200/50 shadow-xl overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Map metadata & tools left */}
            <div className="lg:col-span-5 p-6 lg:p-8 space-y-6 text-left">
              <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-gold-600 block">GPS Coordinates Coordinates</span>
              
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-semibold text-neutral-900">Branch Locator & Map</h3>
                <p className="text-xs text-neutral-500 font-sans">Pick a branch to review custom directions details, landmark assists, and Street View maps.</p>
              </div>

              {/* Branch Quick Selection Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  id="tab-map-cantt"
                  onClick={() => {
                    setActiveBranchMap("cantt");
                    setStreetViewMode(false);
                    setDistanceCalculated("");
                  }}
                  className={`py-3 px-4 rounded-xl text-xs font-bold uppercase transition-all flex flex-col items-center gap-1.5 border cursor-pointer ${
                    activeBranchMap === "cantt"
                      ? "bg-neutral-950 border-neutral-950 text-white"
                      : "bg-neutral-50 border-neutral-200 hover:bg-gold-50/40 text-neutral-700"
                  }`}
                >
                  <Map className="w-4 h-4 text-gold-400" />
                  Wah Cantt (HQ)
                </button>

                <button
                  id="tab-map-isb"
                  onClick={() => {
                    setActiveBranchMap("islamabad");
                    setStreetViewMode(false);
                    setDistanceCalculated("");
                  }}
                  className={`py-3 px-4 rounded-xl text-xs font-bold uppercase transition-all flex flex-col items-center gap-1.5 border cursor-pointer ${
                    activeBranchMap === "islamabad"
                      ? "bg-neutral-950 border-neutral-950 text-white"
                      : "bg-neutral-50 border-neutral-200 hover:bg-gold-50/40 text-neutral-700"
                  }`}
                >
                  <Map className="w-4 h-4 text-gold-400" />
                  Islamabad E-11
                </button>
              </div>

              {/* Landmark info box */}
              <div className="bg-neutral-50 rounded-2xl p-4 border border-gold-200/35 space-y-2 text-xs">
                <div className="flex gap-2 items-center text-neutral-800 font-bold">
                  <Compass className="w-5 h-5 text-gold-500 shrink-0" />
                  <span>{mapMarkerCoords.name}</span>
                </div>
                <div className="space-y-1 pl-7 text-neutral-600">
                  <p>📍 {mapMarkerCoords.address}</p>
                  <p>🏬 Landmark: <strong className="text-gold-600 font-sans">{mapMarkerCoords.landmark}</strong></p>
                  <p className="font-mono text-[10px] text-neutral-450">{mapMarkerCoords.coords}</p>
                </div>
              </div>

              {/* GPS Calculator form */}
              <form onSubmit={handleCalculateDistance} className="space-y-3.5 bg-neutral-900 text-white p-4 rounded-2xl border border-gold-300/10">
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-wider font-sans font-bold text-gold-400">Estimate Distance Proximity</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. Islamabad, Rawalpindi, Peshawar"
                      value={userLocation}
                      onChange={(e) => setUserLocation(e.target.value)}
                      className="flex-grow bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs focus:ring-1 focus:ring-gold-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-gold-500 text-white text-xs px-4 py-1.5 rounded-lg hover:bg-gold-600 cursor-pointer font-sans"
                    >
                      Calculate GPS
                    </button>
                  </div>
                </div>

                {distanceCalculated && (
                  <div className="pt-2 border-t border-gold-550/15 flex items-start gap-1.5 text-xs text-gold-300">
                    <Navigation className="w-4 h-4 text-gold-400 mt-0.5 shrink-0 rotate-45" />
                    <p className="font-semibold leading-snug">{distanceCalculated}</p>
                  </div>
                )}
              </form>

              {/* Quick instructions triggers */}
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapMarkerCoords.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-gold-500 hover:bg-gold-600 text-white font-sans text-xs font-bold uppercase py-3 px-4 rounded-xl flex-grow text-center cursor-pointer shadow-md"
                >
                  <Navigation className="w-4 h-4" /> Start GPS Navigation
                </a>
                <button
                  onClick={() => setStreetViewMode(!streetViewMode)}
                  className="flex items-center justify-center gap-1.5 bg-neutral-950 text-white border border-neutral-800 hover:bg-neutral-800 font-sans text-xs font-bold uppercase py-3 px-4 rounded-xl text-center cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-gold-500" />
                  {streetViewMode ? "Standard Map View" : "Simulate Street View"}
                </button>
              </div>
            </div>

            {/* Google map mock layer right */}
            <div className="lg:col-span-7 bg-neutral-950 aspect-[4/3] relative overflow-hidden flex items-center justify-center select-none border-l border-gold-100">
              
              {/* STREET VIEW GRAPHIC OVERLAY */}
              {streetViewMode ? (
                <div className="absolute inset-0 bg-cover bg-center transition-all duration-500" style={{ backgroundImage: `url(${activeBranchMap === "cantt" ? IMAGES.heroBridal : IMAGES.academyClass})` }}>
                  {/* Street view frame */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 p-6 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/10 backdrop-blur-md">
                      <span className="text-[10px] tracking-wider uppercase font-bold text-gold-400">Street View Mode (360° Sandbox)</span>
                      <span className="text-xs font-mono">{mapMarkerCoords.address}</span>
                    </div>

                    <div className="text-center space-y-1.5 mb-2 bg-black/60 p-4 rounded-2xl border border-gold-400/20 max-w-sm mx-auto">
                      <span className="block text-xs font-bold font-serif text-gold-300">Tasleem Beauty Parlour Entrance View</span>
                      <p className="text-[10px] text-neutral-300">Sanitized, majestic gold signboards with warm, luxury light settings.</p>
                      <button
                        onClick={() => setStreetViewMode(false)}
                        className="text-[9px] uppercase px-3 py-1 bg-gold-500 text-white font-bold rounded hover:bg-gold-600 transition-all font-sans"
                      >
                        Exit Street View
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* STANDARD MAP GRAPHIC OVERLAY */
                <div className="absolute inset-0 bg-[#e3e3e3] p-6 flex flex-col justify-between relative">
                  {/* Grid layout for maps */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#1c1917 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>
                  
                  {/* Map Mock Roads */}
                  <div className="absolute top-1/3 left-0 w-full h-12 bg-white flex items-center pl-8 border-y border-neutral-300">
                    <span className="text-[9px] font-sans font-bold text-neutral-400 tracking-widest uppercase">
                      {activeBranchMap === "cantt" ? "GRAND TRUNK ROAD" : "SECTOR CORRIDOR KASHMIR HIGHWAY"}
                    </span>
                  </div>
                  <div className="absolute left-1/2 top-0 w-12 h-full bg-white flex items-center justify-center border-x border-neutral-300 rotate-12">
                    <span className="text-[9px] font-sans font-bold text-neutral-400 tracking-widest uppercase origin-center rotate-90 whitespace-nowrap">
                      {activeBranchMap === "cantt" ? "BASTI STREET ASSISTANCE" : "E-11 CONNECTOR LANE"}
                    </span>
                  </div>

                  {/* CUSTOM PRECISE BRAND MARKER */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-950 text-white rounded-2xl p-4.5 shadow-2xl border-2 border-gold-500/80 z-10-custom max-w-xs animate-pulse">
                    <div className="flex gap-2.5 items-start">
                      <div className="p-1 rounded-full bg-gold-950 border border-gold-400 text-gold-400 mt-1">
                        <MapPin className="w-5 h-5 animate-bounce" />
                      </div>
                      <div>
                        <span className="block text-[10px] text-gold-400 tracking-widest font-bold uppercase font-sans">YOU ARE HERE</span>
                        <h4 className="font-serif text-sm font-bold text-white whitespace-nowrap">Tasleem Beauty Parlour</h4>
                        <span className="text-[9px] text-neutral-300 block">{mapMarkerCoords.landmark}</span>
                      </div>
                    </div>
                  </div>

                  {/* Sapna cloth landmark marker on Cantt branch map */}
                  {activeBranchMap === "cantt" && (
                    <div className="absolute top-20 right-20 bg-white/90 border border-neutral-300 text-black rounded-lg px-2.5 py-1 shadow text-[9px] font-bold font-sans">
                      🏬 SAPNA CLOTH (LANDMARK)
                    </div>
                  )}

                  {/* Compass calibration rose widget */}
                  <div className="absolute bottom-6 right-6 p-2 bg-white rounded-full border border-neutral-300 shadow flex items-center justify-center text-neutral-700">
                    <Navigation className="w-5 h-5 text-neutral-800 rotate-90" />
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
