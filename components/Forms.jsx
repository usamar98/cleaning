"use client";

import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";

const propertyTypes = ["Apartment", "Townhouse", "Detached home", "Office", "Retail", "Restaurant", "Airbnb", "Other"];
const services = [
  "Luxury Home Cleaning",
  "Deep Cleaning",
  "Office Cleaning",
  "Airbnb Cleaning",
  "Move-In / Move-Out Cleaning",
  "Post-Construction Cleaning",
  "Carpet & Upholstery Cleaning",
  "Window Cleaning"
];
const frequencies = ["One-off", "Weekly", "Fortnightly", "Monthly", "Custom"];

export function AppointmentForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 lg:grid-cols-2">
      <Field label="Full name" name="name" required />
      <Field label="Phone" name="phone" type="tel" required />
      <Field label="Email" name="email" type="email" required />
      <SelectField label="Property type" name="propertyType" options={propertyTypes} />
      <SelectField label="Service needed" name="service" options={services} />
      <Field label="Preferred date" name="date" type="date" />
      <Field label="Preferred time" name="time" type="time" />
      <SelectField label="Frequency" name="frequency" options={frequencies} />
      <Field label="Property size" name="size" placeholder="Example: 2 bedroom flat, 1,200 sq ft" className="lg:col-span-2" />
      <label className="grid gap-2 text-sm font-medium text-pearl lg:col-span-2">
        Message
        <textarea
          name="message"
          rows={5}
          className="luxury-input resize-none"
          placeholder="Tell us about access, surfaces, pets, parking, or any priority rooms."
        />
      </label>
      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center lg:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-champagne px-6 py-4 text-sm font-semibold text-night shadow-gold transition hover:bg-ivory"
        >
          Request Appointment
          <Send size={17} />
        </button>
        {sent ? (
          <p className="inline-flex items-center gap-2 text-sm text-champagne" role="status">
            <CheckCircle2 size={17} />
            Request received. This demo form is ready for a real booking endpoint.
          </p>
        ) : null}
      </div>
    </form>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <Field label="Full name" name="contactName" required />
      <Field label="Email" name="contactEmail" type="email" required />
      <Field label="Phone" name="contactPhone" type="tel" />
      <label className="grid gap-2 text-sm font-medium text-pearl">
        Message
        <textarea
          name="contactMessage"
          rows={4}
          className="luxury-input resize-none"
          placeholder="How can Aurelia help?"
          required
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-champagne px-5 py-4 text-sm font-semibold text-night transition hover:bg-ivory"
      >
        Send Message
        <Send size={17} />
      </button>
      {sent ? <p className="text-sm text-champagne">Thank you. This demo contact form is ready for integration.</p> : null}
    </form>
  );
}

function Field({ label, name, type = "text", placeholder, className = "", required = false }) {
  return (
    <label className={`grid gap-2 text-sm font-medium text-pearl ${className}`}>
      {label}
      <input
        name={name}
        type={type}
        className="luxury-input"
        placeholder={placeholder ?? label}
        required={required}
      />
    </label>
  );
}

function SelectField({ label, name, options }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-pearl">
      {label}
      <select name={name} className="luxury-input" defaultValue="">
        <option value="" disabled>
          Select {label.toLowerCase()}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-night text-ivory">
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
