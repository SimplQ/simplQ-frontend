import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'getQueueInfo/action';

/**
 * A hook to access the getQueueInfo async action creator.
 *
 * @returns — getQueueInfo async action creator
 */
const useGetQueueInfo = () => {
  const makeAuthedRequest = useMakeAuthedRequest();

  const getQueueInfo = createAsyncThunk(typePrefix, async ({ queueId }) => {
    const authedRequest = makeAuthedRequest(RequestFactory.getQueueInfo(queueId));
    const response = await authedRequest;
    return response;
  });

  return getQueueInfo;
};

const getQueueInfo = createAsyncThunk(typePrefix);

export { getQueueInfo, useGetQueueInfo };
