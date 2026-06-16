import {
  Armchair,
  BadgeCheck,
  Building2,
  CalendarCheck,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Facebook,
  Frame,
  Gem,
  Hammer,
  Home,
  Instagram,
  KeyRound,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  PackageOpen,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const contact = {
  phoneLabel: "+1 (555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "hello@luxoracleaning.com",
  serviceArea: "Serving New York, NY and surrounding areas",
  whatsapp: "https://wa.me/15551234567?text=Hello%20Luxora%20Cleaning%20Services%2C%20I%27d%20like%20a%20free%20cleaning%20quote.",
};

export const heroBadges = [
  {
    title: "Insured Team",
    text: "Professionally trained, fully insured for peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "5-Star Rated",
    text: "Trusted by homeowners and businesses for exceptional results.",
    icon: Star,
  },
  {
    title: "Same-Day Booking",
    text: "Flexible scheduling that works around your day.",
    icon: Clock3,
  },
  {
    title: "Eco-Friendly Products",
    text: "Safe for your family, pets, and the planet.",
    icon: Leaf,
  },
];

export const images = {
  hero:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
  serviceHome:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  serviceKitchen:
    "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=900&q=80",
  serviceOffice:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  serviceBedroom:
    "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=900&q=80",
  serviceMove:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  serviceConstruction:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
  serviceCarpet:
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
  serviceWindow:
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=900&q=80",
  why:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  galleryKitchen:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80",
  galleryBath:
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80",
  gallerySofa:
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
  galleryOffice:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
  galleryWindow:
    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1000&q=80",
};

export const services = [
  {
    title: "Residential Cleaning",
    description: "Regular and recurring care that keeps your home polished, calm, and guest-ready.",
    icon: Home,
    image: images.serviceHome,
  },
  {
    title: "Deep Cleaning",
    description: "Detailed top-to-bottom service for kitchens, baths, corners, fixtures, and hidden areas.",
    icon: Sparkles,
    image: images.serviceKitchen,
  },
  {
    title: "Office Cleaning",
    description: "Immaculate workspaces that support productivity, wellness, and a professional image.",
    icon: Building2,
    image: images.serviceOffice,
  },
  {
    title: "Airbnb / Short-Term Rental Cleaning",
    description: "Fast, reliable turnovers with hotel-level presentation for five-star guest experiences.",
    icon: KeyRound,
    image: images.serviceBedroom,
  },
  {
    title: "Move-In / Move-Out Cleaning",
    description: "A precise reset for new keys, final walkthroughs, leases, and sale-ready spaces.",
    icon: PackageOpen,
    image: images.serviceMove,
  },
  {
    title: "Post-Construction Cleaning",
    description: "Dust, residue, and debris removal for a flawless finish after renovation work.",
    icon: Hammer,
    image: images.serviceConstruction,
  },
  {
    title: "Carpet & Upholstery Cleaning",
    description: "Soft-surface refreshes that lift everyday wear and restore comfort.",
    icon: Armchair,
    image: images.serviceCarpet,
  },
  {
    title: "Window Cleaning",
    description: "Streak-free glass and frame detailing for brighter views and a polished impression.",
    icon: Frame,
    image: images.serviceWindow,
  },
];

export const whyChooseUs = [
  { title: "Trained professional cleaners", text: "Skilled, experienced, and committed to excellence in every clean.", icon: Users },
  { title: "Luxury-grade cleaning standards", text: "Premium tools, meticulous checklists, and detail-first quality control.", icon: Gem },
  { title: "Eco-friendly products", text: "Safer formulas selected for families, pets, staff, and guests.", icon: Leaf },
  { title: "Flexible scheduling", text: "One-time, recurring, same-day, and custom plans around your calendar.", icon: CalendarClock },
  { title: "Background-checked team", text: "Trustworthy professionals you can welcome into private spaces.", icon: ShieldCheck },
  { title: "Satisfaction guarantee", text: "We refine the details until your space meets the Luxora standard.", icon: BadgeCheck },
  { title: "Fast response and easy booking", text: "Quick replies, simple forms, and clear next steps from the first message.", icon: Zap },
];

export const gallery = [
  { title: "Kitchen reset", image: images.galleryKitchen, className: "lg:col-span-2" },
  { title: "Bathroom glass", image: images.galleryBath, className: "lg:col-span-2" },
  { title: "Upholstery care", image: images.gallerySofa, className: "lg:col-span-2" },
  { title: "Office refresh", image: images.galleryOffice, className: "lg:col-span-2" },
  { title: "Window clarity", image: images.galleryWindow, className: "lg:row-span-2" },
];

export const processSteps = [
  { title: "Request a Quote", text: "Tell us about your space and cleaning needs.", icon: ClipboardCheck },
  { title: "Choose Your Service", text: "Select the service that fits your home or business.", icon: CheckCircle2 },
  { title: "Confirm Schedule", text: "Pick a convenient time that works for you.", icon: CalendarCheck },
  { title: "Enjoy a Spotless Space", text: "We clean with care so you can relax and enjoy.", icon: Sparkles },
];

export const pricingPlans = [
  {
    name: "Essential Clean",
    intro: "Perfect for regular upkeep and everyday cleanliness.",
    marker: "Starting from",
    cta: "Request Quote",
    icon: Home,
    features: ["Kitchen and bathroom refresh", "Dusting and surface polish", "Floors vacuumed and mopped", "Flexible one-time booking"],
  },
  {
    name: "Deep Luxury Clean",
    intro: "A thorough top-to-bottom clean for a truly refreshed space.",
    marker: "Custom quote",
    cta: "Schedule a Visit",
    icon: Gem,
    featured: true,
    features: ["Detailed room-by-room checklist", "Inside cabinets and fixtures", "High-touch sanitizing", "Ideal for seasonal resets"],
  },
  {
    name: "Premium Maintenance Plan",
    intro: "Ongoing care to keep your property consistently immaculate.",
    marker: "Custom quote",
    cta: "Request Quote",
    icon: Sparkles,
    features: ["Weekly or biweekly visits", "Priority scheduling", "Dedicated quality notes", "Preferred team matching"],
  },
];

export const testimonials = [
  {
    quote:
      "Luxora transformed our home. Every corner is spotless and feels brand new. The team is professional, punctual, and incredibly detail-oriented.",
    name: "Ariana Malik",
    role: "Homeowner",
  },
  {
    quote:
      "We use Luxora for office cleaning and could not be happier. Reliable, thorough, and they maintain a spotless workspace every time.",
    name: "Daniel Brooks",
    role: "Office Manager",
  },
  {
    quote:
      "As an Airbnb host, cleanliness is everything. Luxora is consistent, fast, and leaves five-star results that guests always compliment.",
    name: "Maya Chen",
    role: "Airbnb Host",
  },
];

export const faqs = [
  {
    question: "Do you bring cleaning supplies?",
    answer:
      "Yes. Our team arrives with professional cleaning supplies and equipment. If you prefer specific products, note that in your quote request.",
  },
  {
    question: "Are your cleaners insured?",
    answer:
      "Yes. Luxora works with trained, insured cleaners and follows strict quality and safety standards for every appointment.",
  },
  {
    question: "Can I book same-day cleaning?",
    answer:
      "Same-day bookings are available when the schedule allows. Send a request or call us for the fastest availability check.",
  },
  {
    question: "Do you clean Airbnb properties?",
    answer:
      "Yes. We provide short-term rental turnovers, linen staging, guest-ready resets, and recurring hosting support.",
  },
  {
    question: "Do you offer recurring cleaning?",
    answer:
      "Yes. Weekly, biweekly, monthly, and custom maintenance plans are available for homes, offices, and rental properties.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Use the quote form, WhatsApp us, or call directly. We will confirm your property type, service needs, preferred date, and any special requests.",
  },
];

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { label: "WhatsApp", href: contact.whatsapp, icon: MessageCircle },
  { label: "Email", href: `mailto:${contact.email}`, icon: Mail },
];

export const footerServices = [
  "Deep Cleaning",
  "Regular Cleaning",
  "Airbnb Cleaning",
  "Move-In / Move-Out Cleaning",
  "Office Cleaning",
  "Commercial Cleaning",
];

export const contactCards = [
  { label: "WhatsApp Us", detail: contact.phoneLabel, href: contact.whatsapp, icon: MessageCircle },
  { label: "Call Now", detail: contact.phoneLabel, href: contact.phoneHref, icon: Phone },
  { label: "Schedule a Visit", detail: "We will come to you", href: "#contact", icon: CalendarCheck },
];

export const contactDetails = [
  { label: contact.phoneLabel, href: contact.phoneHref, icon: Phone },
  { label: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: contact.serviceArea, href: "#contact", icon: MapPin },
  { label: "Mon - Sat: 8:00 AM - 7:00 PM", href: "#contact", icon: Clock3 },
];
