import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'getTokenByContactNumber/action';

/**
 * A hook to access the getTokenByContactNumber async action creator.
 *
 * @returns — getTokenByContactNumber async action creator
 */
const useGetTokenByContactNumber = () => {
  const makeAuthedRequest = useMakeAuthedRequest();

  const getTokenByContactNumber = createAsyncThunk(
    typePrefix,
    async ({ queueId, contactNumber }) => {
      const authedRequest = makeAuthedRequest(
        RequestFactory.getTokenByContactNumber(queueId, contactNumber)
      );
      const response = await authedRequest;
      return response;
    }
  );

  return getTokenByContactNumber;
};

const getTokenByContactNumber = createAsyncThunk(typePrefix);

export { getTokenByContactNumber, useGetTokenByContactNumber };
