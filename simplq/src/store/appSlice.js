/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// fix for Notification object not supported on iOS safari
const getNotificationStatus = () => {
  try {
    return Notification.permission;
  } catch (error) {
    return 'denied';
  }
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    errorText: '',
    infoText: '',
    notificationPermission: getNotificationStatus(),
    isLoggedIn: false,
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
  addToMyQueues,
} = appSlice.actions;

export default appSlice.reducer;
