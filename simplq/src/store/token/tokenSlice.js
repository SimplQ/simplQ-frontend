/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getToken } from 'store/asyncActions';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: {},
    loaded: false,
  },
  reducers: {},
  extraReducers: {
    // handle fulfilled request
    [getToken.fulfilled]: (state, action) => {
      return { token: action.payload, loaded: true };
    },
    // handle pending request
    [getToken.pending]: (state) => {
      state.loaded = false;
    },
  },
});

export default tokenSlice.reducer;

export const selectToken = (state) => state.token;
