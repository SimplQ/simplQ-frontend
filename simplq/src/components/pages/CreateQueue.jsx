import React from 'react';
import TextField from '@material-ui/core/TextField';
import * as QueueService from '../../services/queue';
import { setQueueName, setQueueId, setCreationStep } from '../../store/appSlice';
import { store } from '../../store'; //TODO: Use Hooks
import { CircularProgress } from '@material-ui/core';
import CreatorStepper from '../stepper/CreatorStepper';
import { handleApiErrors } from '../ErrorHandler';
import { CreateQButton } from '../design/Button.stories';
import styles from '../../styles/createPage.module.scss';
import { StylesProvider } from '@material-ui/core/styles';
import { Header } from '../design/header';

class CreateQueue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textFieldValue: '',
      invalidMsg: '', // state variable to display reason for invalid queue name
      createInProgress: false,
    };
  }

  handleClick = (queueName) => {
    if (this.state.textFieldValue === '') this.setState({ invalidMsg: 'Queue name is required' });
    else {
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
  };

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
    store.dispatch(setCreationStep(0));
    return (
      <div>
        <Header text="SimplQ" />
        <CreatorStepper />
        <StylesProvider injectFirst>
          <TextField
            label="Enter a name for your new queue"
            fullWidth
            required
            variant="outlined"
            value={this.state.textFieldValue}
            onChange={this.handleTextFieldChange}
            onKeyPress={this.handleKeyPress}
            error={this.state.invalidMsg.length > 0}
            helperText={this.state.invalidMsg.length > 0 ? this.state.invalidMsg : ''}
            className={styles.input}
          />
        </StylesProvider>
        <div className={styles['create-button']}>
          {this.state.createInProgress ? (
            <CircularProgress size={30} />
          ) : (
            <CreateQButton onClick={() => this.handleClick(this.state.textFieldValue)}>
              Create A queue
            </CreateQButton>
          )}
        </div>
      </div>
    );
  }
}

export default CreateQueue;
