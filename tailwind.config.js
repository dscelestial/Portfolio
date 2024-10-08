/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend Deca', 'sans-serif'],
      },
      colors: {
        primary: '#BB86FC',
        secondary: '#03DAC6',
        text: '#E0E0E0',
        card: '#1E1A3D',
        miniCard: '#302B54',
      },
    },
  },
  daisyui:{
    themes:["light", "night",]
  },
  plugins: [
    require('daisyui'),
  ],
}