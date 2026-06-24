"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Button from "@/components/Button";

/**
 * Cookie consent (UK GDPR / PECR). Analytics cookies need PRIOR consent, so
 * Google Analytics is not loaded until the visitor accepts. The choice is
 * remembered; the banner only reappears if no choice has been made.
 *
 * One component owns both the banner and the conditional GA load so there's no
 * context to wire up. GA only loads in production + when consent === "accepted".
 */

const STORAGE_KEY = "charged-cookie-consent";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-9P8NYQN0KQ";

type Consent = "accepted" | "rejected";

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "accepted" || saved === "rejected") setConsent(saved);
    } catch {
      /* localStorage unavailable — treat as undecided */
    }
  }, []);

  function choose(value: Consent) {
    setConsent(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
  }

  const showBanner = mounted && consent === null;
  const loadGA = mounted && consent === "accepted" && process.env.NODE_ENV === "production";

  return (
    <>
      {/* Google Analytics — only after consent, only in production */}
      {loadGA && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {/* Consent banner */}
      {showBanner && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-md rounded-xl border border-border bg-surface p-5 shadow-e2 sm:left-4 sm:right-auto"
        >
          <p className="font-inter text-sm leading-relaxed text-text/80">
            We use a few cookies to understand how the site is used and make it
            better. Nothing creepy. See our{" "}
            <Link href="/privacy" className="text-accent underline-offset-2 hover:underline">
              privacy policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button size="sm" onClick={() => choose("accepted")} className="sm:flex-1">
              Accept
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => choose("rejected")}
              className="sm:flex-1"
            >
              Decline
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
