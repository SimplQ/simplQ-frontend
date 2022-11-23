import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';
import { useNavigate } from 'react-router';

const typePrefix = 'setQueueStatus/action';

/**
 * A hook to access the setQueueStatus async action creator.
 *
 * @returns — setQueueStatus async action creator
 */
const useSetQueueStatus = () => {
  const makeAuthedRequest = useMakeAuthedRequest();
  const navigate = useNavigate();

  const setQueueStatus = createAsyncThunk(typePrefix, async (arg) => {
    const { queueId, status } = arg;
    const authedRequest = makeAuthedRequest(RequestFactory.setQueueStatus(queueId, status));
    const response = await authedRequest;
    if (response) {
      navigate(`/queue/${response.queueId}`);
    }
    return response;
  });

  return setQueueStatus;
};

const setQueueStatus = createAsyncThunk(typePrefix);

export { setQueueStatus, useSetQueueStatus };
