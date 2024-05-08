import { render } from '@testing-library/react-native';

import Home from '.';

describe('<App />', () => {
  it('renders Hello World message on the home page', async () => {
    const rendered = render(<Home />);
    expect(rendered.getByText('Sign Out')).toBeTruthy();
  });
});
