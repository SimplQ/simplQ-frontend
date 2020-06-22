import React from 'react';
import Button from '@material-ui/core/Button';
import styles from '../../styles/buttons.scss';

export const StandardButton = (props) => {
  return (
    <Button variant="contained" onClick={props.onClick} className={styles['standard-button']}>
      {props.text}
    </Button>
  );
};
