/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        primary: "#5BBAD5",
        secondary: "#9FC9AA",
        lightBg: "#F1F5F9",
        darkText: "#333333",
      },
    },
  },
  plugins: [],
}


