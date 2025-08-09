import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eef7ff",
          100: "#d9ecff",
          200: "#bfe1ff",
          300: "#94ceff",
          400: "#61b3ff",
          500: "#318dff",
          600: "#1d6ef2",
          700: "#1757c2",
          800: "#163f8c",
          900: "#112a5c"
        }
      }
    }
  },
  plugins: []
};
export default config;