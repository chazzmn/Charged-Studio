"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { CheckCircle } from "@/components/icons";

/**
 * ProjectWizard — the multi-step "Start a Project" intake.
 * Four steps: what you need → your project → budget & timeline → about you.
 * Validates per step, preserves answers across steps, and posts the whole
 * brief to /api/contact (kind="project"). Field lists below are easy to edit.
 */

const labelClass =
  "block font-inter text-xs font-semibold uppercase tracking-wider text-text-muted";
const controlClass =
  "mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 font-inter text-base text-text placeholder:text-text-muted outline-none transition-colors duration-base ease-out focus:border-accent focus:ring-2 focus:ring-accent/25";

const SERVICES = [
  "Website",
  "Software / app",
  "SEO & getting found",
  "Branding & creative",
  "Not sure yet",
];
const PROJECT_TYPES = [
  "Brand-new build",
  "Redesign of an existing site",
  "Ongoing support / retainer",
  "Something else",
];
const BUDGETS = ["£1k–£3k", "£3k–£5k", "£5k–£10k", "£10k+", "Not sure yet"];
const TIMELINES = ["As soon as possible", "1–3 months", "3–6 months", "Just exploring"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const STEPS = ["What you need", "Your project", "Budget & timeline", "About you"];

type Data = {
  services: string[];
  projectType: string;
  description: string;
  website: string;
  budget: string;
  timeline: string;
  firstName: string;
  lastName: string;
  email: string;
  business: string;
  phone: string;
};

const EMPTY: Data = {
  services: [],
  projectType: "",
  description: "",
  website: "",
  budget: "",
  timeline: "",
  firstName: "",
  lastName: "",
  email: "",
  business: "",
  phone: "",
};

/** Selectable card — toggle (multi) or radio (single). */
function Choice({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`flex items-center justify-between gap-3 rounded-md border px-4 py-3.5 text-left font-inter text-sm font-medium transition duration-base ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
        selected
          ? "border-accent bg-accent-soft text-text"
          : "border-border bg-surface text-text/70 hover:border-border-strong hover:text-text"
      }`}
    >
      {label}
      {selected && <CheckCircle className="h-4 w-4 shrink-0 text-accent" />}
    </button>
  );
}

