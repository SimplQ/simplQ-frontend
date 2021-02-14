import { createSlice } from '@reduxjs/toolkit';
import { getQueueStatus, getQueueStatusByName } from 'store/asyncActions';

const queueStatusSlice = createSlice({
  name: 'queueStatus',
  initialState: {},
  reducers: {},
  extraReducers: {
    // handle fulfiled request
    [getQueueStatus.fulfilled]: (state, action) => {
      return action.payload;
    },
    [getQueueStatusByName.fulfilled]: (state, action) => {
      return action.payload;
    },
    // handle pending request
    [getQueueStatus.pending]: () => {
      return {};
    },
    [getQueueStatusByName.pending]: () => {
      return {};
    },
  },
});

export default queueStatusSlice.reducer;

export const selectQueueStatus = (state) => state.queueStatus;
