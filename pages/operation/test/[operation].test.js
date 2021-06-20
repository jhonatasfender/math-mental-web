import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';
import userEvent from '@testing-library/user-event';

describe('[operation]', () => {
  it('should render operation page', async () => {
    const { render } = await getPage({
      route: '/operation/sum',
    });

    const { nextRoot } = render();

    const text = await screen.getByText('sum');

    expect(text).toBeInTheDocument();
    expect(nextRoot).toMatchSnapshot();
  });

  it('should come back when clicking the button', async () => {
    const { render } = await getPage({
      route: '/operation/sum',
    });

    render();

    const button = await screen.getByText('Click here to go back');

    expect(button).toBeInTheDocument();

    userEvent.click(button);
  });
});
