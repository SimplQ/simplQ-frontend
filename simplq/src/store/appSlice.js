import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    queueName: window.localStorage.getItem("queueName"),
    queueId: window.localStorage.getItem("queueId")
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
    }
  }
})

export const { setQueueName, setQueueId } = appSlice.actions;

export default appSlice.reducer;