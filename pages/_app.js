import Provider from '@components/latex/provider';

const App = ({ Component, pageProps }) => (
  <Provider>
    <Component {...pageProps} />
  </Provider>
);

export default App;
