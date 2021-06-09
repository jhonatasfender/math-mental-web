import Provider from '../src/components/Latex/Provider';

const App = ({ Component, pageProps }) => {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App;