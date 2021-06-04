module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Playfair Display', 'serif'],
      'noto': ['Noto Sans TC', 'sans-serif'],
      'source': ['Source Sans Pro', 'sans-serif'],
      'hans': ['SourceHans', 'serif']
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
