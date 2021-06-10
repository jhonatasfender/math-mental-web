import Provider from '@components/Latex/Provider';

const App = ({ Component, pageProps }) => {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App;