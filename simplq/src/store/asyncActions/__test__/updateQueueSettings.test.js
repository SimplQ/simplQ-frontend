import { useUpdateQueueSettings } from '..';

jest.mock('api/auth', () => ({
  useMakeAuthedRequest: () => (fn) => fn,
}));

describe('Update queue settings', () => {
  it('should return update queue settings action', async () => {
    const updateSettings = useUpdateQueueSettings();
    const thunk = updateSettings({ queueId: 'd3-220c-4b', settings: { maxQueueCapacity: 4 } });
    const action = await thunk(jest.fn());
    expect(action.payload).toEqual({
      method: 'patch',
      url: '/queue/d3-220c-4b',
      data: { maxQueueCapacity: 4 },
    });
  });
});
