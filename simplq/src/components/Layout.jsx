import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Routes from './Routes'
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router";

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
  mainLayout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    marginBottom: "auto"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    marginTop: "auto"
  }
}));

const handleClick = (props) => {
      props.history.push("/");
  }

 function Layout(props) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <Button color="inherit" onClick={() => handleClick(props)}>
                SQ
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>


      <main className={classes.mainLayout}>
        <Routes />
      </main>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </>
  );
}

export default withRouter(Layout);