/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#6D6D6D',
         'border-color': '#E5E7EA',
          'btn-blue': '#22385F',
          'file-color' : '#403F3F',
      },
      backgroundImage: {
        'custom-arrow': "url('../vite-project/src/assets/vector-filer.svg))",
      },
      fontFamily: {
        noto: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

