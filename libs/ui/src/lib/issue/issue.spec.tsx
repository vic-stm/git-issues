import { render } from '@testing-library/react';

import Issue from './issue';

describe('Issue', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Issue />);
    expect(baseElement).toBeTruthy();
  });
});
