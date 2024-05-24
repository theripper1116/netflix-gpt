/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        "netflix-red": "#f6121d",
        "netflix-plan-chooser-color": "#20529d",
      },
    },
  },
  plugins: [],
};
