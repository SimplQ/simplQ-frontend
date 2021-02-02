/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import { fetchQueues, deleteQueue } from './queuesAsyncActions';

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
    [deleteQueue.fulfilled]: (state, action) => {
      const { queueId } = action.payload;
      const index = state.findIndex((queue) => queue.queueId === queueId);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
  },
});

export default queuesSlice.reducer;

export const selectQueues = (state) => state.queues;
