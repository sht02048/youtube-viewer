import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    backgroundColor: {
      primary: "#18181b",
      white: "#FFFFFF",
    }
  },
  plugins: [],
} satisfies Config;