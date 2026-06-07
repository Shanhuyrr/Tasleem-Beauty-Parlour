/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Award, Heart, CheckCircle, ShieldCheck, MapPin, Sparkles, Building, Briefcase } from "lucide-react";
import { IMAGES } from "../data";

export default function AboutUs() {
  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold-550" />,
      title: "Hygienic Sanitation",
      description: "Uncompromising cleanliness with single-use tools, autoclaved brushes, and fully sterilized private makeup rooms."
    },
    {
      icon: <Award className="w-8 h-8 text-gold-550" />,
      title: "Certified Master Experts",
      description: "Our artists hold professional certifications from elite hubs in London, MAC Cosmetics, and renowned salons."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold-550" />,
      title: "Premium Products Only",
      description: "Exclusively utilizing authentic global brands such as Dior, Chanel, L'Oreal Premium, and Charlotte Tilbury."
    },
    {
      icon: <Heart className="w-8 h-8 text-gold-550" />,
      title: "Customer Commitment",
      description: "We formulate tailor-made beauty matrices based on your custom facial profile and aesthetic aspirations."
    }
  ];

  const milestones = [
    { year: "2014", title: "Wah Cantt Launch", desc: "First luxurious doors opened, instantly redefining premium aesthetics in Cantt." },
    { year: "2018", title: "Salon expansion & Academy", desc: "Launched our beauty training academy to incubate local female micro-entrepreneurs." },
    { year: "2021", title: "National Styling Award", desc: "Sought-after recognition for excellence in traditional bridal styling innovations." },
    { year: "2024", title: "Islamabad Branch Launch", desc: "Inaugurated our second luxury beauty parlour branch in Sector E-11, Islamabad." }
  ];

  return (
    <section id="about-us-page" className="py-20 bg-luxury-cream text-neutral-900 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section with brand alignment */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-600 font-sans font-semibold text-xs uppercase tracking-widest block mb-2">Our Royal Heritage</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-neutral-900">
            About Tasleem Beauty Parlour
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4"></div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-gold-300">
              <img
                src={IMAGES.academyClass}
                alt="Tasleem Studio Inside Setup"
                className="w-full h-full object-cover transform hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Overlay badge with years of experience */}
            <div className="absolute -bottom-6 -right-6 bg-neutral-950 text-white rounded-2xl p-6 shadow-xl border border-gold-400 max-w-xs">
              <span className="block font-serif text-4xl font-semibold text-gold-400 mb-1">12+</span>
              <span className="block text-xs uppercase tracking-widest text-neutral-300 font-sans font-bold">Years of Continuous Beauty Service Excellence</span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-neutral-900">
              The Evolution of Luxury Beauty Care
            </h3>
            <p className="text-neutral-700 font-sans text-sm sm:text-base leading-relaxed">
              Founded in 2014, **Tasleem Beauty Parlour** began as a single-room beauty station focusing purely on flawless bridal makeup. Over an extraordinary decade, guided by a singular vision—to build premium, authentic grooming experiences—we have grown into key locations.
            </p>
            <p className="text-neutral-700 font-sans text-sm sm:text-base leading-relaxed">
              Our philosophy translates classical Eastern bridal heritage into exquisite, camera-ready bridal transformations. We treat every makeup application not merely as a service, but as a signature piece of visual craftsmanship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="border-l-4 border-gold-500 pl-4 py-1">
                <h4 className="font-serif text-lg font-semibold text-neutral-950">Our Mission</h4>
                <p className="text-xs text-neutral-600 mt-1">To ignite absolute inner and outer radiant confidence in every client through meticulous, high-grade, premium aesthetic work.</p>
              </div>

              <div className="border-l-4 border-gold-500 pl-4 py-1">
                <h4 className="font-serif text-lg font-semibold text-neutral-950">Our Vision</h4>
                <p className="text-xs text-neutral-600 mt-1">To lead the professional beauty and styling standard in Pakistan, fusing continuous international learning with local cultural design nuances.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gold-200/50 shadow-xl mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 font-sans block mb-1">Uncompromising Standards</span>
            <h3 className="font-serif text-2xl font-semibold text-neutral-950">How We Deliver Flawless Results</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="space-y-3 p-4 rounded-xl hover:bg-gold-50/40 transition-all duration-300">
                <div className="mb-4">{v.icon}</div>
                <h4 className="font-serif text-lg font-semibold text-neutral-950">{v.title}</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Milestones Timeline */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 font-sans block mb-1">Our Journey</span>
            <h3 className="font-serif text-2xl font-semibold text-neutral-950">Milestones of Excellence</h3>
          </div>

          <div className="relative border-l-2 border-gold-200 ml-4 md:ml-32 md:mr-32 space-y-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-gold-500 bg-white group-hover:bg-gold-500 transition-colors"></div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                  <div className="md:col-span-2">
                    <span className="font-serif text-xl font-bold text-gold-600">{m.year}</span>
                  </div>
                  <div className="md:col-span-10">
                    <h4 className="font-serif text-lg font-semibold text-neutral-950 group-hover:text-gold-600 transition-colors">{m.title}</h4>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Branches Overview Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Branch 1 */}
          <div className="rounded-2xl p-6 bg-neutral-950 text-white border border-gold-400/25 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-gold-950/50 text-gold-400">
                  <Building className="w-6 h-6" />
                </div>
                <span className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded bg-gold-500/10 text-gold-400 border border-gold-500/20">Main HQ</span>
              </div>
              <h4 className="font-serif text-xl font-semibold text-white mb-2">Wah Cantt Branch</h4>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Serving Cantt clients with high-luxury traditional makeup layouts. Fully equipped with dedicated facial skin suites and training academy halls.
              </p>
              <div className="flex gap-2 items-center text-xs text-neutral-300">
                <MapPin className="w-4 h-4 text-gold-500" />
                <span>Basti Area, Near Sapna Cloth, Wah Cantt</span>
              </div>
            </div>
            <div className="border-t border-gold-400/10 pt-4 mt-6 text-xs text-gold-400 uppercase font-bold tracking-widest self-start">
              Open Mon - Sun: 10AM - 9PM
            </div>
          </div>

          {/* Branch 2 */}
          <div className="rounded-2xl p-6 bg-neutral-950 text-white border border-gold-400/25 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-gold-950/50 text-gold-400">
                  <Building className="w-6 h-6" />
                </div>
                <span className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded bg-gold-500/10 text-gold-400 border border-gold-500/20">Capital Boutique</span>
              </div>
              <h4 className="font-serif text-xl font-semibold text-white mb-2">Islamabad Sector E-11 Branch</h4>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                A state-of-the-art modern salon catered for glamorous party styles, specialized hydra treatments, and bespoke modern high-fashion bride makeovers.
              </p>
              <div className="flex gap-2 items-center text-xs text-neutral-300">
                <MapPin className="w-4 h-4 text-gold-500" />
                <span>E-11, Islamabad, Pakistan</span>
              </div>
            </div>
            <div className="border-t border-gold-400/10 pt-4 mt-6 text-xs text-gold-400 uppercase font-bold tracking-widest self-start">
              Open Mon - Sun: 10AM - 9PM
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
