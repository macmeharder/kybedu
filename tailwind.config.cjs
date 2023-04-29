/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          purple: {
            DEFAULT: "var(--main-purple)",
            dark: "var(--main-purple-dark)",
          },
        },
        background: {
          gray: "var(--background-gray)",
        },
        ce: {
          gray: {
            DEFAULT: "var(--ce-gray)",
            2: "var(--ce-gray-2)",
            3: "var(--ce-gray-3)",
          },
          yellow: "var(--ce-yellow)",
        },
        blue: {
          gray: "var(--blue-gray)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-safe-area"), require("@tailwindcss/forms")],
};
