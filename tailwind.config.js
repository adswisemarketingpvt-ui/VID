/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        argentinianBlue: "#4cb7ff",
        richBlack: "#001011",
        lavenderBlush: "#eee5e9",
        selectiveYellow: "#ffb800",
        chiliRed: "#d64933",
      },
    },
  },
  plugins: [],
};
