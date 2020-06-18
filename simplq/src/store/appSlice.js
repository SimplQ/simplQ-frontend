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
  },
  reducers: {
    setQueueName: (state, action) => {
      const queueName = action.payload;
      state.queueName = queueName;
      window.localStorage.setItem('queueName', queueName);
    },
    setQueueId: (state, action) => {
      const queueId = action.payload;
      state.queueId = queueId;
      window.localStorage.setItem('queueId', queueId);
    },
    setTokenId: (state, action) => {
      const tokenId = action.payload;
      state.tokenId = tokenId;
      window.localStorage.setItem('tokenId', tokenId);
    },
    progressCreationStep: (state, action) => {
      const newStep = action.payload;
      if (state.currentCreationStep < newStep) {
        state.currentCreationStep = newStep;
        window.localStorage.setItem('currentCreationStep', newStep);
      }
    },
    setCreationStep: (state, action) => {
      const newStep = action.payload;
      state.currentCreationStep = newStep;
      window.localStorage.setItem('currentCreationStep', newStep);
    },
    progressJoinernStep: (state, action) => {
      const newStep = action.payload;
      if (state.currentJoinerStep < newStep) {
        state.currentJoinerStep = newStep;
        window.localStorage.setItem('currentJoinerStep', newStep);
      }
    },
    setJoinerStep: (state, action) => {
      const newStep = action.payload;
      state.currentJoinerStep = newStep;
      window.localStorage.setItem('currentJoinerStep', newStep);
    },
    setAheadCount: (state, action) => {
      const aheadCount = action.payload;
      state.aheadCount = aheadCount;
      // ahead count is not deliberately persisted to local storage, so that if it's not set, the component requests for it from the server
    },
    setErrorNotifOpen: (state, action) => {
      console.log('In setErrorNotifOpen');
      state.errorText = action.payload;
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
} = appSlice.actions;

export default appSlice.reducer;
