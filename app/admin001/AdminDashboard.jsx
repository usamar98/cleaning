"use client";

import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  LogOut,
  Mail,
  RefreshCw,
  Search,
  Trash2,
  UserRound
} from "lucide-react";
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
  message: "Special instructions",
  contactName: "Full name",
  contactEmail: "Email",
  contactPhone: "Phone",
  contactMessage: "Message"
};

const statusLabels = {
  new: "New",
  contacted: "Contacted",
  completed: "Completed"
};

const statusClasses = {
  new: "border-champagne/25 bg-champagne/10 text-champagne",
  contacted: "border-blue-500/25 bg-blue-500/10 text-blue-700",
  completed: "border-emerald-600/25 bg-emerald-600/10 text-emerald-700"
};

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");

  async function loadSubmissions() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/submissions", { cache: "no-store" });
      if (response.status === 401) {
        window.location.reload();
        return;
      }
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
    const contacted = submissions.filter((item) => item.status === "contacted").length;
    const completed = submissions.filter((item) => item.status === "completed").length;
    return { appointments, contacted, completed, contacts, total: submissions.length };
  }, [submissions]);

  const services = useMemo(() => {
    return Array.from(new Set(submissions.map((item) => item.payload.service).filter(Boolean))).sort();
  }, [submissions]);

  const filteredSubmissions = useMemo(() => {
    const search = query.trim().toLowerCase();

    return submissions.filter((submission) => {
      const payloadText = Object.values(submission.payload || {}).join(" ").toLowerCase();
      const matchesSearch =
        !search ||
        payloadText.includes(search) ||
        submission.type.toLowerCase().includes(search) ||
        (submission.status || "new").toLowerCase().includes(search);
      const matchesType = typeFilter === "all" || submission.type === typeFilter;
      const matchesStatus = statusFilter === "all" || (submission.status || "new") === statusFilter;
      const matchesService = serviceFilter === "all" || submission.payload.service === serviceFilter;
      return matchesSearch && matchesType && matchesStatus && matchesService;
    });
  }, [query, serviceFilter, statusFilter, submissions, typeFilter]);

  async function updateStatus(id, status) {
    const response = await fetch(`/api/submissions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });

    if (!response.ok) {
      setError("Unable to update status.");
      return;
    }

    const data = await response.json();
    setSubmissions((items) => items.map((item) => (item.id === id ? data.submission : item)));
  }

  async function removeSubmission(id) {
    if (!window.confirm("Delete this submission?")) return;

    const response = await fetch(`/api/submissions/${id}`, { method: "DELETE" });
    if (!response.ok) {
      setError("Unable to delete submission.");
      return;
    }

    setSubmissions((items) => items.filter((item) => item.id !== id));
  }

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    window.location.reload();
  }

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
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={loadSubmissions}
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-champagne/30 px-5 py-3 text-sm font-semibold text-champagne transition hover:border-champagne"
            >
              <RefreshCw size={16} />
              Refresh
            </button>
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-champagne px-5 py-3 text-sm font-semibold text-night shadow-gold transition hover:bg-ivory"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard title="Total" value={stats.total} icon={UserRound} />
          <StatCard title="Appointments" value={stats.appointments} icon={CalendarDays} />
          <StatCard title="Messages" value={stats.contacts} icon={Mail} />
          <StatCard title="Contacted" value={stats.contacted} icon={Clock3} />
          <StatCard title="Completed" value={stats.completed} icon={CheckCircle2} />
        </section>

        <section className="premium-card mt-8 rounded-[8px] p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_180px_180px_220px]">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-champagne" size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="luxury-input pl-12"
                placeholder="Search name, phone, email, service, message..."
              />
            </label>
            <FilterSelect label="Type" value={typeFilter} onChange={setTypeFilter}>
              <option value="all">All types</option>
              <option value="appointment">Appointments</option>
              <option value="contact">Messages</option>
            </FilterSelect>
            <FilterSelect label="Status" value={statusFilter} onChange={setStatusFilter}>
              <option value="all">All statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="completed">Completed</option>
            </FilterSelect>
            <FilterSelect label="Service" value={serviceFilter} onChange={setServiceFilter}>
              <option value="all">All services</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </FilterSelect>
          </div>
        </section>

        <section className="mt-8">
          {loading ? <p className="text-sm text-smoke">Loading submissions...</p> : null}
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          {!loading && !error && filteredSubmissions.length === 0 ? (
            <div className="rounded-[8px] border border-champagne/15 bg-charcoal p-8 text-center">
              <h2 className="display-title text-3xl">No submissions found</h2>
              <p className="mt-3 text-sm text-smoke">New contact messages and appointments will appear here.</p>
            </div>
          ) : null}

          <div className="grid gap-4">
            {filteredSubmissions.map((submission) => (
              <SubmissionCard
                key={submission.id}
                submission={submission}
                onDelete={removeSubmission}
                onStatusChange={updateStatus}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function FilterSelect({ children, label, onChange, value }) {
  return (
    <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-smoke">
      {label}
      <select className="luxury-input py-3 normal-case tracking-normal" value={value} onChange={(event) => onChange(event.target.value)}>
        {children}
      </select>
    </label>
  );
}

function SubmissionCard({ onDelete, onStatusChange, submission }) {
  const currentStatus = submission.status || "new";

  return (
    <article className="rounded-[8px] border border-champagne/15 bg-charcoal p-5">
      <div className="flex flex-col gap-4 border-b border-champagne/10 pb-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs uppercase tracking-[0.18em] text-champagne">
              {submission.type === "appointment" ? "Appointment" : "Contact message"}
            </p>
            <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[currentStatus]}`}>
              {statusLabels[currentStatus]}
            </span>
          </div>
          <h2 className="mt-2 text-lg font-semibold text-ivory">
            {submission.payload.name || submission.payload.contactName || "Website visitor"}
          </h2>
          <time className="mt-1 block text-sm text-smoke" dateTime={submission.createdAt}>
            {new Date(submission.createdAt).toLocaleString("en-GB")}
          </time>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <select
            className="luxury-input py-3 text-sm"
            value={currentStatus}
            onChange={(event) => onStatusChange(submission.id, event.target.value)}
          >
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="completed">Completed</option>
          </select>
          <button
            type="button"
            onClick={() => onDelete(submission.id)}
            className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-red-500/25 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-500/10"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>

      <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(submission.payload).map(([key, value]) =>
          value ? (
            <div key={key} className="rounded-[8px] border border-champagne/10 bg-night/70 p-4">
              <dt className="text-xs uppercase tracking-[0.14em] text-smoke">{labels[key] || key}</dt>
              <dd className="mt-2 break-words text-sm leading-6 text-pearl">{value}</dd>
            </div>
          ) : null
        )}
      </dl>
    </article>
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
