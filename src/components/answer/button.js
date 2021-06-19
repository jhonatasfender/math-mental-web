import styled from 'styled-components';

const Btn = styled.button`
  width: 3rem;
  height: 3rem;
`;

const Button = ({ children, show, onClick, ...props }) => {
  const handleClick = () => {
    onClick(show);
  };

  return (
    <Btn type="button" onClick={handleClick} {...props}>
      {children}
    </Btn>
  );
};

export default Button;
