import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#08090d",
        surface: "#10121a",
        "surface-border": "#1f2433",
        primary: {
          DEFAULT: "#38bdf8",
          hover: "#0ea5e9",
          glow: "rgba(56, 189, 248, 0.15)"
        },
        accent: {
          purple: "#a855f7",
          green: "#10b981",
          amber: "#f59e0b"
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"]
      }
    },
  },
  plugins: [],
} satisfies Config;
