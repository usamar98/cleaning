import { gallery } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.32fr_0.68fr]">
        <SectionHeading
          align="left"
          title="Before & After, Beautifully Restored"
          text="See the difference professional care and attention to detail can make."
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <div className="grid auto-rows-[260px] gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {gallery.map((item) => (
            <figure
              key={item.title}
              className={`image-lift relative ${item.className ?? ""}`}
            >
              <img src={item.image} alt={`${item.title} cleaning result`} className="h-full w-full object-cover" loading="lazy" />
              <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-[6px] bg-white/88 px-4 py-3 text-sm font-semibold text-ink shadow-soft backdrop-blur">
                <span>{item.title}</span>
                <span className="text-gold">After</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
