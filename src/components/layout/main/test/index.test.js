import Main from '@components/layout/main';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

describe('<Main />', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider theme={{ sector: 'addition' }}>
        <Main />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should click the button and switch to dark theme', () => {
    const { container } = render(
      <ThemeProvider theme={{ sector: 'addition' }}>
        <Main />
      </ThemeProvider>,
    );

    const buttonDark = screen.getByRole('button', { name: 'dark mode' });
    expect(buttonDark).toBeInTheDocument();
    userEvent.click(buttonDark);

    /**
     * validar se o tema realmente foi mudado
     */
    expect(container).toMatchSnapshot();
  });
});
