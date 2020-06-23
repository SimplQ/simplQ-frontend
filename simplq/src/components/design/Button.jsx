import React from 'react';
import '../../styles/buttons.scss';

const StandardButton = (props) => {
  const { onClick, text } = props;
  return (
    <button type="button" onClick={onClick} className="standard-button">
      {text}
    </button>
  );
};

export default StandardButton;
