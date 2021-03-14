module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // removes unused styles in prod
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Heebo", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      mono: ["Menlo", "Monaco", "Courier New", "monospace"],
    },
    extend: {
      colors: {
        "simple-gray": {
          "1e": "#1e1e1e"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
