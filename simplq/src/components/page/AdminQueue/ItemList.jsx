import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Card, Collapse, ListItemIcon, makeStyles, CircularProgress } from "@material-ui/core";
import CallIcon from '@material-ui/icons/Call';
import AddIcon from '@material-ui/icons/Add';
import JoinQueueForm from "../JoinQueue/Form";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import QueueService from '../../../services/queue';
import Notifications from '@material-ui/icons/Notifications';
import { useDispatch } from "react-redux";
import { progressStep } from "../../../store/appSlice";

const useStyles = makeStyles((theme) => ({
    joinQueueForm: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
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
    const contact = props.item.contact;
    const name = props.item.name;
    const tokenId = props.item.tokenId;
    const queueId = props.queueId;

    const dispatch = useDispatch();

    const onNotifyClick = () => {
        dispatch(progressStep(3));
        QueueService.notifyUser(queueId, tokenId);

    } 

    const onDeleteClick = () => {
        QueueService.deleteFromQueue(queueId, tokenId)
        props.removeItemHandler(tokenId); // TODO Should delete from list only ofter successfull deletion from db
    }
    return <ListItem button className= {classes.root} component="a" href={"tel:" + contact}>
        <ListItemAvatar>
            <IconButton className={classes.callButton}>
                <CallIcon className={classes.callIcon}/>
            </IconButton>
        </ListItemAvatar>
        <ListItemText
            primary={name}
            secondary={contact}
        />
        <ListItemSecondaryAction >
        <IconButton edge="end"  color="primary" aria-label="notify" onClick={onNotifyClick}>
            <Notifications/>
            </IconButton>
            <IconButton edge="end"  color="primary" aria-label="delete" onClick={onDeleteClick} >
               <DeleteIcon/>
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
}

function ItemList(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const queueId = props.queueId;
    var listContent = null;
    
    if (!props.items){
        listContent = <CircularProgress style={{margin: 'auto'}}/>
    }
    else if (props.items.length === 0) {
        listContent = <>
        <ListItem button>
            <ListItemText primaryTypographyProps={{ align: 'center'}} primary="Your queue has been created and is currenlty empty. Waiting for people to join..." />
        </ListItem>
        </>
    } else {
        listContent = <div style={{width: '100%'}}>
            {props.items.map(item => <Item removeItemHandler={props.removeItemHandler} item={item} queueId={queueId} key={item.tokenId} />)}
            </div>
    }
    
    return (
        <Card >
            <List>
                <div style={{minHeight: '200px', display: 'flex'}}>
                {listContent}
                </div>
                <ListItem button onClick={() => setOpen(!open)}>
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Manually" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <div className={classes.joinQueueForm}>
                        <JoinQueueForm
                            buttonName="Add"
                            queueId={queueId}
                            afterJoin={props.afterJoin}
                        />
                    </div>
                </Collapse>
            </List>
        </Card>);
}

export default ItemList;