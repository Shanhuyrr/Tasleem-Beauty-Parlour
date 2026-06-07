/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Check, Calendar, User, ShoppingBag, ShieldCheck, CreditCard, ChevronRight, ChevronLeft, MapPin, Building, Printer, MessageSquare, Mail, HelpCircle } from "lucide-react";
import { Branch, Service, Staff, PaymentMethod, Booking, BookingStatus, UserProfile } from "../types";
import { SERVICES, STAFF } from "../data";

interface BookingSystemProps {
  currentUser: UserProfile | null;
  onBookingComplete: (newBooking: Booking) => void;
  selectedServiceId?: string; // Optional deep-linked service from Services page
}

export default function BookingSystem({ currentUser, onBookingComplete, selectedServiceId }: BookingSystemProps) {
  const [step, setStep] = useState<number>(1);
  
  // Selected Data States
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(
    selectedServiceId ? SERVICES.find(s => s.id === selectedServiceId) || null : null
  );
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(PaymentMethod.CASH);
  
  // Custom user details (if not logged in)
  const [customerName, setCustomerName] = useState<string>(currentUser?.name || "");
  const [customerEmail, setCustomerEmail] = useState<string>(currentUser?.email || "");
  const [customerPhone, setCustomerPhone] = useState<string>(currentUser?.phone || "");
  
  // Mock Payment Transfer Proof
  const [transactionRef, setTransactionRef] = useState<string>("");
  const [isPaying, setIsPaying] = useState<boolean>(false);
  const [createdBooking, setCreatedBooking] = useState<Booking | null>(null);

  // Deep linking trigger
  useEffect(() => {
    if (selectedServiceId) {
      const match = SERVICES.find(s => s.id === selectedServiceId);
      if (match) {
        setSelectedService(match);
        setStep(2); // Start at step 2 or proceed smoothly
      }
    }
  }, [selectedServiceId]);

  // Sync state if currentUser changes
  useEffect(() => {
    if (currentUser) {
      setCustomerName(currentUser.name);
      setCustomerEmail(currentUser.email);
      setCustomerPhone(currentUser.phone);
    }
  }, [currentUser]);

  // Available slots for times
  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM",
    "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"
  ];

  // Progression handlers
  const handleNext = () => {
    if (step === 1 && !selectedBranch) return;
    if (step === 2 && !selectedService) return;
    if (step === 3 && !selectedStaff) return;
    if (step === 4 && (!selectedDate || !selectedTimeSlot)) return;
    if (step === 5 && (!customerName || !customerPhone)) return;
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  // Triggers final booking submission details
  const handleFinalizeBooking = () => {
    if (!selectedBranch || !selectedService || !selectedStaff || !selectedDate || !selectedTimeSlot) return;
    setIsPaying(true);

    // Simulate database write delay
    setTimeout(() => {
      const genRef = transactionRef ? transactionRef : "REF-" + Math.floor(100000 + Math.random() * 900000);
      const points = Math.floor(selectedService.price / 100);

      const bookingObj: Booking = {
        id: "BK-" + Math.floor(10000 + Math.random() * 90000),
        customerName,
        customerEmail,
        customerPhone,
        branch: selectedBranch,
        serviceId: selectedService.id,
        staffId: selectedStaff.id,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        paymentMethod: selectedPayment,
        transactionRef: genRef,
        amountPaid: selectedService.price,
        status: BookingStatus.PENDING,
        createdAt: new Date().toISOString().split("T")[0],
        loyaltyPointsEarned: points
      };

      setCreatedBooking(bookingObj);
      onBookingComplete(bookingObj);
      setIsPaying(false);
      setStep(7); // Show confirmation details
    }, 1500);
  };

  // Trigger Receipt Invoice Print
  const handlePrintReceipt = () => {
    window.print();
  };

  // WhatsApp click triggers
  const triggerWhatsAppAlert = (booking: Booking, serviceName: string, staffName: string) => {
    const text = encodeURIComponent(
      `Hello! I have booked an appointment at Tasleem Beauty Parlour:\n\n` +
      `Booking ID: ${booking.id}\n` +
      `Name: ${booking.customerName}\n` +
      `Branch: ${booking.branch}\n` +
      `Service: ${serviceName}\n` +
      `Stylist: ${staffName}\n` +
      `Date: ${booking.date}\n` +
      `Time Slot: ${booking.timeSlot}\n` +
      `Amount: PKR ${booking.amountPaid.toLocaleString()}\n` +
      `Payment: ${booking.paymentMethod}\n` +
      `Reference: ${booking.transactionRef}\n\n` +
      `Please approve my appointment slot. Thank you!`
    );
    window.open(`https://wa.me/923220591711?text=${text}`, "_blank");
  };

  return (
    <section id="appointments-booking-system" className="py-20 bg-luxury-cream text-neutral-900 animate-fade-in select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Dynamic Step Tracker Top Bar */}
        <div id="booking-step-indicators" className="mb-12 bg-white rounded-2xl p-4 border border-gold-200/50 shadow-md">
          <div className="flex flex-wrap justify-between items-center gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => {
              const labels = ["Branch", "Service", "Stylist", "Timing", "Contact", "Payment", "Receipt"];
              let statusClass = "bg-neutral-100 text-neutral-400 border border-neutral-200";
              if (num < step) statusClass = "bg-gold-550 border-gold-550 text-white";
              else if (num === step) statusClass = "bg-neutral-950 border-neutral-950 text-white font-bold ring-2 ring-gold-400";
              
              return (
                <div key={num} className="flex items-center gap-1.5 text-xs">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${statusClass}`}>
                    {num < step ? <Check className="w-4 h-4" /> : num}
                  </div>
                  <span className={`hidden md:inline font-sans ${step === num ? "font-bold text-neutral-950" : "text-neutral-500"}`}>
                    {labels[num - 1]}
                  </span>
                  {num < 7 && <ChevronRight className="hidden md:inline w-3.5 h-3.5 text-neutral-300" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Wizard Container */}
        <div className="bg-white rounded-3xl border border-gold-200/50 shadow-xl overflow-hidden min-h-[450px] flex flex-col justify-between">
          
          {/* STEP 1: SELECT BRANCH */}
          {step === 1 && (
            <div className="p-8 space-y-6">
              <div className="text-center space-y-1">
                <span className="text-gold-600 font-sans font-bold text-xs uppercase tracking-widest block">Step 1 of 6</span>
                <h3 className="font-serif text-2xl font-semibold text-neutral-900">Choose Select Boutique Branch</h3>
                <p className="text-xs text-neutral-500">Pick the nearest parlour workstation to access available beauty services.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {/* Wah Cantt Branch Option */}
                <div
                  id="opt-branch-cantt"
                  onClick={() => setSelectedBranch(Branch.WAH_CANTT)}
                  className={`border-2 rounded-2xl p-6 cursor-pointer flex flex-col justify-between transition-all group ${
                    selectedBranch === Branch.WAH_CANTT
                      ? "border-gold-500 bg-gold-50/20"
                      : "border-neutral-200 hover:border-gold-300 hover:bg-neutral-50"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-xl ${selectedBranch === Branch.WAH_CANTT ? 'bg-gold-500 text-white' : 'bg-neutral-100 text-neutral-700'}`}>
                        <Building className="w-6 h-6" />
                      </div>
                      {selectedBranch === Branch.WAH_CANTT && <Check className="text-gold-600 w-6 h-6" />}
                    </div>
                    <h4 className="font-serif text-lg font-bold text-neutral-950">{Branch.WAH_CANTT}</h4>
                    <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                      Basti Area, Near Sapna Cloth, Wah Cantt, Punjab
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-xs text-neutral-400">
                    <MapPin className="w-3.5 h-3.5 text-gold-500" />
                    <span>Landmark: Near Sapna Cloth</span>
                  </div>
                </div>

                {/* Islamabad Branch Option */}
                <div
                  id="opt-branch-isb"
                  onClick={() => setSelectedBranch(Branch.ISLAMABAD_E11)}
                  className={`border-2 rounded-2xl p-6 cursor-pointer flex flex-col justify-between transition-all group ${
                    selectedBranch === Branch.ISLAMABAD_E11
                      ? "border-gold-500 bg-gold-50/20"
                      : "border-neutral-200 hover:border-gold-300 hover:bg-neutral-50"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-xl ${selectedBranch === Branch.ISLAMABAD_E11 ? 'bg-gold-500 text-white' : 'bg-neutral-100 text-neutral-700'}`}>
                        <Building className="w-6 h-6" />
                      </div>
                      {selectedBranch === Branch.ISLAMABAD_E11 && <Check className="text-gold-600 w-6 h-6" />}
                    </div>
                    <h4 className="font-serif text-lg font-bold text-neutral-950">{Branch.ISLAMABAD_E11}</h4>
                    <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                      Sector E-11 Boutique, Islamabad Capital Territory
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-xs text-neutral-400">
                    <MapPin className="w-3.5 h-3.5 text-gold-500" />
                    <span>Capital premium design suite</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: CHOOSE SERVICE */}
          {step === 2 && (
            <div className="p-8 space-y-6">
              <div className="text-center space-y-1">
                <span className="text-gold-600 font-sans font-bold text-xs uppercase tracking-widest block">Step 2 of 6</span>
                <h3 className="font-serif text-2xl font-semibold text-neutral-900">Choose Desired Service</h3>
                <p className="text-xs text-neutral-500 font-sans">Select from our elite portfolio of treatments and makeup models.</p>
              </div>

              <div className="max-h-[320px] overflow-y-auto space-y-3 pr-2 scrollbar-thin">
                {SERVICES.map((s) => (
                  <div
                    key={s.id}
                    id={`booking-svc-opt-${s.id}`}
                    onClick={() => setSelectedService(s)}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedService?.id === s.id
                        ? "border-gold-500 bg-gold-50/25"
                        : "border-neutral-100 hover:border-gold-200 hover:bg-neutral-50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="w-12 h-12 rounded-lg object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-serif text-sm font-bold text-neutral-900">{s.name}</h4>
                        <span className="text-[10px] uppercase font-sans text-neutral-400 bg-neutral-100 rounded px-1.5 py-0.5 tracking-wider">
                          {s.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block font-serif text-sm font-semibold text-gold-600">PKR {s.price.toLocaleString()}</span>
                      <span className="block text-[10px] text-neutral-400 font-sans">Est: {s.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: CHOOSE STAFF */}
          {step === 3 && (
            <div className="p-8 space-y-6">
              <div className="text-center space-y-1">
                <span className="text-gold-600 font-sans font-bold text-xs uppercase tracking-widest block">Step 3 of 6</span>
                <h3 className="font-serif text-2xl font-semibold text-neutral-900">Choose Staff Member</h3>
                <p className="text-xs text-neutral-500 font-sans">Select a top styling specialist or request general consultant placement.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {STAFF.map((member) => (
                  <div
                    key={member.id}
                    id={`booking-staff-opt-${member.id}`}
                    onClick={() => setSelectedStaff(member)}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedStaff?.id === member.id
                        ? "border-gold-500 bg-gold-50/25"
                        : "border-neutral-100 hover:border-gold-200 hover:bg-neutral-50"
                    }`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-14 h-14 rounded-full object-cover border border-gold-300"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-serif text-sm font-bold text-neutral-950">{member.name}</h4>
                      <p className="text-[10px] text-gold-600 font-semibold">{member.role}</p>
                      <span className="text-[9px] text-neutral-400 block mt-1">Exp: {member.experience} | ★ {member.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: CHOOSE DATE & TIME */}
          {step === 4 && (
            <div className="p-8 space-y-6">
              <div className="text-center space-y-1">
                <span className="text-gold-600 font-sans font-bold text-xs uppercase tracking-widest block">Step 4 of 6</span>
                <h3 className="font-serif text-2xl font-semibold text-neutral-900">Choose Date & Time Slot</h3>
                <p className="text-xs text-neutral-500 font-sans">Choose scheduling variables. Operating hours: 10:00 AM - 9:00 PM.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* Date Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider font-sans">Target Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={selectedDate}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-gold-550 focus:ring-1 focus:ring-gold-550 text-neutral-800 text-sm font-medium"
                    />
                  </div>
                  <p className="text-[10px] text-neutral-400 font-sans">Only future dates on or after today are open for active appointments.</p>
                </div>

                {/* Time Slot Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider font-sans">Preferred Time Slot</label>
                  <div className="grid grid-cols-3 gap-2 h-[180px] overflow-y-auto border border-neutral-100 p-2 rounded-xl">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2 text-center rounded-lg text-xs font-medium cursor-pointer transition-all ${
                          selectedTimeSlot === slot
                            ? "bg-neutral-950 text-white font-semibold ring-2 ring-gold-400"
                            : "bg-neutral-50 hover:bg-gold-50/50 hover:text-gold-600 text-neutral-700 border border-neutral-100"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* STEP 5: CONTACT INFORMATION */}
          {step === 5 && (
            <div className="p-8 space-y-6">
              <div className="text-center space-y-1">
                <span className="text-gold-600 font-sans font-bold text-xs uppercase tracking-widest block">Step 5 of 6</span>
                <h3 className="font-serif text-2xl font-semibold text-neutral-900">Your Contact Details</h3>
                <p className="text-xs text-neutral-500 font-sans">Provide valid contact channels to receive immediate SMS & WhatsApp updates.</p>
              </div>

              <div className="space-y-4 max-w-lg mx-auto pt-2">
                <div className="grid grid-cols-1 gap-1">
                  <label className="text-xs font-bold text-neutral-700 font-sans uppercase">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your beautiful name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="px-4 py-3 border border-neutral-200 rounded-xl focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-neutral-800 text-sm"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid grid-cols-1 gap-1">
                    <label className="text-xs font-bold text-neutral-700 font-sans uppercase">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. 03220591711"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="px-4 py-3 border border-neutral-200 rounded-xl focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-neutral-800 text-sm"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-1">
                    <label className="text-xs font-bold text-neutral-700 font-sans uppercase">Email Address</label>
                    <input
                      type="email"
                      placeholder="your.email@gmail.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="px-4 py-3 border border-neutral-200 rounded-xl focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-neutral-800 text-sm"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: PAYMENT METHOD CHOICE */}
          {step === 6 && (
            <div className="p-8 space-y-6">
              <div className="text-center space-y-1">
                <span className="text-gold-600 font-sans font-bold text-xs uppercase tracking-widest block">Step 6 of 6</span>
                <h3 className="font-serif text-2xl font-semibold text-neutral-900">Secure Payment Options</h3>
                <p className="text-xs text-neutral-500 font-sans">Submit payments below to immediately lock your slot or choose Cash payment at the counter.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
                
                {/* Options List */}
                <div className="lg:col-span-6 space-y-2">
                  <span className="block text-xs font-bold text-neutral-700 uppercase tracking-widest font-sans mb-1">Select Transfer Medium</span>
                  
                  {[PaymentMethod.CASH, PaymentMethod.EAST_PAISA, PaymentMethod.JAZZ_CASH, PaymentMethod.PAYPAL].map((m) => (
                    <div
                      key={m}
                      onClick={() => {
                        setSelectedPayment(m);
                        setTransactionRef(""); // Clear ref if changed
                      }}
                      className={`flex items-center justify-between p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedPayment === m ? "border-gold-500 bg-gold-50/20" : "border-neutral-100 hover:border-gold-200"
                      }`}
                    >
                      <span className="text-xs font-bold font-sans text-neutral-900">{m}</span>
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPayment === m ? 'border-gold-600 bg-gold-500' : 'border-neutral-300'}`}>
                        {selectedPayment === m && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Account Details & Mock Verification Panel */}
                <div className="lg:col-span-6 bg-neutral-950 text-white rounded-2xl p-5 border border-gold-300/20 space-y-4">
                  <h4 className="font-serif text-base font-semibold text-gold-300">Merchant Transfer Guidelines</h4>
                  
                  {selectedPayment === PaymentMethod.CASH && (
                    <div className="space-y-2 text-xs text-neutral-300 leading-relaxed">
                      <p>You have selected **Cash at Salon** payment.</p>
                      <p className="text-[11px] text-neutral-400">
                        No prior bank wire required! Simply check-in at the branch reception on your scheduled hour to complete checkout manually.
                      </p>
                    </div>
                  )}

                  {selectedPayment === PaymentMethod.EAST_PAISA && (
                    <div className="space-y-3 text-xs">
                      <p className="leading-relaxed">Transfer total bill of **PKR {selectedService?.price.toLocaleString()}** to our designated EasyPaisa wallet:</p>
                      <div className="bg-neutral-905 border border-gold-500/10 p-3 rounded-xl text-center space-y-1">
                        <span className="block text-[10px] text-neutral-400 uppercase font-sans">EasyPaisa Mobile Number</span>
                        <span className="block font-serif text-lg font-bold text-gold-300">03220591711</span>
                        <span className="block text-[10px] text-neutral-400">Account: Usman Ramzan</span>
                      </div>
                    </div>
                  )}

                  {selectedPayment === PaymentMethod.JAZZ_CASH && (
                    <div className="space-y-3 text-xs">
                      <p className="leading-relaxed">Transfer total bill of **PKR {selectedService?.price.toLocaleString()}** to our designated JazzCash wallet:</p>
                      <div className="bg-neutral-905 border border-gold-500/10 p-3 rounded-xl text-center space-y-1">
                        <span className="block text-[10px] text-neutral-400 uppercase font-sans">JazzCash Mobile Number</span>
                        <span className="block font-serif text-lg font-bold text-gold-300">03220591711</span>
                        <span className="block text-[10px] text-neutral-400">Account: Usman Ramzan</span>
                      </div>
                    </div>
                  )}

                  {selectedPayment === PaymentMethod.PAYPAL && (
                    <div className="space-y-3 text-xs">
                      <p className="leading-relaxed">Transfer total bill of **PKR {selectedService?.price.toLocaleString()}** to our designated PayPal address:</p>
                      <div className="bg-neutral-905 border border-gold-500/10 p-3 rounded-xl text-center space-y-1">
                        <span className="block text-[10px] text-neutral-400 uppercase font-sans font-medium">PayPal ID</span>
                        <span className="block font-sans text-sm font-bold text-gold-300 select-all">usmanramzan655768@gmail.com</span>
                      </div>
                    </div>
                  )}

                  {selectedPayment !== PaymentMethod.CASH && (
                    <div className="space-y-1 pt-1.5 border-t border-gold-500/20">
                      <label className="text-[10px] text-neutral-300 uppercase font-bold font-sans">Enter Transaction ID / Reference</label>
                      <input
                        type="text"
                        placeholder="e.g. TXN98765432"
                        value={transactionRef}
                        onChange={(e) => setTransactionRef(e.target.value)}
                        className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-white text-xs focus:ring-1 focus:ring-gold-500 focus:outline-none"
                        required
                      />
                    </div>
                  )}

                  <div className="bg-gold-500/10 border border-gold-400/25 p-3 rounded-xl text-[10px] text-neutral-300 leading-normal flex gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <span>Your receipt verification takes less than 3 hours. Loyalty points lock automatically right after submission.</span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* STEP 7: RECEIPT / CONFIRMATION */}
          {step === 7 && createdBooking && selectedService && selectedStaff && (
            <div className="p-8 space-y-6">
              
              {/* Receipt Visual Header */}
              <div className="text-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-neutral-900">Appointment Registered!</h3>
                <p className="text-xs text-neutral-500">Your custom invoice ticket has been compiled below. Please verify details.</p>
              </div>

              {/* Dynamic printable voucher element */}
              <div
                id="printable-receipt-card"
                className="border-2 border-dashed border-gold-300/60 rounded-3xl p-6 lg:p-8 bg-neutral-50 text-neutral-900 relative space-y-6"
              >
                {/* Watermark Logo Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                  <Building className="w-64 h-64 text-gold-600" />
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-gold-200/40 pb-4">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-neutral-950 uppercase tracking-widest">TASLEEM BEAUTY PARLOUR</h4>
                    <span className="text-[10px] text-gold-600 uppercase font-sans font-bold">Premium Parlour Invoice Vocher</span>
                  </div>
                  <div className="text-left sm:text-right text-xs">
                    <span className="block font-bold">Receipt ID: <span className="font-mono text-gold-600 text-sm">{createdBooking.id}</span></span>
                    <span className="block text-neutral-400">Created: {createdBooking.createdAt}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                  <div className="space-y-2.5">
                    <h5 className="font-extrabold text-[10px] text-neutral-400 uppercase tracking-widest">Customer Profile</h5>
                    <div className="space-y-1">
                      <span className="block font-bold text-neutral-800 text-sm">{createdBooking.customerName}</span>
                      <span className="block text-neutral-600">📞 Phone: {createdBooking.customerPhone}</span>
                      <span className="block text-neutral-600">✉ Email: {createdBooking.customerEmail}</span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <h5 className="font-extrabold text-[10px] text-neutral-400 uppercase tracking-widest">Appointment Variables</h5>
                    <div className="space-y-1">
                      <span className="block font-bold text-neutral-800 text-sm">Branch: {createdBooking.branch}</span>
                      <span className="block text-neutral-600">📅 Date: {createdBooking.date}</span>
                      <span className="block text-neutral-600">⏰ Time Slot: {createdBooking.timeSlot}</span>
                      <span className="block text-neutral-600">💇 Stylist: {selectedStaff.name}</span>
                    </div>
                  </div>
                </div>

                {/* Cost Breakdown Table */}
                <div className="border-t border-b border-gold-200/50 py-4">
                  <div className="flex justify-between text-xs font-bold text-neutral-400 uppercase mb-2">
                    <span>Service Description</span>
                    <span>Subtotal Price</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-neutral-950">{selectedService.name} ({selectedService.duration})</span>
                    <span className="font-mono font-bold">PKR {selectedService.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs text-neutral-500 mt-1">
                    <span>Loyalty Points Registered</span>
                    <span>+{createdBooking.loyaltyPointsEarned} pts</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-bold">
                  <div>
                    <span className="block text-[10px] text-neutral-400 uppercase tracking-wider font-sans">Payment Method</span>
                    <span className="text-neutral-800">{createdBooking.paymentMethod}</span>
                    {createdBooking.transactionRef && (
                      <span className="block text-[10px] font-mono text-neutral-400 font-semibold mt-1">Ref Code: {createdBooking.transactionRef}</span>
                    )}
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="block text-[10px] text-neutral-400 uppercase tracking-wider font-sans">Grand Total Paid</span>
                    <span className="text-xl font-serif text-gold-600">PKR {createdBooking.amountPaid.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Instant Notification Alerts Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button
                  id="action-whatsapp-direct"
                  onClick={() => triggerWhatsAppAlert(createdBooking, selectedService.name, selectedStaff.name)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs uppercase tracking-wide cursor-pointer transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Direct Alert
                </button>

                <button
                  id="action-email-confirm"
                  onClick={() => alert(`Email invoice successfully generated and queue dispatched to ${createdBooking.customerEmail}`)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-sans font-bold text-xs uppercase tracking-wide cursor-pointer transition-all"
                >
                  <Mail className="w-4 h-4 text-gold-400" />
                  Email Confirmation Send
                </button>

                <button
                  id="action-print-receipt"
                  onClick={handlePrintReceipt}
                  className="flex items-center justify-center gap-2 py-3 border border-neutral-300 text-neutral-800 hover:bg-neutral-100 rounded-xl font-sans font-bold text-xs uppercase tracking-wide cursor-pointer transition-all"
                >
                  <Printer className="w-4 h-4 text-gold-500" />
                  Print / Download Invoice PDF
                </button>
              </div>

            </div>
          )}

          {/* Navigational Control Footer (Implicitly hidden in receipt Step 7) */}
          {step < 7 && (
            <div id="booking-footer" className="p-6 bg-neutral-50 border-t border-gold-200/30 flex items-center justify-between">
              <button
                id="wizard-back-btn"
                onClick={handleBack}
                disabled={step === 1}
                className={`flex items-center gap-1 px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider rounded-lg border transition-all ${
                  step === 1
                    ? "border-neutral-200 text-neutral-300 cursor-not-allowed"
                    : "border-neutral-300 text-neutral-700 hover:bg-white cursor-pointer"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>

              <div id="booking-current-summary" className="hidden sm:block text-xs font-medium text-neutral-500">
                {selectedService && (
                  <span>Selected: <strong className="text-gold-600">{selectedService.name}</strong></span>
                )}
              </div>

              {step < 6 ? (
                <button
                  id="wizard-next-btn"
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !selectedBranch) ||
                    (step === 2 && !selectedService) ||
                    (step === 3 && !selectedStaff) ||
                    (step === 4 && (!selectedDate || !selectedTimeSlot)) ||
                    (step === 5 && (!customerName || !customerPhone))
                  }
                  className={`flex items-center gap-1.5 px-6 py-2.5 rounded-lg text-white font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    ((step === 1 && !selectedBranch) ||
                     (step === 2 && !selectedService) ||
                     (step === 3 && !selectedStaff) ||
                     (step === 4 && (!selectedDate || !selectedTimeSlot)) ||
                     (step === 5 && (!customerName || !customerPhone)))
                      ? "bg-neutral-300 text-neutral-400 cursor-not-allowed"
                      : "bg-gold-500 hover:bg-gold-600"
                  }`}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  id="wizard-finalize-btn"
                  onClick={handleFinalizeBooking}
                  disabled={isPaying || (selectedPayment !== PaymentMethod.CASH && !transactionRef)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg text-white font-sans font-extrabold text-xs uppercase tracking-widest cursor-pointer shadow-lg transition-all ${
                    (isPaying || (selectedPayment !== PaymentMethod.CASH && !transactionRef))
                      ? "bg-neutral-300 text-neutral-400 cursor-not-allowed"
                      : "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/10 hover:shadow-xl"
                  }`}
                >
                  {isPaying ? "Verifying..." : "Confirm & Book Slot"}
                </button>
              )}
            </div>
          )}

        </div>

        {/* Quick Help Link Grid */}
        <div className="mt-8 bg-neutral-900 text-white rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between text-xs gap-3 border border-gold-300/10">
          <div className="flex gap-2 items-center text-neutral-300">
            <HelpCircle className="w-4 h-4 text-gold-400 shrink-0" />
            <span>Need immediate bookings check or custom corporate pricing deals?</span>
          </div>
          <span className="font-bold text-gold-300 select-all">📞 WhatsApp Helpline: 03220591711</span>
        </div>

      </div>
    </section>
  );
}
