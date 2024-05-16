/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        tablet: '1026px',
        lg: '1300px',
        xl: '1720px',
      },

      fontFamily: { montserrat: ['Montserrat'] },
      backgroundImage: {
        'about-us': "url('/src/shared/img/about.png')",
        rectangle: "url('/src/shared/img/rectangle_61.png')",
        'why-q-rush': "url('/src/shared/img/Why-Q-Rush.png')",
        aboutUs: "url('src/shared/img/about/aboutUs.png)",
      },

      height: {
        974: '974px',
        314: '314px',
        122: '122px',
        802: '802px',
        2800: '2800px',
        1081: '1081px',
        653: '653px',
        400: '400px',
      },
      maxHeight: {
        974: '974px',
        960: '960px',
        314: '314px',
        122: '122px',
        1800: '1800px',
        2800: '2800px',
      },
      minHeight: {
        802: '802px',
        450: '450px',
        960: '960px',
      },
      fontSize: { 122: '122px' },
      maxWidth: {
        1920: '1920px',
        1081.5: '1081.5px',
        1719: '1719px',
        1720: '1720px',
        1300: '1300px',
        950: '950px',
        938: '938px',
        170: '170px',
        400: '400px',
      },
      width: {
        1719: '1719px',
        1720: '1720px',
        938: '938px',
        1920: '1920px',
        170: '170px',
        377: '377px',
        1025: '1025px',
        960: '960px',
        400: '400px',
      },
      minWidth: {
        1720: '1720px',
        1300: '1300px',
      },
      gap: { 76: '76px' },
      colors: {
        '#F5F5F5': '#F5F5F5',
        '#DC6441': '#DC6441',
        '#161616': '#161616',
      },
      lineHeight: {
        61: '61px',
        122: '122px',
        100: '100px',
      },
    },
  },
  plugins: [],
};
