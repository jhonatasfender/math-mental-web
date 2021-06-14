import Node from '@components/latex';
import Answer from '../answer';

export default function Multiplication() {
  return (
    <Answer viewing={(result) => <Node>{`x \\times y = ${result}`}</Node>} />
  );
}
