"use client";

import { motion, type Variants } from "framer-motion";
import { BoltMark } from "@/components/icons";

/**
 * Shared coded "scene" graphics, used in BOTH the hero loop (components/
 * HeroMockup.tsx) and the homepage service rows (components/Services.tsx).
 * Each graphic is plain layout containing motion children with `variants={gBlock}`;
 * an ancestor motion container (with gContainer + animate state) drives the
 * staggered build-in. Pure code, no assets, on-brand (dark + yellow).
 */

export const gContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

export const gBlock: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

/** WEBSITES — a site assembling: nav, headline, CTA, media, cards. */
export function WebsiteGraphic() {
  return (
    <div className="flex h-full w-full flex-col gap-3 p-4 sm:gap-3.5 sm:p-5">
      <motion.div variants={gBlock} className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-accent" />
          <span className="h-2 w-12 rounded-full bg-text/15" />
        </div>
        <div className="flex gap-1.5">
          <span className="h-2 w-7 rounded-full bg-text/10" />
          <span className="h-2 w-7 rounded-full bg-text/10" />
          <span className="h-2 w-7 rounded-full bg-text/10" />
        </div>
      </motion.div>
      <div className="grid flex-1 grid-cols-5 gap-3">
        <div className="col-span-3 flex flex-col justify-center gap-2.5">
          <motion.div variants={gBlock} className="h-3 w-[88%] rounded bg-text/25" />
          <motion.div variants={gBlock} className="h-3 w-[62%] rounded bg-text/25" />
          <motion.div variants={gBlock} className="mt-1 h-1.5 w-[72%] rounded-full bg-text/10" />
          <motion.div variants={gBlock} className="mt-2 h-5 w-20 rounded-md bg-accent" />
        </div>
        <motion.div
          variants={gBlock}
          className="col-span-2 rounded-lg bg-surface-raised ring-1 ring-border"
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <motion.div variants={gBlock} className="h-8 rounded-md bg-surface-raised ring-1 ring-border sm:h-9" />
        <motion.div variants={gBlock} className="h-8 rounded-md bg-surface-raised ring-1 ring-border sm:h-9" />
        <motion.div variants={gBlock} className="h-8 rounded-md bg-surface-raised ring-1 ring-border sm:h-9" />
      </div>
    </div>
  );
}

/** SEO — ranking #1 in search results. */
export function SearchGraphic() {
  return (
    <div className="flex h-full w-full flex-col gap-3 p-4 sm:p-5">
      <motion.div
        variants={gBlock}
        className="flex items-center gap-2 rounded-full bg-surface-raised px-3 py-2 ring-1 ring-border"
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3-3" strokeLinecap="round" />
        </svg>
        <span className="h-2 w-24 rounded-full bg-text/15" />
      </motion.div>
      <motion.div
        variants={gBlock}
        className="flex items-center gap-3 rounded-md border border-accent/40 bg-accent-soft p-2.5"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent font-anton text-[11px] text-text-inverse">
          1
        </span>
        <div className="flex flex-1 flex-col gap-1.5">
          <span className="h-2 w-[60%] rounded-full bg-text/30" />
          <span className="h-1.5 w-[85%] rounded-full bg-text/15" />
        </div>
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <path d="M12 19V6M6 12l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
      {[0, 1].map((i) => (
        <motion.div key={i} variants={gBlock} className="flex flex-col gap-1.5 px-1">
          <span className="h-2 w-[45%] rounded-full bg-text/15" />
          <span className="h-1.5 w-[80%] rounded-full bg-text/10" />
        </motion.div>
      ))}
    </div>
  );
}

/** SOFTWARE — a dashboard / app: sidebar, stat cards, chart, toggle, progress. */
export function SoftwareGraphic() {
  return (
    <div className="flex h-full w-full gap-3 p-4 sm:p-5">
      {/* sidebar */}
      <motion.div
        variants={gBlock}
        className="flex w-10 flex-col gap-2 rounded-md bg-surface-raised p-2 ring-1 ring-border sm:w-12"
      >
        <span className="h-2 w-full rounded bg-accent/80" />
        <span className="h-2 w-full rounded bg-text/15" />
        <span className="h-2 w-full rounded bg-text/15" />
        <span className="h-2 w-3/4 rounded bg-text/15" />
      </motion.div>
      {/* main */}
      <div className="flex flex-1 flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            variants={gBlock}
            className="flex flex-col gap-2 rounded-md bg-surface-raised p-2.5 ring-1 ring-border"
          >
            <span className="h-2 w-1/2 rounded-full bg-text/20" />
            <span className="h-4 w-3/4 rounded bg-text/30" />
          </motion.div>
          <motion.div
            variants={gBlock}
            className="flex items-end gap-1 rounded-md bg-surface-raised p-2.5 ring-1 ring-border"
          >
            <span className="h-3 w-1.5 rounded-sm bg-accent/40" />
            <span className="h-5 w-1.5 rounded-sm bg-accent/60" />
            <span className="h-4 w-1.5 rounded-sm bg-accent/50" />
            <span className="h-6 w-1.5 rounded-sm bg-accent" />
          </motion.div>
        </div>
        <motion.div
          variants={gBlock}
          className="flex items-center justify-between rounded-md bg-surface-raised p-2.5 ring-1 ring-border"
        >
          <span className="h-2 w-20 rounded-full bg-text/15" />
          <span className="flex h-4 w-7 items-center justify-end rounded-full bg-accent px-0.5">
            <span className="h-3 w-3 rounded-full bg-text-inverse" />
          </span>
        </motion.div>
        <motion.div
          variants={gBlock}
          className="rounded-md bg-surface-raised p-2.5 ring-1 ring-border"
        >
          <div className="h-1.5 w-full rounded-full bg-text/10">
            <div className="h-full w-2/3 rounded-full bg-accent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/** BRANDING — logo mark (bolt), colour palette, type sample. */
export function BrandingGraphic() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-4 p-5 sm:gap-5 sm:p-6">
      <motion.div variants={gBlock} className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
          <BoltMark className="h-5 w-5 text-text-inverse" />
        </span>
        <span className="h-3 w-24 rounded bg-text/25" />
      </motion.div>
      <motion.div variants={gBlock} className="flex gap-2">
        <span className="h-7 w-7 rounded-md bg-accent" />
        <span className="h-7 w-7 rounded-md bg-accent-pressed" />
        <span className="h-7 w-7 rounded-md bg-surface-raised ring-1 ring-border" />
        <span className="h-7 w-7 rounded-md bg-text/80" />
        <span className="h-7 w-7 rounded-md bg-text/20" />
      </motion.div>
      <motion.div variants={gBlock} className="flex items-end gap-3">
        <span className="font-anton text-4xl uppercase leading-none text-text/30">Aa</span>
        <div className="flex flex-1 flex-col gap-1.5 pb-1">
          <span className="h-2 w-[70%] rounded-full bg-text/15" />
          <span className="h-1.5 w-[50%] rounded-full bg-text/10" />
        </div>
      </motion.div>
    </div>
  );
}
