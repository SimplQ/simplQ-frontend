/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import { deleteToken, getSelectedQueue, joinQueue, setQueueStatus } from 'store/asyncActions';

const selectedQueueSlice = createSlice({
  name: 'selectedQueue',
  initialState: {
    tokens: [],
  },
  reducers: {},
  extraReducers: {
    // handle fulfiled request
    [getSelectedQueue.fulfilled]: (state, action) => {
      return action.payload;
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
    // update queue status on updates
    [setQueueStatus.fulfilled]: (state, action) => {
      state.status = action.payload.status;
      return state;
    },
  },
});

export default selectedQueueSlice.reducer;

export const selectQueueName = (state) => state.selectedQueue.queueName;

export const selectTokens = (state) => state.selectedQueue.tokens;

export const selectQueueStatus = (state) => state.selectedQueue.status;
