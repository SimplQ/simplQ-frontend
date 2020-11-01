import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Notifications from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOffSharp';
import CallIcon from '@material-ui/icons/Call';
import * as TokenService from '../../../services/token';
import { handleApiErrors } from '../../ErrorHandler';
import styles from '../../../styles/adminPage.module.scss';
import LoadingIndicator from '../../common/LoadingIndicator';

function Token(props) {
  const name = props.token.name;
  const tokenId = props.token.tokenId;
  const tokenNumber = props.token.tokenNumber;
  const contactNumber = props.token.contactNumber;
  const notifiable = props.token.notifiable;
  const [notifying, setNotifying] = useState(false);
  const [isNotifyHovering, setIsNotifyHovering] = useState(false);
  const [didNotify, setDidNotify] = useState(props.token.tokenStatus === 'NOTIFIED');

  const handleMouseHover = () => {
    setIsNotifyHovering(!isNotifyHovering);
  };

  const onNotifyClick = () => {
    setNotifying(true);
    TokenService.notify(tokenId)
      .then(() => {
        setNotifying(false);
        setDidNotify(true);
      })
      .catch((err) => {
        setNotifying(false);
        handleApiErrors(err);
      });
  };

  const onDeleteClick = () => {
    props.removeTokenHandler(tokenId);
  };

  const onCallClick = () => {
    window.open(`tel:+${contactNumber}`, '_self');
  };

  let notificationButton = null;
  if (notifying) {
    // Notifying in progress
    notificationButton = (
      <IconButton edge="end" color="primary" aria-label="notify">
        <LoadingIndicator />
      </IconButton>
    );
  } else if (!notifiable) {
    // Not notifiable
    notificationButton = (
      <IconButton edge="end" color="primary" aria-label="notify" disabled>
        <NotificationsOffIcon fontSize="large" className={styles['token-icon-disabled']} />
      </IconButton>
    );
  } else if (didNotify) {
    // Notified
    notificationButton = (
      <IconButton edge="end" color="primary" aria-label="notified">
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
          <p>11:02 pm</p>
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
