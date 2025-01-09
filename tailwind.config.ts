import { DM_Sans } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        DM_Sans: ['DM sans', 'sans-serif']
      },
      animation: {
        'slide-bg': 'slide-bg 3s ease-in-out infinite',
      },
      backgroundPosition: {
        '100%': '100%',
        '-100%': '-100%',
      },
    },
  },
  plugins: [],
} satisfies Config;
