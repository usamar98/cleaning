import { images, whyChooseUs } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="border-y border-mist bg-pearl">
      <div className="section-shell grid gap-10 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:py-28">
        <div className="image-lift min-h-[520px]">
          <img
            src={images.why}
            alt="Elegant living room maintained by luxury cleaning service"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-center">
          <SectionHeading
            align="left"
            title="Why Clients Trust Luxora"
            text="We go beyond cleaning. We deliver peace of mind through consistency, care, and exceptional service."
          />

          <div className="mt-10 divide-y divide-mist">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-5 py-5 first:pt-0">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-champagne text-gold">
                    <Icon className="h-6 w-6" strokeWidth={1.55} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-graphite">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
