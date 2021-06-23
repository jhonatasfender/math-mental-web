import SectionCarousel from '@components/layout/section-carousel';
import { useRouter } from 'node_modules/next/router';
import { v4 as uuidv4 } from 'uuid';

const listOptions = [
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

  return listOptions.map(({ id, ...options }) => (
    <SectionCarousel {...options} key={id} redirect={redirect} />
  ));
}
