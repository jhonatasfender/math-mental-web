import Node from '@components/latex';
import Answer from '@components/answer';

export default function Subtraction() {
  return <Answer viewing={(result) => <Node>{`x - y = ${result}`}</Node>} />;
}
