import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'getActiveTokens/action';

/**
 * A hook to access the getActiveTokens async action creator.
 *
 * @returns — getActiveTokens async action creator
 */
const useGetActiveTokens = () => {
  const makeAuthedRequest = useMakeAuthedRequest();

  const getActiveTokens = createAsyncThunk(typePrefix, async ({ queueId }) => {
    const authedRequest = makeAuthedRequest(RequestFactory.getActiveTokens(queueId));
    const response = await authedRequest;
    return response;
  });

  return getActiveTokens;
};

const getActiveTokens = createAsyncThunk(typePrefix);

export { getActiveTokens, useGetActiveTokens };
