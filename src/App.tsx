/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import ServicesSection from "./components/ServicesSection";
import BookingSystem from "./components/BookingSystem";
import AcademySection from "./components/AcademySection";
import GallerySection from "./components/GallerySection";
import TeamSection from "./components/TeamSection";
import ReviewsSection from "./components/ReviewsSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Dashboard from "./components/Dashboard";
import OffersSection from "./components/OffersSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import { UserProfile, Booking, BookingStatus, StudentRegistration, Review, BlogPost, LoyaltyTier } from "./types";
import { BLOGS, REVIEWS, INITIAL_BOOKINGS, INITIAL_REGISTRATIONS } from "./data";

export default function App() {
  const [activeTab, setActiveTab2] = useState<string>("home");
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  // Core Data Persistent states
  const [bookings, setBookings] = useState<Booking[]>(INITIAL_BOOKINGS);
  const [registrations, setRegistrations] = useState<StudentRegistration[]>(INITIAL_REGISTRATIONS);
  const [appReviews, setAppReviews] = useState<Review[]>(REVIEWS);
  const [appBlogs, setAppBlogs] = useState<BlogPost[]>(BLOGS);

  // Section Selector Callback
  const handleNavigateSection = (sectionId: string) => {
    setActiveTab2(sectionId);
    
    // Smooth scrolls to component matching ID if rendered inline, else holds active state
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  // BOOKINGS HANDLERS
  const handleAddNewBooking = (newBooking: Booking) => {
    setBookings((prev) => [newBooking, ...prev]);

    // Automatically award points to logged in profile
    if (currentUser && currentUser.email === newBooking.customerEmail) {
      const updatedPoints = currentUser.loyaltyPoints + newBooking.loyaltyPointsEarned;
      
      // Upgrade tiers based on points threshold
      let nextTier = LoyaltyTier.BRONZE;
      if (updatedPoints >= 1000) nextTier = LoyaltyTier.PLATINUM;
      else if (updatedPoints >= 600) nextTier = LoyaltyTier.GOLD;
      else if (updatedPoints >= 300) nextTier = LoyaltyTier.SILVER;

      setCurrentUser({
        ...currentUser,
        loyaltyPoints: updatedPoints,
        tier: nextTier
      });
    }
  };

  const handleUpdateBookingStatus = (bookingId: string, status: BookingStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status } : b))
    );
  };

  const handleDeleteBooking = (bookingId: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
  };

  // STUDENT REGISTRATION HANDLERS
  const handleRegisterStudent = (newReg: StudentRegistration) => {
    setRegistrations((prev) => [newReg, ...prev]);
  };

  const handleUpdateRegistrationStatus = (regId: string, status: "Pending" | "Enrolled" | "Completed") => {
    setRegistrations((prev) =>
      prev.map((r) => (r.id === regId ? { ...r, status } : r))
    );
  };

  // REVIEW HANDLERS
  const handleAddReview = (newReview: Review) => {
    setAppReviews((prev) => [newReview, ...prev]);
  };

  const handleUpdateReviewStatus = (reviewId: string, isApproved: boolean) => {
    setAppReviews((prev) =>
      prev.map((r) => (r.id === reviewId ? { ...r, isApproved } : r))
    );
  };

  // BLOG HANDLERS
  const handleLikePost = (postId: string) => {
    setAppBlogs((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleAddComment = (postId: string, commentUser: string, commentText: string) => {
    const newComment = {
      id: "CMT-" + Math.floor(Math.random() * 10000),
      user: commentUser,
      comment: commentText,
      date: new Date().toISOString().split("T")[0]
    };

    setAppBlogs((prev) =>
      prev.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
  };

  return (
    <div className="min-h-screen bg-luxury-cream text-neutral-900 selection:bg-gold-550 selection:text-white relative">
      
      {/* 1. Header Bar Navigation */}
      <Header
        currentPage={activeTab}
        setCurrentPage={handleNavigateSection}
        currentUser={currentUser}
        onLogout={() => setCurrentUser(null)}
      />

      {/* 2. Page Content Router Layer */}
      <main className="pt-20">
        {activeTab === "home" && (
          <>
            <Hero
              onBookNow={() => handleNavigateSection("booking")}
              onContactUs={() => handleNavigateSection("contact")}
              onExploreServices={() => handleNavigateSection("services")}
            />
            <AboutUs />
            <ServicesSection onBookService={() => handleNavigateSection("booking")} />
          </>
        )}

        {activeTab === "about" && <AboutUs />}
        
        {activeTab === "services" && (
          <ServicesSection onBookService={() => handleNavigateSection("booking")} />
        )}

        {activeTab === "booking" && (
          <BookingSystem
            currentUser={currentUser}
            onBookingComplete={handleAddNewBooking}
          />
        )}

        {activeTab === "academy" && (
          <AcademySection onRegisterStudent={handleRegisterStudent} />
        )}

        {activeTab === "gallery" && <GallerySection />}

        {activeTab === "staff" && <TeamSection />}

        {activeTab === "offers" && (
          <OffersSection onBookNow={() => handleNavigateSection("booking")} />
        )}

        {activeTab === "reviews" && (
          <ReviewsSection appReviews={appReviews} onAddReview={handleAddReview} />
        )}

        {activeTab === "blog" && (
          <BlogSection
            appBlogs={appBlogs}
            onLikePost={handleLikePost}
            onAddComment={handleAddComment}
          />
        )}

        {activeTab === "contact" && <ContactSection />}

        {activeTab === "dashboard" && (
          <Dashboard
            currentUser={currentUser}
            onLogin={setCurrentUser}
            onUpdateUser={setCurrentUser}
            bookings={bookings}
            onUpdateBookingStatus={handleUpdateBookingStatus}
            onDeleteBooking={handleDeleteBooking}
            registrations={registrations}
            onUpdateRegistrationStatus={handleUpdateRegistrationStatus}
            appReviews={appReviews}
            onUpdateReviewStatus={handleUpdateReviewStatus}
          />
        )}
      </main>

      {/* 3. Footer information channels */}
      <Footer />

      {/* 4. Floating Instant Assistance */}
      <WhatsAppButton />

    </div>
  );
}
