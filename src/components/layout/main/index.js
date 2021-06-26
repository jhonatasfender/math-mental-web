import Header from '@components/layout/Header';
import { Container, GlobalStyle } from '@theme/global-styles';
import theme from '@theme/theme';
import themeDark from '@theme/theme-dark';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

const Main = ({ children }) => {
  const [isDark, setDark] = useState(false);

  const handleClick = () => {
    setDark((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDark ? themeDark : theme}>
      <GlobalStyle />
      <Header onClick={handleClick} />
      <Container>{children}</Container>
    </ThemeProvider>
  );
};

export default Main;
