/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        neutral: "var(--neutral)",
        warn: "var(--warn)",
        font: "var(--font)",
      },
    },
  },
  plugins: [],
};
