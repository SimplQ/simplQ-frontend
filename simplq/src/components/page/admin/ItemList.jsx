import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

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
    const classes = useStyles();
    return <>
        <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
                Queue Users
          </Typography>
            <div className={classes.demo}>
                <List>
                    {props.items.map(item => <Item item={item} key={item.id}/>)}
                </List>
            </div>
        </Grid>
    </>;
}

export default ItemList;