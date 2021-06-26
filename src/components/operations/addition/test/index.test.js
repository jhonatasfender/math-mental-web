import Addition from '@components/operations/addition';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { buttons } from '@utils-test/buttons';
import { renderWithMain } from '@utils-test/render-with-theme';
import { act } from 'react-dom/test-utils';
import { ThemeProvider } from 'styled-components';

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

    renderWithMain(
      <ThemeProvider theme={{ sector: 'addition' }}>
        <Addition />
      </ThemeProvider>,
    );

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
