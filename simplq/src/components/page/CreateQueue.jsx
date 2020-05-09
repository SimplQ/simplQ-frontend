import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import QueueService from '../../services/queue';
import { setQueueName, setQueueId, setStep } from '../../store/appSlice';
import { store } from '../../store' //TODO: Use Hooks

const styles = (theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper
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
          invalid: false //state variable to check if text field has valid entry
      }
  }

  handleClick(name) {
    if(this.state.textFieldValue===''){
      this.setState({invalid: true});
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
      textFieldValue: e.target.value,
      invalid: false
    });
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.handleClick(this.state.textFieldValue);
    }
  }

  render() {
    const { classes } = this.props;
    store.dispatch(setStep(0));
    return (
      <>
        <div className={classes.content}>
          <Container maxWidth="sm">
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
                  error = {this.state.invalid}
                  helperText = {this.state.invalid ? "Queue name is required" : ""}
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
