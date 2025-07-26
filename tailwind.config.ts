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
        "primary-1" : "#eaf5fc",
        "primary-2" : "#cce7f7",
        "primary-3" : "#a3d4f0",
        "primary-4" : "#79c0ea",
        "primary-5" : "#50ade3",
        "primary-6" : "#2a9bdd",
        "primary-7" : "#2484bc",
        "primary-8" : "#1e6e9d",
        "primary-9" : "#18587e",
        "primary-10" : "#134663",
        "secondary-1" : "#fffdf0",
        "secondary-2" : "#fffbda",
        "secondary-3" : "#fff7bd",
        "secondary-4" : "#fff49e",
        "secondary-5" : "#fff081",
        "secondary-6" : "#ffed65",
        "secondary-7" : "#d9c956",
        "secondary-8" : "#b5a848",
        "secondary-9" : "#91873a",
        "secondary-10" : "#736b2d",
        "neutral-1" : "#eaeaeb",
        "neutral-2" : "#cccccf",
        "neutral-3" : "#a4a4a8",
        "neutral-4" : "#797980",
        "neutral-5" : "#515159",
        "neutral-6" : "#2b2b35",
        "neutral-7" : "#25252d",
        "neutral-8" : "#1f1f26",
        "neutral-9" : "#19191e",
        "neutral-10" : "#131318",

      },
      textStyles: {
        'heading': {
          default: {
            fontSize: '39px',
            fontWeight: 'normal',
            fontFamily: 'var(--font-jockey-one)',
            lineHeight: '85%'
          },
          md: {
            fontSize: '100px',
            fontWeight: 'normal',
            fontFamily: 'var(--font-jockey-one)',
            lineHeight: '85%'
          }
        },
        'heading-2': {
          default: {
            fontSize: '31px',
            fontWeight: 'normal',
            fontFamily: 'var(--font-jockey-one)',
            lineHeight: '85%'
          },
          md: {
            fontSize: '80px',
            fontWeight: 'normal',
            fontFamily: 'var(--font-jockey-one)',
            lineHeight: '85%'
          }
        },
        'heading-3': {
          default: {
            fontSize: '25px',
            fontWeight: 'normal',
            fontFamily: 'var(--font-jockey-one)',
            lineHeight: '85%'
          },
          md: {
            fontSize: '63px',
            fontWeight: 'normal',
            fontFamily: 'var(--font-jockey-one)',
            lineHeight: '85%'
          }
        },
        'subtitle': {
          default: {
            fontSize: '25px',
            fontWeight: 'normal',
            fontFamily: 'var(--font-jetbrains-mono)',
            lineHeight: '85%',
            letterSpacing: '-2.25px'
          },
          md: {
            fontSize: '40px',
            fontWeight: 'normal',
            fontFamily: 'var(--font-jetbrains-mono)',
            lineHeight: '85%',
            letterSpacing: '-3.6px'
          }
        },
        'body-lg': {
          default: {
            fontSize: '20px',
            fontWeight: 'normal',
            fontFamily: 'var(--font-jetbrains-mono)',
            lineHeight: '85%',
            letterSpacing: '-2.25px'
          },
          md: {
            fontSize: '32px',
            fontWeight: 'normal',
            fontFamily: 'var(--font-jetbrains-mono)',
            lineHeight: '85%',
            letterSpacing: '-3.6px'
          }
        },
        'body-md': {
          default: {
            fontSize: '16px',
            fontWeight: 'normal',
            fontFamily: 'var(--font-jetbrains-mono)',
            lineHeight: '85%',
            letterSpacing: '-2.25px'
          },
          md: {
            fontSize: '25px',
            fontWeight: 'normal',
            fontFamily: 'var(--font-jetbrains-mono)',
            lineHeight: '85%',
            letterSpacing: '-3.6px'
          }
        },
        'body-sm': {
          default: {
            fontSize: '13px',
            fontWeight: 'normal',
            fontFamily: 'var(--font-jetbrains-mono)',
            lineHeight: '85%',
            letterSpacing: '-2.25px'
          },
          md: {
            fontSize: '20px',
            fontWeight: 'normal',
            fontFamily: 'var(--font-jetbrains-mono)',
            lineHeight: '85%',
            letterSpacing: '-3.6px'
          }
        },
        'caption-lg': {
          default: {
            fontSize: '10px',
            fontWeight: 'normal',
            fontFamily: 'var(--font-jetbrains-mono)',
            lineHeight: '85%',
            
          },
          md: {
            fontSize: '16px',
            fontWeight: 'normal',
            fontFamily: 'var(--font-jetbrains-mono)',
            lineHeight: '85%',
            
          }
        }
      },
      dropShadow: {
        "lg-yellow" : "0 20px 15px rgba(255, 237, 101, 1)",
      },
      boxShadow: {
        'inner-custom': 'inset 0 0 4px 4px var(--tw-shadow-color)',
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
        smClose: '0px 4px 0.5px var(--tw-shadow-color), 2px 3px 3px var(--tw-shadow-color)', // More concentrated small shadow
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
    plugin(function({ addComponents, theme }) {
      const textStyles = theme('textStyles')
      
      if (!textStyles) return

      const styles = Object.entries(textStyles).reduce((acc, [key, value]) => {
        return {
          ...acc,
          [`.text-style-${key}`]: value.default,
          '@media (min-width: 768px)': {  // Explicitly define the md breakpoint
            [`.text-style-${key}`]: value.md
          }
        }
      }, {})

      addComponents(styles)
    }),

  ],
} satisfies Config;