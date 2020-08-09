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
    currentCreationStep: window.localStorage.getItem('currentCreationStep'),
    currentJoinerStep: window.localStorage.getItem('currentJoinerStep'),
    errorText: '',
    notificationPermission: getNotificationStatus(),
  },
  reducers: {
    progressCreationStep: (state, action) => {
      const newStep = action.payload;
      if (state.currentCreationStep < newStep) {
        // eslint-disable-next-line no-param-reassign
        state.currentCreationStep = newStep;
        window.localStorage.setItem('currentCreationStep', newStep);
      }
    },
    setCreationStep: (state, action) => {
      const newStep = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.currentCreationStep = newStep;
      window.localStorage.setItem('currentCreationStep', newStep);
    },
    progressJoinernStep: (state, action) => {
      const newStep = action.payload;
      if (state.currentJoinerStep < newStep) {
        // eslint-disable-next-line no-param-reassign
        state.currentJoinerStep = newStep;
        window.localStorage.setItem('currentJoinerStep', newStep);
      }
    },
    setJoinerStep: (state, action) => {
      const newStep = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.currentJoinerStep = newStep;
      window.localStorage.setItem('currentJoinerStep', newStep);
    },
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

export const {
  progressCreationStep,
  setCreationStep,
  progressJoinernStep,
  setJoinerStep,
  setErrorNotifOpen,
  setNotificationPermission,
} = appSlice.actions;

export default appSlice.reducer;
