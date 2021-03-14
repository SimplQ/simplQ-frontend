import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';
import { useHistory } from 'react-router';

const typePrefix = 'pauseQueue/action';

/**
 * A hook to access the pauseQueue async action creator.
 *
 * @returns — pauseQueue async action creator
 */
const usePauseQueue = () => {
  console.log('usePauseQueue');
  const makeAuthedRequest = useMakeAuthedRequest();
  const history = useHistory();

  const pauseQueue = createAsyncThunk(typePrefix, async (arg) => {
    const { queueId, status } = arg;
    console.log('queueId: status: ', queueId, status);
    const authedRequest = makeAuthedRequest(RequestFactory.pauseQueue(queueId, status));
    const response = await authedRequest;
    if (response) {
      history.push(`/queue/${response.queueId}`);
    }
    return response;
  });

  return pauseQueue;
};

const pauseQueue = createAsyncThunk(typePrefix);

export { pauseQueue, usePauseQueue };
