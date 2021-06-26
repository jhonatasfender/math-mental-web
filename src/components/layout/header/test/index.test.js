import Header from '@components/layout/header';
import { renderWithMain } from '@utils-test/render-with-theme';

describe('<Header />', () => {
  it('should render', () => {
    const { container } = renderWithMain(<Header />);

    expect(container).toMatchSnapshot();
  });
});
