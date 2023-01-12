/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      "Roboto": ["Roboto", "sans-serif"]
    },
    extend: {
      colors: {
        'brand': '#00453A',
        'title': '#0C3440',
        'headline': '#02799D',
        'explorer': '#243c5a',
        'fasc': '#DCE2E9',
      },
    },
  },
  plugins: [],
}
