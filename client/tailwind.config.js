/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pale-green" : "#FEFAE3",
        "mid-green" : "#EAEDCD",
        "dark-green" : "#CED4B2",
      },
      fontFamily: {
        'body' : ['Poppins'],
        'header' : ['"Open Sans"']
      }
    },
  },
  plugins: [],
}

