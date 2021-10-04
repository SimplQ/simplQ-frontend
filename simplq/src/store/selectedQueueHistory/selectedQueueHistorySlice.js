/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import { getSelectedQueueHistory } from 'store/asyncActions';

const selectedQueueHistorySlice = createSlice({
  name: 'selectedQueueHistory',
  initialState: {
    events: [],
  },
  reducers: {},
  extraReducers: {
    // handle fulfilled request
    [getSelectedQueueHistory.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default selectedQueueHistorySlice.reducer;

export const selectQueueHistoryEvents = (state) => state.selectedQueueHistory;
