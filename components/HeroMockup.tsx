"use client";

import { useEffect, useState } from "react";
import {
  WebsiteGraphic,
  SearchGraphic,
  SoftwareGraphic,
  BrandingGraphic,
} from "@/components/graphics";

/**
 * HeroMockup — the looping content inside the hero's browser frame.
 * Five coded scenes: Coming soon → Website → SEO/ranking → Software → Branding.
 * Scene crossfade + per-element build-in are pure CSS (opacity + .reveal-stagger);
 * only a small phase timer is JS. Reduced-motion holds the Website scene.
 */

const SCENE_MS = 2800;
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
    `absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:transition-none ${
      phase === i ? "opacity-100" : "opacity-0 pointer-events-none"
    }`;

  return (
    <div className="absolute inset-0" aria-hidden>
      {/* 0 — Coming soon */}
      <div className={scene(0)}>
        <div
          className={`reveal-stagger${phase === 0 ? " in" : ""} flex h-full w-full flex-col items-center justify-center gap-3`}
        >
          <span className="font-anton text-6xl uppercase text-text/10 sm:text-7xl">charged</span>
          <span className="font-inter text-[10px] font-semibold uppercase tracking-[0.25em] text-text/50">
            Coming soon
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
    </div>
  );
}
