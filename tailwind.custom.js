module.exports = function ({ addUtilities }) {
  const customUtilities = {
    ".text-stroke-2-black": {
      WebkitTextStrokeWidth: "2px",
      WebkitTextStrokeColor: "black",
    },
    ".text-stroke-3-black": {
      WebkitTextStrokeWidth: "3px",
      WebkitTextStrokeColor: "black",
    },
    ".text-shadow-custom-red": {
      textShadow: "2px -2px 2px #ff002c",
    },
  };

  addUtilities(customUtilities, ["responsive", "hover"]);
};
