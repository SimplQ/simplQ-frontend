import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import queuesSlice from 'store/queuesSlice';
import appReducer from './appSlice';

export const rootReducer = combineReducers({
  appReducer,
  queues: queuesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // Ignore auth in async thunks
      ignoredActionPaths: ['meta.arg.auth'],
    },
  }),
});
