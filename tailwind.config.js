/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "white",
        action: "#FFB64B",
      },
      textColor: {
        primary: "black",
      },
    },
  },
  plugins: [],
}
