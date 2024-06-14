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
    extend: {},
  },
  plugins: [],
};
