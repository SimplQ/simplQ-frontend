/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    errorText: '',
    infoText: '',
    notificationPermission: null, // This state value is initilised by the notification service.
    isLoggedIn: null, // This state value is initilised by the auth service.
    myQueues: [],
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
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setMyQueues: (state, action) => {
      const newQueuesList = action.payload;
      state.myQueues = newQueuesList;
    },
  },
});

export const {
  setErrorPopupMessage,
  setInfoPopupMessage,
  setNotificationPermission,
  setIsLoggedIn,
  setMyQueues,
} = appSlice.actions;

export default appSlice.reducer;
