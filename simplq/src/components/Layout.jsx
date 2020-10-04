import React from 'react';
import Routes from './Routes';
<<<<<<< HEAD
=======
import Button from '@material-ui/core/Button';
import logo from '../simplQLogo.png';
import { ErrorBoundary } from './ErrorHandler';

const useStyles = makeStyles((theme) => ({
  mainLayout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  logoClass: {
    width: 100,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const handleClick = () => {
  window.location = '/';
};

function Layout() {
  const classes = useStyles();
>>>>>>> upstream/master

function Layout() {
  return (
<<<<<<< HEAD
    <>
      <Routes />
    </>
=======
    <ErrorBoundary>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <Button color="inherit" onClick={() => handleClick()}>
              <img src={logo} className={classes.logoClass} alt="logo" />
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.mainLayout}>
        <Routes />
      </main>
    </ErrorBoundary>
>>>>>>> upstream/master
  );
}

export default Layout;
