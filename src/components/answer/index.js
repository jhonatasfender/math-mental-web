import { useEffect, useState } from 'react';
import Node from '@components/latex';
import styled from 'styled-components';
import Button from '@components/answer/button';
import WrapperContainerAnswer from '@components/answer/wrapper-container-answer';

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: min-content;
`;
const allowedKeys = [
  '7',
  '8',
  '9',
  '4',
  '5',
  '6',
  '1',
  '2',
  '3',
  '0',
  ',',
  'c',
];

export default function Answer({ viewing, ...props }) {
  const [result, setResult] = useState('');

  const prevState = (prev, key) => {
    if (key === ',' && (prev.match(/,/g) || []).length === 1) {
      return prev;
    }

    return `${prev}${key}`;
  };

  useEffect(() => {
    const callKeys = ({ key }) => {
      if (allowedKeys.includes(key) && key !== 'c') {
        setResult((prev) => prevState(prev, key));
      } else if (key === 'c' || key === 'Backspace') {
        setResult('');
      }
    };

    window.addEventListener('keydown', callKeys);

    return () => {
      window.removeEventListener('keydown', callKeys);
    };
  }, []);

  const handleClick = (number) => {
    setResult(
      number.toUpperCase() === 'C' ? '' : (prev) => prevState(prev, number),
    );
  };

  return (
    <WrapperContainerAnswer
      {...props}
      viewing={viewing && viewing(result, setResult)}
    >
      <Buttons>
        {allowedKeys.map((number) => (
          <Button key={number} onClick={handleClick} show={number}>
            <Node>{number.toUpperCase()}</Node>
          </Button>
        ))}
      </Buttons>
    </WrapperContainerAnswer>
  );
}
