import type { ReactNode } from "react";

/**
 * Small pill label — e.g. "WEBSITES", "BRANDING", "CASE STUDY".
 * Reused across services, case studies, and section eyebrows.
 */
export default function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block rounded-full border border-charged-yellow/30 px-3 py-1 font-inter text-xs font-semibold uppercase tracking-wider text-charged-yellow ${className}`}
    >
      {children}
    </span>
  );
}
