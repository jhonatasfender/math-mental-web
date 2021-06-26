import Answer from '@components/answer';
import Node from '@components/latex';
import userEvent from '@testing-library/user-event';
import { buttons } from '@utils-test/buttons';
import { renderWithMain } from '@utils-test/render-with-theme';
import { keyDownTyping } from '@utils-test/typing';
import { ThemeProvider } from 'styled-components';

describe('<Answer />', () => {
  const renderer = (viewing) => {
    const all = renderWithMain(
      <ThemeProvider theme={{ sector: 'addition' }}>
        <Answer
          viewing={
            viewing || (() => <Node aria-label="operation">10 + 10 = 20</Node>)
          }
        />
      </ThemeProvider>,
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

    const keyDown = (word) => {
      validExpect =
        word === 'c' || word === 'backspace' ? '' : validExpect + word;
      keyDownTyping(word, container);
    };

    '1234567890,'.split('').map((number) => keyDown(number));
    keyDown('c');

    '1234567890,'.split('').map((number) => keyDown(number));
    keyDown('backspace');
  });

  it('should only allow one comma typed on the keyboard', () => {
    const viewing = (result) => {
      expect(['', ',']).toContain(result);
    };

    const { container } = renderer(viewing);

    const typing = () => {
      keyDownTyping(',', container);
    };

    typing();
    typing();
    typing();
  });

  it('after typing some numbers and then typing the comma should block preventing typing another comma', () => {
    const viewing = (result) => {
      if (result.indexOf(',') !== -1) {
        expect(result.match(/,/g) || []).toHaveLength(1);
      }
    };

    const { container } = renderer(viewing);

    keyDownTyping('1234567890,,,,,,3452345,,,2345,,,', container);
  });
});
