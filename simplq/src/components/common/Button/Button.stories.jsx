import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import RefreshIcon from '@material-ui/icons/Refresh';
import StandardButton from './Button';
import styles from '../../../styles/adminButtons.module.scss';

export default {
  component: StandardButton,
  title: 'Button',
};

export const CreateQButton = (props) => {
  return (
    <StandardButton onClick={props.onClick} dark>
      Create Queue
    </StandardButton>
  );
};

export const JoinQButton = (props) => {
  return (
    <StandardButton onClick={props.onClick} dark>
      Join Queue
    </StandardButton>
  );
};

export const ShareButton = (props) => {
  return (
    <StandardButton onClick={props.onClick}>
      <div className={styles['main-button-content']}>
        <ShareIcon fontSize="large" />
        <p>Share queue to invite people</p>
      </div>
    </StandardButton>
  );
};

export const RefreshButton = (props) => {
  return (
    <StandardButton onClick={props.onClick}>
      <div className={styles['main-button-content']}>
        <RefreshIcon fontSize="large" />
        <p>Refresh</p>
      </div>
    </StandardButton>
  );
};
