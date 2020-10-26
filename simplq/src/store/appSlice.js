import { createSlice } from '@reduxjs/toolkit';

const MY_QUEUE_LOCALSTORAGE = 'my-local-queues';

const getMyQueuesFromLocalStorage = () => {
  const localQueues = JSON.parse(localStorage.getItem(MY_QUEUE_LOCALSTORAGE));
  return localQueues || [];
};

// fix for Notification object not supported on iOS safari
const getNotificationStatus = () => {
  try {
    return Notification.permission;
  } catch (error) {
    return 'denied';
  }
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    errorText: '',
    notificationPermission: getNotificationStatus(),
    isLoggedIn: false,
    myQueues: getMyQueuesFromLocalStorage(),
  },
  reducers: {
    setErrorNotifOpen: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.errorText = action.payload;
    },
    setNotificationPermission: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.notificationPermission = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = action.payload;
    },
    setMyQueues: (state, action) => {
      const newQueuesList = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.myQueues = newQueuesList;

      // Flush to local storage
      localStorage.setItem(MY_QUEUE_LOCALSTORAGE, JSON.stringify(newQueuesList));
    },
    addToMyQueues: (state, action) => {
      const newQueue = action.payload;

      // Flush to localstorage as well
      const existingQueues = getMyQueuesFromLocalStorage();
      existingQueues.push(newQueue);
      localStorage.setItem(MY_QUEUE_LOCALSTORAGE, JSON.stringify(existingQueues));

      // eslint-disable-next-line no-param-reassign
      state.myQueues = existingQueues;
    },
  },
});

export const {
  setErrorNotifOpen,
  setNotificationPermission,
  setIsLoggedIn,
  setMyQueues,
  addToMyQueues,
} = appSlice.actions;

export default appSlice.reducer;
