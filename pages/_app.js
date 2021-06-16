import Provider from '@components/latex/provider';
import Head from 'next/head';

const App = ({ Component, pageProps }) => (
  <Provider>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
      />
    </Head>
    <Component {...pageProps} />
  </Provider>
);

export default App;
