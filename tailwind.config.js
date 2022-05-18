const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./public/html-templates/maintemplate.html, ./views/layouts/main.handlebars, ./views/partials/homepage.handlebars, ./views/partials/login.handlebars"],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },

    extend: {},
  },
  plugins: [],
}

 