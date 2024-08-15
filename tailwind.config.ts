import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#F7F4E3",
      brown: "#744B19",
      green: "#CBDCC0",
      // 'green':"#b5cda5",
      yellow: "#FEE09A",
      red: "#F8BC9E",
      light: "#E5C1A4",
    },
    backgroundImage: {
      background: "url('../public/background.svg')",
    },
    // fontFamily: {
    //   'daruma': ['var(--font-daruma)', 'sans-serif'],

    //   'p': ['var(--font-daruma)']
    // },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideToLeft: {
          "0%": { opacity: "0", transform: "translateX(10%) " },
          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
        slideToRight: {
          "0%": { opacity: "0", transform: "translateX(-10%) " },
          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        fadeInFadeOut: {
          "0%": {
            opacity: "0",
            transform: "translateY(5%)",
          },
          "20%": {
            opacity: "1",
            transform: "translateY(0%)",
          },
          "80%": {
            opacity: "1",
            transform: "translateY(0%)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-5%)",
          },
        },
      },
      animation: {
        slideToLeft: "slideToLeft 800ms ease-in-out forwards",
        slideToRight: "slideToRight 800ms ease-in-out forwards",
        fadeInUp: "fadeInUp 1s ease-in-out",
        fadeInFadeOut: "fadeInFadeOut 6s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
