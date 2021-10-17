/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getToken, getTokenByContactNumber } from 'store/asyncActions';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {},
  reducers: {},
  extraReducers: {
    // handle fulfilled request
    [getToken.fulfilled]: (state, action) => {
      return action.payload;
    },
    [getTokenByContactNumber.rejected]: () => {
      return { tokenFound: false };
    },
  },
});

export default tokenSlice.reducer;

export const selectToken = (state) => state.token;

export const selectIsTokenFound = (state) => state.token.tokenFound;
