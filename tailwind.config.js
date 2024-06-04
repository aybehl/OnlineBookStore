/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs', './routes/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'proza-libre': ['Proza Libre', 'sans-serif'],
        'averia-sans-libre': ['Averia Sans Libre', 'sans-serif'],
      },
      fontSize: {
        '20': '1.25rem',
      },
      colors: {
        'custom-text-color': '#212121',
        'custom-background-color': '#F6F9ED',
        'custom-yellow': '#FDCC00',
        'custom-green': '#648633',
        'custom-gray': '#D9D9D9',
        'custom-placeholder': '#484747'
      },
      margin: {
        '120': '7.5rem',
      },
      gap: {
        '100': '6.25rem', // 100px = 6.25rem
      },
      width: {
        '500': '31.25rem' // 500px = 31.25rem
      },
      borderRadius: {
        '10xl': '2.5rem', // 40px = 2.5rem
      },
      width:{
        '500': '31.35rem' // 500px / 16 = 31.25rem
      }
    },
  },
  plugins: [],
}