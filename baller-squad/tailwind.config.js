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
          "1e": "#1e1e1e",
        },
        blue: {
          primary: "#1e67a6",
          highlight: "#84c2f8",
        },
        purple: {
          primay: '#8d2bb3',
          highlight: '#ca94df'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
