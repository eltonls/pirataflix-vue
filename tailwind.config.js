/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat : ['Montserrat', 'sans-serif']
      },
      colors:{
        darkgrey : '#1C1C1C',
        greybackground: '#202020'
      }
    },
  },
  plugins: [],
}