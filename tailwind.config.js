const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'bgBlack': '#0A0A0A',
      'primaryBText': '#F3F3F3',
      'secondaryBText': '#CDCDCD',
      'bGray': '#999',
      'bGray2': '#555',
      'Highlighted': '#51D1F6',
      'primaryBButton': '#2B2B3B',
      'hoverPrimaryBButton': '#4D4D63',
      'secondaryBButton': '#FFF',
      'primaryWButton': '#0A0A0A',
      'secondaryWButton': '#1C1C1C',
      sky: colors.sky,
      indigo: colors.indigo,
    },
    extend: {},
  },
  plugins: [],
}
