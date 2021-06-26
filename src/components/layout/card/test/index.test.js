import Card from '@components/layout/card';
import { renderWithMain } from '@utils-test/render-with-theme';
import { ThemeProvider } from 'styled-components';

describe('<Card />', () => {
  it('should render', () => {
    const { container } = renderWithMain(
      <ThemeProvider theme={{ sector: 'addition' }}>
        <Card />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
