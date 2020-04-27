import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar, Card, Typography } from "@material-ui/core";
import CallIcon from '@material-ui/icons/Call';

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
     
    return (
        <Card >
            { !props.items || props.items.length === 0 ? 
                <Typography variant="subtitle1" align="center" style={{margin: "20px 20px"}} gutterBottom>
                    Waiting for users to join the queue
                </Typography>
            :
                <List>
                    {props.items.map(item => <Item item={item} key={item.id} />)}
                </List>
            }
        </Card>);
}

export default ItemList;