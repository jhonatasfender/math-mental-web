import { useEffect, useState } from 'react';

const colY = Array.from({ length: 9 }, (_, i) => i + 1);

const useAddition = () => {
  const [question, setQuestion] = useState({ x: 0, y: 0 });
  const [column, setColumn] = useState(
    Array.from({ length: 10 }, (_, i) => ({ x: i, ys: [...colY] })),
  );

  const random = () => {
    let x;
    let y;

    setColumn((prev) => {
      if (!prev.length) {
        return null;
      }

      const drawX = Math.floor(Math.random() * prev.length);
      const drawY = Math.floor(Math.random() * prev[drawX].ys.length);
      x = prev[drawX].x;
      y = prev[drawX].ys[drawY];

      prev[drawX].ys.splice(drawY, 1);

      if (!prev[drawX].ys.length) {
        prev.splice(drawX, 1);
      }

      return prev;
    });

    setQuestion({ x, y });
  };

  useEffect(() => {
    random();
  }, []);

  return [question.x, question.y, random, column];
};

export default useAddition;
