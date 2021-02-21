import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';
import { useHistory } from 'react-router';

const typePrefix = 'deleteQueue/action';

/**
 * A hook to access the deleteQueue async action creator.
 *
 * @returns — deleteQueue async action creator
 */
const useDeleteQueue = () => {
  const makeAuthedRequest = useMakeAuthedRequest();
  const history = useHistory();

  const deleteQueue = createAsyncThunk(typePrefix, async (arg) => {
    const { queueId, goHome } = arg;
    const authedRequest = makeAuthedRequest(RequestFactory.deleteQueue(queueId));
    const response = await authedRequest;
    if (goHome) {
      history.push('/');
    }
    return response;
  });

  return deleteQueue;
};

const deleteQueue = createAsyncThunk(typePrefix);

export { deleteQueue, useDeleteQueue };
