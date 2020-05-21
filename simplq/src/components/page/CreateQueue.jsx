import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import QueueService from '../../services/queue';
import { setQueueName, setQueueId, setCreationStep } from '../../store/appSlice';
import { store } from '../../store' //TODO: Use Hooks
import { CircularProgress } from '@material-ui/core';
import CreaterStepper from '../stepper/CreaterStepper';

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
      invalid: false, //state variable to check if text field has valid entry
      createInProgress: false
    }
  }

  handleClick(name) {
    if (this.state.textFieldValue === '') {
      this.setState({ invalid: true });
    }
    else {
      this.setState({ createInProgress: true });
      QueueService.createQueue(name).then(
        queueId => {
          store.dispatch(setQueueId(queueId));
          store.dispatch(setQueueName(name));
          this.setState({ createInProgress: false });
          store.dispatch(setCreationStep(1));
          this.props.history.push("/admin");
        }
      ).catch(err => {
        console.error("Create Queue failed, please try again: ", err);
        this.setState({ createInProgress: false });
      });
    }
  }

  handleTextFieldChange = (e) => {
    this.setState({
      textFieldValue: e.target.value,
      invalid: false
    });
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleClick(this.state.textFieldValue);
    }
  }

  render() {
    const { classes } = this.props;
    store.dispatch(setCreationStep(0));
    return (
      <>
        <CreaterStepper />
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
              error={this.state.invalid}
              helperText={this.state.invalid ? "Queue name is required" : ""}
            />

            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  {this.state.createInProgress ? <CircularProgress size={30} /> :
                    <Button variant="contained" color="primary"
                      onClick={() => this.handleClick(this.state.textFieldValue)}
                    >
                      Create A queue
                  </Button>}
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
