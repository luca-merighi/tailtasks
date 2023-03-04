/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'button': '0px 0px 10px rgba(0, 0, 0, 0.25)',
        'task': '0px 4px 8px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        'lap': '1150px'
      }
    },
  },
  plugins: [],
}
