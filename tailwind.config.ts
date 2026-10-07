import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0B0F19",
          50: "#1A2234",
          100: "#141B2B",
          200: "#101623",
          300: "#0B0F19",
          400: "#080B12",
          500: "#05070C",
        },
        teal: {
          deep: "#0A2540",
          navy: "#133855",
          accent: "#164B6E",
          glow: "#1E5F8A",
          dark: "#061524",
        },
        gold: {
          light: "#F7E7A9",
          champagne: "#D4AF37",
          metallic: "#E5C158",
          warm: "#B89327",
          dark: "#8F6F1A",
          glow: "rgba(212, 175, 55, 0.35)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Hind Siliguri'",
          "'Noto Sans Bengali'",
          "sans-serif",
        ],
        serif: [
          "var(--font-serif)",
          "Playfair Display",
          "Cinzel",
          "Georgia",
          "serif",
        ],
        bengali: [
          "'Hind Siliguri'",
          "'Noto Sans Bengali'",
          "'Kalpurush'",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F7E7A9 0%, #D4AF37 50%, #B89327 100%)",
        "gold-shimmer": "linear-gradient(90deg, #D4AF37 0%, #FFF2B2 50%, #D4AF37 100%)",
        "dark-radial": "radial-gradient(circle at 50% 30%, #133855 0%, #0B0F19 70%)",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212, 175, 55, 0.15), transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
