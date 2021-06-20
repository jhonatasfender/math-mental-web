import Answer from '@components/answer';
import Node from '@components/latex';
import styled from 'styled-components';
import useAddition from './use-addition';

/**
 * TODO:
 * agora é preciso executar a deleção do primeiro
 * nível quando não tiver nenhum número para ser sorteado
 *
 * está acontecendo um bug muito estranho estou tentando valida
 * mas não consigo localizar, em alguns cenários quando está gerando
 * um novo calculo não está aparecendo selecionando a coluna y corretamente
 */

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
