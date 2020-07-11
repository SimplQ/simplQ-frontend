import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    queueName: window.localStorage.getItem('queueName'),
    queueId: window.localStorage.getItem('queueId'),
    tokenId: window.localStorage.getItem('tokenId'),
    currentCreationStep: window.localStorage.getItem('currentCreationStep'),
    currentJoinerStep: window.localStorage.getItem('currentJoinerStep'),
    aheadCount: null,
    errorText: '',
    notificationPermission: Notification.permission,
  },
  reducers: {
    setQueueName: (state, action) => {
      const queueName = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.queueName = queueName;
      window.localStorage.setItem('queueName', queueName);
    },
    setQueueId: (state, action) => {
      const queueId = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.queueId = queueId;
      window.localStorage.setItem('queueId', queueId);
    },
    setTokenId: (state, action) => {
      const tokenId = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.tokenId = tokenId;
      window.localStorage.setItem('tokenId', tokenId);
    },
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
    setAheadCount: (state, action) => {
      const aheadCount = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.aheadCount = aheadCount;
      // ahead count is not deliberately persisted to local storage, so that if it's not set, the component requests for it from the server
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
  setQueueName,
  setQueueId,
  setTokenId,
  progressCreationStep,
  setCreationStep,
  progressJoinernStep,
  setJoinerStep,
  setAheadCount,
  setErrorNotifOpen,
  setNotificationPermission,
} = appSlice.actions;

export default appSlice.reducer;
