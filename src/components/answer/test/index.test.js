import Answer from '@components/answer';
import Node from '@components/latex';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { buttons } from '@utils-test/buttons';

describe('<Answer />', () => {
  const renderer = (viewing) => {
    const all = render(
      <Answer
        viewing={
          viewing || (() => <Node aria-label="operation">10 + 10 = 20</Node>)
        }
      />,
    );
    return all;
  };

  it('should to render', () => {
    const { container } = renderer();
    expect(container).toMatchSnapshot();
  });

  it('should to have the numbers', () => {
    renderer();
    Object.values(buttons()).forEach((el) => {
      expect(el).toBeInTheDocument();
    });
  });

  it('should render the number when clicking the button', () => {
    let validExpect = '';
    const viewing = (result) => {
      expect(validExpect).toEqual(result);
    };

    renderer(viewing);

    Object.values(buttons()).forEach((el) => {
      validExpect = el.textContent === 'C' ? '' : validExpect + el.textContent;
      userEvent.click(el);
    });
  });

  it('should render the number when typing on the keyboard', () => {
    let validExpect = '';
    const viewing = (result) => {
      expect(validExpect).toEqual(result);
    };

    const { container } = renderer(viewing);

    const keyDown = (keyboard) => {
      validExpect =
        keyboard.key === 'c' || keyboard.key === 'Backspace'
          ? ''
          : validExpect + keyboard.key;
      fireEvent.keyDown(container, keyboard);
    };

    const typing = () => {
      keyDown({ key: '1', code: 'Digit1', keyCode: 49 });
      keyDown({ key: '2', code: 'Digit2', keyCode: 50 });
      keyDown({ key: '3', code: 'Digit3', keyCode: 51 });
      keyDown({ key: '4', code: 'Digit4', keyCode: 52 });
      keyDown({ key: '5', code: 'Digit5', keyCode: 53 });
      keyDown({ key: '6', code: 'Digit6', keyCode: 54 });
      keyDown({ key: '7', code: 'Digit7', keyCode: 55 });
      keyDown({ key: '8', code: 'Digit8', keyCode: 56 });
      keyDown({ key: '9', code: 'Digit9', keyCode: 57 });
      keyDown({ key: '0', code: 'Digit0', keyCode: 48 });
      keyDown({ key: ',', code: 'Comma', keyCode: 188 });
    };

    typing();
    keyDown({ key: 'c', code: 'KeyC', keyCode: 67, charCode: 0 });

    typing();
    keyDown({ key: 'Backspace', code: 'Backspace', keyCode: 8, charCode: 0 });
  });
});
