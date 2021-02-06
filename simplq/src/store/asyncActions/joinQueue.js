import { createAsyncThunk } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import useAuth, { makeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'joinQueue/action';

/**
 * A hook to access the joinQueue async action creator.
 *
 * @returns — joinQueue async action creator
 */
const useJoinQueue = () => {
  const auth = useAuth();
  const history = useHistory();

  const joinQueue = createAsyncThunk(
    typePrefix,
    async ({ name, contactNumber, notifiable, queueId }) => {
      const authedRequest = makeAuthedRequest(
        auth,
        RequestFactory.createToken(name, contactNumber, notifiable, queueId)
      );
      const response = await authedRequest;
      history.push(`/token/${response.tokenId}`);
      return response;
    }
  );

  return joinQueue;
};

const joinQueue = createAsyncThunk(typePrefix);

export { joinQueue, useJoinQueue };
