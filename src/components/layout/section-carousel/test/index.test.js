import SectionCarousel from '@components/layout/section-carousel';
import { renderWithMain } from '@utils-test/render-with-theme';
import { ThemeProvider } from 'styled-components';

describe('<SectionCarousel />', () => {
  it('should render', () => {
    const { container } = renderWithMain(
      <ThemeProvider theme={{ sector: 'addition' }}>
        <SectionCarousel />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
