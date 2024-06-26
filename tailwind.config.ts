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
        Violet: "#5964E0",
        LightViolet: "#939BF4",
        VeryDarkBlue: "#19202D",
        Midnight: "#121721",
        White: "#FFFFFF",
        LightGray: "#F4F6F8",
        Gray: "#9DAEC2",
        DarkGray: "#6E8098",
      },
      fontFamily: {
        kumbh: ["var(--font-kumbh)"],
      },
      keyframes: {
        show: {
          from: { right: "-150%" },
          to: { right: "32px" },
        },
        hide: {
          from: { right: "32px" },
          to: { right: "-150%" },
        },
      },
      animation: {
        show: "show 1s ease-in-out forwards",
        hide: "hide 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
