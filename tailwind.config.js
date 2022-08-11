/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      serif: ['Playfair Display', 'serif'],
      sand_serif: ['Quicksand', 'sand-serif'],
      cursive: ['Great Vibes', 'cursive'],
    },
  },
  plugins: [],
};
