/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '0rem',
        // sm: '0rem',
        // lg: '0rem',
        // xl: '0rem',
        // '2xl': '0rem',
      },
    },
    extend: {
      backgroundImage: {
        hero: "url('../src/assets/images/banner.png')",
      },
      fontFamily: {
        Balsamiq: ['Balsamiq Sans'],
      },
    },
  },
  plugins: [],
};
