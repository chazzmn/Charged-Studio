"use client";

import { useState, type FormEvent } from "react";

type Kind = "project" | "audit";

const labelClass =
  "block font-inter text-xs font-semibold uppercase tracking-wider text-charged-light/60";
const inputClass =
  "mt-2 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 font-inter text-base text-charged-light placeholder:text-charged-light/30 outline-none transition-colors focus:border-charged-yellow/70 focus:bg-white/[0.07]";

export default function ProjectForm({ kind = "project" }: { kind?: Kind }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      kind,
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      business: String(fd.get("business") ?? ""),
      website: String(fd.get("website") ?? ""),
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
      <div className="rounded-lg border border-charged-yellow/30 bg-charged-yellow/5 p-8 text-center">
        <p className="font-anton text-3xl uppercase text-charged-light">
          Got it — thank you.
        </p>
        <p className="mt-3 font-inter text-charged-light/70">
          {kind === "audit"
            ? "We'll review your site and get back to you within 2 working days."
            : "We'll be in touch within 1 working day to talk through your project."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className={labelClass}>
          Your name
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>

      {kind === "audit" ? (
        <div>
          <label htmlFor="website" className={labelClass}>
            Your website address
          </label>
          <input
            id="website"
            name="website"
            type="text"
            required
            placeholder="yourbusiness.co.uk"
            className={inputClass}
          />
        </div>
      ) : (
        <>
          <div>
            <label htmlFor="business" className={labelClass}>
              Business name <span className="text-charged-light/30">(optional)</span>
            </label>
            <input id="business" name="business" type="text" className={inputClass} />
          </div>
          <div>
            <label htmlFor="message" className={labelClass}>
              What do you need?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="A new website, a redesign, help getting found on Google…"
              className={`${inputClass} resize-y`}
            />
          </div>
        </>
      )}

      {/* Honeypot — hidden from humans, catches bots */}
      <div aria-hidden className="absolute -left-[9999px]" tabIndex={-1}>
        <label htmlFor="company_url">Company URL</label>
        <input id="company_url" name="company_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p role="alert" className="font-inter text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-white px-8 py-4 font-inter text-sm font-bold uppercase tracking-widest text-charged-black transition-colors hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending"
          ? "Sending…"
          : kind === "audit"
            ? "Get my free audit"
            : "Send enquiry"}
      </button>
    </form>
  );
}
