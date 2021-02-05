import { createAsyncThunk } from '@reduxjs/toolkit';
import useAuth, { makeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'getUserQueues/requestStatus';

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
const useGetUserQueues = () => {
  const auth = useAuth();

  const getUserQueues = createAsyncThunk(typePrefix, async () => {
    const authedRequest = makeAuthedRequest(auth, RequestFactory.getUserQueues());
    const response = await authedRequest;
    return response;
  });

  return getUserQueues;
};

/**
 * A shadow function that returns fetchQueues async action creator.
 *
 * This should be used just for the action creators that it generates.

 * @see store/queuesSlice.js
 *
 * @see https://redux-toolkit.js.org/api/createAsyncThunk#return-value
 *
 * @returns fetchQueues() async action creator
 */
const getUserQueues = createAsyncThunk(typePrefix);

export { getUserQueues, useGetUserQueues };
