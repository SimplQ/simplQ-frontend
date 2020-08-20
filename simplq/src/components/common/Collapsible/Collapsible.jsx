import React from 'react';
import 'react-awesome-slider/dist/styles.css';
import { Collapse, ListItemIcon } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const StandardCollapsible = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary={props.text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {props.children}
      </Collapse>
    </>
  );
};

export default StandardCollapsible;
