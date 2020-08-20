import React from 'react';
import JoinQueueForm from '../Join/Form';
import StandardCollapsible from '../../common/Collapsible';

export default (props) => {
  return (
    <StandardCollapsible text="Add Manually">
      <JoinQueueForm
        buttonName="Add"
        queueId={props.queueId}
        joinQueueHandler={props.joinQueueHandler}
      />
    </StandardCollapsible>
  );
};
