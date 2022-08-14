/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage : {
        'home-bg' : "url('/src/assets/home.jpeg')"
      },

      fontSize : {
        'sm' : '18px',
      }
    },
  },
  plugins: [],
}
