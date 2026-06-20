import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  Check,
  Clock,
  Gem,
  Home,
  Hotel,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Star,
  Waves
} from "lucide-react";
import { AppointmentForm, ContactForm } from "@/components/Forms";
import { BrandLogo } from "@/components/BrandLogo";
import { Header } from "@/components/Header";
import { HorizontalScroller } from "@/components/HorizontalScroller";
import { WhatsAppButton, WhatsAppMark } from "@/components/WhatsAppButton";

const bookingHref = "#appointment";
const phoneDisplay = "07481 046053";
const phoneHref = "+447481046053";
const email = "blackburncleaningservices26@gmail.com";
const address = "BB2 3PB, 37 Lynthorpe Road, Blackburn";
const workingHours = "Monday - Saturday, 9:00 AM - 6:00 PM";
const whatsappHref =
  "https://wa.me/447481046053?text=Hello%20BlackBurn%20Cleaning%20Services%2C%20I%20would%20like%20to%20book%20a%20cleaning.";

const images = {
  hero: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1500&q=86",
  lounge: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=82",
  kitchen: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=82",
  office: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=82",
  bedroom: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=82",
  move: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=82",
  construction: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=82",
  carpet: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=82",
  windows: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=82"
};

const services = [
  {
    title: "Luxury Home Cleaning",
    icon: Home,
    image: images.lounge,
    text: "Discreet weekly, fortnightly, or one-off cleaning for refined Blackburn homes."
  },
  {
    title: "Deep Cleaning",
    icon: Sparkles,
    image: images.kitchen,
    text: "A detailed top-to-bottom reset for kitchens, bathrooms, fixtures, and finishes."
  },
  {
    title: "Office Cleaning",
    icon: Building2,
    image: images.office,
    text: "Quiet commercial cleaning that keeps workspaces polished and guest-ready."
  },
  {
    title: "Airbnb Cleaning",
    icon: Hotel,
    image: images.bedroom,
    text: "Fast turnover cleaning with linen presentation and guest-arrival checks."
  },
  {
    title: "Move-In / Move-Out Cleaning",
    icon: BadgeCheck,
    image: images.move,
    text: "End-of-tenancy and relocation cleaning for a confident handover."
  },
  {
    title: "Post-Construction Cleaning",
    icon: SprayCan,
    image: images.construction,
    text: "Fine dust removal, surface polishing, and final presentation after works."
  },
  {
    title: "Carpet & Upholstery Cleaning",
    icon: Waves,
    image: images.carpet,
    text: "Fabric care for carpets, sofas, chairs, and soft furnishings."
  },
  {
    title: "Window Cleaning",
    icon: Star,
    image: images.windows,
    text: "Interior and exterior glass care for brighter views and a sharper impression."
  }
];

const projects = [
  {
    title: "Luxury Apartment Deep Clean",
    image: images.lounge,
    text: "A full apartment reset with polished stone, glass, appliances, and detailed finishing."
  },
  {
    title: "Office Cleaning Transformation",
    image: images.office,
    text: "After-hours cleaning for meeting rooms, desks, breakout areas, and reception."
  },
  {
    title: "Airbnb Turnover Cleaning",
    image: images.bedroom,
    text: "Guest-ready cleaning, linen staging, amenities check, and rapid quality control."
  },
  {
    title: "Move-Out Cleaning Project",
    image: images.move,
    text: "End-of-tenancy presentation for a landlord inspection and smooth key return."
  },
  {
    title: "Post-Construction Cleaning",
    image: images.construction,
    text: "Dust extraction, paint mark detailing, fixture polishing, and floor care after renovation."
  },
  {
    title: "Villa Maintenance Cleaning",
    image: images.kitchen,
    text: "Routine care for a large residence with rotating deep-clean priorities."
  }
];

const reviews = [
  {
    role: "Homeowner",
    name: "Sofia W.",
    quote: "BlackBurn left our home calm, polished, and beautifully reset. The detailing felt genuinely premium."
  },
  {
    role: "Airbnb host",
    name: "Marcus T.",
    quote: "Their turnover service is precise, fast, and guest-focused. It has lifted our check-in experience."
  },
  {
    role: "Office manager",
    name: "Priya S.",
    quote: "The team works around our office hours and keeps every shared space looking client-ready."
  },
  {
    role: "Landlord",
    name: "George L.",
    quote: "Our move-out cleaning project passed inspection without a single query. Impressive standards."
  },
  {
    role: "Property manager",
    name: "Amelia R.",
    quote: "They understand premium properties, fragile finishes, and the importance of consistent presentation."
  },
  {
    role: "Restaurant owner",
    name: "Daniel H.",
    quote: "BlackBurn handled our front-of-house deep clean with discretion, speed, and excellent communication."
  }
];

