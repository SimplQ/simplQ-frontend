import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    queueName: window.localStorage.getItem("queueName"),
    queueId: window.localStorage.getItem("queueId"),
    tokenId: window.localStorage.getItem("tokenId"),
    activeStep: 0

  },
  reducers: {
    setQueueName: (state, action) => { 
      const queueName = action.payload;
      state.queueName = queueName;
      window.localStorage.setItem("queueName", queueName);
    },
    setQueueId: (state, action) => { 
      const queueId = action.payload;
      state.queueId = queueId;
      window.localStorage.setItem("queueId", queueId);
    },
    setTokenId: (state, action) => { 
      const tokenId = action.payload;
      state.tokenId = tokenId;
      window.localStorage.setItem("tokenId", tokenId);
    },
    progressStep: (state, action) => { 
      if (state.activeStep < action.payload)
        state.activeStep = action.payload;
    }
  }
})

export const { setQueueName, setQueueId, setTokenId, progressStep } = appSlice.actions;

export default appSlice.reducer;