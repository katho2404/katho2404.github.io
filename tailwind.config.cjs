/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", ...defaultTheme.fontFamily.sans],
        righteous: ["Righteous", "Helvetica Neue", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          600: "#388E3C",
          400: "#82b584",
        },
        
        // Jam3 Nice Palette Set 73
        palette1: "#2d2d29",
        palette2: "#215a6d",
        palette3: "#3ca2a2",
        palette4: "#57a871",
        palette5: "#92c7a3",
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
