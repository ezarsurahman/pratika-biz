import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      dropShadow: {
        "lg-yellow" : "0 20px 15px rgba(255, 237, 101, 1)"
      },
      borderRadius: {
        "4xl" : "3.5rem"
      },
      left: {
        "100" : "40rem",
        "-100" : "-40rem"
      },
      bottom: {
        "100" : "26rem",
        "-100" : "-26rem"
      },
      textShadow: {
        sm: '0 1px 1px var(--tw-shadow-color)', // More concentrated small shadow
        default: '0 2px 2px var(--tw-shadow-color)', // More concentrated default shadow
        lg: '0 4px 4px var(--tw-shadow-color)', // More concentrated large shadow
      },
      fontFamily: {
        "jockey-one" : ["var(--font-jockey-one)", 'sans-serif'],
        "jetbrains-mono" : ["var(--font-jetbrains-mono)"]
      }
    },
  },
  plugins: [
    plugin(function({matchUtilities, theme}) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        {values: theme('textShadow')}
      )
    }),
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'left': (value) => ({
            left: value,
          }),
          '-left': (value) => ({
            left: `-${value}`,
          }),
        },
        { values: theme('left') }
      );
    }),
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bottom': (value) => ({
            bottom: value,
          }),
          '-bottom': (value) => ({
            bottom: `-${value}`,
          }),
        },
        { values: theme('bottom') }
      );
    }),
  ],
} satisfies Config;