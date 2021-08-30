const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        xl: "450px",
        xxl: "600px",
        xxxl: "700px",
        hero: "80vh",
        nav: "10vh",
      },
      weight: {
        screenhalf: "5vw",
      },
      backgroundImage: (theme) => ({
        "hero-banner":
          "url('/img/icons8-team-FcLyt7lW5wg-unsplash-removebg-preview.png')",
        // "./public/img/icons8-team-FcLyt7lW5wg-unsplash-removebg-preview.png"
      }),
      colors: {
        twine: {
          50: "#FCFAF7",
          100: "#F9F6EF",
          200: "#EFE7D8",
          300: "#E6D9C1",
          400: "#D3BD92",
          500: "#C0A063",
          600: "#AD9059",
          700: "#73603B",
          800: "#56482D",
          900: "#3A301E",
        },

        "desert-storm": {
          50: "#FFFFFF",
          100: "#FEFEFE",
          200: "#FDFDFD",
          300: "#FCFBFB",
          400: "#FAF9F9",
          500: "#F8F6F6",
          600: "#DFDDDD",
          700: "#959494",
          800: "#706F6F",
          900: "#4A4A4A",
        },

        monza: {
          50: "#FDF4F4",
          100: "#FBE9E8",
          200: "#F6C9C7",
          300: "#F0A8A5",
          400: "#E46661",
          500: "#D9251D",
          600: "#C3211A",
          700: "#821611",
          800: "#62110D",
          900: "#410B09",
        },

        birch: {
          50: "#F5F5F4",
          100: "#ECEBEA",
          200: "#CFCCCA",
          300: "#B1AEA9",
          400: "#777169",
          500: "#3D3429",
          600: "#372F25",
          700: "#251F19",
          800: "#1B1712",
          900: "#12100C",
        },
      },
      transitionProperty: {
        maxHeight: "max-height",
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ["hover", "focus"],
    },
  },
  plugins: [],
};
