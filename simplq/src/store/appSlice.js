/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { createQueue, deleteQueue, joinQueue } from 'store/asyncActions';

function isRejectedAction(action) {
  return action.type.endsWith('rejected');
}

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
  extraReducers: (builder) => {
    builder
      .addCase(joinQueue.pending, (state) => {
        state.infoText = `Adding to queue...`;
      })
      .addCase(joinQueue.fulfilled, (state, action) => {
        state.infoText = `Added ${action.payload.name}`;
      })
      .addCase(createQueue.pending, (state) => {
        state.infoText = `Creating new queue...`;
      })
      .addCase(createQueue.fulfilled, (state) => {
        state.infoText = `Your queue is ready to use.`;
      })
      .addCase(deleteQueue.pending, (state) => {
        state.infoText = `Deleting queue...`;
      })
      .addCase(deleteQueue.fulfilled, (state, action) => {
        state.infoText = `Deleted ${action.payload.queueName}`;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        // All failed network calls are handled here
        state.errorText = action.error.message;
      });
  },
});

export const {
  setErrorPopupMessage,
  setInfoPopupMessage,
  setNotificationPermission,
} = appSlice.actions;

export default appSlice.reducer;
