import { ArrowRight } from "lucide-react";

const variants = {
  dark: "bg-ink text-white shadow-soft hover:bg-gold hover:text-ink",
  light: "border border-gold/70 bg-white text-ink hover:border-ink hover:bg-ink hover:text-white",
  gold: "bg-gold text-white hover:bg-gold-dark",
};

export function ButtonLink({ href, children, variant = "dark", className = "", icon = true }) {
  return (
    <a
      href={href}
      className={`focus-ring group relative inline-flex min-h-14 items-center justify-center overflow-hidden rounded-[6px] px-7 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-3">
        {children}
        {icon ? <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /> : null}
      </span>
      <span className="absolute inset-y-0 left-0 hidden w-20 -skew-x-12 bg-white/15 motion-safe:animate-sheen sm:block" />
    </a>
  );
}
