import { useEffect, useState } from 'react';

const colY = Array.from({ length: 9 }, (_, i) => i + 1);

const useAddition = () => {
  const [question, setQuestion] = useState({ x: 0, y: 0 });
  const [column, setColumn] = useState(
    Array.from({ length: 10 }, () => [...colY]),
  );

  const random = () => {
    const x = Math.floor(Math.random() * column.length);
    const y = Math.floor(Math.random() * (column[x].length - 1) + 1);

    column[x].splice(y - 1, 1);

    console.table(column);
    console.log(` ${x} + ${y} `);

    setColumn(column);
    setQuestion({ x, y });
  };

  useEffect(() => {
    random();
  }, []);

  return [question.x, question.y, random, column];
};

export default useAddition;
