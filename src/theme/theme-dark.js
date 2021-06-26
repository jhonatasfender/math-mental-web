const colors = (attrs) => (sector) => attrs[sector];

const defaultColorsDark = {
  backgroundDefault: '#D1D0CF',
  darkModeActive: false,
  backgroundLock: '#D1D0CF',
  wave: '#D1D0CF',
  scale: colors([
    '#190F24',
    '#1A132C',
    '#191835',
    '#1C223D',
    '#212f45',
    '#3E515E',
    '#5B7178',
    '#798F91',
    '#96A9A7',
    '#B4C2BE',
    '#D2DBD6',
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
