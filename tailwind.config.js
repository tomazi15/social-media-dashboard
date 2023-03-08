/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        green: "#1db489",
        red: "#dc414c",
        bottomBg: "#1e202a",
        topBg: "#1f212e",
        cardLightBg: "#f0f2fa",
        cardLightTextColor: "#63687e",
        cardBg: "#252a41",
        textBlue: "#8b97c6",
        textWhite: "#ffffff",
      },
    },
  },
  plugins: [],
};
