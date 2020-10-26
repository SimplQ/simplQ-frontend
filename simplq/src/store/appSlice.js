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
    notificationPermission: getNotificationStatus(),
    isLoggedIn: false,
    myQueues: [],
  },
  reducers: {
    setErrorNotifOpen: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.errorText = action.payload;
    },
    setNotificationPermission: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.notificationPermission = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = action.payload;
    },
    setMyQueues: (state, action) => {
      const newQueuesList = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.myQueues = newQueuesList;
    },
  },
});

export const {
  setErrorNotifOpen,
  setNotificationPermission,
  setIsLoggedIn,
  setMyQueues,
  addToMyQueues,
} = appSlice.actions;

export default appSlice.reducer;
