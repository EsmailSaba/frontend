/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths to match where your components are
  ],
  theme: {
    extend: {
      colors: {
        background: '#c4d4f9',
        text: '#1b1f50',
      },
    },
  },
  plugins: [],
};