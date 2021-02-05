import { createAsyncThunk } from '@reduxjs/toolkit';
import useAuth, { makeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

/**
 * A hook to access the getQueueStatusByName async action creator.
 *
 * @returns — getQueueStatusByName async action creator
 */
const useGetQueueStatusByName = () => {
  const auth = useAuth();

  const getQueueStatusByName = createAsyncThunk(
    'getQueueStatusByName/requestStatus',
    async ({ queueName }) => {
      if (!auth || !auth.isAuthenticated) {
        return {};
      }

      const authedRequest = makeAuthedRequest(auth, RequestFactory.getQueueStatusByName(queueName));
      const response = await authedRequest;
      return response;
    }
  );

  return getQueueStatusByName;
};

const getQueueStatusByName = createAsyncThunk('getQueueStatus/requestStatus');

export { getQueueStatusByName, useGetQueueStatusByName };
