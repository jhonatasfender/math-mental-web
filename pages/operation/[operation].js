import useGetOperation from '@components/operations/index';
import { useRouter } from 'next/router';

export default function Operation() {
  const { query, back } = useRouter();

  const component = useGetOperation(query.operation);

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
