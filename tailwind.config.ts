import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        google: {
          blue: "#4285F4",
          green: "#34A853",
          yellow: "#FBBC05",
          red: "#EA4335",
        },
      },
    },
  },
  plugins: [],
};

export default config;
