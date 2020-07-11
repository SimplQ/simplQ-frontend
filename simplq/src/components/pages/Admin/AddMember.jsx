import React from 'react';
import { Collapse, ListItemIcon } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import JoinQueueForm from '../Join/Form';

export default (props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Manually" />
        {open ? <ExpandLess /> : <ExpandMore />}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <JoinQueueForm
            buttonName="Add"
            queueId={props.queueId}
            joinQueueHandler={props.joinQueueHandler}
          />
        </Collapse>
      </ListItem>
    </>
  );
};
