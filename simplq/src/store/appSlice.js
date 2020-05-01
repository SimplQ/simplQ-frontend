import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    queueName: null
  },
  reducers: {
    setQueueName: (state, action) => { state.queueName = action.payload }
  }
})

export const { setQueueName } = appSlice.actions;

export default appSlice.reducer;