import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#f96e24",
      secondary: "#DC611F",
      whitePrimary: "#ffffff",
      cardHover: "#9CA3AF",
    },
  },
  plugins: [],
};
export default config;
