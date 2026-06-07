/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceCategory, Service, Staff, Course, Review, BlogPost, GalleryItem, LoyaltyTier, Booking, BookingStatus, StudentRegistration, Branch, PaymentMethod } from "./types";

// Import all local image assets statically to ensure proper Vite compilation and asset routing
import altaMehndiArtImg from "./assets/images/alta_mehndi_design_1780810796174.png";
import blondeBlowoutImg from "./assets/images/blonde_layered_blowout_1780811332627.png";
import gentsStylingImg from "./assets/images/classic_gents_styling_1780811376360.png";
import culturalSignificanceImg from "./assets/images/cultural_significance_1780811051246.png";
import diwaliMehndiArtImg from "./assets/images/diwali_bridal_mehndi_1780810816281.png";
import jennaShagImg from "./assets/images/jenna_shag_hairstyle_1780811307459.png";
import retroWavesImg from "./assets/images/retro_hollywood_waves_1780811352029.png";
import royalGownImg from "./assets/images/royal_maroon_gown_1780811650566.png";
import scarletLehengaImg from "./assets/images/scarlet_bridal_lehenga_1780811622984.png";
import seasonalTrendsImg from "./assets/images/seasonal_trends_1780811070980.png";
import teejMehndiArtImg from "./assets/images/teej_peacock_mehndi_1780810841787.png";
import trendMehndiArtImg from "./assets/images/trend_bridal_mehndi_1780811028403.png";

// Premium curated Unsplash images for luxury hair, skin, bridal and salon themes
export const IMAGES = {
  heroBridal: "https://images.unsplash.com/photo-1632765854612-9b21fa68a155?q=80&w=1200&auto=format&fit=crop", // Stunning bridal makeup background
  bridalTraditional: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop",
  bridalModern: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
  partyMakeup: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
  hairCutting: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
  hairColoring: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
  skinCare: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
  facialGold: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
  mehndiArt: diwaliMehndiArtImg,
  academyStudent: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
  academyClass: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
  logos: {
    goldPattern: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop"
  }
};

