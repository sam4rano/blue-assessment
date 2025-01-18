import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand_primary: "#055DAE",
        brand_primary_inverse: "#D2EAFF",
        brand_dark: "#052B4E",
        brand_green: "#D9F2EB",
        brand_green_text: "#28715C",
        primary_light: "#B0C4DE",
        primary_lighter: "#F9FAFB",
        color_white: "#FFFFFF",
        color_off_white: "#F5F5F5",
        color_red: "#F6515B",
        "color_red-light": "#FFD5CC",
        "color_red-deep": "#FF7E62",
        "color_red-deeper": "#FF2D00",
        "color_yellow-lighter": "#FBF2D1",
        "color_yellow-light": "#F1D86F",
        "color_yellow-deeper": "#BA9A12",
        border_grey: "#D5D5D5",
        border_green: "#6DCCB1",
        border_light: "#EAECF0",
        border_lighter: "#E5E5E5",
        border_dark: "#D0D5DD",
        grey_100: "#555555",
        grey_200: "#757575",
        "grey-400": "##667085",
        "grey-800": "#344054",

        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        roboto: ["var(--font-Roboto)"],
        inter: ["var(--font-Inter)"],
      },
      screens: {
        sm: { min: "360px", max: "599px" },
        md: { min: "600px", max: "799px" },
        lg: { min: "800px", max: "1022px" },
        xl: { min: "1023px" },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
