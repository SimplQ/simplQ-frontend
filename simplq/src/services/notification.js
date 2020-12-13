import {
  setErrorPopupMessage,
  setInfoPopupMessage,
  setNotificationPermission,
} from '../store/appSlice';
import { store } from '../store';

const hasPromiseBasedNotificationSupport = async () => {
  try {
    await Notification.requestPermission();
  } catch (e) {
    return false;
  }
  return true;
};

const handlePermission = (permission) => {
  if (permission === 'denied') {
    store.dispatch(
      setErrorPopupMessage(
        'Your browser has disabled notifications, please enable from Browser Settings'
      )
    );
  }
  // Some older versions of chrome doesn't store the permission in the Notification object. In that case we store it manually.
  if (!('permission' in Notification)) {
    Notification.permission = permission;
  }
  store.dispatch(setNotificationPermission(permission));
};

export const enableNotifications = () => {
  // Let's check if the browser supports notifications
  if (!('Notification' in window)) {
    store.dispatch(setErrorPopupMessage('This browser does not support notifications.'));
  } else if (hasPromiseBasedNotificationSupport()) {
    Notification.requestPermission().then(handlePermission);
  } else {
    Notification.requestPermission(handlePermission);
  }
};

export const disableNotifications = () => {
  // It is  not possible for the website to remove permissions, the user will have to disable from browser settings.
  // https://stackoverflow.com/questions/28478185/remove-html5-notification-permissions
  store.dispatch(setInfoPopupMessage('Please disable notifications from your browser settings.'));
};

export const setNotificationPreference = (shouldNotify) => {
  if (shouldNotify) {
    enableNotifications();
  } else {
    disableNotifications();
  }
};

export const notify = (messageText) => {
  const notification = new Notification('SimplQ', {
    body: messageText,
    icon: '/images/Simple-Q.png',
  });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      // The tab has become visible so clear the now-stale Notification.
      notification.close();
    }
  });
};

// fix for Notification object not supported on iOS safari
const getNotificationStatus = () => {
  try {
    return Notification.permission;
  } catch (error) {
    return 'denied';
  }
};

// Initilise notifications at start
store.dispatch(setNotificationPermission(getNotificationStatus()));