export const SERVICES: Service[] = [
  // BRIDAL MAKEUP SERVICES
  {
    id: "b-hd",
    category: ServiceCategory.BRIDAL,
    name: "HD Bridal Makeup",
    description: "Camera-ready flawless HD makeup designed to stay perfect for up to 16 hours. Includes luxury lash application, skin preparation, and dupatta setting.",
    price: 45000,
    duration: "180 mins",
    benefits: ["Pore-blurring HD foundation", "Waterproof and sweat-resistant formula", "Premium mink lashes", "Complementary outfit and jewelry setting"],
    image: "https://images.unsplash.com/photo-1610136633659-42b781165e31?q=80&w=800&auto=format&fit=crop",
    beforeAfterImage: {
      before: "https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?q=80&w=400&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1610136633659-42b781165e31?q=80&w=400&auto=format&fit=crop"
    }
  },
  {
    id: "b-lux",
    category: ServiceCategory.BRIDAL,
    name: "Luxury Signature Bridal Makeup",
    description: "An elite experience using ultra-premium international brands (Dior, Chanel, Charlotte Tilbury) with detailed face-sculpting contours and airbrush setting.",
    price: 60000,
    duration: "210 mins",
    benefits: ["Elite premium brands only", "Custom airbrush final touch", "Hydrating serum sheet mask prep", "Complete styling consultation & free trial trial"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b-trad",
    category: ServiceCategory.BRIDAL,
    name: "Traditional Bridal Makeup",
    description: "The timeless royal subcontinental look focusing on deep kohled red-gold eye artistry, classic bridal heavy contour, and custom blush styles.",
    price: 35000,
    duration: "150 mins",
    benefits: ["Classic royalty finish", "Deep kohl eye definition", "Dupatta secure-pinning", "Jeweled accessory adjustment finished"],
    image: "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b-mod",
    category: ServiceCategory.BRIDAL,
    name: "Modern Pastel Bridal Makeup",
    description: "A contemporary minimalist bridal finish featuring soft dew-glow foundations, pastel tone transitions, and light rose-dust shimmer styles.",
    price: 40000,
    duration: "150 mins",
    benefits: ["Dewy finish glow", "Ultra-light breathable wear", "Custom floral styling accentuation", "Elegant natural visual aesthetic"],
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b-nikah",
    category: ServiceCategory.BRIDAL,
    name: "Elegant Nikah Makeup",
    description: "A soft, romantic makeup look perfectly curated for Nikah ceremonies with luminous highlighters, elegant liner, and soft rosy lips.",
    price: 22000,
    duration: "120 mins",
    benefits: ["Luminous porcelain base", "Soft romantic eye shadow palette", "Hairstyle of your choice included", "Dupatta & jewelry setting service"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b-walima",
    category: ServiceCategory.BRIDAL,
    name: "Flawless Walima Makeup",
    description: "Sophisticated makeup crafted for walima receptions with subtle metallic details, elegant contouring, and modern hairstyles.",
    price: 30000,
    duration: "150 mins",
    benefits: ["Soft smokey or metallic eyes", "Customized contour styling", "Premium lashes & setting finish", "Exclusive dress finalization assist"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b-cust",
    category: ServiceCategory.BRIDAL,
    name: "Ultimate Customized Bridal Package",
    description: "Our all-inclusive package with Bridal Makeup, Hair Styling, hands & feet Mehndi, and prior-day Luxury Facial prep.",
    price: 75000,
    duration: "240 mins",
    benefits: ["Complete hair & makeup", "Special bridal mehndi artistry", "Luxury Gold Facial prep (1 day prior)", "VIP private room access & refreshments"],
    image: "https://images.unsplash.com/photo-1610136633659-42b781165e31?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b-lehenga",
    category: ServiceCategory.BRIDAL,
    name: "Scarlet Bridal Lehenga Styling & Fitting",
    description: "Arrange, drape, and coordinate a gorgeous royal scarlet red flare lehenga, decorated with detailed traditional gold zardozi tilla and intricate embroidery.",
    price: 18000,
    duration: "90 mins",
    benefits: ["Flawless traditional dupatta draping", "Royal jewelry and hair accessory layout", "Comfort-locking dress secure layout", "Personal assistance throughout the photoshoot"],
    image: scarletLehengaImg
  },
  {
    id: "b-maroon",
    category: ServiceCategory.BRIDAL,
    name: "Elite Royal Maroon Gown Couture",
    description: "Dress and drape consultation featuring luxurious deep maroon velvet bridal gowns. Detailed fabric styling, high-profile heavy choker coordination, and professional setup.",
    price: 20000,
    duration: "120 mins",
    benefits: ["Velvet drape luxury contouring", "Heavy gold and pearl jewelry setup", "Custom hair ornaments fitting", "VIP private dressing suite access"],
    image: royalGownImg
  },

  // PARTY MAKEUP SERVICES
  {
    id: "p-std",
    category: ServiceCategory.PARTY,
    name: "Classic Party Makeup",
    description: "Elegant party look matching your outfit perfectly, featuring soft contours and long-lasting glow details.",
    price: 85000,
    duration: "60 mins",
    benefits: ["Satin flawless base", "Dynamic color shadow coordinate", "Signature lip lining", "Volumizing lash treatment"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "p-eid",
    category: ServiceCategory.PARTY,
    name: "Festival / Eid Makeup Special",
    description: "Celebrate festivals with our exclusive express glow party look, combining fresh light bases and striking winged liners.",
    price: 6000,
    duration: "45 mins",
    benefits: ["Quick hydrated base", "Classic liner and kohl lashes", "Hydrating lip gloss finish", "Fast setup style"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "p-grad",
    category: ServiceCategory.PARTY,
    name: "Graduation & Event Makeup",
    description: "Photogenic party makeup optimized for cameras and outdoor lighting. Perfect for graduation and corporate ceremonies.",
    price: 7500,
    duration: "60 mins",
    benefits: ["Flashback-safe mineral foundation", "Natural structural brow fill", "Matte Transfer-proof lips", "Setting mist lock"],
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop"
  },

  // HAIR STYLING
  {
    id: "h-style",
    category: ServiceCategory.HAIR_STYLING,
    name: "Bridal Hairstyle Masterpiece",
    description: "Exquisite hair styling incorporating loops, curls, floral attachments, or traditional hair jewelry structures.",
    price: 8000,
    duration: "60 mins",
    benefits: ["Structural backcombing hold", "Real/artificial flowers placement", "Jewelry crown setting support", "Heat-shield spray styling"],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "h-cut",
    category: ServiceCategory.HAIR_STYLING,
    name: "Signature Hair Cut & Blowdry",
    description: "Transformative haircutting services by senior stylists including steps, layers, bob, or custom styling.",
    price: 3500,
    duration: "45 mins",
    benefits: ["Professional custom profile cuts", "Clarifying scalp wash option", "Premium round-brush blowout styling", "Finishing oil nourishment"],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "h-shag",
    category: ServiceCategory.HAIR_STYLING,
    name: "Trendy Wolf & Shag Cut with Curtain Bangs",
    description: "Effortlessly chic shaggy layers paired with textured curtain bangs. Custom-tailored to frame your facial structure perfectly.",
    price: 4500,
    duration: "60 mins",
    benefits: ["Face-framing slide-cut texturizing", "Signature volume-boosting session", "Curtain bangs detailing", "Pro-care styling tutorial"],
    image: jennaShagImg
  },
  {
    id: "h-blowout",
    category: ServiceCategory.HAIR_STYLING,
    name: "Luxury Bouncy Layered Blowout",
    description: "Extreme root-lift, smooth volume, and bouncy cascading layered waves that last for days. Perfect for celebrity-level glamour.",
    price: 3000,
    duration: "45 mins",
    benefits: ["Intense hydration shampoo prep", "Multi-dimensional round-brush technique", "Long-lasting lock-in humidity spray", "Argan gloss oil touch-up"],
    image: blondeBlowoutImg
  },
  {
    id: "h-retro",
    category: ServiceCategory.HAIR_STYLING,
    name: "Glamorous Retro Hollywood Waves",
    description: "Sleek, glossy, deep vintage side-swept waves with structured bounce and professional high-shine set.",
    price: 5000,
    duration: "60 mins",
    benefits: ["Thermal protectant heat prep", "Structured pin-curl styling preset", "High-gloss glass shine coating", "Brush-out definition setting"],
    image: retroWavesImg
  },
  {
    id: "h-gents",
    category: ServiceCategory.HAIR_STYLING,
    name: "Custom Textured Gents Cut & Style",
    description: "Expertly crafted men's scissor cut or fade, complete with textured flow, side-sweep parting, and neck taper clean finish.",
    price: 2500,
    duration: "30 mins",
    benefits: ["Detailed hair & scalp diagnosis", "Precision shears scissor work", "Matte molding paste texture style", "Soothing hot towel neck clean"],
    image: gentsStylingImg
  },

  // HAIR TREATMENTS
  {
    id: "h-color",
    category: ServiceCategory.HAIR_TREATMENTS,
    name: "Premium Full Hair Coloring",
    description: "Luxurious global hair coloring or custom root touch-ups utilizing ammonia-free l'Oreal premium lines.",
    price: 12000,
    duration: "120 mins",
    benefits: ["100% grey hair coverage", "Ammonia-free scalp-friendly color", "Intense shine coat lock", "Color-saver shampoo wash"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "h-keratin",
    category: ServiceCategory.HAIR_TREATMENTS,
    name: "Keratin Smooth Gloss Treatment",
    description: "Deep repairing clinical keratin protein treatment that eliminates 95% frizz and locks in smooth straight luxury shine.",
    price: 20000,
    duration: "150 mins",
    benefits: ["Deep frizz free structures for 4+ months", "Intense split-ends restructuring", "Premium amino-acid therapy", "Post-spa sulfate-free wash"],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop"
  },

  // SKIN CARE
  {
    id: "s-gold",
    category: ServiceCategory.SKIN_CARE,
    name: "24K Pure Gold Luxury Facial",
    description: "Elite cellular renewal treatment using real 24-carat gold leaves, botanical scrub packs, and hydration massage.",
    price: 12000,
    duration: "90 mins",
    benefits: ["Instant radiant skin brighten", "Collagen elastic stimulation", "Blackheads express extraction", "Real golden dust glow mask"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "s-hydra",
    category: ServiceCategory.SKIN_CARE,
    name: "Advanced Clinical HydraFacial",
    description: "Medical-grade skin resurfacing using spiral vacuum pore extractions, hydration serums, and micro-current lifting.",
    price: 15000,
    duration: "60 mins",
    benefits: ["Vacuum deep blackhead extract", "Antioxidant nutrient serum infusion", "Red-light collagen healing therapy", "No downtime skin refreshment"],
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop"
  },

  // MEHNDI SERVICES
  {
    id: "m-brid",
    category: ServiceCategory.MEHNDI,
    name: "Royal Heavy Bridal Mehndi",
    description: "Exquisite hand-drawn organic henna art extending up to elbows and ankles. Features rich portrait styles, peacock, and floral motifs.",
    price: 15000,
    duration: "180 mins",
    benefits: ["100% organic custom-mix dark henna", "Detailed storytelling bridal designs", "Henna lemon sugar seal application", "Post-care instruction kit"],
    image: "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "m-arab",
    category: ServiceCategory.MEHNDI,
    name: "Royal Arabic Mehndi Designs",
    description: "Thick bold outlining mehndi style pairing modern circular elements and clean negative spacer shading details.",
    price: 5000,
    duration: "60 mins",
    benefits: ["Fast staining formula", "Bold contrasting lines", "Chic modern flow designs", "Finger details completed"],
    image: "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?q=80&w=800&auto=format&fit=crop"
  }
];

export const STAFF: Staff[] = [
  {
    id: "st-ayesha",
    name: "Ayesha Khan",
    role: "Senior Bridal Makeup Artist",
    salary: 85000,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    biography: "Ayesha is an internationally certified royal stylist with over 10 years of experience. She is celebrated across the country for her rich, traditional-with-a-modern-twist bridal artistry.",
    skills: ["HD Airbrush Makeup", "Traditional Eye Artistry", "Dupatta Setting", "VIP Client Styling"],
    experience: "10 Years",
    specialization: "HD Royal Bridal Visuals",
    certifications: ["London School of Makeup Certification", "Vidal Sassoon Styling Academy Diploma"],
    rating: 4.9
  },
  {
    id: "st-sana",
    name: "Sana Malik",
    role: "Hair Styling Expert",
    salary: 70000,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    biography: "Sana is a master of structural hairstyles. From cascading bridal curls to cutting-edge contemporary cuts and multi-dimensional Balayage color highlights.",
    skills: ["Fierce Layer Cuts", "Balayage", "Bridal Loop Breads", "Keratin Therapy"],
    experience: "8 Years",
    specialization: "Hairstyles & Hair Chemistry",
    certifications: ["L'Oreal Technical Colorist Master", "Toni&Guy Academy Diploma"],
    rating: 4.8
  },
  {
    id: "st-hira",
    name: "Hira Ahmed",
    role: "Skin Care Specialist",
    salary: 65000,
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&auto=format&fit=crop",
    biography: "Hira is deeply committed to skin nutrition and modern clinical treatment procedures. Her skin profiling is state-of-the-art, restoring confidence for clients of all skin types.",
    skills: ["HydraFacial Resurfacing", "24K Gold Therapy", "Acne Extractions", "Microdermabrasion"],
    experience: "6 Years",
    specialization: "Clinical Skin Rejuvenation",
    certifications: ["Dermal Institute Beauty Care Certificate", "CIDESCO Aesthetician License"],
    rating: 4.9
  },
  {
    id: "st-mahnoor",
    name: "Mahnoor Ali",
    role: "Mehndi Artist",
    salary: 55000,
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?q=80&w=400&auto=format&fit=crop",
    biography: "Mahnoor has an extraordinary eye for geometry and historical motif art. Her custom bridal henna requires incredible precision and is a highlight of our bridal customer experience.",
    skills: ["Bridal Intricate Portraits", "Traditional Rajasthani Designs", "Flowing Gulf Arabic Style", "Herbal Stain Optimization"],
    experience: "5 Years",
    specialization: "Royal Custom Henna Art",
    certifications: ["Indo-Arabic Traditional Arts Excellence Award"],
    rating: 5.0
  },
  {
    id: "st-zainab",
    name: "Zainab Shah",
    role: "Makeup Trainer",
    salary: 75000,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    biography: "Zainab is the lead instructor at our Academy, blending actual clinical demonstrations with active client simulation sessions so students gain industry-ready confidence.",
    skills: ["Pedagogical Coaching", "Modern Makeup Formulas", "Salon Growth Frameworks", "Cosmetics Science"],
    experience: "8 Years",
    specialization: "Professional Beautician Coaching",
    certifications: ["Certified Professional Vocational Instructor", "MAC Cosmetics Senior Artist Trainer"],
    rating: 4.9
  },
  {
    id: "st-rabia",
    name: "Rabia Noor",
    role: "Beauty Consultant",
    salary: 60000,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    biography: "Rabia conducts one-on-one custom facial mapping and wedding timeline prep assessments. With her advisory support, every bride starts their treatment on a perfect path.",
    skills: ["Aesthetic Assessments", "Wedding Timeline Planning", "Product Matching", "Service Customization"],
    experience: "7 Years",
    specialization: "Personalized Beauty Curations",
    certifications: ["Esthetician Advisory Board Diploma", "Skin Analysis Master Certification"],
    rating: 4.7
  }
];

export const COURSES: Course[] = [
  {
    id: "c-beaut",
    name: "Professional Beautician Course",
    duration: "3 Months",
    fee: 45000,
    schedule: "Monday & Wednesday: 11:00 AM - 1:00 PM",
    description: "The ultimate pathway to becoming a licensed salon beautician. Covers foundations of skin science, master makeup application, and hair care strategies.",
    features: ["Hands-on clinical styling setups", "Free master cosmetics kit provided", "Salon client relations and business guidance", "Internship opportunities at Tasleem branches"],
    trainerId: "st-zainab"
  },
  {
    id: "c-bridal",
    name: "Bridal Makeup Masterclass",
    duration: "1 Month",
    fee: 25000,
    schedule: "Tuesday & Thursday: 2:00 PM - 4:00 PM",
    description: "An intensive masterclass diving into royal, HD airbrush, and contemporary pastel bridal makeup techniques, plus heavy jewelry dupatta setting.",
    features: ["Focus on HD camera-ready products", "Live model demonstration sessions", "Dupatta and heavy micro-jewelry setting guide", "Professional portfolio shoot of your final exam"],
    trainerId: "st-ayesha"
  },
  {
    id: "c-party",
    name: "Party Makeup Course",
    duration: "2 Weeks",
    fee: 12000,
    schedule: "Friday & Saturday: 3:00 PM - 5:00 PM",
    description: "Learn high-fashion smokey eyes, metallic glitters, and transfer-proof glowing bases for late-night party events.",
    features: ["Advanced metal eye application techniques", "Contour and highlight sculpting", "Long-stay product mixing advice", "Certificate of completion"],
    trainerId: "st-zainab"
  },
  {
    id: "c-hair",
    name: "Hair Styling and Coloring Master",
    duration: "2 Months",
    fee: 30000,
    schedule: "Tuesday & Friday: 10:00 AM - 12:00 PM",
    description: "Covers advanced hair cuts, balayage gradients, highlights, keratin smoothing treatments, and intricate braids.",
    features: ["Real mannequins and high-tech iron kits", "Color formulation physics", "Anti-damage conditioning therapies", "Toni&Guy styling guidelines"],
    trainerId: "st-sana"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r-1",
    customerName: "Fatima Khan",
    rating: 5,
    comment: "I booked my HD Bridal Makeup here for my wedding day and I was stunned! Literally everyone was asking where I got it done. Ayesha was so gentle, and my makeup didn't smudge or fade even after hours of dancing. High-class luxury experience!",
    serviceName: "HD Bridal Makeup",
    date: "2026-05-15",
    isApproved: true
  },
  {
    id: "r-2",
    customerName: "Areeba Malik",
    rating: 5,
    comment: "Sana Malik did my highlights and cut and she is amazing. I got a clean balayage look that completely rejuvenated my dry hair. The blowdry was gorgeous too. Will definitely come back!",
    serviceName: "Premium Highlights & Cut",
    date: "2026-05-20",
    isApproved: true
  },
  {
    id: "r-3",
    customerName: "Sana Tariq",
    rating: 5,
    comment: "Excellent customer service. The staff offered fresh juice upon arrival, kept checks on my comfort, and completed my party makeup on time. Professional, respectful, and highly efficient.",
    serviceName: "Classic Party Makeup",
    date: "2026-05-28",
    isApproved: true
  },
  {
    id: "r-4",
    customerName: "Hina Ahmed",
    rating: 5,
    comment: "The staff here is incredibly talented and certified. The HydraFacial by Hira Ahmed resolved my acne bumps and left my skin baby soft. Very detailed guidance about my post-treatment moisturizers.",
    serviceName: "HydraFacial Deep Hydration",
    date: "2026-06-01",
    isApproved: true
  },
  {
    id: "r-5",
    customerName: "Maham Ali",
    rating: 5,
    comment: "This beauty parlour is so hygienic! Clean sanitized brushes, disposable sheets, fresh towels, and a beautiful gold-glamour interior that smells like lavender. Feels very premium and relaxing.",
    serviceName: "24K Gold Luxury Facial",
    date: "2026-06-03",
    isApproved: true
  },
  {
    id: "r-6",
    customerName: "Iqra Shah",
    rating: 5,
    comment: "I enrolled in the Professional Beautician Course under Trainer Zainab. The level of detail in instruction is top-tier. Highly recommended for any aspiring makeup artist in Pakistan looking to learn real skills.",
    serviceName: "Professional Beautician Course",
    date: "2026-06-05",
    isApproved: true
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: "b-tips-1",
    title: "Alta Mehndi Design: Exploring the Vibrant Traditional Art with Modern Touch",
    category: "Mehndi Trends",
    summary: "Exploring the elegant combination of traditional Alta red dye detailing paired with delicate dark line tracing for a sophisticated modern aesthetic.",
    content: `Alta Mehndi Design represents a breathtaking fusion of traditional South Asian styling and modern high-fashion aesthetics. 

Traditionally worn across Pakistan and parts of the Subcontinent, Alta is a bright, deep red liquid dye applied to fingers, palms, and feet borders. This year, the trend has merged with intricate henna art to create highly vibrant custom highlights:

1. **Red Floral Accents**: Rather than using pure dark henna, vibrant floral petals are painted with natural, skin-safe red dye.
2. **Fine Henna Linework**: Intricate dark brown henna is used only to outline the fingers and trace leaves around the vibrant red designs, giving incredible high contrast.
3. **Perfect Nail Coordination**: Paired with glossy blood-red nails, this look is exceptionally striking and is our premier option for Mehendi and festive occasions.`,
    image: altaMehndiArtImg,
    author: "Mahnoor Ali (Mehndi Expert)",
    date: "2026-06-07",
    likes: 84,
    comments: [
      { id: "bc-1", user: "Sobia Shah", comment: "This is beautiful! Love the contrast of vibrant red with fine line mehndi.", date: "2026-06-07" }
    ]
  },
  {
    id: "b-tips-2",
    title: "Unique Diwali Mehndi Designs for Every Bride 2024 : Traditional Meets Modern",
    category: "Mehndi Trends",
    summary: "From dense wrist bands and delicate paisley grids to bold concentric mandalas, discover our premier collection of custom bridal mehndi.",
    content: `Our Diwali and Bridal collection centers on heavy, dense traditional design work that blends heritage values with a high-contrast modern outlook.

This spectacular hand-drawn style features:

1. **Mandala and Ring Layouts**: Centered symmetrical mandalas with beautiful negative space borders to keep the palm balanced.
2. **Lace and Mesh Work**: Microscopic net designs on fingers that make the design look like delicate sheer lace gloves.
3. **Luxe Cuffs**: Thick, solid bands near the wrist that act as active bracelets, removing the need for heavy bridal metal jewelry.`,
    image: diwaliMehndiArtImg,
    author: "Mahnoor Ali (Mehndi Specialist)",
    date: "2026-06-05",
    likes: 112,
    comments: []
  },
  {
    id: "b-tips-3",
    title: "Teej Mehndi Design 2024: Best Designs, Top Trends",
    category: "Mehndi Trends",
    summary: "Discover the latest peacock illustration trends, live cone drawing techniques, and high-precision floral motifs for Teej and traditional events.",
    content: `The classic peacock motif remains the absolute royal standard for Teej and festival celebrations across South Asia. 

Here is how our Mehndi Expert Mahnoor Ali creates these stunning master classes:

1. **The Majestic Peacock Crest**: Located on the back-of-hand or center-palm, the peacock is drawn with sweeping micro-lines for feathers.
2. **Live Cone Precision**: Using organic, certified fresh essential tea-tree oil henna, the artist regulates pressure dynamically for varied stroke weights.
3. **Foliage Shading**: Shaded leaves and light gradients inside the feathers create a 3D-depth effect that dyes beautifully into a deep mahogany crimson.`,
    image: teejMehndiArtImg,
    author: "Mahnoor Ali (Mehndi Expert)",
    date: "2026-06-01",
    likes: 95,
    comments: []
  },
  {
    id: "b-tips-4",
    title: "Top Bridal Mehndi Trends for 2024: A Unique Touch of Elegance",
    category: "Mehndi Trends",
    summary: "Discover the most anticipated royal bridal patterns featuring a spectacular combination of peacock majesty, mandala symmetries, and elegant arm contours.",
    content: `The 2024 Bridal Mehndi trends bring back a sense of old-world royalty with sleek, modern execution values. 

Here are the features that define our premier 2024 layout styles:

1. **The Peacock Silhouette**: Placed centrally on the palm or back of the hand, the peacock acts as the artistic anchor with sweeping microfeathers.
2. **Mandala Symmetrical Rings**: Concentric circles around the hand with clear negative space highlights to let the red skin pattern show through.
3. **Precision Geometry**: Incorporating tiny checkerboard patterns and cross-hatching designs to make the fingertips look incredibly elegant and delicate.`,
    image: trendMehndiArtImg,
    author: "Mahnoor Ali (Mehndi Expert)",
    date: "2026-06-03",
    likes: 120,
    comments: []
  },
  {
    id: "b-tips-5",
    title: "The Profound Cultural Significance of Mehndi Across Different Regions 2024",
    category: "Mehndi Trends",
    summary: "Exploring how traditional hands are decorated over gorgeous multi-colored South Asian fabrics, conveying auspicious wishes and historical heritage.",
    content: `Mehndi is far more than a simple cosmetic embellishment; it is a sacred celebratory ritual symbolizing joy, spiritual protection, and auspicious fortune across different regions.

In our exclusive 2024 regional spotlight:

1. **Embroidered Fabrics and Color Harmony**: We coordinate the depth of the dark brown henna stain with the colorful threadwork and gold ornaments of your traditional wear.
2. **Auspicious Symbolisms**: Incorporating hidden initials of the spouse and protective motifs such as vines, leaves, and twin birds.
3. **Regional Heritage**: Modern brides love pairing heavy heirloom motifs with customized contemporary wrist contour designs that celebrate both traditional and modern roots.`,
    image: culturalSignificanceImg,
    author: "Mahnoor Ali (Mehndi Specialist)",
    date: "2026-05-29",
    likes: 135,
    comments: []
  },
  {
    id: "b-tips-6",
    title: "Seasonal Mehndi Design Trends in 2024: Top Designs for Best Appearance",
    category: "Mehndi Trends",
    summary: "Adorn the hands with delicate raised peach/white floral highlights paired with small jasmine patterns for a refreshing, romantic appearance.",
    content: `The latest seasonal aesthetics in 2024 introduced soft, dreamy floral designs that break away from purely heavy patterns.

Our top recommendation for a romantic, light weekend look features:

1. **Elevated White and Pink Accents**: Highlighting the edges of drawn blossoms with safe, water-soluble pigments that feel incredibly fresh.
2. **Pastel Harmony**: Composing the floral structures to match beautifully with cozy wool knits, pastel clothing, and small, real jasmine blossoms.
3. **Dreamy Vines**: Cascading leafy trails that wrap around the fingers, delivering unmatched grace and a modern minimalist appeal.`,
    image: seasonalTrendsImg,
    author: "Mahnoor Ali (Mehndi Expert)",
    date: "2026-05-25",
    likes: 110,
    comments: []
  }
];

export const GALLERY: GalleryItem[] = [
  // Bridal Gallery
  { id: "g-1", category: "Bridal Gallery", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop", title: "Royal Traditional Barat Bride" },
  { id: "g-2", category: "Bridal Gallery", image: "https://images.unsplash.com/photo-1632765854612-9b21fa68a155?q=80&w=800&auto=format&fit=crop", title: "Flawless Walima Glamour Glow" },
  { id: "g-3", category: "Bridal Gallery", image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=800&auto=format&fit=crop", title: "Porcelain Soft Nikah Makeover" },
  { id: "g-18", category: "Bridal Gallery", image: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?q=80&w=800&auto=format&fit=crop", title: "Elegant Pearl White Hijab Bride" },
  { id: "g-19", category: "Bridal Gallery", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop", title: "Royal Red Velvet Dupatta Makeup" },
  { id: "g-lehenga", category: "Bridal Gallery", image: scarletLehengaImg, title: "Traditional Hand-Embroidered Scarlet Bridal Lehenga" },
  { id: "g-gown", category: "Bridal Gallery", image: royalGownImg, title: "Luxury Royal Maroon Gown and Velvet Drapery" },

  // Party Makeup Gallery
  { id: "g-4", category: "Party Makeup Gallery", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop", title: "Glossy Editorial Evening" },
  { id: "g-5", category: "Party Makeup Gallery", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop", title: "Classic Shimmer Festival Makeup" },
  { id: "g-6", category: "Party Makeup Gallery", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", title: "Sophisticated Event Look" },
  { id: "g-20", category: "Party Makeup Gallery", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop", title: "Sultry Rose Gold Shimmer" },
  { id: "g-21", category: "Party Makeup Gallery", image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=800&auto=format&fit=crop", title: "Smokey Eye Bold Contour Glam" },
  { id: "g-30", category: "Party Makeup Gallery", image: "https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?q=80&w=800&auto=format&fit=crop", title: "Liquid Gold Sunset Shadow" },

  // Hair Styling Gallery
  { id: "g-7", category: "Hair Styling Gallery", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop", title: "Intricate Royal Bridal Braids" },
  { id: "g-8", category: "Hair Styling Gallery", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop", title: "Cascading Crown Loops" },
  { id: "g-26", category: "Hair Styling Gallery", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=800&auto=format&fit=crop", title: "Luxury Soft Curls with Pearl Accents" },
  { id: "g-7-shag", category: "Hair Styling Gallery", image: jennaShagImg, title: "Trendy Textured Shag Cut with Curtain Bangs" },
  { id: "g-8-blowout", category: "Hair Styling Gallery", image: blondeBlowoutImg, title: "Voluminous Bouncy Layered Blowout" },
  { id: "g-26-retro", category: "Hair Styling Gallery", image: retroWavesImg, title: "Elegant Side-Swept Retro Hollywood Glam Waves" },
  { id: "g-26-gents", category: "Hair Styling Gallery", image: gentsStylingImg, title: "Classic Gent's Textured Side-Sweep Scissor Cut" },

  // Hair Color Gallery
  { id: "g-9", category: "Hair Color Gallery", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop", title: "Premium Honey Balayage Highlight" },
  { id: "g-10", category: "Hair Color Gallery", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop", title: "Dimensional Pastel Auburn Blend" },
  { id: "g-27", category: "Hair Color Gallery", image: "https://images.unsplash.com/photo-1605497746444-0513f56ce2af?q=80&w=800&auto=format&fit=crop", title: "Auburn Mahogany Gloss Tint" },

  // Mehndi Gallery
  { id: "g-11", category: "Mehndi Gallery", image: altaMehndiArtImg, title: "Alta Mehndi Design: Exploring the Vibrant Traditional Art with Modern Touch" },
  { id: "g-12", category: "Mehndi Gallery", image: diwaliMehndiArtImg, title: "Unique Diwali Mehndi Designs for Every Bride 2024 : Traditional Meets Modern" },
  { id: "g-22", category: "Mehndi Gallery", image: teejMehndiArtImg, title: "Teej Mehndi Design 2024: Best Designs, Top Trends" },
  { id: "g-11-2", category: "Mehndi Gallery", image: trendMehndiArtImg, title: "Top Bridal Mehndi Trends for 2024: A Unique Touch of Elegance" },
  { id: "g-12-2", category: "Mehndi Gallery", image: culturalSignificanceImg, title: "The Profound Cultural Significance of Mehndi Across Different Regions 2024" },
  { id: "g-22-2", category: "Mehndi Gallery", image: seasonalTrendsImg, title: "Seasonal Mehndi Design Trends in 2024: Top Designs for Best Appearance" },
  { id: "g-23", category: "Mehndi Gallery", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop", title: "Ceremonial Live Hand-Drawn Henna" },
  { id: "g-29", category: "Mehndi Gallery", image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop", title: "Graceful Mandala Drawing Artist Session" },
  { id: "g-31", category: "Mehndi Gallery", image: "https://images.unsplash.com/photo-1610992015762-4113ec4737aa?q=80&w=800&auto=format&fit=crop", title: "Delicate Festive Finger-Tip Accents" },
  { id: "g-32", category: "Mehndi Gallery", image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=800&auto=format&fit=crop", title: "Exquisite Royal Bridal Palms" },
  { id: "g-33", category: "Mehndi Gallery", image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800&auto=format&fit=crop", title: "Aesthetic South-Asian Rose Vine Art" },
  { id: "g-34", category: "Mehndi Gallery", image: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?q=80&w=800&auto=format&fit=crop", title: "Arabic Palm Mandala Ornament" },
  { id: "g-35", category: "Mehndi Gallery", image: "https://images.unsplash.com/photo-1541013719417-d340d23c2ab9?q=80&w=800&auto=format&fit=crop", title: "Heavy Traditional Royal Arm Henna" },

  // Skin Care Gallery
  { id: "g-13", category: "Skin Care Gallery", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop", title: "Luxurious Gold Therapy Peel" },
  { id: "g-14", category: "Skin Care Gallery", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop", title: "Clinical HydraFacial Hydration" },
  { id: "g-24", category: "Skin Care Gallery", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop", title: "Organic Cool Cucumber Facial Prep" },
  { id: "g-25", category: "Skin Care Gallery", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop", title: "Herbal Botanicals Refining Mask" },

  // Before & After Gallery
  {
    id: "g-15",
    category: "Before & After Gallery",
    image: "https://images.unsplash.com/photo-1632765854612-9b21fa68a155?q=80&w=800&auto=format&fit=crop",
    title: "Royal Barat Bridal Finish",
    beforeImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "g-16",
    category: "Before & After Gallery",
    image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=800&auto=format&fit=crop",
    title: "Soft Velvet Nikah Glamour",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "g-17",
    category: "Before & After Gallery",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop",
    title: "Crimson Royal Reception Glam",
    beforeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "g-28",
    category: "Before & After Gallery",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?q=80&w=800&auto=format&fit=crop",
    title: "Pearl Hijab Wedding Glow",
    beforeImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "g-36",
    category: "Before & After Gallery",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop",
    title: "Golden Royal Walima Finish",
    beforeImage: "https://images.unsplash.com/photo-1595959183077-514cfa887010?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "g-37",
    category: "Before & After Gallery",
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=800&auto=format&fit=crop",
    title: "Sultry Smokey Party Contrast",
    beforeImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "g-38",
    category: "Before & After Gallery",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    title: "HD Rose Gold Shimmer Glow",
    beforeImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "g-39",
    category: "Before & After Gallery",
    image: "https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?q=80&w=800&auto=format&fit=crop",
    title: "Sunset Editorial Horizon Eyes",
    beforeImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "g-40",
    category: "Before & After Gallery",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
    title: "Signature Airbrush Base Mastery",
    beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "g-41",
    category: "Before & After Gallery",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    title: "Elite Pastel Engagement Grace",
    beforeImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
  }
];

export const SPECIAL_OFFERS = [
  {
    id: "o-bridal",
    title: "Golden Royal Bridal Deal",
    discount: "20% OFF",
    description: "Book HD Bridal Makeup + Mehndi + Pre-wedding Facial together and receive a flat 20% discount plus priority VIP room booking.",
    code: "ROYALBRIDE20",
    validTill: "June 30, 2026"
  },
  {
    id: "o-student",
    title: "Academy Student Enrollment Discount",
    discount: "15% OFF",
    description: "Submit online course registration this month and receive 15% off tuition fees, including a professional cosmetics masterkit.",
    code: "ACADEMY15",
    validTill: "June 25, 2026"
  },
  {
    id: "o-eid",
    title: "Eid Festive Multi-Combo Discount",
    discount: "PKR 3,000 Flat Off",
    description: "Book Party Makeup + Signature Hair Cut + Express Facials for the same day and claim flat discount rewards.",
    code: "EIDCOMBO",
    validTill: "On Eid Days"
  }
];

export const LOYALTY_TIERS = [
  {
    name: LoyaltyTier.BRONZE,
    pointsRequired: 0,
    benefits: ["5% general discount on all services", "Access to standard promotional deals", "Basic appointment rescheduling options"],
    color: "from-amber-600 to-amber-800"
  },
  {
    name: LoyaltyTier.SILVER,
    pointsRequired: 1000,
    benefits: ["10% general discount on all services", "Priority online rescheduling", "1 free skin consultation annually", "Earn points 1.2x faster"],
    color: "from-slate-300 to-slate-500"
  },
  {
    name: LoyaltyTier.GOLD,
    pointsRequired: 2500,
    benefits: ["15% general discount on all services", "Complementary hair blowdry on your birthday", "Priority booking overrides", "Complimentary hot beverages", "Earn points 1.5x faster"],
    color: "from-yellow-500 to-amber-500"
  },
  {
    name: LoyaltyTier.PLATINUM,
    pointsRequired: 5000,
    benefits: ["20% general discount on all services", "Free VIP Private Styling room access", "Immediate WhatsApp direct bookings support", "Unconditional free cancellations", "Exclusive early model invitations"],
    color: "from-purple-500 to-slate-900"
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: "B-8801",
    customerName: "Ayesha Bibi",
    customerEmail: "ayesha@gmail.com",
    customerPhone: "03220591711",
    branch: Branch.WAH_CANTT,
    serviceId: "s-bridal",
    staffId: "s-1",
    date: "2026-06-15",
    timeSlot: "11:00 AM",
    amountPaid: 85000,
    paymentMethod: PaymentMethod.EAST_PAISA,
    transactionRef: "EP-99824BD",
    loyaltyPointsEarned: 850,
    status: BookingStatus.PENDING,
    createdAt: "2026-06-02T10:00:00Z"
  },
  {
    id: "B-5012",
    customerName: "Zoya Fatima",
    customerEmail: "zoya@gmail.com",
    customerPhone: "03220591712",
    branch: Branch.ISLAMABAD_E11,
    serviceId: "s-highlights",
    staffId: "s-2",
    date: "2026-06-10",
    timeSlot: "02:30 PM",
    amountPaid: 35000,
    paymentMethod: PaymentMethod.JAZZ_CASH,
    transactionRef: "JC-120054F",
    loyaltyPointsEarned: 350,
    status: BookingStatus.CONFIRMED,
    createdAt: "2026-06-01T15:30:00Z"
  },
  {
    id: "B-2104",
    customerName: "Sara Nawaz",
    customerEmail: "sara@gmail.com",
    customerPhone: "03220591713",
    branch: Branch.WAH_CANTT,
    serviceId: "s-care",
    staffId: "s-3",
    date: "2026-05-28",
    timeSlot: "04:00 PM",
    amountPaid: 15000,
    paymentMethod: PaymentMethod.PAYPAL,
    transactionRef: "PP-3329A88",
    loyaltyPointsEarned: 150,
    status: BookingStatus.COMPLETED,
    createdAt: "2026-05-20T12:15:00Z"
  }
];

export const INITIAL_REGISTRATIONS: StudentRegistration[] = [
  {
    id: "REG-901",
    studentName: "Fatima Farooq",
    studentEmail: "fatima.f@gmail.com",
    studentPhone: "03220591715",
    courseId: "c-1",
    registrationDate: "2026-06-02",
    status: "Pending"
  },
  {
    id: "REG-742",
    studentName: "Areeba Shah",
    studentEmail: "areeba.s@gmail.com",
    studentPhone: "03220591716",
    courseId: "c-2",
    registrationDate: "2026-05-30",
    status: "Enrolled"
  }
];
