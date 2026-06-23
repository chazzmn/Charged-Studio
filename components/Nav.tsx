"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/** Primary nav links. Edit here to add/remove top-level destinations. */
// Blog is intentionally NOT in the nav — it lives in the footer for SEO
// (crawlable + sitewide internal link) while the nav stays conversion-focused.
const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
] as const;

const CTA = { label: "Start a Project", href: "/start-a-project" } as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-charged-black/80 backdrop-blur-md"
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
                  className="font-inter text-sm font-medium text-charged-light/80 transition-colors hover:text-charged-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={CTA.href}
            className="bg-white px-6 py-3 font-inter text-sm font-bold uppercase tracking-widest text-charged-black transition-colors hover:bg-neutral-200"
          >
            {CTA.label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-charged-light transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-charged-light transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-charged-light transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-white/10 bg-charged-black/95 backdrop-blur-md md:hidden"
          >
            <ul className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-anton text-2xl uppercase text-charged-light transition-colors hover:text-charged-yellow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  href={CTA.href}
                  onClick={() => setOpen(false)}
                  className="block bg-white px-6 py-4 text-center font-inter text-sm font-bold uppercase tracking-widest text-charged-black transition-colors hover:bg-neutral-200"
                >
                  {CTA.label}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
