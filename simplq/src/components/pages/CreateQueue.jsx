import React from 'react';
import { CircularProgress } from '@material-ui/core';
import * as QueueService from '../../services/queue';
import { setQueueName, setQueueId, setCreationStep } from '../../store/appSlice';
import { store } from '../../store'; // TODO: Use Hooks
import CreatorStepper from '../common/stepper/CreatorStepper';
import { handleApiErrors } from '../ErrorHandler';
import { CreateQButton } from '../common/Button';
import styles from '../../styles/createPage.module.scss';
import { SimplQHeader } from '../common/Header';
import { handleEnterPress, isQueueNameValid } from '../common/utilFns';
import InputField from '../common/InputField';

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
      QueueService.create(queueName)
        .then((response) => {
          store.dispatch(setQueueId(response.queueId));
          store.dispatch(setQueueName(response.queueName));
          store.dispatch(setCreationStep(1));
          this.props.history.push(`/queue/${response.queueId}`);
        })
        .catch((err) => {
          handleApiErrors(err);
        });
      this.setState({ createInProgress: false });
    }
  };

  handleTextFieldChange = (e) => {
    const qname = e.target.value;
    if (isQueueNameValid(qname))
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

  render() {
    store.dispatch(setCreationStep(0));
    return (
      <div>
        <SimplQHeader />
        <CreatorStepper />
        <InputField
          placeholder="Enter a name for your new queue"
          value={this.state.textFieldValue}
          onChange={this.handleTextFieldChange}
          onKeyPress={
            (e) => handleEnterPress(e, () => this.handleClick(this.state.textFieldValue))
            // eslint-disable-next-line react/jsx-curly-newline
          }
          error={this.state.invalidMsg.length > 0}
          helperText={this.state.invalidMsg.length > 0 ? this.state.invalidMsg : ''}
          className={styles.input}
        />
        <div className={styles['create-button']}>
          {this.state.createInProgress ? (
            <CircularProgress size={30} />
          ) : (
            <CreateQButton onClick={() => this.handleClick(this.state.textFieldValue)} />
          )}
        </div>
      </div>
    );
  }
}

export default CreateQueue;
