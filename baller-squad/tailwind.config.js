// For wiggle: https://dev.to/jerocosio/how-to-animate-a-button-on-click-with-tailwindcss-in-next-js-or-react-js-30cl
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
          41: "#414141",
          30: "#303030",
        },
        blue: {
          primary: "#1e67a6",
          highlight: "#84c2f8",
        },
        purple: {
          primary: "#8d2bb3",
          highlight: "#ca94df",
        },
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-1deg)",
            opacity: 0.9
          },
          "50%": {
            transform: "rotate(1deg)",

          },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        wiggle: "wiggle 100ms ease-in-out",
        spin: 'spin 1s infinite linear',
        'reverse-spin': 'spin 1s infinite linear reverse'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
