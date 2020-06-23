import React from 'react';
import Button from '@material-ui/core/Button';
import styles from '../../styles/buttons.scss';

const StandardButton = (props) => {
  console.log(styles);
  console.log({ styles });
  const { onClick, text } = props;
  return (
    <div className={styles['standard-button']}>
      <Button variant="contained" onClick={onClick}>
        {text}
      </Button>
    </div>
  );
};

export default StandardButton;
x;
