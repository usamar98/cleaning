"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { contact, contactCards, services } from "@/data/site";

const propertyTypes = ["Home", "Apartment", "Villa", "Office", "Airbnb / Short-Term Rental", "Commercial Space"];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-white pb-20 lg:pb-28">
      <div className="section-shell">
        <div className="grid overflow-hidden rounded-[8px] bg-charcoal text-white shadow-luxury lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative border-white/15 p-8 lg:border-r lg:p-12">
            <h2 className="font-display text-4xl leading-[1.04] text-white sm:text-5xl">
              Request Your Free Cleaning Quote
            </h2>
            <span className="gold-line mt-7" aria-hidden="true" />
            <p className="mt-8 max-w-md text-base leading-8 text-white/74">
              Tell us about your space and cleaning needs. We will get back to you quickly with a tailored quote.
            </p>

            <div className="mt-10 grid gap-3">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.label}
                    href={card.href}
                    className="focus-ring group flex items-center justify-between rounded-[6px] border border-gold/60 px-5 py-4 transition hover:bg-white hover:text-ink"
                  >
                    <span className="flex items-center gap-4">
                      <Icon className="h-5 w-5 text-gold" />
                      <span>
                        <span className="block text-sm font-semibold">{card.label}</span>
                        <span className="block text-sm text-white/64 transition group-hover:text-graphite">{card.detail}</span>
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
                  </a>
                );
              })}
            </div>

            <div className="mt-10 grid gap-4 text-sm text-white/72">
              <a href={contact.phoneHref} className="focus-ring inline-flex items-center gap-3 hover:text-white">
                <Phone className="h-4 w-4 text-gold" />
                {contact.phoneLabel}
              </a>
              <a href={`mailto:${contact.email}`} className="focus-ring inline-flex items-center gap-3 hover:text-white">
                <Mail className="h-4 w-4 text-gold" />
                {contact.email}
              </a>
              <p>{contact.serviceArea}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 text-ink sm:p-8 lg:p-12">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium">
                Full name
                <input className="focus-ring min-h-12 rounded-[6px] border border-mist px-4 text-sm text-ink" name="name" placeholder="Enter your full name" required />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Phone number
                <input className="focus-ring min-h-12 rounded-[6px] border border-mist px-4 text-sm text-ink" name="phone" placeholder="(555) 123-4567" required />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Email
                <input className="focus-ring min-h-12 rounded-[6px] border border-mist px-4 text-sm text-ink" type="email" name="email" placeholder="you@example.com" required />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Property type
                <select className="focus-ring min-h-12 rounded-[6px] border border-mist bg-white px-4 text-sm text-ink" name="propertyType" defaultValue="" required>
                  <option value="" disabled>
                    Select property type
                  </option>
                  {propertyTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Service needed
                <select className="focus-ring min-h-12 rounded-[6px] border border-mist bg-white px-4 text-sm text-ink" name="service" defaultValue="" required>
                  <option value="" disabled>
                    Select service
                  </option>
                  {services.map((service) => (
                    <option key={service.title}>{service.title}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Preferred date
                <input className="focus-ring min-h-12 rounded-[6px] border border-mist px-4 text-sm text-ink" type="date" name="date" required />
              </label>
              <label className="grid gap-2 text-sm font-medium sm:col-span-2">
                Message
                <textarea className="focus-ring min-h-32 rounded-[6px] border border-mist px-4 py-3 text-sm text-ink" name="message" placeholder="Tell us more about your space or special requests..." />
              </label>
            </div>
            <button
              type="submit"
              className="focus-ring group mt-6 inline-flex min-h-[3.25rem] w-full items-center justify-center gap-3 rounded-[6px] bg-gold px-6 text-sm font-semibold text-white transition hover:bg-gold-dark"
            >
              Submit Request
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            {submitted ? (
              <p className="mt-4 rounded-[6px] bg-champagne px-4 py-3 text-sm font-medium text-ink" role="status">
                Thank you. Your quote request is ready for Luxora to review.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
