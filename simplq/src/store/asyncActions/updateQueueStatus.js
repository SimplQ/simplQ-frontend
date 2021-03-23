import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';
import { useHistory } from 'react-router';

const typePrefix = 'updateQueueStatus/action';

/**
 * A hook to access the updateQueueStatus async action creator.
 *
 * @returns — updateQueueStatus async action creator
 */
const useUpdateQueueStatus = () => {
  const makeAuthedRequest = useMakeAuthedRequest();
  const history = useHistory();

  const updateQueueStatus = createAsyncThunk(typePrefix, async (arg) => {
    const { queueId, status } = arg;
    const authedRequest = makeAuthedRequest(RequestFactory.setQueueStatus(queueId, status));
    const response = await authedRequest;
    if (response) {
      history.push(`/queue/${response.queueId}`);
    }
    return response;
  });

  return updateQueueStatus;
};

const updateQueueStatus = createAsyncThunk(typePrefix);

export { updateQueueStatus, useUpdateQueueStatus };
