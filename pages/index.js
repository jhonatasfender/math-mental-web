import Node from "@components/Latex";

export default function Home() {
  const listOptions = [
    'x + y',
    'x - y',
    'x \\times y',
    'x \\div y',
    '\\frac{x}{y}',
    '\\sqrt{x}'
  ];

  return listOptions.map(operation => <Node>{operation}</Node>)
}