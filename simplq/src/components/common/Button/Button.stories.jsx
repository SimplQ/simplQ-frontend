import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import RefreshIcon from '@material-ui/icons/Refresh';
import StandardButton from './Button';
import styles from '../../../styles/buttons.module.scss';

export default {
  component: StandardButton,
  title: 'Button',
};

export const CreateQueueButton = (props) => {
  return <StandardButton onClick={props.onClick}>Create Queue</StandardButton>;
};

export const ShareButton = (props) => {
  return (
    <StandardButton onClick={props.onClick} outlined={props.outlined}>
      <div className={styles['admin-main-button']}>{props.children}</div>
    </StandardButton>
  );
};

export const RefreshButton = (props) => {
  return (
    <StandardButton onClick={props.onClick} outlined>
      <div className={styles['admin-main-button']}>
        <RefreshIcon />
        <p>Refresh status</p>
      </div>
    </StandardButton>
  );
};

export const ForkOnGithubButton = () => {
  return (
    <StandardButton>
      <a
        className={styles['fork-on-github-button']}
        href="https://github.com/SimplQ/simplQ-frontend"
      >
        <span>Contribute on Github</span>
        <GitHubIcon />
      </a>
    </StandardButton>
  );
};
