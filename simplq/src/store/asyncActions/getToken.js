import { createAsyncThunk } from '@reduxjs/toolkit';
import useAuth, { makeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'getToken/action';
let timer = null;
const REFRESH_INTERVAL = 3000;

/**
 * A hook to access the getToken async action creator.
 *
 * @returns — getToken async action creator
 */
const useGetToken = () => {
  const auth = useAuth();

  const getToken = createAsyncThunk(typePrefix, async ({ tokenId, refresh }, { dispatch }) => {
    if (timer) {
      clearTimeout(timer);
    }
    const authedRequest = makeAuthedRequest(auth, RequestFactory.getToken(tokenId));
    const response = await authedRequest.then((resp) => {
      if (refresh === true) {
        timer = setTimeout(() => dispatch(getToken({ tokenId, refresh })), REFRESH_INTERVAL);
      }
      return resp;
    });
    return response;
  });

  return getToken;
};

const getToken = createAsyncThunk(typePrefix);

export { getToken, useGetToken };
