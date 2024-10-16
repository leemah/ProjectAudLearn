/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#633EA3",
        customOrange: "#F76103",
      },
      boxShadow: {
        "custom-boxShadow": "0px 4px 4px 1px rgba(99, 62, 163, 0.1)",
      },
    },
  },
  plugins: [],
};
