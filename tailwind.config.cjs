/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "-2xl": { max: "1535px" },
        // => @media (max-width: 1536px) { ... }
        "-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
        "-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
        "-md": { max: "769px" },
        // => @media (max-width: 769px) { ... }
        "-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        Ubuntu: "var(--font-family)",
        "Ubuntu-medium": "var(--font-family-medium)",
        "Ubuntu-bold": "var(--font-family-bold)",
      },

      borderRadius: {
        "rounded-all": "50%",
      },

      padding: {
        "p-all-10": "10px",
      },

      colors: {
        marine: "hsl(213, 96%, 18%)",
        purplish: "hsl(243, 100%, 62%)",
        coolg: "hsl(231, 11%, 63%)",
        sberry: "hsl(354, 84%, 57%)",
        pastel: "hsl(228, 100%, 84%)",
        "light-blue": "hsl(206, 94%, 87%)",
      },
      keyframes: {
        shake: {
          "0%": { transform: " translate(1px, 1px), rotate(0deg)" },
          "10%": { transform: "translate(-1px, -2px), rotate(-1deg)" },
          "20%": { transform: "translate(-3px, 0px), rotate(1deg)" },
          "30%": { transform: "translate(3px, 2px), rotate(0deg)" },
          "40%": { transform: "translate(1px, -1px), rotate(1deg)" },
          "50%": { transform: "translate(-1px, 2px), rotate(-1deg)" },
          "60%": { transform: "translate(-3px, 1px), rotate(0deg)" },
          "70%": { transform: "translate(3px, 1px), rotate(-1deg)" },
          "80%": { transform: "translate(-1px, -1px), rotate(1deg)" },
          "90%": { transform: "translate(1px, 2px), rotate(0deg)" },
          "100%": { transform: "translate(1px, -2px), rotate(-1deg)" },
        },
      },
      animation: {
        shake: "shake 0.5s linear 1",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
