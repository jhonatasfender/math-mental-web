import Node from '@components/latex';
import { useRouter } from 'next/router';

export default function Home() {
  const { push } = useRouter();

  const listOptions = [
    { href: '/operation/sum', formula: 'x + y' },
    { href: '/operation/subtraction', formula: 'x - y' },
    { href: '/operation/multiplication', formula: `x \\times y` },
    { href: '/operation/division', formula: `x \\div y` },
    { href: '/operation/fraction', formula: `\\frac{x}{y}` },
    { href: '/operation/squared', formula: `\\sqrt{x}` },
  ];

  return listOptions.map(({ href, formula }) => (
    <Node key={href} onClick={() => push(href)}>
      {formula}
    </Node>
  ));
}
