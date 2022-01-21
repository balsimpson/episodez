const colors = require("tailwindcss/colors");
module.exports = {
  mode: 'jit',
  content: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Lato", "ui-sans-serif", "system-ui"],
      serif: ["Arvo", "ui-serif", "Georgia"],
      // mono: ["ui-monospace", "SFMono-Regular"],
      // display: ["Oswald"],
      body: ["Lato"],
    },
    borderWidth: {
      DEFAULT: "1px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      blue: colors.blue,
      sky: colors.sky,
      white: colors.white,
      gray: colors.warmGray,
      green: colors.green,
      // red: colors.rose,
      yellow: colors.yellow,
      indigo: colors.indigo,
      purple: colors.fuchsia,
    },
    extend: {
      colors: {
        'red': {
          100: '#F6ECEE',
          200: '#F6D6DB',
          300: '#F28195',
          400: '#F28195',
          500: '#F43F5E',
          600: '#94283A',
          700: '#601824',
          800: '#F43F5E',
          900: '#250208',
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
  }
}