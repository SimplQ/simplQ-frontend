import { createAsyncThunk } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'getQueueStatusByName/action';

/**
 * A hook to access the getQueueStatusByName async action creator.
 *
 * @returns — getQueueStatusByName action creator
 */
const useGetQueueStatusByName = () => {
  const makeAuthedRequest = useMakeAuthedRequest();
  const history = useHistory();

  const getQueueStatusByName = createAsyncThunk(
    typePrefix,
    async ({ queueName }, { rejectWithValue }) => {
      const authedRequest = makeAuthedRequest(RequestFactory.getQueueStatusByName(queueName));

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
