import { createSlice } from '@reduxjs/toolkit';
import { getQueueInfo, getQueueInfoByName } from 'store/asyncActions';

const queueInfoSlice = createSlice({
  name: 'queueInfo',
  initialState: {},
  reducers: {},
  extraReducers: {
    // handle fulfiled request
    [getQueueInfo.fulfilled]: (state, action) => {
      return action.payload;
    },
    [getQueueInfoByName.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default queueInfoSlice.reducer;

export const selectQueueInfo = (state) => state.queueInfo;
