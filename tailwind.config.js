module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black-pearl': '#091921',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-pseudo-elements')],
}
