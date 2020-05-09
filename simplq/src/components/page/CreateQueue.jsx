import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import QueueService from '../../services/queue';
import { setQueueName, setQueueId } from '../../store/appSlice';
import { store } from '../../store' //TODO: Use Hooks
import { Chip, Avatar, Stepper, Step, StepLabel } from '@material-ui/core';

const styles = (theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  button: {
    marginTop: theme.spacing(4),
  }
});

class CreateQueue extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          textFieldValue: '',
          valid:true //state variable to check if text field has valid entry
      }
  }

  handleClick(name) {
    if(this.state.textFieldValue===''){
      this.setState({
        valid:false
      });
    }
    else{
      QueueService.createQueue(name).then( 
        queueId => store.dispatch(setQueueId(queueId))
      );
      store.dispatch(setQueueId(null))
      store.dispatch(setQueueName(name));
      this.props.history.push("/admin")
    }      
  }

  handleTextFieldChange = (e) => {
    this.setState({
      textFieldValue: e.target.value
    });
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.handleClick(this.state.textFieldValue);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.content}>
          <Container maxWidth="sm">
          <Typography component="h4" variant="h4" color="textPrimary" >
                
                </Typography>
                <Typography component="h1" variant="h5" color="textSecondary" >
            
                </Typography>
                <Typography component="h1" variant="h4" color="textPrimary">
                
                </Typography>
                
          <Stepper style={{marginTop: "20px"}} alternativeLabel>
          <Step key={1} >
            <StepLabel>Create your virtual queue</StepLabel>
          </Step>          
          <Step key={2}>
            <StepLabel>Share the link to invite people  </StepLabel>
          </Step>          
          <Step key={3}>
            <StepLabel>Click on the bell icon and notify people of their turn</StepLabel>
          </Step>

      </Stepper>

              <TextField
                  placeholder="Enter a name for a new queue"
                  fullWidth
                  required
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={this.state.textFieldValue}
                  onChange={this.handleTextFieldChange}
                  onKeyPress={this.handleKeyPress}
                  error = {this.state.valid?false:true}
                  id="standard-error" 
                  helperText = {this.state.valid?"":"Empty Queue Name"}
                />

            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary"
                    onClick={() => this.handleClick(this.state.textFieldValue)}
                  >
                    Create A queue
                      </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(CreateQueue)
