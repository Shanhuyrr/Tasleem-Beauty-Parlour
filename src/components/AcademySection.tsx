/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Award, Clock, DollarSign, Calendar, CheckCircle, Mail, Phone, BookOpen, GraduationCap, Users } from "lucide-react";
import { Course, Staff, StudentRegistration } from "../types";
import { COURSES, STAFF, IMAGES } from "../data";

interface AcademySectionProps {
  onRegisterStudent: (registration: StudentRegistration) => void;
}

export default function AcademySection({ onRegisterStudent }: AcademySectionProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES[0]);
  
  // Registration Inputs
  const [studentName, setStudentName] = useState<string>("");
  const [studentEmail, setStudentEmail] = useState<string>("");
  const [studentPhone, setStudentPhone] = useState<string>("");
  const [registeredCourseId, setRegisteredCourseId] = useState<string>(COURSES[0].id);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  // Retrieve trainer information
  const getTrainerInfo = (trainerId: string): Staff | undefined => {
    return STAFF.find(s => s.id === trainerId);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentPhone || !studentEmail) return;

    const newReg: StudentRegistration = {
      id: "STUD-" + Math.floor(1000 + Math.random() * 9000),
      studentName,
      studentEmail,
      studentPhone,
      courseId: registeredCourseId,
      registrationDate: new Date().toISOString().split("T")[0],
      status: "Pending"
    };

    onRegisterStudent(newReg);
    setIsRegistered(true);

    // Reset fields after registration success
    setTimeout(() => {
      setStudentName("");
      setStudentEmail("");
      setStudentPhone("");
      setIsRegistered(false);
    }, 4000);
  };

  const courseSyllabus = [
    { title: "Syllabus Part 1", detail: "Cosmetic science, skin typing metrics, hygiene rules, and base application models." },
    { title: "Syllabus Part 2", detail: "Advanced eyeshadow designs, classic & micro-contouring, and lash attachment tutorials." },
    { title: "Syllabus Part 3", detail: "Hairstyle structural engineering overlays, dupatta securing pinning, and jewelry setups." },
    { title: "Syllabus Part 4", detail: "Pricing calculators, client booking workflows, branding, and micro-salon startups." }
  ];

  return (
    <section id="training-academy" className="py-20 bg-luxury-cream text-neutral-900 animate-fade-in select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header visual block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-600 font-sans font-semibold text-xs uppercase tracking-widest block mb-2">Tasleem Beauty Institute</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-neutral-900">
            Professional Training Academy
          </h2>
          <p className="text-xs text-neutral-500 mt-2">
            Build your independent beauty career under certified, industry-leading makeup artists and styling consultants.
          </p>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4"></div>
        </div>

        {/* Course detail grid overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* List layout selection left side */}
          <div className="lg:col-span-4 space-y-3">
            <span className="block text-xs font-bold text-neutral-700 uppercase tracking-widest font-sans mb-1">Available Academy Courses</span>
            {COURSES.map((course) => (
              <button
                key={course.id}
                id={`academy-course-selector-${course.id}`}
                onClick={() => {
                  setSelectedCourse(course);
                  setRegisteredCourseId(course.id);
                }}
                className={`w-full flex items-center justify-between p-4 rounded-xl border-l-4 transition-all duration-300 text-left cursor-pointer ${
                  selectedCourse.id === course.id
                    ? "bg-white border-gold-550 shadow-md ring-1 ring-gold-200/50"
                    : "bg-neutral-50 border-transparent hover:bg-white hover:border-gold-300 text-neutral-700"
                }`}
              >
                <div>
                  <h4 className="font-serif text-sm font-bold text-neutral-900">{course.name}</h4>
                  <span className="text-[10px] text-neutral-400 font-sans">Duration: {course.duration}</span>
                </div>
                <span className="font-semibold text-xs text-gold-600 font-mono">PKR {course.fee.toLocaleString()}</span>
              </button>
            ))}
          </div>

          {/* Expanded Selected Course Detail Right Side */}
          <div className="lg:col-span-8 bg-white border border-gold-200/40 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
            
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-gold-100 pb-4">
              <div>
                <span className="text-[10px] tracking-widest uppercase font-bold text-gold-600 block mb-1">Syllabus Overview</span>
                <h3 className="font-serif text-2xl font-bold text-neutral-950">{selectedCourse.name}</h3>
              </div>
              <div className="bg-gold-50 border border-gold-200 pl-4 pr-6 py-2 rounded-xl text-left">
                <span className="block text-[9 px] uppercase tracking-widest text-neutral-400 font-sans font-bold">Total Tuition Fee</span>
                <span className="font-serif text-lg font-bold text-gold-600">PKR {selectedCourse.fee.toLocaleString()}</span>
              </div>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed">
              {selectedCourse.description}
            </p>

            {/* Practical Course stats details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-neutral-50">
                <Clock className="w-5 h-5 text-gold-500 shrink-0" />
                <div>
                  <span className="block text-[9px] text-neutral-450 uppercase uppercase">Duration</span>
                  <span className="text-xs font-semibold">{selectedCourse.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-neutral-50">
                <Calendar className="w-5 h-5 text-gold-500 shrink-0" />
                <div>
                  <span className="block text-[9px] text-neutral-450 uppercase">Class Schedule</span>
                  <span className="text-xs font-semibold">{selectedCourse.schedule}</span>
                </div>
              </div>

              {getTrainerInfo(selectedCourse.trainerId) && (
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-neutral-50">
                  <img
                    src={getTrainerInfo(selectedCourse.trainerId)?.image}
                    alt={getTrainerInfo(selectedCourse.trainerId)?.name}
                    className="w-8 h-8 rounded-full object-cover border border-gold-300"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="block text-[9px] text-neutral-450 uppercase">Lead Trainer</span>
                    <span className="text-xs font-semibold">{getTrainerInfo(selectedCourse.trainerId)?.name}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Course Features / Highlights */}
            <div className="space-y-3">
              <span className="block text-[10px] font-sans font-bold tracking-widest uppercase text-gold-600">Included Features</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedCourse.features.map((fea, idx) => (
                  <div key={idx} className="flex gap-2 items-start text-xs font-medium text-neutral-700">
                    <CheckCircle className="w-4.5 h-4.5 text-gold-500 shrink-0 mt-0.5" />
                    <span>{fea}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Syllabus outline details */}
            <div className="border-t border-gold-100/50 pt-5 space-y-3">
              <span className="block text-[10px] tracking-widest uppercase text-gold-600 font-bold">Curated Weekly Topics</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {courseSyllabus.map((sy, i) => (
                  <div key={i} className="flex gap-2.5">
                    <span className="font-serif text-sm font-semibold text-gold-400">0{i+1}</span>
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900">{sy.title}</h4>
                      <p className="text-[10px] text-neutral-500 mt-0.5">{sy.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Student Achievements / Success Metrics */}
        <div className="bg-neutral-950 text-white rounded-3xl p-8 lg:p-12 border border-gold-300/20 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-gold-400 font-sans tracking-widest uppercase font-semibold text-xs block">Incubated Careers</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide">Ready for Career Lift-off</h3>
            <p className="text-xs text-neutral-450 leading-relaxed">
              Upon finishing coursework, all active students undergo structured clinical test panels, receive professional vocational certificates signed by leadership, and are included inside our regional salon employment dispatch rosters.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5 text-xs text-neutral-300">
                <GraduationCap className="w-5 h-5 text-gold-500" />
                <span>Government & Vocational certified</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-300">
                <Users className="w-5 h-5 text-gold-500" />
                <span>Direct salon dispatch paths</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gold-400/20 relative group">
              <img
                src={IMAGES.academyStudent}
                alt="Student Master Demo"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white text-[10px] tracking-wide">
                Active Student Hands-On Practice Session
              </div>
            </div>

            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-gold-400/20 relative group">
              <img
                src={IMAGES.academyClass}
                alt="Academy Classroom Inside Setup"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white text-[10px] tracking-wide">
                Live Makeup Artistry Seminars by Zainab Shah
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Online Student Registration Form */}
        <div id="academy-registration-form-container" className="max-w-xl mx-auto bg-white border border-gold-200/50 shadow-2xl rounded-3xl p-6 lg:p-8 select-none">
          <div className="text-center space-y-1 mb-6">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold block">Academy Admissions</span>
            <h3 className="font-serif text-2xl font-semibold text-neutral-900">Secure Your Enrollment Seat</h3>
            <p className="text-xs text-neutral-500">Sign up online to benefit from our ongoing 15% promotional fee discounts.</p>
          </div>

          {isRegistered ? (
            <div className="bg-emerald-50 border border-emerald-250 p-6 rounded-2xl text-center space-y-2 text-emerald-800">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-base font-bold">Registration Data Submitted!</h4>
              <p className="text-xs">
                Our lead course coordinator Zainab Shah will contact you directly on your cell number within 24 hours to schedule orientation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-neutral-500 uppercase">Target Course</label>
                <select
                  value={registeredCourseId}
                  onChange={(e) => setRegisteredCourseId(e.target.value)}
                  className="w-full px-3 py-2.5 border border-neutral-200 rounded-lg text-sm bg-neutral-50 focus:outline-none focus:border-gold-550"
                >
                  {COURSES.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.name} - Fee: {course.fee.toLocaleString()} PKR
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-neutral-500 uppercase">Applicant Full Name</label>
                <input
                  type="text"
                  placeholder="Enter candidate name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-gold-550"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">WhatsApp / Mobile No</label>
                  <input
                    type="tel"
                    placeholder="e.g. 03220591711"
                    value={studentPhone}
                    onChange={(e) => setStudentPhone(e.target.value)}
                    className="w-full px-3 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-gold-550"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase">Personal Email</label>
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    className="w-full px-3 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-gold-550"
                    required
                  />
                </div>
              </div>

              <button
                id="academy-registration-btn-submit"
                type="submit"
                className="w-full py-3 bg-neutral-950 font-sans font-bold text-xs uppercase tracking-widest text-white hover:bg-gold-600 rounded-lg transition-all shadow-md cursor-pointer pt mt-4"
              >
                Submit Registration Info
              </button>
            </form>
          )}

          <div className="border-t border-gold-200/40 mt-6 pt-4 text-center space-y-1">
            <span className="text-[10px] text-neutral-400 block uppercase">Have custom vocational questions? Contact us</span>
            <div className="flex flex-wrap justify-center gap-1.5 text-xs text-neutral-600 font-semibold justify-center">
              <span>📞 03220591711</span>
              <span>•</span>
              <span className="select-all">✉ usmanramzan655768@gmail.com</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
