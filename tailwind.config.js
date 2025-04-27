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
    textShadow: {
      sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
      DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',
    },
  },
  plugins: [
    require('daisyui'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
      }
      addUtilities(newUtilities, ['responsive']);
    }
  ],
}