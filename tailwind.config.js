const colors = require("tailwindcss/colors");
module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Montserrat","ui-sans-serif", "system-ui"],
      serif: ["Arvo", "ui-serif", "Georgia"],
      // mono: ["ui-monospace", "SFMono-Regular"],
      // display: ["Oswald"],
      body: ["Montserrat"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      blue: colors.cyan,
      white: colors.white,
      gray: colors.warmGray,
      green: colors.teal,
      red: colors.rose,
      yellow: colors.amber,
      purple: colors.fuchsia,
    },
    extend: {
      colors: {
        'brand-blue': {
          100: '#DFE7F5',
          500: '#3D5886',
          600: 'rgb(13 62 103)',
          900: '#1A3563',
        },
        'brand-green': {
          100: '#E0F0EC',
          500: '#21B994',
          900: '#0A644E',
        },
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
