/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Scissors, Award, Compass, MessageSquare, Calendar, User, ShoppingBag } from "lucide-react";
import { UserProfile } from "../types";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  currentUser: UserProfile | null;
  onLogout: () => void;
}

export default function Header({ currentPage, setCurrentPage, currentUser, onLogout }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect style trigger
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showOpaqueHeader = isScrolled || currentPage !== "home" || isOpen;

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "academy", label: "Academy" },
    { id: "gallery", label: "Gallery" },
    { id: "staff", label: "Our Staff" },
    { id: "offers", label: "Special Offers" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showOpaqueHeader
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gold-200/30 py-3"
          : "bg-gradient-to-b from-black/60 to-transparent text-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo element */}
          <div
            id="brand-logo"
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => {
              setCurrentPage("home");
              setIsOpen(false);
            }}
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-full border border-gold-400 group-hover:border-gold-550 transition-all bg-white/10">
              <Scissors className="w-5 h-5 text-gold-500 group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-gold-300 animate-pulse duration-1000"></div>
            </div>
            <div>
              <span className={`block font-serif text-2xl font-semibold tracking-wider transition-colors duration-300 ${showOpaqueHeader ? 'text-neutral-900 group-hover:text-gold-600' : 'text-white group-hover:text-gold-200'}`}>
                TASLEEM
              </span>
              <span className={`block text-[10px] tracking-widest uppercase text-gold-500 font-sans font-medium -mt-1`}>
                Beauty Parlour
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 py-2 text-sm font-sans font-medium tracking-wide transition-all duration-200 relative group cursor-pointer ${
                  currentPage === item.id
                    ? showOpaqueHeader
                      ? "text-gold-600 font-semibold"
                      : "text-gold-200 font-semibold"
                    : showOpaqueHeader
                    ? "text-neutral-700 hover:text-gold-600"
                    : "text-white/90 hover:text-gold-200"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    currentPage === item.id ? "scale-x-100" : ""
                  }`}
                />
              </button>
            ))}
          </div>

          {/* CTA & User Dashboard Trigger */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              id="header-cta-booking"
              onClick={() => setCurrentPage("booking")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-sans font-semibold text-xs tracking-wider uppercase transition-all duration-300 transform active:scale-95 shadow-md shadow-gold-500/10 cursor-pointer ${
                currentPage === "booking"
                  ? "bg-gold-600 text-white hover:bg-gold-700"
                  : showOpaqueHeader
                  ? "bg-gold-500 text-white hover:bg-gold-600 hover:shadow-lg hover:shadow-gold-500/20"
                  : "bg-white text-neutral-950 hover:bg-gold-100 hover:shadow-lg hover:shadow-white/20"
              }`}
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </button>

            {currentUser ? (
              <button
                id="header-user-dashboard"
                onClick={() => setCurrentPage("dashboard")}
                className={`flex items-center gap-1 px-4 py-2.5 rounded-full border text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  showOpaqueHeader
                    ? "border-gold-300/40 text-neutral-800 hover:bg-gold-50"
                    : "border-white/30 text-white hover:bg-white/10"
                }`}
              >
                <User className="w-3.5 h-3.5 text-gold-500" />
                {currentUser.name.split(" ")[0]}
              </button>
            ) : (
              <button
                id="header-login-btn"
                onClick={() => setCurrentPage("dashboard")}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  showOpaqueHeader
                    ? "text-neutral-800 hover:text-gold-600 border border-transparent hover:border-gold-500/35"
                    : "text-white hover:text-gold-200 border border-transparent hover:border-white/30"
                }`}
              >
                <User className="w-4 h-4" />
                Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              id="header-cta-booking-mobile"
              onClick={() => setCurrentPage("booking")}
              className="flex items-center justify-center p-2 rounded-full bg-gold-500 text-white shadow-md"
            >
              <Calendar className="w-4 h-4" />
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none cursor-pointer ${
                showOpaqueHeader ? "text-neutral-800 hover:text-gold-600" : "text-white hover:text-gold-200"
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slideout */}
      {isOpen && (
        <div id="mobile-navigation-drawer" className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gold-200 shadow-xl overflow-y-auto max-h-[85vh] animate-fade-in text-neutral-900">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-mobile-${item.id}`}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium transition-all ${
                  currentPage === item.id
                    ? "bg-gold-50 text-gold-600 font-semibold border-l-4 border-gold-550"
                    : "text-neutral-700 hover:bg-neutral-50 hover:text-gold-600"
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="border-t border-gold-100 pt-4 mt-3 space-y-2">
              <button
                id="header-mobile-booking-direct"
                onClick={() => {
                  setCurrentPage("booking");
                  setIsOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gold-500 hover:bg-gold-600 text-white rounded-lg font-sans font-semibold text-sm uppercase tracking-wide transition-all shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>

              <button
                id="header-mobile-dashboard-direct"
                onClick={() => {
                  setCurrentPage("dashboard");
                  setIsOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-gold-300 text-neutral-800 hover:bg-gold-50 rounded-lg font-sans font-semibold text-sm uppercase tracking-wide transition-all"
              >
                <User className="w-4 h-4 text-gold-500" />
                {currentUser ? `${currentUser.name} (My Dashboard)` : "Login / Register"}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
