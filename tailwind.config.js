/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        border: "1px solid #EAEAEA",
        1: "1px",
      },
      boxShadow: {
        sh: "-10px 20px 25px -10px rgba(61, 61, 61, 0.1)",
      },
    },
  },
  plugins: [],
};
