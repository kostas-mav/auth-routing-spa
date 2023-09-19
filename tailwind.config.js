/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        "dark-primary": "var(--dark-primary)",
        "dark-secondary": "var(--dark-secondary)",
        "dark-tertiary": "var(--dark-tertiary)",
        "dark-font": "var(--dark-font)",
      },
    },
  },
  plugins: [],
};
