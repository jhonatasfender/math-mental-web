const colors = (attrs) => (sector) => attrs[sector];

const defaultColorsDark = {
  backgroundDefault: '#D1D0CF',
  darkModeActive: false,
  backgroundLock: '#D1D0CF',
  wave: '#D1D0CF',
  scale: colors([
    '#333333',
    '#352F38',
    '#312A3C',
    '#262641',
    '#212f45',
    '#42475C',
    '#616273',
    '#81808B',
    '#A09EA4',
    '#BDBCBE',
    '#D8D8D8',
  ]),
};

export default {
  colors: {
    background: '#798F91',
    colorsSectors: colors({
      addition: defaultColorsDark,
      subtraction: defaultColorsDark,
      multiplication: defaultColorsDark,
      division: defaultColorsDark,
      percentage: defaultColorsDark,
      fraction: defaultColorsDark,
      sqrt: defaultColorsDark,
    }),
  },
};
