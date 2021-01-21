module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      rose: {
        light: '#E0D0CA',
        DEFAULT: '#AE6F84',
        dark: '#956867'
      },
      green: {
        light: '#CCD1B8',
        DEFAULT: '#3A6639',
        dark: '#1F381F'
      },
      beige: {
        DEFAULT: '#FFFAF3'
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      display: ['hover', 'focus'],
      visibility: ['hover', 'focus'],
    },
  },
  plugins: [],
};
