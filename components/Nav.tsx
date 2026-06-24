"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

/** Primary nav links. Blog is intentionally footer-only (SEO, not nav). */
const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
] as const;

const CTA = { label: "Start a Project", href: "/start-a-project" } as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Transparent at the top, solid once the user scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Charged Studio — home"
          className="relative z-50 shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.svg"
            alt="Charged Studio"
            width={104}
            height={40}
            preload
            unoptimized
            className="h-6 w-auto md:h-7"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-inter text-sm font-medium text-text/80 transition-colors hover:text-text"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href={CTA.href} size="sm">
            {CTA.label}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-text transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-text transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-0.5 w-6 bg-text transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>
    </header>

      {/* Mobile menu — full-screen opaque overlay. Kept OUTSIDE <header> so the
          header's backdrop-blur doesn't trap this fixed element in a containing
          block (which would collapse the full-screen background). */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-bg transition-opacity duration-200 ease-out md:hidden motion-reduce:transition-none ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-24">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="block py-3 font-anton text-3xl uppercase text-text transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <Button href={CTA.href} onClick={() => setOpen(false)} className="w-full">
              {CTA.label}
            </Button>
            <div className="mt-6 font-inter text-sm text-text/60">
              <a
                href="mailto:hello@chargedstudio.co.uk"
                className="block transition-colors hover:text-accent"
              >
                hello@chargedstudio.co.uk
              </a>
              <span className="mt-1 block">Exeter, Devon — South West UK</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
