import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Ink & Citron — light editorial palette (locked intake)
        bg: "#FCFBF4",        // cream — page background
        cream: "#FCFBF4",
        ink: "#1A1A24",       // near-black — primary text + dark surfaces
        citron: "#E2E97E",    // accent — chartreuse highlight
        contrast: "#000000",
        // Semantic aliases used by shared templates
        primary: "#1A1A24",   // ink → buttons, eyebrows, links
        accent: "#E2E97E",    // citron → dots, highlights, hover
        "bg-contrast": "#1A1A24",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
