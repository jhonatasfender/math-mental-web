import styled from 'styled-components';
import { DarkTheme } from 'styled-icons/fluentui-system-filled';

const HeaderStyle = styled.header`
  display: flex;
  border-radius: 1rem;
  background-image: linear-gradient(
    to bottom,
    #131942,
    #232262,
    #3a2982,
    #582da2,
    #7b2cbf
  );
`;

const Dark = styled(DarkTheme)`
  width: 3rem;
  grid-area: header;
`;

const Header = ({ onClick }) => (
  <HeaderStyle>
    <Dark
      onClick={onClick}
      type="button"
      role="button"
      aria-hidden="false"
      aria-label="dark mode"
    />
  </HeaderStyle>
);
export default Header;
