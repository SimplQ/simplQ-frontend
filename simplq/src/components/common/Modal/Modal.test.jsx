import React from 'react';
import { render } from '@testing-library/react';
import Modal from '.';

describe('Modal', () => {
  it('should render the modal if it is open', () => {
    const { getByText } = render(<Modal open>Hello</Modal>);
    getByText('Hello');
  });

  it('should not render the modal if it is not open', () => {
    const { queryByText } = render(<Modal open={false}>Hello</Modal>);
    expect(queryByText('Hello')).toBeFalsy();
  });
});
