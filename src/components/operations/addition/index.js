import Answer from '@components/answer';
import Node from '@components/latex';
import styled from 'styled-components';
import useAddition from './use-addition';

const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

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

    return column ? (
      <Node aria-label="operation">{`${x} + ${y} = ${result}`}</Node>
    ) : (
      <span>Você terminou!</span>
    );
  };

  return (
    <Container>
      <Answer viewing={render} />
    </Container>
  );
};

export default Addition;
