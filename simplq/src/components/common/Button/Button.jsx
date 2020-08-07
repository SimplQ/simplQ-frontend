import React from 'react';
import styles from '../../../styles/buttons.module.scss';

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

export default StandardButton;
