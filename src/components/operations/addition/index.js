import Answer from '@components/answer';
import Node from '@components/latex';
import Pretty from '@components/pretty/index';
import { useEffect, useState } from 'react';

/**
 * TODO:
 * agora é preciso executar a deleção do primeiro
 * nível quando não tiver nenhum número para ser sorteado
 */

const colY = Array.from({ length: 10 }, (_, i) => i++);

const useAddition = () => {
  const [question, setQuestion] = useState({ x: 0, y: 0 });
  const [column, setColumn] = useState(
    Array.from({ length: 10 }, () => [...colY]),
  );

  const random = () => {
    const x = Math.floor(Math.random() * column.length);

    const y = Math.floor(Math.random() * column[x].length);

    column[x].splice(y, 1);

    console.table(column);

    setColumn(column);

    console.log({ x, y });

    setQuestion({ x, y });
  };

  useEffect(() => {
    random();
  }, []);

  return [question.x, question.y, random, column];
};

const Addition = () => {
  const [x, y, random, column] = useAddition();

  const render = (result, setResult) => {
    const calc = x + y;

    if (parseInt(result, 10) === calc) {
      setTimeout(() => {
        setResult('');
        random();
      }, 1000);
    }

    return <Node>{`${x} + ${y} = ${result}`}</Node>;
  };

  return (
    <>
      <Answer viewing={render} />
      <Pretty key={new Date().toISOString()}>{column}</Pretty>
    </>
  );
};

export default Addition;
