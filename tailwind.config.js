/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    fontFamily: {
      'sora': ["Sora", "serif"],
    },
    extend: {
      colors: {
        'navItemsColor' : 'rgb(17, 17, 17)',
        'navbtn' : 'rgb(23, 152, 0)',
        'gradianfrom' : 'rgb(255, 255, 255)',
        'gradianto' : 'rgb(239, 235, 227)',
      }
    }
  },
  plugins: [],
}

