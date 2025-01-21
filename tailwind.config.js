/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,scss}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        lg: ['22px', { lineHeight: '1.5', fontWeight: 'bold' }],
        md: ['14px', { lineHeight: '1.5', fontWeight: '600' }],
        sm: [
          '12px',
          {
            lineHeight: '1.5',
            fontWeight: 'bold, semi-bold, normal',
            textDecoration: 'underline',
          },
        ],
        xs: ['10px', { lineHeight: '1.5', fontWeight: 'normal' }],
      },
      colors: {
        primaryBlue: '#1678D1',
        secondaryBlue: '#99C9F8',
        red: '#EB4528',
        green: '#75BB34',
        grey01: '#F4F4F5',
        grey02: '#EFEFF0',
        grey03: '#DBDCDD',
        grey04: '#C7C8CB',
        grey05: '#DADBDC',
        grey06: '#CACBCC',
        black: '#1D242D',
        greyBackground: '#F2F5F9',
      },
    },
  },
  plugins: [],
};
