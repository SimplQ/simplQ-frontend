import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';
import { useNavigate } from 'react-router';

const typePrefix = 'getTokenByContactNumber/action';

/**
 * A hook to access the getTokenByContactNumber async action creator.
 *
 * @returns — getTokenByContactNumber async action creator
 */
const useGetTokenByContactNumber = () => {
  const makeAuthedRequest = useMakeAuthedRequest();
  const navigate = useNavigate();

  const getTokenByContactNumber = createAsyncThunk(
    typePrefix,
    async ({ queueId, contactNumber, redirectToTokenPageOnSuccess }) => {
      const authedRequest = makeAuthedRequest(
        RequestFactory.getTokenByContactNumber(queueId, contactNumber)
      );
      const response = await authedRequest;
      if (response && redirectToTokenPageOnSuccess && response.tokenId) {
        navigate(`/token/${response.tokenId}`);
      }
      return response;
    }
  );

  return getTokenByContactNumber;
};

const getTokenByContactNumber = createAsyncThunk(typePrefix);

export { getTokenByContactNumber, useGetTokenByContactNumber };
