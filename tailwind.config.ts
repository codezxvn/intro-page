import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        bgBase: "var(--bg-base)",
        neutral: "var(--color-neutral)",
      },
      screens: {
        lg: "1082px",
      },
    },
  },
  plugins: [],
};
export default config;
