/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};