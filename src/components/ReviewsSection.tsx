/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Star, MessageSquare, Check, Sparkles, Send, Award } from "lucide-react";
import { Review } from "../types";
import { REVIEWS } from "../data";

interface ReviewsSectionProps {
  appReviews: Review[];
  onAddReview: (review: Review) => void;
}

export default function ReviewsSection({ appReviews, onAddReview }: ReviewsSectionProps) {
  const [userName, setUserName] = useState<string>("");
  const [userRating, setUserRating] = useState<number>(5);
  const [userComment, setUserComment] = useState<string>("");
  const [userService, setUserService] = useState<string>("HD Bridal Makeup");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userComment) return;

    const newRev: Review = {
      id: "REV-" + Math.floor(1000 + Math.random() * 9000),
      customerName: userName,
      rating: userRating,
      comment: userComment,
      serviceName: userService,
      date: new Date().toISOString().split("T")[0],
      isApproved: false // Requires admin moderation
    };

    onAddReview(newRev);
    setIsSubmitted(true);

    // Reset Form fields
    setTimeout(() => {
      setUserName("");
      setUserRating(5);
      setUserComment("");
      setIsSubmitted(false);
    }, 4500);
  };

  // Only display approved reviews on public catalog section
  const publicReviews = appReviews.filter(r => r.isApproved);

  // Stats calculate
  const totalScore = publicReviews.reduce((acc, r) => acc + r.rating, 0);
  const avgScore = publicReviews.length ? (totalScore / publicReviews.length).toFixed(1) : "5.0";

  return (
    <section id="customer-reviews-section" className="py-20 bg-luxury-cream text-neutral-900 animate-fade-in select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-600 font-sans font-semibold text-xs uppercase tracking-widest block mb-2 font-medium">Verified Voices</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-neutral-900">
            What Our Clients Reflect
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4"></div>
        </div>

        {/* Global Ratings Banner */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white border border-gold-200/50 p-6 md:p-8 rounded-3xl shadow-lg mb-16 max-w-5xl mx-auto">
          <div className="md:col-span-4 text-center space-y-2 border-r-0 md:border-r border-gold-100 pr-0 md:pr-4">
            <span className="text-[10px] text-neutral-400 font-sans font-bold uppercase tracking-widest block">Average Score</span>
            <h3 className="font-serif text-5xl lg:text-6xl font-bold text-neutral-900">{avgScore}</h3>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-[10px] text-neutral-405 mt-1">Based on {publicReviews.length} authenticated reviews</p>
          </div>

          <div className="md:col-span-8 text-left space-y-3 pl-0 md:pl-4">
            <h4 className="font-serif text-xl font-semibold text-neutral-950">Verified Quality Pillars</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-700">
              <div className="flex gap-2 items-center">
                <Check className="w-4.5 h-4.5 text-gold-500 shrink-0" />
                <span>Camera-Ready Flawless Base (Bridal)</span>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="w-4.5 h-4.5 text-gold-500 shrink-0" />
                <span>Autoclaved Single-Use Sanitation Tools</span>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="w-4.5 h-4.5 text-gold-500 shrink-0" />
                <span>On-Time Event Completion (No Delays)</span>
              </div>
              <div className="flex gap-2 items-center">
                <Check className="w-4.5 h-4.5 text-gold-500 shrink-0" />
                <span>Direct Organic Herbal Henna (No Chemical Burn)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Display Testimonials Column & Add Feedback Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* List display */}
          <div className="lg:col-span-7 space-y-6">
            <span className="block text-xs font-bold text-neutral-700 uppercase tracking-widest font-sans">Latest Client Reviews</span>
            <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
              {publicReviews.map((review) => (
                <div
                  key={review.id}
                  id={`review-item-${review.id}`}
                  className="bg-white rounded-2xl p-6 border border-gold-100 shadow-sm space-y-3 select-none"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-neutral-950">{review.customerName}</h4>
                      <span className="text-[10px] text-neutral-400 font-sans">{review.date} • for {review.serviceName}</span>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Form write feedback */}
          <div id="review-submission-box" className="lg:col-span-5 bg-white border border-gold-200/50 rounded-3xl p-6 shadow-xl space-y-6">
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-gold-600 font-bold font-sans block">Share Experience</span>
              <h3 className="font-serif text-lg font-bold text-neutral-900">Add Your Valuable Review</h3>
              <p className="text-[11px] text-neutral-450">We take client comments extremely seriously. Your help builds our standards.</p>
            </div>

            {isSubmitted ? (
              <div className="bg-amber-55/15 border border-gold-300 p-6 rounded-2xl text-center space-y-2 text-gold-700">
                <Sparkles className="w-10 h-10 text-gold-550 mx-auto animate-spin" />
                <h4 className="text-sm font-bold font-serif">Review Dispatched for Review!</h4>
                <p className="text-xs">
                  Your feedback has been logged. It will reflect live on the website as soon as the administrator reviews and approves it.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:border-gold-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase">Treatment Sourced</label>
                    <input
                      type="text"
                      placeholder="e.g. Highlights, Bridal"
                      value={userService}
                      onChange={(e) => setUserService(e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:border-gold-500"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-500 uppercase">Select Rating Stars</label>
                    <select
                      value={userRating}
                      onChange={(e) => setUserRating(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-neutral-200 rounded-lg bg-neutral-50 focus:outline-none focus:border-gold-500 text-neutral-800"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 Excellent)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 Good)</option>
                      <option value={3}>⭐⭐⭐ (3 Average)</option>
                      <option value={2}>⭐⭐ (2 Fair)</option>
                      <option value={1}>⭐ (1 Poor)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">Your Comments</label>
                  <textarea
                    rows={4}
                    placeholder="Describe staff treatment, hygiene quality, or beauty outcomes..."
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:border-gold-500 text-neutral-800"
                    required
                  />
                </div>

                <button
                  id="submit-review-btn"
                  type="submit"
                  className="w-full py-3 bg-neutral-950 hover:bg-gold-600 text-white font-sans font-bold text-[11px] uppercase tracking-wider rounded-lg transition-all cursor-pointer"
                >
                  Post Review for Review
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
