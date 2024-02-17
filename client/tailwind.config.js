/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/pages/Landing.js",
    "./src/components/Menu.js",
    "./src/components/Navbar.js",
    "./src/**/*.{html,js,jsx}"
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

