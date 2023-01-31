/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
],
  theme: {
    extend: {
      backgroundImage: {
        'bank': "url('./src/assets/bank.svg')",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      } 
    },
  },
  plugins: [],
}
