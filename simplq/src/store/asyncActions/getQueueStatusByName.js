import { createAsyncThunk } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import useAuth, { makeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'getQueueStatusByName/requestStatus';

/**
 * A hook to access the getQueueStatusByName async action creator.
 *
 * @returns — getQueueStatusByName async action creator
 */
const useGetQueueStatusByName = () => {
  const auth = useAuth();
  const history = useHistory();

  const getQueueStatusByName = createAsyncThunk(
    typePrefix,
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

const getQueueStatusByName = createAsyncThunk(typePrefix);

export { getQueueStatusByName, useGetQueueStatusByName };
