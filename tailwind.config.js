/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,scss}'],
  theme: {
    screens: {
      tablet: '767px',
      desktop: '992px',
      site: '1024px',
    },
    fontFamily: {
      body: ['Arial', 'sans-serif'],
      headline: ['Proxima Nova', 'Arial', 'sans-serif'],
      menu: ['Proxima Nova', 'Arial', 'sans-serif'],
    },
    fontSize: {
      xxs: '10px',
      xs: '14px',
      tiny: '16px',
      s: '18px',
      default: '20px',
      m: '24px',
      l: '32px',
      xl: '36px',
      xxl: '42px',
      xxxl: '60px',
    },
    extend: {
      spacing: {
        'outer-spacing': '2rem',
        'desktop-outer-spacing': '1.5rem',
        'component-spacing': '2rem',
      },
      colors: {
        primary: '#E2001A',
        'interactive-state-hover': '#C60000',
      },
    },
  },
  plugins: [],
};
