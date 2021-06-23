import styled, { css } from 'styled-components';

const ProgressBarWrapper = styled.div`
  width: 100%;
  background: #e8e6e5;
  height: 0.7rem;
  border-radius: 1rem;
  margin: 0 1rem;
`;

const Bar = styled.div`
  ${({ theme, progress, sector }) => css`
    background: ${theme.colors.colorsSectors(sector).scale(5)};
    width: ${progress ? `${progress}%` : '30%'};
    height: 100%;
    border-radius: 1rem;
  `}
`;

const ProgressBar = ({ progress, sector }) => (
  <ProgressBarWrapper>
    <Bar progress={progress} sector={sector} />
  </ProgressBarWrapper>
);

export default ProgressBar;
