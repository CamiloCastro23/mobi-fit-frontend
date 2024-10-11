/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1536px',
        'tablet': '960px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
