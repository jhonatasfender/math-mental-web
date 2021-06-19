import Answer from '@components/answer';
import Node from '@components/latex';
import styled from 'styled-components';
import useAddition from './use-addition';
import Validating from './validating';

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

    return <Node>{`${x} + ${y} = ${result}`}</Node>;
  };

  return (
    <Container>
      <Answer viewing={render} />
      <Validating>{column}</Validating>
    </Container>
  );
};

export default Addition;
