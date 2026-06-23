"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Badge from "@/components/Badge";

const RESULTS = ["5 sites unified", "More enquiries", "Stronger brand"];

export default function FeaturedWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32">
      <motion.div
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        {/* Placeholder image — swap for a next/image of the real project shot */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-gradient-to-br from-surface to-bg">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-anton text-6xl uppercase text-text/5">
              Devon Nurseries
            </span>
          </div>
        </div>

        {/* Copy */}
        <div>
          <Badge>Case Study</Badge>
          <h2 className="mt-5 font-anton text-3xl uppercase leading-tight text-text sm:text-4xl lg:text-5xl">
            Devon Nurseries
          </h2>
          <p className="mt-4 font-inter text-lg leading-relaxed text-text/70">
            A five-site childcare group across Devon with fragmented branding and
            websites. We consolidated them into one credible, unified digital
            presence — easier to find, easier to trust, and built to bring in more
            enquiries.
          </p>

          <ul className="mt-7 flex flex-wrap gap-3">
            {RESULTS.map((r) => (
              <li
                key={r}
                className="rounded-full border border-border bg-text/5 px-4 py-2 font-inter text-sm text-text/80"
              >
                {r}
              </li>
            ))}
          </ul>

          <Link
            href="/devon-nurseries"
            className="mt-8 inline-block font-inter text-sm font-bold uppercase tracking-widest text-accent transition-opacity hover:opacity-80"
          >
            View the case study →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
