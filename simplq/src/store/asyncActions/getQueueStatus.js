import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'getQueueStatus/action';

/**
 * A hook to access the getQueueStatus async action creator.
 *
 * @returns — getQueueStatus async action creator
 */
const useGetQueueStatus = () => {
  const makeAuthedRequest = useMakeAuthedRequest();

  const getQueueStatus = createAsyncThunk(typePrefix, async ({ queueId }) => {
    const authedRequest = makeAuthedRequest(RequestFactory.getQueueStatus(queueId));
    const response = await authedRequest;
    return response;
  });

  return getQueueStatus;
};

const getQueueStatus = createAsyncThunk(typePrefix);

export { getQueueStatus, useGetQueueStatus };
