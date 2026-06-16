import { ArrowRight } from "lucide-react";
import { services } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-shell">
        <SectionHeading
          title="Signature Cleaning Services"
          text="Thoughtfully curated services for homes and businesses. Every detail, immaculately handled."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-[8px] border border-mist bg-white shadow-[0_10px_35px_rgba(17,17,17,0.04)] transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-soft"
              >
                <div className="image-lift aspect-[1.2] rounded-none">
                  <img src={service.image} alt={`${service.title} example`} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <Icon className="h-8 w-8 text-gold" strokeWidth={1.45} />
                  <h3 className="mt-6 font-display text-2xl leading-tight text-ink">{service.title}</h3>
                  <p className="mt-4 min-h-[96px] text-sm leading-7 text-graphite">{service.description}</p>
                  <a
                    href="#contact"
                    className="focus-ring mt-6 inline-flex items-center gap-3 text-sm font-semibold text-ink transition group-hover:text-gold"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
