/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",               // Jika ada file HTML di root proyek
    "./src/**/*.{js,jsx,ts,tsx}",  // Path ke semua file JSX dan TSX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
