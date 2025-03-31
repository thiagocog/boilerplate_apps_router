import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    // render the component
    const { container } = render(<Main />);

    // get the element and verify its existence
    expect(screen.getByRole('heading', { name: 'Advanced React' })).toBeInTheDocument();

    // generate snapshot
    expect(container.firstChild).toMatchSnapshot();
  });
});
