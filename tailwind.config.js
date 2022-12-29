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
        'bottom-black': '#111111',
        'upper-black': '#222222',
        'top-black': '#333333',
        'top-black-active': '#444444',
        'button-border': '#47DBF5',
      },
    },
  },
  plugins: [],
}

/**     'back-black': '#212529',
        'bottom-black': '#343A40',
        'upper-black': '#495057', */