import React from 'react';
import StandardButton from './Button';

export default {
  component: StandardButton,
  title: 'Button',
};

export const CreateQButton = (props) => {
  return (
    <StandardButton onClick={props.onClick} dark>
      Create Queue
    </StandardButton>
  );
};

export const JoinQButton = (props) => {
  return (
    <StandardButton onClick={props.onClick} dark>
      Join Queue
    </StandardButton>
  );
};

export const RefreshButton = (props) => {
  return <StandardButton onClick={props.onClick}>Join Queue</StandardButton>;
};
