/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./src/client/**/*.{js,ts,jsx,tsx}",
    "./src/client/Components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      // sm: "480px",
      // md: "768px",
      // lg: "976px",
      // xl: "1440px",
      xs: "768px",
      sm: "976px",
      md: "1025px",
      lg: "1280px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      roboto: ["Roboto", "serif"],
      bebas: ["BebasNeueu", "serif"],
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("postcss"),
    require("autoprefixer"),
    require("@tailwindcss/line-clamp"),
  ],
};
