/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#cc0000",
        secondary: "#ffffff",
        dark: "#1a1a1a",
      },
      fontFamily: {
        sans: [
          "Noto Sans Arabic",
          "Noto Sans",
          "Inter",
          "Segoe UI",
          "Tahoma",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
