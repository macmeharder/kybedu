/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          purple: "var(--main-purple)",
        },
        background: {
          gray: "var(--background-gray)",
        },
        blue: {
          gray: "var(--blue-gray)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-safe-area"), require("@tailwindcss/forms")],
};
