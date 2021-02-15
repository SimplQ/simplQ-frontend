import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import queuesReducer from 'store/allQueues';
import queueStatusReducer from 'store/queueStatus';
import actionStatusReducer from 'store/actionStatus';
import queueReducer from 'store/queue';
import tokenReducer from 'store/token';
import appReducer from './appSlice';

export const rootReducer = combineReducers({
  appReducer,
  queues: queuesReducer,
  queueStatus: queueStatusReducer,
  token: tokenReducer,
  actionStatus: actionStatusReducer,
  queue: queueReducer,
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
