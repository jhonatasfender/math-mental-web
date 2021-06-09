import styled from "styled-components";

const Container = styled.div`
  width: min-content;
`

const Node = ({ children }) => {  
  return <Container>$$ {children} $$</Container>
}


export default Node;