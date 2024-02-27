import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {  
  darkMode: 'class',
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      "Fira Sans": ["Fira Sans", "sans-serif"],
      "Montserrat": ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [typography],
} satisfies Config;