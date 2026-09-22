/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#10161F",
          soft: "#4B5768",
          faint: "#8793A3",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F5F7FA",
          sunken: "#EEF1F5",
        },
        line: "#E3E8EF",
        sky: {
          50: "#F0F9FF",
          100: "#E0F3FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#1DA1E5",
          600: "#0C87C9",
          700: "#0A6CA3",
          800: "#0D5883",
          900: "#0F4A6E",
        },
        amber: {
          500: "#F5A524",
        },
        coral: {
          500: "#F0616D",
        },
        mint: {
          500: "#28B786",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 22, 31, 0.04), 0 4px 16px rgba(16, 22, 31, 0.06)",
        pop: "0 8px 28px rgba(16, 22, 31, 0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
