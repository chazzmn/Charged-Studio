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
        "charged-yellow": "#FFC100",
        "charged-black": "#020413",
        "charged-navy": "#171E3A",
        "charged-light": "#F7F7F7",
      },
      fontFamily: {
        anton: ["var(--font-anton)", "sans-serif"],
        inter: ["var(--font-inter-tight)", "sans-serif"],
        caramel: ["var(--font-caramel)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
