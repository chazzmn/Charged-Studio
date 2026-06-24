"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/**
 * Defers the chatbot so it never blocks the initial page load — and skips it
 * entirely on phones (no chunk downloaded at all) for mobile performance.
 * On tablet/desktop (>= 768px) it loads once the browser is idle.
 */
const Chatbot = dynamic(() => import("@/components/Chatbot"), { ssr: false });

const DESKTOP = "(min-width: 768px)";

export default function ChatbotLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP);

    const loadWhenIdle = () => {
      const w = window as typeof window & {
        requestIdleCallback?: (cb: () => void) => number;
      };
      if (typeof w.requestIdleCallback === "function") {
        w.requestIdleCallback(() => setShow(true));
      } else {
        setTimeout(() => setShow(true), 1500);
      }
    };

    if (mql.matches) {
      loadWhenIdle();
      return;
    }

    // Phone: don't load now. If the viewport grows to desktop, load then.
    const onChange = () => {
      if (mql.matches) {
        loadWhenIdle();
        mql.removeEventListener("change", onChange);
      }
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return show ? <Chatbot /> : null;
}
