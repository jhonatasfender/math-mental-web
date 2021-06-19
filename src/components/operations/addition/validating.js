import styled, { css } from 'styled-components';

const Td = styled.td`
  ${({ deleted }) => css`
    background: ${deleted ? 'none' : 'red'};
  `}
`;

const Validating = ({ children }) => {
  const copy = [];
  const row = [];
  for (let x = 0; x < 10; x++) {
    const body = [];

    for (let y = 1; y < 10; y++) {
      if (!copy[x]) copy[x] = [];
      copy[x][y - 1] = y;

      body[y] = (
        <Td key={y} deleted={children[x].includes(y)}>
          {y}
        </Td>
      );
    }
    row[x] = (
      <tr key={x}>
        <td>
          {x} {`=>`}
        </td>
        {body}
      </tr>
    );
  }
  return (
    <table>
      <tbody>{row}</tbody>
    </table>
  );
};

export default Validating;
