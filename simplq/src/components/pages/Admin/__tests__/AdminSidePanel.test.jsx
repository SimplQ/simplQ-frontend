import { render } from '@testing-library/react';
import React from 'react';
import AdminSidePanel from '../AdminSidePanel';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => 'pending',
}));

describe('Admin Side Panel', () => {
  it('should render the component', () => {
    const { getByText } = render(<AdminSidePanel queueId="d3-220c-4b" />);
    getByText('Queue Settings');
  });
});
