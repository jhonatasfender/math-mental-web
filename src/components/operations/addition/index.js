import Answer from '@components/answer';
import Node from '@components/latex';
import { useState } from 'react';

export default function Addition() {
  const random = () => Math.floor(Math.random() * 10);

  const [x, setX] = useState(random());
  const [y, setY] = useState(random());

  const render = (result, setResult) => {
    const calc = x + y;

    if (parseInt(result, 10) === calc) {
      setTimeout(() => {
        setResult('');

        setX(random());
        setY(random());
      }, 1000);
    }

    return <Node>{`${x} + ${y} = ${result}`}</Node>;
  };
  return <Answer viewing={render} />;
}
