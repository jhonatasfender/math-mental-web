import { useState } from 'react';
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

export function Button({ children, onClick, ...props }) {
  const handleClick = () => {
    onClick(children);
  };

  return (
    <Btn type="button" onClick={handleClick} {...props}>
      {children}
    </Btn>
  );
}

export default function Answer({ viewing }) {
  const [result, setResult] = useState('');

  const handleClick = (number) => {
    setResult((prev) => `${prev}${number}`);
  };

  return (
    <>
      {viewing && viewing(result)}

      <Buttons>
        <Button onClick={handleClick}>1</Button>
        <Button onClick={handleClick}>2</Button>
        <Button onClick={handleClick}>3</Button>
        <Button onClick={handleClick}>4</Button>
        <Button onClick={handleClick}>5</Button>
        <Button onClick={handleClick}>6</Button>
        <Button onClick={handleClick}>7</Button>
        <Button onClick={handleClick}>8</Button>
        <Button onClick={handleClick}>9</Button>
        <Button onClick={handleClick}>0</Button>
        <Button onClick={handleClick}>,</Button>
        <Button onClick={handleClick} />
      </Buttons>
    </>
  );
}
