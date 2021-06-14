import Node from '@components/latex';
import Answer from '../answer';

export default function Fraction() {
  return (
    <Answer viewing={(result) => <Node>{`\\frac{x}{y} = ${result}`}</Node>} />
  );
}
