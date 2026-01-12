import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B5F99",
          dark: "#2A4470",
          light: "#4A70B3",
        },
        secondary: {
          DEFAULT: "#6FB1E8",
          light: "#A3D1F5",
          dark: "#4A8BC7",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
}
export default config
