import Main from '@components/layout/main/index';
import Head from 'next/head';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
      />
    </Head>
    <Main>
      <Component {...pageProps} />
    </Main>
  </>
);

export default App;
