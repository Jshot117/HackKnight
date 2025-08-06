/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar": {
          "::-webkit-scrollbar": { width: "8px", height: "8px" },
          "::-webkit-scrollbar-thumb": {
            background: "#4A5568",
            borderRadius: "4px",
          },
          "::-webkit-scrollbar-thumb:hover": {
            background: "#2D3748",
          },
        },
      });
    }),
  ],
};
