import Node from '@components/latex';
import Answer from '@components/answer';

export default function Fraction() {
  return (
    <Answer viewing={(result) => <Node>{`\\frac{x}{y} = ${result}`}</Node>} />
  );
}
