import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="border-y border-mist bg-pearl section-padding">
      <div className="section-shell">
        <SectionHeading title="Trusted in Beautiful Spaces" />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-[8px] border border-mist bg-white p-8 shadow-[0_12px_35px_rgba(17,17,17,0.04)]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex text-gold" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-gold/40" />
              </div>
              <p className="mt-6 text-base leading-8 text-graphite">{testimonial.quote}</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-champagne font-semibold text-gold">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-ink">{testimonial.name}</p>
                  <p className="text-sm text-graphite">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
