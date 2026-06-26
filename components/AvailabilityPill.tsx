"use client";

import { useEffect, useState } from "react";

/**
 * AvailabilityPill — availability signal shown near primary CTAs.
 * Amber dot + "Taking new projects from <Month>".
 *
 * The month rolls forward automatically: we advertise the current month until
 * we're within 5 days of the next month starting, then flip to that next month.
 * So 5 days before July (e.g. 26 June) the label reads "July". Runs client-side
 * so the label stays current without a rebuild (the site is statically built).
 */
function nextAvailableMonth(now: Date = new Date()): string {
  // First day of next month, and the point 5 days before it.
  const nextMonthStart = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const cutoff = new Date(nextMonthStart.getTime() - 5 * 24 * 60 * 60 * 1000);

  const target =
    now.getTime() >= cutoff.getTime()
      ? nextMonthStart // within 5 days of next month → advertise next month
      : new Date(now.getFullYear(), now.getMonth(), 1); // otherwise → current month

  return target.toLocaleString("en-GB", { month: "long" });
}

export default function AvailabilityPill({
  className = "",
}: {
  className?: string;
}) {
  const [month, setMonth] = useState(() => nextAvailableMonth());

  // Recompute on mount so the label reflects the visitor's current date,
  // not whenever the page was last built.
  useEffect(() => {
    setMonth(nextAvailableMonth());
  }, []);

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-inter text-xs font-semibold uppercase tracking-wider text-accent ${className}`.trim()}
    >
      <span aria-hidden className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      <span suppressHydrationWarning>Taking new projects from {month}</span>
    </span>
  );
}
