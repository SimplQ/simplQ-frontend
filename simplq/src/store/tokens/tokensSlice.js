import { createSlice } from '@reduxjs/toolkit';
import { getUserTokens, joinQueue } from 'store/asyncActions';

const tokensSlice = createSlice({
  name: 'tokens',
  initialState: [],
  // No reducers for now
  reducers: {},
  extraReducers: {
    // handle fulfiled request
    [getUserTokens.fulfilled]: (state, action) => {
      return action.payload.tokens;
    },
    // add newly created token to tokens list
    [joinQueue.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default tokensSlice.reducer;

export const selectTokensByQueueName = (queueName) => (state) =>
  state.tokens.filter((token) => token.queueName === queueName);
