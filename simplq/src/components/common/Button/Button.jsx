import React from 'react';
import styles from '../../../styles/buttons.module.scss';

const StandardButton = (props) => {
  const { onClick, text } = props;
  return (
    <button
      type="submit"
      onClick={onClick}
      className={props.className ? props.className : styles['standard-button']}
    >
      {text}
    </button>
  );
};

export default StandardButton;
