/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back-black': '#000000',
        'bottom-black': '#222222',
        'upper-black': '#333333',
      },
    },
  },
  plugins: [],
}

/**     'back-black': '#212529',
        'bottom-black': '#343A40',
        'upper-black': '#495057', */