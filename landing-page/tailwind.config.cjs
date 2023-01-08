/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode:"class",
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/navbar.jsx",
    "./src/components/search/search.jsx",
    "./src/components/result/result.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
