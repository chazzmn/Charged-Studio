"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveal — fades content up as it scrolls into view, using a tiny
 * IntersectionObserver + CSS (see globals.css). Replaces framer-motion's
 * `whileInView` with a fraction of the JavaScript. Reduced-motion users get
 * the final state instantly (the CSS transitions are gated to no-preference).
 *
 * `stagger` cascades the direct children in one after another.
 */
export default function Reveal({
  children,
  className = "",
  stagger = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  as?: "div" | "section" | "ul" | "li";
}) {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = stagger ? "reveal-stagger" : "reveal";

  return (
    // @ts-expect-error — Tag is a known intrinsic element; ref typing is fine at runtime.
    <Tag ref={ref} className={`${base}${seen ? " in" : ""} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
