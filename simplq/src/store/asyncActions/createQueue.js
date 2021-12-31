import { createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const createQueue = createAsyncThunk(typePrefix, async ({ queueName }) => {
    const authedRequest = makeAuthedRequest(RequestFactory.createQueue(queueName));
    const response = await authedRequest;
    if (response) {
      navigate(`/queue/${response.queueId}`);
    }
    return response;
  });

  return createQueue;
};

const createQueue = createAsyncThunk(typePrefix);

export { createQueue, useCreateQueue };
