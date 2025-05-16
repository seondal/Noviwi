import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pico: {
          "primary-background": "var(--pico-primary-background)",
          "hover-background": "var(--pico-primary-hover-background)",
          primary: "var(--pico-primary)",
          hover: "var(--pico-primary-hover)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
