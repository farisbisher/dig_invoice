/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        gray: colors.trueGray,
        gray: {
          900: '#202225'
        }
      }
    },
  },
  plugins: [],
}

