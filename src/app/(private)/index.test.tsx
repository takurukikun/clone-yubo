import { render } from '@testing-library/react-native';

import { CompTest } from './index';

describe('<App />', () => {
  it('renders Hello World message on the home page', async () => {
    const rendered = render(<CompTest />);
    expect(rendered.getByText('CompTest')).toBeTruthy();
  });
});
