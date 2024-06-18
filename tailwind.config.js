/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,scss}'],
  theme: {
    screens: {
      tablet: '767px',
      desktop: '992px',
      site: '1440px',
    },
    fontFamily: {
      body: ['Arial', 'sans-serif'],
      headline: ['Proxima Nova', 'Arial', 'sans-serif'],
      menu: ['Proxima Nova', 'Arial', 'sans-serif'],
    },
    fontSize: {
      xs: '10px',
      tiny: '14px',
      s: '16px',
      default: '18px',
      m: '21.34px',
      l: '22.77px',
      xl: '24.3px',
      '2xl': '25.92px',
      '3xl': '27.66px',
      '4xl': '29.51px',
    },
    extend: {
      spacing: {
        'outer-spacing': '2rem',
        'desktop-outer-spacing': '1.5rem',
        'component-spacing': '2rem',

        'title-spacing': '2em',
      },
      colors: {
        primary: '#E2001A',
        'interactive-state-hover': '#C60000',
      },
    },
  },
  plugins: [],
};
