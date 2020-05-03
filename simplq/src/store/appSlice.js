import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    queueName: window.localStorage.getItem("queueName"),
    queueId: window.localStorage.getItem("queueId"),
    tokenId: window.localStorage.getItem("tokenId")
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
    }
  }
})

export const { setQueueName, setQueueId, setTokenId } = appSlice.actions;

export default appSlice.reducer;