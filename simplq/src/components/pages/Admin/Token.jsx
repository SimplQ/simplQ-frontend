import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Notifications from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOffSharp';
import CallIcon from '@material-ui/icons/Call';
import moment from 'moment';
import LoadingIndicator from 'components/common/LoadingIndicator';
import { notifyToken } from 'api/requestFactory';
import { useDeleteToken } from 'store/asyncActions';
import useRequest from 'api/useRequest';
import { useDispatch } from 'react-redux';
import styles from './admin.module.scss';

function Token({ token }) {
  const name = token.name;
  const tokenId = token.tokenId;
  const tokenNumber = token.tokenNumber;
  const contactNumber = token.contactNumber;
  const notifiable = token.notifiable;
  const tokenCreationTimestamp = token.tokenCreationTimestamp;
  const [notifying, setNotifying] = useState(false);
  const [isNotifyHovering, setIsNotifyHovering] = useState(false);
  const [didNotify, setDidNotify] = useState(token.tokenStatus === 'NOTIFIED');
  const { requestMaker } = useRequest();
  const deleteToken = useDeleteToken();
  const dispatch = useDispatch();

  const handleMouseHover = () => {
    setIsNotifyHovering(!isNotifyHovering);
  };

  const onNotifyClick = () => {
    setNotifying(true);
    requestMaker(notifyToken(tokenId)).then((response) => {
      if (response) {
        setDidNotify(true);
      }
      setNotifying(false);
    });
  };

  const onDeleteClick = () => {
    dispatch(deleteToken({ tokenId: token.tokenId, goHome: false, popUp: false }));
  };

  const onCallClick = () => {
    window.open(`tel:+${contactNumber}`, '_self');
  };

  let notificationButton = null;
  if (notifying) {
    // Notifying in progress
    notificationButton = (
      <IconButton color="primary" aria-label="notify">
        <LoadingIndicator />
      </IconButton>
    );
  } else if (!notifiable) {
    // Not notifiable
    notificationButton = (
      <IconButton color="primary" aria-label="notify" disabled>
        <NotificationsOffIcon fontSize="large" className={styles['token-icon-disabled']} />
      </IconButton>
    );
  } else if (didNotify) {
    // Notified
    notificationButton = (
      <IconButton color="primary" aria-label="notified">
        <NotificationsActiveIcon fontSize="large" style={{ color: 'green' }} />
      </IconButton>
    );
  } else {
    // Yet to notify
    notificationButton = (
      <IconButton
        color="primary"
        edge="end"
        aria-label="notify"
        onClick={onNotifyClick}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseHover}
      >
        {isNotifyHovering ? (
          <NotificationsActiveIcon fontSize="large" className={styles['token-icon']} />
        ) : (
          <Notifications fontSize="large" className={styles['token-icon']} />
        )}
      </IconButton>
    );
  }

  const RemoveButton = () => (
    <div
      role="button"
      onClick={onDeleteClick}
      tabIndex={-1}
      onKeyDown={onDeleteClick}
      className={styles['token-remove']}
      aria-label="remove"
    >
      <p>remove</p>
    </div>
  );

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
            <IconButton onClick={onCallClick}>
              <CallIcon className={styles['token-icon']} fontSize="large" />
            </IconButton>
            {notificationButton}
          </div>
          <RemoveButton />
        </div>
      </div>
    </section>
  );
}

export default Token;
