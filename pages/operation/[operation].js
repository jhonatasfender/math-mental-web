import useGetOperation from '@components/operations/index';
import { useRouter } from 'next/router';
import styled, { css, ThemeProvider } from 'styled-components';
import { ArrowIosBackOutline } from 'styled-icons/evaicons-outline';
import ProgressBar from '@components/layout/progress-bar';

const Container = styled.div`
  ${({ theme: { sector, ...theme } }) => css`
    width: 100%;
    background: ${theme.colors.colorsSectors(sector).scale(3)};
    color: ${theme.colors.colorsSectors(sector).scale(10)};
    border-radius: 1rem;
    box-shadow: 5px 0px 9px 0px ${theme.colors.colorsSectors(sector).scale(9)},
      -9px 0px 17px -3px ${theme.colors.colorsSectors(sector).scale(9)};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    user-select: none;
  `}
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Back = styled(ArrowIosBackOutline)`
  width: 2rem;
  cursor: pointer;
`;

const Center = styled.div`
  width: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Operation() {
  const { query, back } = useRouter();

  const component = useGetOperation(query.operation);

  return (
    <ThemeProvider theme={{ sector: query.operation }}>
      {query.operation && (
        <Container>
          <Header>
            <Back onClick={() => back()} />
            <Center>
              <span>{query.operation}</span>
              <ProgressBar />
            </Center>
            <span>HINT</span>
          </Header>

          {component}
        </Container>
      )}
    </ThemeProvider>
  );
}
