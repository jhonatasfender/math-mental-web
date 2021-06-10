import { useRouter } from 'next/route';

export default function Operation() {
  const { query } = useRouter();

  return <h1>teste</h1>;
}
