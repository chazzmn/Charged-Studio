import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette (locked)
        "charged-yellow": "#FFC100",
        "charged-black": "#020413",
        "charged-navy": "#171E3A",
        "charged-light": "#F7F7F7",
        // Semantic tokens (see docs/BRAND-SYSTEM.md) — usable as text-accent, bg-surface, etc.
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          pressed: "var(--color-accent-pressed)",
          soft: "var(--color-accent-soft)",
        },
        bg: "var(--color-bg)",
        surface: {
          DEFAULT: "var(--color-surface)",
          raised: "var(--color-surface-raised)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
          subtle: "var(--color-text-subtle)",
          inverse: "var(--color-text-inverse)",
        },
        success: "var(--color-success)",
        error: "var(--color-error)",
        focus: "var(--color-focus)",
      },
      fontFamily: {
        anton: ["var(--font-anton)", "sans-serif"],
        inter: ["var(--font-inter-tight)", "sans-serif"],
        caramel: ["var(--font-caramel)", "sans-serif"],
      },
      fontSize: {
        // role / [size, { lineHeight, letterSpacing }] — see BRAND-SYSTEM.md §4.1
        display: ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "0.95", letterSpacing: "-0.01em" }],
        h1: ["clamp(2.25rem, 5vw, 3.75rem)", { lineHeight: "1.0", letterSpacing: "-0.01em" }],
        h2: ["clamp(1.875rem, 4vw, 3rem)", { lineHeight: "1.05" }],
        h3: ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h4: ["1.25rem", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        eyebrow: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.12em" }],
        button: ["0.875rem", { lineHeight: "1", letterSpacing: "0.1em" }],
        caption: ["0.75rem", { lineHeight: "1.4" }],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        e1: "var(--shadow-e1)",
        e2: "var(--shadow-e2)",
        glow: "var(--shadow-glow)",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
        emphasized: "var(--ease-emphasized)",
        in: "var(--ease-in)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "400ms",
        slowest: "600ms",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
