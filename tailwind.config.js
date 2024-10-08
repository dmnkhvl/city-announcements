/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "white",
      },
      textColor: {
        primary: "black",
      },
    },
  },
  plugins: [],
}
