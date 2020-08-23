import React from 'react';
import 'react-awesome-slider/dist/styles.css';
// import styles from '../../../styles/collapsible.module.scss';
import { Collapse, ListItemIcon, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const StandardCollapsible = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item cs={6}>
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
      </Grid>
    </Grid>
  );
};

export default StandardCollapsible;
