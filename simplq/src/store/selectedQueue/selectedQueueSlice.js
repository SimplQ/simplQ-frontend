import { createSlice } from '@reduxjs/toolkit';
import { getQueueStatus, getQueueStatusByName } from 'store/asyncActions';

const selectedQueueSlice = createSlice({
  name: 'selectedQueue',
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
  },
});

export default selectedQueueSlice.reducer;

export const selectSelectedQueue = (state) => state.selectedQueue;
