import { useRouter } from 'next/router';
import getOperation from './list-operation';

export default function Operation() {
  const { query, back } = useRouter();

  const component = getOperation(query.operation);

  return (
    <>
      <h1>{query.operation}</h1>

      {component}

      <button type="button" onClick={() => back()}>
        Click here to go back
      </button>
    </>
  );
}
