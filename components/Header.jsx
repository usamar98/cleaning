"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

const navItems = [
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Reviews", "#reviews"],
  ["Pricing", "#pricing"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"]
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-champagne/15 bg-night/88 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-5">
        <a href="#top" className="group flex items-center gap-3" aria-label="BlackBurn Cleaning Services home">
          <BrandLogo />
          <span className="leading-none">
            <span className="display-title block text-2xl text-ivory">BlackBurn</span>
            <span className="mt-1 block text-xs uppercase tracking-[0.24em] text-smoke">Cleaning Services</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-pearl/82 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-champagne">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#appointment"
            className="hidden rounded-[8px] bg-champagne px-5 py-3 text-sm font-semibold text-night shadow-gold transition hover:bg-ivory sm:inline-flex"
          >
            Book Cleaning
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-[8px] border border-champagne/25 text-ivory lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-champagne/15 bg-night/96 lg:hidden">
          <nav className="section-shell grid gap-1 py-4 text-sm text-pearl" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-[8px] px-3 py-3 transition hover:bg-champagne/10 hover:text-champagne"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#appointment"
              className="mt-2 rounded-[8px] bg-champagne px-4 py-3 text-center font-semibold text-night"
              onClick={() => setOpen(false)}
            >
              Book Cleaning
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
