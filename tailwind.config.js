const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        xl: "450px",
        xxl: "600px",
      },
      backgroundImage: (theme) => ({
        "hero-banner":
          "url('/img/icons8-team-FcLyt7lW5wg-unsplash-removebg-preview.png')",
        // "./public/img/icons8-team-FcLyt7lW5wg-unsplash-removebg-preview.png"
      }),
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        primary: {
          100: "rgb(249,245,243)", //whitesmoke
          900: "#29293a", // darkslategray
          1000: "rgb(27,27,24)", //black
          1100: "rgb(16,17,16)", //black
        },
        secondary: {
          100: "rgb(50,178,131)	", //mediumseagreen
          200: "rgb(66,151,137)", //mediumseagreen
          300: "rgb(250,207,136)", //khaki
          400: "rgb(246,154,132)", //lightsalmon
          500: "rgb(254,206,0)", //gold
          600: "rgb(110,195,164)", //mediumaquamarine
          700: "rgb(29,161,242)", //dodgerblue
          800: "rgb(75,159,222)", //cornflowerblue
          900: "rgb(70,120,161)", // steelblue
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
