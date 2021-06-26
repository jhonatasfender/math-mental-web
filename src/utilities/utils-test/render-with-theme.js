import Main from '@components/layout/main';
import { render } from '@testing-library/react';

export const renderWithTheme = (children) => render(<Main>{children}</Main>);
