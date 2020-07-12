import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from './Button';
import { setNotificationPermission } from '../../store/appSlice';

const NotificationButton = () => {
  const dispatch = useDispatch();
  const notificationPermission = useSelector((state) => state.appReducer.notificationPermission);

  const checkNotificationPromise = () => {
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
      // Whatever the user answers, we make sure Chrome stores the information
      if (!('permission' in Notification)) {
        Notification.permission = permission;
      }

      dispatch(setNotificationPermission(permission));
    };

    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications.');
    } else if (checkNotificationPromise()) {
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
