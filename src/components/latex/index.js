import katex from 'katex';
import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: auto;
`;

const Node = ({ children, ...props }) => {
  const [html, setHtml] = useState('');

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
    setHtml(katex.renderToString(children, options));
  }, [children]);

  return <Container dangerouslySetInnerHTML={{ __html: html }} {...props} />;
};

export default memo(Node);
