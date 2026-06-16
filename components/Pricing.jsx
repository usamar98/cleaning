import { Check } from "lucide-react";
import { pricingPlans } from "@/data/site";
import { ButtonLink } from "./Button";
import { SectionHeading } from "./SectionHeading";

export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.28fr_0.72fr]">
        <SectionHeading
          align="left"
          title="Premium Cleaning Plans"
          text="Flexible plans designed for homes and businesses that value quality, consistency, and peace of mind."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <article
                key={plan.name}
                className={`relative rounded-[8px] border bg-white p-7 text-center shadow-[0_12px_40px_rgba(17,17,17,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-soft ${
                  plan.featured ? "border-gold shadow-soft" : "border-mist"
                }`}
              >
                {plan.featured ? (
                  <div className="absolute inset-x-8 -top-4 rounded-[4px] bg-gold px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white">
                    Most Popular
                  </div>
                ) : null}
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-champagne text-gold">
                  <Icon className="h-8 w-8" strokeWidth={1.45} />
                </div>
                <h3 className="mt-7 font-display text-2xl text-ink">{plan.name}</h3>
                <span className="gold-line mx-auto mt-5" aria-hidden="true" />
                <p className="mt-6 text-sm leading-7 text-graphite">{plan.intro}</p>
                <p className="mt-6 text-sm font-semibold text-gold">{plan.marker}</p>
                <ul className="mt-6 space-y-3 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6 text-graphite">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href="#contact"
                  variant={plan.featured ? "gold" : "dark"}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </ButtonLink>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
