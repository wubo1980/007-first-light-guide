/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        "background-soft": "var(--color-background-soft)",
        ink: "var(--color-ink)",
        gold: "var(--color-gold)",
        "gold-deep": "var(--color-gold-deep)",
        cream: "var(--color-cream)",
      },
    },
  },
  plugins: [],
};
