import { createAsyncThunk } from '@reduxjs/toolkit';
import { useMakeAuthedRequest } from 'api/auth';
import * as RequestFactory from 'api/requestFactory';

const typePrefix = 'deleteQueue/action';

/**
 * A hook to access the deleteQueue async action creator.
 *
 * @returns — deleteQueue async action creator
 */
const useDeleteQueue = () => {
  const makeAuthedRequest = useMakeAuthedRequest();

  const deleteQueue = createAsyncThunk(typePrefix, async (arg) => {
    const { queueId } = arg;
    const authedRequest = makeAuthedRequest(RequestFactory.deleteQueue(queueId));
    const response = await authedRequest;
    return response;
  });

  return deleteQueue;
};

const deleteQueue = createAsyncThunk(typePrefix);

export { deleteQueue, useDeleteQueue };
