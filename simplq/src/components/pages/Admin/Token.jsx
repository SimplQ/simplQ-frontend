import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Notifications from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOffSharp';
import CallIcon from '@material-ui/icons/Call';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useDeleteToken, useNotifyToken } from 'store/asyncActions';
import styles from './admin.module.scss';

function Token({ token }) {
  const {
    name,
    tokenId,
    tokenNumber,
    contactNumber,
    notifiable,
    tokenCreationTimestamp,
    tokenStatus,
  } = token;
  const [isNotifyHovering, setIsNotifyHovering] = useState(false);
  const dispatch = useDispatch();
  const deleteToken = useDeleteToken();
  const notifyToken = useNotifyToken();
  const notifyStatus = useSelector((state) => state.actionStatus['notifyToken']);
  const deleteStatus = useSelector((state) => state.actionStatus['deleteToken']);

  const handleMouseHover = () => {
    setIsNotifyHovering(!isNotifyHovering);
  };

  const onNotifyClick = () => {
    dispatch(notifyToken({ tokenId }));
  };

  const onDeleteClick = () => {
    if (deleteStatus !== 'pending') dispatch(deleteToken({ tokenId }));
  };

  const onCallClick = () => {
    window.open(`tel:+${contactNumber}`, '_self');
  };

  const NotifyIcon = () => {
    // TODO: Add some visual (blinking) while notifyToken is pending
    if (notifiable === false || notifyStatus === 'pending') {
      return <NotificationsOffIcon fontSize="large" className={styles['token-icon-disabled']} />;
    }
    if (tokenStatus === 'NOTIFIED') {
      return <NotificationsActiveIcon fontSize="large" style={{ color: 'green' }} />;
    }
    return isNotifyHovering ? (
      <NotificationsActiveIcon fontSize="large" className={styles['token-icon']} />
    ) : (
      <Notifications fontSize="large" className={styles['token-icon']} />
    );
  };

  const NotifyButton = () => (
    <IconButton
      disabled={notifiable === false || tokenStatus === 'NOTIFIED' || notifyStatus === 'pending'}
      color="primary"
      aria-label="notify"
      onClick={onNotifyClick}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
    >
      <NotifyIcon />
    </IconButton>
  );

  const CallButton = () => (
    <IconButton onClick={onCallClick}>
      <CallIcon className={styles['token-icon']} fontSize="large" />
    </IconButton>
  );

  const RemoveButton = () => {
    const styleName = deleteStatus === 'pending' ? 'token-remove-disabled' : 'token-remove';
    return (
      <div
        role="button"
        onClick={onDeleteClick}
        tabIndex={-1}
        onKeyDown={onDeleteClick}
        className={styles[styleName]}
        aria-label="remove"
      >
        <p>remove</p>
      </div>
    );
  };

  return (
    <section className={styles.token}>
      <div className={styles['token-number']}>
        <p>{tokenNumber < 99 ? `00${tokenNumber}` : tokenNumber}</p>
      </div>
      <div className={styles['token-details']}>
        <div className={styles['token-name-time']}>
          <p>{moment(tokenCreationTimestamp).format('hh:mm A')}</p>
          <p>{name}</p>
        </div>
        <div className={styles['token-operations']}>
          <div className={styles['token-icon-set']}>
            <CallButton />
            <NotifyButton />
          </div>
          <RemoveButton />
        </div>
      </div>
    </section>
  );
}

export default Token;
