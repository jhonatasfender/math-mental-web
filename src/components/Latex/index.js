import { ContextMath } from '@components/Latex/Provider';
import { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: min-content;
`;

const Node = ({ children }) => {
  const ref = useRef();
  const MathJax = useContext(ContextMath);

  useEffect(() => {
    if (MathJax) {
      ref.current.innerHTML = '';
      ref.current.appendChild(MathJax.tex2chtml(children));
    }
  }, [children, MathJax]);

  return (
    <Container ref={ref}>
      $$
      {' '}
      {children}
      {' '}
      $$
    </Container>
  );
};

export default Node;