export default function ProjectWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  function update<K extends keyof Data>(key: K, value: Data[K]) {
    setData((d) => ({ ...d, [key]: value }));
    if (error) setError("");
  }

  function toggleService(s: string) {
    setData((d) => ({
      ...d,
      services: d.services.includes(s)
        ? d.services.filter((x) => x !== s)
        : [...d.services, s],
    }));
    if (error) setError("");
  }

  function validateStep(): string | null {
    if (step === 0 && data.services.length === 0)
      return "Pick at least one — or choose “Not sure yet”.";
    if (step === 1) {
      if (!data.projectType) return "Let us know what kind of project this is.";
      if (!data.description.trim()) return "A sentence or two about the project helps a lot.";
    }
    if (step === 2) {
      if (!data.budget) return "Give us a rough budget — “Not sure yet” is fine.";
      if (!data.timeline) return "Roughly when are you hoping to start?";
    }
    if (step === 3) {
      if (!data.firstName.trim() || !data.lastName.trim())
        return "Please add your name.";
      if (!EMAIL_RE.test(data.email)) return "Please enter a valid email.";
      if (!data.business.trim()) return "Please add your business name.";
    }
    return null;
  }

  function next() {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    setError("");
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function back() {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
  }

  async function submit() {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    setStatus("sending");
    setError("");

    const payload = {
      kind: "project" as const,
      name: `${data.firstName} ${data.lastName}`.trim(),
      email: data.email,
      business: data.business,
      website: data.website,
      phone: data.phone,
      services: data.services.join(", "),
      projectType: data.projectType,
      budget: data.budget,
      timeline: data.timeline,
      message: data.description,
      company_url: "", // honeypot — left empty by humans
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
          Brief received — thank you.
        </p>
        <p className="mt-3 font-inter text-text/70">
          We&apos;ll read every word and get back to you within one working day.
        </p>
      </Card>
    );
  }

  const isLast = step === STEPS.length - 1;

  return (
    <div>
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between font-inter text-xs font-semibold uppercase tracking-wider">
          <span className="text-accent">{STEPS[step]}</span>
          <span className="text-text/50">
            Step {step + 1} of {STEPS.length}
          </span>
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface">
          <div
            className="h-full rounded-full bg-accent transition-all duration-base ease-out"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Steps */}
      {step === 0 && (
        <fieldset>
          <legend className="font-inter text-lg font-bold text-text">
            What do you need a hand with?
          </legend>
          <p className="mt-1 font-inter text-sm text-text/60">
            Pick everything that applies.
          </p>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <Choice
                key={s}
                label={s}
                selected={data.services.includes(s)}
                onClick={() => toggleService(s)}
              />
            ))}
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <div className="space-y-6">
          <fieldset>
            <legend className="font-inter text-lg font-bold text-text">
              What kind of project is it?
            </legend>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {PROJECT_TYPES.map((t) => (
                <Choice
                  key={t}
                  label={t}
                  selected={data.projectType === t}
                  onClick={() => update("projectType", t)}
                />
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="description" className={labelClass}>
              Tell us about it <span className="text-accent">*</span>
            </label>
            <textarea
              id="description"
              rows={4}
              value={data.description}
              onChange={(e) => update("description", e.target.value)}
              placeholder="What are you trying to achieve? Anything you love or hate about your current setup?"
              className={`${controlClass} resize-y`}
            />
          </div>

          <div>
            <label htmlFor="website" className={labelClass}>
              Current website{" "}
              <span className="font-normal text-text/40">(optional)</span>
            </label>
            <input
              id="website"
              type="url"
              value={data.website}
              onChange={(e) => update("website", e.target.value)}
              placeholder="https://yourwebsite.com"
              className={controlClass}
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <fieldset>
            <legend className="font-inter text-lg font-bold text-text">
              Rough budget?
            </legend>
            <p className="mt-1 font-inter text-sm text-text/60">
              Ballpark only — it helps us recommend the right approach.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {BUDGETS.map((b) => (
                <Choice
                  key={b}
                  label={b}
                  selected={data.budget === b}
                  onClick={() => update("budget", b)}
                />
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-inter text-lg font-bold text-text">
              When do you want to start?
            </legend>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {TIMELINES.map((t) => (
                <Choice
                  key={t}
                  label={t}
                  selected={data.timeline === t}
                  onClick={() => update("timeline", t)}
                />
              ))}
            </div>
          </fieldset>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className={labelClass}>
                First name <span className="text-accent">*</span>
              </label>
              <input
                id="firstName"
                autoComplete="given-name"
                value={data.firstName}
                onChange={(e) => update("firstName", e.target.value)}
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
                autoComplete="family-name"
                value={data.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                placeholder="Your last name"
                className={controlClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@business.co.uk"
                className={controlClass}
              />
            </div>
            <div>
              <label htmlFor="business" className={labelClass}>
                Business name <span className="text-accent">*</span>
              </label>
              <input
                id="business"
                autoComplete="organization"
                value={data.business}
                onChange={(e) => update("business", e.target.value)}
                placeholder="Your business or brand"
                className={controlClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone <span className="font-normal text-text/40">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={data.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="So we can call if it's easier"
              className={controlClass}
            />
          </div>
        </div>
      )}

      {error && (
        <p role="alert" className="mt-5 font-inter text-sm text-error">
          {error}
        </p>
      )}

      {/* Nav */}
      <div className="mt-8 flex items-center justify-between gap-4">
        {step > 0 ? (
          <Button variant="ghost" size="sm" onClick={back}>
            ← Back
          </Button>
        ) : (
          <span />
        )}

        {isLast ? (
          <Button onClick={submit} disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send project brief →"}
          </Button>
        ) : (
          <Button onClick={next}>Continue →</Button>
        )}
      </div>
    </div>
  );
}
