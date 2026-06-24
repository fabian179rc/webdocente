
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0a160e',
        'brand-green': '#22c55e',
        'brand-green-hover': '#16a34a',
        'brand-card': '#112518',
        'brand-card-border': '#1a3623',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
