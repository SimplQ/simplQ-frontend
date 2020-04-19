import React from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
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

function JoinQueue(props) {
    const classes = useStyles()

    return <Container maxWidth="sm" component="main">
        <div className={classes.paper}>
            <TextField
                style={{ margin: 8 }}
                placeholder="Your Name"
                fullWidth
                required
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
                        <TextField
                style={{ margin: 8 }}
                placeholder="Contact Number"
                fullWidth
                required
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
            <br />
            <Button variant="contained" color="primary" >
                Join
  </Button>
        </div>
    </Container>
}

export default JoinQueue