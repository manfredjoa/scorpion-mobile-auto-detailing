/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#8e8e8e",
        "custom-red": "ff002c",
      },
    },
  },
  plugins: [],
};
