import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "abersoft-blue": "#0e97fd",
        "abersoft-text": "#707070",
        "abersoft-grey": "#f6f6f9",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
export default config;
