import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { setNotificationPermission } from '../../../store/appSlice';
import styles from '../../../styles/statusPage.module.scss';

export default () => {
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

  return (
    <div className={styles['notification-container']}>
      <Switch
        checked={notificationPermission === 'granted'}
        classes={{ thumb: 'switch-thumb' }}
        onChange={askNotificationPermission}
        size="small"
      />
      <span>Enable notification</span>
      <InfoOutlinedIcon classes={{ root: 'info-icon' }} />
    </div>
  );
};
