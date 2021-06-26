import styled, { css } from 'styled-components';

const Btn = styled.button`
  ${({ theme: { sector, ...theme } }) => css`
    background: ${theme.colors.colorsSectors(sector).backgroundDefault};
    color: ${theme.colors.colorsSectors(sector).scale(0)};
    font-size: 1.3rem;
    width: 3rem;
    height: 3rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: 5px 0px 9px 0px ${theme.colors.colorsSectors(sector).scale(2)},
      -9px 0px 17px -3px ${theme.colors.colorsSectors(sector).scale(2)};
  `}
`;

const Button = ({ children, show, onClick, ...props }) => {
  const handleClick = () => onClick(show);

  return (
    <Btn type="button" aria-label={show} onClick={handleClick} {...props}>
      {children}
    </Btn>
  );
};

export default Button;
