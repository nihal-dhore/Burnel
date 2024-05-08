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
      colors: {
        button: "#1c1c1c",
        disabled: "#C9C9C9",
        destructive: "#FF0808",
        secondary: "#727272",
        secondaryButtonDark: "#4E4E4E",
        secondaryButtonLight: "#F1F1F1",
        carousel: "#CAD0CB",
        inputFocus: "#F5F8FF",
      },
    },
  },
  plugins: [],
};
