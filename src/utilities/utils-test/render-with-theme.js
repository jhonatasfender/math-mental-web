import Main from '@components/layout/main';
import { render } from '@testing-library/react';

export const renderWithMain = (children) => render(<Main>{children}</Main>);
