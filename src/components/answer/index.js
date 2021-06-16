import { useEffect, useState } from 'react';
import Node from '@components/latex';
import styled from 'styled-components';

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: min-content;
`;

const Btn = styled.button`
  width: 3rem;
  height: 3rem;
`;

export function Button({ children, show, onClick, ...props }) {
  const handleClick = () => {
    onClick(show);
  };

  return (
    <Btn type="button" onClick={handleClick} {...props}>
      {children}
    </Btn>
  );
}
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
    } else if (allowedKeys.includes(key) && key === 'c') {
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
    <>
      {viewing && viewing(result, setResult)}

      <Buttons>
        {allowedKeys.map((number) => (
          <Button key={number} onClick={handleClick} show={number}>
            <Node>{number.toUpperCase()}</Node>
          </Button>
        ))}
      </Buttons>
    </>
  );
}
