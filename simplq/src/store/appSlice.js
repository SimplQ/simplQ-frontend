/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { fetchQueues, deleteQueue } from 'store/queues';

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
    [fetchQueues.pending]: (state) => {
      state.infoText = `Loading queues...`;
    },
    [fetchQueues.rejected]: (state, action) => {
      state.errorText = action.error.message;
    },
    [fetchQueues.fulfilled]: (state, action) => {
      state.infoText = `Number of queues fetched: ${action.payload.queues.length}`;
    },
    [deleteQueue.pending]: (state) => {
      state.infoText = `Deleting queue...`;
    },
    [deleteQueue.rejected]: (state, action) => {
      state.errorText = action.error.message;
    },
    [deleteQueue.fulfilled]: (state, action) => {
      state.infoText = `Deleted ${action.payload.queueName}`;
    },
  },
});

export const {
  setErrorPopupMessage,
  setInfoPopupMessage,
  setNotificationPermission,
} = appSlice.actions;

export default appSlice.reducer;
