import Link from "next/link";
import Image from "next/image";
import { LOCATIONS } from "@/lib/locations";

const STUDIO_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Free Audit", href: "/audit" },
];

const WORK_LINKS = [
  { label: "Devon Nurseries", href: "/devon-nurseries" },
  { label: "Tend", href: "/tend" },
  { label: "Chair", href: "/chair" },
  // CHAZZMN — deferred until its rebuild is live.
  // The Unaffiliated — removed (past client).
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/charged.studio/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/charged-studio/" },
];

const EMAIL = "hello@chargedstudio.co.uk";
const PHONE_DISPLAY = "+44 7453 388798";
const PHONE_HREF = "+447453388798";

const headingClass =
  "font-inter text-xs font-semibold uppercase tracking-wider text-text/50";
const linkClass =
  "font-inter text-sm text-text/70 transition-colors hover:text-text";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" aria-label="Charged Studio — home" className="inline-block">
              <Image
                src="/logo.svg"
                alt="Charged Studio"
                width={104}
                height={40}
                unoptimized
                className="h-7 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs font-inter text-sm leading-relaxed text-text/70">
              Built to perform. Charged to last. Websites, software, and digital
              presence for businesses ready to grow.
            </p>
            <p className="mt-4 font-inter text-sm text-text/60">
              Exeter, Devon — working across the UK
            </p>
            <p className={`mt-5 ${headingClass}`}>Web design across the South West</p>
            <p className="mt-2 font-inter text-sm leading-relaxed text-text/70">
              {LOCATIONS.map((l, i) => (
                <span key={l.slug}>
                  {i > 0 && <span className="text-text/30"> · </span>}
                  <Link href={`/${l.slug}`} className="transition-colors hover:text-text">
                    {l.place}
                  </Link>
                </span>
              ))}
            </p>
          </div>

          {/* Studio */}
          <nav className="md:col-span-2" aria-label="Studio">
            <h2 className={headingClass}>Studio</h2>
            <ul className="mt-4 space-y-3">
              {STUDIO_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Work */}
          <nav className="md:col-span-2" aria-label="Work">
            <h2 className={headingClass}>Work</h2>
            <ul className="mt-4 space-y-3">
              {WORK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div className="md:col-span-2">
            <h2 className={headingClass}>Connect</h2>
            <ul className="mt-4 space-y-3">
              {SOCIALS.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${EMAIL}`} className={linkClass}>
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_HREF}`} className={linkClass}>
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <nav className="md:col-span-2" aria-label="Legal">
            <h2 className={headingClass}>Legal</h2>
            <ul className="mt-4 space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-inter text-xs text-text/50">
            © {year} Charged Studio. All rights reserved.
          </p>
          <Link
            href="/start-a-project"
            className="font-inter text-xs font-semibold uppercase tracking-widest text-accent transition-opacity hover:opacity-80"
          >
            Start a Project →
          </Link>
        </div>
      </div>
    </footer>
  );
}
