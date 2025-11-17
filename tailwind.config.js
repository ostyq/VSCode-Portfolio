/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        zinc: {
          700: "#3f3f46",
        },
      },
    },
  },
  plugins: [],
};
