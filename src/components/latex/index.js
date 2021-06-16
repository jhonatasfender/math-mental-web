import { ContextKatex } from '@components/latex/provider';
import { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ fontSize }) => css`
    width: auto;

    .katex {
      font-size: ${fontSize || '1rem'};
      font-family: Roboto, sans-serif;
    }
  `}
`;

const Node = ({ children, ...props }) => {
  const [html, setHtml] = useState('');
  const Katex = useContext(ContextKatex);

  useEffect(() => {
    if (Katex) {
      setHtml(Katex.renderToString(children, { throwOnError: false }));
    }
  }, [children, Katex]);

  return <Container dangerouslySetInnerHTML={{ __html: html }} {...props} />;
};

export default Node;
