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

const useStyles = makeStyles((theme) => ({
    joinQueueForm: {
        padding: theme.spacing(3)
    }
}));

function Item(props) {
    const contact = props.item.contact;
    const name = props.item.name;
    return <ListItem button component="a" href={"tel:" + contact}>
        <ListItemAvatar>
            <Avatar>
                <CallIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText
            primary={name}
            secondary={contact}
        />
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
}

function ItemList(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    var listContent = null;
    if (!props.items || props.items.length === 0) {
        listContent = <ListItem button>
            <ListItemText primaryTypographyProps={{align: 'center'}} primary="Waiting for users to join the queue" />
        </ListItem>
    } else {
        listContent = props.items.map(item => <Item item={item} key={item.id} />)
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
                        afterJoinHandler={() => props.history.push("/admin/" + props.queueId)}
                        queueId={props.queueId}
                    />
                    </div>
                </Collapse>
            </List>
        </Card>);
}

export default ItemList;