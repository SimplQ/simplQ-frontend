import React from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar, Card } from "@material-ui/core";

function Item(props) {
    return <ListItem button>
        <ListItemAvatar>
            <Avatar>
                <AccountCircleIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText
            primary={props.item.name}
            secondary={props.item.contact}
        />
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
}

function ItemList(props) {
    return (
        <Card >
            <List>
                {props.items.map(item => <Item item={item} key={item.id} />)}
            </List>
        </Card>);
}

export default ItemList;