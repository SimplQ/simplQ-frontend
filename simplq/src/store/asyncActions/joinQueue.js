import { createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'joinQueue/action';

/**
 * A hook to access the joinQueue async action creator.
 *
 * @returns — joinQueue async action creator
 */
const useJoinQueue = () => {
  const makeAuthedRequest = useMakeAuthedRequest();
  const navigate = useNavigate();

  const joinQueue = createAsyncThunk(
    typePrefix,
    async ({ name, contactNumber, queueId, emailId, goToStatusPage }) => {
      const authedRequest = makeAuthedRequest(
        RequestFactory.createToken(name, contactNumber, queueId, emailId)
      );
      const response = await authedRequest;
      if (goToStatusPage) {
        navigate(`/token/${response.tokenId}`);
      }
      return response;
    }
  );

  return joinQueue;
};

const joinQueue = createAsyncThunk(typePrefix);

export { joinQueue, useJoinQueue };
