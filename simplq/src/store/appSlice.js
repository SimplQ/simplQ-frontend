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
  },
});

export const { setErrorNotifOpen, setNotificationPermission } = appSlice.actions;

export default appSlice.reducer;
