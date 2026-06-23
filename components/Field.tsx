import type { ReactNode } from "react";

/**
 * Field — labelled text input or textarea (see docs/BRAND-SYSTEM.md §7.4).
 * Token-driven so every form field on the site shares one look + focus state.
 * Pass `as="textarea"` (with `rows`) for multi-line.
 */

const labelClass =
  "block font-inter text-xs font-semibold uppercase tracking-wider text-text-muted";
const controlClass =
  "mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 font-inter text-base text-text placeholder:text-text-muted outline-none transition-colors duration-base ease-out focus:border-accent focus:ring-2 focus:ring-accent/25";

type Props = {
  id: string;
  name: string;
  label: ReactNode;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  as?: "input" | "textarea";
  rows?: number;
};

export default function Field({
  id,
  name,
  label,
  type = "text",
  required = false,
  placeholder,
  autoComplete,
  as = "input",
  rows = 4,
}: Props) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          className={`${controlClass} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={controlClass}
        />
      )}
    </div>
  );
}
