import chroma from 'chroma-js';

export const colors = (attrs) => (sector) => attrs[sector];

export const scale = (darker, lighter) =>
  chroma.scale([darker, lighter]).mode('hsv').colors(11);

export default {
  colors: {
    background: '#F7FAFF',
    colorsSectors: colors({
      addition: {
        backgroundDefault: '#F9F9F9',
        darkModeActive: false,
        backgroundLock: '#F9F9F9',
        wave: '#F9F9F9',
        scale: colors(scale('#46006B', '#CCF8EA')),
      },
      subtraction: {
        backgroundDefault: '#F9F9F9',
        darkModeActive: false,
        backgroundLock: '#F9F9F9',
        wave: '#F9F9F9',
        scale: colors(scale('#392A00', '#DECCE3')),
      },
      multiplication: {
        backgroundDefault: '#F9F9F9',
        darkModeActive: false,
        backgroundLock: '#F9F9F9',
        wave: '#F9F9F9',
        scale: colors(scale('#052F5F', '#D9EED2')),
      },
      division: {
        backgroundDefault: '#F9F9F9',
        darkModeActive: false,
        backgroundLock: '#F9F9F9',
        wave: '#F9F9F9',
        scale: colors(scale('#5A1F22', '#D8D8F0')),
      },
      percentage: {
        backgroundDefault: '#F9F9F9',
        darkModeActive: false,
        backgroundLock: '#F9F9F9',
        wave: '#F9F9F9',
        scale: colors(scale('#4E4646', '#E8E8EB')),
      },
      fraction: {
        backgroundDefault: '#F9F9F9',
        darkModeActive: false,
        backgroundLock: '#F9F9F9',
        wave: '#F9F9F9',
        scale: colors(scale('#57014A', '#CCE9F0')),
      },
      sqrt: {
        backgroundDefault: '#F9F9F9',
        darkModeActive: false,
        backgroundLock: '#F9F9F9',
        wave: '#F9F9F9',
        scale: colors(scale('#3A0125', '#CCDAE4')),
      },
    }),
  },
};
