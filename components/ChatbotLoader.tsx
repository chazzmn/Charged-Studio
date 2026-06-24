"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/**
 * Defers the chatbot so it never blocks the initial page load (big win on
 * mobile). It's excluded from SSR and only mounted once the browser is idle,
 * so the launcher appears a moment after the page is interactive.
 */
const Chatbot = dynamic(() => import("@/components/Chatbot"), { ssr: false });

export default function ChatbotLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const w = window as typeof window & {
      requestIdleCallback?: (cb: () => void) => number;
    };
    if (typeof w.requestIdleCallback === "function") {
      w.requestIdleCallback(() => setShow(true));
    } else {
      const t = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  return show ? <Chatbot /> : null;
}
