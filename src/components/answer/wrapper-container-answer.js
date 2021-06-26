import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Viewing = styled.div`
  ${({ theme: { sector, ...theme } }) => css`
    background: ${theme.colors.colorsSectors(sector).scale(10)};
    color: ${theme.colors.colorsSectors(sector).scale(0)};
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10rem;
    border-radius: 0.5rem;
    box-shadow: 5px 0px 9px 0px ${theme.colors.colorsSectors(sector).scale(2)},
      -9px 0px 17px -3px ${theme.colors.colorsSectors(sector).scale(2)};
    min-width: 9rem;
    width: 47rem;
    font-size: 2rem;
  `}
`;

const WrapperContainerAnswer = ({ viewing, children, ...props }) => (
  <Container {...props}>
    <Viewing>{viewing}</Viewing>
    {children}
  </Container>
);

export default WrapperContainerAnswer;
