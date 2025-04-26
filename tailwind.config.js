// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Ensure this matches your file types and locations
  ],
  theme: {
    extend: {
      fontFamily: {
        rancho: ['Rancho', 'cursive'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}