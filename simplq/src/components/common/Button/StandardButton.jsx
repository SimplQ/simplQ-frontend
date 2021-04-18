import React from 'react';
import styles from './Button.module.scss';

const StandardButton = (props) => {
  const { onClick, disabled } = props;
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={props.outlined ? styles['standard-button-outlined'] : styles['standard-button']}
    >
      {props.icon ? <div className={styles['icon']}>{props.icon}</div> : null}
      <div className={styles['text']}>{props.children}</div>
    </button>
  );
};

StandardButton.defaultProps = {
  disabled: false,
};

export default StandardButton;
