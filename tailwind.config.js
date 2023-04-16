/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-100": "#E6EDF3",
        "gray-200": "#F0F6FC",
        "gray-300": "#30363D",
        "gray-400": "#7D8590",
        "gray-500": "#C9D1D9",
        "gray-700": "#161B22",
        "gray-800": "#0D1117",
        "blue-700": "#2F81F7"
      },
      spacing: {
        "15": "60px"
      },
      transitionDuration: {
        'default': '200ms'
      }
    },
    fontSize: {
      'sm': '14px'
    }
  },
  plugins: [],
}