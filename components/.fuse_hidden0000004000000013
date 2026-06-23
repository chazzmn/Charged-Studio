import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Centred max-width wrapper — the horizontal rhythm for the whole site.
 * Per design-system.md: max-w-7xl, centred, px-6.
 */
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>{children}</div>
  );
}
