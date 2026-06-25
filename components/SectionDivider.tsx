/**
 * SectionDivider — a thin hairline between homepage sections with a soft
 * charged-yellow glow at its centre. Purely decorative.
 */
export default function SectionDivider() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6" aria-hidden="true">
      <div className="relative h-px w-full">
        {/* hairline, fading to transparent at both ends */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/45 to-transparent" />
        {/* soft glow behind the centre */}
        <div className="absolute left-1/2 top-1/2 h-1 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-md" />
      </div>
    </div>
  );
}
