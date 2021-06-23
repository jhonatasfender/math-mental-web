import { Container } from '@theme/global-styles';
import theme from '@theme/theme';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
      />
    </Head>
    <ThemeProvider theme={theme}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  </>
);

export default App;
