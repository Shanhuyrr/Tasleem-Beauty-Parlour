/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Star, Award, CheckCircle, Flame, Mail, Calendar, Sparkles } from "lucide-react";
import { Staff } from "../types";
import { STAFF } from "../data";

export default function TeamSection() {
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);

  return (
    <section id="our-staff-page" className="py-20 bg-luxury-cream text-neutral-900 animate-fade-in select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-600 font-sans font-semibold text-xs uppercase tracking-widest block mb-1">Elite Artisans</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-neutral-900">
            Our Certified Stylists & Therapists
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4"></div>
        </div>

        {/* Staff Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {STAFF.map((member) => (
            <div
              key={member.id}
              id={`staff-card-${member.id}`}
              className="bg-white rounded-3xl border border-gold-200/40 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Profile Image Wrapper */}
              <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Rating Tag & Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1 border border-gold-200/35">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-neutral-800">{member.rating}</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-neutral-950/80 backdrop-blur-md px-4 py-2 rounded-xl text-white text-[10px] tracking-widest uppercase font-semibold border border-gold-500/25">
                  {member.experience} Experience
                </div>
              </div>

              {/* Card Details Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-neutral-900 group-hover:text-gold-600 transition-colors">
                    {member.name}
                  </h3>
                  <span className="block text-xs uppercase font-sans font-semibold text-gold-600 tracking-wider mb-2">
                    {member.role}
                  </span>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {member.biography.slice(0, 140)}...
                  </p>
                </div>

                {/* Core Specialty Indicator */}
                <div className="border-t border-gold-100 pt-4 space-y-2">
                  <span className="block text-[10px] font-sans font-extrabold tracking-widest uppercase text-gold-600">Specialization</span>
                  <p className="text-xs text-neutral-800 font-semibold">{member.specialization}</p>
                </div>

                {/* Micro Buttons */}
                <div className="pt-2">
                  <button
                    id={`staff-portfolio-btn-${member.id}`}
                    onClick={() => setSelectedStaff(member)}
                    className="w-full py-2.5 rounded-xl border border-gold-300 text-gold-600 font-sans font-semibold text-xs tracking-wider uppercase hover:bg-gold-550 hover:text-white transition-all cursor-pointer bg-amber-50/15"
                  >
                    View Certification Portfolio
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DETAILED STAFF PORTFOLIO LIGHTBOX */}
        {selectedStaff && (
          <div
            id="staff-portfolio-lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedStaff(null)}
          >
            <div
              className="bg-white border border-gold-400/30 rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-2xl text-neutral-950 scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button top-right */}
              <button
                id="staff-lightbox-close"
                onClick={() => setSelectedStaff(null)}
                className="absolute top-4 right-4 z-10-custom p-2 rounded-full bg-neutral-900/10 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
              >
                Close ✕
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 p-6 md:p-8">
                
                {/* Image left */}
                <div className="sm:col-span-5 space-y-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gold-300 relative bg-neutral-100">
                    <img
                      src={selectedStaff.image}
                      alt={selectedStaff.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="bg-gold-50 p-4 rounded-xl border border-gold-200">
                    <span className="block text-[9px] uppercase text-neutral-400 font-bold font-sans">Active Rating</span>
                    <div className="flex gap-1 items-center mt-0.5">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-bold text-neutral-800">{selectedStaff.rating} out of 5.0</span>
                    </div>
                  </div>
                </div>

                {/* Details layout right side */}
                <div className="sm:col-span-7 space-y-5">
                  <div>
                    <span className="block uppercase text-[10px] tracking-widest text-gold-600 font-bold font-sans">Artisan Credentials</span>
                    <h3 className="font-serif text-2xl font-bold text-neutral-900">{selectedStaff.name}</h3>
                    <span className="text-xs text-neutral-500 font-medium block mt-0.5">{selectedStaff.role}</span>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {selectedStaff.biography}
                  </p>

                  {/* Skills Grid */}
                  <div className="space-y-2">
                    <span className="block text-[10px] uppercase tracking-widest text-gold-600 font-bold font-sans">Professional Work Skills</span>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedStaff.skills.map((sk, idx) => (
                        <div key={idx} className="flex gap-1.5 items-center text-xs font-bold text-neutral-800">
                          <Flame className="w-3.5 h-3.5 text-gold-500" />
                          <span>{sk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications lists */}
                  <div className="space-y-2 pt-3 border-t border-gold-100">
                    <span className="block text-[10px] uppercase tracking-widest text-gold-600 font-bold font-sans">Affiliations & Certificates</span>
                    <div className="space-y-2">
                      {selectedStaff.certifications.map((cer, idx) => (
                        <div key={idx} className="flex gap-2 items-start text-xs font-medium text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                          <span>{cer}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
