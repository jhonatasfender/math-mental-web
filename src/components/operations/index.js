import Addition from '@components/operations/addition';
import Division from '@components/operations/division';
import Fraction from '@components/operations/fraction';
import Multiplication from '@components/operations/multiplication';
import Squared from '@components/operations/squared';
import Subtraction from '@components/operations/subtraction';

const operations = {
  addition: <Addition />,
  subtraction: <Subtraction />,
  multiplication: <Multiplication />,
  division: <Division />,
  fraction: <Fraction />,
  sqrt: <Squared />,
};

export default function useGetOperation(operation) {
  return operations[operation];
}
