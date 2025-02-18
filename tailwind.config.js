module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure this includes the correct file paths
  theme: {
    extend: {
      colors: {
        "royal-blue": "#7C3AED",
        "deep-navy": "#0c1221",
        "blue-btn": "#1E40AF",
        "blue-btn-hover": "#1E3A8A",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night"],
  },
};
