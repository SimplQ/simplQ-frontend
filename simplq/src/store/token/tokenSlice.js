import { createSlice } from '@reduxjs/toolkit';
import { getToken } from 'store/asyncActions';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {},
  reducers: {},
  extraReducers: {
    // handle fulfiled request
    [getToken.fulfilled]: (state, action) => {
      return action.payload;
    },
    // handle pending request
    [getToken.pending]: () => {
      return {};
    },
  },
});

export default tokenSlice.reducer;

export const selectToken = (state) => state.token;
