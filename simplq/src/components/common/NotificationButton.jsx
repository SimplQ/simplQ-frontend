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

      // set the button to shown or hidden, depending on what the user answers
      if (Notification.permission === 'denied' || Notification.permission === 'default') {
        console.log('Notifications disabled');
      } else {
        console.log('Notifications enabled');
      }
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
      <Button
        className={props.buttonClass}
        variant="outlined"
        color="primary"
        onClick={() => askNotificationPermission()}
      >
        Enable Notifications
      </Button>
    );
  }
  if (notificationPermission === 'denied') {
    return (
      <Typography variant="h5" align="center" color="textSecondary" component="p">
        Enable Notifications in Settings
      </Typography>
    );
  }
  return null;

  // return (
  //     (notificationPermission === 'default') ? (
  //         <Button
  //             className={props.buttonClass}
  //             variant="outlined"
  //             color="primary"
  //             onClick={() => askNotificationPermission()}
  //         >
  //             Enable Notifications
  //         </Button>
  //     ) : (
  //             <div />
  //         )
  // )
};
export default NotificationButton;
