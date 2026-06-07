/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { User, ShieldAlert, Award, Calendar, ChevronRight, Check, X, Shield, Lock, Trash2, Users, TrendingUp, DollarSign, Star, Briefcase, GraduationCap, Edit, Mail, Phone, BookOpen, Compass, Sparkles } from "lucide-react";
import { UserProfile, Booking, BookingStatus, Staff, Course, Review, StudentRegistration, LoyaltyTier } from "../types";
import { STAFF, COURSES, LOYALTY_TIERS } from "../data";

interface DashboardProps {
  currentUser: UserProfile | null;
  onLogin: (profile: UserProfile) => void;
  onUpdateUser: (profile: UserProfile) => void;
  bookings: Booking[];
  onUpdateBookingStatus: (bookingId: string, status: BookingStatus) => void;
  onDeleteBooking: (bookingId: string) => void;
  registrations: StudentRegistration[];
  onUpdateRegistrationStatus: (regId: string, status: "Pending" | "Enrolled" | "Completed") => void;
  appReviews: Review[];
  onUpdateReviewStatus: (reviewId: string, isApproved: boolean) => void;
}

export default function Dashboard({
  currentUser,
  onLogin,
  onUpdateUser,
  bookings,
  onUpdateBookingStatus,
  onDeleteBooking,
  registrations,
  onUpdateRegistrationStatus,
  appReviews,
  onUpdateReviewStatus
}: DashboardProps) {
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);
  
  // Registration / Log-In Input States
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginName, setLoginName] = useState<string>("");
  const [loginPhone, setLoginPhone] = useState<string>("03220591711");

  // Profile Edit fields
  const [editName, setEditName] = useState<string>(currentUser?.name || "");
  const [editPhone, setEditPhone] = useState<string>(currentUser?.phone || "");
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);

  const handleUserLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginName) return;

    // Build fresh user profile
    const profile: UserProfile = {
      name: loginName,
      email: loginEmail,
      phone: loginPhone,
      loyaltyPoints: 0,
      tier: LoyaltyTier.BRONZE
    };

    onLogin(profile);
  };

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;
    
    const updated = {
      ...currentUser,
      name: editName,
      phone: editPhone
    };

    onUpdateUser(updated);
    setIsEditingProfile(false);
  };

  // ADMIN ANALYTICS CALCULATIONS
  const totalPKRRevenue = bookings
    .filter(b => b.status === BookingStatus.CONFIRMED || b.status === BookingStatus.COMPLETED)
    .reduce((acc, b) => acc + b.amountPaid, 0);

  const totalPointsAwarded = bookings.reduce((acc, b) => acc + b.loyaltyPointsEarned, 0);

  const pendingBookingsCount = bookings.filter(b => b.status === BookingStatus.PENDING).length;

  const currentLoyaltyInfo = currentUser
    ? LOYALTY_TIERS.find(t => t.name === currentUser.tier) || LOYALTY_TIERS[0]
    : LOYALTY_TIERS[0];

  return (
    <section id="secured-user-dashboard" className="py-20 bg-luxury-cream text-neutral-900 animate-fade-in select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UPPER DASHBOARD HEADER WITH QUICK TOGGLE */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white border border-gold-200/50 p-6 rounded-3xl shadow-md mb-12 max-w-6xl mx-auto select-none">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-gold-600 font-bold font-sans">Role Controls Panel</span>
            <h2 className="font-serif text-2xl font-semibold tracking-wide">
              {isAdminMode ? "Parlour Administration Suite" : "Client Loyalty Dashboard"}
            </h2>
          </div>

          <div className="flex gap-2.5 items-center">
            <span className="text-xs font-sans font-semibold text-neutral-500">Active Role Mode:</span>
            <button
              id="dashboard-role-toggle-btn"
              onClick={() => {
                setIsAdminMode(!isAdminMode);
                setIsEditingProfile(false);
              }}
              className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-neutral-950 text-white font-sans text-xs tracking-wider uppercase font-bold hover:bg-gold-650 transition-all cursor-pointer border border-gold-400"
            >
              {isAdminMode ? (
                <>
                  <User className="w-4 h-4 text-gold-400" /> Switch to Client View
                </>
              ) : (
                <>
                  <ShieldAlert className="w-4 h-4 text-gold-400" /> Switch to Administrative View
                </>
              )}
            </button>
          </div>
        </div>

        {/* ==================== SCREEN 1: ANONYMOUS LOGIN DISPLACER ==================== */}
        {!currentUser && !isAdminMode && (
          <div id="anonymous-login-panel" className="max-w-md mx-auto bg-white border border-gold-200/50 shadow-2xl rounded-3xl p-6 lg:p-8">
            <div className="text-center space-y-1 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold-50 text-gold-600 mx-auto flex items-center justify-center border border-gold-200">
                <Lock className="w-5 h-5 text-gold-500" />
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900">Unlock Customer Loyalty</h3>
              <p className="text-xs text-neutral-500">Provide registration details below to track bookings, accumulate points, and unlock membership vouchers.</p>
            </div>

            <form onSubmit={handleUserLoginSubmit} className="space-y-4 text-xs font-sans">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-neutral-500 uppercase">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={loginName}
                  onChange={(e) => setLoginName(e.target.value)}
                  className="w-full px-3 py-2.5 border border-neutral-200 rounded-lg focus:outline-none focus:border-gold-550"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-neutral-500 uppercase">Active Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@gmail.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full px-3 py-2.5 border border-neutral-200 rounded-lg focus:outline-none focus:border-gold-550"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-neutral-500 uppercase">Contact Mobile Phone</label>
                <input
                  type="tel"
                  placeholder="e.g. 03220591711"
                  value={loginPhone}
                  onChange={(e) => setLoginPhone(e.target.value)}
                  className="w-full px-3 py-2.5 border border-neutral-200 rounded-lg focus:outline-none focus:border-gold-550"
                  required
                />
              </div>

              <button
                id="login-btn-submit"
                type="submit"
                className="w-full py-3 bg-neutral-900 hover:bg-gold-650 text-white font-sans font-bold uppercase tracking-widest text-xs rounded-lg transition-all cursor-pointer mt-4"
              >
                Access Lounge
              </button>
            </form>
          </div>
        )}

        {/* ==================== SCREEN 2: ACTIVE CLIENT SUITE ==================== */}
        {currentUser && !isAdminMode && (
          <div id="client-suite-dashboard" className="max-w-6xl mx-auto space-y-12">
            
            {/* Loyalty Card & Benefits breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Golden Glass loyalty card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className={`w-full max-w-sm rounded-3xl p-6 text-white bg-gradient-to-br ${currentLoyaltyInfo.color} relative overflow-hidden flex flex-col justify-between h-[230px] shadow-2xl border border-white/20 select-none`}>
                  
                  {/* Decorative background vectors */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] tracking-widest uppercase font-bold text-white/70 block font-sans">Official Member Card</span>
                      <h3 className="font-serif text-lg font-bold text-gold-100 italic">Tasleem Elite Circle</h3>
                    </div>
                    <div className="p-2.5 rounded-full bg-white/10 ring-1 ring-white/25">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase text-white/50 tracking-wider">Account holder</span>
                    <span className="text-base font-bold tracking-wide block font-serif text-white">{currentUser.name}</span>
                  </div>

                  <div className="flex justify-between items-end border-t border-white/15 pt-3.5">
                    <div>
                      <span className="block text-[9px] uppercase text-white/50">Loyalty Points Balance</span>
                      <span className="text-xl font-mono font-bold text-gold-300">{currentUser.loyaltyPoints} PTS</span>
                    </div>

                    <div className="text-right">
                      <span className="block text-[9px] uppercase text-white/50">Tier Class</span>
                      <span className="text-xs uppercase font-extrabold tracking-widest bg-white/10 px-2 py-0.5 rounded border border-white/20 text-white">
                        {currentUser.tier}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Benefits details right */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-gold-200/40 shadow-xl flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-neutral-900 flex items-center gap-1.5 mb-3">
                    <Sparkles className="w-5 h-5 text-gold-550" /> {currentUser.tier} Status Benifits
                  </h4>
                  <p className="text-xs text-neutral-500 leading-normal mb-4">
                    Earn more points automatically after every checkout. Unlock unique perks of our salon network class structure.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentLoyaltyInfo.benefits.map((be, i) => (
                      <div key={i} className="flex gap-2 items-start text-xs font-semibold text-neutral-700">
                        <Check className="w-4.5 h-4.5 text-gold-500 shrink-0 mt-0.5" />
                        <span>{be}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Edit profile buttons */}
                {isEditingProfile ? (
                  <form onSubmit={handleProfileSave} className="border-t border-gold-100 pt-4 mt-4 flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      placeholder="Name"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="flex-grow px-3 py-1.5 border border-neutral-200 rounded-lg text-xs"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      value={editPhone}
                      onChange={(e) => setEditPhone(e.target.value)}
                      className="flex-grow px-3 py-1.5 border border-neutral-200 rounded-lg text-xs"
                      required
                    />
                    <div className="flex gap-1.5">
                      <button type="submit" className="px-4 py-1.5 bg-neutral-900 text-white rounded-lg text-xs font-bold cursor-pointer">
                        Save
                      </button>
                      <button type="button" onClick={() => setIsEditingProfile(false)} className="px-4 py-1.5 border rounded-lg text-xs font-bold cursor-pointer">
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="border-t border-gold-100 pt-4 mt-6 flex justify-between items-center text-xs">
                    <span className="text-neutral-500 font-medium">✉ Account email: <strong>{currentUser.email}</strong></span>
                    <button
                      onClick={() => {
                        setEditName(currentUser.name);
                        setEditPhone(currentUser.phone);
                        setIsEditingProfile(true);
                      }}
                      className="flex items-center gap-1.5 text-gold-600 hover:text-neutral-900 font-bold uppercase transition-colors cursor-pointer"
                    >
                      <Edit className="w-3.5 h-3.5" /> Modify Profile details
                    </button>
                  </div>
                )}
              </div>

            </div>

            {/* Bookings Tracker lists */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gold-200/50 shadow-xl space-y-4 select-none">
              <h4 className="font-serif text-lg font-bold text-neutral-950 flex items-center gap-1.5">
                <Calendar className="w-5 h-5 text-gold-550" /> Logged Bookings History & Trackers
              </h4>
              <p className="text-xs text-neutral-400">Cancel or request rescheduling easily on active slots.</p>

              <div className="space-y-4">
                {bookings.filter(b => b.customerEmail === currentUser.email).map((bk) => (
                  <div
                    key={bk.id}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gold-100 rounded-2xl bg-neutral-50 gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-gold-600">{bk.id}</span>
                        <span className="text-xs font-bold text-neutral-900">-{bk.branch}</span>
                      </div>
                      <p className="text-[11px] text-neutral-500 mt-1">Date: <strong>{bk.date}</strong> | Slot: <strong>{bk.timeSlot}</strong> • PKR {bk.amountPaid.toLocaleString()}</p>
                    </div>

                    <div className="flex items-center gap-3.5 w-full sm:w-auto justify-between sm:justify-end">
                      <span className={`text-[10px] uppercase font-sans font-bold px-3 py-1 rounded-full border ${
                        bk.status === BookingStatus.CONFIRMED ? 'bg-emerald-50 text-emerald-700 border-emerald-250' :
                        bk.status === BookingStatus.CANCELLED ? 'bg-red-50 text-red-700 border-red-250' :
                        bk.status === BookingStatus.COMPLETED ? 'bg-blue-50 text-blue-700 border-blue-250' :
                        'bg-amber-50 text-amber-700 border-amber-250'
                      }`}>
                        {bk.status}
                      </span>

                      {bk.status === BookingStatus.PENDING && (
                        <button
                          id={`client-cancel-btn-${bk.id}`}
                          onClick={() => onDeleteBooking(bk.id)}
                          className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                          title="Cancel Slot Appointment"
                        >
                          <Trash2 className="w-4.5 h-4.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}

                {bookings.filter(b => b.customerEmail === currentUser.email).length === 0 && (
                  <div className="text-center py-10 text-neutral-400 border-2 border-dashed border-gold-100 rounded-2xl italic text-xs">
                    You haven't submitted any parlour bookings yet. Head to over the Book Appointment tab!
                  </div>
                )}
              </div>
            </div>

          </div>
        )}

        {/* ==================== SCREEN 3: ADMINISTRATIVE PANEL ==================== */}
        {isAdminMode && (
          <div id="admin-panel-dashboard" className="max-w-6xl mx-auto space-y-12 select-none select-none">
            
            {/* Upper global analytics indices */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white rounded-2xl p-5 border border-gold-200/50 shadow flex items-center gap-4">
                <div className="p-3 bg-gold-50 text-gold-600 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-neutral-400 font-sans tracking-wide">Gross Sales Cash Earned</span>
                  <span className="font-serif text-lg font-extrabold text-neutral-900">PKR {totalPKRRevenue.toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gold-200/50 shadow flex items-center gap-4">
                <div className="p-3 bg-gold-50 text-gold-600 rounded-xl">
                  <Calendar className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-neutral-400 font-sans tracking-wide">Pending Moderations</span>
                  <span className="font-serif text-lg font-extrabold text-neutral-900">{pendingBookingsCount} Slots</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gold-200/50 shadow flex items-center gap-4">
                <div className="p-3 bg-gold-50 text-gold-600 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-neutral-400 font-sans tracking-wide">Enrolled Students</span>
                  <span className="font-serif text-lg font-extrabold text-neutral-900">{registrations.length} Candidates</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gold-200/50 shadow flex items-center gap-4">
                <div className="p-3 bg-gold-50 text-gold-600 rounded-xl">
                  <Star className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-neutral-400 font-sans tracking-wide">Average Reviews Score</span>
                  <span className="font-serif text-lg font-extrabold text-neutral-900">4.9 / 5.0 Rating</span>
                </div>
              </div>

            </div>

            {/* APPOINTMENT BOOKING SLOTS MODERATOR TABLE */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gold-200/50 shadow-xl space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gold-150">
                <h4 className="font-serif text-lg font-bold text-neutral-950 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold-550" /> Appointment Moderation Panel
                </h4>
                <span className="text-[10px] font-sans font-bold uppercase bg-amber-50 text-amber-700 px-3 py-1 rounded-full border border-amber-200">
                  {pendingBookingsCount} Pending Approvals
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left text-neutral-850">
                  <thead className="bg-neutral-50 text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest border-b border-gold-100">
                    <tr>
                      <th className="py-3 px-4">Booking ID</th>
                      <th className="py-3 px-4">Customer Name</th>
                      <th className="py-3 px-4">Branch</th>
                      <th className="py-3 px-4">Scheduled Date & Hour</th>
                      <th className="py-3 px-4">Payment & Receipt Link</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Actions Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-neutral-100 hover:bg-neutral-50/50">
                        <td className="py-3 px-4 font-mono font-bold text-gold-600">{booking.id}</td>
                        <td className="py-3 px-4">
                          <span className="block font-bold">{booking.customerName}</span>
                          <span className="block text-[10px] text-neutral-400">{booking.customerPhone}</span>
                        </td>
                        <td className="py-3 px-4 font-medium">{booking.branch.replace(" Branch", "")}</td>
                        <td className="py-3 px-4 font-bold text-neutral-800">
                          {booking.date} at {booking.timeSlot}
                        </td>
                        <td className="py-3 px-4">
                          <span className="block font-semibold">{booking.paymentMethod}</span>
                          {booking.transactionRef && (
                            <span className="block text-[10px] font-mono text-neutral-400">{booking.transactionRef}</span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`text-[9px] uppercase px-2.5 py-0.5 rounded border font-semibold ${
                            booking.status === BookingStatus.CONFIRMED ? 'bg-emerald-50 text-emerald-700 border-emerald-250' :
                            booking.status === BookingStatus.CANCELLED ? 'bg-red-50 text-red-700 border-red-250' :
                            booking.status === BookingStatus.COMPLETED ? 'bg-blue-50 text-blue-700 border-blue-250' :
                            'bg-amber-50 text-amber-700 border-amber-250'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          {booking.status === BookingStatus.PENDING && (
                            <div className="flex gap-1.5">
                              <button
                                id={`admin-approve-btn-${booking.id}`}
                                onClick={() => onUpdateBookingStatus(booking.id, BookingStatus.CONFIRMED)}
                                className="p-1 px-2.5 rounded bg-emerald-600 text-white hover:bg-emerald-700 text-[10px] uppercase font-bold cursor-pointer"
                                title="Approve and confirm booking slot"
                              >
                                Approve
                              </button>
                              <button
                                id={`admin-deny-btn-${booking.id}`}
                                onClick={() => onUpdateBookingStatus(booking.id, BookingStatus.CANCELLED)}
                                className="p-1 px-2.5 rounded bg-red-600 text-white hover:bg-red-700 text-[10px] uppercase font-bold cursor-pointer"
                                title="Reject booking slot request"
                              >
                                Deny
                              </button>
                            </div>
                          )}

                          {booking.status === BookingStatus.CONFIRMED && (
                            <button
                              id={`admin-complete-btn-${booking.id}`}
                              onClick={() => onUpdateBookingStatus(booking.id, BookingStatus.COMPLETED)}
                              className="p-1 px-2 text-blue-600 border border-blue-200 hover:bg-blue-50 text-[10px] rounded uppercase font-bold cursor-pointer"
                            >
                              Fulfill
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}

                    {bookings.length === 0 && (
                      <tr>
                        <td colSpan={7} className="text-center py-10 text-neutral-400 italic">
                          No booking records present.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* STAFF SALARIES ROSTER & REVIEW MODERATION CO-CONTAINER */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Staff Wages list (Admin exclusive security view) */}
              <div className="bg-white rounded-3xl p-6 border border-gold-200/50 shadow-xl space-y-4">
                <h4 className="font-serif text-lg font-bold text-neutral-950 flex items-center gap-2 pb-2 border-b border-neutral-100">
                  <Briefcase className="w-5 h-5 text-gold-550" /> Professional Staff & Salaries
                </h4>
                
                <div className="space-y-3.5 h-[320px] overflow-y-auto pr-1">
                  {STAFF.map((st) => (
                    <div key={st.id} className="flex justify-between items-center p-3 rounded-xl border border-neutral-100 bg-neutral-50">
                      <div className="flex items-center gap-3">
                        <img
                          src={st.image}
                          alt={st.name}
                          className="w-10 h-10 rounded-full object-cover border border-gold-200"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <span className="block font-bold text-neutral-900 text-xs">{st.name}</span>
                          <span className="block text-[10px] text-neutral-550 font-semibold">{st.role}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="block text-[10px] uppercase text-neutral-400">Monthly Compensation</span>
                        <span className="block font-mono font-bold text-emerald-600 text-xs">PKR {st.salary.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review Approval panels */}
              <div className="bg-white rounded-3xl p-6 border border-gold-200/50 shadow-xl space-y-4">
                <h4 className="font-serif text-lg font-bold text-neutral-950 flex items-center gap-2 pb-2 border-b border-neutral-100">
                  <Star className="w-5 h-5 text-gold-550" /> Review Moderation drafts
                </h4>

                <div className="space-y-3 h-[320px] overflow-y-auto pr-1">
                  {appReviews.filter(r => !r.isApproved).map((rev) => (
                    <div key={rev.id} className="p-3 bg-neutral-50 rounded-xl border border-gold-100 space-y-2">
                      <div className="flex justify-between items-start text-[11px]">
                        <div>
                          <span className="font-bold block">{rev.customerName}</span>
                          <span className="text-[10px] text-neutral-400">for {rev.serviceName}</span>
                        </div>
                        <div className="flex gap-1">
                          <button
                            id={`rev-approve-${rev.id}`}
                            onClick={() => onUpdateReviewStatus(rev.id, true)}
                            className="p-1 bg-emerald-600 text-white text-[9px] rounded font-bold hover:bg-emerald-700 cursor-pointer"
                          >
                            Approve
                          </button>
                        </div>
                      </div>
                      <p className="text-xs italic text-neutral-550 leading-relaxed font-sans">
                        "{rev.comment}"
                      </p>
                    </div>
                  ))}

                  {appReviews.filter(r => !r.isApproved).length === 0 && (
                    <div className="text-center py-10 text-neutral-400 italic text-xs">
                      No review drafts awaiting approval. Awesome job!
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* STUDENT TRAINING REGISTRATIONS TABLE */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gold-200/50 shadow-xl space-y-4">
              <h4 className="font-serif text-lg font-bold text-neutral-950 flex items-center gap-2 pb-2 border-b border-neutral-100">
                <GraduationCap className="w-5 h-5 text-gold-550" /> Student Enrollment Register
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left text-neutral-800">
                  <thead className="bg-neutral-50 text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest border-b border-neutral-100">
                    <tr>
                      <th className="py-3 px-4">Applicant ID</th>
                      <th className="py-3 px-4">Student Particulars</th>
                      <th className="py-3 px-4">Admissions Target Course</th>
                      <th className="py-3 px-4">Registration Date</th>
                      <th className="py-3 px-4">Phase status</th>
                      <th className="py-3 px-4">Status actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((reg) => {
                      const courseMatch = COURSES.find(c => c.id === reg.courseId);
                      return (
                        <tr key={reg.id} className="border-b border-neutral-100 hover:bg-neutral-50/50">
                          <td className="py-3 px-4 font-mono font-bold text-gold-600">{reg.id}</td>
                          <td className="py-3 px-4">
                            <span className="block font-bold">{reg.studentName}</span>
                            <span className="block text-[10px] text-neutral-400">{reg.studentPhone} | {reg.studentEmail}</span>
                          </td>
                          <td className="py-3 px-4 font-semibold text-neutral-900">{courseMatch ? courseMatch.name : "Professional Beautician"}</td>
                          <td className="py-3 px-4">{reg.registrationDate}</td>
                          <td className="py-3 px-4">
                            <span className={`text-[9px] uppercase font-bold px-2.5 py-0.5 rounded border ${
                              reg.status === "Enrolled" ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                              reg.status === "Completed" ? 'bg-blue-50 text-blue-700 border-blue-200' :
                              'bg-amber-50 text-amber-700 border-amber-200'
                            }`}>
                              {reg.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            {reg.status === "Pending" && (
                              <button
                                id={`reg-enroll-btn-${reg.id}`}
                                onClick={() => onUpdateRegistrationStatus(reg.id, "Enrolled")}
                                className="px-2.5 py-1 bg-neutral-950 text-white rounded text-[10px] font-bold uppercase tracking-wider hover:bg-gold-550 cursor-pointer"
                              >
                                Enroll Student
                              </button>
                            )}

                            {reg.status === "Enrolled" && (
                              <button
                                id={`reg-complete-btn-${reg.id}`}
                                onClick={() => onUpdateRegistrationStatus(reg.id, "Completed")}
                                className="px-2.5 py-1 bg-emerald-600 text-white rounded text-[10px] font-bold uppercase tracking-wider hover:bg-emerald-700 cursor-pointer"
                              >
                                Graduate
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}

                    {registrations.length === 0 && (
                      <tr>
                        <td colSpan={6} className="text-center py-10 text-neutral-400 italic">
                          No candidate registrations submitted yet. Admissions are active active.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
