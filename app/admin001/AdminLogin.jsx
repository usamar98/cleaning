"use client";

import { LockKeyhole } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });

    if (!response.ok) {
      setSubmitting(false);
      setError("Invalid password.");
      return;
    }

    window.location.reload();
  }

  return (
    <main className="grid min-h-screen place-items-center bg-night px-5 py-10 text-ivory">
      <form onSubmit={handleSubmit} className="premium-card w-full max-w-md rounded-[8px] p-7">
        <div className="mb-7 flex items-center gap-3">
          <BrandLogo />
          <div>
            <p className="display-title text-2xl text-ivory">Admin Login</p>
            <p className="text-sm text-smoke">BlackBurn Cleaning Services</p>
          </div>
        </div>

        <label className="grid gap-2 text-sm font-medium text-pearl">
          Password
          <span className="relative">
            <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-champagne" size={18} />
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              className="luxury-input pl-12"
              placeholder="Enter admin password"
              required
            />
          </span>
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="mt-5 inline-flex w-full items-center justify-center rounded-[8px] bg-champagne px-5 py-4 text-sm font-semibold text-night shadow-gold transition hover:bg-ivory"
        >
          {submitting ? "Checking..." : "Login"}
        </button>

        {error ? <p className="mt-4 text-sm text-red-600" role="alert">{error}</p> : null}
      </form>
    </main>
  );
}
