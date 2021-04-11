import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'updateQueueSettings/action';

/**
 * A hook to access the updateQueueSettings async action creator.
 *
 * @returns — updateQueueSettings async action creator
 */
const useUpdateQueueSettings = () => {
  const makeAuthedRequest = useMakeAuthedRequest();
  const updateQueueSettings = createAsyncThunk(typePrefix, async (arg) => {
    const { queueId, settings } = arg;
    return makeAuthedRequest(RequestFactory.updateQueueSettings(queueId, settings));
  });
  return updateQueueSettings;
};

const updateQueueSettings = createAsyncThunk(typePrefix);

export { useUpdateQueueSettings, updateQueueSettings };
