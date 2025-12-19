import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        christmas: {
          red: "#B91C1C",
          green: "#166534",
          yellow: "#F59E0B",
          brown: "#7C4A2D",
          white: "#FFFFFF",
          cream: "#FFF7ED",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;