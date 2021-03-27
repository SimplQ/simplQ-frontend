import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'notifyToken/action';

/**
 * A hook to access the notifyToken async action creator.
 *
 * @returns — notifyToken async action creator
 */
const useNotifyToken = () => {
  const makeAuthedRequest = useMakeAuthedRequest();

  const notifyToken = createAsyncThunk(typePrefix, async ({ tokenId }) => {
    return makeAuthedRequest(RequestFactory.notifyToken(tokenId));
  });

  return notifyToken;
};

const notifyToken = createAsyncThunk(typePrefix);

export { notifyToken, useNotifyToken };
