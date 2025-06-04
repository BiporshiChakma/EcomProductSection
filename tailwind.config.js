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
  },
  plugins: [],
}

