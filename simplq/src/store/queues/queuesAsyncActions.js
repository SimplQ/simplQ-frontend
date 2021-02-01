/* eslint-disable no-param-reassign */
import useAuth from 'api/auth';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { QueueRequestFactory } from 'api/requestFactory';
import makeAuthedRequest from 'api/axios-alt';

/**
 * A hook to access the fetchQuees async action creator.
 *
 * @returns — fetchQueues async async action creator
 *
 * @example
 *
 * import useFetchQueues from 'store/queues'
 *
 * const fetchQueues = useFetchQueues()
 */
const useFetchQueues = () => {
  const auth = useAuth();

  const fetchQueues = createAsyncThunk('queues/requestStatus', async () => {
    if (!auth || !auth.isAuthenticated) {
      return { queues: [] };
    }
    const authedRequest = makeAuthedRequest(auth, QueueRequestFactory.getMyQueues());
    const response = await authedRequest;
    return response;
  });

  return fetchQueues;
};

/**
 * A shadow function that returns fetchQueues async action creator.
 *
 * This should be used just for the action creators that it generates.

 * @see ./queuesSlice
 *
 * @see https://redux-toolkit.js.org/api/createAsyncThunk#return-value
 *
 * @returns fetchQueues async action creator
 */
const fetchQueues = createAsyncThunk('queues/requestStatus', async () => {
  return undefined;
});

export { fetchQueues, useFetchQueues };
