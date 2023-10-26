/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        size300: "300px",
        mdlg: "779px",
        size1470: "1470px",
      },
    },  
  },
  plugins: [],
}

