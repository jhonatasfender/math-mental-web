import Division from '@components/operations/division';
import Fraction from '@components/operations/fraction';
import Multiplication from '@components/operations/multiplication';
import Squared from '@components/operations/squared';
import Subtraction from '@components/operations/subtraction';
import Sum from '@components/operations/sum';

export default function Home() {
  const listOptions = [
    <Sum key="1" />,
    <Subtraction key="2" />,
    <Multiplication key="3" />,
    <Division key="4" />,
    <Fraction key="5" />,
    <Squared key="6" />,
  ];

  return listOptions;
}
