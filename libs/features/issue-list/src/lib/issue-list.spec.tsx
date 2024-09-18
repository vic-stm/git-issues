import { render } from '@testing-library/react';

import IssueList from './issue-list';

describe('IssueList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IssueList />);
    expect(baseElement).toBeTruthy();
  });
});
