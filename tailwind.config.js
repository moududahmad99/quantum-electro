/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'], // Removed spaces between file extensions
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'), // Use an array for plugins and require tailwindcss
    require('autoprefixer'),
  ],
};
