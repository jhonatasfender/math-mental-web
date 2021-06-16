import Node from '@components/latex';
import Answer from '@components/answer';

export default function Division() {
  return (
    <Answer viewing={(result) => <Node>{`x \\div y = ${result}`}</Node>} />
  );
}
