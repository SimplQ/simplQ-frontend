import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
}));

function QueueStatus(props) {
    var aheadCount = 10;
    const classes = useStyles()

    return <Container maxWidth="sm" component="main">
        <div className={classes.paper}>
    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
      Title?
    </Typography>
    <Typography variant="h5" align="center" color="textSecondary" component="p">
    There are {aheadCount} people ahead of you. Thanks for waiting!
    </Typography>
    <br />
    <Button variant="contained" color="primary" >
        Refresh
      </Button>
</div>
  </Container>
}

export default QueueStatus