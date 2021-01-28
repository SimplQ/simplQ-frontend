import React from 'react';
import styles from './button.module.scss';

const StandardButton = (props) => {
  const { onClick } = props;
  return (
    <button reactour-selector={props.tour_tag}
      type="submit"
      onClick={onClick}
      className={props.outlined ? styles['standard-button-outlined'] : styles['standard-button']}
    >
      {props.icon ? <div className={styles['icon']}>{props.icon}</div> : null}
      <div className={styles['text']}>{props.children}</div>
    </button>
  );
};

export default StandardButton;
