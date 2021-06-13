import Node from '@components/latex';
import Answer from '../answer';

export default function Sum() {
  return <Answer viewing={(result) => <Node>{`x + y = ${result}`}</Node>} />;
}
