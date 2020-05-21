import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Routes from './Routes'
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router";
import logo from "../simplQLogo.png";
import { Stepper, Step, StepLabel } from '@material-ui/core';
import { useSelector } from 'react-redux';

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
    width:100
  },
  footer: {
    backgroundColor: theme.palette.background.paper,   
  }
}));

const handleClick = (props) => {
      props.history.push("/");
  }

 function Layout(props) {
  const classes = useStyles();
  const activeStep = useSelector((state) => state.appReducer.activeStep);
  console.log('Active step:', activeStep)

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <Button color="inherit" onClick={() => handleClick(props)}>
                <img src={logo} className={classes.logoClass} alt="logo"/>
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>


      <main className={classes.mainLayout}>
      <Stepper style={{padding: "50px 5px"}} activeStep={activeStep} alternativeLabel>
          <Step key={1} >
            <StepLabel>Create your virtual queue</StepLabel>
          </Step>          
          <Step key={2}>
            <StepLabel>Share the link to invite people  </StepLabel>
          </Step>          
          <Step key={3}>
            <StepLabel>Notify people of their turn</StepLabel>
          </Step>
      </Stepper>
      <Routes />
      </main>
    </>
  );
}

export default withRouter(Layout);