/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: '#2c6e49'
      }
    }
  },
  plugins: []
}
