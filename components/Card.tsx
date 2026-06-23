import type { ReactNode } from "react";

/**
 * Card — surface container (see docs/BRAND-SYSTEM.md §7.3).
 *   tone="surface" (default) — navy surface, hairline border, soft elevation.
 *   tone="accent"            — yellow-tinted, for highlights / success states.
 *   interactive              — lifts + yellow edge on hover (for clickable cards).
 */

type Tone = "surface" | "accent";

type Props = {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  interactive?: boolean;
};

export default function Card({
  children,
  className = "",
  tone = "surface",
  interactive = false,
}: Props) {
  const toneClass =
    tone === "accent"
      ? "border-accent/30 bg-accent-soft"
      : "border-border bg-surface shadow-e1";
  const interactiveClass = interactive
    ? "transition duration-base ease-out hover:-translate-y-1 hover:border-accent/30"
    : "";

  return (
    <div className={`rounded-lg border p-8 ${toneClass} ${interactiveClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
