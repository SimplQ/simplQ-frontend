import { createAsyncThunk } from '@reduxjs/toolkit';
import useAuth, { makeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';
import { useCallback } from 'react';

const typePrefix = 'getToken/action';

/**
 * A hook to access the getToken async action creator.
 *
 * @returns — getToken async action creator
 */
const useGetToken = () => {
  const auth = useAuth();

  const getToken = useCallback(
    createAsyncThunk(typePrefix, async ({ tokenId }) => {
      const authedRequest = makeAuthedRequest(auth, RequestFactory.getToken(tokenId));
      const response = await authedRequest;
      return response;
    }),
    []
  );

  return getToken;
};

const getToken = createAsyncThunk(typePrefix);

export { getToken, useGetToken };
