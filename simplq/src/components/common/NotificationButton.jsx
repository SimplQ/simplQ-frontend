import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
      // eslint-disable-next-line no-console
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
      <span
        role="button"
        tabIndex={0}
        onClick={() => askNotificationPermission()}
        onKeyDown={() => askNotificationPermission()}
        style={{
          cursor: 'pointer',
          margin: '20px',
          padding: '15px',
          borderRadius: '25px',
          backgroundColor: 'rebeccapurple',
        }}
      >
        <span role="img" aria-labelledby="Bell">
          🔔
        </span>
      </span>
    );
  }
  if (notificationPermission === 'denied') {
    return <>*If required, please enable notifications in the page settings</>;
  }
  return null;
};
export default NotificationButton;
