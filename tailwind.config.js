/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['app/*/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle .5s ease-in-out infinite',
        rotate: 'rotate 8s ease-out infinite',
      },
      colors: {
        primary: '#002651',
        'primary-dark': '#000A16',
        'primary-light': '#002D60',
        'secondary-purple': '#775ADA',
        'secondary-blue': '#59dffd',
        // 'secondary-blue': '#28C7FA',
        'accent-red': '#FF304F',
        'accent-yellow': '#C0E218',
      },
      fontFamily: {
        merriweather: ['"Merriweather"', 'serif'],
        inter: ['"Inter"', 'serif'],
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'translateY(-75%)' },
          '33%': { transform: 'translateY(-50%)' },
          '67%': { transform: 'translateY(-25%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
