import { render } from '@testing-library/react';
import React from 'react';
import QueueInfo from '.';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: (arg) => arg,
}));
jest.mock('store/asyncActions', () => ({
  useGetQueueInfo: jest.fn(),
}));
jest.mock('store/selectedQueue', () => ({
  selectMaxQueueCapacity: 57,
}));
jest.mock('store/queueInfo', () => ({
  selectQueueInfo: { numberOfActiveTokens: 24 },
}));

describe('Queue info', () => {
  it('should render available queue slots', () => {
    const { getByTestId } = render(<QueueInfo />);
    expect(getByTestId('slots-value')).toHaveTextContent('33');
  });
});
