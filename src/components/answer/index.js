import { useEffect, useState } from 'react';
import Node from '@components/latex';
import styled from 'styled-components';
import Button from './button';

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: min-content;
`;

const Container = styled.div``;

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

export default function Answer({ viewing }) {
  const [result, setResult] = useState('');

  const callKeys = ({ key }) => {
    if (allowedKeys.includes(key) && key !== 'c') {
      setResult((prev) => `${prev}${key}`);
    } else if (key === 'c' || key === 'Backspace') {
      setResult('');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', callKeys);

    return () => {
      window.removeEventListener('keydown', callKeys);
    };
  }, []);

  const handleClick = (number) => {
    setResult(number.toUpperCase() === 'C' ? '' : (prev) => `${prev}${number}`);
  };

  return (
    <Container>
      {viewing && viewing(result, setResult)}

      <Buttons>
        {allowedKeys.map((number) => (
          <Button key={number} onClick={handleClick} show={number}>
            <Node>{number.toUpperCase()}</Node>
          </Button>
        ))}
      </Buttons>
    </Container>
  );
}
