"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  gContainer,
  gBlock,
  WebsiteGraphic,
  SearchGraphic,
  SoftwareGraphic,
  BrandingGraphic,
} from "@/components/graphics";

/**
 * HeroMockup — the looping content inside the hero's browser frame.
 * Tells the Charged story in five coded scenes:
 *   0 "Coming soon" → 1 Website builds in → 2 SEO / ranking →
 *   3 Software / dashboard → 4 Branding → (loop). Elements stagger in per scene.
 * Pure code, no asset. Reduced-motion holds the Website scene statically.
 */

const SCENE_MS = 2800;
const SCENES = 5;

export default function HeroMockup() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setPhase(1);
      return;
    }
    const id = setInterval(() => setPhase((p) => (p + 1) % SCENES), SCENE_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  function Scene({ active, children }: { active: boolean; children: ReactNode }) {
    return (
      <motion.div
        aria-hidden
        variants={gContainer}
        initial="hidden"
        animate={active ? "show" : "hidden"}
        className="absolute inset-0"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className="absolute inset-0">
      {/* 0 — Coming soon */}
      <Scene active={phase === 0}>
        <div className="flex h-full w-full flex-col items-center justify-center gap-3">
          <motion.span variants={gBlock} className="font-caramel text-7xl text-text/10 sm:text-8xl">
            charged
          </motion.span>
          <motion.span
            variants={gBlock}
            className="font-inter text-[10px] font-semibold uppercase tracking-[0.25em] text-text/30"
          >
            Coming soon
          </motion.span>
        </div>
      </Scene>

      {/* 1 — Website */}
      <Scene active={phase === 1}>
        <WebsiteGraphic />
      </Scene>

      {/* 2 — SEO / ranking */}
      <Scene active={phase === 2}>
        <SearchGraphic />
      </Scene>

      {/* 3 — Software / dashboard */}
      <Scene active={phase === 3}>
        <SoftwareGraphic />
      </Scene>

      {/* 4 — Branding */}
      <Scene active={phase === 4}>
        <BrandingGraphic />
      </Scene>
    </div>
  );
}
