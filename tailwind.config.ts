import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#09090b",
        panel: "#111216",
        panelSoft: "#181a20",
        line: "#2a2d36",
        ember: "#ff6b2c",
        gold: "#ffc247",
        mist: "#f5efe2",
        text: "#f6f3ee",
        muted: "#aaa69d"
      },
      fontFamily: {
        display: ['"Bahnschrift"', '"Aptos Display"', '"Trebuchet MS"', "sans-serif"],
        body: ['"Aptos"', '"Segoe UI"', "sans-serif"],
        mono: ['"Consolas"', '"Lucida Console"', "monospace"]
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(255,194,71,0.16), 0 24px 60px rgba(0,0,0,0.45)",
        ember: "0 24px 80px rgba(255,107,44,0.25)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
