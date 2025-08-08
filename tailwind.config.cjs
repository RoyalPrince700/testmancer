// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4F46E5', // indigo-600 (main brand color)
          accent: '#F97316', // orange-500 (engaging CTA)
          funPink: '#F472B6', // pink-400
          funYellow: '#FACC15', // yellow-400
          funGreen: '#34D399', // emerald-400
          funBlue: '#38BDF8', // sky-400
          coral: '#FB7185', // rose-400
        },
      },
    },
  },
  plugins: [],
}
