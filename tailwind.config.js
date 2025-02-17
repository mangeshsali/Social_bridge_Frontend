module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure this includes the correct file paths
  theme: {
    extend: {
      colors: {
        "royal-blue": "#7C3AED",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "wireframe", "cmyk"],
  },
};
