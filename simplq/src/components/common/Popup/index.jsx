import React from 'react';
import InfoNotification from './InfoPopup';
import ErrorNotification from './ErrorPopup';

export default () => (
  <>
    <InfoNotification />
    <ErrorNotification />
  </>
);

export { InfoNotification, ErrorNotification };
