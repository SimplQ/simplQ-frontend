import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import { isLoggedIn } from '../../../services/auth';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    background: '#FF8000',
    color: '#FFFFFF',
    top: '0',
    position: 'absolute',
    zIndex: '100',
  },
}));

export default () => {
  const [open, setOpen] = useState(true);
  const [loginStatus, setLoginStatus] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    setLoginStatus(isLoggedIn());
    return () => setLoginStatus(null);
  }, []);
  if (loginStatus !== false) return null;
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Grid container direction="row" justify="space-around" alignItems="center">
          <Grid item>
            <span style={{ fontWeight: 'bold' }}>Temporary queue warning!&emsp;</span>
            <span>
              {
                'Please sign up to make your queue permanent. {Temporary queues will last only for 10 days}'
              }
            </span>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </Grid>
        </Grid>
      </Collapse>
    </div>
  );
};
