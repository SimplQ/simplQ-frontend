import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Notifications from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import CheckIcon from '@material-ui/icons/Check';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOffSharp';
import { progressCreationStep } from '../../../store/appSlice';
import * as TokenService from '../../../services/token';
import { handleApiErrors } from '../../ErrorHandler';
import styles from '../../../styles/adminPage.module.scss';
import LoadingIndicator from '../../common/LoadingIndicator';

function Item(props) {
  const name = props.item.name;
  const tokenId = props.item.tokenId;
  const tokenNumber = props.item.tokenNumber;
  const notifiable = props.item.notifiable;
  const [notifying, setNotifying] = useState(false);
  const [isNotifyHovering, setIsNotifyHovering] = useState(false);
  const [didNotify, setDidNotify] = useState(props.item.tokenStatus === 'NOTIFIED');

  const handleMouseHover = () => {
    setIsNotifyHovering(!isNotifyHovering);
  };

  const dispatch = useDispatch();
  const onNotifyClick = () => {
    dispatch(progressCreationStep(3));
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
    props.removeItemHandler(tokenId);
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
    <div className={styles.item}>
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

export default Item;
