"use client";

import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";

const propertyTypes = ["House", "Apartment", "Villa", "Office", "Airbnb / Short-Term Rental", "Commercial Property"];
const services = [
  "Residential Cleaning",
  "Deep Cleaning",
  "Office Cleaning",
  "Airbnb Cleaning",
  "Move-In / Move-Out Cleaning",
  "Post-Construction Cleaning",
  "Carpet & Upholstery Cleaning",
  "Window Cleaning"
];
const frequencies = ["One-Time", "Weekly", "Bi-Weekly", "Monthly"];

export function AppointmentForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    setSent(false);

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "appointment", payload })
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setSent(true);
    } catch (submissionError) {
      setError("Something went wrong. Please call or WhatsApp us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 lg:grid-cols-2">
      <Field label="Full Name" name="name" required />
      <Field label="Phone Number" name="phone" type="tel" required />
      <Field label="Email Address" name="email" type="email" required />
      <SelectField label="Property Type" name="propertyType" options={propertyTypes} />
      <SelectField label="Cleaning Service" name="service" options={services} />
      <Field label="Preferred Date" name="date" type="date" />
      <Field label="Preferred Time" name="time" type="time" />
      <SelectField label="Frequency" name="frequency" options={frequencies} />
      <Field label="Property Size" name="size" placeholder="Example: 2 bedroom flat, 1,200 sq ft" className="lg:col-span-2" />
      <label className="grid gap-2 text-sm font-medium text-pearl lg:col-span-2">
        Special Instructions
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
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-champagne px-6 py-4 text-sm font-semibold text-night shadow-gold transition hover:bg-ivory"
        >
          {submitting ? "Sending..." : "Request Appointment"}
          <Send size={17} />
        </button>
        {sent ? (
          <p className="inline-flex items-center gap-2 text-sm text-champagne" role="status">
            <CheckCircle2 size={17} />
            Appointment request received.
          </p>
        ) : null}
        {error ? <p className="text-sm text-red-300" role="alert">{error}</p> : null}
      </div>
    </form>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    setSent(false);

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", payload })
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setSent(true);
    } catch (submissionError) {
      setError("Something went wrong. Please call or WhatsApp us directly.");
    } finally {
      setSubmitting(false);
    }
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
          placeholder="How can BlackBurn help?"
          required
        />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-champagne px-5 py-4 text-sm font-semibold text-night transition hover:bg-ivory"
      >
        {submitting ? "Sending..." : "Send Message"}
        <Send size={17} />
      </button>
      {sent ? <p className="text-sm text-champagne">Thank you. Your message has been sent.</p> : null}
      {error ? <p className="text-sm text-red-300" role="alert">{error}</p> : null}
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