const pricing = [
  {
    name: "Essential",
    price: "From GBP 79",
    text: "For apartments and regular home upkeep.",
    features: ["Kitchen and bathroom refresh", "Dusting and floor care", "High-touch surfaces", "Optional recurring schedule"]
  },
  {
    name: "Signature",
    price: "From GBP 149",
    text: "For deep cleaning and premium presentation.",
    features: ["Detailed room-by-room clean", "Appliance and fixture care", "Glass and skirting detail", "Priority booking support"],
    highlighted: true
  },
  {
    name: "Estate",
    price: "Custom quote",
    text: "For larger homes, offices, and managed properties.",
    features: ["Dedicated cleaning plan", "Specialist teams", "Quality inspection", "Flexible Blackburn scheduling"]
  }
];

const faqs = [
  ["What areas do you cover?", "We serve Blackburn and nearby areas. Share your postcode and we will confirm availability."],
  ["Are your cleaners insured?", "Yes. BlackBurn Cleaning Services works with vetted, trained, and insured cleaning specialists."],
  ["Do you bring cleaning products?", "Yes. We can bring premium cleaning products and equipment, or use preferred products supplied at the property."],
  ["Can I book recurring cleaning?", "Yes. Weekly, fortnightly, monthly, and custom schedules are available for homes, offices, and managed properties."],
  ["How quickly can I get a quote?", "Most quote requests receive a response within one working day, with faster replies for urgent turnovers."]
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <HorizontalScroller
          id="projects"
          title="Projects That Move With the Scroll"
          intro="Each project card glides across the pinned section as you scroll, echoing the before-to-after rhythm of a polished property transformation."
          items={projects}
        />
        <HorizontalScroller
          id="reviews"
          title="Reviews From Exacting Clients"
          intro="Homeowners, hosts, managers, and operators choose BlackBurn when presentation matters and the service has to feel effortless."
          items={reviews}
          type="review"
        />
        <WhyChooseUs />
        <Pricing />
        <Appointment />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton href={whatsappHref} phone={phoneDisplay} />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-champagne/10 bg-night bg-quiet-radial pt-28">
      <div className="section-shell grid min-h-[calc(100vh-5rem)] gap-12 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-16">
        <div className="min-w-0 max-w-3xl">
          <h1 className="display-title text-[clamp(3rem,6.6vw,6rem)] text-ivory">
            <span className="block">Luxury</span>
            <span className="block">Cleaning,</span>
            <span className="block">Quietly</span>
            <span className="block">Immaculate</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-smoke">
            Premium residential and commercial cleaning in Blackburn, designed for elegant homes, polished workspaces,
            short-let properties, and clients who notice every detail.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={bookingHref}
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-champagne px-6 py-4 text-sm font-semibold text-night shadow-gold transition hover:bg-ivory"
            >
              Book Cleaning <ArrowUpRight size={17} />
            </a>
            <a
              href={bookingHref}
              className="inline-flex items-center justify-center rounded-[8px] border border-champagne/35 px-6 py-4 text-sm font-semibold text-pearl transition hover:border-champagne hover:text-champagne"
            >
              Get Quote
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              ["Blackburn UK", MapPin],
              ["Insured Team", ShieldCheck],
              ["Premium Products", Gem]
            ].map(([label, Icon]) => (
              <div key={label} className="flex items-center gap-3 rounded-[8px] border border-champagne/15 bg-charcoal/70 px-4 py-3 text-sm text-pearl">
                <Icon size={18} className="text-champagne" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[520px]">
          <div className="absolute -right-10 top-4 hidden h-72 w-72 border border-champagne/20 lg:block" />
          <div className="premium-card absolute right-0 top-0 h-[440px] w-full max-w-[720px] overflow-hidden rounded-[8px]">
            <img src={images.hero} alt="Luxury interior prepared for premium cleaning" className="h-full w-full object-cover image-tone" />
            <div className="absolute inset-0 bg-gradient-to-t from-night/88 via-night/12 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-champagne">BlackBurn Standard</p>
                <h2 className="display-title mt-2 text-3xl text-ivory">Hotel-level finishing for private spaces</h2>
              </div>
              <a href={bookingHref} className="rounded-[8px] border border-champagne/35 px-4 py-3 text-center text-sm font-semibold text-champagne">
                Reserve
              </a>
            </div>
          </div>
          <div className="premium-card absolute bottom-0 left-0 w-[min(92%,420px)] rounded-[8px] p-5">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-[8px] bg-champagne text-night">
                <Sparkles size={22} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ivory">Concierge booking</p>
                <p className="mt-2 text-sm leading-6 text-smoke">
                  Tell us the property, priority rooms, and timing. We shape the service around the way the space is used.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-pad bg-coal">
      <div className="section-shell">
        <div className="mb-12 grid gap-5 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <h2 className="display-title text-4xl text-ivory sm:text-5xl lg:text-6xl">Luxury Cleaning Services</h2>
          <p className="max-w-2xl text-base leading-8 text-smoke lg:justify-self-end">
            A curated menu for homes, offices, managed properties, and short-let spaces that need a premium finish without a loud process.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="premium-card group overflow-hidden rounded-[8px]">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt="" className="h-full w-full object-cover image-tone transition duration-700 group-hover:scale-[1.05]" />
                </div>
                <div className="grid gap-4 p-5">
                  <Icon size={26} className="text-champagne" strokeWidth={1.5} />
                  <h3 className="display-title text-2xl text-ivory">{service.title}</h3>
                  <p className="text-sm leading-7 text-smoke">{service.text}</p>
                  <a href={bookingHref} className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-champagne">
                    Book Cleaning <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const points = [
    ["Vetted specialists", "Experienced cleaners selected for premium properties and careful communication.", ShieldCheck],
    ["Hotel-level standards", "A detailed finishing checklist brings a concierge feel to every visit.", Gem],
    ["Eco-conscious products", "Beautiful results with considered products for homes, guests, teams, and pets.", Sparkles],
    ["Flexible Blackburn scheduling", "One-off, urgent, and recurring cleaning plans built around access windows.", CalendarDays]
  ];

  return (
    <section className="section-pad bg-charcoal">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[8px] border border-champagne/20">
          <img src={images.kitchen} alt="Luxury kitchen after professional cleaning" className="h-[560px] w-full object-cover image-tone" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/84 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-sm uppercase tracking-[0.22em] text-champagne">Why Choose Us</p>
            <p className="display-title mt-3 max-w-xl text-4xl text-ivory">Quiet teams, exacting standards, polished spaces.</p>
          </div>
        </div>
        <div>
          <h2 className="display-title text-4xl text-ivory sm:text-5xl lg:text-6xl">Designed For Clients Who Notice Details</h2>
          <p className="mt-6 text-base leading-8 text-smoke">
            BlackBurn Cleaning Services combines premium presentation with practical scheduling, clear communication, and a calm, discreet service style.
          </p>
          <div className="mt-9 grid gap-4">
            {points.map(([title, text, Icon]) => (
              <div key={title} className="flex gap-4 border-t border-champagne/15 pt-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-[8px] bg-night text-champagne">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-semibold text-ivory">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-smoke">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-night">
      <div className="section-shell">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="display-title text-4xl text-ivory sm:text-5xl lg:text-6xl">Pricing With a Premium Finish</h2>
          <p className="mt-5 text-base leading-8 text-smoke">
            Choose a starting package and we will tailor the final quote to property size, access, finish level, and frequency.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {pricing.map((plan) => (
            <article
              key={plan.name}
              className={`premium-card rounded-[8px] p-7 ${plan.highlighted ? "border-champagne shadow-gold" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="display-title text-3xl text-ivory">{plan.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-smoke">{plan.text}</p>
                </div>
                {plan.highlighted ? (
                  <span className="rounded-[8px] bg-champagne px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-night">
                    Popular
                  </span>
                ) : null}
              </div>
              <p className="display-title mt-8 text-4xl text-champagne">{plan.price}</p>
              <ul className="mt-7 grid gap-3 text-sm text-pearl">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check size={18} className="mt-0.5 shrink-0 text-champagne" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={bookingHref}
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-[8px] px-5 py-4 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-champagne text-night hover:bg-ivory"
                    : "border border-champagne/30 text-champagne hover:border-champagne"
                }`}
              >
                Book Cleaning <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Appointment() {
  return (
    <section id="appointment" className="section-pad bg-coal">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.66fr_1fr]">
        <div>
          <h2 className="display-title text-4xl text-ivory sm:text-5xl lg:text-6xl">Book a Cleaning Appointment</h2>
          <p className="mt-6 text-base leading-8 text-smoke">
            Share the essentials and BlackBurn will respond with a refined cleaning plan, timing options, and a tailored quote.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-pearl">
            <InfoRow icon={Clock} title="Working hours" text={workingHours} />
            <InfoRow icon={MapPin} title="Address" text={address} />
            <InfoRow icon={Phone} title="Call" text={phoneDisplay} href={`tel:${phoneHref}`} />
          </div>
        </div>
        <div className="premium-card rounded-[8px] p-5 sm:p-7">
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad bg-charcoal">
      <div className="section-shell">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="display-title text-4xl text-ivory sm:text-5xl lg:text-6xl">Contact BlackBurn</h2>
          <p className="mt-5 text-base leading-8 text-smoke">
            Call, email, WhatsApp, or send a note. We serve Blackburn homes, hosts, offices, restaurants, and managed properties.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5">
          <div className="premium-card rounded-[8px] p-6 text-center">
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard icon={Phone} title="Phone" text={phoneDisplay} href={`tel:${phoneHref}`} />
              <ContactCard icon={Mail} title="Email" text={email} href={`mailto:${email}`} />
              <ContactCard icon={MapPin} title="Address" text={address} />
              <ContactCard icon={Clock} title="Working Hours" text={workingHours} />
            </div>
            <a
              href={whatsappHref}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-[8px] border border-champagne/35 px-6 py-4 text-sm font-semibold text-champagne transition hover:border-champagne hover:bg-champagne/10"
            >
              <WhatsAppMark className="size-[18px]" />
              Chat on WhatsApp
            </a>
            <div className="mx-auto mt-8 max-w-2xl text-left">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section-pad bg-night">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.58fr_1fr]">
        <div>
          <h2 className="display-title text-4xl text-ivory sm:text-5xl lg:text-6xl">Questions Before We Arrive</h2>
          <p className="mt-6 text-base leading-8 text-smoke">
            Clear answers for premium homes, commercial spaces, short-let hosts, and property teams.
          </p>
        </div>
        <div className="grid gap-3">
          {faqs.map(([question, answer]) => (
            <details key={question} className="skip-default-marker rounded-[8px] border border-champagne/15 bg-charcoal/80 p-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ivory">
                {question}
                <span className="text-champagne">+</span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-smoke">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-champagne/15 bg-night py-12">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo />
            <div>
              <p className="display-title text-2xl text-ivory">BlackBurn Cleaning Services</p>
              <p className="text-xs uppercase tracking-[0.22em] text-smoke">Blackburn luxury cleaning</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-smoke">
            Luxury home, office, Airbnb, deep, move-out, post-construction, carpet, upholstery, and window cleaning.
          </p>
        </div>
        <FooterLinks title="Services" links={["Luxury Home Cleaning", "Deep Cleaning", "Office Cleaning", "Airbnb Cleaning"]} />
        <FooterLinks title="Company" links={["Projects", "Reviews", "Pricing", "FAQ"]} />
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-champagne">Contact</h3>
          <div className="mt-5 grid gap-3 text-sm text-smoke">
            <a href={`tel:${phoneHref}`} className="hover:text-champagne">{phoneDisplay}</a>
            <a href={`mailto:${email}`} className="hover:text-champagne">{email}</a>
            <span>{address}</span>
            <span>{workingHours}</span>
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 flex flex-col gap-3 border-t border-champagne/10 pt-6 text-xs text-smoke sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 BlackBurn Cleaning Services. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#appointment" className="hover:text-champagne">Book Cleaning</a>
          <a href="#contact" className="hover:text-champagne">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function InfoRow({ icon: Icon, title, text, href }) {
  const content = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-[8px] border border-champagne/20 text-champagne">
        <Icon size={19} strokeWidth={1.6} />
      </span>
      <span>
        <span className="block text-sm font-semibold text-ivory">{title}</span>
        <span className="mt-1 block text-sm leading-6 text-smoke">{text}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex gap-3 rounded-[8px] transition hover:bg-champagne/5">
        {content}
      </a>
    );
  }

  return <div className="flex gap-3">{content}</div>;
}

function ContactCard({ icon: Icon, title, text, href }) {
  const content = (
    <div className="grid h-full justify-items-center gap-3 rounded-[8px] border border-champagne/15 bg-night/45 p-5">
      <span className="grid size-12 place-items-center rounded-[8px] border border-champagne/20 text-champagne">
        <Icon size={20} strokeWidth={1.6} />
      </span>
      <span>
        <span className="block text-sm font-semibold text-ivory">{title}</span>
        <span className="mt-2 block break-words text-sm leading-6 text-smoke">{text}</span>
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="transition hover:text-champagne">
        {content}
      </a>
    );
  }

  return content;
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-champagne">{title}</h3>
      <div className="mt-5 grid gap-3 text-sm text-smoke">
        {links.map((link) => (
          <a key={link} href={link === "Pricing" ? "#pricing" : link === "FAQ" ? "#faq" : link === "Projects" ? "#projects" : link === "Reviews" ? "#reviews" : "#services"} className="hover:text-champagne">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
