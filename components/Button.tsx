import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

/**
 * Button — the single source of truth for calls-to-action.
 *
 * Token-driven (see docs/BRAND-SYSTEM.md §7.1). Renders a Next `<Link>` when
 * `href` is passed, otherwise a native `<button>` (use for form submits).
 *
 * Variants:
 *   primary   — Charged Yellow, near-black text. The main CTA. (AAA contrast.)
 *   secondary — outline, fills to yellow on hover.
 *   ghost     — text only, yellow on hover.
 *
 * To change the look of every CTA on the site, edit this file. That's the point.
 */

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center text-center font-inter font-bold uppercase tracking-[0.1em] rounded-md transition duration-base ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const sizeStyles: Record<Size, string> = {
  md: "text-sm px-8 py-4",
  sm: "text-xs px-6 py-3",
};

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-text-inverse hover:bg-accent-hover hover:-translate-y-px hover:shadow-glow active:translate-y-0 active:bg-accent-pressed",
  secondary:
    "border border-border-strong text-text hover:border-accent hover:text-accent",
  ghost: "text-text hover:text-accent",
};

type Props = {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  type = "button",
  disabled = false,
  onClick,
  target,
  rel,
  "aria-label": ariaLabel,
}: Props) {
  const classes = `${base} ${sizeStyles[size]} ${variantStyles[variant]} ${
    disabled ? "pointer-events-none opacity-50" : ""
  } ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
