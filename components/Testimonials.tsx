"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Badge from "@/components/Badge";

type Testimonial = { quote: string; name: string };

/** Best 5 real quotes from the live site. Headshots swap in later. */
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They understood our vision and turned it into a platform that our clients love. Their attention to detail, communication, and genuine care for our project made the whole process effortless.",
    name: "Tariq Salfo",
  },
  {
    quote:
      "Charged created a clean, modern website that our clients love. The whole process felt organised, simple and smooth.",
    name: "Jane Gold",
  },
  {
    quote:
      "Our new site finally matches the quality of our service. Clear, fast and polished, with excellent communication throughout.",
    name: "Jack Smith",
  },
  {
    quote:
      "Charged delivered a sharp, professional website that has already increased enquiries. Great experience from start to finish.",
    name: "Olivia Johnson",
  },
  {
    quote:
      "Highly recommend this professional outfit — skilled, reliable, responsive, and such lovely people.",
    name: "Denise Russell",
  },
];

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const item: Variants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <Badge>What clients say</Badge>
        <h2 className="mt-5 font-anton text-3xl uppercase leading-tight text-charged-light sm:text-4xl lg:text-5xl">
          Trusted by businesses across the South West.
        </h2>
      </div>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {TESTIMONIALS.map((t) => (
          <motion.li
            key={t.name}
            variants={item}
            className="flex flex-col rounded-xl border border-white/10 bg-charged-navy/40 p-7"
          >
            <div aria-hidden className="font-inter text-sm tracking-widest text-charged-yellow">
              ★★★★★
            </div>
            <blockquote className="mt-4 flex-1 font-inter text-base leading-relaxed text-charged-light/80">
              “{t.quote}”
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-charged-yellow/15 font-inter text-sm font-bold uppercase text-charged-yellow">
                {initials(t.name)}
              </span>
              <span className="font-inter text-sm font-semibold text-charged-light">
                {t.name}
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
