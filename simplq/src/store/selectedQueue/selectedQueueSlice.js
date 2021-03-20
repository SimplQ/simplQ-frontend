/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import { deleteToken, getSelectedQueue, joinQueue } from 'store/asyncActions';

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
    // add newly created token to currently selected queue's token list
    [joinQueue.fulfilled]: (state, action) => {
      state.tokens.push(action.payload);
      return state;
    },
    // remove deleted token from currently selected queue's token list
    [deleteToken.fulfilled]: (state, action) => {
      state.tokens = state.tokens.filter((token) => token.tokenId !== action.payload.tokenId);
      return state;
    },
  },
});

export default selectedQueueSlice.reducer;

export const selectQueueName = (state) => state.selectedQueue.queueName;

export const selectTokens = (state) => state.selectedQueue.tokens;
