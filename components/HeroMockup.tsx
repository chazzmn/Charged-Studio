"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * HeroMockup — the looping content inside the hero's browser frame.
 * Cycles: "Coming soon" → a Charged-style website assembles in (staggered) →
 * holds → fades back to "Coming soon". Pure code, no asset. Reduced-motion
 * shows the finished layout statically.
 */

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};
const block: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroMockup() {
  const reduceMotion = useReducedMotion();
  const [built, setBuilt] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setBuilt(true);
      return;
    }
    const id = setInterval(() => setBuilt((b) => !b), 3200);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="absolute inset-0">
      {/* Coming soon */}
      <motion.div
        aria-hidden
        animate={{ opacity: built ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-3"
      >
        <span className="font-caramel text-7xl text-text/10 sm:text-8xl">
          charged
        </span>
        <span className="font-inter text-[10px] font-semibold uppercase tracking-[0.25em] text-text/30">
          Coming soon
        </span>
      </motion.div>

      {/* Website graphic that builds in */}
      <motion.div
        aria-hidden
        variants={container}
        initial={reduceMotion ? "show" : "hidden"}
        animate={built ? "show" : "hidden"}
        className="absolute inset-0 flex flex-col gap-3 p-4 sm:gap-3.5 sm:p-5"
      >
        {/* Nav */}
        <motion.div variants={block} className="flex items-center justify-between">
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

        {/* Hero row */}
        <div className="grid flex-1 grid-cols-5 gap-3">
          <div className="col-span-3 flex flex-col justify-center gap-2.5">
            <motion.div variants={block} className="h-3 w-[88%] rounded bg-text/25" />
            <motion.div variants={block} className="h-3 w-[62%] rounded bg-text/25" />
            <motion.div variants={block} className="mt-1 h-1.5 w-[72%] rounded-full bg-text/10" />
            <motion.div variants={block} className="mt-2 h-5 w-20 rounded-md bg-accent" />
          </div>
          <motion.div
            variants={block}
            className="col-span-2 rounded-lg bg-surface-raised ring-1 ring-border"
          />
        </div>

        {/* Card row */}
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              variants={block}
              className="h-8 rounded-md bg-surface-raised ring-1 ring-border sm:h-9"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
