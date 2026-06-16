import { Sparkles } from "lucide-react";
import { heroBadges, images } from "@/data/site";
import { ButtonLink } from "./Button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[76px]">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_35%,rgba(255,255,255,0.8)_54%,rgba(255,255,255,0)_78%)]" />
      <div className="section-shell relative grid min-h-[820px] items-center gap-10 py-16 lg:grid-cols-[0.93fr_1.07fr] lg:py-0">
        <div className="relative z-10 max-w-3xl animate-fade-up">
          <h1 className="font-display text-[clamp(3.3rem,7vw,7.8rem)] font-normal leading-[0.98] tracking-normal text-ink">
            Luxury Cleaning Services for Homes & Businesses
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-graphite sm:text-xl">
            Premium deep cleaning, regular cleaning, Airbnb turnovers, move-in/move-out cleaning, and office cleaning delivered with hotel-level care.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#contact">
              <Sparkles className="h-4 w-4 text-gold group-hover:text-ink" />
              Get Free Quote
            </ButtonLink>
            <ButtonLink href="#services" variant="light">
              View Services
            </ButtonLink>
          </div>
        </div>

        <div className="relative h-[430px] overflow-hidden rounded-[8px] shadow-luxury lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[63%] lg:rounded-none lg:shadow-none">
          <img
            src={images.hero}
            alt="Luxury bright living room prepared for professional cleaning service"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/20 to-transparent lg:hidden" />
          <div className="absolute bottom-8 right-8 hidden rounded-[8px] border border-white/50 bg-white/86 p-4 shadow-soft backdrop-blur md:flex">
            <div className="h-20 w-20 rounded-[6px] bg-ink p-4 text-gold">
              <Sparkles className="h-full w-full" />
            </div>
            <div className="ml-4 max-w-[180px]">
              <p className="text-sm font-semibold text-ink">Hotel-level detailing</p>
              <p className="mt-1 text-sm leading-6 text-graphite">From first quote to final polish.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-shell relative z-10 -mt-14 pb-12 lg:-mt-24">
        <div className="grid gap-0 overflow-hidden rounded-[8px] bg-white shadow-luxury ring-1 ring-mist md:grid-cols-2 lg:grid-cols-4">
          {heroBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={badge.title} className="flex gap-4 border-mist p-6 md:border-r md:last:border-r-0">
                <Icon className="mt-1 h-9 w-9 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="font-semibold text-ink">{badge.title}</p>
                  <p className="mt-1 text-sm leading-6 text-graphite">{badge.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
