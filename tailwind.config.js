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
        'servicebg' : 'rgb(239, 235, 227)',
      },
      animation: {
        cust: 'cust 5s ease-in-out infinite',
      },
      keyframes: {
        cust: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
        }
      }
    }
  },
  plugins: [],
}

