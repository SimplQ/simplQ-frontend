import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { setNotificationPermission } from '../../store/appSlice';

const NotificationButton = (props) => {
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
      Notification.requestPermission(function (permission) {
        handlePermission(permission);
      });
    }
  };

  if (notificationPermission === 'default') {
    return (
      <div className={props.buttonGroupClass}>
        <Button
          className={props.buttonClass}
          variant="outlined"
          color="primary"
          onClick={() => askNotificationPermission()}
        >
          Enable Notifications
        </Button>
      </div>
    );
  }
  if (notificationPermission === 'denied') {
    return (
      <div className={props.buttonGroupClass}>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Enable Notifications in Settings
        </Typography>
      </div>
    );
  }
  return null;
};
export default NotificationButton;
