import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {  
  darkMode: 'class',
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    colors: {
      primary: '#059669',
      secondary: '#ecc94b',
    },
    fontFamily: {
      "Fira Sans": ["Fira Sans", "sans-serif"],
      "Montserrat": ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [typography],
} satisfies Config;