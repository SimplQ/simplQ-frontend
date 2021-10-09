import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'getUserTokens/action';

/**
 * A hook to access the getUserTokens async action creator.
 *
 * @returns — getUserTokens async action creator
 *
 * @example
 *
 * import useGetUserTokens from 'store/tokens'
 *
 * const getUserTokens = useGetUserTokens()
 */
const useGetUserTokens = () => {
  const makeAuthedRequest = useMakeAuthedRequest();

  const getUserTokens = createAsyncThunk(typePrefix, async () => {
    return makeAuthedRequest(RequestFactory.getUserTokens());
  });

  return getUserTokens;
};

/**
 * A shadow function that returns getUserTokens async action creator.
 *
 * This should be used just for the action creators that it generates.

 * @see store/tokensSlice.js
 *
 * @see https://redux-toolkit.js.org/api/createAsyncThunk#return-value
 *
 * @returns getUserTokens() async action creator
 */
const getUserTokens = createAsyncThunk(typePrefix);

export { getUserTokens, useGetUserTokens };
