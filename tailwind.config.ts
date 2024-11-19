import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          100: "#F9F9F9",
          200: "#F2F2F2",
          300: "#C6C6C6",
          400: "#AAAAAA",
          500: "#868282"
        },
        brandblack: "#1A1A1A",
        brandblue: "#5769EF"
      },
      fontFamily: {
        fustat: ['var(--font-fustat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
