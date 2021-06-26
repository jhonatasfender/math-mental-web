import SectionCarousel from '@components/layout/section-carousel';
import { renderWithMain } from '@utils-test/render-with-theme';
import { ThemeProvider } from 'styled-components';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

describe('<SectionCarousel />', () => {
  it('should go forward when clicking the next button', () => {
    renderWithMain(
      <ThemeProvider theme={{ sector: 'addition' }}>
        <SectionCarousel />
      </ThemeProvider>,
    );

    const next = screen.getByRole('button', { name: 'next' });

    userEvent.click(next);

    screen.getAllByRole('listitem').forEach((el) => {
      expect(el).toHaveStyle({ transform: 'translateX(-13rem)' });
    });

    userEvent.click(next);
    userEvent.click(next);

    screen.getAllByRole('listitem').forEach((el) => {
      expect(el).toHaveStyle({ transform: 'translateX(-39rem)' });
    });
  });

  it('should go forward when clicking the previous button', () => {
    renderWithMain(
      <ThemeProvider theme={{ sector: 'addition' }}>
        <SectionCarousel />
      </ThemeProvider>,
    );

    const previous = screen.getByRole('button', { name: 'previous' });

    const next = screen.getByRole('button', { name: 'next' });
    userEvent.click(next);
    userEvent.click(next);
    userEvent.click(next);

    userEvent.click(previous);

    screen.getAllByRole('listitem').forEach((el) => {
      expect(el).toHaveStyle({ transform: 'translateX(-26rem)' });
    });

    userEvent.click(previous);
    userEvent.click(previous);

    screen.getAllByRole('listitem').forEach((el) => {
      expect(el).toHaveStyle({ transform: 'translateX(0)' });
    });

    userEvent.click(previous);
    userEvent.click(previous);

    screen.getAllByRole('listitem').forEach((el) => {
      expect(el).toHaveStyle({ transform: 'translateX(0)' });
    });
  });

  it('should call the redirect function when clicking', () => {
    const redirect = jest.fn();

    renderWithMain(
      <ThemeProvider theme={{ sector: 'addition' }}>
        <SectionCarousel redirect={redirect} />
      </ThemeProvider>,
    );

    userEvent.click(screen.getByRole('listitem', { name: 'level 2' }));

    expect(redirect).toHaveBeenCalledTimes(1);
  });
});
