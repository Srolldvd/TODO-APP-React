/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('/src/assets/img/bg-desktop-dark.jpg')",
        mobile: "url('/src/assets/img/bg-mobile-dark.jpg')",
        gradient: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
      },
      colors: {
        primary: "hsl(220, 98%, 61%)",
        blue: {
          primary: "hsl(235, 21%, 11%)",
          secondary: "hsl(235, 24%, 19%)",
          100: "hsl(234, 39%, 85%)",
          200: "hsl(236, 33%, 92%)",
          300: "hsl(234, 11%, 52%)",
          400: "hsl(233, 14%, 35%)",
          500: "hsl(237, 14%, 26%)",
        },
      },
    },
  },
  plugins: [],
};
