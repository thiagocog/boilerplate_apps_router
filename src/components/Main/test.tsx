import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    // render the component
    const { container } = render(<Main />);

    // get the element and verify its existence
    expect(
      screen.getByRole('heading', { name: 'Advanced React' })
    ).toBeInTheDocument();

    // generate snapshot
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the colors correctly', () => {
    // render the component
    const { container } = render(<Main />);

    // verify if the background-color is correct
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
