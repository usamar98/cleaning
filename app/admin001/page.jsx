"use client";

import { CalendarDays, Mail, RefreshCw, UserRound } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const labels = {
  name: "Full name",
  phone: "Phone",
  email: "Email",
  propertyType: "Property type",
  service: "Cleaning service",
  date: "Preferred date",
  time: "Preferred time",
  frequency: "Frequency",
  size: "Property size",
  message: "Message",
  contactName: "Full name",
  contactEmail: "Email",
  contactPhone: "Phone",
  contactMessage: "Message"
};

export default function AdminPage() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadSubmissions() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/submissions", { cache: "no-store" });
      if (!response.ok) {
        throw new Error("Could not load submissions");
      }
      const data = await response.json();
      setSubmissions(data.submissions || []);
    } catch (loadError) {
      setError("Unable to load messages right now.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSubmissions();
  }, []);

  const stats = useMemo(() => {
    const appointments = submissions.filter((item) => item.type === "appointment").length;
    const contacts = submissions.filter((item) => item.type === "contact").length;
    return { appointments, contacts, total: submissions.length };
  }, [submissions]);

  return (
    <main className="min-h-screen bg-night px-5 py-8 text-ivory sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-champagne/15 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-champagne">Admin route /admin001</p>
            <h1 className="display-title mt-3 text-4xl sm:text-5xl">Cleaning Enquiries</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-smoke">
              Appointment requests and contact messages submitted through the website appear here.
            </p>
          </div>
          <button
            type="button"
            onClick={loadSubmissions}
            className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-champagne/30 px-5 py-3 text-sm font-semibold text-champagne transition hover:border-champagne"
          >
            <RefreshCw size={16} />
            Refresh
          </button>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          <StatCard title="Total" value={stats.total} icon={UserRound} />
          <StatCard title="Appointments" value={stats.appointments} icon={CalendarDays} />
          <StatCard title="Messages" value={stats.contacts} icon={Mail} />
        </section>

        <section className="mt-8">
          {loading ? <p className="text-sm text-smoke">Loading submissions...</p> : null}
          {error ? <p className="text-sm text-red-300">{error}</p> : null}
          {!loading && !error && submissions.length === 0 ? (
            <div className="rounded-[8px] border border-champagne/15 bg-charcoal p-8 text-center">
              <h2 className="display-title text-3xl">No submissions yet</h2>
              <p className="mt-3 text-sm text-smoke">New contact messages and appointments will appear here.</p>
            </div>
          ) : null}

          <div className="grid gap-4">
            {submissions.map((submission) => (
              <article key={submission.id} className="rounded-[8px] border border-champagne/15 bg-charcoal p-5">
                <div className="flex flex-col gap-3 border-b border-champagne/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-champagne">
                      {submission.type === "appointment" ? "Appointment" : "Contact message"}
                    </p>
                    <h2 className="mt-2 text-lg font-semibold text-ivory">
                      {submission.payload.name || submission.payload.contactName || "Website visitor"}
                    </h2>
                  </div>
                  <time className="text-sm text-smoke" dateTime={submission.createdAt}>
                    {new Date(submission.createdAt).toLocaleString("en-GB")}
                  </time>
                </div>

                <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {Object.entries(submission.payload).map(([key, value]) =>
                    value ? (
                      <div key={key} className="rounded-[8px] border border-champagne/10 bg-night/45 p-4">
                        <dt className="text-xs uppercase tracking-[0.14em] text-smoke">{labels[key] || key}</dt>
                        <dd className="mt-2 break-words text-sm leading-6 text-pearl">{value}</dd>
                      </div>
                    ) : null
                  )}
                </dl>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="rounded-[8px] border border-champagne/15 bg-charcoal p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-smoke">{title}</p>
          <p className="display-title mt-2 text-4xl text-champagne">{value}</p>
        </div>
        <span className="grid size-12 place-items-center rounded-[8px] border border-champagne/20 text-champagne">
          <Icon size={20} strokeWidth={1.6} />
        </span>
      </div>
    </div>
  );
}
