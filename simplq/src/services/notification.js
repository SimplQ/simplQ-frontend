import { setNotificationPermission } from '../store/appSlice';
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
  // Some older versions of chrome doesn't store the permission in the Notification object. In that case we store it manually.
  if (!('permission' in Notification)) {
    Notification.permission = permission;
  }
  store.dispatch(setNotificationPermission(permission));
};

export const enableNotifications = () => {
  // Let's check if the browser supports notifications
  if (!('Notification' in window)) {
    // TODO: Display error
    // eslint-disable-next-line no-console
    console.log('This browser does not support notifications.');
  } else if (hasPromiseBasedNotificationSupport()) {
    Notification.requestPermission().then(handlePermission);
  } else {
    Notification.requestPermission(handlePermission);
  }
};

export const disableNotifications = () => {
  // It is  not possible for the website to remove permissions, the user will have to disable from browser settings.
  // https://stackoverflow.com/questions/28478185/remove-html5-notification-permissions
  // TODO show error
};

export const setNotificationPreference = (shouldNotify) => {
  if (shouldNotify) {
    enableNotifications();
  } else {
    disableNotifications();
  }
};
