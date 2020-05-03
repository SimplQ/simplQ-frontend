import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar, Card, Collapse, ListItemIcon, makeStyles } from "@material-ui/core";
import CallIcon from '@material-ui/icons/Call';
import AddIcon from '@material-ui/icons/Add';
import JoinQueueForm from "../JoinQueue/Form";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import QueueService from '../../../services/queue';
import Notifications from '@material-ui/icons/Notifications';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
    joinQueueForm: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    }
}));

function handleDeletion(queueId, tokenId) {
    QueueService.deleteFromQueue(queueId, tokenId);
}

function handleNotification(queueId , tokenId) {
    QueueService.notifyUser(queueId, tokenId);
}

function Item(props) {
    const classes = useStyles();
    const contact = props.item.contact;
    const name = props.item.name;
    const tokenId = props.item.tokenId;
    const queueId = props.queueId;
    return <ListItem button className= {classes.root} component="a" href={"tel:" + contact}>
        <ListItemAvatar>
            <Avatar>
                <CallIcon/>
            </Avatar>
        </ListItemAvatar>
        <ListItemText
            primary={name}
            secondary={contact}
        />
        <ListItemSecondaryAction >
        <IconButton edge="end"  color="primary" aria-label="notify">
            <Notifications onClick={() => handleNotification(queueId, tokenId)}/>
            </IconButton>
            <IconButton edge="end"  color="primary" aria-label="delete">
               <DeleteIcon onClick={() => handleDeletion(queueId, tokenId)} />
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
        listContent = <Skeleton variant="rect" height={48} />
    }
    else if (props.items.length === 0) {
        listContent = <ListItem button>
            <ListItemText primaryTypographyProps={{ align: 'center' }} primary="Waiting for users to join the queue" />
        </ListItem>
    } else {
        listContent = props.items.map(item => <Item item={item} queueId={queueId} key={item.id} />)
    }
    return (
        <Card >
            <List>
                {listContent}
                <ListItem button onClick={() => setOpen(!open)}>
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add User" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <div className={classes.joinQueueForm}>
                        <JoinQueueForm
                            buttonName="Add"
                            afterJoinHandler={props.afterJoinHandler}
                            queueId={queueId}
                        />
                    </div>
                </Collapse>
            </List>
        </Card>);
}

export default ItemList;