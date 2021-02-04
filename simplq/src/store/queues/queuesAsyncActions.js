/* eslint-disable no-param-reassign */
import useAuth, { makeAuthedRequest } from 'api/auth';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { QueueRequestFactory } from 'api/requestFactory';
import * as RequestFactory from 'api/requestFactory';

/**
 * A hook to access the fetchQuees async action creator.
 *
 * @returns — fetchQueues async async action creator
 *
 * @example
 *
 * import useFetchQueues from 'store/queues'
 *
 * const fetchQueues = useFetchQueues()
 */
const useFetchQueues = () => {
  const auth = useAuth();

  const fetchQueues = createAsyncThunk('queues/requestStatus', async () => {
    if (!auth || !auth.isAuthenticated) {
      return { queues: [] };
    }
    const authedRequest = makeAuthedRequest(auth, QueueRequestFactory.getMyQueues());
    const response = await authedRequest;
    return response;
  });

  return fetchQueues;
};

/**
 * A shadow function that returns fetchQueues async action creator.
 *
 * This should be used just for the action creators that it generates.

 * @see ./queuesSlice
 *
 * @see https://redux-toolkit.js.org/api/createAsyncThunk#return-value
 *
 * @returns fetchQueues async action creator
 */
const fetchQueues = createAsyncThunk('queues/requestStatus');

/**
 * A hook to access the deleteQueue async action creator.
 *
 * @returns — deleteQueue async async action creator
 */
const useDeleteQueue = () => {
  const auth = useAuth();

  const deleteQueue = createAsyncThunk('deleteQueue/requestStatus', async (arg) => {
    if (!auth || !auth.isAuthenticated) {
      return { queues: [] };
    }

    const { queueId } = arg;
    const authedRequest = makeAuthedRequest(auth, QueueRequestFactory.deleteQueue(queueId));
    const response = await authedRequest;
    return response;
  });

  return deleteQueue;
};

const deleteQueue = createAsyncThunk('deleteQueue/requestStatus');

/**
 * A hook to access the deleteQueue async action creator.
 *
 * @returns — getQueueStatus async action creator
 */
const useGetQueueStatus = () => {
  const auth = useAuth();

  const getQueueStatus = createAsyncThunk('getQueueStatus/requestStatus', async ({ queueId }) => {
    if (!auth || !auth.isAuthenticated) {
      return {};
    }

    const authedRequest = makeAuthedRequest(auth, RequestFactory.getQueueStatus(queueId));
    const response = await authedRequest;
    return response;
  });

  return getQueueStatus;
};

const getQueueStatus = createAsyncThunk('getQueueStatus/requestStatus');

/**
 * A hook to access the getQueueStatusByName async action creator.
 *
 * @returns — getQueueStatusByName async action creator
 */
const useGetQueueStatusByName = () => {
  const auth = useAuth();

  const getQueueStatusByName = createAsyncThunk(
    'getQueueStatusByName/requestStatus',
    async ({ queueName }) => {
      if (!auth || !auth.isAuthenticated) {
        return {};
      }

      const authedRequest = makeAuthedRequest(auth, RequestFactory.getQueueStatusByName(queueName));
      const response = await authedRequest;
      return response;
    }
  );

  return getQueueStatusByName;
};

const getQueueStatusByName = createAsyncThunk('getQueueStatus/requestStatus');

export {
  fetchQueues,
  useFetchQueues,
  deleteQueue,
  useDeleteQueue,
  getQueueStatus,
  useGetQueueStatus,
  getQueueStatusByName,
  useGetQueueStatusByName,
};
