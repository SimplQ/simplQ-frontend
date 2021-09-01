import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'getSelectedQueue/action';

/**
 * A hook to access the getSelectedQueue async action creator.
 *
 * @returns — getSelectedQueue async action creator
 */
const useGetSelectedQueue = () => {
  const makeAuthedRequest = useMakeAuthedRequest();

  const getSelectedQueue = createAsyncThunk(typePrefix, async ({ queueId }) => {
    const authedRequest = makeAuthedRequest(RequestFactory.getQueue(queueId));
    const response = await authedRequest;
    return response;
  });

  return getSelectedQueue;
};

const getSelectedQueue = createAsyncThunk(typePrefix);

export { getSelectedQueue, useGetSelectedQueue };
