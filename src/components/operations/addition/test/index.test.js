import Addition from '@components/operations/addition';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

const buttons = () => {
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

const allCalcs = () => {
  const calcs = {};
  for (let x = 0; x < 10; x++) {
    for (let y = 1; y < 10; y++) {
      const calc = `${x} + ${y}`;
      calcs[calc] = calc;
    }
  }
  return calcs;
};

describe('<Addition />', () => {
  it('should never repeat a calculation', async () => {
    jest.useFakeTimers();

    render(<Addition />);

    const calcs = allCalcs();
    const size = Object.keys(calcs).length;
    const operation = screen.getByLabelText('operation');

    const elements = buttons();

    for (let i = 0; i < size; i++) {
      const [x, sinal, y, equals] = operation.textContent.split('');

      expect(calcs[`${x} ${sinal} ${y}`]).toBeTruthy();
      delete calcs[`${x} ${sinal} ${y}`];
      expect(calcs[`${x} ${sinal} ${y}`]).toBeFalsy();

      const result = parseInt(x, 10) + parseInt(y, 10);

      result
        .toString()
        .split('')
        .forEach((number) => {
          userEvent.click(elements[number]);
        });

      expect(operation.textContent).toEqual(
        `${x}${sinal}${y}${equals}${result}`,
      );

      let allExpression;
      act(() => {
        allExpression = operation.textContent;
        jest.runOnlyPendingTimers();
      });
      if (size - 1 === i) {
        expect(screen.getByText('Você terminou!')).toBeInTheDocument();
      } else {
        expect(allExpression).not.toEqual(operation.textContent);
      }
    }
  });
});
