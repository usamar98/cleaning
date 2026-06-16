"use client";

import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/data/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-mist/80 bg-white/92 backdrop-blur-xl">
      <div className="section-shell flex h-[76px] items-center justify-between gap-5">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink transition hover:text-gold focus-ring"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="focus-ring group hidden min-h-12 items-center gap-3 rounded-[6px] bg-ink px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-gold hover:text-ink sm:inline-flex"
        >
          <CalendarDays className="h-4 w-4" />
          Book a Cleaning
        </a>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-grid h-11 w-11 place-items-center rounded-[6px] border border-mist text-ink lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`${open ? "grid" : "hidden"} border-t border-mist bg-white lg:hidden`}>
        <nav className="section-shell grid gap-1 py-5" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-[6px] px-2 py-3 text-base font-medium text-ink transition hover:bg-pearl focus-ring"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="focus-ring mt-3 inline-flex min-h-12 items-center justify-center gap-3 rounded-[6px] bg-ink px-5 text-sm font-semibold text-white"
          >
            <CalendarDays className="h-4 w-4" />
            Book a Cleaning
          </a>
        </nav>
      </div>
    </header>
  );
}
