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
        night: "#080806",
        coal: "#11100d",
        charcoal: "#171512",
        graphite: "#2a2925",
        smoke: "#a9a399",
        ivory: "#f7f0e2",
        pearl: "#e5dccb",
        champagne: "#d8bc82",
        gold: "#bd914a",
        bronze: "#806132"
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        aurelia: "0 30px 90px rgba(0, 0, 0, 0.45)",
        gold: "0 18px 50px rgba(189, 145, 74, 0.18)"
      },
      backgroundImage: {
        "quiet-radial": "radial-gradient(circle at 20% 10%, rgba(216,188,130,.16), transparent 32%), radial-gradient(circle at 90% 0%, rgba(247,240,226,.08), transparent 26%)"
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
