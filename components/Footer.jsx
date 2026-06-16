import { ChevronRight } from "lucide-react";
import { contactDetails, footerServices, navLinks, socialLinks } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="section-shell grid gap-10 py-14 lg:grid-cols-[1.35fr_0.85fr_1fr_1.25fr]">
        <div>
          <Logo inverse />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
            Luxury cleaning services for homes, businesses, and premium spaces. Impeccable results, every time.
          </p>
          <div className="mt-7 flex gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-gold/70 text-gold transition hover:bg-gold hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Quick Links</h3>
          <ul className="mt-6 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="focus-ring inline-flex items-center gap-2 text-sm text-white/72 transition hover:text-white">
                  {link.label}
                  <ChevronRight className="h-3.5 w-3.5 text-gold" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Services</h3>
          <ul className="mt-6 space-y-3">
            {footerServices.map((service) => (
              <li key={service}>
                <a href="#services" className="focus-ring inline-flex items-center gap-2 text-sm text-white/72 transition hover:text-white">
                  {service}
                  <ChevronRight className="h-3.5 w-3.5 text-gold" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Contact Us</h3>
          <ul className="mt-6 space-y-4">
            {contactDetails.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <a href={item.href} className="focus-ring flex gap-3 text-sm leading-6 text-white/72 transition hover:text-white">
                    <Icon className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-4 py-6 text-sm text-white/58 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Luxora Cleaning Services. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#top" className="focus-ring hover:text-white">
              Privacy Policy
            </a>
            <a href="#top" className="focus-ring hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
