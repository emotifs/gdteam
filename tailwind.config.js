/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage : {
        'home-bg' : "url('/src/assets/home.webp')",
        'about-bg' : "url('/src/assets/about.png')"
      },

      fontSize : {
        'sm' : '18px',
      }
    },
  },
  plugins: [],
}
