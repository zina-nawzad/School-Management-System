/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-mode="dark"]'], // Use "class" to support class-based dark mode and your custom selector
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#233255",
        "secondary-color": "#515D79",
        "yellow-color": "#F6AD2B",
        // Dark mode colors
        "dark-primary-color": "#1b263b",
        "dark-secondary-color": "#2c3e50",
        "dark-yellow-color": "#e9b949",
      },
    },
  },
  plugins: [],
};
