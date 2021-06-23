import Wave from '@components/layout/card/wave';
import ProgressBar from '@components/layout/progress-bar';
import Node from '@components/latex/index';
import styled, { css } from 'styled-components';
import { Lock } from 'styled-icons/boxicons-regular';

const background = (lock, theme, sector) =>
  lock
    ? theme.colors.colorsSectors(sector).backgroundLock
    : theme.colors.colorsSectors(sector).scale(4);

const color = (lock, theme, sector) =>
  lock
    ? theme.colors.colorsSectors(sector).scale(9)
    : theme.colors.colorsSectors(sector).scale(10);

const CardWrapper = styled.div`
  ${({ theme, lock, sector, move }) => css`
    border-radius: 1rem;
    min-width: 13rem;
    width: 13rem;
    height: 13rem;
    box-shadow: 5px 0px 9px 0px ${theme.colors.colorsSectors(sector).scale(9)},
      -9px 0px 17px -3px ${theme.colors.colorsSectors(sector).scale(9)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    color: ${color(lock, theme, sector)};
    margin: 1rem;
    background: ${background(lock, theme, sector)};
    user-select: none;
    transform: translateX(${move ? `${move}rem` : '0'});
    transition: transform 1s;

    > span {
      font-size: 0.9rem;
      font-weight: 100;
    }
  `}
`;

const Footer = styled.div`
  ${({ theme, sector }) => css`
    width: 100%;
    background: ${theme.colors.colorsSectors(sector).wave};
    height: 3rem;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-items: center;
    z-index: 1;
  `}
`;

const NodeStyled = styled(Node)`
  font-size: 2rem;
  height: 8rem;
`;

const Blocked = styled(Lock)`
  width: 3rem;
`;

const Card = ({ level, progress, lock, sector, children, move, ...props }) => (
  <CardWrapper lock={lock} sector={sector} move={move} {...props}>
    {lock ? (
      <Blocked />
    ) : (
      <>
        <span>level {level}</span>
        <NodeStyled>{children}</NodeStyled>

        <Wave sector={sector} />
        <Footer sector={sector}>
          <ProgressBar progress={progress} sector={sector} />
        </Footer>
      </>
    )}
  </CardWrapper>
);

export default Card;
