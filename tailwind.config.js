/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        // Core theme: Purple, Orange, Black
        primary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
        dark: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#0a0a0a",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        display: ['"Figtree"', "system-ui", "sans-serif"],
        sans: ['"Figtree"', "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #6b21a8 0%, #7c3aed 35%, #f97316 100%)",
        "gradient-btn": "linear-gradient(135deg, #9333ea 0%, #f97316 100%)",
        "gradient-card": "linear-gradient(145deg, rgba(147,51,234,0.12) 0%, rgba(249,115,22,0.08) 100%)",
        "glow-purple": "radial-gradient(circle at 20% 20%, rgba(147,51,234,0.25), transparent 50%)",
        "glow-orange": "radial-gradient(circle at 80% 80%, rgba(249,115,22,0.25), transparent 50%)",
        "grid-noise":
          "linear-gradient(rgba(147,51,234,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(147, 51, 234, 0.35)",
        "glow-orange": "0 0 40px rgba(249, 115, 22, 0.35)",
        "glow-btn": "0 8px 24px rgba(147, 51, 234, 0.4)",
        card: "0 10px 30px -12px rgba(0,0,0,0.6)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        "spin-slow": "spin 18s linear infinite",
        "gradient-x": "gradientX 8s ease infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "scroll-reveal": "scrollReveal 0.8s ease-out both",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        gradientX: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(147,51,234,0.4)" },
          "50%": { boxShadow: "0 0 30px 10px rgba(249,115,22,0.25)" },
        },
        scrollReveal: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
