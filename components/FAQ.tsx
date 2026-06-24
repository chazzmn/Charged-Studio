"use client";

import { useState } from "react";
import Badge from "@/components/Badge";
import { HOME_FAQS as FAQS } from "@/app/faq-data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto w-full max-w-3xl px-6 py-24 md:py-32">
      <div className="text-center">
        <Badge>FAQ</Badge>
        <h2 className="mt-5 font-anton text-3xl uppercase leading-tight text-text sm:text-4xl lg:text-5xl">
          Questions, answered.
        </h2>
      </div>

      <div className="mt-12 divide-y divide-border border-y border-border">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-inter text-lg font-semibold text-text">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`shrink-0 text-2xl text-accent transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* CSS height animation via grid-template-rows (no JS animation lib) */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 font-inter text-base leading-relaxed text-text/70">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
