import Header from '@components/layout/header';
import { GlobalStyle } from '@theme/global-styles';
import theme from '@theme/theme';
import themeDark from '@theme/theme-dark';
import { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

const Container = styled.div`
  grid-area: body;
  padding: 1rem 10rem;
  overflow: auto;
`;

const Body = styled.main`
  ${() => css`
    display: grid;
    grid-template-columns: 0.2fr 1.8fr;
    grid-template-rows: 82.2vh;
    gap: 0 0;
    grid-template-areas: 'header body';
    border-radius: 1rem;
    background-image: linear-gradient(
      to right bottom,
      #d698df,
      #d5aae6,
      #d7baea,
      #dacaed,
      #e0d9ee,
      #e1dbf0,
      #e3dcf2,
      #e4def4,
      #e1d3f9,
      #dfc8fc,
      #e0bcfe,
      #e2afff
    );
    border: 0.4rem solid transparent;
    position: relative;
    background-clip: padding-box;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -0.6rem;
      border-radius: inherit;
      background-image: inherit;
    }
  `}
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
