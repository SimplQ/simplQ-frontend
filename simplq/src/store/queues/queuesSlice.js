import { createSlice } from '@reduxjs/toolkit';
import { getUserQueues, deleteQueue, createQueue } from 'store/asyncActions';

const queuesSlice = createSlice({
  name: 'queues',
  initialState: [],
  // No reducers for now
  reducers: {},
  extraReducers: {
    // handle fulfiled request
    [getUserQueues.fulfilled]: (state, action) => {
      return action.payload.queues;
    },
    // remove deleted queue from queues list
    [deleteQueue.fulfilled]: (state, action) => {
      const { queueId } = action.payload;
      const index = state.findIndex((queue) => queue.queueId === queueId);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
    // add newly created queue to queues list
    [createQueue.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default queuesSlice.reducer;

export const selectQueues = (state) => state.queues;
