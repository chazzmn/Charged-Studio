"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * Homepage hero — contained mockup reel.
 *
 * The browser frame holds a looping showreel video. The real file is a
 * placeholder for now: drop an optimised loop at
 *   /public/videos/hero-reel.mp4  (H.264) and optionally hero-reel.webm
 *   /public/images/hero-poster.jpg (first frame, used as the LCP poster)
 * and it renders with no layout change. Until then the frame shows a
 * styled placeholder so dev never looks broken.
 */
export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };
  const item: Variants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden">
      {/* Decorative glow — electric energy without an image dependency */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-charged-yellow/10 blur-[140px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-32 md:pt-40 lg:grid-cols-2 lg:gap-16 lg:pb-28">
        {/* Copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-charged-yellow"
          >
            Web Design Studio · Exeter & the South West
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 font-anton text-5xl uppercase leading-[0.95] text-charged-light sm:text-6xl lg:text-7xl"
          >
            We build the website
            <br />
            your business{" "}
            <span className="text-charged-yellow">deserves.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md font-inter text-lg leading-relaxed text-charged-light/70"
          >
            Fast, modern websites that turn local searchers into customers —
            for service businesses across Devon and the South West.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="/start-a-project"
              className="bg-white px-8 py-4 text-center font-inter text-sm font-bold uppercase tracking-widest text-charged-black transition-colors hover:bg-neutral-200"
            >
              Start a Project
            </Link>
            <Link
              href="/audit"
              className="border border-white/30 px-8 py-4 text-center font-inter text-sm font-bold uppercase tracking-widest text-charged-light transition-colors hover:border-white/80"
            >
              Free Website Audit
            </Link>
          </motion.div>
        </motion.div>

        {/* Mockup reel */}
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative"
        >
          {/* Glow behind the frame */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-charged-yellow/15 blur-3xl"
          />

          <div className="overflow-hidden rounded-xl border border-white/10 bg-charged-navy shadow-2xl shadow-black/40">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <div className="ml-3 flex-1 rounded bg-white/5 px-3 py-1 font-inter text-xs text-charged-light/40">
                chargedstudio.co.uk
              </div>
            </div>

            {/* Media — fixed 16:10 so swapping in the real video never shifts layout */}
            <div className="relative aspect-[16/10] bg-gradient-to-br from-charged-navy via-charged-navy to-charged-black">
              {/* Placeholder shown until the real reel is added */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="font-anton text-6xl uppercase text-charged-light/5 sm:text-7xl">
                  charged
                </span>
                <span className="font-inter text-[10px] font-semibold uppercase tracking-[0.25em] text-charged-light/30">
                  Project Showreel
                </span>
              </div>

              {/* Real video slot (renders over the placeholder once files exist).
                  preload="none" + poster keeps it off the LCP critical path. */}
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay={!reduceMotion}
                muted
                loop
                playsInline
                preload="none"
                poster="/images/hero-poster.jpg"
              >
                <source src="/videos/hero-reel.webm" type="video/webm" />
                <source src="/videos/hero-reel.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
