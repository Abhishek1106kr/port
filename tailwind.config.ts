import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f0ebd6",
        dark: "#2b2b2b",
        orange: "rgb(249,111,77)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        "hero-lg": ["160px", { lineHeight: "1em", letterSpacing: "-0.01em" }],
        "hero-md": ["89px", { lineHeight: "1em", letterSpacing: "-0.01em" }],
        "hero-sm": ["54px", { lineHeight: "1em", letterSpacing: "-0.01em" }],
        "heading-lg": ["80px", { lineHeight: "1.1em" }],
        "heading-md": ["51px", { lineHeight: "1.1em" }],
        "heading-sm": ["42px", { lineHeight: "1.3em" }],
      },
      borderRadius: {
        pill: "100px",
      },
      keyframes: {
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        ticker: "ticker 22s linear infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
