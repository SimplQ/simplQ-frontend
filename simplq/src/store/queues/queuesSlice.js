/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import { fetchQueues } from './queuesAsyncActions';

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

export default queuesSlice.reducer;

export const selectQueues = (state) => state.queues;
