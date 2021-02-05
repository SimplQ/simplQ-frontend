import { createAsyncThunk } from '@reduxjs/toolkit';
import useAuth, { makeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'getUserQueues/requestStatus';

/**
 * A hook to access the getUserQueues async action creator.
 *
 * @returns — getUserQueues async action creator
 *
 * @example
 *
 * import useGetUserQueues from 'store/queues'
 *
 * const getUserQueues = useGetUserQueues()
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
 * A shadow function that returns getUserQueues async action creator.
 *
 * This should be used just for the action creators that it generates.

 * @see store/queuesSlice.js
 *
 * @see https://redux-toolkit.js.org/api/createAsyncThunk#return-value
 *
 * @returns getUserQueues() async action creator
 */
const getUserQueues = createAsyncThunk(typePrefix);

export { getUserQueues, useGetUserQueues };
