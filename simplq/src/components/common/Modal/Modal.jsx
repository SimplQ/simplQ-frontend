import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
  root: {
    overflow: 'scroll',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'absolute',
    top: '20%',
    backgroundColor: '#fff',
    borderRadius: '25px',
    outline: 'none',
    width: 400,
    padding: 10,
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      margin: 10,
    },
  },
}));

export default ({ open, onClose, children }) => {
  const classes = style();
  return (
    <Modal className={classes.root} open={open} onClose={onClose}>
      <div className={classes.content}>{children}</div>
    </Modal>
  );
};
