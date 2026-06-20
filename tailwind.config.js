/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#ffffff",
        coal: "#f6fbf6",
        charcoal: "#edf7ef",
        graphite: "#d7e6db",
        smoke: "#5f6f63",
        ivory: "#102016",
        pearl: "#26382c",
        champagne: "#15803d",
        gold: "#0f6b35",
        bronze: "#0b4d28"
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        aurelia: "0 30px 90px rgba(15, 107, 53, 0.14)",
        gold: "0 18px 50px rgba(21, 128, 61, 0.18)"
      },
      backgroundImage: {
        "quiet-radial": "radial-gradient(circle at 20% 10%, rgba(21,128,61,.12), transparent 32%), radial-gradient(circle at 90% 0%, rgba(15,107,53,.08), transparent 26%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
