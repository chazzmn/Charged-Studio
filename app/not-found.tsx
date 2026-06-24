import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import { BoltMark } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found — Charged Studio",
  description:
    "The page you're looking for doesn't exist or has moved. Head back home or explore what Charged Studio can do.",
  robots: { index: false, follow: true },
};

const QUICK_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Free website audit", href: "/audit" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="relative mx-auto flex min-h-[85vh] w-full max-w-3xl flex-col items-center justify-center px-6 py-32 text-center">
      {/* Decorative glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />
      </div>

      <Badge>Lost the signal</Badge>

      <h1 className="mt-6 flex items-center justify-center gap-3 font-anton text-7xl uppercase leading-none text-text sm:text-8xl">
        4
        <BoltMark className="h-14 w-14 text-accent sm:h-16 sm:w-16" />
        4
      </h1>

      <p className="mt-6 max-w-md font-inter text-lg leading-relaxed text-text/70">
        This page doesn&apos;t exist or has moved. No charge lost — let&apos;s get
        you back on track.
      </p>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button href="/">Back to home</Button>
        <Button href="/start-a-project" variant="secondary">
          Start a Project
        </Button>
      </div>

      <nav
        aria-label="Popular pages"
        className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
      >
        {QUICK_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-inter text-sm font-medium text-text/60 underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
