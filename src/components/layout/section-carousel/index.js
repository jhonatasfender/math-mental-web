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
  ${({ theme }) => css`
    color: ${theme.colors.colorsSectors(theme.sector).scale(2)};
  `}
`;

const Next = styled(ArrowIosForwardOutline)`
  ${({ theme: { sector, ...theme } }) => css`
    cursor: pointer;
    color: ${theme.colors.colorsSectors(sector).scale(0)};
    position: absolute;
    width: 10rem;
    right: -10rem;
    top: 6rem;
  `}
`;

const Previous = styled(ArrowIosBackOutline)`
  ${({ theme: { sector, ...theme } }) => css`
    cursor: pointer;
    color: ${theme.colors.colorsSectors(sector).scale(0)};
    position: absolute;
    width: 10rem;
    left: -9rem;
    top: 6rem;
    z-index: 3;
  `}
`;

const SectionCarousel = ({ name, formula, redirect, href }) => {
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
      <H1>{name}</H1>

      <Carousel ref={ref} role="list">
        <Previous
          onClick={handleClickPrevious}
          role="button"
          aria-label="previous"
          aria-hidden="false"
        />
        {Array.from({ length: 20 }, (_, i) => (
          <Card
            key={i}
            level={i + 1}
            progress={Math.floor(Math.random() * 100)}
            lock={i > 4}
            move={move}
            onClick={() => redirect(href)}
            role="listitem"
          >
            {formula}
          </Card>
        ))}
        <Next
          onClick={handleClickNext}
          role="button"
          aria-label="next"
          aria-hidden="false"
        />
      </Carousel>
    </Wrapper>
  );
};

export default SectionCarousel;
