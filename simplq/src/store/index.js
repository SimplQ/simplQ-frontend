import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  appReducer  from './appSlice'

export const rootReducer = combineReducers({
  appReducer
});

export const store = configureStore({
  reducer: rootReducer,
});