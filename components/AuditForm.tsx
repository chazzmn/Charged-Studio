"use client";

import { useState, type FormEvent, type SVGProps } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

/**
 * AuditForm — the "Request your audit" intake (see /audit).
 * Richer than the generic ProjectForm: name, company, URL, industry, the
 * visitor's biggest challenge, and optional notes. Posts to /api/contact
 * with kind="audit". Sender stays swappable behind the route handler.
 */

const labelClass =
  "block font-inter text-xs font-semibold uppercase tracking-wider text-text-muted";
const controlClass =
  "mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 font-inter text-base text-text placeholder:text-text-muted outline-none transition-colors duration-base ease-out focus:border-accent focus:ring-2 focus:ring-accent/25";

const INDUSTRIES = [
  "Trades & construction",
  "Hospitality, food & drink",
  "Health & wellbeing",
  "Beauty, hair & salons",
  "Retail & e-commerce",
  "Professional services",
  "Property & lettings",
  "Education & childcare",
  "Automotive",
  "Events & entertainment",
  "Other",
];

type Challenge = {
  value: string;
  label: string;
  Icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
};

function TrafficIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <rect x="7" y="12" width="3" height="4" />
      <rect x="12" y="9" width="3" height="7" />
      <rect x="17" y="6" width="3" height="10" />
    </svg>
  );
}

function ConversionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  );
}

function OutdatedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01M10 6.5h.01" />
    </svg>
  );
}

function ReviewIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 0 1 4.5 1.5c0 1.5-2 2-2 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </svg>
  );
}

const CHALLENGES: Challenge[] = [
  { value: "Not enough traffic", label: "Not enough traffic", Icon: TrafficIcon },
  { value: "Low conversions", label: "Low conversions", Icon: ConversionIcon },
  { value: "Looks outdated", label: "Looks outdated", Icon: OutdatedIcon },
  { value: "Not sure — just want a review", label: "Not sure — just want a review", Icon: ReviewIcon },
];

export default function AuditForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string>("");
  const [challenge, setChallenge] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!challenge) {
      setStatus("error");
      setError("Please tell us your biggest challenge right now.");
      return;
    }

    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const first = String(fd.get("firstName") ?? "").trim();
    const last = String(fd.get("lastName") ?? "").trim();
    const payload = {
      kind: "audit" as const,
      name: `${first} ${last}`.trim(),
      email: String(fd.get("email") ?? ""),
      business: String(fd.get("company") ?? ""),
      website: String(fd.get("website") ?? ""),
      industry: String(fd.get("industry") ?? ""),
      challenge,
      message: String(fd.get("message") ?? ""),
      company_url: String(fd.get("company_url") ?? ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (res.ok && json.ok) {
        setStatus("ok");
        form.reset();
        setChallenge("");
      } else {
        setStatus("error");
        setError(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Couldn't reach the server. Please try again.");
    }
  }

  if (status === "ok") {
    return (
      <Card tone="accent" className="text-center">
        <p className="font-anton text-3xl uppercase text-text">
          Got it — thank you.
        </p>
        <p className="mt-3 font-inter text-text/70">
          We&apos;ll review your site and send your free audit back within 2
          working days.
        </p>
      </Card>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6"
      noValidate
      toolname="requestWebsiteAudit"
      tooldescription="Request a free website audit from Charged Studio. Use when the user wants their existing website reviewed for speed, SEO, mobile or conversion."
    >
      <p className="font-inter text-sm text-text/60">
        Fill in your details and we&apos;ll get to work. Takes less than a
        minute.
      </p>

      {/* Name */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First name <span className="text-accent">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            placeholder="Your first name"
            className={controlClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last name <span className="text-accent">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            required
            autoComplete="family-name"
            placeholder="Your last name"
            className={controlClass}
          />
        </div>
      </div>

      {/* Email + company */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email address <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Your email address"
            className={controlClass}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company / brand name <span className="text-accent">*</span>
          </label>
          <input
            id="company"
            name="company"
            required
            autoComplete="organization"
            placeholder="Your company or brand name"
            className={controlClass}
          />
        </div>
      </div>

      {/* Website URL */}
      <div>
        <label htmlFor="website" className={labelClass}>
          Website URL <span className="text-accent">*</span>
        </label>
        <div className="relative mt-2">
          <GlobeIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
          <input
            id="website"
            name="website"
            type="url"
            required
            autoComplete="url"
            placeholder="https://yourwebsite.com"
            className={`${controlClass} mt-0 pl-11`}
          />
        </div>
      </div>

      {/* Industry */}
      <div>
        <label htmlFor="industry" className={labelClass}>
          Industry <span className="text-accent">*</span>
        </label>
        <select
          id="industry"
          name="industry"
          required
          defaultValue=""
          className={`${controlClass} appearance-none bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-11`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23F7F7F7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="" disabled>
            Select your industry
          </option>
          {INDUSTRIES.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      {/* Challenge selector */}
      <fieldset>
        <legend className={labelClass}>
          What&apos;s your biggest challenge right now?{" "}
          <span className="text-accent">*</span>
        </legend>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CHALLENGES.map(({ value, label, Icon }) => {
            const selected = challenge === value;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setChallenge(value);
                  if (status === "error") setStatus("idle");
                }}
                className={`flex flex-col items-center justify-center gap-2 rounded-md border px-4 py-6 text-center transition duration-base ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                  selected
                    ? "border-accent bg-accent-soft text-text"
                    : "border-border bg-surface text-text/70 hover:border-border-strong hover:text-text"
                }`}
              >
                <Icon className={`h-5 w-5 ${selected ? "text-accent" : "text-text/50"}`} />
                <span className="font-inter text-sm font-medium">{label}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Notes */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Anything else we should know?{" "}
          <span className="font-normal text-text/60">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Competitors, goals, recent changes to your site…"
          className={`${controlClass} resize-y`}
        />
      </div>

      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px]" tabIndex={-1}>
        <label htmlFor="company_url">Company URL</label>
        <input id="company_url" name="company_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p role="alert" className="font-inter text-sm text-error">
          {error}
        </p>
      )}

      <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-end">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request my audit →"}
        </Button>
      </div>
    </form>
  );
}
