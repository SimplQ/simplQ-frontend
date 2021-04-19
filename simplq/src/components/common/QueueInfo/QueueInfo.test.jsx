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
  selectQueueInfo: jest.fn(),
}));

describe('Queue info', () => {
  it('should render queue capacity', () => {
    const { getByText } = render(<QueueInfo />);
    getByText('57');
  });
});
