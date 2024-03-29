/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      'xs': '375px',
      '5xl': '412px',
      '4xl': '540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '3xl': '1350px',
      '2xl': '1536px'
    },

  },
  plugins: [require('daisyui')],
}