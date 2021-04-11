import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import QueueSettings from '../QueueSettings';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: (arg) => arg,
}));

const mockUpdateSettings = jest.fn();
jest.mock('store/asyncActions', () => ({
  useUpdateQueueSettings: () => mockUpdateSettings,
}));
jest.mock('store/selectedQueue', () => ({
  selectMaxQueueCapacity: () => 10,
}));

describe('Queue settings', () => {
  it('on click component should open a modal', () => {
    const { getByTestId, getByText } = render(<QueueSettings />);
    getByText('Queue Settings').click();
    getByTestId('size-input');
  });

  describe('Modal', () => {
    let queryById;
    let getText;
    let queryText;
    beforeEach(() => {
      const { queryByTestId, getByText, queryByText } = render(
        <QueueSettings queueId="d3-220c-4b" />
      );
      getText = getByText;
      queryById = queryByTestId;
      queryText = queryByText;
      getByText('Queue Settings').click();
    });

    it('on click close button should close the modal', () => {
      getText('Close').click();
      expect(queryById('size-input')).toBeFalsy();
    });

    it('on click save button should update the settings', () => {
      getText('Save').click();
      expect(mockUpdateSettings).toHaveBeenCalledTimes(1);
      expect(mockUpdateSettings).toHaveBeenCalledWith({
        queueId: 'd3-220c-4b',
        settings: { maxQueueCapacity: 10 },
      });
    });

    it('Invalid queue settings should disable the save button', () => {
      const field = queryById('size-input');
      fireEvent.change(field, { target: { value: -1 } });
      expect(getText('Save')).toBeDisabled();
    });

    describe('Queue capacity input field', () => {
      it('A valid size should not throw any error', () => {
        const field = queryById('size-input');
        fireEvent.change(field, { target: { value: 13 } });
        expect(queryText('Enter a number between 1 and 100000')).toBeFalsy();
      });

      it('An invalid size should throw an error', () => {
        const field = queryById('size-input');
        fireEvent.change(field, { target: { value: 'ram' } });
        expect(queryText('Enter a number between 1 and 100000')).toBeTruthy();
      });

      it('A valid input should update the field', () => {
        const field = queryById('size-input');
        fireEvent.change(field, { target: { value: 99 } });
        expect(field.value).toEqual('99');
      });

      it('An invalid input should make the value zero', () => {
        const field = queryById('size-input');
        fireEvent.change(field, { target: { value: 'abc' } });
        expect(field.value).toEqual('0');
        fireEvent.change(field, { target: { value: -1 } });
        expect(field.value).toEqual('0');
        fireEvent.change(field, { target: { value: 5.9 } });
        expect(field.value).toEqual('0');
      });
    });
  });
});
