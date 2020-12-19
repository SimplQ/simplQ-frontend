import React from 'react';
import styles from './button.module.scss';

const StandardButton = (props) => {
  const { onClick } = props;
  return (
    <button
      type="submit"
      onClick={onClick}
      className={props.outlined ? styles['standard-button-outlined'] : styles['standard-button']}
    >
      {props.icon ? <div className={styles['icon']}>{props.icon}</div> : null}
      {props.children}
    </button>
  );
};

export default StandardButton;
