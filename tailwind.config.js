module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dodger-blue': {
          DEFAULT: '#42ADF9',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#D6EDFE',
          300: '#A5D8FC',
          400: '#73C2FB',
          500: '#42ADF9',
          600: '#1198F7',
          700: '#077BCE',
          800: '#055E9D',
          900: '#03406C',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
