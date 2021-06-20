import { fireEvent } from '@testing-library/react';

const keyboardEvents = {
  1: { key: '1', code: 'Digit1', keyCode: 49 },
  2: { key: '2', code: 'Digit2', keyCode: 50 },
  3: { key: '3', code: 'Digit3', keyCode: 51 },
  4: { key: '4', code: 'Digit4', keyCode: 52 },
  5: { key: '5', code: 'Digit5', keyCode: 53 },
  6: { key: '6', code: 'Digit6', keyCode: 54 },
  7: { key: '7', code: 'Digit7', keyCode: 55 },
  8: { key: '8', code: 'Digit8', keyCode: 56 },
  9: { key: '9', code: 'Digit9', keyCode: 57 },
  0: { key: '0', code: 'Digit0', keyCode: 48 },
  ',': { key: ',', code: 'Comma', keyCode: 188 },
  c: { key: 'c', code: 'KeyC', keyCode: 67 },
  backspace: { key: 'Backspace', code: 'Backspace', keyCode: 8, charCode: 0 },
};

export const keyDownTyping = (word, container) => {
  const keyDown = (key) => {
    fireEvent.keyDown(container, keyboardEvents[key]);
  };

  if (keyboardEvents[word]) {
    keyDown(word);
  } else {
    word.split('').map((key) => keyDown(key));
  }
};
