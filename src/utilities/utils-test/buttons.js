import { screen } from '@testing-library/react';

export const buttons = () => ({
  0: screen.getByRole('button', { name: '0' }),
  1: screen.getByRole('button', { name: '1' }),
  2: screen.getByRole('button', { name: '2' }),
  3: screen.getByRole('button', { name: '3' }),
  4: screen.getByRole('button', { name: '4' }),
  5: screen.getByRole('button', { name: '5' }),
  6: screen.getByRole('button', { name: '6' }),
  7: screen.getByRole('button', { name: '7' }),
  8: screen.getByRole('button', { name: '8' }),
  9: screen.getByRole('button', { name: '9' }),
  ',': screen.getByRole('button', { name: '1' }),
  C: screen.getByRole('button', { name: 'c' }),
});
