import styled from 'styled-components';
import { DarkTheme } from 'styled-icons/fluentui-system-filled';

const HeaderStyle = styled.header`
  display: flex;
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
