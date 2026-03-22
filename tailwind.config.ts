import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      colors: {
        ink: "#0A0A0A",
        paper: "#F5F0E8",
        acid: "#4DA6FF",
        smoke: "#8A8A8A",
        mist: "#E8E3DB",
      },
      fontSize: {
        "display-xl": ["clamp(4rem, 12vw, 11rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.94", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [animate],
};

export default config;
