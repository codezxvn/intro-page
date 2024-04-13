import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#232429",
        neutral: "#cdb30c",
      },
    },
  },
  plugins: [],
};
export default config;
