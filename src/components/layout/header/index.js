import styled from 'styled-components';
import { DarkTheme } from 'styled-icons/fluentui-system-filled';

const HeaderStyle = styled.header`
  display: flex;
`;

const Dark = styled(DarkTheme)`
  width: 3rem;
`;

const Header = ({ onClick }) => (
  <HeaderStyle>
    <Dark onClick={onClick} />
  </HeaderStyle>
);
export default Header;
