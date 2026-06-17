"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function HorizontalScroller({ id, title, intro, items, type = "project" }) {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const railRef = useRef(null);
  const [shift, setShift] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });
  const rawX = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -shift]);
  const x = useSpring(rawX, { stiffness: 85, damping: 24, mass: 0.35 });

  useEffect(() => {
    const updateShift = () => {
      if (!railRef.current || !viewportRef.current) return;
      setShift(Math.max(0, railRef.current.scrollWidth - viewportRef.current.clientWidth));
    };

    updateShift();
    window.addEventListener("resize", updateShift);
    return () => window.removeEventListener("resize", updateShift);
  }, [items.length]);

  return (
    <section id={id} ref={sectionRef} className="relative h-[260vh] border-y border-champagne/10 bg-night">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-24">
        <div className="section-shell">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <h2 className="display-title max-w-3xl text-4xl text-ivory sm:text-5xl lg:text-6xl">{title}</h2>
            <p className="max-w-2xl text-base leading-8 text-smoke lg:justify-self-end">{intro}</p>
          </div>
          <div ref={viewportRef} className="overflow-visible">
            <motion.div ref={railRef} style={{ x }} className="flex w-max gap-5 pr-[10vw]">
              {items.map((item, index) =>
                type === "review" ? (
                  <ReviewCard key={item.role} item={item} index={index} />
                ) : (
                  <ProjectCard key={item.title} item={item} index={index} />
                )
              )}
            </motion.div>
          </div>
          <div className="mt-8 h-px overflow-hidden bg-graphite">
            <motion.div
              className="h-full origin-left bg-champagne"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ item, index }) {
  return (
    <article className="premium-card group grid h-[420px] w-[82vw] max-w-[520px] overflow-hidden rounded-[8px] md:w-[520px]">
      <div className="relative min-h-0">
        <img src={item.image} alt="" className="h-full w-full object-cover image-tone transition duration-700 group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/25 to-transparent" />
        <span className="absolute left-5 top-5 rounded-[8px] border border-champagne/35 bg-night/72 px-3 py-2 text-xs uppercase tracking-[0.18em] text-champagne">
          0{index + 1}
        </span>
      </div>
      <div className="grid gap-3 p-6">
        <h3 className="display-title text-3xl text-ivory">{item.title}</h3>
        <p className="text-sm leading-7 text-smoke">{item.text}</p>
        <a href="#appointment" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-champagne">
          Book Cleaning <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}

function ReviewCard({ item }) {
  return (
    <article className="premium-card flex h-[330px] w-[82vw] max-w-[430px] flex-col justify-between rounded-[8px] p-7 md:w-[430px]">
      <div>
        <div className="mb-6 flex gap-1 text-champagne" aria-label="5 star review">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index}>*</span>
          ))}
        </div>
        <p className="text-lg leading-8 text-pearl">"{item.quote}"</p>
      </div>
      <div className="flex items-center justify-between border-t border-champagne/15 pt-5">
        <div>
          <h3 className="text-base font-semibold text-ivory">{item.name}</h3>
          <p className="text-sm text-smoke">{item.role}</p>
        </div>
        <span className="display-title text-4xl text-champagne/70">"</span>
      </div>
    </article>
  );
}
