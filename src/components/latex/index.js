import { ContextKatex } from '@components/latex/provider';
import { memo, useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ fontSize }) => css`
    width: auto;
  `}
`;

const Node = ({ children, ...props }) => {
  const [html, setHtml] = useState('');
  const Katex = useContext(ContextKatex);

  const options = {
    displayMode: false,
    leqno: true,
    fleqn: true,
    throwOnError: true,
    strict: 'warn',
    output: 'html',
    trust: false,
    macros: { '\\f': '#1f(#2)' },
  };

  useEffect(() => {
    if (Katex) {
      setHtml(Katex.renderToString(children, options));
    }
  }, [children, Katex]);

  return <Container dangerouslySetInnerHTML={{ __html: html }} {...props} />;
};

export default memo(Node);
