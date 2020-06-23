import React from 'react';
import Button from '@material-ui/core/Button';
import '../../styles/buttons.scss';
import { StylesProvider } from '@material-ui/core/styles';

const StandardButton = (props) => {
  const { onClick, text } = props;
  return (
    <StylesProvider injectFirst>
      <Button onClick={onClick} className="standard-button">
        {text}
      </Button>
    </StylesProvider>
  );
};

export default StandardButton;
