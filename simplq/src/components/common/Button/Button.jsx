import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import RefreshIcon from '@material-ui/icons/Refresh';
import styles from './button.module.scss';

const StandardButton = (props) => {
  const { onClick } = props;
  return (
    <button
      type="submit"
      onClick={onClick}
      className={props.outlined ? styles['standard-button-outlined'] : styles['standard-button']}
    >
      {props.children}
    </button>
  );
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

export default StandardButton;
