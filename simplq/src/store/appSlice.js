/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { deleteQueue, getQueueStatusByName, joinQueue } from 'store/asyncActions';

const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    errorText: '',
    infoText: '',
    notificationPermission: null, // This state value is initialised by the notification service.
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
    [deleteQueue.pending]: (state) => {
      state.infoText = `Deleting queue...`;
    },
    [deleteQueue.rejected]: (state, action) => {
      state.errorText = action.error.message;
    },
    [deleteQueue.fulfilled]: (state, action) => {
      state.infoText = `Deleted ${action.payload.queueName}`;
    },
    [getQueueStatusByName.rejected]: (state, action) => {
      state.errorText = action.payload.message;
    },
    [joinQueue.pending]: (state) => {
      state.infoText = `Adding to queue...`;
    },
    [joinQueue.rejected]: (state, action) => {
      state.errorText = action.error.message;
    },
    [joinQueue.fulfilled]: (state, action) => {
      state.infoText = `Added to ${action.payload.queueName}`;
    },
  },
});

export const {
  setErrorPopupMessage,
  setInfoPopupMessage,
  setNotificationPermission,
} = appSlice.actions;

export default appSlice.reducer;
