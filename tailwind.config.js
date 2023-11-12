/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        size300: "300px",
        size600: "300px",
        size700: "700px",
        mdlg: "779px",
        size866: "866px",
        size1470: "1470px",
        size1200: "1200px",
      },
    },
  },
  plugins: [],
}

