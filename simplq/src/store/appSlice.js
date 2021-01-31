/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { fetchQueues } from 'store/queuesSlice';

const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    errorText: '',
    infoText: '',
    notificationPermission: null, // This state value is initilised by the notification service.
  },
  reducers: {
    setErrorPopupMessage: (state, action) => {
      state.errorText = action.payload;
    },
    setInfoPopupMessage: (state, action) => {
      state.infoText = action.payload;
    },
    setNotificationPermission: (state, action) => {
      state.notificationPermission = action.payload;
    },
  },
  extraReducers: {
    [fetchQueues.pending]: (state, action) => {
      state.infoText = `Loading queues for ${action.meta.arg.auth.user.name}...`;
    },
    [fetchQueues.rejected]: (state, action) => {
      state.errorText = action.error.message;
    },
    [fetchQueues.fulfilled]: (state, action) => {
      state.infoText = `Number of queues fetched: ${action.payload.queues.length}`;
    },
  },
});

export const {
  setErrorPopupMessage,
  setInfoPopupMessage,
  setNotificationPermission,
} = appSlice.actions;

export default appSlice.reducer;
