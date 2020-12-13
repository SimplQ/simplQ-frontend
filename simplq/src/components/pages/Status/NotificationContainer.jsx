import React from 'react';
import { useSelector } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import styles from '../../../styles/statusPage.module.scss';
import { setNotificationPreference } from '../../../services/notification';

export default () => {
  const notificationPermission = useSelector((state) => state.appReducer.notificationPermission);

  return (
    <div className={styles['notification-container']}>
      <Switch
        checked={notificationPermission === 'granted'}
        classes={{ thumb: 'switch-thumb' }}
        onChange={(event) => setNotificationPreference(event.target.checked)}
        size="small"
      />
      <span>Enable notification</span>
      <InfoOutlinedIcon classes={{ root: 'info-icon' }} />
    </div>
  );
};
