import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        krono: "var(--krono)",
        poppinsItalic: "var(--poppins-italic)",
        poppinsSemiBoldItalic: "var(--poppins-semi-bold-italic)",
        poppinsMedium: "var(--poppins-medium)",
        poppinsBold: "var(--poppins-bold)",
        merriweatherBoldItalic: "var(--merriweather-bold-italic)",
        merriweatherBold: "var(--merriweather-bold)",
        urbanistSemiBold: "var(--urbanist-semi-bold)"
      }
    },
  },
  plugins: [],
} satisfies Config;
