"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import Badge from "@/components/Badge";

/**
 * Shared wrapper for legal pages (privacy, terms). Pages write clean semantic
 * markup (h2 / p / ul / a); this styles it and auto-builds a sticky table of
 * contents from the <h2> headings, so both pages stay consistent and readable.
 */
type TocItem = { id: string; label: string };

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [toc, setToc] = useState<TocItem[]>([]);

  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll("h2")).map((h) => {
      const label = h.textContent ?? "";
      const id = slugify(label);
      h.id = id;
      return { id, label };
    });
    setToc(items);
  }, []);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-32 md:pt-40">
      {/* Header */}
      <div className="max-w-3xl">
        <Badge>Legal</Badge>
        <h1 className="mt-5 font-anton text-4xl uppercase leading-[0.95] text-text sm:text-5xl">
          {title}
        </h1>
        <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-inter text-xs text-text/60">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          Last updated {updated}
        </span>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        {/* Table of contents (desktop) */}
        <aside className="hidden lg:block">
          {toc.length > 0 && (
            <nav aria-label="On this page" className="sticky top-28">
              <p className="font-inter text-xs font-semibold uppercase tracking-wider text-text/40">
                On this page
              </p>
              <ul className="mt-4 space-y-2.5 border-l border-border">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="-ml-px block border-l-2 border-transparent pl-4 font-inter text-sm leading-snug text-text/55 transition-colors hover:border-accent hover:text-text"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </aside>

        {/* Content */}
        <div
          ref={contentRef}
          className="max-w-2xl font-inter [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-12 [&_h2]:scroll-mt-28 [&_h2]:border-t [&_h2]:border-border [&_h2]:pt-8 [&_h2]:font-anton [&_h2]:text-xl [&_h2]:uppercase [&_h2]:text-text [&_li]:leading-relaxed [&_li]:text-text/70 [&_li]:marker:text-accent [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-text/70 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&>p:first-of-type]:text-lg [&>p:first-of-type]:text-text/80"
        >
          {children}

          {/* Closing contact note */}
          <div className="mt-12 rounded-xl border border-border bg-surface/40 p-6">
            <p className="m-0 font-inter text-sm leading-relaxed text-text/70">
              Questions about this? Email{" "}
              <a
                href="mailto:hello@chargedstudio.co.uk"
                className="text-accent underline underline-offset-2"
              >
                hello@chargedstudio.co.uk
              </a>{" "}
              and a real person will get back to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
