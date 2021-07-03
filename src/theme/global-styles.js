import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
    
  body {
    margin: 0;
    padding: 5rem;
    overflow: hidden;
    height: 84vh;
    background: #4B5074;
  }
`;
