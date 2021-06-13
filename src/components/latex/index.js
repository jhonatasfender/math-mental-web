import { ContextMath } from '@components/latex/provider';
import { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: min-content;
`;

const Node = ({ children, ...props }) => {
  const ref = useRef();
  const MathJax = useContext(ContextMath);

  useEffect(() => {
    if (MathJax) {
      ref.current.innerHTML = '';
      const html = MathJax.tex2chtml(children);
      ref.current.appendChild(html);
      // TODO: verificar o problema do porque não está atualizar o chtml
      console.log(children, html);
    }
  }, [children]);

  return (
    <Container ref={ref} {...props}>
      $$
      {children}
      $$
    </Container>
  );
};

export default Node;
