import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Notifications from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { progressCreationStep } from '../../../store/appSlice';
import * as TokenService from '../../../services/token';
import { handleApiErrors } from '../../ErrorHandler';
import styles from '../../../styles/adminPage.module.scss';

function Item(props) {
  // const classes = useStyles();
  // const contactNumber = props.item.contactNumber;
  const name = props.item.name;
  const tokenId = props.item.tokenId;
  const notifiable = props.item.notifiable;
  const [notifying, setNotifying] = useState(false);
  const [didNotify, setDidNotify] = useState(props.item.tokenStatus === 'NOTIFIED');

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
    // Notify user of error TODO
  };

  const onDeleteClick = () => {
    props.removeItemHandler(tokenId);
  };

  let notificationButton = null;
  if (notifying) {
    // Notifying in progress
    notificationButton = (
      <IconButton edge="end" color="primary" aria-label="notify">
        <CircularProgress size={18} />
      </IconButton>
    );
  } else if (!notifiable) {
    // Not notifiable
    notificationButton = (
      <IconButton edge="end" color="primary" aria-label="notify">
        <Notifications fontSize="large" color="disabled" />
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
      <IconButton edge="end" color="primary" aria-label="notify" onClick={onNotifyClick}>
        <Notifications fontSize="large" />
      </IconButton>
    );
  }

  return (
    <div className={styles.item}>
      <div>
        {' '}
        {notificationButton}
        {name}
      </div>
      <div>
        <IconButton>
          <CheckIcon fontSize="large" onClick={onDeleteClick} />
        </IconButton>
      </div>
    </div>
  );

  // return (
  //   <ListItem button className={classes.root} component="a" href={`tel:${contactNumber}`}>
  //     <ListItemAvatar>
  //       <IconButton className={classes.callButton}>
  //         <CallIcon className={classes.callIcon} />
  //       </IconButton>
  //     </ListItemAvatar>
  //     <ListItemText primary={name} />
  //     <ListItemSecondaryAction>
  //       {notificationButton}
  //       <IconButton edge="end" color="primary" aria-label="delete" onClick={onDeleteClick}>
  //         <DeleteIcon />
  //       </IconButton>
  //     </ListItemSecondaryAction>
  //   </ListItem>
  // );
}

export default Item;
