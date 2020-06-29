import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Collapse, ListItemIcon, makeStyles, CircularProgress } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import JoinQueueForm from '../Join/Form';
import Item from './Item';

const useStyles = makeStyles((theme) => ({
  joinQueueForm: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

function ItemList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const queueId = props.queueId;
  let listContent = null;

  if (!props.items) {
    listContent = <CircularProgress style={{ margin: 'auto' }} />;
  } else if (props.items.length === 0) {
    listContent = (
      <>
        <ListItem button>
          <ListItemText
            primaryTypographyProps={{ align: 'center' }}
            primary="Your queue has been created and is currently empty. Waiting for people to join..."
          />
        </ListItem>
      </>
    );
  } else {
    listContent = (
      <div style={{ width: '100%' }}>
        {props.items.map((item) => (
          <Item
            removeItemHandler={props.removeItemHandler}
            item={item}
            queueId={queueId}
            key={item.tokenId}
          />
        ))}
      </div>
    );
  }

  return (
    <List>
      <div style={{ minHeight: '200px', display: 'flex' }}>{listContent}</div>
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
            joinQueueHandler={props.joinQueueHandler}
          />
        </div>
      </Collapse>
    </List>
  );
}

export default ItemList;
