import { Sparkles } from "lucide-react";

export function Logo({ inverse = false }) {
  return (
    <a href="#top" className="group inline-flex items-center gap-3 focus-ring" aria-label="Luxora Cleaning Services home">
      <span className="relative grid h-12 w-12 place-items-center font-display text-5xl leading-none text-gold">
        L
        <Sparkles className="absolute right-0 top-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-3xl leading-none ${inverse ? "text-white" : "text-ink"}`}>
          Luxora
        </span>
        <span className={`block text-sm tracking-[0.02em] ${inverse ? "text-white/72" : "text-graphite"}`}>
          Cleaning Services
        </span>
      </span>
    </a>
  );
}
