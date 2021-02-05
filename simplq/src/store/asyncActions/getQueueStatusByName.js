import { createAsyncThunk } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import useAuth, { makeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

/**
 * A hook to access the getQueueStatusByName async action creator.
 *
 * @returns — getQueueStatusByName async action creator
 */
const useGetQueueStatusByName = () => {
  const auth = useAuth();
  const history = useHistory();

  const getQueueStatusByName = createAsyncThunk(
    'getQueueStatusByName/requestStatus',
    async ({ queueName }, { rejectWithValue }) => {
      if (!auth || !auth.isAuthenticated) {
        return {};
      }

      const authedRequest = makeAuthedRequest(auth, RequestFactory.getQueueStatusByName(queueName));

      try {
        const response = await authedRequest;
        return response;
      } catch (error) {
        history.push(`/pageNotFound/queueName=${queueName}`);
        return rejectWithValue({ message: `Queue ${queueName} does not exist, try again...` });
      }
    }
  );

  return getQueueStatusByName;
};

const getQueueStatusByName = createAsyncThunk('getQueueStatusByName/requestStatus');

export { getQueueStatusByName, useGetQueueStatusByName };
