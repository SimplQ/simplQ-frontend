import { createSlice } from '@reduxjs/toolkit';
import { getSelectedQueue } from 'store/asyncActions';

const selectedQueueSlice = createSlice({
  name: 'selectedQueue',
  initialState: {
    queueId: null,
    queueName: null,
    queueCreationTimestamp: null,
    tokens: [],
  },
  reducers: {},
  extraReducers: {
    [getSelectedQueue.rejected]: (state, action) => {
      return action;
    },
    // handle fulfiled request
    [getSelectedQueue.fulfilled]: (state, action) => {
      const { queueId, queueName, queueCreationTimestamp, tokens } = action.payload;
      return { queueId, queueName, queueCreationTimestamp, tokens };
    },
    // handle pending request
    [getSelectedQueue.pending]: () => {
      return {
        queueId: null,
        queueName: null,
        queueCreationTimestamp: null,
        tokens: [],
      };
    },
  },
});

export default selectedQueueSlice.reducer;

export const selectTokens = (state) => state.selectedQueue.tokens;
