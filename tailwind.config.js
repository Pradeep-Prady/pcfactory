/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'myblack': '#222831',
          'mygray': '#393E46',  
          'mygreen': '#00ADB5', 
          'mywhite': '#EEEEEE', 
          'myorange': '#DF9D25',
        },
      },
    },
    variants: {
      extend: {
        backgroundColor: ['hover'], 
        textColor: ['hover'], 
      },
    },
    plugins: [],
  }
  