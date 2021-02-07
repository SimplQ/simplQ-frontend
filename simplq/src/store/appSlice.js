/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getUserQueues, deleteQueue, getQueueStatusByName } from 'store/asyncActions';

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
    [getUserQueues.pending]: (state) => {
      state.infoText = `Loading queues...`;
    },
    [getUserQueues.rejected]: (state, action) => {
      state.errorText = action.error.message;
    },
    [getUserQueues.fulfilled]: (state, action) => {
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
    [getQueueStatusByName.rejected]: (state, action) => {
      state.errorText = action.payload.message;
    },
  },
});

export const {
  setErrorPopupMessage,
  setInfoPopupMessage,
  setNotificationPermission,
} = appSlice.actions;

export default appSlice.reducer;
