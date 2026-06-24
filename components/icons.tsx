import type { SVGProps } from "react";

/**
 * Shared inline SVG icons. Server-safe (no client hooks).
 * Replaces emoji usage across the site — crisp at any size, on-brand.
 */

/** Lightning-bolt marker — the Charged motif. Used as a list bullet. */
export function BoltMark({
  className = "h-4 w-4 text-accent",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
      {...props}
    >
      <path d="M13 2 4 13.2a.6.6 0 0 0 .47.98H10l-1.2 7.2a.4.4 0 0 0 .72.3L20 10.8a.6.6 0 0 0-.47-.98H14l1.2-7.5a.4.4 0 0 0-.72-.32Z" />
    </svg>
  );
}

/** Circle with a check — used on the audit topic pills. */
export function CheckCircle({
  className = "h-3.5 w-3.5 text-accent",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className} {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="m8.5 12 2.5 2.5 4.5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A single person — founder-led marker. */
export function UserMark({ className = "h-6 w-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className} {...props}>
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M5 20a7 7 0 0 1 14 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Map pin — local / location marker. */
export function PinMark({ className = "h-6 w-6", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className} {...props}>
      <path
        d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/** Chevron — used as the accordion toggle. Rotate via `group-open:rotate-180`. */
export function Chevron({
  className = "h-5 w-5",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className} {...props}>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A single filled star. */
function Star({ className = "h-4 w-4", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} {...props}>
      <path d="M12 2.2l2.85 5.78 6.38.93-4.62 4.5 1.09 6.35L12 17.27l-5.7 3l1.09-6.35-4.62-4.5 6.38-.93z" />
    </svg>
  );
}

/** A row of filled stars (default 5) in Charged Yellow. */
export function Stars({
  count = 5,
  className = "h-4 w-4",
  label,
}: {
  count?: number;
  className?: string;
  label?: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-0.5 text-accent"
      role="img"
      aria-label={label ?? `${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={className} />
      ))}
    </span>
  );
}

/** The Google 'G' in its four brand colours. */
export function GoogleG({ className = "h-4 w-4", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...props}>
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.55-5.17 3.55-8.87z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.95-2.91l-3.88-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A12 12 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29a7.21 7.21 0 0 1 0-4.58V6.62H1.29a12 12 0 0 0 0 10.76z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}
