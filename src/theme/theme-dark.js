import { colors, scale } from '@theme/theme';

const defaultColorsDark = {
  backgroundDefault: '#D1D0CF',
  darkModeActive: false,
  backgroundLock: '#D1D0CF',
  wave: '#D1D0CF',
  scale: colors(scale('#000000', '#696d79')),
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
