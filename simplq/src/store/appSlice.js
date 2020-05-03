import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    queueName: null,
    queueId: null
  },
  reducers: {
    setQueueName: (state, action) => { state.queueName = action.payload },
    setQueueId: (state, action) => { state.queueId = action.payload }
  }
})

export const { setQueueName, setQueueId } = appSlice.actions;

export default appSlice.reducer;