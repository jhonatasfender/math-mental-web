import { screen } from '@testing-library/react';

export const buttons = () => {
  const [
    seven,
    eight,
    nine,
    four,
    five,
    six,
    one,
    two,
    three,
    zero,
    point,
    clear,
  ] = screen.getAllByRole('button');

  return {
    0: zero,
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
    6: six,
    7: seven,
    8: eight,
    9: nine,
    ',': point,
    C: clear,
  };
};
