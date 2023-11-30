/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  theme: {
    extend: {
      width:{
        "slide-card":"clamp(180px, 180px + 10vw, 400px)"
      }
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}