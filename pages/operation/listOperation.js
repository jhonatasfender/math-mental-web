import Division from '@components/operations/division';
import Fraction from '@components/operations/fraction';
import Multiplication from '@components/operations/multiplication';
import Squared from '@components/operations/squared';
import Subtraction from '@components/operations/subtraction';
import Sum from '@components/operations/sum';

const operations = {
  sum: <Sum />,
  subtraction: <Subtraction />,
  multiplication: <Multiplication />,
  division: <Division />,
  fraction: <Fraction />,
  squared: <Squared />,
};

export default function getOperation(operation) {
  return operations[operation];
}
