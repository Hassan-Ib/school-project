module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/typography")],
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
      backgroundImage: {
        "hero-banner": "url('/img/hero-bg.jpg')",
      },
      transitionProperty: {
        maxHeight: "max-height",
      },
    },
  },
};
