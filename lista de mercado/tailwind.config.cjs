/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      inset: {
        '-10px': '-10px',
      }
    },
  },
  plugins: [],
}
