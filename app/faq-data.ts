/**
 * Homepage FAQ — single source of truth, shared by the FAQ section
 * (components/FAQ.tsx) and the FAQPage JSON-LD on the homepage (AEO).
 */
export type QA = { q: string; a: string };

export const HOME_FAQS: QA[] = [
  {
    q: "What does Charged actually do?",
    a: "We're a creative studio specialising in websites, software, and digital presence. We work with businesses at every stage — from founders building their identity to established companies ready to grow. Whatever you need to look sharper, get found, and win more customers, we build it.",
  },
  {
    q: "How does the process work?",
    a: "We keep it simple. It starts with a short conversation to understand your business, goals, and vision. From there we put together a clear proposal and get to work — and you're involved at every key stage, with structured feedback points so nothing gets signed off until it's right.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on scope, but most website projects are delivered within 2–4 weeks. We move quickly without cutting corners, and we'll always give you a clear timeline upfront so you know exactly what to expect.",
  },
  {
    q: "What if I'm not happy with the work?",
    a: "That rarely happens — because we don't guess. Every project starts with a deep-dive into your vision so we're aligned before anything gets built. If something isn't landing right, you tell us and we refine it. Your satisfaction is the only finish line.",
  },
];
