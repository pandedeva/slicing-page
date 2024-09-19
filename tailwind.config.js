/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#393F48",
        brand: "#EF5DA8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      lineHeight: {
        base: "160%",
      },
    },
  },
  plugins: [],
};
