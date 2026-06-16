import { processSteps } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section className="border-y border-mist bg-pearl">
      <div className="section-shell section-padding">
        <SectionHeading title="A Seamless Path to a Spotless Space" />

        <div className="relative mt-14 grid gap-8 lg:grid-cols-4">
          <div className="absolute left-[12.5%] right-[12.5%] top-11 hidden h-px bg-gold/30 lg:block" />
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="relative text-center">
                <div className="mx-auto grid h-[5.5rem] w-[5.5rem] place-items-center rounded-full border border-gold/60 bg-white text-gold shadow-soft">
                  <Icon className="h-8 w-8" strokeWidth={1.45} />
                </div>
                <p className="mt-5 font-display text-xl text-gold">{index + 1}.</p>
                <h3 className="mt-1 font-display text-2xl leading-tight text-ink">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-[250px] text-sm leading-7 text-graphite">{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
