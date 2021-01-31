/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { QueueRequestFactory } from 'api/requestFactory';
import makeAuthedRequest from 'api/axios-alt';

const fetchQueues = createAsyncThunk('queues/requestStatus', async (arg) => {
  const { auth } = arg;
  const authedRequest = makeAuthedRequest(auth, QueueRequestFactory.getMyQueues());
  const response = await authedRequest;
  return response;
});

const queuesSlice = createSlice({
  name: 'queues',
  initialState: [],
  // No reducers for now
  reducers: {},
  extraReducers: {
    // handle fulfiled request
    [fetchQueues.fulfilled]: (state, action) => {
      return action.payload.queues;
    },
  },
});

export const { queuesFetched } = queuesSlice.actions;

export { fetchQueues };

export default queuesSlice.reducer;
