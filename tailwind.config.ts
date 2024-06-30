import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: "rgba(var(--color-text) / <alpha-value>)",
      background: "rgba(var(--color-background) / <alpha-value>)",
      primary: "rgba(var(--color-primary) / <alpha-value>)",
      secondary: "rgba(var(--color-secondary) / <alpha-value>)",
      accent: "rgba(var(--color-accent) / <alpha-value>)",
      red: colors.red[500],
      blue: colors.blue[500],
      green: colors.green[600],
      white: colors.white,
      black: colors.black,
    },
    extend: {
      spacing: {
        "128": "32rem",
        "192": "48rem",
        "256": "64rem",
      },
      keyframes: {
        slideDown: {
          from: { height: "0px" },
          to: { height: "var(--accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--accordion-content-height)" },
          to: { height: "0px" },
        },
        open: {
          from: { maxHeight: "0px" },
          to: { maxHeight: "1500px" },
        },
        slideUpAndFade: {
          "0%": { opacity: "0", transform: "translateY(2px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideUpAndFadeAbsoluteEl: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        progressBarFill: {
          "0%": { transform: "scale(0, 1)" },
          "100%": { transform: "scale(1, 1)" },
        },
        bounceUpAndAwayAbsoluteEl: {
          "0%": { opacity: "1", transform: "translate(-50%, 0)" },
          "100%": { opacity: "0", transform: "translate(-50%, -200%)" },
        },
        slideDownAndFadeAbsoluteEl: {
          "0%": { opacity: "0", transform: "translate(-50%, -150%)" },
          "100%": { opacity: "1", transform: "translate(-50%, 0)" },
        },
      },
      animation: {
        slideDownAndFadeAbsoluteEl: "slideDownAndFadeAbsoluteEl 300ms ease-out",
        slideRightAndFadeAbsoluteEl: "slideRightAndFadeAbsoluteEl 150ms ease",
        fadeOut: "fadeOut 150ms forwards ease",
        open: "open 350ms ease-out",
        bounceUpAndAwayAbsoluteEl:
          "bounceUpAndAwayAbsoluteEl 500ms cubic-bezier(0.47, -0.56, 0.56, 1.52) forwards",
        progressBarFill: "progressBarFill 1000ms ease-out",
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUpAndFade: "slideUpAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
        slideUpAndFadeAbsoluteEl:
          "slideUpAndFadeAbsoluteEl 300ms cubic-bezier(0.16, 0, 0.13, 1)",
      },
      gridTemplateColumns: {
        minAutoMin: "min-content auto min-content",
      },
      gridTemplateRows: {
        "0-fr": "0fr",
        "1-fr": "1fr",
      },
      transitionTimingFunction: {
        button: "cubic-bezier(0,1,.58,.84)",
      },
    },
  },
  plugins: [],
};
export default config;
