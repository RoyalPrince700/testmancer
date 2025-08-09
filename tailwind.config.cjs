/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
     colors: {
        brand: {
          teal: '#00CED1',       // Vibrant teal
          funPink: '#FF4081',    // Electric pink (close to Tailwind's fuchsia-500)
          coral: '#FF6B6B',      // Coral (close to Tailwind's rose-500)
        },
      },
    },
  },
  plugins: [],
}