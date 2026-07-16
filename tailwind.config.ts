import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: { purple: "#0a0215", darker: "#05010c" },
        brand: {
          purple: "#4a0e4e",
          magenta: "#c13584",
          pink: "#f093fb",
          light: "#ffecd2",
          violet: "#7c3aed",
          rose: "#fb7185",
          blue: "#3b82f6",
          cyan: "#06b6d4",
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      animation: {
        "orb-float": "orbFloat 20s ease-in-out infinite",
        "orb-float-reverse": "orbFloatReverse 25s ease-in-out infinite",
        "orb-float-slow": "orbFloatSlow 30s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "glow-border": "glowBorder 3s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
        "marquee-reverse": "marqueeReverse 25s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "wave": "wave 2s ease-in-out infinite",
        "morph": "morph 8s ease-in-out infinite",
        "scanline": "scanline 10s linear infinite",
        "flicker": "flicker 4s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "ring-pulse": "ringPulse 3s ease-in-out infinite",
        "orbit": "orbit 20s linear infinite",
        "orbit-reverse": "orbitReverse 25s linear infinite",
        "scale-pulse": "scalePulse 3s ease-in-out infinite",
      },
      keyframes: {
        orbFloat: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(60px, -80px) scale(1.15)" },
          "50%": { transform: "translate(-40px, 40px) scale(0.9)" },
          "75%": { transform: "translate(80px, 60px) scale(1.1)" },
        },
        orbFloatReverse: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(-50px, 60px) scale(1.1)" },
          "50%": { transform: "translate(30px, -50px) scale(0.95)" },
          "75%": { transform: "translate(-70px, -30px) scale(1.05)" },
        },
        orbFloatSlow: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(40px, -60px) rotate(120deg)" },
          "66%": { transform: "translate(-30px, 30px) rotate(240deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)", boxShadow: "0 0 0 0 rgba(193, 53, 132, 0.4)" },
          "50%": { opacity: "0.6", transform: "scale(1.4)", boxShadow: "0 0 20px 10px rgba(193, 53, 132, 0)" },
        },
        glowBorder: {
          "0%, 100%": { borderColor: "rgba(193, 53, 132, 0.3)" },
          "50%": { borderColor: "rgba(240, 147, 251, 0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(1.5)" },
        },
        morph: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
          "52%": { opacity: "0.3" },
          "54%": { opacity: "1" },
          "90%": { opacity: "0.9" },
          "92%": { opacity: "0.5" },
          "94%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        ringPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(80px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(80px) rotate(-360deg)" },
        },
        orbitReverse: {
          "0%": { transform: "rotate(360deg) translateX(60px) rotate(-360deg)" },
          "100%": { transform: "rotate(0deg) translateX(60px) rotate(0deg)" },
        },
        scalePulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
