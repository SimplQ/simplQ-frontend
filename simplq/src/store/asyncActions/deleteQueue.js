import { createAsyncThunk } from '@reduxjs/toolkit';
import useAuth, { makeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

/**
 * A hook to access the deleteQueue async action creator.
 *
 * @returns — deleteQueue async async action creator
 */
const useDeleteQueue = () => {
  const auth = useAuth();

  const deleteQueue = createAsyncThunk('deleteQueue/requestStatus', async (arg) => {
    if (!auth || !auth.isAuthenticated) {
      return { queues: [] };
    }

    const { queueId } = arg;
    const authedRequest = makeAuthedRequest(auth, RequestFactory.deleteQueue(queueId));
    const response = await authedRequest;
    return response;
  });

  return deleteQueue;
};

const deleteQueue = createAsyncThunk('deleteQueue/requestStatus');

export { deleteQueue, useDeleteQueue };
