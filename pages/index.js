import Card from '@components/layout/card';
import styled, { css } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Carousel = styled.div`
  display: flex;
  overflow: hidden;
`;

const H1 = styled.h1`
  ${({ theme, sector }) => css`
    color: ${theme.colors.colorsSectors(sector).scale(2)};
  `}
`;

const listOptions = [
  {
    id: uuidv4(),
    sector: 'addition',
    name: 'Adição',
    href: '/operation/sum',
    formula: 'x + y',
  },
  {
    id: uuidv4(),
    sector: 'subtraction',
    name: 'Subtração',
    href: '/operation/subtraction',
    formula: 'x - y',
  },
  {
    id: uuidv4(),
    sector: 'multiplication',
    name: 'Multiplicação',
    href: '/operation/multiplication',
    formula: `x \\times y`,
  },
  {
    id: uuidv4(),
    sector: 'division',
    name: 'Divisão',
    href: '/operation/division',
    formula: `x \\div y`,
  },
  {
    id: uuidv4(),
    sector: 'percentage',
    name: 'Porcentagem',
    href: '/operation/percentage',
    formula: `%`,
  },
  {
    id: uuidv4(),
    sector: 'fraction',
    name: 'Fração',
    href: '/operation/fraction',
    formula: `\\frac{x}{y}`,
  },
  {
    id: uuidv4(),
    sector: 'sqrt',
    name: 'Raiz',
    href: '/operation/squared',
    formula: `\\sqrt{x}`,
  },
];

export default function Home() {
  return (
    <>
      {listOptions.map(({ name, sector, id, formula }) => (
        <div>
          <H1 sector={sector}>{name}</H1>

          <Carousel key={id}>
            {Array.from({ length: 20 }, (_, i) => (
              <Card
                key={id + i}
                level={i + 1}
                progress={Math.floor(Math.random() * 100)}
                lock={i > 4}
                sector={sector}
              >
                {formula}
              </Card>
            ))}
          </Carousel>
        </div>
      ))}
    </>
  );
}
