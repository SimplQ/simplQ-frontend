import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Routes from './Routes'

function Copyright() {
  return (
    <Typography variant="p" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Flatboys
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    height: '100vh',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            SQ
          </Typography>
        </Toolbar>
      </AppBar>


      <main className={classes.layout}>
        <Routes />
      </main>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </>
  );
}
