/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        linkCards: "0 0 2px rgb(187, 186, 186)"
      },
      screens: {
        size200: "200px",
        size300: "300px",
        size400: "400px",
        size600: "600px",
        size626: "626px",
        size700: "700px",
        size770: "770px",
        mdlg: "779px",
        size800: "800px",
        size866: "866px",
        size1100: "1100px",
        size1300: "1300px",
        size1200: "1200px",
        size1400: "1400px",
        size1470: "1470px",
        size1560: "1560px",
        size1700: "1700px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
  ],
}

