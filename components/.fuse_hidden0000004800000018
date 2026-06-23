import type { ReactNode } from "react";
import Badge from "@/components/Badge";

/**
 * Shared wrapper for legal pages. Styles the semantic content (h2/p/ul/a)
 * via descendant utilities so each page can just write clean markup.
 */
export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 pb-24 pt-32 md:pt-40">
      <Badge>Legal</Badge>
      <h1 className="mt-5 font-anton text-4xl uppercase leading-[0.95] text-charged-light sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 font-inter text-sm text-charged-light/50">
        Last updated: {updated}
      </p>
      <div className="mt-10 font-inter [&_a]:text-charged-yellow [&_a]:underline [&_h2]:mt-10 [&_h2]:font-anton [&_h2]:text-xl [&_h2]:uppercase [&_h2]:text-charged-light [&_li]:leading-relaxed [&_li]:text-charged-light/70 [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-charged-light/70 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </div>
    </section>
  );
}
