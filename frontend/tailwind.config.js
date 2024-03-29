/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroImg: "url('./img/hero-img.png')"
      },
      colors: {
        zuta: {
          light: "#fef4e4",
          DEFAULT: "#ffff01",
          dark: "#fee5bc"
        },
        zelena: {
          light: "#fef4e4",
          DEFAULT: "#049B3B",
          dark: "#fee5bc"
        }
      },
      boxShadow: {
        custom: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        event: "0px 0px 30px rgba(0, 0, 0, 0.06)"
      },
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" }
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" }
        }
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      }
    }
  },
  plugins: [require("tailwindcss-animatecss")]
};
