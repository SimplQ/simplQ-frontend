/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getToken } from 'store/asyncActions';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {},
  reducers: {},
  extraReducers: {
    // handle fulfilled request
    [getToken.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default tokenSlice.reducer;

export const selectToken = (state) => state.token;
