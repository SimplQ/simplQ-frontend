import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import queuesReducer from 'store/queues';
import queueInfoReducer from 'store/queueInfo';
import actionStatusReducer from 'store/actionStatus';
import tokenReducer from 'store/token';
import selectedQueueReducer from 'store/selectedQueue';
import selectedQueueHistoryReducer from 'store/selectedQueueHistory';
import appReducer from './appSlice';

export const rootReducer = combineReducers({
  appReducer,
  queues: queuesReducer,
  queueInfo: queueInfoReducer,
  token: tokenReducer,
  actionStatus: actionStatusReducer,
  selectedQueue: selectedQueueReducer,
  selectedQueueHistory: selectedQueueHistoryReducer,
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
