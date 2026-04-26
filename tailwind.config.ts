import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      colors: {
        ink: "#1a0f1a",
        cream: "#fdf6ee",
        rose: {
          50: "#fff5f7",
          100: "#ffe1e8",
          200: "#ffc4d2",
          300: "#ffa1b6",
          400: "#ff7a96",
          500: "#f25c7d",
          600: "#d63f63",
          700: "#a82c4c",
        },
        plum: {
          400: "#a373b8",
          500: "#7c4f96",
          600: "#5b3473",
          700: "#3d1f55",
          900: "#1a0a2e",
        },
        amber: {
          glow: "#ffd29b",
          warm: "#ffae6e",
        },
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        drift: {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(110%)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 30px rgba(255,138,170,0.25)" },
          "50%": { boxShadow: "0 0 60px rgba(255,138,170,0.55)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        twinkle: "twinkle 3s ease-in-out infinite",
        floatY: "floatY 6s ease-in-out infinite",
        drift: "drift 60s linear infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
