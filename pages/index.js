import SectionCarousel from '@components/layout/section-carousel';
import { useRouter } from 'node_modules/next/router';
import { ThemeProvider } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

export const listOptions = [
  {
    id: uuidv4(),
    sector: 'addition',
    name: 'Adição',
    href: '/operation/addition',
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
    formula: String.raw`x \times y`,
  },
  {
    id: uuidv4(),
    sector: 'division',
    name: 'Divisão',
    href: '/operation/division',
    formula: String.raw`x \div y`,
  },
  {
    id: uuidv4(),
    sector: 'percentage',
    name: 'Porcentagem',
    href: '/operation/percentage',
    formula: String.raw`\%`,
  },
  {
    id: uuidv4(),
    sector: 'fraction',
    name: 'Fração',
    href: '/operation/fraction',
    formula: String.raw`\frac{x}{y}`,
  },
  {
    id: uuidv4(),
    sector: 'sqrt',
    name: 'Raiz',
    href: '/operation/squared',
    formula: String.raw`\sqrt{x}`,
  },
];

export default function Home() {
  const { push } = useRouter();

  const redirect = (href) => push(href);

  return listOptions.map(({ id, sector, ...options }) => (
    <ThemeProvider theme={{ sector }} key={id}>
      <SectionCarousel {...options} redirect={redirect} />
    </ThemeProvider>
  ));
}
