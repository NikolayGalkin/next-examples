const { coolGray } = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gary: coolGray,
        'black-pearl': '#091921',
      },
      fontFamily: {
        // sans: ['Poppins', 'sans-serif'],
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
