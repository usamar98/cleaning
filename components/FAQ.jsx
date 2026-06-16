import { Plus } from "lucide-react";
import { faqs } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 lg:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.36fr_0.64fr]">
        <SectionHeading align="left" title="Questions Before We Arrive" />

        <div className="divide-y divide-mist rounded-[8px] border border-mist bg-white">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group px-6 py-5" open={index === 0}>
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-6 text-left font-medium text-ink">
                {faq.question}
                <Plus className="h-5 w-5 shrink-0 text-gold transition group-open:rotate-45" />
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-graphite">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
