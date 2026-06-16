/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        charcoal: "#171716",
        graphite: "#3d3d3a",
        pearl: "#f8f7f4",
        mist: "#ece9e2",
        champagne: "#f3ecdd",
        gold: "#c59a45",
        "gold-dark": "#9e7530",
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 24px 70px rgba(17, 17, 17, 0.12)",
        soft: "0 18px 45px rgba(17, 17, 17, 0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        sheen: {
          "0%": { transform: "translateX(-130%)" },
          "100%": { transform: "translateX(130%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.75s ease both",
        float: "float 5s ease-in-out infinite",
        sheen: "sheen 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
