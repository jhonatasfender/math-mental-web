import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

      ::-webkit-scrollbar {
        width: 0.4rem;
      }

      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px ${theme.colors.background};
        border-radius: 1rem;
      }

      ::-webkit-scrollbar-thumb {
        background: ${theme.colors.background};
        border-radius: 1rem;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${theme.colors.background};
      }
    }

    body {
      margin: 0;
      padding: 5rem;
      overflow: hidden;
      height: 84vh;
      background-image: linear-gradient(
        to right bottom,
        #3f37c9,
        #5235c7,
        #6232c4,
        #6f2fc2,
        #7b2cbf
      );
    }
  `}
`;
