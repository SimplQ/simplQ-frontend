import { createSlice } from '@reduxjs/toolkit';
import { deleteQueue, getQueueInfo, getQueueInfoByName } from 'store/asyncActions';

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
    [deleteQueue.fulfilled]: (state, action) => {
      const { queueId } = action.payload;
      if (state.queueId === queueId) {
        return {
          ...state,
          status: 'DELETED',
        };
      }
      return state;
    },
  },
});

export default queueInfoSlice.reducer;

export const selectQueueInfo = (state) => state.queueInfo;
