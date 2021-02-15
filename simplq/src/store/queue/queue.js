import { createSlice } from '@reduxjs/toolkit';
import { getActiveTokens } from 'store/asyncActions';

const activeTokensSlice = createSlice({
  name: 'activeTokens',
  initialState: [],
  // No reducers for now
  reducers: {},
  extraReducers: {
    // handle fulfilled request
    [getActiveTokens.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default activeTokensSlice.reducer;

export const selectActiveTokens = (state) => state.activeTokens;
