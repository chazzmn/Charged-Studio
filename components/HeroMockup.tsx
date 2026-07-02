"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  WebsiteGraphic,
  SearchGraphic,
  SoftwareGraphic,
  BrandingGraphic,
} from "@/components/graphics";

/**
 * HeroMockup — the looping content inside the hero's browser frame.
 * Five coded scenes: Brand reveal → Website → SEO → Software → Branding, then loop.
 * Scene 0 opens on the Charged wordmark (the brand, before the site builds), then
 * the journey plays through what we do. Scene crossfade adds a subtle scale so it
 * feels alive; per-element build-in is CSS (.reveal-stagger). Only a small phase
 * timer is JS. Reduced-motion holds the Website scene (the most on-message frame).
 */

const SCENE_MS = 4500;
const SCENES = 5;

export default function HeroMockup() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPhase(1);
      return;
    }
    const id = setInterval(() => setPhase((p) => (p + 1) % SCENES), SCENE_MS);
    return () => clearInterval(id);
  }, []);

  const scene = (i: number) =>
    `absolute inset-0 transition-[opacity,transform] duration-[800ms] ease-out motion-reduce:transition-none ${
      phase === i
        ? "opacity-100 scale-100"
        : "opacity-0 scale-[0.98] pointer-events-none"
    }`;

  return (
    <div className="absolute inset-0" aria-hidden>
      {/* 0 — Brand reveal (the Charged wordmark on a clean page, before the build) */}
      <div className={scene(0)}>
        <div
          className={`reveal-stagger${phase === 0 ? " in" : ""} flex h-full w-full flex-col items-center justify-center gap-4`}
        >
          <Image
            src="/logo.svg"
            alt=""
            width={240}
            height={92}
            unoptimized
            className="h-9 w-auto sm:h-11"
          />
          <span className="h-0.5 w-14 rounded-full bg-accent" />
          <span className="font-inter text-[9px] font-semibold uppercase tracking-[0.28em] text-text/40 sm:text-[10px]">
            Built to perform. Charged to last.
          </span>
        </div>
      </div>

      {/* 1 — Website */}
      <div className={scene(1)}>
        <WebsiteGraphic show={phase === 1} />
      </div>

      {/* 2 — SEO / ranking */}
      <div className={scene(2)}>
        <SearchGraphic show={phase === 2} />
      </div>

      {/* 3 — Software / dashboard */}
      <div className={scene(3)}>
        <SoftwareGraphic show={phase === 3} />
      </div>

      {/* 4 — Branding */}
      <div className={scene(4)}>
        <BrandingGraphic show={phase === 4} />
      </div>

      {/* Progress dots — the active scene stretches to an accent pill, so the
          reel reads as a deliberate journey that loops. */}
      <div className="absolute inset-x-0 bottom-2.5 flex items-center justify-center gap-1.5">
        {Array.from({ length: SCENES }).map((_, i) => (
          <span
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ease-out ${
              phase === i ? "w-4 bg-accent" : "w-1 bg-text/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
