/**
 * AvailabilityPill — availability/urgency signal shown near primary CTAs.
 * Amber pulsing dot + a clean, always-true "Limited project spaces available".
 * (Pure presentational — no date logic to drift out of accuracy.)
 */
export default function AvailabilityPill({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-inter text-xs font-semibold uppercase tracking-wider text-accent ${className}`.trim()}
    >
      <span aria-hidden className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      Limited project spaces available
    </span>
  );
}
