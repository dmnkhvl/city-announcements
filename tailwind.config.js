/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-white)",
        secondary: "var(--color-gray)",
        tertiary: "var(--color-black)",
        action: "var(--color-action)",
        light: "var(--color-light)",
      },
      textColor: {
        primary: "var(--color-black)",
        secondary: "var(--color-white)",
        tertiary: "var(--color-darkGray)",
      },
      borderColor: {
        subtlest: "var(--color-black)",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}
