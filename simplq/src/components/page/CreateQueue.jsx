import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import * as QueueService from '../../services/queue';
import { setQueueName, setQueueId, setCreationStep } from '../../store/appSlice';
import { store } from '../../store'; //TODO: Use Hooks
import { CircularProgress } from '@material-ui/core';
import CreaterStepper from '../stepper/CreaterStepper';
import { handleApiErrors } from '../ErrorHandler';

const styles = (theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(3),
  },
  button: {
    paddingBottom: theme.spacing(3),
    marginTop: theme.spacing(4),
  },
  video: {
    position: 'relative',
    paddingBottom: '56.25%' /* 16:9 */,
    paddingTop: 25,
    height: 0,
  },
  description: {
    textAlign: 'center',
    paddingBottom: theme.spacing(3),
  },
});

class CreateQueue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textFieldValue: '',
      invalidMsg: '', //state variable to display reason for invalid queue name
      createInProgress: false,
    };
  }

  handleClick(queueName) {
    if (this.state.textFieldValue === '') {
      this.setState({ invalidMsg: 'Queue name is required' });
    } else {
      this.setState({ createInProgress: true });
      QueueService.createQueue(queueName)
        .then((response) => {
          store.dispatch(setQueueId(response.queueId));
          store.dispatch(setQueueName(response.queueName));
          store.dispatch(setCreationStep(1));
          this.props.history.push('/admin');
        })
        .catch((err) => {
          handleApiErrors(err);
        });
      this.setState({ createInProgress: false });
    }
  }
  handleTextFieldChange = (e) => {
    const qname = e.target.value;
    if (qname.match('^[A-Za-z0-9-]*$'))
      this.setState({
        textFieldValue: qname,
        invalidMsg: '',
      });
    else {
      this.setState({
        invalidMsg: "Only alphabets, numbers and '-' allowed",
      });
    }
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleClick(this.state.textFieldValue);
    }
  };

  render() {
    const { classes } = this.props;
    store.dispatch(setCreationStep(0));
    return (
      <div className={classes.content}>
        <CreaterStepper />
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
            error={this.state.invalidMsg.length > 0}
            helperText={this.state.invalidMsg.length > 0 ? this.state.invalidMsg : ''}
          />

          <div className={classes.button}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                {this.state.createInProgress ? (
                  <CircularProgress size={30} />
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.handleClick(this.state.textFieldValue)}
                  >
                    Create A queue
                  </Button>
                )}
              </Grid>
            </Grid>
          </div>
        </Container>

        <div className={classes.description}>
          <p
            style={{
              fontFamily: "'Balsamiq Sans'",
              fontSize: '1.5rem',
            }}
          >
            SimplQ provides a means to create and manage virtual queues instantly to help you and
            your customers have a great business experience
          </p>
        </div>

        <div className={classes.video}>
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            title="Home page video"
            src={'https://www.youtube.com/embed/i9w-c3x357A'}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CreateQueue);
