/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  presets: [require('nativewind/preset')],
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/ui/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
