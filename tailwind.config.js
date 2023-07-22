/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: colors.sky,
      base: colors.slate,
      green: colors.emerald
    }
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
}
