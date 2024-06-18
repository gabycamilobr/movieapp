/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-gabys': '#8E0022',
        'primary-cards': '#F3E3E7'
      }
    }
  },
  plugins: [],
}