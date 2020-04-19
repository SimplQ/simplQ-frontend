import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Item(props) {
    return <ListItem button>
        <ListItemText primary={props.item.name} />
    </ListItem>
}

function ItemList(props) {
    return <>
        <List component="nav">
            {props.items.map(item => <Item item={item} />)}
        </List>
    </>;
}

export default ItemList;