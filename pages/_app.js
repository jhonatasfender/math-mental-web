import Provider from '@components/Latex/Provider';

const App = ({ Component, pageProps }) => (
  <Provider>
    <Component {...pageProps} />
  </Provider>
);

export default App;
