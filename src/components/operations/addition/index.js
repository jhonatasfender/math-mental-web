import Answer from '@components/answer';
import Node from '@components/latex';
import Pretty from '@components/pretty/index';
import { useState } from 'react';

/**
 * TODO:
 * estou tendo problemas porque está repedindo
 */
const addY = Array.from({ length: 10 }, (_, i) => i++);
const addX = Array.from({ length: 10 }, () => addY);

const Addition = () => {
  const random = () => {
    console.table(addX);
    const x = Math.floor(Math.random() * addX.length);

    const y = Math.floor(Math.random() * addX[x - 1].length);
    addX[x - 1].splice(y, 1);

    return { x, y };
  };

  const draw = random();
  const [x, setX] = useState(draw.x);
  const [y, setY] = useState(draw.y);

  const render = (result, setResult) => {
    const calc = x + y;

    if (parseInt(result, 10) === calc) {
      setTimeout(() => {
        const { drawX, drawY } = random();
        setResult('');

        setX(drawX);
        setY(drawY);
      }, 1000);
    }

    return <Node>{`${x} + ${y} = ${result}`}</Node>;
  };

  return (
    <>
      <Answer viewing={render} />
      <Pretty>{addX}</Pretty>
    </>
  );
};

export default Addition;
