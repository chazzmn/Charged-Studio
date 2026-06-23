import type { ReactNode } from "react";

/**
 * Badge — small pill label, e.g. "WEBSITES", "CASE STUDY" (see BRAND-SYSTEM.md §7.2).
 *
 * Variants:
 *   outline (default) — yellow text + faint yellow border. Backwards-compatible
 *                       with all existing usages.
 *   soft              — tinted yellow background, no border.
 *   solid             — solid yellow, near-black text. Use for one emphasised tag.
 */

type Variant = "outline" | "soft" | "solid";

const base =
  "inline-block rounded-full px-3 py-1 font-inter text-xs font-semibold uppercase tracking-wider";

const variantStyles: Record<Variant, string> = {
  outline: "border border-accent/30 text-accent",
  soft: "bg-accent-soft text-accent",
  solid: "bg-accent text-text-inverse",
};

export default function Badge({
  children,
  variant = "outline",
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span className={`${base} ${variantStyles[variant]} ${className}`.trim()}>
      {children}
    </span>
  );
}
