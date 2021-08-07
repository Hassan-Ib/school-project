const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        primary: { 900: "#29293a" },
      },
      transitionProperty: {
        height: "height",
      },
      // backgroundImage : theme =>({
      //   "hero-banner" : "./"
      // })
    },
  },
  variants: {
    extend: {
      transitionProperty: ["hover", "focus"],
    },
  },
  plugins: [],
};
