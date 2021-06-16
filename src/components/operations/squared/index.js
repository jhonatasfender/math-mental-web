import Node from '@components/latex';
import Answer from '@components/answer';

export default function Squared() {
  return (
    <Answer viewing={(result) => <Node>{`\\sqrt{x} = ${result}`}</Node>} />
  );
}
