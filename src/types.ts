/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ServiceCategory {
  BRIDAL = "Bridal Makeup",
  PARTY = "Party Makeup",
  HAIR_STYLING = "Hair Styling",
  HAIR_TREATMENTS = "Hair Treatments",
  SKIN_CARE = "Skin Care",
  MEHNDI = "Mehndi Services"
}

export enum Branch {
  WAH_CANTT = "Wah Cantt (Main Branch)",
  ISLAMABAD_E11 = "Islamabad E-11 Branch"
}

export enum PaymentMethod {
  CASH = "Cash at Salon",
  EAST_PAISA = "EasyPaisa",
  JAZZ_CASH = "JazzCash",
  PAYPAL = "PayPal"
}

export enum BookingStatus {
  PENDING = "Pending Approval",
  CONFIRMED = "Confirmed",
  COMPLETED = "Completed",
  CANCELLED = "Cancelled"
}

export enum LoyaltyTier {
  BRONZE = "Bronze Member",
  SILVER = "Silver Member",
  GOLD = "Gold Member",
  PLATINUM = "Platinum Member"
}

export interface Service {
  id: string;
  category: ServiceCategory;
  name: string;
  description: string;
  price: number; // in PKR
  duration: string; // e.g., "120 mins"
  benefits: string[];
  image: string;
  beforeAfterImage?: {
    before: string;
    after: string;
  };
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  salary: number; // in PKR
  image: string;
  biography: string;
  skills: string[];
  experience: string; // e.g., "8 Years"
  specialization: string;
  certifications: string[];
  rating: number;
}

export interface Course {
  id: string;
  name: string;
  duration: string;
  fee: number; // in PKR
  schedule: string;
  description: string;
  features: string[];
  trainerId: string; // references staff profile
}

export interface Booking {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  branch: Branch;
  serviceId: string;
  staffId: string;
  date: string; // YYYY-MM-DD
  timeSlot: string; // e.g., "11:00 AM"
  paymentMethod: PaymentMethod;
  transactionRef?: string;
  amountPaid: number;
  status: BookingStatus;
  createdAt: string;
  loyaltyPointsEarned: number;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number; // 1-5
  comment: string;
  serviceName: string;
  date: string;
  isApproved: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  image: string;
  author: string;
  date: string;
  likes: number;
  comments: {
    id: string;
    user: string;
    comment: string;
    date: string;
  }[];
}

export interface GalleryItem {
  id: string;
  category: string; // e.g., "Bridal", "Party Makeup", "Hair Styling", "Hair Color", "Mehndi", "Skin Care", "Before & After"
  image: string;
  title: string;
  description?: string;
  beforeImage?: string; // Optional for Before & After
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  loyaltyPoints: number;
  tier: LoyaltyTier;
}

export interface StudentRegistration {
  id: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  courseId: string;
  registrationDate: string;
  status: "Pending" | "Enrolled" | "Completed";
}
