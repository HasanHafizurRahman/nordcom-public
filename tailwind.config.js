/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
          sm: "15px",
          lg: "15px",
          xl: "0",
          "2xl": "0",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1280px",
        },
      },
      colors: {
        nordcomPrimary: "#68D237", //green-5
        nordcomSecondary: "#FFE923", //yellow-5
        nordcomAccent: "#FF8154", //red-5
        nordcomNeutral: "#ADADAD", //gray-3
      },
      fontFamily: {
        nordcomFontFamily: ["Work Sans", "sans-serif"],
      },
      borderRadius: {
        nordcomBorderRadius: "8px",
      },
    },
  },
  plugins: [],
};
