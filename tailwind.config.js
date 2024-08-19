/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // Adds Montserrat to the default sans font family
      },
      letterSpacing: {
        extremeTight: '-0.09em', // Custom maximum negative value
      },
      colors: {
        primary: "#FF6347",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // Use the light theme or any other specific theme
  },
};
