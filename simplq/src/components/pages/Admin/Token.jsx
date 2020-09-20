import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Notifications from '@material-ui/icons/Notifications';
import CheckIcon from '@material-ui/icons/Check';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOffSharp';
import * as TokenService from '../../../services/token';
import { handleApiErrors } from '../../ErrorHandler';
import styles from '../../../styles/adminPage.module.scss';
import LoadingIndicator from '../../common/LoadingIndicator';

function Token(props) {
  const name = props.token.name;
  const tokenId = props.token.tokenId;
  const tokenNumber = props.token.tokenNumber;
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
      <IconButton edge="end" color="primary" aria-label="notify">
        <NotificationsOffIcon fontSize="large" color="disabled" />
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
        edge="end"
        color="primary"
        aria-label="notify"
        onClick={onNotifyClick}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseHover}
      >
        {isNotifyHovering ? (
          <NotificationsActiveIcon fontSize="large" />
        ) : (
          <Notifications fontSize="large" />
        )}
      </IconButton>
    );
  }

  return (
    <div className={styles.token}>
      <div>
        <div>{notificationButton}</div>
        <div>
          <p className={styles['person-name']}>{name}</p>
          <p className={styles['token-number']}>
            Token No:
            <span className={styles['token-number-value']}>{tokenNumber}</span>
          </p>
        </div>
      </div>
      <div>
        <IconButton color="primary">
          <CheckIcon fontSize="large" onClick={onDeleteClick} />
        </IconButton>
      </div>
    </div>
  );
}

export default Token;
