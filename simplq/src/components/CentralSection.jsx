import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: '300px',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  title: {
    textTransform: 'capitalize',
  },
}));

export default function CentralSection(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={3}>
      {props.heading ? (
        <Typography variant="h4" align="center" gutterBottom className={classes.title}>
          {props.heading}
        </Typography>
      ) : (
        <Skeleton variant="rect" height={40} />
      )}
      {props.children}
    </Paper>
  );
}
