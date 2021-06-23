import Card from '@components/layout/card';
import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import {
  ArrowIosBackOutline,
  ArrowIosForwardOutline,
} from 'styled-icons/evaicons-outline';

const Carousel = styled.div`
  display: flex;
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: relative;
  user-select: none;
`;

const H1 = styled.h1`
  ${({ theme, sector }) => css`
    color: ${theme.colors.colorsSectors(sector).scale(2)};
  `}
`;

const Next = styled(ArrowIosForwardOutline)`
  ${({ theme, sector }) => css`
    cursor: pointer;
    color: ${theme.colors.colorsSectors(sector).scale(0)};
    position: absolute;
    width: 10rem;
    right: -10rem;
    top: 6rem;
  `}
`;

const Previous = styled(ArrowIosBackOutline)`
  ${({ theme, sector }) => css`
    cursor: pointer;
    color: ${theme.colors.colorsSectors(sector).scale(0)};
    position: absolute;
    width: 10rem;
    left: -9rem;
    top: 6rem;
    z-index: 3;
  `}
`;

const SectionCarousel = ({ name, sector, formula, redirect, href }) => {
  const [move, setMove] = useState(0);
  const ref = useRef();
  const step = 13;

  const handleClickNext = () => {
    setMove((prev) => prev - step);
  };

  const handleClickPrevious = () => {
    setMove((prev) => (prev >= 0 ? 0 : prev + step));
  };

  return (
    <Wrapper>
      <H1 sector={sector}>{name}</H1>

      <Carousel ref={ref}>
        <Previous sector={sector} onClick={handleClickPrevious} />
        {Array.from({ length: 20 }, (_, i) => (
          <Card
            key={i}
            level={i + 1}
            progress={Math.floor(Math.random() * 100)}
            lock={i > 4}
            sector={sector}
            move={move}
            onClick={() => redirect(href)}
          >
            {formula}
          </Card>
        ))}
        <Next sector={sector} onClick={handleClickNext} />
      </Carousel>
    </Wrapper>
  );
};
export default SectionCarousel;
