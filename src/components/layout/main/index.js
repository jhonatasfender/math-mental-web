import Header from '@components/layout/header';
import { GlobalStyle } from '@theme/global-styles';
import theme from '@theme/theme';
import themeDark from '@theme/theme-dark';
import { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

const Container = styled.div`
  ${({ theme: themeLight }) => css`
    grid-area: body;
    padding: 1rem 17rem;
    background: ${themeLight.colors.background};
    overflow: auto;
  `}
`;

const Body = styled.main`
  display: grid;
  grid-template-columns: 0.2fr 1.8fr;
  grid-template-rows: 1fr;
  gap: 0 0;
  grid-template-areas: 'header body';
`;

const Main = ({ children }) => {
  const [isDark, setDark] = useState(false);

  const handleClick = () => {
    setDark((prev) => !prev);
  };
  return (
    <ThemeProvider theme={isDark ? themeDark : theme}>
      <Body>
        <GlobalStyle />
        <Header onClick={handleClick} />
        <Container>{children}</Container>
      </Body>
    </ThemeProvider>
  );
};

export default Main;
