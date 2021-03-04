import { createAsyncThunk } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'createQueue/action';

/**
 * A hook to access the createQueue async action creator.
 *
 * @returns — createQueue async action creator
 */
const useCreateQueue = () => {
  const makeAuthedRequest = useMakeAuthedRequest();
  const history = useHistory();

  return createAsyncThunk(typePrefix, async ({ queueName }) => {
    const authedRequest = makeAuthedRequest(RequestFactory.createQueue(queueName));
    const response = await authedRequest;
    if (response) {
      history.push(`/queue/${response.queueId}`);
    }
    return response;
  });
};

const createQueue = createAsyncThunk(typePrefix);

export { createQueue, useCreateQueue };
