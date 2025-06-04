/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          primary: '#FFC831',
          secondary: '#1e1e1e',
          third: '#eceff1'
      }
    },
      screens: {
      sm: '640px',
      md: '800px', 
      lg: '1200px',
      xl: '1380px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

