import { createAsyncThunk } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'getQueueInfoByName/action';

/**
 * A hook to access the getQueueInfoByName async action creator.
 *
 * @returns — getQueueInfoByName action creator
 */
const useGetQueueInfoByName = () => {
  const makeAuthedRequest = useMakeAuthedRequest();
  const history = useHistory();

  const getQueueInfoByName = createAsyncThunk(
    typePrefix,
    async ({ queueName }, { rejectWithValue }) => {
      const authedRequest = makeAuthedRequest(RequestFactory.getQueueInfoByName(queueName));

      try {
        const response = await authedRequest;
        return response;
      } catch (error) {
        history.replace(`/pageNotFound/queueName=${queueName}`);
        return rejectWithValue({ message: `Queue ${queueName} does not exist, try again...` });
      }
    }
  );

  return getQueueInfoByName;
};

const getQueueInfoByName = createAsyncThunk(typePrefix);

export { getQueueInfoByName, useGetQueueInfoByName };
