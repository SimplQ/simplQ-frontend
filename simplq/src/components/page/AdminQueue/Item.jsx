import React, { useState } from "react";
import IconButton from '@material-ui/core/IconButton';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import * as QueueService from '../../../services/queue';
import Notifications from '@material-ui/icons/Notifications';
import { useDispatch } from "react-redux";
import { progressCreationStep } from "../../../store/appSlice";
import DeleteIcon from '@material-ui/icons/Delete';
import CallIcon from '@material-ui/icons/Call';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, CircularProgress } from "@material-ui/core";
import DoneIcon from '@material-ui/icons/Done';
import { handleApiErrors } from "../../ErrorHandler";

const useStyles = makeStyles((theme) => ({
    addBox: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(3)
    },
    callButton: {
        backgroundColor: '#2dad78'
    },
    callIcon: {
        color: 'white'
    }
}));

function Item(props) {
    const classes = useStyles();
    const contact = props.item.contactNo;
    const name = props.item.name;
    const tokenId = props.item.tokenId;
    const queueId = props.queueId;
    const userStatus = props.item.userStatus;
    const notifyable = props.item.notifyable;
    const [notifying, setNotifying] = useState(false);
    const [didNotify, setDidNotify] = useState(false);

    const dispatch = useDispatch();
    const onNotifyClick = () => {
        dispatch(progressCreationStep(3));
        setNotifying(true);
        QueueService.notifyUser(queueId, tokenId).then(() => {
            setNotifying(false);
            setDidNotify(true);
        }).catch (err => {
            handleApiErrors(err);
        });
        // Notify user of error TODO
    } 
    const onDeleteClick = () => {
        QueueService.deleteFromQueue(queueId, tokenId)
        .catch (err => {
            handleApiErrors(err);
        });
        props.removeItemHandler(tokenId); // TODO Should delete from list only ofter successfull deletion from db
    }

    var notificationButton = null;
    if (notifying) {
        notificationButton = <IconButton edge="end" color="primary" aria-label="notify">
        <CircularProgress size={18}/>
    </IconButton>
    } else if (!notifyable) {
        notificationButton = <IconButton edge="end" color="primary" aria-label="notify">
            <Notifications color="disabled"/>
        </IconButton>
    } else if (userStatus === "NOTIFIED" || didNotify) {
        notificationButton = <IconButton edge="end" color="primary" aria-label="notified">
            <DoneIcon style={{ color: 'green' }} />
        </IconButton>
    } else if (userStatus === "WAITING") {
        notificationButton = <IconButton edge="end" color="primary" aria-label="notify" onClick={onNotifyClick}>
            <Notifications/>
        </IconButton>
    } else {
        throw Error("invalid state");
    }

    return <ListItem button className= {classes.root} component="a" href={"tel:" + contact}>
        <ListItemAvatar>
            <IconButton className={classes.callButton}>
                <CallIcon className={classes.callIcon}/>
            </IconButton>
        </ListItemAvatar>
        <ListItemText
            primary={name}
        />
        <ListItemSecondaryAction >
        {notificationButton}
        <IconButton edge="end"  color="primary" aria-label="delete" onClick={onDeleteClick} >
            <DeleteIcon/>
        </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
}

export default Item;