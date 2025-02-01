/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    // font family
    fontFamily: {
      'sora': ["Sora", "serif"],
    },
    extend: {
      // Colors
      colors: {
        'navItemsColor' : 'rgb(17, 17, 17)',
        'navbtn' : 'rgb(23, 152, 0)',
        'gradianfrom' : 'rgb(255, 255, 255)',
        'gradianto' : 'rgb(239, 235, 227)',
        'servicebg' : 'rgb(239, 235, 227)',
        'cardoffer' : 'rgb(83, 219, 58)',
        'cardoffer-2' : 'rgb(223, 248, 218)',
        'ariivelcard' : 'rgb(17, 84, 20)',
        'arrivelcardbtn' : 'rgb(99, 183, 109)',
        'arrivelcard2' : 'rgb(16, 40, 97)',
        'arrivelcard2btn' : 'rgb(42, 77, 151)',
      },
      // Animation
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

