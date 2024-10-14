/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Playfair Display", "serif"],
        body: ["Lato", "sans-serif"]
      },
      colors: {
        'primary': '#bc6c25',
        'secondary': '#283618',
        'tertiary': '#606c38',
        'info': '#dda15e',
        'light': '#fefae0',
      }
    },
  },
  plugins: [],
}