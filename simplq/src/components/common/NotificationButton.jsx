import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from './Button';
import { setNotificationPermission } from '../../store/appSlice';

const NotificationButton = () => {
  const dispatch = useDispatch();
  const notificationPermission = useSelector((state) => state.appReducer.notificationPermission);

  const hasPromiseBasedNotificationSupport = () => {
    try {
      Notification.requestPermission().then();
    } catch (e) {
      return false;
    }

    return true;
  };

  const askNotificationPermission = () => {
    // function to actually ask the permissions
    const handlePermission = (permission) => {
      // Some older versions of chrome doesn't store the permission in the Notification object. In that case we store it manually.
      if (!('permission' in Notification)) {
        Notification.permission = permission;
      }

      dispatch(setNotificationPermission(permission));
    };

    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications.');
    } else if (hasPromiseBasedNotificationSupport()) {
      Notification.requestPermission().then((permission) => {
        handlePermission(permission);
      });
    } else {
      Notification.requestPermission((permission) => {
        handlePermission(permission);
      });
    }
  };

  if (notificationPermission === 'default') {
    return (
      <Button text="Enable Notifications" onClick={() => askNotificationPermission()}>
        Enable Notifications
      </Button>
    );
  }
  if (notificationPermission === 'denied') {
    return <>Enable Notifications in Settings</>;
  }
  return null;
};
export default NotificationButton;
