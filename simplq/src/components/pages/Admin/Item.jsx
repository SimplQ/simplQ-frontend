import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Notifications from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import CallIcon from '@material-ui/icons/Call';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, CircularProgress } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { progressCreationStep } from '../../../store/appSlice';
import * as TokenService from '../../../services/token';
import { handleApiErrors } from '../../ErrorHandler';

const useStyles = makeStyles((theme) => ({
  addBox: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
  },
  callButton: {
    backgroundColor: '#2dad78',
  },
  callIcon: {
    color: 'white',
  },
}));

function Item(props) {
  const classes = useStyles();
  const contactNumber = props.item.contactNumber;
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
        <Notifications color="disabled" />
      </IconButton>
    );
  } else if (didNotify) {
    // Notified
    notificationButton = (
      <IconButton edge="end" color="primary" aria-label="notified">
        <DoneIcon style={{ color: 'green' }} />
      </IconButton>
    );
  } else {
    // Yet to notify
    notificationButton = (
      <IconButton edge="end" color="primary" aria-label="notify" onClick={onNotifyClick}>
        <Notifications />
      </IconButton>
    );
  }

  return (
    <ListItem button className={classes.root} component="a" href={`tel:${contactNumber}`}>
      <ListItemAvatar>
        <IconButton className={classes.callButton}>
          <CallIcon className={classes.callIcon} />
        </IconButton>
      </ListItemAvatar>
      <ListItemText primary={name} />
      <ListItemSecondaryAction>
        {notificationButton}
        <IconButton edge="end" color="primary" aria-label="delete" onClick={onDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Item;
