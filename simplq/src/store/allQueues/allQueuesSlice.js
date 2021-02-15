import { createSlice } from '@reduxjs/toolkit';
import { getUserQueues, deleteQueue } from 'store/asyncActions';

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
