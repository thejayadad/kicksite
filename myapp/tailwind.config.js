/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: "Oswald, sans-serif",
        urbanist: "Urbanist, sans-serif",
    },
      colors: {
        background: '#F7F7F7',         
        primary: '#2A69AC',         
        secondary: '#F27D42', 
        
        black: {
          100: '#333333', 
          200: '#555555',
          300: '#777777',
          400: '#999999',
          500: '#CCCCCC', 
          600: '#DDDDDD',
          700: '#EEEEEE',
          800: '#F5F5F5',
          900: '#FAFAFA', 
        },
        
        red: '#E63946', 
      },
    },
  },
  plugins: [],
}
