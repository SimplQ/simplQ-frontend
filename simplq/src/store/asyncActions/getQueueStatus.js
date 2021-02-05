import { createAsyncThunk } from '@reduxjs/toolkit';
import useAuth, { makeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'getQueueStatus/requestStatus';

/**
 * A hook to access the deleteQueue async action creator.
 *
 * @returns — getQueueStatus async action creator
 */
const useGetQueueStatus = () => {
  const auth = useAuth();

  const getQueueStatus = createAsyncThunk(typePrefix, async ({ queueId }) => {
    if (!auth || !auth.isAuthenticated) {
      return {};
    }

    const authedRequest = makeAuthedRequest(auth, RequestFactory.getQueueStatus(queueId));
    const response = await authedRequest;
    return response;
  });

  return getQueueStatus;
};

const getQueueStatus = createAsyncThunk(typePrefix);

export { getQueueStatus, useGetQueueStatus };
